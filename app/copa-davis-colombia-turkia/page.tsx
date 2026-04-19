import type { Metadata } from 'next'
import ProyectoPage from '@/components/ui/ProyectoPage'

export const metadata: Metadata = {
  title: 'Copa Davis — Colombia vs Turquía 2019 | Graderías GRS',
  description:
    'Graderías GRS instaló graderías en hierro tipo VIP con silletería de colores para la Copa Davis Colombia vs Turquía 2019 en Bogotá, con capacidad para 2.000 personas.',
}

const galeria = Array.from({ length: 11 }, (_, i) => {
  const n = String(i + 1).padStart(3, '0')
  return `/images/proyectos/copa-davis/${n}.jpg`
})

export default function Page() {
  return (
    <ProyectoPage
      titulo="Copa Davis — Colombia vs Turquía"
      descripcion="Montaje de Graderías Para la Copa Davis 2019 · Bogotá, Colombia"
      lugar="Bogotá, Colombia"
      año="2019"
      imagen="/images/proyectos/copa-davis.jpg"
      descripcionLarga={[
        'Graderías GRS fue seleccionada para el montaje de graderías y tribunas en la serie de Copa Davis Colombia vs Turquía, celebrada en Bogotá en 2019. Este torneo internacional de tenis requirió instalaciones de alto nivel para cumplir con los estrictos estándares técnicos y de seguridad de la Federación Internacional de Tenis.',
        'Se instalaron graderías en hierro tipo VIP con silletería negra, amarilla, azul y roja, con altura de primer puesto de 1.45 mts, pasillo y carpa tipo pagoda. Las estructuras tuvieron una capacidad total para 2.000 personas, con distribución ajustada al requerimiento del cliente y garantizando una visibilidad óptima desde cada punto de la tribuna.',
        'La Copa Davis es uno de los torneos de tenis más prestantes del mundo, y la participación de Graderías GRS en este proyecto reafirma nuestra posición como empresa líder en montaje de estructuras para eventos deportivos de alto nivel en Colombia.',
      ]}
      datos={[
        { label: 'Tipo de evento',  valor: 'Tenis internacional — Copa Davis' },
        { label: 'Ubicación',       valor: 'Bogotá, Colombia' },
        { label: 'Año',             valor: '2019' },
        { label: 'Tipo gradería',   valor: 'VIP en hierro con silletería de colores' },
        { label: 'Altura 1er paso', valor: '1.45 mts' },
        { label: 'Capacidad total', valor: '2.000 personas' },
        { label: 'Adicional',       valor: 'Carpa tipo pagoda + pasillo' },
        { label: 'Certificación',   valor: 'ITF — ICC' },
      ]}
      fotosDestacadas={[
        { src: '/images/proyectos/copa-davis/001.jpg' },
        { src: '/images/proyectos/copa-davis/002.jpg' },
      ]}
      galeria={galeria}
      videoCta="/videos/evento-nivel.mp4"
    />
  )
}
