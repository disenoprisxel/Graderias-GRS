import type { Metadata } from 'next'
import { Poppins, Roboto } from 'next/font/google'
import './globals.css'
import TopBar from '@/components/TopBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
})

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Graderías GRS — Alquiler y Venta de Graderías en Colombia',
    template: '%s | Graderías GRS',
  },
  description:
    'Empresa colombiana con más de 25 años de experiencia en alquiler y venta de graderías, escenarios, cubiertas y mobiliario para eventos. Certificados ICC. Cobertura nacional.',
  keywords: [
    'graderías Colombia',
    'alquiler graderías',
    'venta graderías',
    'escenarios para eventos',
    'cubiertas truss',
    'silletería eventos',
    'Graderías GRS',
  ],
  openGraph: {
    siteName: 'Graderías GRS',
    locale: 'es_CO',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${poppins.variable} ${roboto.variable}`}>
      <body className="flex flex-col min-h-screen">
        <TopBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
