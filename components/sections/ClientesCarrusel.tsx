'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

// 25 imágenes reales del carrusel (carpeta /images/clientes/)
const clientes = [
  '01','02','03','04','05','06','07','08','09','10',
  '11','12','13','14','15','16','18','19','20','21',
  '22','23','24','26','27',
].map((n) => ({ nombre: `Cliente ${n}`, logo: `/images/clientes/${n}.jpg` }))

// Triplicamos para asegurar loop sin saltos en pantallas anchas
const track = [...clientes, ...clientes, ...clientes]

export default function ClientesCarrusel() {
  return (
    <section className="bg-white py-14 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-center mb-10 px-4"
      >
        <p className="text-primary font-heading font-semibold text-base italic">Nuestros</p>
        <h2 className="font-heading font-extrabold text-dark text-4xl uppercase tracking-wide mt-1">
          Clientes
        </h2>
        <div className="mt-2 mx-auto w-10 h-0.5 bg-primary" />
      </motion.div>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex items-center gap-10 w-max"
          animate={{ x: ['0%', '-33.33%'] }}
          transition={{ duration: 35, ease: 'linear', repeat: Infinity }}
        >
          {track.map((cliente, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center w-36 h-20"
            >
              <Image
                src={cliente.logo}
                alt={cliente.nombre}
                width={130}
                height={70}
                className="object-contain max-h-16 w-auto transition-all duration-300 opacity-90 hover:opacity-100 hover:scale-105"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
