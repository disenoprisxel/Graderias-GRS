import Image from 'next/image'
import Link from 'next/link'
import { FiChevronRight } from 'react-icons/fi'
import ViajamosCTA from '@/components/sections/ViajamosCTA'

interface ProductoPageProps {
  titulo: string
  descripcion: string
  descripcionLarga: string[]
  imagen: string
  caracteristicas?: string[]
  galeria?: string[]
}

export default function ProductoPage({
  titulo,
  descripcion,
  descripcionLarga,
  imagen,
  caracteristicas = [],
  galeria = [],
}: ProductoPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 md:h-96 bg-dark overflow-hidden">
        <Image
          src={imagen}
          alt={titulo}
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
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

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {descripcionLarga.map((parrafo, i) => (
            <p key={i} className="text-body-text leading-relaxed mb-4 text-lg">
              {parrafo}
            </p>
          ))}

          {caracteristicas.length > 0 && (
            <div className="mt-10">
              <h2 className="font-heading font-bold text-dark text-2xl mb-6">
                Características
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {caracteristicas.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 bg-light/50 rounded-lg p-4 text-body-text"
                  >
                    <span className="text-primary font-bold mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Gallery */}
      {galeria.length > 0 && (
        <section className="pb-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-heading font-bold text-dark text-2xl mb-6 text-center">
              Galería de Imágenes
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galeria.map((src, i) => (
                <div key={i} className="relative aspect-square rounded-lg overflow-hidden bg-dark">
                  <Image
                    src={src}
                    alt={`${titulo} — imagen ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <ViajamosCTA />
    </>
  )
}
