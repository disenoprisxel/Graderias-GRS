import type { Metadata } from 'next'
import ProyectoPage from '@/components/ui/ProyectoPage'

export const metadata: Metadata = {
  title: 'Fuxion Puerta de Oro 2024',
  description:
    'Montaje de graderías y escenario para el evento masivo Fuxion Puerta de Oro 2024 en Barranquilla, Colombia.',
}

export default function Page() {
  return (
    <ProyectoPage
      titulo="Fuxion Puerta de Oro 2024"
      descripcion="Graderías y escenario para el evento masivo en Barranquilla"
      lugar="Barranquilla, Atlántico"
      año="2024"
      imagen="/images/proyectos/fuxion2024.jpg"
      descripcionLarga={[
        'Graderías GRS fue la empresa encargada del montaje de graderías y escenario principal para el evento Fuxion Puerta de Oro 2024, realizado en Barranquilla. Un evento masivo que reunió a miles de asistentes en uno de los recintos más icónicos de la Costa Caribe.',
        'El proyecto requirió una logística de gran precisión: instalación de graderías para miles de espectadores, escenario principal con cubierta truss, pantallas LED y sistema de iluminación integrado.',
        'El evento fue un éxito total, con todas las estructuras funcionando perfectamente durante los días de actividad, demostrando la capacidad de Graderías GRS para atender eventos de talla nacional.',
      ]}
      datos={[
        { label: 'Tipo de evento', valor: 'Evento corporativo masivo' },
        { label: 'Ubicación', valor: 'Barranquilla, Atlántico' },
        { label: 'Año', valor: '2024' },
        { label: 'Servicios', valor: 'Graderías, escenario, pantallas LED' },
        { label: 'Certificación', valor: 'ICC' },
      ]}
      galeria={[
        '/images/proyectos/fuxion2024.jpg',
      ]}
    />
  )
}
