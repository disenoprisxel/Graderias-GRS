'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX, FiChevronDown, FiArrowUpRight } from 'react-icons/fi'
import {
  FiLayers, FiTruck, FiHome, FiMonitor, FiAnchor,
  FiBox, FiGrid, FiShield, FiStar, FiCpu, FiPenTool,
} from 'react-icons/fi'

const productosMenu = [
  { label: 'Venta de Graderías',             href: '/venta_de_graderias',    Icono: FiLayers },
  { label: 'Alquiler de Graderías',          href: '/alquiler_de_graderias', Icono: FiTruck  },
  { label: 'Techos de Graderías',            href: '/techos-de-graderias',   Icono: FiHome   },
  { label: 'Silletería Escenarios',          href: '/silleteria-escenarios', Icono: FiGrid   },
  { label: 'Cubiertas en Truss',             href: '/cubiertas-truss',       Icono: FiAnchor },
  { label: 'Bancas de Suplentes',            href: '/bancas-de-madera',      Icono: FiBox    },
  { label: 'Paneles',                        href: '/paneles-y-tarimas',     Icono: FiLayers },
  { label: 'Vallas y Mallas de Encerramiento', href: '/vallas-y-barreras',  Icono: FiShield },
  { label: 'Stand Truss',                    href: '/stand-truss',           Icono: FiStar   },
  { label: 'Pantallas',                      href: '/pantallas-led',         Icono: FiMonitor},
  { label: 'Diseño y Render',                href: '/diseno-y-produccion',   Icono: FiPenTool},
]

const proyectosMenu = [
  { label: 'Pista de BMX Tocancipá',             href: '/pista_bmx_tocancipa' },
  { label: 'Estadio de Béisbol Sincelejo',       href: '/venta_de_silleteria_sincelejo' },
  { label: 'Fuxion 2024',                        href: '/fuxion2024' },
  { label: 'Visita del Papa Francisco',          href: '/visita-del-papa-francisco' },
  { label: 'Copa Davis Colombia',                href: '/copa-davis-colombia-turkia' },
  { label: 'Copa Claro Colsanitas',              href: '/copa-claro-colsanitas' },
  { label: 'Juegos Centroamericanos',            href: '/juegos-centroamericanos-y-del-caribe' },
  { label: 'Juegos Centroam. Barranquilla',      href: '/juegos-centroamericanos-y-del-caribe-barranquilla' },
  { label: 'Estadio Aguilas Doradas',            href: '/estadio-aguilas-doradas' },
]

// Divide productos en filas de 5 / 5 / 1 (centrado)
const row1 = productosMenu.slice(0, 5)
const row2 = productosMenu.slice(5, 10)
const row3 = productosMenu.slice(10)

