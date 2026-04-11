import type { Metadata } from 'next'
import ProyectoPage from '@/components/ui/ProyectoPage'

export const metadata: Metadata = {
  title: 'Juegos Centroamericanos y del Caribe',
  description:
    'Graderías GRS participó con el suministro de graderías certificadas para los Juegos Centroamericanos y del Caribe.',
}

export default function Page() {
  return (
    <ProyectoPage
      titulo="Juegos Centroamericanos y del Caribe"
      descripcion="Graderías certificadas para los Juegos Centroamericanos y del Caribe"
      lugar="Colombia"
      año="2018"
      imagen="/images/proyectos/juegos-centroamericanos.jpg"
      descripcionLarga={[
        'Graderías GRS participó en los Juegos Centroamericanos y del Caribe con el suministro e instalación de graderías para diversas disciplinas deportivas. Este evento multideportivo es uno de los más importantes de la región.',
        'Las instalaciones de graderías cumplieron con los estrictos estándares olímpicos requeridos por el Comité Olímpico Internacional y los organismos deportivos regionales.',
        'La participación en este evento de talla internacional refuerza el posicionamiento de Graderías GRS como la empresa de referencia para eventos deportivos de alto nivel en Colombia y la región.',
      ]}
      datos={[
        { label: 'Tipo de evento', valor: 'Juegos deportivos multidisciplinarios' },
        { label: 'Ubicación', valor: 'Colombia' },
        { label: 'Servicio', valor: 'Suministro e instalación de graderías' },
        { label: 'Certificación', valor: 'ICC — Estándares olímpicos' },
      ]}
      galeria={[
        '/images/proyectos/juegos-centroamericanos.jpg',
      ]}
    />
  )
}
