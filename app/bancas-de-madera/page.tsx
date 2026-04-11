import type { Metadata } from 'next'
import ProductoPage from '@/components/ui/ProductoPage'

export const metadata: Metadata = {
  title: 'Bancas de Madera',
  description:
    'Alquiler y venta de bancas de madera para eventos, conciertos, iglesias y parques en Colombia. Bancas rústicas y modernas de alta calidad.',
}

export default function Page() {
  return (
    <ProductoPage
      titulo="Bancas de Madera"
      descripcion="Bancas rústicas y modernas para eventos al aire libre e interiores"
      imagen="/images/productos/bancas-madera.jpg"
      descripcionLarga={[
        'Las bancas de madera de Graderías GRS son la solución perfecta para eventos que requieren una estética cálida y natural. Ideales para conciertos, eventos religiosos, bodas al aire libre, festivales y parques.',
        'Fabricadas en madera de alta calidad, nuestras bancas están tratadas para resistir condiciones de intemperie. Disponemos de bancas sin respaldo y con respaldo en diferentes longitudes.',
        'El servicio incluye transporte, instalación en el lugar del evento y posterior recogida. Contamos con gran inventario para atender eventos de cualquier escala.',
      ]}
      caracteristicas={[
        'Madera tratada para exteriores',
        'Bancas de 2 m y 3 m de longitud',
        'Con y sin respaldo',
        'Capacidad para 4-6 personas por banca',
        'Fácil transporte y apilamiento',
        'Acabado resistente a la humedad',
        'Disponibles en alquiler o venta',
        'Entrega a nivel nacional',
      ]}
      galeria={[
        '/images/productos/bancas-madera.jpg',
      ]}
    />
  )
}
