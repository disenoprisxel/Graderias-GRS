import Link from 'next/link'
import Image from 'next/image'

const proyectos = [
  {
    titulo: 'Pista de BMX Tocancipá',
    descripcion: 'Graderías para el campeonato nacional de BMX en Tocancipá, Cundinamarca.',
    href: '/pista_bmx_tocancipa',
    image: '/images/proyectos/bmx-tocancipa.jpg',
  },
  {
    titulo: 'Estadio de Béisbol Sincelejo',
    descripcion: 'Suministro de silletería y graderías para el estadio de béisbol de Sincelejo.',
    href: '/venta_de_silleteria_sincelejo',
    image: '/images/proyectos/sincelejo.jpg',
  },
  {
    titulo: 'Fuxion Puerta de Oro 2024',
    descripcion: 'Montaje de graderías y escenario para el evento Fuxion en Barranquilla.',
    href: '/fuxion2024',
    image: '/images/proyectos/fuxion2024.jpg',
  },
  {
    titulo: 'Visita del Papa Francisco',
    descripcion: 'Estructuras y graderías para la histórica visita del Papa Francisco a Colombia.',
    href: '/visita-del-papa-francisco',
    image: '/images/proyectos/papa-francisco.jpg',
  },
  {
    titulo: 'Copa Davis — Colombia vs Turkía',
    descripcion: 'Instalación de graderías para la serie de Copa Davis disputada en Colombia.',
    href: '/copa-davis-colombia-turkia',
    image: '/images/proyectos/copa-davis.jpg',
  },
  {
    titulo: 'Copa Claro Colsanitas',
    descripcion: 'Montaje de tribunas y escenarios para el torneo de tenis Copa Claro Colsanitas.',
    href: '/copa-claro-colsanitas',
    image: '/images/proyectos/colsanitas.jpg',
  },
  {
    titulo: 'Juegos Centroamericanos y del Caribe',
    descripcion: 'Participación en los Juegos Centroamericanos y del Caribe con graderías certificadas.',
    href: '/juegos-centroamericanos-y-del-caribe',
    image: '/images/proyectos/juegos-centroamericanos.jpg',
  },
  {
    titulo: 'Juegos Centroam. Barranquilla',
    descripcion: 'Suministro de graderías y estructuras para los Juegos de Barranquilla.',
    href: '/juegos-centroamericanos-y-del-caribe-barranquilla',
    image: '/images/proyectos/barranquilla.jpg',
  },
]

export default function ProyectosDestacados() {
  return (
    <section id="proyectos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-heading font-bold uppercase tracking-widest text-sm">
            Nuestro trabajo
          </span>
          <h2 className="font-heading font-extrabold text-dark text-3xl md:text-4xl mt-2">
            Proyectos Destacados
          </h2>
          <p className="mt-3 text-body-text max-w-2xl mx-auto">
            Hemos participado en los eventos más importantes de Colombia y la región,
            garantizando seguridad y calidad en cada instalación.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {proyectos.map((proyecto) => (
            <Link
              key={proyecto.href}
              href={proyecto.href}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-light"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-dark">
                <Image
                  src={proyecto.image}
                  alt={proyecto.titulo}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-heading font-bold text-dark text-base leading-snug group-hover:text-primary transition-colors">
                  {proyecto.titulo}
                </h3>
                <p className="mt-2 text-body-text text-sm leading-relaxed line-clamp-2">
                  {proyecto.descripcion}
                </p>
                <span className="mt-3 inline-block text-primary font-heading font-semibold text-sm">
                  Ver proyecto →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
