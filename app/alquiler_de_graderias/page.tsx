import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FiChevronRight, FiCheck, FiLayers, FiGrid, FiHeart } from 'react-icons/fi'
import GaleriaLightbox from '@/components/ui/GaleriaLightbox'
import ViajamosCTA from '@/components/sections/ViajamosCTA'

export const metadata: Metadata = {
  title: 'Alquiler de Graderías | Graderías GRS',
  description:
    'GRS alquila graderías en aluminio y hierro, tarimas, vallas y palcos a nivel nacional para eventos deportivos, culturales, sociales y corporativos. Certificación ICC.',
}

const galeria = [
  'imgi_32_w-fitnnes',
  'imgi_33_tenis',
  'imgi_34_sanofi-2-',
  'imgi_35_sanofi',
  'imgi_36_palco-con-techo-',
  'imgi_37_nectar-arena-ibague-',
  'imgi_38_ministerio-de-cultura',
  'imgi_39_ministeria-del-intrerior-rendicion-de-cuentas',
  'imgi_40_juegos-centroamericanos-y-del-caribe-barranquilla-2018',
  'imgi_41_IMG_9797-scaled',
  'imgi_42_IMG_9378-scaled',
  'imgi_43_IMG_9243-scaled',
  'imgi_44_IMG_9240-scaled',
  'imgi_45_IMG_8882',
  'imgi_46_IMG_8450-scaled',
  'imgi_47_IMG_7888-scaled',
  'imgi_48_IMG_8442-scaled',
  'imgi_49_IMG_7886-scaled',
  'imgi_50_IMG_8436-scaled',
  'imgi_51_IMG_7884-scaled',
  'imgi_52_IMG_8433-scaled',
  'imgi_53_IMG_7883-scaled',
  'imgi_54_IMG_7999',
  'imgi_55_IMG_7882-scaled',
  'imgi_56_IMG_7892-scaled',
  'imgi_57_IMG_7890-scaled',
  'imgi_58_IMG_7881-scaled',
  'imgi_59_IMG_7875-2-scaled',
  'imgi_60_IMG_7875-scaled',
  'imgi_61_IMG_7836-scaled',
  'imgi_62_IMG_7835-scaled',
  'imgi_63_IMG_7377-scaled',
  'imgi_64_IMG_7376-scaled',
  'imgi_65_IMG_7372-scaled',
  'imgi_66_IMG_7366-scaled',
  'imgi_67_IMG_7365-scaled',
  'imgi_68_IMG_7362-scaled',
  'imgi_69_IMG_7349-scaled',
  'imgi_70_IMG_7247-scaled',
  'imgi_71_IMG_7222-scaled',
  'imgi_72_IMG_7212-scaled',
  'imgi_73_IMG_7206-scaled',
  'imgi_74_IMG_6783-scaled',
  'imgi_75_IMG_6755',
  'imgi_76_IMG_6734-scaled',
  'imgi_77_IMG_6636-scaled',
  'imgi_78_IMG_6632-scaled',
  'imgi_79_IMG_5708',
  'imgi_80_IMG_5531-scaled',
  'imgi_81_IMG_5454-scaled',
  'imgi_82_IMG_4221-scaled',
  'imgi_83_IMG_4132',
  'imgi_84_IMG_3904-1',
  'imgi_85_IMG_3713',
  'imgi_86_IMG_3162-scaled',
  'imgi_87_IMG_3108-scaled',
  'imgi_88_IMG_3092-1',
  'imgi_89_IMG_3075-scaled',
  'imgi_90_IMG_2909',
  'imgi_91_IMG_2743-1',
  'imgi_92_IMG_2742-2',
  'imgi_93_IMG_2742',
  'imgi_94_IMG_2739-scaled',
  'imgi_95_IMG_2738-scaled',
  'imgi_96_IMG_2737-scaled',
  'imgi_97_IMG_2736-scaled',
  'imgi_98_IMG_2735-scaled',
  'imgi_99_gradss-elevadas-',
  'imgi_100_GOPR0116-scaled',
  'imgi_101_GOPR0115-scaled',
  'imgi_102_GOPR0109-scaled',
  'imgi_103_foto-baner-alta',
  'imgi_104_fitland',
  'imgi_105_fiestas-de-la-independenica-cartagena',
  'imgi_106_fiestas-de-la-independencia-cartagena',
  'imgi_107_IMG_2734-scaled',
  'imgi_108_IMG_2733-scaled',
  'imgi_109_IMG_2659-1',
  'imgi_110_IMG_1702-1',
  'imgi_111_IMG_1603',
  'imgi_112_IMG_1025-scaled',
  'imgi_113_IMG_0833-scaled',
  'imgi_114_feria-del-libro-2023',
  'imgi_115_f899cd24-4841-4943-ba5e-c485839d2c53-1',
  'imgi_116_F135DC55-4DA3-4F1A-AEED-E6725BDFCB8C-2-2',
  'imgi_117_f8dffae8-bc2e-42e3-9815-b123c07f8576-1',
  'imgi_118_eventos-sirvalo-pues-1',
  'imgi_119_encuentro-mundial-de-coleo-scaled',
  'imgi_120_ef964b2b-bdc6-4018-b424-bd4684ca3a0c-1',
  'imgi_121_ed85712c-8e34-406d-8079-1f9f7ad42920-1',
  'imgi_122_ec238d8d-a2ef-4738-8331-98cf15fe9b4b-1',
  'imgi_123_e9c69bb5-6ad2-401e-84c8-f14e4ff0fb58',
  'imgi_124_e2ddd8e3-c643-45aa-b760-9967bfdfdc2d-1',
  'imgi_125_e1cfe246-3b59-4c45-9398-bb021d7750c5-1',
  'imgi_126_DJI_0523-scaled',
  'imgi_127_DJI_0520-scaled',
  'imgi_128_directv-open-2-1-1',
  'imgi_129_directv-open-1',
  'imgi_130_df4ed0d7-f34c-4aa7-b574-2e902d724737-1',
  'imgi_131_df2d9d04-e9ad-460b-a5b7-03fa101023f3-1',
  'imgi_132_desfile-de-modas-1',
  'imgi_133_desfile-de-independencia-cartagena-1',
  'imgi_134_d3c19ec6-a1b7-4fbe-8071-e875514b4f25-1',
  'imgi_135_corralejas-de-sincelejo-1',
  'imgi_136_copa-davis-2-1-1',
  'imgi_137_coca-cola-hotel-las-americas-1',
  'imgi_138_coca-cola-cartagena-1-1',
  'imgi_139_coca-cola-3-1-1',
  'imgi_140_coca-cola-1-1',
  'imgi_141_coca-cola-1',
  'imgi_142_chamorro-music-hall-1',
  'imgi_143_chamorro-musica-hall-1',
  'imgi_144_ce1853aa-dd8d-4f2b-8cb9-51940cc4cd9b-1',
  'imgi_145_cd11e3fe-eddb-45fc-b78a-d15b12ab808f-4-1',
  'imgi_146_cartagena-desfile-de-la-independencia-1',
  'imgi_147_cartagena-desfile-de-independencia-1',
  'imgi_148_cartagena-5-1',
  'imgi_149_cartagena-1',
  'imgi_150_carnaval-de-barranquilla-2024-1',
  'imgi_151_carnaval-de-barranquilla-223',
  'imgi_152_carnaval-de-barranquilla-1-1',
  'imgi_153_ca7054de-503e-4cf5-b22a-93f681ecc35c-1',
  'imgi_154_c3047159-dcdf-4fe6-96e7-26b7265e30ce-4-1',
  'imgi_155_c483ec1a-f3b4-4b49-8688-3980dd175dc6-1',
  'imgi_156_c30d1a3b-749c-4cf2-a366-03fa8636502b-1',
  'imgi_157_c23bf8cb-f604-4b9f-a47f-a1ea7544bac4-1',
  'imgi_158_c1a4aae1-29f2-4164-93cd-35c8eb112417',
  'imgi_159_b248153f-6914-47ba-bb96-d539207017c5-1',
  'imgi_160_asdecaldas-feria-equina-2-1-1',
  'imgi_161_asdecaldas-1',
  'imgi_162_alcalida-de-villavicencio',
  'imgi_163_a9849662-f73e-4f75-9dcf-8cc482293446-1',
  'imgi_164_a8612eaf-8562-4916-8c51-de0de69eaca4-1',
  'imgi_165_a4439cba-498f-42bc-be87-456b7ddfd467-1',
  'imgi_166_a1636ce0-da9f-4eac-9b18-1d902bc31a47-4-1',
  'imgi_167_a96ae442-7217-4634-9de9-145c3834e564-4-1',
  'imgi_168_a069ff9c-6756-46fb-8501-480b881fd33d-4-1',
  'imgi_169_63646036-78a5-4bfb-9907-4b8893b034db-1',
  'imgi_170_13425499-b4b4-4645-b452-af9aa5e98c70-1',
  'imgi_171_1753315d-a7ca-45c6-8bf6-62d35bb826bb-1',
  'imgi_172_437730f8-9028-4af3-be91-f4c33190f14c',
  'imgi_173_037357d0-affc-4fc6-be23-5a52da297d32-1',
  'imgi_174_11856e0b-01b9-4f52-b57a-68eee31b891a-1',
  'imgi_175_8292a3dd-2cfb-4094-9501-929386295350-1',
  'imgi_176_7641af9f-7eeb-48ae-aa87-d8a1f4cfd9e2-1',
  'imgi_177_4238d171-8e61-4d8d-aa81-0abb00d1cc93-1',
  'imgi_178_2397fced-dbb8-4124-8c34-17f2c638baa7-1',
  'imgi_179_1550acd1-d5aa-4af3-b3a1-31629fba317c-1',
  'imgi_180_820c3fe3-e864-46a5-8469-81ddd4ab7847-4-1',
  'imgi_181_810e2663-e839-45c9-b494-9b17bb9749f1-1',
  'imgi_182_596c2ba5-bf33-43ac-b4df-cfab93379941',
  'imgi_183_225d476e-93c2-4d19-b51e-4df2d6a9579b-1',
  'imgi_184_189e58ce-87c8-417e-b2a2-e832680e31e0-1',
  'imgi_185_160de4c6-4e0b-4eb1-befa-074417b0a588-1',
  'imgi_186_91ef81b4-c739-4f2c-a62c-1d5958d28bf3',
  'imgi_187_74e1679a-4b9f-4fe3-9e92-5a4c91b6f448-1',
  'imgi_188_67fb3dba-3a4c-4359-bebf-d4f13c83947b-1',
  'imgi_189_66df8ab3-0382-45e8-b740-32f19387d78e-1',
  'imgi_210_IMG_4320',
  'imgi_211_8-visita-graderias-aluminio-hierro-acoprex-graderia-grs-alquiler-venta-eventos-montaje-escenarios-eventos-conciertos-ferias-fiestas-de-pueblo-1280x800-1',
].map(n => `/images/productos/alquiler-graderias/${n}.jpg`)

