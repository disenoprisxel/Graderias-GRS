import type { Metadata } from 'next'
import ProductoPage from '@/components/ui/ProductoPage'

export const metadata: Metadata = {
  title: 'Alquiler de Graderías',
  description:
    'Alquiler de graderías certificadas para eventos deportivos, culturales y corporativos en Colombia. Más de 25 años de experiencia. Certificación ICC.',
}

export default function Page() {
  return (
    <ProductoPage
      titulo="Alquiler de Graderías"
      descripcion="Graderías certificadas para todo tipo de eventos en Colombia"
      imagen="/images/productos/alquiler-graderias.jpg"
      descripcionLarga={[
        'Graderías GRS ofrece el servicio de alquiler de graderías para eventos de todo tipo: deportivos, culturales, corporativos y religiosos. Contamos con una amplia flota de estructuras certificadas bajo los estándares del ICC (International Code Council).',
        'Nuestras graderías están diseñadas para garantizar la máxima seguridad y comodidad de los espectadores. Disponemos de diferentes configuraciones que se adaptan al espacio y la capacidad requerida por su evento.',
        'Ofrecemos el servicio completo: transporte, instalación, supervisión técnica y desmontaje. Nuestro equipo de profesionales le garantiza una instalación segura y en los tiempos acordados.',
      ]}
      caracteristicas={[
        'Estructuras certificadas ICC',
        'Capacidad desde 100 hasta 10.000+ espectadores',
        'Instalación y desmontaje incluidos',
        'Supervisión técnica permanente',
        'Transporte a nivel nacional',
        'Diferentes configuraciones disponibles',
        'Cumplimiento de normas de seguridad',
        'Disponible con o sin techo',
      ]}
      galeria={[
        '/images/productos/alquiler-graderias.jpg',
      ]}
    />
  )
}
