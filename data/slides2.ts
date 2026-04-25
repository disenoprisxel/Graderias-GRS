// ── Slides del Slideshow 2 (parte inferior de la home) ──────────────────────

import type { SlideLogos, SlideText } from '@/components/Hero'

type Slide = SlideLogos | SlideText

const slides2: Slide[] = [
  // 1 — Copa Davis Colombia vs Turkía
  {
    id: 1,
    type: 'logos',
    image: '/images/hero/hero-copa-davis.jpg',
    logoLeft:    '/images/logos/copa-davis.jpg',
    logoLeftAlt: 'Copa Davis — Colombia vs Turkía 2019',
    tagLeft:     'Copa Davis — Colombia vs Turkía 2019',
    logoRight:    '/images/logos/logo-carmel.png',
    logoRightAlt: 'Carmel',
  },

  // 2 — Sibatá (Sin título) + logo Policía Nacional
  {
    id: 2,
    type: 'logos',
    image: '/images/hero/hero-sibate.jpg',
    logoLeft:    '/images/logos/policia-nacional.png',
    logoLeftAlt: 'Policía Nacional de Colombia',
    tagLeft:     '',
    logoRight:    '',
    logoRightAlt: '',
  },

  // 3 — Copa Claro Colsanitas
  {
    id: 3,
    type: 'logos',
    image: '/images/hero/hero-colsanitas.jpg',
    logoLeft:    '/images/logos/copa-claro.png',
    logoLeftAlt: 'Copa Claro Colsanitas',
    tagLeft:     'Copa Claro\nColsanitas',
    logoRight:    '/images/logos/10-lagartos.png',
    logoRightAlt: 'Club Los Lagartos',
  },

  // 4 — Sin título + logos Sanofi (izq) y Chamorro (der)
  {
    id: 4,
    type: 'logos',
    image: '/images/hero/hero-chamorro-sanofi.jpg',
    logoLeft:    '/images/logos/sanofi.png',
    logoLeftAlt: 'Sanofi',
    tagLeft:     '',
    logoRight:    '/images/logos/chamorro.png',
    logoRightAlt: 'Chamorro',
  },

  // 5 — Carnaval de Barranquilla + logos Carnaval (izq) y Alcaldía (der)
  {
    id: 5,
    type: 'logos',
    image: '/images/hero/hero-carnaval.jpg',
    logoLeft:    '/images/logos/carnaval-barranquilla.png',
    logoLeftAlt: 'Carnaval de Barranquilla',
    tagLeft:     'CARNAVAL DE BARRANQUILLA',
    logoRight:    '/images/logos/alcaldia-barranquilla.png',
    logoRightAlt: 'Alcaldía de Barranquilla',
  },

  // 6 — Gradería Convencional (solo imagen)
  {
    id: 6,
    type: 'logos',
    image: '/images/hero/hero-graderia-convencional.jpg',
    logoLeft:    '',
    logoLeftAlt: '',
    tagLeft:     'GRADERÍA CONVENCIONAL',
    logoRight:    '',
    logoRightAlt: '',
  },

  // 7 — Venta Gobernación de Cundinamarca
  {
    id: 7,
    type: 'logos',
    image: '/images/hero/hero-gobernacion-cundinamarca.jpg',
    logoLeft:    '/images/logos/gobernacion-cundinamarca.png',
    logoLeftAlt: 'Gobernación de Cundinamarca',
    tagLeft:     'VENTA — GOBERNACIÓN DE CUNDINAMARCA',
    logoRight:    '',
    logoRightAlt: '',
  },

  // 8 — Venta Aeropuerto El Dorado
  {
    id: 8,
    type: 'logos',
    image: '/images/hero/hero-aeropuerto-dorado.jpg',
    logoLeft:    '/images/logos/aeropuerto-dorado.png',
    logoLeftAlt: 'Aeropuerto Internacional El Dorado',
    tagLeft:     'VENTA — AEROPUERTO INTERNACIONAL EL DORADO',
    logoRight:    '',
    logoRightAlt: '',
  },
]

export default slides2
