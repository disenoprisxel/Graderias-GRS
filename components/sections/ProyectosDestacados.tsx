'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import { proyectosDestacados } from '@/data/proyectos'

const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function LogoImg({ src, alt }: { src: string; alt: string }) {
  return src.endsWith('.svg') ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className="object-contain max-h-28 w-auto max-w-[225px] drop-shadow-xl"
    />
  ) : (
    <Image
      src={src}
      alt={alt}
      width={225}
      height={120}
      className="object-contain max-h-28 w-auto drop-shadow-xl"
    />
  )
}

export default function ProyectosDestacados() {
  return (
    <section id="proyectos" className="bg-[#1a1a1a]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="py-10 text-center"
      >
        <h2 className="font-heading font-extrabold text-primary text-3xl md:text-4xl uppercase tracking-wider">
          Proyectos Destacados
        </h2>
        <div className="mt-3 mx-auto w-12 h-0.5 bg-light/40" />
      </motion.div>

      {/* Grid — sin gaps para efecto mosaico continuo */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {proyectosDestacados.map((proyecto) => (
          <motion.div key={proyecto.id} variants={cardVariants}>
            <Link
              href={proyecto.href!}
              className="group relative aspect-[4/3] overflow-hidden bg-dark block"
            >
              {/* Imagen de fondo */}
              {proyecto.imagen && (
                <Image
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              )}

              {/* Badge Nuevo */}
              {proyecto.nuevo && (
                <div className="absolute top-3 left-3 z-10 bg-primary text-white font-heading font-bold text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full shadow-lg">
                  Nuevo
                </div>
              )}

              {/* Marca de agua — solo proyectos nuevos */}
              {proyecto.nuevo && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]">
                  <Image
                    src="/images/logo-blanco.png"
                    alt="Graderías GRS"
                    width={260}
                    height={130}
                    className="object-contain opacity-[0.22] select-none"
                  />
                </div>
              )}

              {/* Logo móvil — esquina inferior derecha, visible en móvil para todos los proyectos con logo */}
              {proyecto.logo && (
                <div className="absolute bottom-3 right-3 z-10 md:hidden">
                  {proyecto.logo.endsWith('.svg') ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={proyecto.logo}
                      alt={proyecto.logoAlt ?? proyecto.titulo}
                      className="object-contain h-[50px] w-auto max-w-[125px] drop-shadow-xl"
                    />
                  ) : (
                    <Image
                      src={proyecto.logo}
                      alt={proyecto.logoAlt ?? proyecto.titulo}
                      width={125}
                      height={62}
                      className="object-contain h-[50px] w-auto drop-shadow-xl"
                    />
                  )}
                </div>
              )}

              {/* Overlay verde al hover */}
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {/* Contenido hover — título arriba centrado + logo abajo centrado */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <h3 className="font-heading font-extrabold text-white text-xl md:text-2xl text-center uppercase leading-tight drop-shadow whitespace-pre-line">
                  {proyecto.titulo}
                </h3>

                {proyecto.logo && (
                  <LogoImg src={proyecto.logo} alt={proyecto.logoAlt ?? proyecto.titulo} />
                )}
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Ver todos */}
      <div className="py-8 text-center">
        <Link
          href="/proyectos"
          className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-heading font-bold text-sm uppercase tracking-widest px-8 py-3 rounded-full transition-all duration-200"
        >
          Ver todos los proyectos →
        </Link>
      </div>
    </section>
  )
}
