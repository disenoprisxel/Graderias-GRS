import Image from 'next/image'
import { FiCheckCircle } from 'react-icons/fi'

const puntos = [
  'Más de 25 años de experiencia en el sector',
  'Certificación ICC International Code Council',
  'Cobertura a nivel nacional en Colombia',
  'Equipos con los más altos estándares de calidad',
  'Asesoría técnica personalizada para cada evento',
]

export default function QuienesSomos() {
  return (
    <section id="quienes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <span className="text-primary font-heading font-bold uppercase tracking-widest text-sm">
            ¿Quiénes Somos?
          </span>
          <h2 className="font-heading font-extrabold text-dark text-3xl md:text-4xl mt-2 leading-tight">
            Empresa líder en graderías y escenarios para eventos en Colombia
          </h2>
          <p className="mt-4 text-body-text leading-relaxed">
            Graderías GRS es una empresa colombiana con más de 25 años de experiencia
            en el alquiler y venta de graderías, escenarios, cubiertas y mobiliario
            para todo tipo de eventos deportivos, culturales y corporativos a nivel nacional.
          </p>
          <p className="mt-3 text-body-text leading-relaxed">
            Contamos con la certificación del ICC (International Code Council), lo que garantiza
            que nuestras estructuras cumplen con los más estrictos estándares internacionales
            de seguridad y calidad.
          </p>

          <ul className="mt-6 space-y-3">
            {puntos.map((punto) => (
              <li key={punto} className="flex items-start gap-3 text-body-text">
                <FiCheckCircle className="text-primary mt-0.5 shrink-0" size={20} />
                <span>{punto}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contacto"
              className="bg-primary text-white font-heading font-bold px-6 py-3 rounded hover:bg-opacity-90 transition-colors"
            >
              Contáctenos
            </a>
            <a
              href="/descargas"
              className="border-2 border-dark text-dark font-heading font-bold px-6 py-3 rounded hover:bg-dark hover:text-white transition-colors"
            >
              Fichas Técnicas
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="relative rounded-lg overflow-hidden shadow-2xl aspect-[4/3]">
            <Image
              src="/images/quienes-somos.jpg"
              alt="Graderías GRS — Quiénes somos"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 bg-primary text-white rounded-xl p-5 shadow-xl text-center">
            <div className="font-heading font-extrabold text-4xl leading-none">25+</div>
            <div className="font-heading font-semibold text-sm uppercase mt-1">Años de<br />Experiencia</div>
          </div>
        </div>
      </div>
    </section>
  )
}
