import Image from 'next/image'
import { FiUsers, FiGrid, FiCalendar } from 'react-icons/fi'

const stats = [
  { icono: FiUsers,    numero: '387',    label: 'Clientes a nivel\nNacional' },
  { icono: FiGrid,     numero: '+12,000', label: 'Puestos de\ngradería VIP y\ngeneral' },
  { icono: FiCalendar, numero: '+216',    label: 'Eventos\nrealizados en el\nrecorrido del año' },
]

export default function CoberturaNacional() {
  return (
    <section className="relative py-20 bg-[#1a1a1a] overflow-hidden">
      {/* Fondo desenfocado */}
      <div className="absolute inset-0">
        <Image
          src="/images/cobertura-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        {/* Card central */}
        <div className="bg-[#222] rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-2xl">
          {/* Texto + stats */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <h2 className="font-heading font-extrabold text-white text-3xl md:text-4xl uppercase leading-tight">
              Llevamos tu evento al<br />siguiente nivel
            </h2>
            <div className="mt-4 w-8 h-0.5 bg-primary" />
            <p className="mt-5 text-light/70 text-sm leading-relaxed">
              Hemos vendido y alquilado graderías en hierro y aluminio, tarimas,
              vallas y palcos de honor para el servicio de clientes a nivel nacional,
              con más de 20 años en el mercado, logramos:
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap gap-6">
              {stats.map(({ icono: Icono, numero, label }) => (
                <div key={numero} className="flex flex-col items-start">
                  <Icono className="text-primary mb-2" size={28} />
                  <span className="font-heading font-extrabold text-primary text-2xl leading-none">
                    {numero}
                  </span>
                  <span className="text-light/60 text-xs mt-1 leading-snug whitespace-pre-line">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mapa de Colombia */}
          <div className="relative min-h-72 md:min-h-0 bg-[#1e1e2e]">
            <Image
              src="/images/mapa-colombia.png"
              alt="Cobertura nacional — Mapa de Colombia"
              fill
              className="object-contain p-6"
            />
          </div>
        </div>
      </div>

      {/* Estrella decorativa */}
      <div className="relative z-10 text-center mt-6 text-white/30 text-2xl">★</div>
    </section>
  )
}
