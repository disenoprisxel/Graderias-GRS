'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FiChevronRight, FiCheck, FiWind, FiAnchor } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import GaleriaLightbox from '@/components/ui/GaleriaLightbox'
import ViajamosCTA from '@/components/sections/ViajamosCTA'

const galeriaMoviles = Array.from({ length: 13 }, (_, i) => {
  const n = String(i + 1).padStart(3, '0')
  return `/images/productos/techos-moviles/${n}.jpg`
})

const galeriaFijos = Array.from({ length: 34 }, (_, i) => {
  const n = String(i + 1).padStart(3, '0')
  return `/images/productos/techos-fijos/${n}.jpg`
})

const caracteristicasMoviles = [
  'Estructura en aluminio ligero',
  'Montaje y desmontaje en horas',
  'Lona tensada o policarbonato',
  'Resistente a lluvia y viento',
  'Ideal para eventos temporales',
  'Transporte a nivel nacional',
  'Diferentes colores disponibles',
  'Alquiler o venta',
]

const caracteristicasFijos = [
  'Estructura metálica galvanizada',
  'Cubierta permanente de larga duración',
  'Diseño integrado a la gradería',
  'Certificación estructural NSR-10',
  'Resistencia a cargas de viento',
  'Capacidad para grades envergaduras',
  'Solución permanente para estadios',
  'Asesoría técnica y estructural',
]

type Tab = 'moviles' | 'fijos'

