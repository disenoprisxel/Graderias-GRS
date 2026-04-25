'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import type { Slide, SlideLogos } from '@/components/Hero'

export default function HorizontalStrip({ slides }: { slides: Slide[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    const card = scrollRef.current.querySelector<HTMLElement>('[data-card]')
    const amount = card ? card.offsetWidth : 380
    scrollRef.current.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' })
  }

  return (
    <section className="relative bg-dark overflow-hidden" style={{ height: '400px' }}>

      {/* Scroll container */}
      <div
        ref={scrollRef}
        className="flex h-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {slides.map((slide) => {
          const s = slide as SlideLogos
          const hasTitle    = slide.type === 'logos' && !!s.tagLeft
          const hasLogoLeft = slide.type === 'logos' && !!s.logoLeft
          const hasLogoRight = slide.type === 'logos' && !!s.logoRight

          return (
            <div
              key={slide.id}
              data-card
              className="relative flex-shrink-0 h-full overflow-hidden border-r border-white/10"
              style={{
                width: 'clamp(260px, 85vw, 420px)',
                scrollSnapAlign: 'start',
              }}
            >
              {/* Background image */}
              <Image
                src={slide.image}
                alt=""
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 85vw, 420px"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              {/* Content — bottom aligned */}
              <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col gap-3">

                {/* Title */}
                {hasTitle && (
                  <h3 className="font-heading font-extrabold text-white text-sm md:text-base uppercase leading-tight drop-shadow whitespace-pre-line line-clamp-3">
                    {s.tagLeft}
                  </h3>
                )}

                {/* Logos */}
                {(hasLogoLeft || hasLogoRight) && (
                  <div className="flex items-end justify-between gap-2">
                    {hasLogoLeft && (
                      <Image
                        src={s.logoLeft}
                        alt={s.logoLeftAlt}
                        width={90}
                        height={45}
                        className="object-contain max-h-9 w-auto drop-shadow-xl"
                      />
                    )}
                    {hasLogoRight && (
                      <Image
                        src={s.logoRight}
                        alt={s.logoRightAlt}
                        width={90}
                        height={45}
                        className="object-contain max-h-9 w-auto drop-shadow-xl"
                      />
                    )}
                  </div>
                )}
              </div>

              {/* Accent line at top */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary/0 hover:bg-primary/80 transition-colors duration-300" />
            </div>
          )
        })}
      </div>

      {/* Left fade */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-dark/70 to-transparent pointer-events-none z-[5]" />
      {/* Right fade */}
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-dark/70 to-transparent pointer-events-none z-[5]" />

      {/* Arrows */}
      <button
        onClick={() => scroll('left')}
        aria-label="Anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-primary text-white rounded-full p-2.5 transition-colors duration-200 shadow-lg"
      >
        <FiChevronLeft size={20} />
      </button>
      <button
        onClick={() => scroll('right')}
        aria-label="Siguiente"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-primary text-white rounded-full p-2.5 transition-colors duration-200 shadow-lg"
      >
        <FiChevronRight size={20} />
      </button>

      {/* Bottom label */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 text-white/40 text-[10px] font-heading uppercase tracking-widest pointer-events-none">
        <span className="w-4 h-px bg-white/30" />
        Desliza para ver más
        <span className="w-4 h-px bg-white/30" />
      </div>
    </section>
  )
}
