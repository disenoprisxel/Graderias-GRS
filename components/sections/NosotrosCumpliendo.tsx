'use client'

import { motion } from 'framer-motion'
import { FiCheckCircle, FiUserCheck } from 'react-icons/fi'

const items = [
  {
    icono: FiCheckCircle,
    titulo: '100% ALUMINIO',
    descripcion:
      'Graderías elevadas, al piso, con o sin techos, con o sin pasillos, zonas VIP. EN 100% aluminio.',
  },
  {
    icono: FiUserCheck,
    titulo: '100% SEGUROS',
    descripcion:
      'Cumplimos con las normas de seguridad establecidas para que su evento sea un éxito.',
  },
]

export default function NosotrosCumpliendo() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-heading font-extrabold text-dark text-3xl md:text-4xl leading-tight"
        >
          Nosotros Cumpliendo Tus{' '}
          <span className="relative inline-block">
            Sueños
            <span
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"
              aria-hidden="true"
            />
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-5 text-body-text max-w-2xl leading-relaxed"
        >
          Hacemos el montaje de tu evento a la medida de tus necesidades, para esto contamos con materiales:
        </motion.p>

        {/* Feature cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.map(({ icono: Icono, titulo, descripcion }, i) => (
            <motion.div
              key={titulo}
              initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: i * 0.15 }}
              className="flex items-start gap-5"
            >
              {/* Black icon box */}
              <motion.div
                whileHover={{ scale: 1.08, backgroundColor: '#96CF24' }}
                transition={{ duration: 0.25 }}
                className="w-20 h-20 bg-dark rounded-lg flex items-center justify-center shrink-0 cursor-default"
              >
                <Icono className="text-primary" size={36} />
              </motion.div>
              {/* Text */}
              <div>
                <h3 className="font-heading font-bold text-primary text-base uppercase tracking-wide">
                  {titulo}
                </h3>
                <p className="mt-2 text-body-text text-sm leading-relaxed">
                  {descripcion}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
