import type { Metadata } from 'next'
import ProyectosGrid from './ProyectosGrid'

export const metadata: Metadata = {
  title: 'Proyectos | Graderías GRS',
  description:
    'Todos los proyectos de Graderías GRS — eventos deportivos, culturales, corporativos y gubernamentales en Colombia y el exterior.',
}

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark py-20 px-4 text-center overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/heroes/proyectos-hero.jpg" alt="" className="w-full h-full object-cover opacity-35" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/30 to-dark/80" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-primary font-heading font-bold uppercase tracking-widest text-xs mb-3">
            Graderías GRS
          </p>
          <h1 className="font-heading font-extrabold text-white text-4xl md:text-6xl leading-tight mb-4">
            Nuestros Proyectos
          </h1>
          <p className="text-white/60 font-heading text-lg">
            Más de 25 años montando los mejores escenarios del país. Filtra por categoría o año para encontrar lo que buscas.
          </p>
        </div>
      </section>

      {/* Grid filtrable */}
      <section className="py-14 bg-light/20">
        <div className="max-w-7xl mx-auto px-4">
          <ProyectosGrid />
        </div>
      </section>
    </>
  )
}
