import type { Metadata } from 'next'
import ProyectoPage from '@/components/ui/ProyectoPage'

export const metadata: Metadata = {
  title: 'Estadio Aguilas Doradas | Graderías GRS',
  description:
    'Graderías GRS participó en el suministro e instalación de graderías y silletería para el Estadio Aguilas Doradas, sede del club de fútbol Aguilas Doradas de la Liga BetPlay.',
}

export default function Page() {
  return (
    <ProyectoPage
      titulo="Estadio Aguilas Doradas"
      descripcion="Suministro e instalación de graderías para el estadio del club Aguilas Doradas"
      lugar="Rionegro, Antioquia"
      año="2024"
      imagen="/images/proyectos/aguilas-doradas.jpg"
      descripcionLarga={[
        'Graderías GRS fue seleccionada para el suministro e instalación de graderías y silletería en el Estadio Aguilas Doradas, sede oficial del club de fútbol Aguilas Doradas de Rionegro, participante de la Liga BetPlay Dimayor.',
        'El proyecto incluyó la instalación de estructuras de gradería con silletería individualizada, cumpliendo con los estándares de la Dimayor y las exigencias técnicas para estadios de fútbol profesional en Colombia.',
        'Este proyecto reafirma la confianza que los clubes y organizaciones del fútbol colombiano depositan en Graderías GRS como proveedor especializado de infraestructura para estadios.',
      ]}
      datos={[
        { label: 'Deporte',       valor: 'Fútbol profesional — Liga BetPlay' },
        { label: 'Club',          valor: 'Aguilas Doradas FC' },
        { label: 'Ubicación',     valor: 'Rionegro, Antioquia' },
        { label: 'Año',           valor: '2024' },
        { label: 'Servicio',      valor: 'Suministro e instalación de graderías' },
        { label: 'Certificación', valor: 'ICC — Dimayor' },
      ]}
      videos={['/videos/aguilas-doradas.mp4']}
      videoCta="/videos/evento-nivel.mp4"
    />
  )
}
