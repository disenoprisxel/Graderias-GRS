import type { Metadata } from 'next'
import ProyectoPage from '@/components/ui/ProyectoPage'

export const metadata: Metadata = {
  title: 'Juegos Centroamericanos y del Caribe — Barranquilla 2018',
  description:
    'Graderías GRS suministró e instaló las graderías y estructuras para los Juegos Centroamericanos y del Caribe Barranquilla 2018.',
}

export default function Page() {
  return (
    <ProyectoPage
      titulo="Juegos Centroam. Barranquilla 2018"
      descripcion="Graderías y estructuras para los Juegos de Barranquilla 2018"
      lugar="Barranquilla, Atlántico"
      año="2018"
      imagen="/images/proyectos/barranquilla.jpg"
      descripcionLarga={[
        'Los Juegos Centroamericanos y del Caribe de Barranquilla 2018 fueron el evento deportivo más importante celebrado en Colombia en décadas. Graderías GRS tuvo el privilegio de ser uno de los proveedores de graderías y estructuras para este megaevento.',
        'Participamos en la instalación de graderías temporales en múltiples escenarios deportivos de la ciudad, garantizando que miles de espectadores pudieran presenciar las competencias con comodidad y seguridad.',
        'Fue el mayor proyecto en la historia de Graderías GRS hasta ese momento, requiriendo la movilización de toda nuestra flota de equipos y personal técnico especializado.',
      ]}
      datos={[
        { label: 'Tipo de evento', valor: 'Juegos Centroamericanos y del Caribe' },
        { label: 'Ubicación', valor: 'Barranquilla, Atlántico' },
        { label: 'Año', valor: '2018' },
        { label: 'Servicio', valor: 'Graderías y estructuras temporales' },
        { label: 'Certificación', valor: 'ICC — Estándares olímpicos' },
        { label: 'Escala', valor: 'Múltiples escenarios simultáneos' },
      ]}
      galeria={[
        '/images/proyectos/barranquilla.jpg',
      ]}
    />
  )
}
