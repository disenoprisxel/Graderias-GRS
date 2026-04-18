'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, type Variants } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

const statsData = [
  { num: '25+', label: 'Años de experiencia' },
  { num: '500+', label: 'Eventos realizados' },
  { num: '100%', label: 'Certificados ICC' },
  { num: '24/7', label: 'Soporte técnico' },
]

const btnVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const btnItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function ContactoCTA() {
  const sectionRef = useRef<HTMLElement>(null)

  // Parallax on the dot pattern
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const patternY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  const waUrl =
    'https://wa.me/573132816757?text=' +
    encodeURIComponent('Hola, me gustaría obtener información sobre sus servicios de graderías.')

  return (
    <section ref={sectionRef} className="py-24 bg-dark text-white relative overflow-hidden">
      {/* Parallax decorative pattern */}
      <motion.div
        className="absolute inset-0 opacity-5 scale-110"
        style={{
          y: patternY,
          backgroundImage: 'repeating-linear-gradient(45deg, #96CF24 0, #96CF24 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-primary font-heading font-bold uppercase tracking-widest text-sm"
        >
          ¿Listo para cotizar?
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading font-extrabold text-white text-3xl md:text-5xl mt-3 leading-tight"
        >
          Su evento en las mejores manos
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-light/80 text-lg max-w-2xl mx-auto"
        >
          Contáctenos hoy y reciba asesoría personalizada para su evento.
          Más de 25 años respaldando los mejores eventos de Colombia.
        </motion.p>

        <motion.div
          variants={btnVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            variants={btnItem}
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            className="flex items-center gap-3 bg-[#25D366] text-white font-heading font-bold px-8 py-4 rounded-lg hover:bg-[#128C7E] transition-colors text-lg w-full sm:w-auto justify-center"
          >
            <FaWhatsapp size={24} />
            WhatsApp
          </motion.a>
          <motion.a
            variants={btnItem}
            href="/contacto"
            whileHover={{ scale: 1.04 }}
            className="flex items-center gap-3 bg-primary text-white font-heading font-bold px-8 py-4 rounded-lg hover:bg-[#7db31e] transition-colors text-lg w-full sm:w-auto justify-center"
          >
            <FiMail size={22} />
            Enviar mensaje
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-white/10 pt-12"
        >
          {statsData.map(({ num, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
              className="text-center"
            >
              <div className="font-heading font-extrabold text-primary text-4xl">{num}</div>
              <div className="text-light/70 text-sm mt-1 font-heading">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
