'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, type Variants } from 'framer-motion'
import { FiUsers, FiGrid, FiCalendar } from 'react-icons/fi'

const stats = [
  { icono: FiUsers,    numero: '387',    label: 'Clientes a nivel\nNacional' },
  { icono: FiGrid,     numero: '+12,000', label: 'Puestos de\ngradería VIP y\ngeneral' },
  { icono: FiCalendar, numero: '+216',    label: 'Eventos\nrealizados en el\nrecorrido del año' },
]

const statVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}
const statItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function CoberturaNacional() {
  const sectionRef = useRef<HTMLElement>(null)

  // Parallax background
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%'])

  return (
    <section ref={sectionRef} className="relative py-20 bg-[#1a1a1a] overflow-hidden">
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 scale-125"
        style={{ y: bgY }}
      >
        <Image
          src="/images/cobertura-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
        />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        {/* Card central */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-[#222] rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-2xl"
        >
          {/* Texto + stats */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-heading font-extrabold text-white text-3xl md:text-4xl uppercase leading-tight"
            >
              Llevamos tu evento al<br />siguiente nivel
            </motion.h2>
            <div className="mt-4 w-8 h-0.5 bg-primary" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-5 text-light/70 text-sm leading-relaxed"
            >
              Hemos vendido y alquilado graderías en hierro y aluminio, tarimas,
              vallas y palcos de honor para el servicio de clientes a nivel nacional,
              con más de 20 años en el mercado, logramos:
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={statVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="mt-8 flex flex-wrap gap-6"
            >
              {stats.map(({ icono: Icono, numero, label }) => (
                <motion.div key={numero} variants={statItem} className="flex flex-col items-start">
                  <Icono className="text-primary mb-2" size={28} />
                  <span className="font-heading font-extrabold text-primary text-2xl leading-none">
                    {numero}
                  </span>
                  <span className="text-light/60 text-xs mt-1 leading-snug whitespace-pre-line">
                    {label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mapa de Colombia */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative min-h-72 md:min-h-0 bg-[#1e1e2e]"
          >
            <Image
              src="/images/mapa-colombia.png"
              alt="Cobertura nacional — Mapa de Colombia"
              fill
              className="object-contain p-6"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Estrella decorativa */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 text-center mt-6 text-white/30 text-2xl"
      >
        ★
      </motion.div>
    </section>
  )
}
