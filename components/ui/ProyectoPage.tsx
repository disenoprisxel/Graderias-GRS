import Image from 'next/image'
import Link from 'next/link'
import { FiChevronRight } from 'react-icons/fi'
import ContactoCTA from '@/components/sections/ContactoCTA'
import ComparisonSlider from '@/components/ui/ComparisonSlider'
import GaleriaLightbox from '@/components/ui/GaleriaLightbox'
import VideoCtaSection from '@/components/ui/VideoCtaSection'

interface ProyectoPageProps {
  titulo: string
  descripcion: string
  lugar: string
  año: string
  descripcionLarga: string[]
  imagen: string
  galeria?: string[]
  datos?: { label: string; valor: string }[]
  comparacion?: { antes: string; despues: string; labelAntes?: string; labelDespues?: string }
  videoCta?: string
}

export default function ProyectoPage({
  titulo,
  descripcion,
  lugar,
  año,
  descripcionLarga,
  imagen,
  galeria = [],
  datos = [],
  comparacion,
  videoCta,
}: ProyectoPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative h-80 md:h-[500px] bg-dark overflow-hidden">
        <Image
          src={imagen}
          alt={titulo}
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-10 px-4 max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1 text-light/70 text-sm mb-3">
            <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
            <FiChevronRight className="text-light/50" />
            <Link href="/#proyectos" className="hover:text-primary transition-colors">Proyectos</Link>
            <FiChevronRight className="text-light/50" />
            <span className="text-white">{titulo}</span>
          </nav>
          <h1 className="font-heading font-extrabold text-white text-3xl md:text-5xl drop-shadow-lg leading-tight">
            {titulo}
          </h1>
          <p className="mt-2 text-primary font-heading font-semibold text-lg">
            {lugar} &mdash; {año}
          </p>
        </div>
      </section>

      {/* Content + Datos */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Description */}
          <div className="lg:col-span-2">
            <p className="text-primary font-heading font-bold uppercase tracking-widest text-sm mb-2">
              Descripción del proyecto
            </p>
            {descripcionLarga.map((parrafo, i) => (
              <p key={i} className="text-body-text leading-relaxed mb-4 text-lg">
                {parrafo}
              </p>
            ))}
          </div>

          {/* Ficha técnica */}
          {datos.length > 0 && (
            <div>
              <div className="bg-light/50 rounded-xl p-6 sticky top-24">
                <h3 className="font-heading font-bold text-dark text-lg mb-4 border-b border-light pb-3">
                  Ficha del Proyecto
                </h3>
                <dl className="space-y-3">
                  {datos.map(({ label, valor }) => (
                    <div key={label}>
                      <dt className="text-xs text-body-text/60 uppercase tracking-wide font-heading">{label}</dt>
                      <dd className="font-heading font-semibold text-dark mt-0.5">{valor}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Comparison Slider */}
      {comparacion && (
        <section className="py-14 bg-[#1a1a1a]">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="font-heading font-bold text-white text-2xl mb-2 text-center">
              Render 3D vs Construcción Final
            </h2>
            <p className="text-center text-light/50 text-sm font-heading mb-8">
              Del diseño a la realidad
            </p>
            <ComparisonSlider
              antes={comparacion.antes}
              despues={comparacion.despues}
              labelAntes={comparacion.labelAntes}
              labelDespues={comparacion.labelDespues}
            />
          </div>
        </section>
      )}

      {/* Gallery con Lightbox */}
      {galeria.length > 0 && (
        <section className="pb-16 bg-light/30">
          <div className="max-w-7xl mx-auto px-4 pt-8">
            <h2 className="font-heading font-bold text-dark text-2xl mb-6 text-center">
              Galería del Proyecto
            </h2>
            <GaleriaLightbox images={galeria} titulo={titulo} />
          </div>
        </section>
      )}

      {/* Video CTA */}
      {videoCta && (
        <VideoCtaSection videoSrc={videoCta} />
      )}

      <ContactoCTA />
    </>
  )
}
