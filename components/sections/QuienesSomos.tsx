'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const videos = [
  { id: '89WA4XXsCx4', titulo: 'Graderías GRS — Video 1' },
  { id: 'SkkOSfV5S2o', titulo: 'Graderías GRS — Video 2' },
]

export default function QuienesSomos() {
  const sectionRef = useRef<HTMLElement>(null)

  // Parallax en la imagen derecha
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['6%', '-6%'])

  return (
    <section id="quienes" ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

        {/* ── Columna izquierda: videos + texto ── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Videos — 1 col en móvil, 2 en tablet+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {videos.map((v) => (
              <div
                key={v.id}
                className="relative aspect-video rounded-lg overflow-hidden shadow-md bg-dark"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.titulo}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Etiqueta + Título */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary font-heading font-bold uppercase tracking-widest text-sm"
          >
            Conoce
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-dark text-3xl md:text-4xl mt-1 leading-tight"
          >
            ¿Quiénes Somos?
          </motion.h2>

          {/* Línea verde */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 mb-5 w-10 h-0.5 bg-primary"
          />

          {/* Párrafos */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-body-text text-sm leading-relaxed text-justify"
          >
            Somos una empresa dedicada a la venta y alquiler de graderías rentables, livianas
            y disponibles en unidades modulares en aluminio y hierro, tarimas, vallas y palcos
            de honor para su servicio a nivel nacional, con más de 25 años en el mercado,
            durante los cuales hemos logrado consolidar clientes satisfechos, quienes siguen
            premiando nuestros esfuerzos por entender sus necesidades y cumplir sus expectativas
            con resultados óptimos en tiempo récord y con los mejores precios del mercado.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-4 text-body-text text-sm leading-relaxed text-justify"
          >
            Graderías y Escenarios GRS cuenta con un amplio portafolio de graderías generales
            o VIP para alquiler o venta, ideales para clientes que necesitan tribunas portátiles
            con acabado profesional, en tamaños estándar o hecho a medida para cumplir con los
            requisitos de uso, con sentaderos en aluminio o silletería tipo estadio, con o sin
            techo, perfectas para adaptarse a cualquier tipo de terreno gracias a nuestros
            tornillos niveladores; por lo que somos reconocidos a nivel nacional al mantener
            los estándares de calidad, durabilidad, seguridad, versatilidad y resistencia,
            dentro de eventos de caracteres masivos, deportivos, culturales, sociales, populares
            y/o privados.{' '}
            <strong className="text-dark">¡NO BUSQUES MÁS!</strong>
          </motion.p>
        </motion.div>

        {/* ── Columna derecha: imagen con parallax ── */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative rounded-lg overflow-hidden shadow-2xl bg-[#f5f5f5]"
          style={{ minHeight: '520px' }}
        >
          <motion.div className="absolute inset-0" style={{ y: imageY }}>
            <Image
              src="/images/quienes-somos.jpg"
              alt="Graderías GRS — Gradería en aluminio"
              fill
              className="object-contain"
              loading="lazy"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
