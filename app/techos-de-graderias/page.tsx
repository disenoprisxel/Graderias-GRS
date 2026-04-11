import type { Metadata } from 'next'
import ProductoPage from '@/components/ui/ProductoPage'

export const metadata: Metadata = {
  title: 'Techos de Graderías',
  description:
    'Techos y cubiertas para graderías en eventos al aire libre. Estructuras en truss y lona tensada. Protección contra lluvia y sol para espectadores en Colombia.',
}

export default function Page() {
  return (
    <ProductoPage
      titulo="Techos de Graderías"
      descripcion="Cubiertas y techos certificados para proteger a sus espectadores"
      imagen="/images/productos/techos-graderias.jpg"
      descripcionLarga={[
        'Los techos para graderías de Graderías GRS son soluciones estructurales diseñadas para proteger a los espectadores de las condiciones climáticas en eventos al aire libre. Fabricados en estructura metálica tubular con cubierta en lona tensada o policarbonato.',
        'Nuestros techos se integran perfectamente con las graderías, garantizando estabilidad estructural y seguridad. Están diseñados para soportar cargas de viento según las normas NSR-10 colombianas y los estándares ICC.',
        'Disponemos de diferentes sistemas de cubierta según el tipo de evento y la inversión disponible: desde toldos simples hasta estructuras permanentes de gran envergadura.',
      ]}
      caracteristicas={[
        'Estructura metálica tubular galvanizada',
        'Cubierta en lona tensada o policarbonato',
        'Resistente a lluvia y viento fuerte',
        'Diseño integrado con la gradería',
        'Certificación estructural',
        'Montaje y desmontaje rápido',
        'Diferentes colores disponibles',
        'Disponible en alquiler o venta',
      ]}
      galeria={[
        '/images/productos/techos-graderias.jpg',
      ]}
    />
  )
}
