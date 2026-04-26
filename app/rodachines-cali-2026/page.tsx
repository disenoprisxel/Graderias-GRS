import type { Metadata } from 'next'
import ProyectoPage from '@/components/ui/ProyectoPage'

export const metadata: Metadata = {
  title: 'Graderías de Rodachines — Cali 2026 | Graderías GRS',
  description:
    'Montaje de graderías de rodachines en Cali 2026. Graderías GRS proveyó estructuras móviles con ruedas para eventos en la ciudad de Cali, garantizando flexibilidad y seguridad en cada instalación.',
}

const galeria = Array.from({ length: 22 }, (_, i) => {
  const n = String(i + 1).padStart(3, '0')
  return `/images/proyectos/rodachines-cali-2026/${n}.jpg`
})

export default function Page() {
  return (
    <ProyectoPage
      titulo="Graderías de Rodachines — Cali 2026"
      descripcion="Estructuras móviles con rodachines para eventos en Cali"
      lugar="Cali, Colombia"
      año="2026"
      imagen="/images/proyectos/rodachines-cali-2026/hero.jpg"
      descripcionLarga={[
        'Graderías GRS realizó el montaje de graderías de rodachines en Cali durante 2026, proveyendo estructuras modulares con ruedas que permiten una mayor flexibilidad en la configuración de los espacios para eventos. Este tipo de gradería facilita el desplazamiento y reubicación rápida durante el montaje y desmontaje.',
        'Las graderías de rodachines son ideales para recintos cerrados como coliseos, pabellones y centros de convenciones, donde se requiere adaptabilidad a distintos formatos de evento. Su sistema de ruedas bloqueables garantiza estabilidad estructural durante el uso y agilidad en la logística.',
        'Graderías GRS cuenta con la experiencia y el inventario para atender proyectos de este tipo a lo largo de todo el territorio nacional, cumpliendo con los estándares de seguridad y normatividad vigente para estructuras temporales de espectadores.',
      ]}
      datos={[
        { label: 'Ciudad',          valor: 'Cali' },
        { label: 'Año',             valor: '2026' },
        { label: 'Tipo',            valor: 'Gradería de rodachines' },
        { label: 'Material',        valor: 'Aluminio' },
        { label: 'Movilidad',       valor: 'Ruedas bloqueables' },
        { label: 'Aplicación',      valor: 'Recintos cerrados' },
        { label: 'Certificación',   valor: 'ICC' },
      ]}
      fotosDestacadas={[
        { src: '/images/proyectos/rodachines-cali-2026/001.jpg' },
        { src: '/images/proyectos/rodachines-cali-2026/005.jpg' },
      ]}
      galeria={galeria}
      watermark="/images/logo-blanco.png"
      videos={[
        '/videos/rodachines-cali-2026/001.mp4',
        '/videos/rodachines-cali-2026/002.mp4',
      ]}
    />
  )
}
