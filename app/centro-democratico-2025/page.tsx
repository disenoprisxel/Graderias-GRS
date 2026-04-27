import type { Metadata } from 'next'
import ProyectoPage from '@/components/ui/ProyectoPage'

export const metadata: Metadata = {
  title: 'Campaña Centro Democrático 2025 | Graderías GRS',
  description:
    'Montaje de graderías para la campaña del Centro Democrático 2025. Graderías GRS proveyó las estructuras para los eventos y actos políticos de esta campaña a nivel nacional.',
}

const galeria = Array.from({ length: 19 }, (_, i) => {
  const n = String(i + 1).padStart(3, '0')
  return `/images/proyectos/centro-democratico-2025/${n}.jpg`
})

export default function Page() {
  return (
    <ProyectoPage
      titulo="Campaña Centro Democrático 2025"
      descripcion="Graderías para los eventos y actos de campaña a nivel nacional"
      lugar="Colombia"
      año="2025"
      imagen="/images/proyectos/centro-democratico-2025/006.jpg"
      descripcionLarga={[
        'Graderías GRS fue la empresa encargada del montaje de graderías para los eventos de campaña del Centro Democrático 2025. A lo largo de distintas ciudades del país, se instalaron estructuras temporales para concentraciones, actos políticos y eventos masivos, garantizando la seguridad y comodidad de los asistentes.',
        'Se desplegaron graderías en aluminio con silletería tipo estadio, adaptadas a los diferentes escenarios y capacidades requeridas en cada ciudad. El montaje ágil y el desmontaje eficiente permitieron cubrir múltiples eventos en el menor tiempo posible, cumpliendo con los exigentes cronogramas de la campaña.',
        'Este proyecto refleja la capacidad logística de Graderías GRS para operar a nivel nacional, con equipos técnicos en distintas regiones del país y estructuras certificadas que cumplen con todos los estándares de seguridad requeridos para eventos de alta concurrencia.',
      ]}
      datos={[
        { label: 'Tipo de evento',  valor: 'Campaña política' },
        { label: 'Año',             valor: '2025' },
        { label: 'Cobertura',       valor: 'Nacional' },
        { label: 'Material',        valor: 'Graderías en aluminio' },
        { label: 'Silletería',      valor: 'Tipo estadio' },
        { label: 'Servicios',       valor: 'Gradería general' },
        { label: 'Certificación',   valor: 'ICC' },
      ]}
      fotosDestacadas={[
        { src: '/images/proyectos/centro-democratico-2025/006.jpg' },
        { src: '/images/proyectos/centro-democratico-2025/010.jpg' },
      ]}
      galeria={galeria}
      watermark="/images/logo-blanco.png"
      watermarkHero
      videos={[
        '/videos/centro-democratico-2025/001.mp4',
        '/videos/centro-democratico-2025/002.mp4',
      ]}
    />
  )
}
