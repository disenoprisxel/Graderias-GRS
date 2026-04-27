'use client'

import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { FiPlay, FiVolume2, FiVolumeX, FiArrowUpRight } from 'react-icons/fi'

export default function VideoReel() {
  const videoRef   = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView   = useInView(sectionRef, { once: false, margin: '-10%' })

  const [muted,   setMuted]   = useState(true)
  const [playing, setPlaying] = useState(false)
  const [ready,   setReady]   = useState(false)

  /* Autoplay cuando entra en viewport, pausa al salir */
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    if (isInView) {
      v.play().then(() => setPlaying(true)).catch(() => {})
    } else {
      v.pause()
      setPlaying(false)
    }
  }, [isInView])

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !muted
    setMuted(!muted)
  }

  const togglePlay = () => {
    if (!videoRef.current) return
    if (playing) {
      videoRef.current.pause()
      setPlaying(false)
    } else {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-black"
      style={{ height: 'clamp(420px, 70vh, 780px)' }}
    >
      {/* ── Video de fondo ── */}
      <video
        ref={videoRef}
        src="/videos/billy-jean-king/reel.mp4"
        muted
        loop
        playsInline
        preload="metadata"
        onCanPlayThrough={() => setReady(true)}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Poster fallback mientras carga */}
      {!ready && (
        <Image
          src="/images/proyectos/billy-jean-king/card.jpg"
          alt="Billie Jean King Cup 2026"
          fill
          className="object-cover"
          priority
        />
      )}

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Gradientes top y bottom */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />

      {/* ── Marca de agua ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]">
        <Image
          src="/images/logo-blanco.png"
          alt="Graderías GRS"
          width={320}
          height={160}
          className="object-contain opacity-[0.22] select-none"
        />
      </div>

      {/* ── Contenido centrado ── */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 gap-4">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-primary font-heading font-bold uppercase tracking-widest text-xs"
        >
          Graderías GRS — En acción
        </motion.p>

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-heading font-extrabold text-white text-3xl md:text-5xl lg:text-6xl uppercase leading-tight drop-shadow-lg max-w-3xl"
        >
          Billie Jean King Cup{' '}
          <span className="text-primary">2026</span>
        </motion.h2>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-white/70 font-heading text-sm md:text-base max-w-xl"
        >
          Torneo Internacional de Tenis — Colombia
        </motion.p>

        {/* Botón ver proyecto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-2"
        >
          <Link
            href="/billy-jean-king-cup"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-heading font-bold text-sm uppercase tracking-widest px-7 py-3 rounded-full transition-all duration-200 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105"
          >
            Ver proyecto completo <FiArrowUpRight size={16} />
          </Link>
        </motion.div>
      </div>

      {/* ── Controles bottom-right ── */}
      <div className="absolute bottom-5 right-5 z-20 flex items-center gap-2">
        {/* Mute / Unmute */}
        <button
          onClick={toggleMute}
          aria-label={muted ? 'Activar sonido' : 'Silenciar'}
          className="bg-black/60 hover:bg-primary text-white rounded-full p-2.5 transition-colors backdrop-blur-sm"
        >
          {muted ? <FiVolumeX size={18} /> : <FiVolume2 size={18} />}
        </button>

        {/* Play / Pause */}
        <button
          onClick={togglePlay}
          aria-label={playing ? 'Pausar' : 'Reproducir'}
          className="bg-black/60 hover:bg-primary text-white rounded-full p-2.5 transition-colors backdrop-blur-sm"
        >
          {playing
            ? <span className="flex gap-[3px] items-center px-0.5"><span className="w-[3px] h-4 bg-current rounded-sm" /><span className="w-[3px] h-4 bg-current rounded-sm" /></span>
            : <FiPlay size={18} />
          }
        </button>
      </div>

      {/* ── Indicador "scroll" bottom-center ── */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 text-white/40 text-[10px] font-heading uppercase tracking-widest pointer-events-none">
        <span className="w-4 h-px bg-white/30" />En vivo desde Colombia<span className="w-4 h-px bg-white/30" />
      </div>
    </section>
  )
}
