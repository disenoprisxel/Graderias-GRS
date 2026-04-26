import type { Metadata } from 'next'
import ProyectoPage from '@/components/ui/ProyectoPage'

export const metadata: Metadata = {
  title: 'Villa Olímpica Villavicencio 2025 | Graderías GRS',
  description:
    'Montaje de graderías para la Villa Olímpica de Villavicencio 2025, proyecto de la Gobernación del Meta. Graderías GRS proveyó las estructuras para los escenarios deportivos del evento.',
}

const galeria = Array.from({ length: 30 }, (_, i) => {
  const n = String(i + 1).padStart(3, '0')
  return `/images/proyectos/villa-olimpica-2025/${n}.jpg`
})

export default function Page() {
  return (
    <ProyectoPage
      titulo="Villa Olímpica Villavicencio 2025"
      descripcion="Gobernación del Meta — Villavicencio"
      lugar="Villavicencio, Meta"
      año="2025"
      imagen="/images/proyectos/villa-olimpica-2025/hero.jpg"
      descripcionLarga={[
        'Graderías GRS participó en el montaje de graderías para la Villa Olímpica de Villavicencio 2025, un proyecto impulsado por la Gobernación del Meta para dotar a la región de escenarios deportivos de alto nivel para la práctica y el espectáculo del deporte.',
        'Se instalaron estructuras temporales en diferentes disciplinas del complejo, garantizando la comodidad y seguridad de los espectadores durante los eventos y competencias desarrolladas en las instalaciones de la Villa Olímpica.',
        'Este proyecto reafirma el compromiso de Graderías GRS con el deporte colombiano y con las entidades gubernamentales que apuestan por la infraestructura deportiva en las regiones del país.',
      ]}
      datos={[
        { label: 'Tipo de evento',  valor: 'Evento deportivo' },
        { label: 'Año',             valor: '2025' },
        { label: 'Ciudad',          valor: 'Villavicencio' },
        { label: 'Departamento',    valor: 'Meta' },
        { label: 'Cliente',         valor: 'Gobernación del Meta' },
        { label: 'Material',        valor: 'Graderías en aluminio' },
        { label: 'Certificación',   valor: 'ICC' },
      ]}
      fotosDestacadas={[
        { src: '/images/proyectos/villa-olimpica-2025/hero.jpg' },
        { src: '/images/proyectos/villa-olimpica-2025/005.jpg' },
      ]}
      galeria={galeria}
      watermark="/images/logo-blanco.png"
    />
  )
}
