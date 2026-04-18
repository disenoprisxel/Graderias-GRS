// ── Slides del Slideshow 2 (parte inferior de la home) ──────────────────────
// Configura aquí los slides independientes del segundo slider

import type { SlideLogos, SlideText } from '@/components/Hero'

type Slide = SlideLogos | SlideText

const slides2: Slide[] = [
  {
    id: 1,
    type: 'logos',
    image: '/images/hero/hero-fuxion.jpg',
    logoLeft:    '/images/logos/puerta-de-oro.png',
    logoLeftAlt: 'Puerta de Oro — Centro de Eventos del Caribe Barranquilla',
    tagLeft:     'C O R F E R I A S',
    logoRight:    '/images/logos/fuxion.jpg',
    logoRightAlt: 'Convención FuXion 2024',
  },
  {
    id: 2,
    type: 'logos',
    image: '/images/hero/hero-bmx.jpg',
    logoLeft:    '/images/logos/alcaldia-tocancipa.png',
    logoLeftAlt: 'Alcaldía de Tocancipá',
    tagLeft:     'PISTA BMX TOCANCIPÁ',
    logoRight:    '',
    logoRightAlt: '',
  },
  {
    id: 3,
    type: 'logos',
    image: '/images/hero/hero-sincelejo.jpg',
    logoLeft:    '/images/logos/alcaldia-sincelejo.png',
    logoLeftAlt: 'Alcaldía de Sincelejo',
    tagLeft:     'VENTA DE SILLETERÍA — ESTADIO DE BÉISBOL DE SINCELEJO',
    logoRight:    '',
    logoRightAlt: '',
  },
  {
    id: 4,
    type: 'logos',
    image: '/images/hero/hero-truss.jpg',
    logoLeft:    '/images/logos/tocancipa.png',
    logoLeftAlt: 'Tocancipá',
    tagLeft:     'TECHOS Y ESTRUCTURAS EN TRUSS',
    logoRight:    '',
    logoRightAlt: '',
  },
  {
    id: 5,
    type: 'logos',
    image: '/images/hero/hero-san-andres.jpg',
    logoLeft:    '',
    logoLeftAlt: '',
    tagLeft:     'SAN ANDRÉS SILLETERÍA — GRADERÍAS EN ALUMINIO',
    logoRight:    '',
    logoRightAlt: '',
  },
  {
    id: 6,
    type: 'logos',
    image: '/images/hero/hero-vips.jpg',
    logoLeft:    '',
    logoLeftAlt: '',
    tagLeft:     'GRADERÍAS VIPS — PEQUEÑAS',
    logoRight:    '',
    logoRightAlt: '',
  },
  {
    id: 7,
    type: 'logos',
    image: '/images/hero/hero-cometas.jpg',
    logoLeft:    '/images/logos/idrd-bogota.png',
    logoLeftAlt: 'IDRD — Instituto Distrital de Recreación y Deporte',
    tagLeft:     'GRADERÍA Y SILLETERÍA — Parque las Cometas',
    logoRight:    '',
    logoRightAlt: '',
  },
]

export default slides2
