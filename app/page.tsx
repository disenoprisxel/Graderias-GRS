import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import QuienesSomos from '@/components/sections/QuienesSomos'
import ProductosGrid from '@/components/sections/ProductosGrid'
import ProyectosDestacados from '@/components/sections/ProyectosDestacados'
import ContactoCTA from '@/components/sections/ContactoCTA'

export const metadata: Metadata = {
  title: 'Graderías GRS — Alquiler y Venta de Graderías en Colombia',
  description:
    'Empresa colombiana con más de 25 años de experiencia en alquiler y venta de graderías, escenarios, cubiertas y mobiliario para eventos deportivos y culturales. Certificados ICC.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuienesSomos />
      <ProyectosDestacados />
      <ProductosGrid />
      <ContactoCTA />
    </>
  )
}
