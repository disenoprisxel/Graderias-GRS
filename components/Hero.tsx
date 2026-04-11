'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const slides = [
  {
    id: 1,
    image: '/images/hero/hero-1.jpg',
    title: 'Su evento en las mejores manos',
    subtitle: 'Graderías, escenarios y cubiertas para eventos a nivel nacional',
  },
  {
    id: 2,
    image: '/images/hero/hero-2.jpg',
    title: 'Más de 25 años de experiencia',
    subtitle: 'Alquiler y venta de graderías con los más altos estándares de calidad',
  },
  {
    id: 3,
    image: '/images/hero/hero-3.jpg',
    title: 'Proyectos a escala nacional',
    subtitle: 'Hemos participado en los eventos más importantes de Colombia',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

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
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  }

  return (
    <section className="relative w-full h-[600px] lg:h-[700px] overflow-hidden bg-dark">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Text content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-heading font-extrabold text-white text-4xl md:text-5xl lg:text-6xl max-w-4xl leading-tight drop-shadow-lg"
            >
              {slides[current].title}
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-4 text-primary font-heading font-semibold text-xl md:text-2xl max-w-2xl drop-shadow"
            >
              {slides[current].subtitle}
            </motion.p>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="/contacto"
                className="bg-primary text-white font-heading font-bold px-8 py-3 rounded hover:bg-opacity-90 transition-colors text-lg"
              >
                Cotizar ahora
              </a>
              <a
                href="/#quienes"
                className="border-2 border-white text-white font-heading font-bold px-8 py-3 rounded hover:bg-white hover:text-dark transition-colors text-lg"
              >
                Conócenos
              </a>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrow: prev */}
      <button
        onClick={prev}
        aria-label="Anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white bg-black/40 hover:bg-primary transition-colors rounded-full p-2"
      >
        <FiChevronLeft size={28} />
      </button>

      {/* Arrow: next */}
      <button
        onClick={next}
        aria-label="Siguiente"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white bg-black/40 hover:bg-primary transition-colors rounded-full p-2"
      >
        <FiChevronRight size={28} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? 'bg-primary scale-125' : 'bg-white/60 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
