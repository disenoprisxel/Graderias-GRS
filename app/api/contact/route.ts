import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { nombre, email, telefono, mensaje } = await req.json()

    // Basic validation
    if (!nombre || !email || !mensaje) {
      return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
    }

    // Send via Resend (requires RESEND_API_KEY env variable)
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const TO_EMAIL = process.env.CONTACT_EMAIL || 'info@graderiasgrs.com'

    if (!RESEND_API_KEY) {
      // In development without API key: log and return success
      console.log('[Contact Form]', { nombre, email, telefono, mensaje })
      return NextResponse.json({ ok: true })
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Graderías GRS Web <noreply@graderiasgrs.com>',
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
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 120px; color: #33373D;">Nombre</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; color: #505155;">${nombre}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #33373D;">Email</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; color: #505155;"><a href="mailto:${email}">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #33373D;">Teléfono</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; color: #505155;">${telefono || 'No especificado'}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; font-weight: bold; color: #33373D; vertical-align: top;">Mensaje</td>
                  <td style="padding: 10px; color: #505155; white-space: pre-wrap;">${mensaje}</td>
                </tr>
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
