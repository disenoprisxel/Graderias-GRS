// ── Slides del Strip de Novedades (home) ─────────────────────────────────────
// Muestra los proyectos más recientes justo debajo del hero principal.

import type { SlideLogos, SlideText } from '@/components/Hero'

type Slide = SlideLogos | SlideText

const slides2: Slide[] = [
  // 1 — Billie Jean King Cup 2026
  {
    id: 1,
    type: 'logos',
    image: '/images/proyectos/billy-jean-king/003.jpg',
    logoLeft:    '',
    logoLeftAlt: '',
    tagLeft:     'Billie Jean King Cup\n2026',
    logoRight:    '',
    logoRightAlt: '',
  },

  // 2 — Exposición Nacional Equina — Bucaramanga 2026
  {
    id: 2,
    type: 'logos',
    image: '/images/proyectos/equina-bucaramanga/slide.jpg',
    logoLeft:    '',
    logoLeftAlt: '',
    tagLeft:     'Exposición Nacional Equina\nBucaramanga 2026',
    logoRight:    '',
    logoRightAlt: '',
  },

  // 3 — F-AIR 2025
  {
    id: 3,
    type: 'logos',
    image: '/images/proyectos/fair-2026/hero.jpg',
    logoLeft:    '/images/logos/fair-2026.png',
    logoLeftAlt: 'F-AIR 2025 — Feria Aeronáutica Internacional',
    tagLeft:     'F-AIR 2025',
    logoRight:    '',
    logoRightAlt: '',
  },

  // 4 — Fiestas de la Independencia Cartagena 2025
  {
    id: 4,
    type: 'logos',
    image: '/images/proyectos/independencia-cartagena-2025/001.jpg',
    logoLeft:    '',
    logoLeftAlt: '',
    tagLeft:     'Fiestas de la Independencia\nCartagena 2025',
    logoRight:    '',
    logoRightAlt: '',
  },

  // 5 — Campaña Centro Democrático 2025
  {
    id: 5,
    type: 'logos',
    image: '/images/proyectos/centro-democratico-2025/006.jpg',
    logoLeft:    '/images/logos/centro-democratico.png',
    logoLeftAlt: 'Centro Democrático 2025',
    tagLeft:     'Campaña Centro Democrático\n2025',
    logoRight:    '',
    logoRightAlt: '',
  },

  // 6 — Seguros Bolívar Open 2025
  {
    id: 6,
    type: 'logos',
    image: '/images/proyectos/bolivar-open-2025/hero.jpg',
    logoLeft:    '/images/logos/club-los-lagartos.png',
    logoLeftAlt: 'Club Los Lagartos',
    tagLeft:     'Seguros Bolívar Open\n2025',
    logoRight:    '',
    logoRightAlt: '',
  },

  // 7 — Villa Olímpica Villavicencio 2025
  {
    id: 7,
    type: 'logos',
    image: '/images/proyectos/villa-olimpica-2025/hero.jpg',
    logoLeft:    '/images/logos/gobernacion-meta.png',
    logoLeftAlt: 'Gobernación del Meta',
    tagLeft:     'Villa Olímpica\nVillavicencio 2025',
    logoRight:    '',
    logoRightAlt: '',
  },
]

export default slides2
