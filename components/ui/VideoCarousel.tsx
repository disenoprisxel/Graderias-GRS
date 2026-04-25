'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

interface VideoCarouselProps {
  videos: string[]
}

export default function VideoCarousel({ videos }: VideoCarouselProps) {
  const trackRef   = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)
  const total = videos.length

  // Calcula el índice activo según la posición de scroll
  const onScroll = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const cardWidth = track.scrollWidth / total
    const idx = Math.round(track.scrollLeft / cardWidth)
    setCurrent(Math.min(Math.max(idx, 0), total - 1))
  }, [total])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [onScroll])

  const scrollTo = useCallback((idx: number) => {
    const track = trackRef.current
    if (!track) return
    const target = Math.min(Math.max(idx, 0), total - 1)
    const cardWidth = track.scrollWidth / total
    track.scrollTo({ left: cardWidth * target, behavior: 'smooth' })
    setCurrent(target)
  }, [total])

  const prev = () => scrollTo(current - 1)
  const next = () => scrollTo(current + 1)

  return (
    <div className="relative">

      {/* Track */}
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden [-webkit-overflow-scrolling:touch] pb-4"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {videos.map((src, i) => (
          <div
            key={i}
            className="group flex-none w-[88vw] md:w-[56vw] lg:w-[44vw]"
            style={{ scrollSnapAlign: 'start' }}
          >
            {/* Barra verde superior al hover */}
            <div className="h-1 rounded-t-xl bg-transparent group-hover:bg-primary transition-colors duration-300" />

            {/* Video */}
            <div className="relative aspect-video rounded-b-xl overflow-hidden bg-dark shadow-lg group-hover:shadow-primary/30 group-hover:shadow-2xl transition-shadow duration-300">
              <video
                src={src}
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
        {/* Spacer final */}
        <div className="flex-none w-4" aria-hidden="true" />
      </div>

      {/* Controles + dots — fila centrada debajo del track */}
      <div className="flex items-center justify-center gap-4 mt-5">

        {/* Flecha izquierda */}
        <button
          onClick={prev}
          disabled={current === 0}
          aria-label="Video anterior"
          className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-white/20 hover:border-primary hover:bg-primary text-white disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200"
        >
          <FiChevronLeft size={20} />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Ir al video ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-6 h-2.5 bg-primary'
                  : 'w-2.5 h-2.5 bg-white/25 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Flecha derecha */}
        <button
          onClick={next}
          disabled={current === total - 1}
          aria-label="Video siguiente"
          className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-white/20 hover:border-primary hover:bg-primary text-white disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200"
        >
          <FiChevronRight size={20} />
        </button>

      </div>

      {/* Contador textual */}
      <p className="text-center text-xs font-heading font-bold text-white/30 uppercase tracking-widest mt-3">
        {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </p>

    </div>
  )
}
