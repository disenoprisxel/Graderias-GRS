import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import HorizontalStrip from '@/components/ui/HorizontalStrip'
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

      {/* ── Encabezado Novedades ── */}
      <div className="bg-dark pt-8 pb-4 text-center">
        <p className="text-primary font-heading font-bold uppercase tracking-widest text-xs mb-1">
          Graderías GRS
        </p>
        <h2 className="font-heading font-extrabold text-white text-2xl md:text-3xl uppercase tracking-wide">
          Novedades <span className="text-primary">2025 — 2026</span>
        </h2>
        <div className="mt-3 mx-auto w-10 h-0.5 bg-primary" />
      </div>

      {/* ── Strip de proyectos recientes ── */}
      <HorizontalStrip slides={slides2} />

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
