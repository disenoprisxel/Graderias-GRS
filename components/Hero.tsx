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
    type: 'logos',
    image: '/images/hero/hero-bmx.jpg',
    logoLeft:    '/images/logos/alcaldia-tocancipa.png',
    logoLeftAlt: 'Alcaldía de Tocancipá',
    tagLeft:     'PISTA BMX TOCANCIPÁ',
    logoRight:    '',
    logoRightAlt: '',
  },
  {
    id: 3,
    type: 'logos',
    image: '/images/hero/hero-sincelejo.jpg',
    logoLeft:    '/images/logos/alcaldia-sincelejo.png',
    logoLeftAlt: 'Alcaldía de Sincelejo',
    tagLeft:     'VENTA DE SILLETERÍA — ESTADIO DE BÉISBOL DE SINCELEJO',
    logoRight:    '',
    logoRightAlt: '',
  },
  {
    id: 4,
    type: 'logos',
    image: '/images/hero/hero-truss.jpg',
    logoLeft:    '/images/logos/tocancipa.png',
    logoLeftAlt: 'Tocancipá',
    tagLeft:     'TECHOS Y ESTRUCTURAS EN TRUSS',
    logoRight:    '',
    logoRightAlt: '',
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
          {/* Parallax background + fade-scale de entrada */}
          <motion.div
            className="absolute inset-0"
            style={{ y: bgParallaxY }}
            initial={{ scale: 1.25, opacity: 0 }}
            animate={{ scale: 1.05, opacity: 1 }}
            transition={{ duration: 1.8, ease: 'easeOut' }}
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

            slide.logoRight ? (
              /* ── SLIDE LOGOS DOS (Fuxion) — logos en la parte inferior ── */
              <div className="relative z-10 h-full flex flex-col justify-end px-8 md:px-14 pb-28">
                <div className="flex items-end justify-between w-full max-w-5xl mx-auto">

                  {/* Logo izquierdo */}
                  <motion.div
                    initial={{ opacity: 0, x: -60, y: 30 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-start gap-2"
                  >
                    <Image
                      src={slide.logoLeft}
                      alt={slide.logoLeftAlt}
                      width={200}
                      height={100}
                      className="object-contain max-h-24 w-auto drop-shadow-2xl"
                    />
                    {slide.tagLeft && (
                      <motion.span
                        initial={{ opacity: 0, letterSpacing: '0.1em' }}
                        animate={{ opacity: 1, letterSpacing: '0.35em' }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="text-white/80 font-heading text-sm uppercase"
                      >
                        {slide.tagLeft}
                      </motion.span>
                    )}
                  </motion.div>

                  {/* Logo derecho — Fuxion */}
                  <motion.div
                    initial={{ opacity: 0, x: 60, y: 30 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-end gap-1"
                  >
                    <motion.span
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                      className="text-white/70 font-heading tracking-[0.3em] text-xs uppercase"
                    >
                      C O N V E N C I Ó N
                    </motion.span>
                    <Image
                      src={slide.logoRight}
                      alt={slide.logoRightAlt}
                      width={260}
                      height={90}
                      className="object-contain max-h-20 w-auto drop-shadow-2xl"
                    />
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9, duration: 0.6 }}
                      className="text-white/70 font-heading tracking-[0.4em] text-base"
                    >
                      2 0 2 4
                    </motion.span>
                  </motion.div>
                </div>
              </div>
            ) : (
              /* ── SLIDE UN LOGO — título grande centrado + logo centrado ── */
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 gap-10">

                {/* Título principal — grande y bold */}
                {slide.tagLeft && (
                  <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="font-heading font-extrabold text-white text-4xl md:text-6xl lg:text-7xl uppercase leading-tight drop-shadow-lg max-w-4xl"
                  >
                    {slide.tagLeft}
                  </motion.h2>
                )}

                {/* Logo centrado con animación de entrada */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center"
                >
                  {/* Línea decorativa encima del logo */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
                    className="w-16 h-0.5 bg-primary mb-5 origin-center"
                  />
                  <Image
                    src={slide.logoLeft}
                    alt={slide.logoLeftAlt}
                    width={220}
                    height={110}
                    className="object-contain max-h-28 w-auto drop-shadow-2xl"
                  />
                </motion.div>
              </div>
            )

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
