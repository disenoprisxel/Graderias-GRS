import type { Metadata } from 'next'
import ProductoPage from '@/components/ui/ProductoPage'

export const metadata: Metadata = {
  title: 'Paneles y Tarimas',
  description:
    'Alquiler y venta de paneles divisorios y tarimas para eventos, conciertos y escenarios en Colombia. Modular, fácil montaje.',
}

export default function Page() {
  return (
    <ProductoPage
      titulo="Paneles y Tarimas"
      descripcion="Soluciones modulares para escenarios, exposiciones y eventos"
      imagen="/images/productos/paneles-tarimas.jpg"
      descripcionLarga={[
        'Los paneles y tarimas de Graderías GRS son soluciones modulares versátiles para la construcción de escenarios, plataformas, stands y espacios para exposiciones. Su sistema modular permite configurar cualquier tamaño y forma.',
        'Las tarimas están fabricadas en estructura metálica con superficie antideslizante. Los paneles divisorios permiten crear espacios diferenciados dentro de un mismo recinto de manera rápida y eficiente.',
        'Disponemos de tarimas de diferentes alturas y paneles de diferentes dimensiones. Todo el sistema es fácil de ensamblar y desmontar, reduciendo los tiempos de montaje del evento.',
      ]}
      caracteristicas={[
        'Sistema modular de fácil ensamble',
        'Superficie antideslizante',
        'Alturas regulables (0,6 m - 1,2 m)',
        'Estructura metálica robusta',
        'Paneles divisorios y de fachada',
        'Rampa de acceso disponible',
        'Faldón decorativo incluido',
        'Disponibles en alquiler o venta',
      ]}
      galeria={[
        '/images/productos/paneles-tarimas.jpg',
      ]}
    />
  )
}
