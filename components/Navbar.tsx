'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX, FiChevronDown, FiArrowUpRight } from 'react-icons/fi'
import {
  FiLayers, FiTruck, FiHome, FiMonitor, FiAnchor,
  FiBox, FiGrid, FiShield, FiStar, FiPenTool,
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
  { label: 'Juegos Centroaméricanos y del Caribe Mar y Playa',      href: '/juegos-centroamericanos-y-del-caribe' },
  { label: 'Juegos Centroaméricanos y del Caribe - Barranquilla',   href: '/juegos-centroamericanos-y-del-caribe-barranquilla' },
  { label: 'Estadio Aguilas Doradas',            href: '/estadio-aguilas-doradas' },
]

// Divide productos en filas de 5 / 5 / 1 (centrado)
const row1 = productosMenu.slice(0, 5)
const row2 = productosMenu.slice(5, 10)
const row3 = productosMenu.slice(10)

export default function Navbar() {
  const [mobileOpen, setMobileOpen]       = useState(false)
  const [productosOpen, setProductosOpen] = useState(false)
  const [proyectosOpen, setProyectosOpen] = useState(false)
  const [scrolled, setScrolled]           = useState(false)

  // Timeout refs para el cierre con delay — evita que el gap entre botón y menú lo cierre
  const productosTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const proyectosTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const openProductos  = useCallback(() => { if (productosTimer.current) clearTimeout(productosTimer.current); setProductosOpen(true)  }, [])
  const closeProductos = useCallback(() => { productosTimer.current = setTimeout(() => setProductosOpen(false), 120) }, [])
  const openProyectos  = useCallback(() => { if (proyectosTimer.current) clearTimeout(proyectosTimer.current); setProyectosOpen(true)  }, [])
  const closeProyectos = useCallback(() => { proyectosTimer.current = setTimeout(() => setProyectosOpen(false), 120) }, [])

  return (
    // position:relative necesario para que el mega-menu absoluto se posicione dentro del header
    <header className={`sticky top-0 z-50 bg-white transition-shadow relative ${scrolled ? 'shadow-lg' : 'shadow-sm'}`}>

      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-24">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0 py-1 px-1">
          <Image src="/images/logo-navbar.png" alt="Graderías GRS" width={210} height={80} priority className="h-[72px] w-auto" />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-5 font-heading font-semibold text-dark text-sm xl:text-base">
          <Link href="/" className="whitespace-nowrap hover:text-primary transition-colors">Inicio</Link>
          <Link href="/#quienes" className="whitespace-nowrap hover:text-primary transition-colors">¿Quiénes Somos?</Link>

          {/* Proyectos — dropdown simple */}
          <div className="relative" onMouseEnter={openProyectos} onMouseLeave={closeProyectos}>
            <button className="whitespace-nowrap flex items-center gap-1 hover:text-primary transition-colors">
              Proyectos Destacados <FiChevronDown />
            </button>
            <AnimatePresence>
              {proyectosOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={openProyectos}
                  onMouseLeave={closeProyectos}
                  className="absolute top-full left-0 bg-white shadow-2xl rounded-b-xl py-2 min-w-64 border-t-2 border-primary z-50 origin-top"
                >
                  {proyectosMenu.map((item, i) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: i * 0.03, ease: 'easeOut' }}
                    >
                      <Link href={item.href}
                        className="flex items-center gap-2 px-4 py-2.5 text-dark hover:bg-primary hover:text-white transition-colors duration-200 text-sm group">
                        <FiArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Productos — trigger del mega-menu */}
          <div onMouseEnter={openProductos} onMouseLeave={closeProductos}>
            <button className={`whitespace-nowrap flex items-center gap-1 transition-colors ${productosOpen ? 'text-primary' : 'hover:text-primary'}`}>
              Productos
              <motion.span animate={{ rotate: productosOpen ? 180 : 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
                <FiChevronDown />
              </motion.span>
            </button>
          </div>

          <Link href="/contacto" className="whitespace-nowrap hover:text-primary transition-colors">Contacto</Link>
          <Link href="/descargas" className="whitespace-nowrap hover:text-primary transition-colors">Descargas</Link>
        </div>

        {/* Badge experiencia */}
        <div className="hidden lg:flex items-center py-1 px-1">
          <Image
            src="/images/certificaciones/experiencia.png"
            alt="25 Years Experience — ICC International Code Council"
            width={220}
            height={80}
            className="h-[72px] w-auto object-contain"
          />
        </div>

        {/* Hamburger */}
        <button className="lg:hidden text-dark" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menú">
          {mobileOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </nav>

      {/* Green accent line */}
      <div className="h-1 bg-primary" />

      {/* ── MEGA-MENU PRODUCTOS ──
          absolute dentro del header (position:relative), se posiciona justo debajo */}
      <AnimatePresence>
        {productosOpen && (
          <motion.div
            initial={{ opacity: 0, y: -14, scaleY: 0.94 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -10, scaleY: 0.96 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={openProductos}
            onMouseLeave={closeProductos}
            className="absolute left-0 right-0 top-full z-40 bg-[#111] shadow-2xl border-t-2 border-primary origin-top"
          >
            <div className="max-w-6xl mx-auto px-6 py-6">
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22, delay: 0.08 }}
                className="text-primary font-heading font-bold uppercase tracking-widest text-xs mb-4"
              >
                Nuestros Productos
              </motion.p>

              {/* Fila 1 — 5 items con stagger */}
              <div className="grid grid-cols-5 gap-2 mb-2">
                {row1.map(({ label, href, Icono }, i) => (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.22, delay: 0.1 + i * 0.04, ease: 'easeOut' }}
                  >
                    <ProductoCard label={label} href={href} Icono={Icono} onClick={() => setProductosOpen(false)} />
                  </motion.div>
                ))}
              </div>

              {/* Fila 2 — 5 items */}
              <div className="grid grid-cols-5 gap-2 mb-2">
                {row2.map(({ label, href, Icono }, i) => (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.22, delay: 0.22 + i * 0.04, ease: 'easeOut' }}
                  >
                    <ProductoCard label={label} href={href} Icono={Icono} onClick={() => setProductosOpen(false)} />
                  </motion.div>
                ))}
              </div>

              {/* Fila 3 — 1 item centrado */}
              <div className="flex justify-center">
                {row3.map(({ label, href, Icono }) => (
                  <motion.div
                    key={href}
                    className="w-1/5"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.22, delay: 0.42, ease: 'easeOut' }}
                  >
                    <ProductoCard label={label} href={href} Icono={Icono} onClick={() => setProductosOpen(false)} />
                  </motion.div>
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
            <div className="grid grid-cols-2 gap-2 mt-2">
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
