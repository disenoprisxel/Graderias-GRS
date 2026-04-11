import type { Metadata } from 'next'
import ProductoPage from '@/components/ui/ProductoPage'

export const metadata: Metadata = {
  title: 'Vallas y Barreras',
  description:
    'Alquiler y venta de vallas metálicas y barreras de seguridad para el control de accesos en eventos masivos en Colombia.',
}

export default function Page() {
  return (
    <ProductoPage
      titulo="Vallas y Barreras"
      descripcion="Control de accesos y seguridad perimetral para eventos masivos"
      imagen="/images/productos/vallas-barreras.jpg"
      descripcionLarga={[
        'Las vallas y barreras de seguridad de Graderías GRS son esenciales para el control de accesos, delimitación de zonas y seguridad perimetral en eventos masivos. Fabricadas en acero galvanizado de alta resistencia.',
        'Nuestras vallas son estables y resistentes a empujes de multitudes, cumpliendo con los estándares internacionales para eventos masivos. Se interconectan fácilmente formando perímetros de cualquier configuración.',
        'Disponemos de vallas metálicas peatonales, barreras tipo New Jersey, vallas publicitarias y sistemas de control de acceso tipo serpentín. Atendemos eventos de cualquier escala a nivel nacional.',
      ]}
      caracteristicas={[
        'Vallas metálicas galvanizadas',
        'Resistentes a empuje de multitudes',
        'Sistema de interconexión rápido',
        'Altura estándar 1,10 m',
        'Pies de anclaje para mayor estabilidad',
        'Barreras New Jersey disponibles',
        'Vallas publicitarias personalizables',
        'Disponibles en alquiler o venta',
      ]}
      galeria={[
        '/images/productos/vallas-barreras.jpg',
      ]}
    />
  )
}
