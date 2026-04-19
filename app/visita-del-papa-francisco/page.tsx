import type { Metadata } from 'next'
import ProyectoPage from '@/components/ui/ProyectoPage'

export const metadata: Metadata = {
  title: 'Visita del Papa Francisco a Colombia | Graderías GRS',
  description:
    'Graderías GRS instaló graderías tipo VIP en hierro con silletería negra para la visita del Papa Francisco a Colombia en 2017, con capacidad para 8.000 personas.',
}

const galeria = Array.from({ length: 18 }, (_, i) => {
  const n = String(i + 1).padStart(3, '0')
  return `/images/proyectos/papa/${n}.jpg`
})

export default function Page() {
  return (
    <ProyectoPage
      titulo="Visita del Papa Francisco"
      descripcion="Graderías tipo VIP para la histórica visita del Papa a Colombia"
      lugar="Bogotá, Villavicencio y Cartagena de Indias"
      año="2017"
      imagen="/images/proyectos/papa-francisco.jpg"
      descripcionLarga={[
        'Graderías GRS tuvo el honor de participar en uno de los eventos más importantes de la historia reciente de Colombia: la visita del Papa Francisco en 2017. Fuimos parte del equipo que instaló las estructuras y graderías para las multitudinarias misas y eventos públicos en varias ciudades del país.',
        'Se instalaron graderías en hierro tipo VIP con silletería negra, con altura de primer puesto de 0.45 mts, en las ciudades de Bogotá, Villavicencio y Cartagena de Indias. Las estructuras tuvieron una capacidad total para 8.000 personas, con distribución ajustada al requerimiento de cada sede y cumpliendo los más estrictos protocolos de seguridad para eventos masivos de esta naturaleza.',
        'Este proyecto es una de las mayores referencias de nuestra empresa, demostrando que Graderías GRS tiene la capacidad técnica y operativa para participar en los eventos más exigentes y simbólicos del país.',
      ]}
      datos={[
        { label: 'Tipo de evento',   valor: 'Evento religioso masivo' },
        { label: 'Ciudades',         valor: 'Bogotá, Villavicencio y Cartagena' },
        { label: 'Año',              valor: '2017' },
        { label: 'Tipo gradería',    valor: 'VIP en hierro con silletería negra' },
        { label: 'Altura 1er paso',  valor: '0.45 mts' },
        { label: 'Capacidad total',  valor: '8.000 personas' },
        { label: 'Servicio',         valor: 'Graderías y estructuras temporales' },
      ]}
      fotosDestacadas={[
        {
          src: '/images/proyectos/papa/001.jpg',
          caption: 'Montaje de Graderías en la Casa de Nariño — Bogotá, Colombia',
        },
      ]}
      galeria={galeria}
      videoCta="/videos/evento-nivel.mp4"
    />
  )
}
