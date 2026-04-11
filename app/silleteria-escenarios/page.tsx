import type { Metadata } from 'next'
import ProductoPage from '@/components/ui/ProductoPage'

export const metadata: Metadata = {
  title: 'Silletería para Escenarios',
  description:
    'Alquiler y venta de silletería para escenarios, estadios, teatros y eventos en Colombia. Sillas plásticas, metálicas y tapizadas. Gran variedad de modelos.',
}

export default function Page() {
  return (
    <ProductoPage
      titulo="Silletería Escenarios"
      descripcion="Sillas y silletería para estadios, teatros y todo tipo de eventos"
      imagen="/images/productos/silleteria.jpg"
      descripcionLarga={[
        'Graderías GRS ofrece una amplia variedad de silletería para todo tipo de eventos y recintos. Desde sillas plásticas básicas hasta butacas tapizadas de alta gama para estadios y teatros permanentes.',
        'Contamos con modelos de sillas para gradería, sillas universitarias, butacas fijas, sillas plegables y sillas VIP. Todas nuestras sillas cumplen con los estándares de calidad y seguridad requeridos.',
        'Disponemos de grandes inventarios que nos permiten atender eventos de cualquier escala, desde pequeños auditorios hasta grandes estadios con capacidad para miles de espectadores.',
      ]}
      caracteristicas={[
        'Sillas plásticas tipo gradería',
        'Butacas fijas para estadios',
        'Sillas VIP con apoyabrazos',
        'Sillas plegables para eventos',
        'Numeración disponible',
        'Diferentes colores a elección',
        'Resistentes a intemperie',
        'Disponibles en alquiler o venta',
      ]}
      galeria={[
        '/images/productos/silleteria.jpg',
      ]}
    />
  )
}
