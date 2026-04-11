import type { Metadata } from 'next'
import ProyectoPage from '@/components/ui/ProyectoPage'

export const metadata: Metadata = {
  title: 'Pista de BMX Tocancipá',
  description:
    'Graderías GRS suministró e instaló las graderías para el campeonato nacional de BMX en la pista de Tocancipá, Cundinamarca.',
}

export default function Page() {
  return (
    <ProyectoPage
      titulo="Pista de BMX Tocancipá"
      descripcion="Instalación de graderías para el campeonato nacional de BMX"
      lugar="Tocancipá, Cundinamarca"
      año="2023"
      imagen="/images/proyectos/bmx-tocancipa.jpg"
      descripcionLarga={[
        'Graderías GRS participó en la instalación de las graderías para el campeonato nacional de BMX realizado en la pista de Tocancipá, Cundinamarca. Este evento reunió a los mejores competidores de BMX del país.',
        'Se instalaron graderías con capacidad para varios miles de espectadores, cumpliendo con todas las normas de seguridad requeridas para eventos deportivos de esta envergadura.',
        'El montaje se realizó en tiempo récord, garantizando la seguridad estructural de todas las instalaciones y la comodidad de los espectadores durante el evento.',
      ]}
      datos={[
        { label: 'Tipo de evento', valor: 'Deporte extremo — BMX' },
        { label: 'Ubicación', valor: 'Tocancipá, Cundinamarca' },
        { label: 'Servicio', valor: 'Alquiler de graderías' },
        { label: 'Certificación', valor: 'ICC — NSR-10' },
      ]}
      galeria={[
        '/images/proyectos/bmx-tocancipa.jpg',
      ]}
    />
  )
}
