import type { Metadata } from 'next'
import ProyectoPage from '@/components/ui/ProyectoPage'

export const metadata: Metadata = {
  title: 'Juegos Centroaméricanos y del Caribe Mar y Playa | Graderías GRS',
  description:
    'Graderías GRS instaló graderías en hierro tipo VIP y gradería general en aluminio para los Juegos Centroaméricanos y del Caribe Mar y Playa en Santa Marta, con capacidad para 4.100 personas.',
}

const galeria = Array.from({ length: 7 }, (_, i) => {
  const n = String(i + 1).padStart(3, '0')
  return `/images/proyectos/juegos-mar-playa/${n}.jpg`
})

export default function Page() {
  return (
    <ProyectoPage
      titulo="Juegos Centroaméricanos y del Caribe Mar y Playa"
      descripcion="Montaje de Graderías para los Juegos Centroaméricanos y del Caribe Mar y Playa · Santa Marta, Colombia"
      lugar="Santa Marta, Colombia"
      año="2018"
      imagen="/images/proyectos/juegos-centroamericanos.jpg"
      descripcionLarga={[
        'Graderías GRS participó en los Juegos Centroaméricanos y del Caribe Mar y Playa con el suministro e instalación de graderías para diversas disciplinas deportivas celebradas en Santa Marta. Este evento multideportivo de modalidad acuática y de playa es uno de los más importantes de la región.',
        'Para este evento se instalaron graderías en hierro tipo VIP con silletería negra, amarilla, azul, roja y verde, y adicionalmente gradería tipo general con sentaderos en aluminio y techo en polisombra. Cada gradería con altura de primer puesto de 1.45 mts, con capacidad total para 4.100 personas y distribución ajustada al requerimiento del cliente.',
        'Las instalaciones cumplieron con los estrictos estándares requeridos por los organismos deportivos regionales, garantizando comodidad y seguridad para todos los espectadores. La participación en este evento de talla internacional reafirma el posicionamiento de Graderías GRS como empresa de referencia para eventos deportivos de alto nivel en Colombia.',
      ]}
      datos={[
        { label: 'Tipo de evento',  valor: 'Juegos Centroaméricanos y del Caribe' },
        { label: 'Modalidad',       valor: 'Mar y Playa' },
        { label: 'Ubicación',       valor: 'Santa Marta, Colombia' },
        { label: 'Año',             valor: '2018' },
        { label: 'Tipo gradería',   valor: 'VIP en hierro + General en aluminio' },
        { label: 'Silletería VIP',  valor: 'Negra, amarilla, azul, roja y verde' },
        { label: 'General',         valor: 'Sentaderos en aluminio + techo polisombra' },
        { label: 'Altura 1er paso', valor: '1.45 mts' },
        { label: 'Capacidad total', valor: '4.100 personas' },
        { label: 'Certificación',   valor: 'ICC — Estándares olímpicos' },
      ]}
      fotosDestacadas={[
        { src: '/images/proyectos/juegos-mar-playa/001.jpg' },
        { src: '/images/proyectos/juegos-mar-playa/002.jpg' },
      ]}
      galeria={galeria}
      videoCta="/videos/evento-nivel.mp4"
    />
  )
}
