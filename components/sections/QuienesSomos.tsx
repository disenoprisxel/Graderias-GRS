'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, type Variants } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'

const puntos = [
  'Más de 25 años de experiencia en el sector',
  'Certificación ICC International Code Council',
  'Cobertura a nivel nacional en Colombia',
  'Equipos con los más altos estándares de calidad',
  'Asesoría técnica personalizada para cada evento',
]

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const listItem: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function QuienesSomos() {
  const sectionRef = useRef<HTMLElement>(null)

  // Parallax on the image (moves slightly slower)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['6%', '-6%'])

  return (
    <section id="quienes" ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* ── Text ── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary font-heading font-bold uppercase tracking-widest text-sm"
          >
            ¿Quiénes Somos?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-dark text-3xl md:text-4xl mt-2 leading-tight"
          >
            Empresa líder en graderías y escenarios para eventos en Colombia
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-body-text leading-relaxed"
          >
            Graderías GRS es una empresa colombiana con más de 25 años de experiencia
            en el alquiler y venta de graderías, escenarios, cubiertas y mobiliario
            para todo tipo de eventos deportivos, culturales y corporativos a nivel nacional.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-3 text-body-text leading-relaxed"
          >
            Contamos con la certificación del ICC (International Code Council), lo que garantiza
            que nuestras estructuras cumplen con los más estrictos estándares internacionales
            de seguridad y calidad.
          </motion.p>

          <motion.ul
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mt-6 space-y-3"
          >
            {puntos.map((punto) => (
              <motion.li key={punto} variants={listItem} className="flex items-start gap-3 text-body-text">
                <FiCheckCircle className="text-primary mt-0.5 shrink-0" size={20} />
                <span>{punto}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="/contacto"
              className="bg-primary text-white font-heading font-bold px-6 py-3 rounded hover:bg-[#7db31e] transition-colors"
            >
              Contáctenos
            </a>
            <a
              href="/descargas"
              className="border-2 border-dark text-dark font-heading font-bold px-6 py-3 rounded hover:bg-dark hover:text-white transition-colors"
            >
              Brochures
            </a>
          </motion.div>
        </motion.div>

        {/* ── Image with parallax ── */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative"
        >
          <div className="relative rounded-lg overflow-hidden shadow-2xl aspect-[4/3]">
            <motion.div
              className="absolute inset-0"
              style={{ y: imageY }}
            >
              <Image
                src="/images/quienes-somos.jpg"
                alt="Graderías GRS — Quiénes somos"
                fill
                className="object-cover scale-110"
                loading="lazy"
              />
            </motion.div>
          </div>
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute -bottom-6 -left-6 bg-primary text-white rounded-xl p-5 shadow-xl text-center"
          >
            <div className="font-heading font-extrabold text-4xl leading-none">25+</div>
            <div className="font-heading font-semibold text-sm uppercase mt-1">Años de<br />Experiencia</div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
