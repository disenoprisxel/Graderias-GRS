import type { Metadata } from 'next'
import ProyectoPage from '@/components/ui/ProyectoPage'

export const metadata: Metadata = {
  title: 'Billie Jean King Cup 2026 | Graderías GRS',
  description:
    'Montaje de graderías para la Billie Jean King Cup 2026 en Colombia. Graderías GRS fue la empresa encargada de las estructuras para este torneo internacional de tenis.',
}

const galeria = Array.from({ length: 7 }, (_, i) => {
  const n = String(i + 1).padStart(3, '0')
  return `/images/proyectos/billy-jean-king/${n}.jpg`
})

export default function Page() {
  return (
    <ProyectoPage
      titulo="Billie Jean King Cup 2026"
      descripcion="Graderías para el torneo internacional de tenis en Colombia"
      lugar="Colombia"
      año="2026"
      imagen="/images/proyectos/billy-jean-king/001.jpg"
      descripcionLarga={[
        'Graderías GRS fue la empresa encargada del montaje de graderías para la Billie Jean King Cup 2026, el torneo internacional de tenis femenino más importante del mundo, celebrado en Colombia. Un evento de talla mundial que reunió a los mejores equipos nacionales en una sede preparada con los más altos estándares internacionales.',
        'Se instalaron graderías en aluminio con silletería tipo estadio, garantizando comodidad, visibilidad y seguridad para todos los espectadores. El montaje incluyó secciones VIP y gradería general, adaptadas al reglamento y exigencias técnicas del torneo internacional.',
        'Este proyecto reafirma la capacidad de Graderías GRS para atender eventos deportivos de categoría mundial, con estructuras certificadas, montaje en tiempo récord y operación técnica durante todos los días de competencia.',
      ]}
      datos={[
        { label: 'Tipo de evento',  valor: 'Torneo internacional de tenis' },
        { label: 'Competencia',     valor: 'Billie Jean King Cup' },
        { label: 'Año',             valor: '2026' },
        { label: 'Material',        valor: 'Graderías en aluminio' },
        { label: 'Silletería',      valor: 'Tipo estadio, colores' },
        { label: 'Servicios',       valor: 'Graderías VIP y general' },
        { label: 'Certificación',   valor: 'ICC' },
      ]}
      fotosDestacadas={[
        { src: '/images/proyectos/billy-jean-king/002.jpg' },
        { src: '/images/proyectos/billy-jean-king/003.jpg' },
      ]}
      galeria={galeria}
      watermark="/images/logo-blanco.png"
      watermarkHero
      videos={[
        '/videos/billy-jean-king/001.mp4',
        '/videos/billy-jean-king/002.mp4',
        '/videos/billy-jean-king/003.mp4',
        '/videos/billy-jean-king/004.mp4',
        '/videos/billy-jean-king/005.mp4',
        '/videos/billy-jean-king/006.mp4',
        '/videos/billy-jean-king/007.mp4',
      ]}
    />
  )
}
