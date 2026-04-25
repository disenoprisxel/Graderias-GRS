import type { Metadata } from 'next'
import ProyectoPage from '@/components/ui/ProyectoPage'

export const metadata: Metadata = {
  title: 'Exposición Nacional Equina Bucaramanga 2026 | Graderías GRS',
  description:
    'Montaje de graderías para la Exposición Nacional Equina de Bucaramanga 2026. Graderías GRS proveyó las estructuras para este prestigioso evento de la cultura ecuestre colombiana.',
}

const galeria = Array.from({ length: 8 }, (_, i) => {
  const n = String(i + 1).padStart(3, '0')
  return `/images/proyectos/equina-bucaramanga/${n}.jpg`
})

export default function Page() {
  return (
    <ProyectoPage
      titulo="Exposición Nacional Equina — Bucaramanga 2026"
      descripcion="Graderías para el evento ecuestre más importante de Colombia"
      lugar="Bucaramanga"
      año="2026"
      imagen="/images/proyectos/equina-bucaramanga/005.jpg"
      descripcionLarga={[
        'Graderías GRS fue la empresa encargada del montaje de graderías para la Exposición Nacional Equina de Bucaramanga 2026, uno de los eventos ecuestres más importantes y tradicionales de Colombia. Un escenario donde la elegancia del caballo de paso fino y la cultura santandereana se unen para recibir a miles de espectadores.',
        'Se instalaron graderías en aluminio con silletería tipo estadio, garantizando comodidad, visibilidad óptima y seguridad para el público asistente durante todos los días de competencia y exhibición. El montaje fue diseñado para adaptarse al ruedo central del evento, cumpliendo con los requerimientos técnicos y espaciales del certamen.',
        'Este proyecto reafirma la capacidad de Graderías GRS para atender eventos culturales y ecuestres de alto nivel, aportando infraestructura certificada, montaje ágil y atención técnica permanente a lo largo de todo el evento.',
      ]}
      datos={[
        { label: 'Tipo de evento',  valor: 'Exposición ecuestre nacional' },
        { label: 'Año',             valor: '2026' },
        { label: 'Ciudad',          valor: 'Bucaramanga, Santander' },
        { label: 'Material',        valor: 'Graderías en aluminio' },
        { label: 'Silletería',      valor: 'Tipo estadio' },
        { label: 'Servicios',       valor: 'Gradería general' },
        { label: 'Certificación',   valor: 'ICC' },
      ]}
      fotosDestacadas={[
        { src: '/images/proyectos/equina-bucaramanga/001.jpg' },
        { src: '/images/proyectos/equina-bucaramanga/002.jpg' },
      ]}
      galeria={galeria}
      watermark="/images/logo-blanco.png"
    />
  )
}
