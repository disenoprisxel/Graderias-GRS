import Image from 'next/image'
import Link from 'next/link'
import { FiChevronRight } from 'react-icons/fi'
import GaleriaLightbox from '@/components/ui/GaleriaLightbox'
import VideoCarousel from '@/components/ui/VideoCarousel'
import CaracteristicasGrid from '@/components/ui/CaracteristicasGrid'
import ViajamosCTA from '@/components/sections/ViajamosCTA'

interface ProductoPageProps {
  titulo: string
  descripcion: string
  descripcionLarga: string[]
  imagen: string
  imagenDestacada?: string
  caracteristicas?: string[]
  galeria?: string[]
  videos?: string[]
  watermark?: string
  watermarkHero?: boolean
}

export default function ProductoPage({
  titulo,
  descripcion,
  descripcionLarga,
  imagen,
  imagenDestacada,
  caracteristicas = [],
  galeria = [],
  videos = [],
  watermark,
  watermarkHero = false,
}: ProductoPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 md:h-96 bg-dark overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imagen} alt={titulo} className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
        {watermarkHero && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]">
            <Image
              src="/images/logo-blanco.png"
              alt="Graderías GRS"
              width={320}
              height={160}
              className="object-contain opacity-[0.22] select-none"
            />
          </div>
        )}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1 text-light/70 text-sm mb-4">
            <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
            <FiChevronRight className="text-light/50" />
            <span className="text-white">{titulo}</span>
          </nav>
          <h1 className="font-heading font-extrabold text-white text-3xl md:text-5xl drop-shadow-lg">
            {titulo}
          </h1>
          <p className="mt-3 text-primary font-heading font-semibold text-lg max-w-2xl">
            {descripcion}
          </p>
        </div>
      </section>

      {/* Imagen destacada */}
      {imagenDestacada && (
        <section className="bg-[#111] w-full">
          <div className="relative w-full max-h-[680px] overflow-hidden flex items-center justify-center">
            <Image
              src={imagenDestacada}
              alt={`${titulo} — vista destacada`}
              width={1920}
              height={1080}
              className="w-full h-auto max-h-[680px] object-contain"
              priority
            />
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {descripcionLarga.map((parrafo, i) => (
            <p key={i} className="text-body-text leading-relaxed mb-4 text-lg">
              {parrafo}
            </p>
          ))}

          <CaracteristicasGrid items={caracteristicas} />
        </div>
      </section>

      {/* Gallery con Lightbox */}
      {galeria.length > 0 && (
        <section className="pb-16 bg-light/30">
          <div className="max-w-7xl mx-auto px-4 pt-8">
            <h2 className="font-heading font-bold text-dark text-2xl mb-6 text-center">
              Galería de Imágenes
            </h2>
            <GaleriaLightbox images={galeria} titulo={titulo} watermark={watermark} />
          </div>
        </section>
      )}

      {/* Videos */}
      {videos.length > 0 && (
        <section className="py-12 bg-[#111]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-heading font-bold text-white text-2xl mb-8 text-center">
              Videos
            </h2>
            <VideoCarousel videos={videos} />
          </div>
        </section>
      )}

      <ViajamosCTA />
    </>
  )
}
