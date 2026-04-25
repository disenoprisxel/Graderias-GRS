import { FiCheck } from 'react-icons/fi'

interface CaracteristicasGridProps {
  items: string[]
  bgCard?: string   // override background when needed (e.g. inside a grey section)
}

export default function CaracteristicasGrid({ items, bgCard }: CaracteristicasGridProps) {
  if (!items.length) return null
  return (
    <div className="mt-8">
      <div className="flex items-center gap-3 mb-5">
        <span className="w-1 h-6 rounded-full bg-primary shrink-0" />
        <h2 className="font-heading font-bold text-dark text-xl">Características</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {items.map((item, i) => (
          <div
            key={item}
            className={`flex items-start gap-3 rounded-xl p-4 border border-primary/15 ${bgCard ?? 'bg-primary/5'}`}
          >
            <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5 shadow-sm shadow-primary/30">
              <FiCheck size={13} className="text-white" strokeWidth={3} />
            </div>
            <span className="text-dark/80 text-sm font-heading font-semibold leading-snug pt-1">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
