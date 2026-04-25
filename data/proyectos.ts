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
  logo?: string           // logo para hover en ProyectosDestacados
  logoAlt?: string
  destacado?: boolean     // aparece en dropdown del navbar y sección home
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
    titulo: 'Billie Jean King Cup 2026',
    subtitulo: 'Torneo Internacional de Tenis',
    año: 2026,
    categoria: 'deportivo',
    imagen: '/images/proyectos/billy-jean-king/001.jpg',
    href: '/billy-jean-king-cup',
    logo: '/images/proyectos/billy-jean-king/001.jpg',
    logoAlt: 'Billie Jean King Cup 2026',
    destacado: true,
  },
  {
    id: 'equinal-bucaramanga-2026',
    titulo: 'Exposición Nacional Equina — Bucaramanga 2026',
    año: 2026,
    categoria: 'cultural',
    imagen: '/images/proyectos/equina-bucaramanga/005.jpg',
    href: '/exposicion-equina-bucaramanga',
    logo: '/images/proyectos/equina-bucaramanga/hero.jpg',
    logoAlt: 'Exposición Nacional Equina Bucaramanga 2026',
    destacado: true,
  },

  // ── 2025 ──────────────────────────────────────────────────────────────────
  {
    id: 'fair-2026',
    titulo: 'F-AIR 2026',
    subtitulo: 'Feria Aeronáutica Internacional',
    año: 2026,
    categoria: 'corporativo',
    imagen: '/images/proyectos/fair-2026/hero.jpg',
    href: '/fair-2026',
    logo: '/images/logos/fair-2026.png',
    logoAlt: 'F-AIR 2026 — Feria Aeronáutica Internacional de Colombia',
    destacado: true,
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
    logo: '/images/logos/fuxion.svg',
    logoAlt: 'FuXion 2024',
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
    logo: '/images/logos/aguilas-doradas.svg',
    logoAlt: 'Águilas Doradas',
    destacado: true,
  },
  {
    id: 'juegos-mar-playa',
    titulo: 'Juegos Centroaméricanos Mar y Playa',
    año: 2023,
    categoria: 'deportivo',
    imagen: '/images/proyectos/juegos-centroamericanos.jpg',
    href: '/juegos-centroamericanos-y-del-caribe',
    logo: '/images/logos/juegos-centroamericanos.svg',
    logoAlt: 'Juegos Centroamericanos y del Caribe',
    destacado: true,
  },
  {
    id: 'colsanitas',
    titulo: 'Copa Claro Colsanitas',
    año: 2023,
    categoria: 'deportivo',
    imagen: '/images/proyectos/colsanitas.jpg',
    href: '/copa-claro-colsanitas',
    logo: '/images/logos/colsanitas.svg',
    logoAlt: 'Copa Claro Colsanitas',
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
    logo: '/images/logos/alcaldia-tocancipa-hover.png',
    logoAlt: 'Alcaldía de Tocancipá',
    destacado: true,
  },
  {
    id: 'sincelejo',
    titulo: 'Estadio de Béisbol Sincelejo',
    año: 2022,
    categoria: 'deportivo',
    imagen: '/images/proyectos/sincelejo.jpg',
    href: '/venta_de_silleteria_sincelejo',
    logo: '/images/logos/sincelejo.svg',
    logoAlt: 'Alcaldía de Sincelejo',
    destacado: true,
  },

  // ── 2019 ──────────────────────────────────────────────────────────────────
  {
    id: 'copa-davis',
    titulo: 'Copa Davis — Colombia vs Turkía',
    año: 2019,
    categoria: 'deportivo',
    imagen: '/images/proyectos/copa-davis.jpg',
    href: '/copa-davis-colombia-turkia',
    logo: '/images/logos/copa-davis.svg',
    logoAlt: 'Copa Davis 2019',
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
    logo: '/images/logos/barranquilla.svg',
    logoAlt: 'Barranquilla 2018',
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
    logo: '/images/logos/papa-francisco.svg',
    logoAlt: 'Visita del Papa Francisco',
    destacado: true,
  },
]

// ── Helpers ───────────────────────────────────────────────────────────────────
// Proyectos con página, ordenados del más reciente al más antiguo
// Máximo 9 proyectos — los más recientes primero. El resto solo aparece en /proyectos.
export const proyectosDestacados = proyectos
  .filter((p) => p.destacado && p.href)
  .sort((a, b) => b.año - a.año)
  .slice(0, 9)

export const años = [...new Set(proyectos.map((p) => p.año))].sort((a, b) => b - a)
