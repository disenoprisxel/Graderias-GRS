import type { Metadata } from 'next'
import ProductoPage from '@/components/ui/ProductoPage'

export const metadata: Metadata = {
  title: 'Diseño y Producción de Eventos',
  description:
    'Servicio integral de diseño y producción de eventos en Colombia. Graderías GRS se encarga de todo: diseño, logística, montaje y desmontaje.',
}

export default function Page() {
  return (
    <ProductoPage
      titulo="Diseño y Producción"
      descripcion="Servicio integral de diseño y producción para su evento"
      imagen="/images/productos/diseno-produccion.jpg"
      descripcionLarga={[
        'El servicio de Diseño y Producción de Graderías GRS es la solución integral para clientes que buscan delegar toda la producción técnica de su evento. Nos encargamos del diseño del espacio, la logística, el montaje y el desmontaje de todos los elementos.',
        'Nuestro equipo de profesionales tiene experiencia en eventos de todo tipo y escala: desde pequeños eventos corporativos hasta grandes conciertos y eventos deportivos con miles de espectadores.',
        'Trabajamos de la mano con el cliente desde la etapa de planeación hasta la finalización del evento, garantizando que cada detalle esté perfectamente coordinado y que la experiencia del espectador sea excepcional.',
      ]}
      caracteristicas={[
        'Diseño 3D del espacio del evento',
        'Asesoría técnica y logística',
        'Coordinación de todos los montajes',
        'Gestión de permisos y licencias',
        'Supervisión durante el evento',
        'Desmontaje y retiro de equipos',
        'Equipo de producción dedicado',
        'Cobertura nacional',
      ]}
      galeria={[
        '/images/productos/diseno-produccion.jpg',
      ]}
    />
  )
}
