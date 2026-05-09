import type { Metadata } from 'next'
import ProductoPage from '@/components/ui/ProductoPage'

export const metadata: Metadata = {
  title: 'Diseño y Producción de Eventos | Graderías GRS',
  description:
    'Propuesta fotorrealista en 3D, asesoría técnica y logística integral para eventos en Colombia. Graderías GRS visualiza, diseña y coordina cada detalle de tu proyecto.',
}

const galeria = [
  ...Array.from({ length: 81 }, (_, i) => {
    const n = String(i + 1).padStart(3, '0')
    return `/images/productos/diseno-produccion/${n}.jpg`
  }),
  '/images/productos/diseno-produccion/082.png',
]

export default function Page() {
  return (
    <ProductoPage
      titulo="Diseño y Render"
      descripcion="Su evento en las mejores manos..."
      imagen="/images/productos/diseno-produccion/071.jpg"
      descripcionLarga={[
        'En Graderías GRS contamos con el personal idóneo para elaborar una propuesta fotorrealista en 3D de tu evento. Antes de levantar una sola estructura, podrás ver con total claridad cómo lucirá el espacio: distribución de graderías, tarimas, palcos, vallas, techos y demás elementos, con los colores, dimensiones y acabados reales. Esto te permite tomar decisiones informadas, hacer ajustes oportunos y llegar al día del evento con la certeza de que cada detalle fue pensado y validado con anticipación.',
        'Este servicio de diseño previo no es solo una herramienta visual: es parte de nuestra metodología de trabajo. A partir del render 3D definimos los requerimientos técnicos, logísticos y de personal necesarios para cada montaje, garantizando que la ejecución en campo sea precisa, eficiente y sin contratiempos.',
        'Nuestro equipo acompaña el proyecto desde la conceptualización hasta el desmontaje final. Coordinamos cada etapa del montaje, supervisamos la operación en campo y gestionamos la comunicación entre todos los actores involucrados, para que tú puedas enfocarte en lo que realmente importa: tu evento.',
      ]}
      caracteristicas={[
        'Diseño 3D del espacio del evento',
        'Asesoría técnica y logística',
        'Cobertura a nivel nacional',
        'Coordinación de todos los montajes',
      ]}
      galeria={galeria}
    />
  )
}
