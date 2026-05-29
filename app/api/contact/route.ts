import { NextRequest, NextResponse } from 'next/server'

// ── Rate Limiter en memoria ────────────────────────────────────────────────────
// Máximo 5 envíos por IP cada 15 minutos.
// Funciona por instancia del servidor (suficiente para un sitio de bajo tráfico).

interface RateEntry {
  count: number
  resetAt: number
}

const ipMap = new Map<string, RateEntry>()
const RATE_LIMIT_MAX    = 5
const RATE_LIMIT_WINDOW = 15 * 60 * 1000 // 15 minutos en ms

function isRateLimited(ip: string): boolean {
  const now  = Date.now()
  const entry = ipMap.get(ip)

  // Primera solicitud o ventana expirada → reinicia contador
  if (!entry || now > entry.resetAt) {
    ipMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW })
    return false
  }

  // Límite alcanzado
  if (entry.count >= RATE_LIMIT_MAX) return true

  // Incrementa contador
  entry.count++
  return false
}

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'
  )
}

// ── Handler POST ───────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    // ── Rate limit check ──
    const ip = getClientIp(req)
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Demasiadas solicitudes. Intenta de nuevo en 15 minutos.' },
        {
          status: 429,
          headers: {
            'Retry-After': '900',
            'X-RateLimit-Limit': String(RATE_LIMIT_MAX),
          },
        }
      )
    }

    const { nombre, email, telefono, empresa, ciudad, asunto, mensaje, website } = await req.json()

    // ── Honeypot — si viene con datos es un bot, se descarta silenciosamente ──
    if (website) {
      return NextResponse.json({ ok: true }) // respuesta falsa para no delatar el filtro
    }

    // ── Validación básica ──
    if (!nombre || !email || !mensaje) {
      return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
    }

    // ── Envío con Resend ──
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const TO_EMAIL       = process.env.CONTACT_EMAIL || 'graderiasgrs@outlook.com'

    if (!RESEND_API_KEY) {
      console.log('[Contact Form]', { nombre, email, telefono, empresa, ciudad, asunto, mensaje })
      return NextResponse.json({ ok: true })
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Graderías GRS <noreply@graderiasgrs.com>',
        to: [TO_EMAIL],
        reply_to: email,
        subject: `Nuevo mensaje de contacto — ${nombre}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #96CF24; padding: 20px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px;">Graderías GRS</h1>
              <p style="color: white; margin: 4px 0 0; font-size: 14px;">Nuevo mensaje de contacto</p>
            </div>
            <div style="padding: 30px; background: #fff; border: 1px solid #ddd;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding:10px;border-bottom:1px solid #eee;font-weight:bold;width:130px;color:#33373D;">Nombre</td><td style="padding:10px;border-bottom:1px solid #eee;color:#505155;">${nombre}</td></tr>
                <tr><td style="padding:10px;border-bottom:1px solid #eee;font-weight:bold;color:#33373D;">Email</td><td style="padding:10px;border-bottom:1px solid #eee;color:#505155;"><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td style="padding:10px;border-bottom:1px solid #eee;font-weight:bold;color:#33373D;">Tel/Cel</td><td style="padding:10px;border-bottom:1px solid #eee;color:#505155;">${telefono || '—'}</td></tr>
                <tr><td style="padding:10px;border-bottom:1px solid #eee;font-weight:bold;color:#33373D;">Empresa/Evento</td><td style="padding:10px;border-bottom:1px solid #eee;color:#505155;">${empresa || '—'}</td></tr>
                <tr><td style="padding:10px;border-bottom:1px solid #eee;font-weight:bold;color:#33373D;">Ciudad</td><td style="padding:10px;border-bottom:1px solid #eee;color:#505155;">${ciudad || '—'}</td></tr>
                <tr><td style="padding:10px;border-bottom:1px solid #eee;font-weight:bold;color:#33373D;">Asunto</td><td style="padding:10px;border-bottom:1px solid #eee;color:#505155;">${asunto || '—'}</td></tr>
                <tr><td style="padding:10px;font-weight:bold;color:#33373D;vertical-align:top;">Mensaje</td><td style="padding:10px;color:#505155;white-space:pre-wrap;">${mensaje}</td></tr>
              </table>
            </div>
            <div style="background: #33373D; padding: 16px; text-align: center;">
              <p style="color: #aaa; font-size: 12px; margin: 0;">graderiasgrs.com</p>
            </div>
          </div>
        `,
      }),
    })

    if (!res.ok) {
      const err = await res.json()
      console.error('[Resend error]', err)
      return NextResponse.json({ error: 'Error al enviar email' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[Contact API error]', err)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}
