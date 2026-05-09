import type { Metadata } from 'next'
import Link from 'next/link'
import { FiChevronRight } from 'react-icons/fi'
import CaracteristicasGrid from '@/components/ui/CaracteristicasGrid'
import GaleriaLightbox from '@/components/ui/GaleriaLightbox'
import ViajamosCTA from '@/components/sections/ViajamosCTA'

export const metadata: Metadata = {
  title: 'Pantallas y Circuito Cerrado de Transmisión | Graderías GRS',
  description:
    'Alquiler de pantallas LED y circuito cerrado de transmisión para eventos, conciertos y escenarios en Colombia. Alta resolución para interiores y exteriores.',
}

const galeria = Array.from({ length: 4 }, (_, i) => {
  const n = String(i + 1).padStart(3, '0')
  return `/images/productos/pantallas/${n}.jpg`
})

const videos = [
  '/videos/pantallas-v001.mp4',
  '/videos/pantallas-v002.mp4',
  '/videos/pantallas-v003.mp4',
]

const caracteristicas = [
  'Módulos LED de alta resolución',
  'Disponibles para interior y exterior',
  'Alta luminosidad (hasta 6.000 nits)',
  'Configuraciones de cualquier tamaño',
  'Circuito cerrado de transmisión',
  'Operación técnica incluida',
  'Conexión HDMI, DVI, SDI',
  'Soporte técnico en tiempo real',
]

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 md:h-96 bg-dark overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/productos/pantallas/001.jpg" alt="Pantallas y Circuito Cerrado de Transmisión — Graderías GRS" className="absolute inset-0 w-full h-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <nav className="flex items-center gap-1 text-light/70 text-sm mb-4">
            <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
            <FiChevronRight className="text-light/50" />
            <span className="text-white">Pantallas y Circuito Cerrado</span>
          </nav>
          <h1 className="font-heading font-extrabold text-white text-2xl md:text-5xl drop-shadow-lg leading-tight">
            Pantallas y Circuito Cerrado<br className="hidden md:block" /> de Transmisión
          </h1>
          <p className="mt-3 text-primary font-heading font-semibold text-lg max-w-2xl">
            Su evento en las mejores manos...
          </p>
        </div>
      </section>

      {/* Descripción + Características */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-body-text leading-relaxed mb-4 text-lg">
            Graderías GRS ofrece el alquiler de pantallas LED de alta resolución y sistemas de circuito cerrado de transmisión para todo tipo de eventos. Contamos con módulos para configurar pantallas de cualquier tamaño, adaptadas al espacio y las necesidades de cada evento.
          </p>
          <p className="text-body-text leading-relaxed mb-4 text-lg">
            Nuestras pantallas están disponibles tanto para interiores como para exteriores, con alta luminosidad que garantiza una visualización perfecta en cualquier condición de iluminación ambiente. El circuito cerrado de transmisión permite llevar la señal de video a múltiples puntos del recinto en tiempo real.
          </p>
          <p className="text-body-text leading-relaxed mb-4 text-lg">
            El servicio incluye operación técnica del equipo, soporte durante el evento y conexión con sistemas de señal de video y transmisión. Ideales para conciertos, eventos deportivos, corporativos y culturales a nivel nacional.
          </p>

          <CaracteristicasGrid items={caracteristicas} />
        </div>
      </section>

      {/* Videos */}
      <section className="py-14 bg-[#111]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <span className="w-8 h-px bg-primary" />
            <h2 className="font-heading font-bold text-white text-2xl text-center">
              Videos en Acción
            </h2>
            <span className="w-8 h-px bg-primary" />
          </div>
          <div className={`grid gap-5 ${videos.length === 1 ? 'grid-cols-1 max-w-2xl mx-auto' : videos.length === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-3'}`}>
            {videos.map((src, i) => (
              <div key={i} className="rounded-xl overflow-hidden bg-black shadow-xl shadow-black/40 aspect-video">
                <video
                  src={src}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="pb-16 bg-light/30">
        <div className="max-w-7xl mx-auto px-4 pt-8">
          <h2 className="font-heading font-bold text-dark text-2xl mb-6 text-center">
            Galería de Imágenes
          </h2>
          <GaleriaLightbox images={galeria} titulo="Pantallas y Circuito Cerrado" />
        </div>
      </section>

      <ViajamosCTA />
    </>
  )
}
