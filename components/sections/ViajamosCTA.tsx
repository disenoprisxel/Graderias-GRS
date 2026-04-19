'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiMapPin, FiArrowRight } from 'react-icons/fi'

const ciudades = [
  'Bogotá', 'Medellín', 'Barranquilla', 'Cali', 'Cartagena',
  'Bucaramanga', 'Santa Marta', 'Villavicencio', 'Sincelejo', 'Tocancipá',
]

export default function ViajamosCTA() {
  return (
    <section className="relative bg-dark overflow-hidden py-20">

      {/* Fondo de puntos decorativos */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #96CF24 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Línea verde top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* ── Columna izquierda: texto ── */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-primary font-heading font-bold uppercase tracking-widest text-sm mb-4"
            >
              <FiMapPin size={15} />
              Graderías GRS
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="font-heading font-extrabold text-white text-4xl md:text-5xl uppercase leading-tight"
            >
              Viajamos a todo{' '}
              <span className="text-primary">el país</span>
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-4 mb-6 w-14 h-0.5 bg-primary origin-left"
            />

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/75 text-base leading-relaxed max-w-md"
            >
              Contamos con la experiencia de más de{' '}
              <strong className="text-white">25 años</strong> en el montaje de graderías
              en aluminio y hierro a nivel nacional. Formamos parte del sector más importante
              para el desarrollo del país: la pequeña y mediana empresa —{' '}
              <strong className="text-primary">PYME</strong>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-8"
            >
              <Link
                href="/contacto"
                className="inline-flex items-center gap-3 bg-primary hover:bg-[#7db31e] active:bg-[#6a9a1a] text-white font-heading font-bold px-8 py-4 rounded-lg transition-colors text-base group shadow-lg shadow-primary/20"
              >
                Contáctanos
                <FiArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* ── Columna derecha: mapa de ciudades ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {/* Título cobertura */}
            <p className="text-white/40 font-heading font-bold uppercase tracking-widest text-xs mb-5">
              Algunas ciudades donde hemos trabajado
            </p>

            {/* Tags de ciudades */}
            <div className="flex flex-wrap gap-2 mb-8">
              {ciudades.map((ciudad, i) => (
                <motion.span
                  key={ciudad}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.2 + i * 0.05 }}
                  className="flex items-center gap-1.5 bg-white/5 border border-white/10 hover:border-primary hover:bg-primary/10 text-white/80 hover:text-white text-sm font-heading font-semibold px-3 py-1.5 rounded-full transition-colors cursor-default"
                >
                  <FiMapPin size={11} className="text-primary shrink-0" />
                  {ciudad}
                </motion.span>
              ))}
              <span className="flex items-center gap-1.5 bg-primary/20 border border-primary/40 text-primary text-sm font-heading font-bold px-3 py-1.5 rounded-full">
                + muchas más
              </span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
              {[
                { num: '25+',  label: 'Años de\nexperiencia' },
                { num: '500+', label: 'Eventos\nrealizados' },
                { num: '100%', label: 'Cobertura\nnacional' },
              ].map(({ num, label }, i) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.5 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="font-heading font-extrabold text-primary text-2xl md:text-3xl">
                    {num}
                  </div>
                  <div className="text-white/50 text-xs font-heading mt-1 whitespace-pre-line leading-snug">
                    {label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Línea verde bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
    </section>
  )
}
