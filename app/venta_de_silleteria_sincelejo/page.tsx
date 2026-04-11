import type { Metadata } from 'next'
import ProyectoPage from '@/components/ui/ProyectoPage'

export const metadata: Metadata = {
  title: 'Estadio de Béisbol Sincelejo',
  description:
    'Graderías GRS suministró la silletería y graderías para el estadio de béisbol de Sincelejo, proyecto de infraestructura deportiva en Colombia.',
}

export default function Page() {
  return (
    <ProyectoPage
      titulo="Estadio de Béisbol Sincelejo"
      descripcion="Suministro de silletería y graderías para el estadio de béisbol"
      lugar="Sincelejo, Sucre"
      año="2022"
      imagen="/images/proyectos/sincelejo.jpg"
      descripcionLarga={[
        'Graderías GRS fue seleccionada para el suministro e instalación de la silletería y graderías del estadio de béisbol de Sincelejo, uno de los proyectos de infraestructura deportiva más importantes de la región Caribe de Colombia.',
        'El proyecto incluyó el diseño, fabricación e instalación de graderías permanentes con silletería individualizada, cumpliendo con los estándares internacionales para estadios de béisbol profesional.',
        'Este proyecto es un ejemplo de nuestra capacidad para abordar obras de gran envergadura, garantizando calidad, seguridad y entrega en los tiempos acordados.',
      ]}
      datos={[
        { label: 'Tipo de proyecto', valor: 'Infraestructura deportiva permanente' },
        { label: 'Deporte', valor: 'Béisbol' },
        { label: 'Ubicación', valor: 'Sincelejo, Sucre' },
        { label: 'Servicio', valor: 'Venta e instalación de silletería' },
        { label: 'Certificación', valor: 'ICC — NSR-10' },
      ]}
      galeria={[
        '/images/proyectos/sincelejo.jpg',
      ]}
    />
  )
}
