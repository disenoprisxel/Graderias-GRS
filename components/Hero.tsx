'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

// ── Tipos de slide ──────────────────────────────────────────────────────────
type SlideBase = {
  id: number
  image: string
}
type SlideLogos = SlideBase & {
  type: 'logos'
  logoLeft: string
  logoLeftAlt: string
  logoRight: string
  logoRightAlt: string
  tagLeft?: string   // texto debajo del logo izquierdo
}
type SlideText = SlideBase & {
  type: 'text'
  title: string
  subtitle: string
}
type Slide = SlideLogos | SlideText

// ── Slides ──────────────────────────────────────────────────────────────────
const slides: Slide[] = [
  {
    id: 1,
    type: 'logos',
    image: '/images/hero/hero-fuxion.jpg',
    logoLeft:    '/images/logos/puerta-de-oro.png',
    logoLeftAlt: 'Puerta de Oro — Centro de Eventos del Caribe Barranquilla',
    tagLeft:     'C O R F E R I A S',
    logoRight:    '/images/logos/fuxion.jpg',
    logoRightAlt: 'Convención FuXion 2024',
  },
  {
    id: 2,
    type: 'text',
    image: '/images/hero/hero-1.jpg',
    title: 'Su evento en las mejores manos',
    subtitle: 'Graderías, escenarios y cubiertas para eventos a nivel nacional',
  },
  {
    id: 3,
    type: 'text',
    image: '/images/hero/hero-2.jpg',
    title: 'Más de 25 años de experiencia',
    subtitle: 'Alquiler y venta de graderías con los más altos estándares de calidad',
  },
  {
    id: 4,
    type: 'text',
    image: '/images/hero/hero-3.jpg',
    title: 'Proyectos a escala nacional',
    subtitle: 'Hemos participado en los eventos más importantes de Colombia',
  },
  {
    id: 5,
    type: 'text',
    image: '/images/proyectos/copa-davis.jpg',
    title: 'Copa Davis — Colombia vs Turquía',
    subtitle: 'Infraestructura de graderías para los mejores eventos deportivos',
  },
  {
    id: 6,
    type: 'text',
    image: '/images/proyectos/aguilas-doradas.jpg',
    title: 'Estadio Águilas Doradas',
    subtitle: 'Soluciones estructurales para estadios de fútbol profesional',
  },
  {
    id: 7,
    type: 'text',
    image: '/images/proyectos/bmx-tocancipa.jpg',
    title: 'Pista de BMX Tocancipá',
    subtitle: 'Graderías certificadas para eventos olímpicos y de alto rendimiento',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const heroRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const bgParallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:  (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  }

  const slide = slides[current]

  return (
    <section ref={heroRef} className="relative w-full h-[780px] lg:h-[910px] overflow-hidden bg-dark">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {/* Parallax background */}
          <motion.div
            className="absolute inset-0"
            style={{ y: bgParallaxY, scale: 1.15 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          </motion.div>

          {/* Overlay — más oscuro en slide de logos para legibilidad */}
          <div className={`absolute inset-0 ${slide.type === 'logos' ? 'bg-black/55' : 'bg-gradient-to-b from-black/30 via-black/50 to-black/70'}`} />

          {/* ── Contenido según tipo ── */}
          {slide.type === 'logos' ? (

            /* ── SLIDE LOGOS (Fuxion) ── */
            <div className="relative z-10 h-full flex flex-col justify-between px-8 md:px-16 py-10">
              {/* Fila superior: logos izq + der */}
              <div className="flex items-start justify-between w-full">
                {/* Logo izquierdo + tag */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="flex flex-col items-start gap-3"
                >
                  <Image
                    src={slide.logoLeft}
                    alt={slide.logoLeftAlt}
                    width={220}
                    height={110}
                    className="object-contain max-h-28 w-auto drop-shadow-xl"
                  />
                  {slide.tagLeft && (
                    <span className="text-white/80 font-heading tracking-[0.35em] text-sm uppercase">
                      {slide.tagLeft}
                    </span>
                  )}
                </motion.div>

                {/* Logo derecho */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="flex flex-col items-end gap-2"
                >
                  <span className="text-white/70 font-heading tracking-[0.3em] text-xs uppercase">
                    C O N V E N C I Ó N
                  </span>
                  <Image
                    src={slide.logoRight}
                    alt={slide.logoRightAlt}
                    width={280}
                    height={100}
                    className="object-contain max-h-20 w-auto drop-shadow-xl"
                  />
                  <span className="text-white/70 font-heading tracking-[0.3em] text-sm">
                    2 0 2 4
                  </span>
                </motion.div>
              </div>

              {/* Espacio central vacío para mostrar el evento */}
              <div />

              {/* CTA inferior */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex gap-4"
              >
                <a
                  href="/contacto"
                  className="bg-primary text-white font-heading font-bold px-8 py-3 rounded hover:bg-[#7db31e] transition-colors text-base shadow-lg"
                >
                  Cotizar ahora
                </a>
                <a
                  href="/fuxion2024"
                  className="border-2 border-white text-white font-heading font-bold px-8 py-3 rounded hover:bg-white hover:text-dark transition-colors text-base"
                >
                  Ver proyecto
                </a>
              </motion.div>
            </div>

          ) : (

            /* ── SLIDE TEXTO (resto) ── */
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-primary font-heading font-bold uppercase tracking-widest text-sm mb-4 inline-block"
              >
                Graderías y Escenarios GRS
              </motion.span>

              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.7, ease: 'easeOut' }}
                className="font-heading font-extrabold text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-5xl leading-tight drop-shadow-lg"
              >
                {(slide as SlideText).title}
              </motion.h1>

              <motion.p
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.7, ease: 'easeOut' }}
                className="mt-5 text-primary font-heading font-semibold text-xl md:text-2xl max-w-2xl drop-shadow"
              >
                {(slide as SlideText).subtitle}
              </motion.p>

              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.65, duration: 0.7, ease: 'easeOut' }}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <a href="/contacto" className="bg-primary text-white font-heading font-bold px-9 py-4 rounded hover:bg-[#7db31e] transition-colors text-lg shadow-lg">
                  Cotizar ahora
                </a>
                <a href="/#quienes" className="border-2 border-white text-white font-heading font-bold px-9 py-4 rounded hover:bg-white hover:text-dark transition-colors text-lg">
                  Conócenos
                </a>
              </motion.div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Flechas */}
      <button onClick={prev} aria-label="Anterior"
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 text-white bg-black/40 hover:bg-primary transition-colors rounded-full p-3">
        <FiChevronLeft size={28} />
      </button>
      <button onClick={next} aria-label="Siguiente"
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 text-white bg-black/40 hover:bg-primary transition-colors rounded-full p-3">
        <FiChevronRight size={28} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === current ? 'bg-primary w-8' : 'bg-white/50 w-4 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark/40 to-transparent z-10 pointer-events-none" />
    </section>
  )
}
