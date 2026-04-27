'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUpRight, FiClock } from 'react-icons/fi'
import { proyectos, años, CATEGORIAS, type Categoria } from '@/data/proyectos'

const CATEGORIA_COLORS: Record<Categoria, string> = {
  deportivo:     'bg-blue-500',
  cultural:      'bg-purple-500',
  corporativo:   'bg-primary',
  gubernamental: 'bg-orange-500',
}

const CATEGORIA_LABELS: Record<Categoria, string> = {
  deportivo:     'Deportivo',
  cultural:      'Cultural',
  corporativo:   'Corporativo',
  gubernamental: 'Gubernamental',
}

export default function ProyectosGrid() {
  const [catFilter, setCatFilter] = useState<Categoria | 'todos'>('todos')
  const [añoFilter, setAñoFilter] = useState<number | 'todos'>('todos')

  const filtrados = useMemo(() =>
    proyectos.filter((p) => {
      const matchCat = catFilter === 'todos' || p.categoria === catFilter
      const matchAño = añoFilter === 'todos' || p.año === añoFilter
      return matchCat && matchAño
    }),
    [catFilter, añoFilter]
  )

  return (
    <div>
      {/* ── Filtros ── */}
      <div className="mb-10 flex flex-col gap-4">
        {/* Categoría */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIAS.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setCatFilter(value)}
              className={`px-4 py-1.5 rounded-full font-heading font-bold text-xs uppercase tracking-wide border-2 transition-all duration-200 ${
                catFilter === value
                  ? 'bg-primary border-primary text-white shadow-md shadow-primary/30'
                  : 'bg-white border-dark/15 text-dark/60 hover:border-primary hover:text-primary'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Año */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setAñoFilter('todos')}
            className={`px-3 py-1 rounded-full font-heading font-semibold text-xs border transition-all duration-200 ${
              añoFilter === 'todos'
                ? 'bg-dark border-dark text-white'
                : 'bg-white border-dark/15 text-dark/50 hover:border-dark hover:text-dark'
            }`}
          >
            Todos los años
          </button>
          {años.map((año) => (
            <button
              key={año}
              onClick={() => setAñoFilter(año)}
              className={`px-3 py-1 rounded-full font-heading font-semibold text-xs border transition-all duration-200 ${
                añoFilter === año
                  ? 'bg-dark border-dark text-white'
                  : 'bg-white border-dark/15 text-dark/50 hover:border-dark hover:text-dark'
              }`}
            >
              {año}
            </button>
          ))}
        </div>
      </div>

      {/* ── Contador ── */}
      <p className="text-dark/40 text-sm font-heading mb-6">
        {filtrados.length} {filtrados.length === 1 ? 'proyecto' : 'proyectos'} encontrados
      </p>

      {/* ── Grid ── */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        <AnimatePresence mode="popLayout">
          {filtrados.map((proyecto) => (
            <motion.div
              key={proyecto.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {proyecto.href ? (
                /* ── Tarjeta con enlace ── */
                <Link href={proyecto.href} className="group block relative rounded-2xl overflow-hidden bg-dark aspect-[4/3] shadow-lg hover:shadow-xl transition-shadow">
                  {proyecto.imagen && (
                    <Image
                      src={proyecto.imagen}
                      alt={proyecto.titulo}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Marca de agua */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <Image
                      src="/images/logo-blanco.png"
                      alt="Graderías GRS"
                      width={200}
                      height={100}
                      className="object-contain opacity-[0.22] select-none"
                    />
                  </div>

                  {/* Badge categoría */}
                  <div className={`absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-white text-[10px] font-heading font-bold uppercase tracking-wide ${CATEGORIA_COLORS[proyecto.categoria]}`}>
                    {CATEGORIA_LABELS[proyecto.categoria]}
                  </div>

                  {/* Año */}
                  <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-white/90 text-[10px] font-heading font-bold">
                    {proyecto.año}
                  </div>

                  {/* Contenido inferior */}
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <h3 className="font-heading font-extrabold text-white text-base leading-tight mb-0.5">
                      {proyecto.titulo}
                    </h3>
                    {proyecto.subtitulo && (
                      <p className="text-white/60 text-xs font-heading">{proyecto.subtitulo}</p>
                    )}
                    <div className="flex items-center gap-1 mt-2 text-primary text-xs font-heading font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      Ver proyecto <FiArrowUpRight size={13} />
                    </div>
                  </div>
                </Link>
              ) : (
                /* ── Tarjeta "Próximamente" ── */
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-dark to-[#1a2a1a] border border-primary/20">
                  {/* Patrón decorativo */}
                  <div className="absolute inset-0 opacity-5"
                    style={{ backgroundImage: 'repeating-linear-gradient(45deg, #96CF24 0, #96CF24 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}
                  />

                  {/* Badge categoría */}
                  <div className={`absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-white text-[10px] font-heading font-bold uppercase tracking-wide ${CATEGORIA_COLORS[proyecto.categoria]}`}>
                    {CATEGORIA_LABELS[proyecto.categoria]}
                  </div>

                  {/* Badge próximamente */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/10 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-white/70 text-[10px] font-heading font-bold">
                    <FiClock size={10} /> Próximamente
                  </div>

                  {/* Contenido centrado */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <span className="text-primary font-heading font-bold text-4xl mb-3 opacity-30">{proyecto.año}</span>
                    <h3 className="font-heading font-extrabold text-white text-base leading-tight">
                      {proyecto.titulo}
                    </h3>
                    {proyecto.subtitulo && (
                      <p className="text-white/50 text-xs font-heading mt-1">{proyecto.subtitulo}</p>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtrados.length === 0 && (
        <div className="text-center py-20 text-dark/40 font-heading">
          No hay proyectos con esos filtros.
        </div>
      )}
    </div>
  )
}
