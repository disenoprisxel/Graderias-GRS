import type { NextConfig } from 'next'

const securityHeaders = [
  // Fuerza HTTPS por 2 años, incluye subdominios
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  // Evita que el sitio sea cargado dentro de un iframe externo (clickjacking)
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  // El navegador no intenta adivinar el tipo de archivo (MIME sniffing)
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // Controla qué información de referencia se envía al navegar
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // Desactiva el prefetch de DNS (evita fugas de información)
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  // Restringe acceso a cámara, micrófono y geolocalización
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  // Elimina la cabecera X-Powered-By que revela que usas Next.js
  {
    key: 'X-Powered-By',
    value: '',
  },
]

const nextConfig: NextConfig = {
  // Aplica los headers de seguridad a todas las rutas
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders.filter((h) => h.value !== ''),
      },
    ]
  },

  // Oculta X-Powered-By (Next.js lo hace nativamente con esta opción)
  poweredByHeader: false,
}

export default nextConfig