const especificaciones = [
  {
    Icono: FiLayers,
    titulo: 'TUBERÍA A.N.',
    texto: 'Consta de módulos fabricados con tubería A.N. de alta resistencia de 1¼ de diámetro y arriostramiento de crucetas en tubo de 7/8 de diámetro. Posa pies en aluminio anodizado de 22.5 cm, va en tornillos niveladores en acero para adaptar la gradería a cualquier terreno y dar una perfecta nivelación; igualmente se puede ubicar la gradería iniciando a nivel de piso.',
  },
  {
    Icono: FiGrid,
    titulo: 'SILLETERÍA',
    texto: 'Silletería individual fabricada en polipropileno copolímero de alto impacto, moldeada por sistema de inyección con acabado liso brillante, protección contra rayos U.V.',
  },
  {
    Icono: FiHeart,
    titulo: 'ERGONOMÍA',
    texto: 'Estas sillas están diseñadas ergonómicamente para mejor confort del espectador y presentan pared doble en el espaldar para dar más resistencia mecánica. Cada silla posee 3 aberturas para su anclaje y una cuarta para el drenaje de agua o líquidos.',
  },
]

const caracteristicas = [
  'Estructuras certificadas ICC',
  'Capacidad desde 100 hasta 10.000+ espectadores',
  'Instalación y desmontaje incluidos',
  'Supervisión técnica permanente',
  'Transporte a nivel nacional',
  'Graderías en aluminio y hierro',
  'Categoría general y VIP',
  'Tarimas, vallas y palcos de honor',
  'Disponible con o sin techo',
  'Cumplimiento de normas de seguridad',
]

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 md:h-96 bg-dark overflow-hidden">
        <Image
          src="/images/productos/alquiler-graderias/imgi_149_cartagena-1.jpg"
          alt="Alquiler de Graderías — Graderías GRS"
          fill
          className="object-cover opacity-55"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <nav className="flex items-center gap-1 text-light/70 text-sm mb-4">
            <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
            <FiChevronRight className="text-light/50" />
            <span className="text-white">Alquiler de Graderías</span>
          </nav>
          <h1 className="font-heading font-extrabold text-white text-3xl md:text-5xl drop-shadow-lg">
            Alquiler de Graderías
          </h1>
          <p className="mt-3 text-primary font-heading font-semibold text-lg max-w-2xl">
            Su evento en las mejores manos...
          </p>
        </div>
      </section>

      {/* Descripción + características */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-body-text leading-relaxed mb-4 text-lg">
            Graderías GRS ofrece el servicio de alquiler de graderías para eventos de todo tipo: deportivos, culturales, corporativos y religiosos. Contamos con una amplia flota de estructuras certificadas bajo los estándares del ICC (International Code Council).
          </p>
          <p className="text-body-text leading-relaxed mb-4 text-lg">
            GRS alquila graderías en aluminio y hierro de categoría general y VIP con sentaderos tipo estadio; así mismo, tarimas, vallas y palcos de honor para su servicio a nivel nacional, satisfaciendo a cabalidad las necesidades de nuestros clientes y cumpliendo los requerimientos de carácter masivo —deportivos, culturales, sociales, populares y/o privados—, garantizando resultados óptimos en tiempo récord y con los mejores precios del mercado.
          </p>
          <p className="text-body-text leading-relaxed mb-8 text-lg">
            Ofrecemos el servicio completo: transporte, instalación, supervisión técnica y desmontaje. Nuestro equipo de profesionales le garantiza una instalación segura y en los tiempos acordados.
          </p>

          {/* Características compactas */}
          <div className="mt-2">
            <h2 className="font-heading font-bold text-dark text-xl mb-4">Características</h2>
            <ul className="flex flex-wrap gap-2">
              {caracteristicas.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-1.5 bg-light/70 border border-light text-dark/80 text-sm font-heading font-semibold px-3 py-1.5 rounded-full"
                >
                  <FiCheck size={13} className="text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Especificaciones técnicas */}
      <section className="py-16 bg-[#f8f9f4] border-t border-light">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {especificaciones.map(({ Icono, titulo, texto }) => (
              <div key={titulo} className="flex flex-col items-center text-center">
                <div className="mb-5 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Icono size={30} className="text-primary" />
                </div>
                <h3 className="font-heading font-extrabold text-primary uppercase tracking-widest text-sm mb-4">
                  {titulo}
                </h3>
                <p className="text-body-text text-sm leading-relaxed">
                  {texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería con Lightbox */}
      <section className="pb-16 bg-light/30">
        <div className="max-w-7xl mx-auto px-4 pt-8">
          <h2 className="font-heading font-bold text-dark text-2xl mb-6 text-center">
            Galería de Imágenes
          </h2>
          <GaleriaLightbox images={galeria} titulo="Alquiler de Graderías" />
        </div>
      </section>

      <ViajamosCTA />
    </>
  )
}
