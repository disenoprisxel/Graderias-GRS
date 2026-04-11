import type { Metadata } from 'next'
import ProductoPage from '@/components/ui/ProductoPage'

export const metadata: Metadata = {
  title: 'Pantallas LED',
  description:
    'Alquiler de pantallas LED para eventos, conciertos y escenarios en Colombia. Pantallas de alta resolución para interiores y exteriores.',
}

export default function Page() {
  return (
    <ProductoPage
      titulo="Pantallas LED"
      descripcion="Pantallas LED de alta resolución para interiores y exteriores"
      imagen="/images/productos/pantallas-led.jpg"
      descripcionLarga={[
        'Graderías GRS ofrece el alquiler de pantallas LED de alta resolución para todo tipo de eventos. Contamos con módulos para configurar pantallas de cualquier tamaño, adaptadas al espacio y las necesidades de cada evento.',
        'Nuestras pantallas están disponibles tanto para interiores como para exteriores, con alta luminosidad que garantiza una visualización perfecta en cualquier condición de iluminación ambiente.',
        'El servicio incluye operación técnica del equipo, soporte durante el evento y conexión con sistemas de señal de video y transmisión. Ideales para conciertos, eventos deportivos, corporativos y culturales.',
      ]}
      caracteristicas={[
        'Módulos LED de alta resolución',
        'Disponibles para interior y exterior',
        'Alta luminosidad (hasta 6000 nits)',
        'Configuraciones de cualquier tamaño',
        'Operación técnica incluida',
        'Conexión HDMI, DVI, SDI',
        'Soporte técnico en tiempo real',
        'Disponible solo en alquiler',
      ]}
      galeria={[
        '/images/productos/pantallas-led.jpg',
      ]}
    />
  )
}
