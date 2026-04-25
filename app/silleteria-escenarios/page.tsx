import type { Metadata } from 'next'
import ProductoPage from '@/components/ui/ProductoPage'

export const metadata: Metadata = {
  title: 'Silletería para Escenarios | Graderías GRS',
  description:
    'Alquiler y venta de silletería para escenarios, estadios, teatros y eventos en Colombia. Sillas plásticas, metálicas y tapizadas. Gran variedad de modelos.',
}

const galeria = [
  ...Array.from({ length: 20 }, (_, i) => {
    const n = String(i + 1).padStart(3, '0')
    return `/images/productos/silleteria-escenarios/${n}.jpg`
  }),
  '/images/productos/silleteria-escenarios/021.png',
  ...Array.from({ length: 14 }, (_, i) => {
    const n = String(i + 22).padStart(3, '0')
    return `/images/productos/silleteria-escenarios/${n}.jpg`
  }),
  ...Array.from({ length: 13 }, (_, i) => {
    const n = String(i + 36).padStart(3, '0')
    if (n === '036') return `/images/productos/silleteria-escenarios/036.png`
    return `/images/productos/silleteria-escenarios/${n}.jpg`
  }),
]

export default function Page() {
  return (
    <ProductoPage
      titulo="Silletería Escenarios"
      descripcion="Su evento en las mejores manos..."
      imagen="/images/productos/silleteria.jpg"
      descripcionLarga={[
        'Graderías GRS ofrece una amplia variedad de silletería para todo tipo de eventos y recintos. Desde sillas plásticas tipo estadio hasta butacas tapizadas de alta gama para escenarios y teatros permanentes.',
        'Contamos con modelos de sillas para gradería, sillas universitarias, butacas fijas, sillas plegables y sillas VIP. Todas nuestras sillas cumplen con los estándares de calidad y seguridad requeridos para eventos masivos.',
        'Disponemos de grandes inventarios que nos permiten atender eventos de cualquier escala, desde pequeños auditorios hasta grandes estadios con capacidad para miles de espectadores, con servicio a nivel nacional.',
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
      galeria={galeria}
    />
  )
}
