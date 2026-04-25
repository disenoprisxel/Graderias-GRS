import type { Metadata } from 'next'
import ProductoPage from '@/components/ui/ProductoPage'

export const metadata: Metadata = {
  title: 'Bancas de Suplentes | Graderías GRS',
  description:
    'Alquiler y venta de bancas de suplentes en plástico con estructura metálica para eventos deportivos, culturales y corporativos en Colombia.',
}

const galeria = Array.from({ length: 13 }, (_, i) => {
  const n = String(i + 1).padStart(3, '0')
  return `/images/productos/bancas-suplentes/${n}.jpg`
})

export default function Page() {
  return (
    <ProductoPage
      titulo="Bancas de Suplentes"
      descripcion="Su evento en las mejores manos..."
      imagen="/images/productos/bancas-suplentes/004.jpg"
      descripcionLarga={[
        'Graderías GRS ofrece bancas de suplentes fabricadas con asientos en plástico de alto impacto y estructura metálica galvanizada, diseñadas para resistir las exigencias del uso deportivo y de entretenimiento de alto nivel.',
        'Ideales para zonas técnicas de estadios, áreas de descanso, tribunas de honor y zonas especiales en todo tipo de eventos. Su diseño robusto y estético garantiza comodidad para los asistentes y una presentación profesional del recinto.',
        'Disponemos de diferentes configuraciones y longitudes, con servicio de transporte, instalación y desmontaje a nivel nacional. Atendemos eventos de cualquier escala con los más altos estándares de calidad.',
      ]}
      caracteristicas={[
        'Asientos en plástico de alto impacto',
        'Estructura metálica galvanizada',
        'Resistente a intemperie y uso intensivo',
        'Diferentes longitudes disponibles',
        'Capacidad para 4-6 personas por banca',
        'Fácil transporte y apilamiento',
        'Disponibles en alquiler o venta',
        'Entrega a nivel nacional',
      ]}
      galeria={galeria}
    />
  )
}
