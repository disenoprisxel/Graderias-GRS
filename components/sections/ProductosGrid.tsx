import Link from 'next/link'
import Image from 'next/image'

// Explicit grid placement — 3 cols, 4 rows (cada fila base = 260px)
// col/row usan notación CSS grid: "1", "2", "3" o "1 / span 2"
const productos = [
  {
    label: 'Alquiler de Graderías',
    href: '/alquiler_de_graderias',
    image: '/images/productos/alquiler-graderias.jpg',
    col: '1', row: '1',
  },
  {
    label: 'Venta de Graderías',
    href: '/venta_de_graderias',
    image: '/images/productos/venta-graderias.jpg',
    col: '2', row: '1 / span 2', // TALL
  },
  {
    label: 'Diseño y Render',
    href: '/diseno-y-produccion',
    image: '/images/productos/diseno-produccion.jpg',
    col: '3', row: '1',
  },
  {
    label: 'Techos de Graderías',
    href: '/techos-de-graderias',
    image: '/images/productos/techos-graderias.jpg',
    col: '1', row: '2',
  },
  {
    label: 'Bancas de Suplentes',
    href: '/bancas-de-madera',
    image: '/images/productos/bancas-madera.jpg',
    col: '3', row: '2',
  },
  {
    label: 'Silletería de Escenarios',
    href: '/silleteria-escenarios',
    image: '/images/productos/silleteria.jpg',
    col: '1', row: '3',
  },
  {
    label: 'Cubiertas en Truss',
    href: '/cubiertas-truss',
    image: '/images/productos/cubiertas-truss.jpg',
    col: '2', row: '3 / span 2', // TALL
  },
  {
    label: 'Pantallas',
    href: '/pantallas-led',
    image: '/images/productos/pantallas-led.jpg',
    col: '3', row: '3',
  },
  {
    label: 'Vallas y Mallas de Encerramiento',
    href: '/vallas-y-barreras',
    image: '/images/productos/vallas-barreras.jpg',
    col: '1', row: '4',
  },
  {
    label: 'Stand Truss',
    href: '/stand-truss',
    image: '/images/productos/stand-truss.jpg',
    col: '3', row: '4',
  },
]

export default function ProductosGrid() {
  return (
    <section className="bg-[#f2f2f2] py-14">
      {/* Header */}
      <div className="text-center mb-8 px-4">
        <p className="text-primary font-heading font-semibold text-base italic">Nuestros</p>
        <h2 className="font-heading font-extrabold text-dark text-4xl uppercase tracking-wide mt-1">
          Productos
        </h2>
        <div className="mt-2 mx-auto w-10 h-0.5 bg-primary" />
        <p className="mt-4 text-body-text text-sm max-w-lg mx-auto">
          Conoce la variedad de productos y servicios que tenemos a tu disposición.
        </p>
      </div>

      {/* Asymmetric grid */}
      <div
        className="max-w-5xl mx-auto px-4"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridAutoRows: '260px',
          gap: '12px',
        }}
      >
        {productos.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="group overflow-hidden bg-white"
            style={{ gridColumn: p.col, gridRow: p.row }}
          >
            {/* Image fills all space above the title bar */}
            <div className="relative w-full h-[calc(100%-48px)] overflow-hidden">
              <Image
                src={p.image}
                alt={p.label}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            {/* Title bar */}
            <div className="h-12 flex items-center justify-center px-3 bg-white">
              <span className="font-heading font-semibold text-primary text-sm text-center leading-tight">
                {p.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
