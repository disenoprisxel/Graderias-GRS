'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiImage, FiVideo } from 'react-icons/fi'
import GaleriaLightbox from '@/components/ui/GaleriaLightbox'
import VideoCarousel from '@/components/ui/VideoCarousel'

type Tab = 'fotos' | 'videos'

const fotos = Array.from({ length: 9 }, (_, i) => {
  const n = String(i + 1).padStart(3, '0')
  return `/images/galeria/${n}.jpg`
})

const videos = [
  '/videos/galeria/001.mp4',
  '/videos/galeria/002.mp4',
]

export default function GaleriaPage() {
  const [tab, setTab] = useState<Tab>('fotos')

  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark py-20 px-4 text-center overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/heroes/galeria-hero.jpg" alt="" className="w-full h-full object-cover opacity-40" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark/80" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-primary font-heading font-bold uppercase tracking-widest text-xs mb-3">
            Graderías GRS
          </p>
          <h1 className="font-heading font-extrabold text-white text-4xl md:text-6xl leading-tight mb-4">
            Galería
          </h1>
          <p className="text-white/60 font-heading text-lg">
            Fotos y videos de nuestros proyectos, montajes y eventos a nivel nacional.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white sticky top-[84px] z-30 border-b border-dark/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex gap-0">
          {([
            { key: 'fotos',  label: 'Fotos',  Icono: FiImage },
            { key: 'videos', label: 'Videos', Icono: FiVideo },
          ] as { key: Tab; label: string; Icono: React.ElementType }[]).map(({ key, label, Icono }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`flex items-center gap-2 px-6 py-4 font-heading font-bold text-sm uppercase tracking-wide border-b-2 transition-all duration-200 ${
                tab === key
                  ? 'border-primary text-primary'
                  : 'border-transparent text-dark/50 hover:text-dark'
              }`}
            >
              <Icono size={16} />
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* Contenido por tab */}
      <AnimatePresence mode="wait">
        {tab === 'fotos' ? (
          <motion.section
            key="fotos"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="py-12 bg-light/20"
          >
            <div className="max-w-7xl mx-auto px-4">
              <p className="text-center text-dark/40 font-heading text-sm mb-8 uppercase tracking-widest">
                {fotos.length} fotografías aéreas con dron
              </p>
              <GaleriaLightbox
                images={fotos}
                titulo="Galería Graderías GRS"
                watermark="/images/logo-blanco.png"
              />
            </div>
          </motion.section>
        ) : (
          <motion.section
            key="videos"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="py-12 bg-[#111]"
          >
            <div className="max-w-5xl mx-auto px-4">
              <p className="text-center text-white/40 font-heading text-sm mb-8 uppercase tracking-widest">
                {videos.length} videos aéreos con dron
              </p>
              <VideoCarousel videos={videos} />
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}
