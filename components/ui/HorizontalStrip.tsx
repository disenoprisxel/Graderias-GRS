'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi'
import type { Slide, SlideLogos } from '@/components/Hero'

/* ── Helpers ── */
function getTag(slide: Slide) {
  return slide.type === 'logos' ? (slide as SlideLogos).tagLeft ?? '' : (slide as { title?: string }).title ?? ''
}
function getLogoLeft(slide: Slide) {
  return slide.type === 'logos' ? (slide as SlideLogos).logoLeft : ''
}
function getLogoLeftAlt(slide: Slide) {
  return slide.type === 'logos' ? (slide as SlideLogos).logoLeftAlt : ''
}
function getLogoRight(slide: Slide) {
  return slide.type === 'logos' ? (slide as SlideLogos).logoRight : ''
}
function getLogoRightAlt(slide: Slide) {
  return slide.type === 'logos' ? (slide as SlideLogos).logoRightAlt : ''
}

/* ══════════════════════════════════════════════════════════════════════════ */
export default function HorizontalStrip({ slides }: { slides: Slide[] }) {
  const scrollRef  = useRef<HTMLDivElement>(null)
  const [lightbox, setLightbox] = useState<number | null>(null) // índice activo
  const [dir,      setDir]      = useState(1)

  /* ── Scroll horizontal ── */
  const scroll = (d: 'left' | 'right') => {
    if (!scrollRef.current) return
    const card = scrollRef.current.querySelector<HTMLElement>('[data-card]')
    const amount = card ? card.offsetWidth : 380
    scrollRef.current.scrollBy({ left: d === 'right' ? amount : -amount, behavior: 'smooth' })
  }

  /* ── Lightbox navigation ── */
  const openLightbox = (i: number) => { setDir(1); setLightbox(i) }
  const closeLightbox = () => setLightbox(null)

  const goPrev = useCallback(() => {
    if (lightbox === null) return
    setDir(-1)
    setLightbox((lightbox - 1 + slides.length) % slides.length)
  }, [lightbox, slides.length])

  const goNext = useCallback(() => {
    if (lightbox === null) return
    setDir(1)
    setLightbox((lightbox + 1) % slides.length)
  }, [lightbox, slides.length])

  /* ── Keyboard ── */
  useEffect(() => {
    if (lightbox === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape')      closeLightbox()
      if (e.key === 'ArrowLeft')   goPrev()
      if (e.key === 'ArrowRight')  goNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, goPrev, goNext])

  /* ── Lock body scroll when lightbox open ── */
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  const activeSlide = lightbox !== null ? slides[lightbox] : null

  /* ── Slide animation variants ── */
  const variants = {
    enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:  (d: number) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
  }

  return (
    <>
      {/* ══ STRIP ══════════════════════════════════════════════════════════ */}
      <section className="relative bg-dark overflow-hidden" style={{ height: '400px' }}>

        <div
          ref={scrollRef}
          className="flex h-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {slides.map((slide, i) => {
            const tag       = getTag(slide)
            const logoLeft  = getLogoLeft(slide)
            const logoRight = getLogoRight(slide)

            return (
              <div
                key={slide.id}
                data-card
                onClick={() => openLightbox(i)}
                className="relative flex-shrink-0 h-full overflow-hidden border-r border-white/10 cursor-zoom-in group"
                style={{ width: 'clamp(260px, 85vw, 420px)', scrollSnapAlign: 'start' }}
              >
                <Image
                  src={slide.image}
                  alt={tag || `Slide ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 85vw, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-300" />

                {/* Marca de agua */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <Image
                    src="/images/logo-blanco.png"
                    alt="Graderías GRS"
                    width={120}
                    height={60}
                    className="object-contain opacity-[0.22] select-none"
                  />
                </div>

                {/* Hover hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-primary/90 text-white font-heading font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                    Ver en grande
                  </div>
                </div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col gap-2">
                  {tag && (
                    <h3 className="font-heading font-extrabold text-white text-sm md:text-base uppercase leading-tight drop-shadow whitespace-pre-line line-clamp-3">
                      {tag}
                    </h3>
                  )}
                  {(logoLeft || logoRight) && (
                    <div className="flex items-end justify-between gap-2">
                      {logoLeft && (
                        <Image src={logoLeft} alt={getLogoLeftAlt(slide)} width={90} height={45}
                          className="object-contain max-h-9 w-auto drop-shadow-xl" />
                      )}
                      {logoRight && (
                        <Image src={logoRight} alt={getLogoRightAlt(slide)} width={90} height={45}
                          className="object-contain max-h-9 w-auto drop-shadow-xl" />
                      )}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Fades */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-dark/70 to-transparent pointer-events-none z-[5]" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-dark/70 to-transparent pointer-events-none z-[5]" />

        {/* Arrows */}
        <button onClick={() => scroll('left')} aria-label="Anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-primary text-white rounded-full p-2.5 transition-colors shadow-lg">
          <FiChevronLeft size={20} />
        </button>
        <button onClick={() => scroll('right')} aria-label="Siguiente"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-primary text-white rounded-full p-2.5 transition-colors shadow-lg">
          <FiChevronRight size={20} />
        </button>

        {/* Hint */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 text-white/40 text-[10px] font-heading uppercase tracking-widest pointer-events-none">
          <span className="w-4 h-px bg-white/30" />Desliza para ver más<span className="w-4 h-px bg-white/30" />
        </div>
      </section>

      {/* ══ LIGHTBOX ═══════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {lightbox !== null && activeSlide && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Slide container */}
            <div className="relative w-full h-full" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence initial={false} custom={dir} mode="wait">
                <motion.div
                  key={lightbox}
                  custom={dir}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="absolute inset-0"
                >
                  {/* Background */}
                  <Image
                    src={activeSlide.image}
                    alt={getTag(activeSlide) || `Slide ${lightbox + 1}`}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/55" />

                  {/* Title — centered */}
                  {getTag(activeSlide) && (
                    <div className="absolute inset-0 flex items-center justify-center px-16">
                      <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="font-heading font-extrabold text-white text-3xl md:text-6xl lg:text-7xl uppercase leading-tight drop-shadow-2xl text-center whitespace-pre-line"
                      >
                        {getTag(activeSlide)}
                      </motion.h2>
                    </div>
                  )}

                  {/* Logos — bottom */}
                  {(getLogoLeft(activeSlide) || getLogoRight(activeSlide)) && (
                    <div className="absolute bottom-16 md:bottom-24 inset-x-0 flex items-end justify-between px-8 md:px-16 max-w-5xl mx-auto">
                      {getLogoLeft(activeSlide) && (
                        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.7 }}>
                          <Image src={getLogoLeft(activeSlide)!} alt={getLogoLeftAlt(activeSlide)} width={200} height={100}
                            className="object-contain max-h-16 md:max-h-24 w-auto drop-shadow-2xl" />
                        </motion.div>
                      )}
                      {getLogoRight(activeSlide) && (
                        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.7 }}>
                          <Image src={getLogoRight(activeSlide)!} alt={getLogoRightAlt(activeSlide)} width={200} height={100}
                            className="object-contain max-h-16 md:max-h-24 w-auto drop-shadow-2xl" />
                        </motion.div>
                      )}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Close */}
              <button onClick={closeLightbox} aria-label="Cerrar"
                className="absolute top-5 right-5 z-20 bg-black/60 hover:bg-primary text-white rounded-full p-3 transition-colors shadow-xl">
                <FiX size={22} />
              </button>

              {/* Counter */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 z-20 bg-black/50 backdrop-blur-sm text-white/80 font-heading font-bold text-xs px-4 py-1.5 rounded-full">
                {lightbox + 1} / {slides.length}
              </div>

              {/* Prev / Next */}
              <button onClick={goPrev} aria-label="Anterior"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-primary text-white rounded-full p-3 transition-colors shadow-xl">
                <FiChevronLeft size={28} />
              </button>
              <button onClick={goNext} aria-label="Siguiente"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-primary text-white rounded-full p-3 transition-colors shadow-xl">
                <FiChevronRight size={28} />
              </button>

              {/* Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {slides.map((_, i) => (
                  <button key={i} onClick={() => { setDir(i > lightbox ? 1 : -1); setLightbox(i) }}
                    className={`h-1 rounded-full transition-all duration-300 ${i === lightbox ? 'bg-primary w-8' : 'bg-white/40 w-4 hover:bg-white/70'}`} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
