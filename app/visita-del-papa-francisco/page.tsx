import type { Metadata } from 'next'
import ProyectoPage from '@/components/ui/ProyectoPage'

export const metadata: Metadata = {
  title: 'Visita del Papa Francisco a Colombia',
  description:
    'Graderías GRS participó en las estructuras y graderías para la histórica visita del Papa Francisco a Colombia en 2017.',
}

export default function Page() {
  return (
    <ProyectoPage
      titulo="Visita del Papa Francisco"
      descripcion="Estructuras y graderías para la visita histórica del Papa a Colombia"
      lugar="Colombia"
      año="2017"
      imagen="/images/proyectos/papa-francisco.jpg"
      descripcionLarga={[
        'Graderías GRS tuvo el honor de participar en uno de los eventos más importantes de la historia reciente de Colombia: la visita del Papa Francisco en 2017. Fuimos parte del equipo que instaló las estructuras y graderías para las multitudinarias misas y eventos públicos.',
        'El proyecto representó un desafío logístico de primera magnitud, con la necesidad de instalar graderías para cientos de miles de personas cumpliendo los más estrictos protocolos de seguridad.',
        'Este proyecto es una de las mayores referencias de nuestra empresa, demostrando que Graderías GRS tiene la capacidad técnica y operativa para participar en los eventos más exigentes del país.',
      ]}
      datos={[
        { label: 'Tipo de evento', valor: 'Evento religioso masivo' },
        { label: 'Ubicación', valor: 'Varias ciudades de Colombia' },
        { label: 'Año', valor: '2017' },
        { label: 'Servicio', valor: 'Graderías y estructuras temporales' },
        { label: 'Asistentes', valor: 'Cientos de miles' },
      ]}
      galeria={[
        '/images/proyectos/papa-francisco.jpg',
      ]}
    />
  )
}