export default function Navbar() {
  const [mobileOpen, setMobileOpen]     = useState(false)
  const [productosOpen, setProductosOpen] = useState(false)
  const [proyectosOpen, setProyectosOpen] = useState(false)
  const [scrolled, setScrolled]         = useState(false)
  const productosTrigger                = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow ${scrolled ? 'shadow-lg' : 'shadow-sm'}`}>
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image src="/images/logo.png" alt="Graderías GRS" width={160} height={60} priority className="h-14 w-auto" />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6 font-heading font-semibold text-dark text-sm">
          <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
          <Link href="/#quienes" className="hover:text-primary transition-colors">¿Quiénes Somos?</Link>

          {/* Proyectos — dropdown simple */}
          <div className="relative" onMouseEnter={() => setProyectosOpen(true)} onMouseLeave={() => setProyectosOpen(false)}>
            <button className="flex items-center gap-1 hover:text-primary transition-colors">
              Proyectos Destacados <FiChevronDown />
            </button>
            <AnimatePresence>
              {proyectosOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-0 bg-white shadow-2xl rounded-b-xl py-2 min-w-60 border-t-2 border-primary z-50"
                >
                  {proyectosMenu.map((item) => (
                    <Link key={item.href} href={item.href}
                      className="flex items-center gap-2 px-4 py-2.5 text-dark hover:bg-primary hover:text-white transition-colors text-sm group">
                      <FiArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Productos — mega-menu */}
          <div ref={productosTrigger} className="relative" onMouseEnter={() => setProductosOpen(true)} onMouseLeave={() => setProductosOpen(false)}>
            <button className={`flex items-center gap-1 transition-colors ${productosOpen ? 'text-primary' : 'hover:text-primary'}`}>
              Productos
              <motion.span animate={{ rotate: productosOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <FiChevronDown />
              </motion.span>
            </button>
          </div>

          <Link href="/contacto" className="hover:text-primary transition-colors">Contacto</Link>
          <Link href="/descargas" className="hover:text-primary transition-colors">Descargas</Link>
        </div>

        {/* Badges */}
        <div className="hidden lg:flex items-center gap-3 text-xs text-center font-heading">
          <div className="border-2 border-primary rounded p-2 leading-tight">
            <div className="font-bold text-primary text-lg leading-none">25</div>
            <div className="text-dark font-semibold uppercase tracking-tight">Years<br />Experience</div>
          </div>
          <div className="border-2 border-dark rounded p-2 leading-tight">
            <div className="font-bold text-dark text-xs uppercase tracking-tighter">ICC</div>
            <div className="text-body-text text-xs leading-tight">International<br />Code Council</div>
          </div>
        </div>

        {/* Hamburger */}
        <button className="lg:hidden text-dark" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menú">
          {mobileOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </nav>

      {/* Green accent line */}
      <div className="h-1 bg-primary" />

      {/* ── MEGA-MENU PRODUCTOS ── */}
      <AnimatePresence>
        {productosOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="absolute left-0 right-0 z-40 bg-[#111] shadow-2xl border-t border-primary/30"
            onMouseEnter={() => setProductosOpen(true)}
            onMouseLeave={() => setProductosOpen(false)}
          >
            <div className="max-w-6xl mx-auto px-6 py-6">
              {/* Título del mega-menu */}
              <p className="text-primary font-heading font-bold uppercase tracking-widest text-xs mb-4">
                Nuestros Productos
              </p>

              {/* Fila 1 — 5 items */}
              <div className="grid grid-cols-5 gap-2 mb-2">
                {row1.map(({ label, href, Icono }) => (
                  <ProductoCard key={href} label={label} href={href} Icono={Icono} onClick={() => setProductosOpen(false)} />
                ))}
              </div>

              {/* Fila 2 — 5 items */}
              <div className="grid grid-cols-5 gap-2 mb-2">
                {row2.map(({ label, href, Icono }) => (
                  <ProductoCard key={href} label={label} href={href} Icono={Icono} onClick={() => setProductosOpen(false)} />
                ))}
              </div>

              {/* Fila 3 — 1 item centrado */}
              <div className="flex justify-center gap-2">
                {row3.map(({ label, href, Icono }) => (
                  <div key={href} className="w-1/5">
                    <ProductoCard label={label} href={href} Icono={Icono} onClick={() => setProductosOpen(false)} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-light px-4 py-4 space-y-2 font-heading font-semibold text-dark">
          <Link href="/" className="block py-2 hover:text-primary" onClick={() => setMobileOpen(false)}>Inicio</Link>
          <Link href="/#quienes" className="block py-2 hover:text-primary" onClick={() => setMobileOpen(false)}>¿Quiénes Somos?</Link>

          <details>
            <summary className="py-2 flex items-center justify-between cursor-pointer hover:text-primary">
              Proyectos Destacados <FiChevronDown />
            </summary>
            <div className="pl-4 space-y-1 mt-1">
              {proyectosMenu.map((item) => (
                <Link key={item.href} href={item.href} className="block py-1 text-sm hover:text-primary" onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>
          </details>

          <details>
            <summary className="py-2 flex items-center justify-between cursor-pointer hover:text-primary">
              Productos <FiChevronDown />
            </summary>
            <div className="grid grid-cols-2 gap-2 mt-2 pl-2">
              {productosMenu.map(({ label, href, Icono }) => (
                <Link key={href} href={href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 bg-primary/10 hover:bg-primary hover:text-white text-dark rounded-lg px-3 py-2 text-xs font-bold transition-colors">
                  <Icono size={14} className="shrink-0" />
                  {label}
                </Link>
              ))}
            </div>
          </details>

          <Link href="/contacto" className="block py-2 hover:text-primary" onClick={() => setMobileOpen(false)}>Contacto</Link>
          <Link href="/descargas" className="block py-2 hover:text-primary" onClick={() => setMobileOpen(false)}>Descargas</Link>
        </div>
      )}
    </header>
  )
}

/* ── Tarjeta individual del mega-menu ── */
function ProductoCard({
  label, href, Icono, onClick,
}: {
  label: string
  href: string
  Icono: React.ElementType
  onClick: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group relative flex flex-col justify-between bg-primary hover:bg-[#7db31e] active:bg-[#6a9a1a] transition-colors duration-200 rounded-lg p-4 h-28 overflow-hidden"
    >
      {/* Triángulo decorativo esquina superior derecha */}
      <span
        className="absolute top-0 right-0 w-0 h-0 border-t-[32px] border-r-[32px] border-t-white/20 border-r-transparent"
        aria-hidden="true"
      />

      {/* Icono */}
      <Icono
        size={22}
        className="text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-200"
      />

      {/* Label */}
      <span className="font-heading font-extrabold text-white text-xs uppercase leading-tight tracking-wide">
        {label}
      </span>

      {/* Flecha hover */}
      <FiArrowUpRight
        size={14}
        className="absolute bottom-3 right-3 text-white/0 group-hover:text-white/80 transition-all duration-200 translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0"
      />
    </Link>
  )
}
