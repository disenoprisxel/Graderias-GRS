'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'

const productosMenu = [
  { label: 'Alquiler de Graderías', href: '/alquiler_de_graderias' },
  { label: 'Venta de Graderías', href: '/venta_de_graderias' },
  { label: 'Techos de Graderías', href: '/techos-de-graderias' },
  { label: 'Silletería Escenarios', href: '/silleteria-escenarios' },
  { label: 'Cubiertas Truss', href: '/cubiertas-truss' },
  { label: 'Bancas de Madera', href: '/bancas-de-madera' },
  { label: 'Paneles y Tarimas', href: '/paneles-y-tarimas' },
  { label: 'Vallas y Barreras', href: '/vallas-y-barreras' },
  { label: 'Stand Truss', href: '/stand-truss' },
  { label: 'Pantallas LED', href: '/pantallas-led' },
  { label: 'Diseño y Producción', href: '/diseno-y-produccion' },
]

const proyectosMenu = [
  { label: 'Pista de BMX Tocancipá', href: '/pista_bmx_tocancipa' },
  { label: 'Estadio de Béisbol Sincelejo', href: '/venta_de_silleteria_sincelejo' },
  { label: 'Fuxion 2024', href: '/fuxion2024' },
  { label: 'Visita del Papa Francisco', href: '/visita-del-papa-francisco' },
  { label: 'Copa Davis Colombia', href: '/copa-davis-colombia-turkia' },
  { label: 'Copa Claro Colsanitas', href: '/copa-claro-colsanitas' },
  { label: 'Juegos Centroamericanos', href: '/juegos-centroamericanos-y-del-caribe' },
  { label: 'Juegos Centroam. Barranquilla', href: '/juegos-centroamericanos-y-del-caribe-barranquilla' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productosOpen, setProductosOpen] = useState(false)
  const [proyectosOpen, setProyectosOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${
        scrolled ? 'shadow-lg' : 'shadow-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="Graderías GRS"
            width={160}
            height={60}
            priority
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center gap-6 font-heading font-semibold text-dark text-sm">
          <Link href="/" className="hover:text-primary transition-colors">
            Inicio
          </Link>
          <Link href="/#quienes" className="hover:text-primary transition-colors">
            ¿Quiénes Somos?
          </Link>

          {/* Proyectos dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProyectosOpen(true)}
            onMouseLeave={() => setProyectosOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-primary transition-colors">
              Proyectos Destacados <FiChevronDown />
            </button>
            {proyectosOpen && (
              <div className="absolute top-full left-0 bg-white shadow-xl rounded-b-lg py-2 min-w-56 border-t-2 border-primary">
                {proyectosMenu.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-dark hover:bg-primary hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Productos dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductosOpen(true)}
            onMouseLeave={() => setProductosOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-primary transition-colors">
              Productos <FiChevronDown />
            </button>
            {productosOpen && (
              <div className="absolute top-full left-0 bg-white shadow-xl rounded-b-lg py-2 min-w-56 border-t-2 border-primary">
                {productosMenu.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-dark hover:bg-primary hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/contacto" className="hover:text-primary transition-colors">
            Contacto
          </Link>
          <Link href="/descargas" className="hover:text-primary transition-colors">
            Descargas
          </Link>
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

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-dark"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menú"
        >
          {mobileOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </nav>

      {/* Green bottom line */}
      <div className="h-1 bg-primary" />

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-light px-4 py-4 space-y-2 font-heading font-semibold text-dark">
          <Link href="/" className="block py-2 hover:text-primary" onClick={() => setMobileOpen(false)}>Inicio</Link>
          <Link href="/#quienes" className="block py-2 hover:text-primary" onClick={() => setMobileOpen(false)}>¿Quiénes Somos?</Link>

          <details className="group">
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

          <details className="group">
            <summary className="py-2 flex items-center justify-between cursor-pointer hover:text-primary">
              Productos <FiChevronDown />
            </summary>
            <div className="pl-4 space-y-1 mt-1">
              {productosMenu.map((item) => (
                <Link key={item.href} href={item.href} className="block py-1 text-sm hover:text-primary" onClick={() => setMobileOpen(false)}>
                  {item.label}
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
