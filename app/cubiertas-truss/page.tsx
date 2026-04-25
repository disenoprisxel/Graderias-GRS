import type { Metadata } from 'next'
import ProductoPage from '@/components/ui/ProductoPage'

export const metadata: Metadata = {
  title: 'Cubiertas Truss | Graderías GRS',
  description:
    'Cubiertas en estructura truss para escenarios, conciertos y eventos al aire libre en Colombia. Sistemas de iluminación y sonido integrados.',
}

const galeria = Array.from({ length: 22 }, (_, i) => {
  const n = String(i + 1).padStart(3, '0')
  return `/images/productos/cubiertas-truss/${n}.jpg`
})

export default function Page() {
  return (
    <ProductoPage
      titulo="Cubiertas Truss"
      descripcion="Su evento en las mejores manos..."
      imagen="/images/productos/cubiertas-truss.jpg"
      descripcionLarga={[
        'Las cubiertas en sistema truss de Graderías GRS son estructuras versátiles y robustas utilizadas para escenarios, conciertos, ferias y eventos corporativos. La estructura truss permite colgar equipos de iluminación, sonido y pantallas con total seguridad.',
        'Fabricadas en aluminio de alta resistencia, nuestras cubiertas truss son ligeras pero con gran capacidad de carga. Se ensamblan rápidamente y se adaptan a casi cualquier espacio o configuración requerida.',
        'Ofrecemos el servicio completo: diseño del sistema según sus necesidades, transporte, montaje, supervisión técnica y desmontaje, cumpliendo con todas las normas de seguridad para estructuras temporales a nivel nacional.',
      ]}
      caracteristicas={[
        'Estructura en aluminio de alta resistencia',
        'Capacidad de carga para iluminación y sonido',
        'Ensamble rápido y sencillo',
        'Diferentes tamaños y configuraciones',
        'Certificación estructural',
        'Supervisión técnica incluida',
        'Montaje y desmontaje profesional',
        'Compatible con todos los sistemas de rigging',
      ]}
      galeria={galeria}
    />
  )
}
