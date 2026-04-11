import type { Metadata } from 'next'
import ProyectoPage from '@/components/ui/ProyectoPage'

export const metadata: Metadata = {
  title: 'Copa Davis — Colombia vs Turquía',
  description:
    'Graderías GRS instaló las graderías y tribunas para la serie de Copa Davis Colombia vs Turquía disputada en Colombia.',
}

export default function Page() {
  return (
    <ProyectoPage
      titulo="Copa Davis — Colombia vs Turquía"
      descripcion="Graderías y tribunas para la serie de Copa Davis en Colombia"
      lugar="Colombia"
      año="2019"
      imagen="/images/proyectos/copa-davis.jpg"
      descripcionLarga={[
        'Graderías GRS fue seleccionada para el montaje de graderías y tribunas en la serie de Copa Davis Colombia vs Turquía. Este torneo internacional de tenis requirió instalaciones de alto nivel para cumplir con los estándares de la Federación Internacional de Tenis.',
        'Se instalaron tribunas alrededor de las canchas con excelente visibilidad para todos los espectadores. Las estructuras cumplieron con todos los requisitos técnicos y de seguridad del evento.',
        'La Copa Davis es uno de los eventos de tenis más prestantes del mundo, y la participación de Graderías GRS en este proyecto reafirma nuestra posición como empresa líder en el sector.',
      ]}
      datos={[
        { label: 'Tipo de evento', valor: 'Tenis internacional — Copa Davis' },
        { label: 'Ubicación', valor: 'Colombia' },
        { label: 'Servicio', valor: 'Alquiler de graderías y tribunas' },
        { label: 'Certificación', valor: 'ITF — ICC' },
      ]}
      galeria={[
        '/images/proyectos/copa-davis.jpg',
      ]}
    />
  )
}
