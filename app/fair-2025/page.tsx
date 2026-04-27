import type { Metadata } from 'next'
import ProyectoPage from '@/components/ui/ProyectoPage'

export const metadata: Metadata = {
  title: 'F-AIR 2025 | Graderías GRS',
  description:
    'Montaje de graderías para F-AIR 2025, la Feria Aeronáutica Internacional de Colombia celebrada en el Centro de Exposiciones Corferias. Graderías GRS fue la empresa encargada de las estructuras para este evento de talla mundial.',
}

const galeria = Array.from({ length: 17 }, (_, i) => {
  const n = String(i + 1).padStart(3, '0')
  return `/images/proyectos/fair-2026/${n}.jpg`
})

export default function Page() {
  return (
    <ProyectoPage
      titulo="F-AIR 2025"
      descripcion="Graderías para la Feria Aeronáutica Internacional de Colombia"
      lugar="Bogotá"
      año="2025"
      imagen="/images/proyectos/fair-2026/hero.jpg"
      descripcionLarga={[
        'Graderías GRS fue la empresa encargada del montaje de graderías para F-AIR 2025, la Feria Aeronáutica Internacional de Colombia, uno de los eventos de aviación más importantes de América Latina. El certamen reunió a miles de visitantes y profesionales de la industria aeronáutica en las instalaciones de Corferias, Bogotá.',
        'Se instalaron graderías en aluminio con silletería tipo estadio para la zona de espectadores de las exhibiciones aéreas, garantizando comodidad, visibilidad y seguridad para el público durante todas las jornadas de vuelos y demostraciones en pista.',
        'Este proyecto demuestra la versatilidad de Graderías GRS para adaptarse a eventos de gran escala y alto flujo de visitantes, cumpliendo con los estándares técnicos internacionales y los tiempos de montaje exigidos por la organización del evento.',
      ]}
      datos={[
        { label: 'Tipo de evento',  valor: 'Feria aeronáutica internacional' },
        { label: 'Año',             valor: '2025' },
        { label: 'Ciudad',          valor: 'Bogotá, Colombia' },
        { label: 'Sede',            valor: 'Corferias' },
        { label: 'Material',        valor: 'Graderías en aluminio' },
        { label: 'Silletería',      valor: 'Tipo estadio' },
        { label: 'Certificación',   valor: 'ICC' },
      ]}
      fotosDestacadas={[
        { src: '/images/proyectos/fair-2026/003.jpg' },
        { src: '/images/proyectos/fair-2026/004.jpg' },
      ]}
      galeria={galeria}
      watermark="/images/logo-blanco.png"
      watermarkHero
      videos={['/videos/fair-2026/001.mp4']}
    />
  )
}
