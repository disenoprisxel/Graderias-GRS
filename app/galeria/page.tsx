'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiImage, FiVideo, FiUploadCloud } from 'react-icons/fi'

type Tab = 'fotos' | 'videos'

export default function GaleriaPage() {
  const [tab, setTab] = useState<Tab>('fotos')

  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #96CF24 0, #96CF24 1px, transparent 0, transparent 50%)', backgroundSize: '24px 24px' }}
        />
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
      <section className="bg-white sticky top-[97px] z-30 border-b border-dark/10 shadow-sm">
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
        <motion.section
          key={tab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
          className="min-h-[60vh] py-20 bg-light/20"
        >
          <div className="max-w-5xl mx-auto px-4 flex flex-col items-center justify-center text-center gap-6">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <FiUploadCloud size={36} className="text-primary" />
            </div>
            <div>
              <h2 className="font-heading font-extrabold text-dark text-2xl md:text-3xl mb-2">
                {tab === 'fotos' ? 'Galería de Fotos' : 'Galería de Videos'}
              </h2>
              <p className="text-dark/50 font-heading text-base max-w-xl mx-auto">
                {tab === 'fotos'
                  ? 'Próximamente encontrarás aquí nuestra colección de fotografías aéreas con dron y registros de nuestros proyectos más destacados.'
                  : 'Próximamente encontrarás aquí los videos de nuestros montajes, eventos y proyectos a nivel nacional.'
                }
              </p>
            </div>
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-heading font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full">
              <FiUploadCloud size={13} /> Contenido en preparación
            </span>
          </div>
        </motion.section>
      </AnimatePresence>
    </>
  )
}
