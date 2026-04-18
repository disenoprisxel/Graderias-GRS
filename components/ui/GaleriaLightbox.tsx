'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import Lightbox from './Lightbox'
import { motion } from 'framer-motion'

interface GaleriaLightboxProps {
  images: string[]
  titulo?: string
}

export default function GaleriaLightbox({ images, titulo }: GaleriaLightboxProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const open  = (i: number) => setActiveIndex(i)
  const close = () => setActiveIndex(null)
  const prev  = useCallback(() => setActiveIndex((i) => i === null ? null : (i - 1 + images.length) % images.length), [images.length])
  const next  = useCallback(() => setActiveIndex((i) => i === null ? null : (i + 1) % images.length), [images.length])

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((src, i) => (
          <motion.button
            key={i}
            onClick={() => open(i)}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: (i % 4) * 0.05 }}
            className="relative aspect-square rounded-lg overflow-hidden bg-dark group cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={`Ver imagen ${i + 1}`}
          >
            <Image
              src={src}
              alt={`${titulo ?? 'Imagen'} ${i + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            {/* Overlay con icono */}
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-3xl font-bold">
                ⊕
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      {activeIndex !== null && (
        <Lightbox
          images={images}
          index={activeIndex}
          titulo={titulo}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  )
}
