import type { Metadata } from 'next'
import ProyectoPage from '@/components/ui/ProyectoPage'

export const metadata: Metadata = {
  title: 'Juegos Centroaméricanos y del Caribe — Barranquilla | Graderías GRS',
  description:
    'Graderías GRS suministró e instaló graderías en hierro tipo VIP y general en aluminio para los Juegos Centroamericanos y del Caribe Barranquilla 2018, con capacidad para 7.000 personas.',
}

const galeria = [
  ...Array.from({ length: 10 }, (_, i) => {
    const n = String(i + 1).padStart(3, '0')
    return `/images/proyectos/juegos-barranquilla/${n}.jpg`
  }),
  '/images/proyectos/juegos-barranquilla/011.jpeg',
]

export default function Page() {
  return (
    <ProyectoPage
      titulo="Juegos Centroaméricanos y del Caribe — Barranquilla"
      descripcion="Montaje de Graderías en los Juegos Centroamericanos y del Caribe — Barranquilla, Colombia"
      lugar="Barranquilla, Atlántico"
      año="2018"
      imagen="/images/proyectos/barranquilla.jpg"
      descripcionLarga={[
        'Los Juegos Centroamericanos y del Caribe de Barranquilla 2018 fueron el evento deportivo más importante celebrado en Colombia en décadas. Graderías GRS tuvo el privilegio de ser uno de los proveedores de graderías y estructuras para este megaevento.',
        'Para este evento se instalaron graderías en hierro tipo VIP con silletería negra y verde, y adicionalmente gradería tipo general con sentaderos en aluminio y techo en polisombra. Cada gradería con altura de primer puesto de 1.45 mts, instaladas en la ciudad de Barranquilla, con capacidad total para 7.000 personas y distribución ajustada al requerimiento del cliente.',
        'Fue el mayor proyecto en la historia de Graderías GRS hasta ese momento, requiriendo la movilización de toda nuestra flota de equipos y personal técnico especializado en múltiples escenarios deportivos de la ciudad simultáneamente.',
      ]}
      datos={[
        { label: 'Tipo de evento',  valor: 'Juegos Centroamericanos y del Caribe' },
        { label: 'Ubicación',       valor: 'Barranquilla, Atlántico' },
        { label: 'Año',             valor: '2018' },
        { label: 'Tipo gradería',   valor: 'VIP en hierro + General en aluminio' },
        { label: 'Silletería VIP',  valor: 'Negra y verde' },
        { label: 'General',         valor: 'Sentaderos en aluminio + techo polisombra' },
        { label: 'Altura 1er paso', valor: '1.45 mts' },
        { label: 'Capacidad total', valor: '7.000 personas' },
        { label: 'Escala',          valor: 'Múltiples escenarios simultáneos' },
        { label: 'Certificación',   valor: 'ICC — Estándares olímpicos' },
      ]}
      fotosDestacadas={[
        { src: '/images/proyectos/juegos-barranquilla/001.jpg' },
      ]}
      galeria={galeria}
      videoCta="/videos/evento-nivel.mp4"
    />
  )
}
