'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

interface VideoCtaSectionProps {
  videoSrc: string
  titulo?: string
  subtitulo?: string
}

export default function VideoCtaSection({
  videoSrc,
  titulo = 'Llevamos tu evento al siguiente nivel',
  subtitulo = 'Tu evento está en las mejores manos',
}: VideoCtaSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.0])

  const waUrl =
    'https://wa.me/573132816757?text=' +
    encodeURIComponent('Hola, me gustaría obtener información sobre sus servicios de graderías.')

  return (
    <section ref={sectionRef} className="relative h-[480px] md:h-[560px] overflow-hidden bg-dark flex items-center justify-center">
      {/* Video de fondo */}
      <motion.div className="absolute inset-0" style={{ scale }}>
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Contenido */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-primary font-heading font-bold uppercase tracking-widest text-sm"
        >
          Graderías GRS
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading font-extrabold text-white text-4xl md:text-6xl uppercase leading-tight mt-3 drop-shadow-lg"
        >
          {titulo}
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 mx-auto w-16 h-0.5 bg-primary origin-center"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-5 text-white/80 text-lg font-heading font-semibold"
        >
          {subtitulo}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-heading font-bold px-7 py-3.5 rounded-lg transition-colors text-base"
          >
            <FaWhatsapp size={20} />
            Cotizar ahora
          </a>
          <Link
            href="/contacto"
            className="flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-dark font-heading font-bold px-7 py-3.5 rounded-lg transition-colors text-base"
          >
            Contáctenos
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
