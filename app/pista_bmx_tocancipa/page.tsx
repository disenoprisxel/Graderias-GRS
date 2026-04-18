import type { Metadata } from 'next'
import ProyectoPage from '@/components/ui/ProyectoPage'

export const metadata: Metadata = {
  title: 'Pista de BMX Tocancipá — Graderías GRS',
  description:
    'Graderías GRS diseñó, fabricó e instaló las graderías tipo general con sentadores en aluminio para la pista de BMX de Tocancipá, Cundinamarca.',
}

const galeria = Array.from({ length: 36 }, (_, i) => {
  const n = String(i + 1).padStart(3, '0')
  return `/images/proyectos/bmx/${n}.jpg`
})

export default function Page() {
  return (
    <ProyectoPage
      titulo="Pista de BMX Tocancipá"
      descripcion="Diseño, fabricación e instalación de graderías tipo general con sentadores en aluminio"
      lugar="Tocancipá, Cundinamarca"
      año="2023"
      imagen="/images/proyectos/bmx-tocancipa.jpg"
      descripcionLarga={[
        'Graderías GRS participó en el diseño, fabricación e instalación de las graderías para el campeonato nacional de BMX realizado en la pista de Tocancipá, Cundinamarca. Este evento reunió a los mejores competidores de BMX del país en un escenario de primer nivel.',
        'Se suministraron e instalaron graderías tipo general con sentadores en aluminio. Cada gradería queda con altura de 1.45 mts, pasillo y distribución de acuerdo al requerimiento del cliente, cumpliendo con todas las normas de seguridad requeridas para eventos deportivos de esta envergadura.',
        'El montaje se realizó en tiempo récord, garantizando la seguridad estructural de todas las instalaciones y la comodidad de los espectadores durante el evento. Un trabajo que refleja nuestra capacidad de llevar el diseño a la realidad con precisión y calidad.',
      ]}
      datos={[
        { label: 'Tipo de evento',   valor: 'Deporte extremo — BMX' },
        { label: 'Ubicación',        valor: 'Tocancipá, Cundinamarca' },
        { label: 'Servicio',         valor: 'Diseño, fabricación e instalación' },
        { label: 'Tipo de gradería', valor: 'General — Sentadores en aluminio' },
        { label: 'Altura',           valor: '1.45 mts por gradería' },
        { label: 'Certificación',    valor: 'ICC — NSR-10' },
      ]}
      comparacion={{
        antes:        '/images/proyectos/bmx/comp-antes.jpg',
        despues:      '/images/proyectos/bmx/comp-despues.jpg',
        labelAntes:   'Render 3D',
        labelDespues: 'Construcción Final',
      }}
      galeria={galeria}
      videoCta="/videos/evento-nivel.mp4"
    />
  )
}
