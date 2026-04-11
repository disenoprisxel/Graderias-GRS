import type { Metadata } from 'next'
import ProductoPage from '@/components/ui/ProductoPage'

export const metadata: Metadata = {
  title: 'Cubiertas Truss',
  description:
    'Cubiertas en estructura truss para escenarios, conciertos y eventos al aire libre en Colombia. Sistemas de iluminación y sonido integrados.',
}

export default function Page() {
  return (
    <ProductoPage
      titulo="Cubiertas Truss"
      descripcion="Estructuras truss para escenarios, conciertos y eventos al aire libre"
      imagen="/images/productos/cubiertas-truss.jpg"
      descripcionLarga={[
        'Las cubiertas en sistema truss de Graderías GRS son estructuras versátiles y robustas utilizadas para escenarios, conciertos, ferias y eventos corporativos. La estructura truss permite colgar equipos de iluminación, sonido y pantallas.',
        'Fabricadas en aluminio de alta resistencia, nuestras cubiertas truss son ligeras pero con gran capacidad de carga. Se ensamblan rápidamente y se adaptan a casi cualquier espacio o configuración.',
        'Ofrecemos el servicio completo: diseño del sistema según sus necesidades, transporte, montaje, supervisión técnica y desmontaje. Cumplimos con todas las normas de seguridad para estructuras temporales.',
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
      galeria={[
        '/images/productos/cubiertas-truss.jpg',
      ]}
    />
  )
}
