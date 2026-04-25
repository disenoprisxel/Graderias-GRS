// ── Registro central de proyectos ────────────────────────────────────────────
// Agrega aquí cada nuevo proyecto. href: null = "Próximamente" (sin página aún).

export type Categoria = 'deportivo' | 'cultural' | 'corporativo' | 'gubernamental'

export interface Proyecto {
  id: string
  titulo: string
  subtitulo?: string
  año: number
  categoria: Categoria
  imagen: string | null   // null = tarjeta "Próximamente"
  href: string | null     // null = sin página todavía
  destacado?: boolean     // aparece en el dropdown del navbar
}

export const CATEGORIAS: { value: Categoria | 'todos'; label: string }[] = [
  { value: 'todos',          label: 'Todos'          },
  { value: 'deportivo',      label: 'Deportivo'      },
  { value: 'cultural',       label: 'Cultural'       },
  { value: 'corporativo',    label: 'Corporativo'    },
  { value: 'gubernamental',  label: 'Gubernamental'  },
]

export const proyectos: Proyecto[] = [
  // ── 2026 ──────────────────────────────────────────────────────────────────
  {
    id: 'billy-jean-king-2026',
    titulo: 'Billie Jean King Cup',
    subtitulo: 'Copa Internacional de Tenis',
    año: 2026,
    categoria: 'deportivo',
    imagen: null,
    href: null,
  },
  {
    id: 'equinal-bucaramanga-2026',
    titulo: 'Exposición Nacional Equinal',
    subtitulo: 'Bucaramanga',
    año: 2026,
    categoria: 'cultural',
    imagen: null,
    href: null,
  },

  // ── 2025 ──────────────────────────────────────────────────────────────────
  {
    id: 'fair-2025',
    titulo: 'FAIR 2025',
    subtitulo: 'Feria Internacional',
    año: 2025,
    categoria: 'corporativo',
    imagen: null,
    href: null,
  },
  {
    id: 'independencia-cartagena-2025',
    titulo: 'Fiestas de la Independencia',
    subtitulo: 'Cartagena de Indias',
    año: 2025,
    categoria: 'cultural',
    imagen: null,
    href: null,
  },
  {
    id: 'centro-democratico-2025',
    titulo: 'Campaña Centro Democrático',
    año: 2025,
    categoria: 'corporativo',
    imagen: null,
    href: null,
  },
  {
    id: 'bolivar-open-2025',
    titulo: 'Seguros Bolívar Open',
    subtitulo: 'Torneo de Tenis',
    año: 2025,
    categoria: 'deportivo',
    imagen: null,
    href: null,
  },
  {
    id: 'villa-olimpica-2025',
    titulo: 'Villa Olímpica Villavicencio',
    subtitulo: 'Gobernación del Meta',
    año: 2025,
    categoria: 'gubernamental',
    imagen: null,
    href: null,
  },

  // ── 2024 ──────────────────────────────────────────────────────────────────
  {
    id: 'fuxion-2024',
    titulo: 'Convención FuXion 2024',
    año: 2024,
    categoria: 'corporativo',
    imagen: '/images/proyectos/fuxion2024.jpg',
    href: '/fuxion2024',
    destacado: true,
  },

  // ── 2023 ──────────────────────────────────────────────────────────────────
  {
    id: 'aguilas-doradas',
    titulo: 'Estadio Águilas Doradas',
    año: 2023,
    categoria: 'deportivo',
    imagen: '/images/proyectos/aguilas-doradas.jpg',
    href: '/estadio-aguilas-doradas',
    destacado: true,
  },
  {
    id: 'juegos-mar-playa',
    titulo: 'Juegos Centroaméricanos Mar y Playa',
    año: 2023,
    categoria: 'deportivo',
    imagen: '/images/proyectos/juegos-centroamericanos.jpg',
    href: '/juegos-centroamericanos-y-del-caribe',
    destacado: true,
  },
  {
    id: 'colsanitas',
    titulo: 'Copa Claro Colsanitas',
    año: 2023,
    categoria: 'deportivo',
    imagen: '/images/proyectos/colsanitas.jpg',
    href: '/copa-claro-colsanitas',
    destacado: true,
  },

  // ── 2022 ──────────────────────────────────────────────────────────────────
  {
    id: 'bmx-tocancipa',
    titulo: 'Pista de BMX Tocancipá',
    año: 2022,
    categoria: 'deportivo',
    imagen: '/images/proyectos/bmx-tocancipa.jpg',
    href: '/pista_bmx_tocancipa',
  },
  {
    id: 'sincelejo',
    titulo: 'Estadio de Béisbol Sincelejo',
    año: 2022,
    categoria: 'deportivo',
    imagen: '/images/proyectos/sincelejo.jpg',
    href: '/venta_de_silleteria_sincelejo',
  },

  // ── 2019 ──────────────────────────────────────────────────────────────────
  {
    id: 'copa-davis',
    titulo: 'Copa Davis — Colombia vs Turkía',
    año: 2019,
    categoria: 'deportivo',
    imagen: '/images/proyectos/copa-davis.jpg',
    href: '/copa-davis-colombia-turkia',
    destacado: true,
  },

  // ── 2018 ──────────────────────────────────────────────────────────────────
  {
    id: 'juegos-barranquilla',
    titulo: 'Juegos Centroaméricanos Barranquilla',
    año: 2018,
    categoria: 'deportivo',
    imagen: '/images/proyectos/barranquilla.jpg',
    href: '/juegos-centroamericanos-y-del-caribe-barranquilla',
    destacado: true,
  },

  // ── 2017 ──────────────────────────────────────────────────────────────────
  {
    id: 'papa-francisco',
    titulo: 'Visita del Papa Francisco',
    año: 2017,
    categoria: 'cultural',
    imagen: '/images/proyectos/papa-francisco.jpg',
    href: '/visita-del-papa-francisco',
    destacado: true,
  },
]

// ── Helpers ──────────────────────────────────────────────────────────────────
export const proyectosDestacados = proyectos.filter((p) => p.destacado && p.href)
export const años = [...new Set(proyectos.map((p) => p.año))].sort((a, b) => b - a)
