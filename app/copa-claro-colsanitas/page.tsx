import type { Metadata } from 'next'
import ProyectoPage from '@/components/ui/ProyectoPage'

export const metadata: Metadata = {
  title: 'Copa Claro Colsanitas',
  description:
    'Graderías GRS montó las tribunas y graderías para el torneo de tenis Copa Claro Colsanitas, el mayor torneo de tenis femenino de Colombia.',
}

export default function Page() {
  return (
    <ProyectoPage
      titulo="Copa Claro Colsanitas"
      descripcion="Tribunas y graderías para el torneo de tenis femenino más importante de Colombia"
      lugar="Bogotá, Colombia"
      año="Edición múltiple"
      imagen="/images/proyectos/colsanitas.jpg"
      descripcionLarga={[
        'Graderías GRS es proveedor oficial de tribunas y graderías del torneo de tenis Copa Claro Colsanitas, el torneo de tenis femenino más importante de Colombia y uno de los torneos WTA más reconocidos de Latinoamérica.',
        'Año tras año instalamos las tribunas alrededor de las canchas principales del torneo, garantizando una experiencia de espectador de primer nivel. Las instalaciones cumplen con los estándares de la Women\'s Tennis Association.',
        'Nuestra participación en este torneo de forma continua es un reflejo de la confianza que las organizaciones de eventos más exigentes del país depositan en Graderías GRS.',
      ]}
      datos={[
        { label: 'Tipo de evento', valor: 'Tenis profesional — WTA' },
        { label: 'Ubicación', valor: 'Bogotá, Colombia' },
        { label: 'Servicio', valor: 'Alquiler de tribunas y graderías' },
        { label: 'Certificación', valor: 'WTA — ICC' },
        { label: 'Ediciones', valor: 'Múltiples años consecutivos' },
      ]}
      galeria={[
        '/images/proyectos/colsanitas.jpg',
      ]}
    />
  )
}
