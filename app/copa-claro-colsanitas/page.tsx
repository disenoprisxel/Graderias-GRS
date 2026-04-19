import type { Metadata } from 'next'
import ProyectoPage from '@/components/ui/ProyectoPage'

export const metadata: Metadata = {
  title: 'Copa Claro Colsanitas | Graderías GRS',
  description:
    'Graderías GRS montó graderías en hierro tipo VIP y gradería general para la Copa Claro Colsanitas en Bogotá, con capacidad para 5.000 personas.',
}

const galeria = Array.from({ length: 6 }, (_, i) => {
  const n = String(i + 1).padStart(3, '0')
  return `/images/proyectos/colsanitas/${n}.jpg`
})

export default function Page() {
  return (
    <ProyectoPage
      titulo="Copa Claro Colsanitas"
      descripcion="Tribunas y graderías para el torneo de tenis femenino más importante de Colombia"
      lugar="Bogotá, Colombia"
      año="Edición múltiple"
      imagen="/images/proyectos/colsanitas.jpg"
      descripcionLarga={[
        'Graderías GRS es proveedor oficial de tribunas y graderías del torneo de tenis Copa Claro Colsanitas, el torneo de tenis femenino más importante de Colombia y uno de los torneos WTA más reconocidos de Latinoamérica.',
        'Se instalaron graderías en hierro tipo VIP con silletería negra y verde, y adicionalmente gradería tipo general con sentaderos en aluminio. Cada gradería con altura de primer puesto de 1.45 mts, instaladas en la ciudad de Bogotá, con capacidad total para 5.000 personas y distribución ajustada al requerimiento del cliente.',
        'Año tras año instalamos las tribunas alrededor de las canchas principales del torneo, garantizando una experiencia de espectador de primer nivel. Nuestra participación de forma continua en este torneo es un reflejo de la confianza que las organizaciones de eventos más exigentes del país depositan en Graderías GRS.',
      ]}
      datos={[
        { label: 'Tipo de evento',  valor: 'Tenis profesional — WTA' },
        { label: 'Ubicación',       valor: 'Bogotá, Colombia' },
        { label: 'Tipo gradería',   valor: 'VIP en hierro + General en aluminio' },
        { label: 'Silletería',      valor: 'Negra y verde (VIP) · Sentaderos aluminio (General)' },
        { label: 'Altura 1er paso', valor: '1.45 mts' },
        { label: 'Capacidad total', valor: '5.000 personas' },
        { label: 'Ediciones',       valor: 'Múltiples años consecutivos' },
        { label: 'Certificación',   valor: 'WTA — ICC' },
      ]}
      fotosDestacadas={[
        {
          src: '/images/proyectos/colsanitas/001.jpg',
          caption: 'Montaje de Graderías Copa Claro - Colsanitas',
        },
      ]}
      galeria={galeria}
      videoCta="/videos/evento-nivel.mp4"
    />
  )
}
