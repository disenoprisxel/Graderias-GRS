'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Explicit grid placement — 3 cols, 4 rows (cada fila base = 260px)
const productos = [
  {
    label: 'Alquiler de Graderías',
    href: '/alquiler_de_graderias',
    image: '/images/productos/alquiler-graderias.jpg', // PP-Alquiler3.png
    col: '1', row: '1',
  },
  {
    label: 'Venta de Graderías',
    href: '/venta_de_graderias',
    image: '/images/productos/venta-graderias.jpg',
    col: '2', row: '1 / span 2', // TALL
  },
  {
    label: 'Diseño y Render',
    href: '/diseno-y-produccion',
    image: '/images/productos/diseno-produccion.jpg',
    col: '3', row: '1',
  },
  {
    label: 'Techos de Graderías',
    href: '/techos-de-graderias',
    image: '/images/productos/techos-graderias.jpg',
    col: '1', row: '2',
  },
  {
    label: 'Bancas de Suplentes',
    href: '/bancas-de-madera',
    image: '/images/productos/bancas-madera.jpg',
    col: '3', row: '2',
  },
  {
    label: 'Silletería de Escenarios',
    href: '/silleteria-escenarios',
    image: '/images/productos/silleteria.jpg',
    col: '1', row: '3',
  },
  {
    label: 'Cubiertas en Truss',
    href: '/cubiertas-truss',
    image: '/images/productos/cubiertas-truss.jpg',
    col: '2', row: '3 / span 2', // TALL
  },
  {
    label: 'Pantallas',
    href: '/pantallas-led',
    image: '/images/productos/pantallas-led.jpg',
    col: '3', row: '3',
  },
  {
    label: 'Vallas y Mallas de Encerramiento',
    href: '/vallas-y-barreras',
    image: '/images/productos/vallas-barreras.jpg',
    col: '1', row: '4',
  },
  {
    label: 'Stand Truss',
    href: '/stand-truss',
    image: '/images/productos/stand-truss.jpg',
    col: '3', row: '4',
  },
]

export default function ProductosGrid() {
  return (
    <section className="bg-[#f2f2f2] py-14">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-center mb-8 px-4"
      >
        <p className="text-primary font-heading font-semibold text-base italic">Nuestros</p>
        <h2 className="font-heading font-extrabold text-dark text-4xl uppercase tracking-wide mt-1">
          Productos
        </h2>
        <div className="mt-2 mx-auto w-10 h-0.5 bg-primary" />
        <p className="mt-4 text-body-text text-sm max-w-lg mx-auto">
          Conoce la variedad de productos y servicios que tenemos a tu disposición.
        </p>
      </motion.div>

      {/* ── MÓVIL: grid 2 columnas simples ── */}
      <div className="lg:hidden max-w-lg mx-auto px-4 grid grid-cols-2 gap-3">
        {productos.map((p, i) => (
          <motion.div
            key={`mob-${p.href}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: (i % 2) * 0.08 }}
            className="overflow-hidden bg-white group rounded-sm shadow-sm"
          >
            <Link href={p.href} className="block">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.label}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors duration-400" />
              </div>
              <div className="py-2 px-2 bg-white group-hover:bg-primary transition-colors duration-300 min-h-[44px] flex items-center justify-center">
                <span className="font-heading font-semibold text-primary group-hover:text-white text-xs text-center leading-tight transition-colors duration-300">
                  {p.label}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* ── DESKTOP: bento asimétrico ── */}
      <div
        className="hidden lg:grid max-w-5xl mx-auto px-4"
        style={{
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridAutoRows: '260px',
          gap: '12px',
        }}
      >
        {productos.map((p, i) => (
          <motion.div
            key={`desk-${p.href}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: (i % 3) * 0.1 }}
            style={{ gridColumn: p.col, gridRow: p.row }}
            className="overflow-hidden bg-white group"
          >
            <Link href={p.href} className="block h-full">
              <div className="relative w-full h-[calc(100%-48px)] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.label}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors duration-400" />
              </div>
              <div className="h-12 flex items-center justify-center px-3 bg-white group-hover:bg-primary transition-colors duration-300">
                <span className="font-heading font-semibold text-primary group-hover:text-white text-sm text-center leading-tight transition-colors duration-300">
                  {p.label}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
