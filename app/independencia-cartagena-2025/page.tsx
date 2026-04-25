import type { Metadata } from 'next'
import ProyectoPage from '@/components/ui/ProyectoPage'

export const metadata: Metadata = {
  title: 'Fiestas de la Independencia Cartagena 2025 | Graderías GRS',
  description:
    'Montaje de graderías para las Fiestas de la Independencia de Cartagena de Indias 2025. Graderías GRS proveyó las estructuras para uno de los eventos culturales más importantes de Colombia.',
}

const galeria = Array.from({ length: 2 }, (_, i) => {
  const n = String(i + 1).padStart(3, '0')
  return `/images/proyectos/independencia-cartagena-2025/${n}.jpg`
})

export default function Page() {
  return (
    <ProyectoPage
      titulo="Fiestas de la Independencia — Cartagena 2025"
      descripcion="Graderías para la celebración más importante de Cartagena de Indias"
      lugar="Cartagena de Indias"
      año="2025"
      imagen="/images/proyectos/independencia-cartagena-2025/001.jpg"
      descripcionLarga={[
        'Graderías GRS fue la empresa encargada del montaje de graderías para las Fiestas de la Independencia de Cartagena de Indias 2025, la celebración cultural y patriótica más importante de la ciudad heroica. Cada año, este evento reúne a miles de personas en torno a los desfiles, conciertos y actividades que conmemoran la independencia de la ciudad.',
        'Se instalaron graderías en aluminio con silletería tipo estadio para las zonas de palco y gradería general, garantizando la comodidad y seguridad de los asistentes durante todas las jornadas del evento. Las estructuras fueron ubicadas estratégicamente para ofrecer la mejor visibilidad a lo largo del recorrido oficial.',
        'Este proyecto refuerza la trayectoria de Graderías GRS en eventos culturales y cívicos de alto impacto en Colombia, aportando soluciones de infraestructura temporal certificadas y adaptadas a los requerimientos de cada escenario.',
      ]}
      datos={[
        { label: 'Tipo de evento',  valor: 'Festividad cívica y cultural' },
        { label: 'Año',             valor: '2025' },
        { label: 'Ciudad',          valor: 'Cartagena de Indias, Bolívar' },
        { label: 'Material',        valor: 'Graderías en aluminio' },
        { label: 'Silletería',      valor: 'Tipo estadio' },
        { label: 'Servicios',       valor: 'Palco y gradería general' },
        { label: 'Certificación',   valor: 'ICC' },
      ]}
      fotosDestacadas={[
        { src: '/images/proyectos/independencia-cartagena-2025/001.jpg' },
        { src: '/images/proyectos/independencia-cartagena-2025/002.jpg' },
      ]}
      galeria={galeria}
      watermark="/images/logo-blanco.png"
    />
  )
}
