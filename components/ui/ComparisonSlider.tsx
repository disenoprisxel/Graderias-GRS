'use client'

import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

interface ComparisonSliderProps {
  antes: string
  despues: string
  labelAntes?: string
  labelDespues?: string
}

export default function ComparisonSlider({
  antes,
  despues,
  labelAntes = 'Render 3D',
  labelDespues = 'Construcción Final',
}: ComparisonSliderProps) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }, [])

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragging.current) return
    updatePosition(e.clientX)
  }, [updatePosition])

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX)
  }, [updatePosition])

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className="relative w-full aspect-[16/7] overflow-hidden rounded-xl select-none cursor-col-resize shadow-2xl"
        onMouseMove={onMouseMove}
        onMouseDown={() => { dragging.current = true }}
        onMouseUp={() => { dragging.current = false }}
        onMouseLeave={() => { dragging.current = false }}
        onTouchMove={onTouchMove}
      >
        {/* Imagen DESPUÉS (base) */}
        <div className="absolute inset-0">
          <Image src={despues} alt={labelDespues} fill className="object-cover" priority />
        </div>

        {/* Imagen ANTES (clip) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image src={antes} alt={labelAntes} fill className="object-cover" priority />
        </div>

        {/* Divisor */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
          style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
        >
          {/* Manejador circular */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center gap-0.5 border-2 border-primary">
            <FiChevronLeft size={14} className="text-primary" />
            <FiChevronRight size={14} className="text-primary" />
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 z-20 pointer-events-none">
          <span className="bg-dark/70 text-white text-xs font-heading font-bold px-3 py-1.5 rounded-full uppercase tracking-wide backdrop-blur-sm">
            {labelAntes}
          </span>
        </div>
        <div className="absolute top-4 right-4 z-20 pointer-events-none">
          <span className="bg-primary/90 text-white text-xs font-heading font-bold px-3 py-1.5 rounded-full uppercase tracking-wide backdrop-blur-sm">
            {labelDespues}
          </span>
        </div>

        {/* Input range invisible para accesibilidad y arrastre fino */}
        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize z-20"
          aria-label="Comparar render con construcción final"
        />
      </div>

      {/* Instrucción */}
      <p className="text-center text-body-text/60 text-xs mt-3 font-heading italic">
        Arrastra el divisor para comparar el render 3D con la construcción final
      </p>
    </div>
  )
}
