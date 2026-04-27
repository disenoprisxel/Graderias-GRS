import type { Metadata } from 'next'
import ProyectoPage from '@/components/ui/ProyectoPage'

export const metadata: Metadata = {
  title: 'Seguros del Estado Open 2025 | Graderías GRS',
  description:
    'Montaje de graderías para el Seguros del Estado Open 2025, torneo de tenis realizado en el Club Los Lagartos de Bogotá. Graderías GRS proveyó las estructuras para los espectadores del evento.',
}

const galeria = Array.from({ length: 7 }, (_, i) => {
  const n = String(i + 1).padStart(3, '0')
  return `/images/proyectos/bolivar-open-2025/${n}.jpg`
})

export default function Page() {
  return (
    <ProyectoPage
      titulo="Seguros del Estado Open 2025"
      descripcion="Torneo de tenis en el Club Los Lagartos — Bogotá"
      lugar="Club Los Lagartos, Bogotá"
      año="2025"
      imagen="/images/proyectos/bolivar-open-2025/hero.jpg"
      descripcionLarga={[
        'Graderías GRS fue la empresa encargada del montaje de graderías para el Seguros del Estado Open 2025, uno de los torneos de tenis más importantes del circuito nacional, celebrado en las instalaciones del Club Los Lagartos en Bogotá.',
        'Se instalaron estructuras temporales para espectadores alrededor de las canchas principales, garantizando visibilidad óptima, comodidad y seguridad para el público asistente durante los días de competencia.',
        'El proyecto demandó una logística precisa de montaje y desmontaje para adaptarse a los tiempos del torneo, cumpliendo con los estándares de seguridad exigidos para eventos deportivos de esta categoría.',
      ]}
      datos={[
        { label: 'Tipo de evento',  valor: 'Torneo de tenis' },
        { label: 'Año',             valor: '2025' },
        { label: 'Sede',            valor: 'Club Los Lagartos' },
        { label: 'Ciudad',          valor: 'Bogotá' },
        { label: 'Material',        valor: 'Graderías en aluminio' },
        { label: 'Patrocinador',    valor: 'Seguros del Estado' },
        { label: 'Certificación',   valor: 'ICC' },
      ]}
      fotosDestacadas={[
        { src: '/images/proyectos/bolivar-open-2025/001.jpg' },
        { src: '/images/proyectos/bolivar-open-2025/003.jpg' },
      ]}
      galeria={galeria}
      watermark="/images/logo-blanco.png"
      watermarkHero
      videos={['/videos/bolivar-open-2025/001.mp4']}
    />
  )
}
