'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'

const proyectos = [
  {
    titulo: 'Pista de BMX Tocancipá',
    href: '/pista_bmx_tocancipa',
    image: '/images/proyectos/bmx-tocancipa.jpg',
  },
  {
    titulo: 'Estadio de Béisbol Sincelejo',
    href: '/venta_de_silleteria_sincelejo',
    image: '/images/proyectos/sincelejo.jpg',
  },
  {
    titulo: 'Fuxion Puerta de Oro 2024',
    href: '/fuxion2024',
    image: '/images/proyectos/fuxion2024.jpg',
  },
  {
    titulo: 'Visita del Papa Francisco',
    href: '/visita-del-papa-francisco',
    image: '/images/proyectos/papa-francisco.jpg',
  },
  {
    titulo: 'Copa Davis — Colombia vs Turquía',
    href: '/copa-davis-colombia-turkia',
    image: '/images/proyectos/copa-davis.jpg',
  },
  {
    titulo: 'Copa Claro Colsanitas',
    href: '/copa-claro-colsanitas',
    image: '/images/proyectos/colsanitas.jpg',
  },
  {
    titulo: 'Juegos Centroamericanos y del Caribe',
    href: '/juegos-centroamericanos-y-del-caribe',
    image: '/images/proyectos/juegos-centroamericanos.jpg',
  },
  {
    titulo: 'Juegos Centroam. Barranquilla',
    href: '/juegos-centroamericanos-y-del-caribe-barranquilla',
    image: '/images/proyectos/barranquilla.jpg',
  },
  {
    titulo: 'Estadio Aguilas Doradas',
    href: '/estadio-aguilas-doradas',
    image: '/images/proyectos/aguilas-doradas.jpg',
  },
]

const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
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
        {proyectos.map((proyecto) => (
          <motion.div key={proyecto.href} variants={cardVariants}>
            <Link
              href={proyecto.href}
              className="group relative aspect-[4/3] overflow-hidden bg-dark block"
            >
              {/* Imagen */}
              <Image
                src={proyecto.image}
                alt={proyecto.titulo}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {/* Título */}
              <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <h3 className="font-heading font-extrabold text-white text-xl md:text-2xl text-center uppercase leading-tight drop-shadow">
                  {proyecto.titulo}
                </h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
