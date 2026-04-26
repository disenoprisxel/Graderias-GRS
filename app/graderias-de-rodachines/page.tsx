import type { Metadata } from 'next'
import ProductoPage from '@/components/ui/ProductoPage'

export const metadata: Metadata = {
  title: 'Graderías de Rodachines | Graderías GRS',
  description:
    'Graderías móviles sobre rodachines para espacios interiores. Fácil desplazamiento, plegado compacto y máxima versatilidad para polideportivos, colegios y escenarios cubiertos.',
}

const caracteristicas = [
  'Estructura en aluminio ligero',
  'Ruedas con freno de seguridad',
  'Plegado y guardado compacto',
  'Sin anclaje permanente al piso',
  'Silletería tipo estadio disponible',
  'Ideal para polideportivos y colegios',
  'Fácil desplazamiento con 1 persona',
  'Alquiler o venta',
]

const galeria = Array.from({ length: 22 }, (_, i) => {
  const n = String(i + 1).padStart(3, '0')
  return `/images/proyectos/rodachines-cali-2026/${n}.jpg`
})

export default function Page() {
  return (
    <ProductoPage
      titulo="Graderías de Rodachines"
      descripcion="Su evento en las mejores manos..."
      imagen="/images/proyectos/rodachines-cali-2026/hero.jpg"
      descripcionLarga={[
        'Las graderías de rodachines de Graderías GRS son la solución perfecta para espacios interiores que requieren flexibilidad. Diseñadas para moverse sin esfuerzo gracias a sus ruedas con freno de seguridad, permiten configurar y despejar el espacio en minutos, adaptándose a las necesidades de cada evento sin necesidad de anclaje al piso.',
        'Fabricadas en estructura metálica de alta resistencia, estas graderías ofrecen la misma solidez y confort que nuestros modelos fijos, con la ventaja de ser completamente móviles. Son ideales para polideportivos, coliseos cubiertos, colegios, universidades y cualquier escenario interior donde el espacio deba usarse para múltiples propósitos.',
        'Disponibles en diferentes capacidades y configuraciones, con opciones de silletería tipo estadio o sin silletería. GRS ofrece tanto la modalidad de alquiler para eventos puntuales como la venta para instalaciones permanentes con necesidades variables.',
      ]}
      caracteristicas={caracteristicas}
      galeria={galeria}
      watermark="/images/logo-blanco.png"
      videos={[
        '/videos/rodachines-cali-2026/001.mp4',
        '/videos/rodachines-cali-2026/002.mp4',
      ]}
    />
  )
}
