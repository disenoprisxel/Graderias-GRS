import type { Metadata } from 'next'
import ProductoPage from '@/components/ui/ProductoPage'

export const metadata: Metadata = {
  title: 'Stand Truss',
  description:
    'Diseño y montaje de stands en estructura truss para ferias, exposiciones y eventos corporativos en Colombia. Personalización total.',
}

export default function Page() {
  return (
    <ProductoPage
      titulo="Stand Truss"
      descripcion="Stands en estructura truss para ferias, exposiciones y eventos corporativos"
      imagen="/images/productos/stand-truss.jpg"
      descripcionLarga={[
        'Los stands en sistema truss de Graderías GRS son la solución ideal para empresas que buscan una presencia visual impactante en ferias, exposiciones y eventos corporativos. La estructura en aluminio permite crear displays de gran altura y vistosidad.',
        'Diseñamos y construimos stands a medida según los requerimientos de imagen corporativa de cada cliente. Podemos incorporar iluminación, pantallas LED, brandeo y cualquier elemento de comunicación visual.',
        'Nuestro servicio incluye diseño 3D previo, fabricación, transporte, montaje y desmontaje. Contamos con amplio inventario de piezas truss que permite configuraciones únicas para cada evento.',
      ]}
      caracteristicas={[
        'Diseño personalizado en 3D',
        'Estructura en aluminio liviano',
        'Integración de iluminación LED',
        'Posibilidad de pantallas LED',
        'Brandeo e impresión incluidos',
        'Montaje profesional rápido',
        'Diferentes configuraciones y tamaños',
        'Disponible en alquiler o venta',
      ]}
      galeria={[
        '/images/productos/stand-truss.jpg',
      ]}
    />
  )
}