export default function Page() {
  const [tab, setTab] = useState<Tab>('moviles')

  return (
    <>
      {/* Hero */}
      <section className="relative h-72 md:h-[420px] bg-dark overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <Image
              src={tab === 'moviles'
                ? '/images/productos/techos-moviles/003.jpg'
                : '/images/productos/techos-fijos/001.jpg'}
              alt={tab === 'moviles' ? 'Techos Móviles' : 'Techos Fijos'}
              fill
              className="object-cover opacity-55"
              priority
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/75" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <nav className="flex items-center gap-1 text-light/70 text-sm mb-4">
            <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
            <FiChevronRight className="text-light/50" />
            <span className="text-white">Techos de Graderías</span>
          </nav>
          <h1 className="font-heading font-extrabold text-white text-3xl md:text-5xl drop-shadow-lg">
            Techos de Graderías
          </h1>
          <p className="mt-3 text-primary font-heading font-semibold text-lg max-w-2xl">
            Su evento en las mejores manos...
          </p>

          {/* Instrucción visual */}
          <p className="mt-8 text-white/50 text-xs font-heading uppercase tracking-widest flex items-center gap-2">
            <span className="inline-block w-6 h-px bg-white/30" />
            Selecciona el tipo de techo
            <span className="inline-block w-6 h-px bg-white/30" />
          </p>

          {/* Tab selector */}
          <div className="mt-3 flex items-stretch gap-3">
            {/* Botón Móviles */}
            <motion.button
              onClick={() => setTab('moviles')}
              initial={{ opacity: 0, y: 20 }}
              animate={tab === 'moviles'
                ? { opacity: 1, y: 0, scale: 1.05 }
                : {
                    opacity: 1, y: 0, scale: 1,
                    boxShadow: [
                      '0 0 0px 0px rgba(150,207,36,0)',
                      '0 0 0px 6px rgba(150,207,36,0.25)',
                      '0 0 0px 0px rgba(150,207,36,0)',
                    ],
                  }
              }
              transition={tab === 'moviles'
                ? { duration: 0.3 }
                : { opacity: { duration: 0.5, delay: 0.1 }, y: { duration: 0.5, delay: 0.1 }, boxShadow: { duration: 2, repeat: Infinity, repeatDelay: 0.8, ease: 'easeInOut' } }
              }
              whileHover={{ scale: tab === 'moviles' ? 1.05 : 1.06 }}
              whileTap={{ scale: 0.97 }}
              className={`flex flex-col items-center gap-2 px-9 py-5 rounded-2xl font-heading font-extrabold text-base border-2 transition-colors duration-300 ${
                tab === 'moviles'
                  ? 'bg-primary border-primary text-white shadow-xl shadow-primary/40'
                  : 'bg-black/40 border-white/20 text-white/80 backdrop-blur-sm'
              }`}
            >
              <motion.span
                animate={tab !== 'moviles' ? { rotate: [0, -8, 8, -4, 0] } : { rotate: 0 }}
                transition={tab !== 'moviles' ? { duration: 0.6, repeat: Infinity, repeatDelay: 2.2, ease: 'easeInOut' } : {}}
              >
                <FiWind size={22} className={tab === 'moviles' ? 'text-white' : 'text-primary'} />
              </motion.span>
              <span>Techos Móviles</span>
              <span className={`text-[10px] font-heading font-semibold uppercase tracking-wider mt-0.5 ${tab === 'moviles' ? 'text-white/80' : 'text-white/40'}`}>
                Soluciones temporales
              </span>
            </motion.button>

            {/* Botón Fijos */}
            <motion.button
              onClick={() => setTab('fijos')}
              initial={{ opacity: 0, y: 20 }}
              animate={tab === 'fijos'
                ? { opacity: 1, y: 0, scale: 1.05 }
                : {
                    opacity: 1, y: 0, scale: 1,
                    boxShadow: [
                      '0 0 0px 0px rgba(150,207,36,0)',
                      '0 0 0px 6px rgba(150,207,36,0.25)',
                      '0 0 0px 0px rgba(150,207,36,0)',
                    ],
                  }
              }
              transition={tab === 'fijos'
                ? { duration: 0.3 }
                : { opacity: { duration: 0.5, delay: 0.2 }, y: { duration: 0.5, delay: 0.2 }, boxShadow: { duration: 2, repeat: Infinity, repeatDelay: 0.8, delay: 1.4, ease: 'easeInOut' } }
              }
              whileHover={{ scale: tab === 'fijos' ? 1.05 : 1.06 }}
              whileTap={{ scale: 0.97 }}
              className={`flex flex-col items-center gap-2 px-9 py-5 rounded-2xl font-heading font-extrabold text-base border-2 transition-colors duration-300 ${
                tab === 'fijos'
                  ? 'bg-primary border-primary text-white shadow-xl shadow-primary/40'
                  : 'bg-black/40 border-white/20 text-white/80 backdrop-blur-sm'
              }`}
            >
              <motion.span
                animate={tab !== 'fijos' ? { y: [0, -3, 0] } : { y: 0 }}
                transition={tab !== 'fijos' ? { duration: 0.5, repeat: Infinity, repeatDelay: 2.5, ease: 'easeInOut' } : {}}
              >
                <FiAnchor size={22} className={tab === 'fijos' ? 'text-white' : 'text-primary'} />
              </motion.span>
              <span>Techos Fijos</span>
              <span className={`text-[10px] font-heading font-semibold uppercase tracking-wider mt-0.5 ${tab === 'fijos' ? 'text-white/80' : 'text-white/40'}`}>
                Soluciones permanentes
              </span>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Contenido dinámico por tab */}
      <AnimatePresence mode="wait">
        {tab === 'moviles' ? (
          <motion.div
            key="moviles"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
          >
            {/* Badge identificador */}
            <div className="bg-primary py-3">
              <div className="max-w-5xl mx-auto px-4 flex items-center gap-3">
                <FiWind size={18} className="text-white" />
                <span className="font-heading font-extrabold text-white uppercase tracking-widest text-sm">
                  Techos Móviles — Soluciones Temporales
                </span>
              </div>
            </div>

            {/* Descripción */}
            <section className="py-14 bg-white">
              <div className="max-w-4xl mx-auto px-4">
                <p className="text-body-text leading-relaxed mb-4 text-lg">
                  Los techos móviles para graderías de Graderías GRS son soluciones estructurales diseñadas para proteger a los espectadores de las condiciones climáticas en eventos al aire libre. Fabricados en estructura metálica tubular con cubierta en lona tensada o policarbonato.
                </p>
                <p className="text-body-text leading-relaxed mb-8 text-lg">
                  GRS alquila techos en aluminio y hierro de categoría general y VIP con sentaderos tipo estadio; así mismo, tarimas, vallas y palcos de honor para su servicio a nivel nacional, satisfaciendo a cabalidad las necesidades de nuestros clientes y cumpliendo los requerimientos de carácter masivo —deportivos, culturales, sociales, populares y/o privados—, garantizando resultados óptimos en tiempo récord y con los mejores precios del mercado.
                </p>
                <h2 className="font-heading font-bold text-dark text-xl mb-4">Características</h2>
                <ul className="flex flex-wrap gap-2">
                  {caracteristicasMoviles.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center gap-1.5 bg-light/70 border border-light text-dark/80 text-sm font-heading font-semibold px-3 py-1.5 rounded-full"
                    >
                      <FiCheck size={13} className="text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Galería Móviles */}
            <section className="pb-16 bg-light/30">
              <div className="max-w-7xl mx-auto px-4 pt-8">
                <h2 className="font-heading font-bold text-dark text-2xl mb-6 text-center">
                  Galería — Techos Móviles
                </h2>
                <GaleriaLightbox images={galeriaMoviles} titulo="Techos Móviles" />
              </div>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="fijos"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
          >
            {/* Badge identificador */}
            <div className="bg-dark py-3">
              <div className="max-w-5xl mx-auto px-4 flex items-center gap-3">
                <FiAnchor size={18} className="text-primary" />
                <span className="font-heading font-extrabold text-white uppercase tracking-widest text-sm">
                  Techos Fijos — Soluciones Permanentes
                </span>
              </div>
            </div>

            {/* Descripción */}
            <section className="py-14 bg-[#f8f9f4]">
              <div className="max-w-4xl mx-auto px-4">
                <p className="text-body-text leading-relaxed mb-4 text-lg">
                  Los techos fijos para graderías de Graderías GRS son estructuras permanentes diseñadas para proteger a los espectadores de manera continua. Integradas a la gradería con la más alta ingeniería estructural, garantizan durabilidad y resistencia a largo plazo.
                </p>
                <p className="text-body-text leading-relaxed mb-8 text-lg">
                  GRS alquila graderías en aluminio y hierro de categoría general y VIP con sentaderos tipo estadio; así mismo, tarimas, vallas y palcos de honor para su servicio a nivel nacional, satisfaciendo a cabalidad las necesidades de nuestros clientes y cumpliendo los requerimientos de carácter masivo —deportivos, culturales, sociales, populares y/o privados—, garantizando resultados óptimos en tiempo récord y con los mejores precios del mercado.
                </p>
                <h2 className="font-heading font-bold text-dark text-xl mb-4">Características</h2>
                <ul className="flex flex-wrap gap-2">
                  {caracteristicasFijos.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center gap-1.5 bg-white border border-light text-dark/80 text-sm font-heading font-semibold px-3 py-1.5 rounded-full"
                    >
                      <FiCheck size={13} className="text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Galería Fijos */}
            <section className="pb-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 pt-8">
                <h2 className="font-heading font-bold text-dark text-2xl mb-6 text-center">
                  Galería — Techos Fijos
                </h2>
                <GaleriaLightbox images={galeriaFijos} titulo="Techos Fijos" />
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      <ViajamosCTA />
    </>
  )
}
