import { FiCheckCircle, FiUserCheck } from 'react-icons/fi'

const items = [
  {
    icono: FiCheckCircle,
    titulo: '100% ALUMINIO',
    descripcion:
      'Graderías elevadas, al piso, con o sin techos, con o sin pasillos, zonas VIP. EN 100% aluminio.',
  },
  {
    icono: FiUserCheck,
    titulo: '100% SEGUROS',
    descripcion:
      'Cumplimos con las normas de seguridad establecidas para que su evento sea un éxito.',
  },
]

export default function NosotrosCumpliendo() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Título con subrayado decorativo en "Sueños" */}
        <h2 className="font-heading font-extrabold text-dark text-3xl md:text-4xl leading-tight">
          Nosotros Cumpliendo Tus{' '}
          <span className="relative inline-block">
            Sueños
            <span
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"
              aria-hidden="true"
            />
          </span>
        </h2>
        <p className="mt-5 text-body-text max-w-2xl leading-relaxed">
          Hacemos el montaje de tu evento a la medida de tus necesidades, para esto contamos con materiales:
        </p>

        {/* Feature cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.map(({ icono: Icono, titulo, descripcion }) => (
            <div key={titulo} className="flex items-start gap-5">
              {/* Black icon box */}
              <div className="w-20 h-20 bg-dark rounded-lg flex items-center justify-center shrink-0">
                <Icono className="text-primary" size={36} />
              </div>
              {/* Text */}
              <div>
                <h3 className="font-heading font-bold text-primary text-base uppercase tracking-wide">
                  {titulo}
                </h3>
                <p className="mt-2 text-body-text text-sm leading-relaxed">
                  {descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
