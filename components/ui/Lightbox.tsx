'use client'

import { useEffect, useCallback } from 'react'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

interface LightboxProps {
  images: string[]
  index: number
  titulo?: string
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  watermark?: string
}

export default function Lightbox({ images, index, titulo, onClose, onPrev, onNext, watermark }: LightboxProps) {
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft') onPrev()
    if (e.key === 'ArrowRight') onNext()
  }, [onClose, onPrev, onNext])

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
        onClick={onClose}
      >
        {/* Contador */}
        <div className="absolute top-4 left-5 text-white/70 font-heading font-bold text-sm z-10">
          {index + 1} / {images.length}
        </div>

        {/* Botones top-right */}
        <div className="absolute top-3 right-4 flex items-center gap-3 z-10">
          <button
            onClick={(e) => { e.stopPropagation(); onClose() }}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
            aria-label="Cerrar"
          >
            <FiX size={22} />
          </button>
        </div>

        {/* Imagen principal */}
        <motion.div
          key={index}
          initial={{ scale: 0.96 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.96 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="relative mx-auto px-16 flex items-center justify-center"
          style={{ maxWidth: '1200px', width: '100%' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[index]}
            alt={`${titulo ?? 'Imagen'} ${index + 1}`}
            className="block w-auto h-auto max-w-full object-contain select-none"
            style={{ maxHeight: '82vh' }}
            draggable={false}
          />
          {/* Marca de agua sobre imagen ampliada */}
          {watermark && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={watermark}
                alt=""
                className="w-2/5 opacity-[0.20] drop-shadow select-none"
                draggable={false}
              />
            </div>
          )}
        </motion.div>

        {/* Flecha izquierda */}
        <button
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white transition-colors z-10"
          aria-label="Anterior"
        >
          <FiChevronLeft size={26} />
        </button>

        {/* Flecha derecha */}
        <button
          onClick={(e) => { e.stopPropagation(); onNext() }}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white transition-colors z-10"
          aria-label="Siguiente"
        >
          <FiChevronRight size={26} />
        </button>

        {/* Miniaturas bottom */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 px-4 overflow-x-auto z-10">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); onNext(); }}
              className={`relative w-12 h-9 flex-shrink-0 rounded overflow-hidden border-2 transition-all ${
                i === index ? 'border-primary scale-110' : 'border-transparent opacity-50 hover:opacity-80'
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
