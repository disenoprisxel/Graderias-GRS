import type { Metadata } from 'next'
import ProyectoPage from '@/components/ui/ProyectoPage'

export const metadata: Metadata = {
  title: 'Fuxion 2024 Puerta de Oro | Graderías GRS',
  description:
    'Montaje de graderías en aluminio para el evento masivo Fuxion 2024 Puerta de Oro en Barranquilla, Colombia.',
}

const galeria = Array.from({ length: 23 }, (_, i) => {
  const n = String(i + 1).padStart(3, '0')
  return `/images/proyectos/fuxion/${n}.jpg`
})

export default function Page() {
  return (
    <ProyectoPage
      titulo="Fuxion 2024 Puerta de Oro"
      descripcion="Graderías en aluminio para el evento masivo en Barranquilla"
      lugar="Barranquilla, Atlántico"
      año="2024"
      imagen="/images/proyectos/fuxion2024.jpg"
      descripcionLarga={[
        'Graderías GRS fue la empresa encargada del montaje de graderías y escenario principal para el evento Fuxion 2024 Puerta de Oro, realizado en Barranquilla. Un evento masivo que reunió a miles de asistentes en uno de los recintos más icónicos de la Costa Caribe.',
        'Se instalaron graderías en aluminio con altura de primer puesto de 1.45 mts y pasillo, con distribución de acuerdo al requerimiento del cliente. El proyecto requirió una logística de gran precisión: instalación de graderías para miles de espectadores, escenario principal con cubierta truss, pantallas LED y sistema de iluminación integrado.',
        'El evento fue un éxito total, con todas las estructuras funcionando perfectamente durante los días de actividad, demostrando la capacidad de Graderías GRS para atender eventos de talla nacional con los más altos estándares de calidad y seguridad.',
      ]}
      datos={[
        { label: 'Tipo de evento',  valor: 'Evento corporativo masivo' },
        { label: 'Ubicación',       valor: 'Barranquilla, Atlántico' },
        { label: 'Año',             valor: '2024' },
        { label: 'Material',        valor: 'Graderías en aluminio' },
        { label: 'Altura 1er paso', valor: '1.45 mts' },
        { label: 'Servicios',       valor: 'Graderías, escenario, pantallas LED' },
        { label: 'Certificación',   valor: 'ICC' },
      ]}
      fotosDestacadas={[
        { src: '/images/proyectos/fuxion/001.jpg' },
        { src: '/images/proyectos/fuxion/002.jpg' },
      ]}
      galeria={galeria}
      videoCta="/videos/evento-nivel.mp4"
    />
  )
}
