import Link from 'next/link'
import Image from 'next/image'

const productos = [
  {
    label: 'Venta de Graderías',
    href: '/venta_de_graderias',
    image: '/images/productos/venta-graderias.jpg',
  },
  {
    label: 'Alquiler de Graderías',
    href: '/alquiler_de_graderias',
    image: '/images/productos/alquiler-graderias.jpg',
  },
  {
    label: 'Techos de Graderías',
    href: '/techos-de-graderias',
    image: '/images/productos/techos-graderias.jpg',
  },
  {
    label: 'Silletería Escenarios',
    href: '/silleteria-escenarios',
    image: '/images/productos/silleteria.jpg',
  },
  {
    label: 'Cubierta en Truss',
    href: '/cubiertas-truss',
    image: '/images/productos/cubiertas-truss.jpg',
  },
  {
    label: 'Bancas de Madera',
    href: '/bancas-de-madera',
    image: '/images/productos/bancas-madera.jpg',
  },
  {
    label: 'Paneles y Tarimas',
    href: '/paneles-y-tarimas',
    image: '/images/productos/paneles-tarimas.jpg',
  },
  {
    label: 'Vallas y Barreras',
    href: '/vallas-y-barreras',
    image: '/images/productos/vallas-barreras.jpg',
  },
  {
    label: 'Stand Truss',
    href: '/stand-truss',
    image: '/images/productos/stand-truss.jpg',
  },
  {
    label: 'Pantallas LED',
    href: '/pantallas-led',
    image: '/images/productos/pantallas-led.jpg',
  },
  {
    label: 'Diseño y Producción',
    href: '/diseno-y-produccion',
    image: '/images/productos/diseno-produccion.jpg',
  },
]

export default function ProductosGrid() {
  return (
    <section className="py-16 bg-light/40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-primary font-heading font-bold uppercase tracking-widest text-sm">
            Lo que ofrecemos
          </span>
          <h2 className="font-heading font-extrabold text-dark text-3xl md:text-4xl mt-2">
            Nuestros Productos y Servicios
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {productos.map((producto) => (
            <Link
              key={producto.href}
              href={producto.href}
              className="group relative overflow-hidden rounded-lg shadow-md aspect-square bg-dark"
            >
              <Image
                src={producto.image}
                alt={producto.label}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-50"
                loading="lazy"
              />
              {/* Green overlay on hover */}
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-end p-4">
                <span className="font-heading font-bold text-white uppercase text-sm leading-tight drop-shadow-lg">
                  {producto.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
