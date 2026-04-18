import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import QuienesSomos from '@/components/sections/QuienesSomos'
import ProyectosDestacados from '@/components/sections/ProyectosDestacados'
import ProductosGrid from '@/components/sections/ProductosGrid'
import ClientesCarrusel from '@/components/sections/ClientesCarrusel'
import CoberturaNacional from '@/components/sections/CoberturaNacional'
import NosotrosCumpliendo from '@/components/sections/NosotrosCumpliendo'
import ContactoCTA from '@/components/sections/ContactoCTA'
import slides2 from '@/data/slides2'

export const metadata: Metadata = {
  title: 'Graderías GRS — Alquiler y Venta de Graderías en Colombia',
  description:
    'Empresa colombiana con más de 25 años de experiencia en alquiler y venta de graderías, escenarios, cubiertas y mobiliario para eventos deportivos y culturales. Certificados ICC.',
}

export default function HomePage() {
  return (
    <>
      {/* ── Slideshow 1 ── */}
      <Hero />

      {/* ── Slideshow 2 ── */}
      <Hero slides={slides2} />

      <QuienesSomos />
      <ProyectosDestacados />
      <ProductosGrid />
      <ClientesCarrusel />
      <CoberturaNacional />
      <NosotrosCumpliendo />
      <ContactoCTA />
    </>
  )
}
