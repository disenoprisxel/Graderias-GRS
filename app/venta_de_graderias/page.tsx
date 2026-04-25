import type { Metadata } from 'next'
import ProductoPage from '@/components/ui/ProductoPage'

export const metadata: Metadata = {
  title: 'Venta de Graderías | Graderías GRS',
  description:
    'Venta de graderías permanentes y temporales para estadios, coliseos y recintos deportivos en Colombia. Certificación ICC. Asesoría técnica.',
}

const galeria = Array.from({ length: 83 }, (_, i) => {
  return `/images/productos/venta-graderias/${i + 1}.jpg`
})

export default function Page() {
  return (
    <ProductoPage
      titulo="Venta de Graderías"
      descripcion="Su evento en las mejores manos..."
      imagen="/images/productos/venta-graderias.jpg"
      imagenDestacada="/images/productos/venta-graderias/45.jpg"
      descripcionLarga={[
        'Graderías GRS comercializa graderías de alta calidad para estadios, coliseos, pistas de atletismo y cualquier tipo de recinto deportivo o de entretenimiento. Ofrecemos soluciones tanto temporales como permanentes.',
        'Nuestras graderías están fabricadas con materiales de primera calidad y cumplen con los estándares internacionales del ICC. Cada instalación cuenta con diseño estructural personalizado según las necesidades del proyecto.',
        'Acompañamos al cliente desde el diseño hasta la instalación final, ofreciendo asesoría técnica especializada para garantizar la mejor solución para cada proyecto.',
      ]}
      caracteristicas={[
        'Estructuras metálicas de alta resistencia',
        'Certificación ICC',
        'Diseño personalizado por proyecto',
        'Asesoría técnica y estructural',
        'Instalación profesional incluida',
        'Garantía de fabricación',
        'Silletería incluida o sin silletería',
        'Cumplimiento NSR-10',
      ]}
      galeria={galeria}
    />
  )
}
