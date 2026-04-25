import type { Metadata } from 'next'
import ProductoPage from '@/components/ui/ProductoPage'

export const metadata: Metadata = {
  title: 'Vallas y Mallas de Encerramiento | Graderías GRS',
  description:
    'Diseño y fabricación de vallas y mallas de encerramiento para eventos masivos en Colombia. Control de accesos y seguridad perimetral personalizada.',
}

const galeria = Array.from({ length: 3 }, (_, i) => {
  const n = String(i + 1).padStart(3, '0')
  return `/images/productos/vallas/${n}.jpg`
})

export default function Page() {
  return (
    <ProductoPage
      titulo="Vallas y Mallas de Encerramiento"
      descripcion="Su evento en las mejores manos..."
      imagen="/images/productos/vallas-barreras.jpg"
      descripcionLarga={[
        'Graderías GRS diseña y fabrica vallas de encerramiento a medida, adaptándonos al espacio y distribución específica de cada evento. Nuestras vallas y barreras de seguridad son esenciales para el control de accesos, delimitación de zonas y seguridad perimetral en eventos masivos, fabricadas en acero galvanizado de alta resistencia.',
        'Al diseñar y fabricar nuestros propios productos, garantizamos soluciones personalizadas que se ajustan con precisión a las necesidades de cada cliente y recinto. Nuestras vallas son estables y resistentes al empuje de multitudes, cumpliendo con los estándares internacionales para eventos masivos, y se interconectan fácilmente formando perímetros de cualquier configuración.',
        'Disponemos de vallas metálicas peatonales, barreras tipo New Jersey, vallas publicitarias y sistemas de control de acceso tipo serpentín. Atendemos eventos de cualquier escala a nivel nacional.',
      ]}
      caracteristicas={[
        'Diseño y fabricación propios',
        'Vallas metálicas galvanizadas',
        'Adaptables a cualquier espacio',
        'Resistentes al empuje de multitudes',
        'Sistema de interconexión rápido',
        'Altura estándar 1,10 m',
        'Pies de anclaje para mayor estabilidad',
        'Disponibles en alquiler o venta',
      ]}
      galeria={galeria}
    />
  )
}
