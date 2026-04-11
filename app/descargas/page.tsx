import type { Metadata } from 'next'
import { FiDownload, FiFileText } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Descargas — Fichas Técnicas',
  description:
    'Descargue las fichas técnicas, catálogos y especificaciones de los productos y servicios de Graderías GRS.',
}

const fichas = [
  {
    categoria: 'Graderías',
    archivos: [
      { nombre: 'Ficha Técnica — Gradería Modular Estándar', archivo: '/descargas/ficha-graderia-modular.pdf' },
      { nombre: 'Ficha Técnica — Gradería con Cubierta', archivo: '/descargas/ficha-graderia-cubierta.pdf' },
      { nombre: 'Catálogo General de Graderías', archivo: '/descargas/catalogo-graderias.pdf' },
    ],
  },
  {
    categoria: 'Silletería',
    archivos: [
      { nombre: 'Ficha Técnica — Silla Plástica para Gradería', archivo: '/descargas/ficha-silla-plastica.pdf' },
      { nombre: 'Ficha Técnica — Butaca Fija para Estadio', archivo: '/descargas/ficha-butaca-fija.pdf' },
    ],
  },
  {
    categoria: 'Estructuras Truss',
    archivos: [
      { nombre: 'Ficha Técnica — Cubierta Truss Escenario', archivo: '/descargas/ficha-cubierta-truss.pdf' },
      { nombre: 'Ficha Técnica — Stand Truss Modular', archivo: '/descargas/ficha-stand-truss.pdf' },
    ],
  },
  {
    categoria: 'Otros Productos',
    archivos: [
      { nombre: 'Ficha Técnica — Valla Metálica de Seguridad', archivo: '/descargas/ficha-valla-metalica.pdf' },
      { nombre: 'Ficha Técnica — Tarima Modular', archivo: '/descargas/ficha-tarima-modular.pdf' },
      { nombre: 'Ficha Técnica — Pantalla LED', archivo: '/descargas/ficha-pantalla-led.pdf' },
    ],
  },
  {
    categoria: 'Certificaciones',
    archivos: [
      { nombre: 'Certificado ICC — International Code Council', archivo: '/descargas/certificado-icc.pdf' },
    ],
  },
]

export default function DescargasPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-primary font-heading font-bold uppercase tracking-widest text-sm">
            Recursos técnicos
          </span>
          <h1 className="font-heading font-extrabold text-white text-4xl md:text-5xl mt-3">
            Descargas
          </h1>
          <p className="mt-4 text-light/80 text-lg">
            Fichas técnicas, catálogos y certificaciones de nuestros productos y servicios.
          </p>
        </div>
      </section>

      {/* Files */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-10">
            {fichas.map((categoria) => (
              <div key={categoria.categoria}>
                <h2 className="font-heading font-bold text-dark text-xl mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary rounded-full inline-block" />
                  {categoria.categoria}
                </h2>
                <div className="space-y-3">
                  {categoria.archivos.map((archivo) => (
                    <a
                      key={archivo.archivo}
                      href={archivo.archivo}
                      download
                      className="flex items-center justify-between p-4 border border-light rounded-lg hover:border-primary hover:bg-primary/5 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                          <FiFileText className="text-primary group-hover:text-white" size={20} />
                        </div>
                        <span className="font-heading font-semibold text-dark text-sm">
                          {archivo.nombre}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-primary text-sm font-heading font-semibold shrink-0">
                        <FiDownload size={18} />
                        <span className="hidden sm:inline">Descargar</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-light/50 rounded-xl text-center">
            <p className="text-body-text">
              ¿No encuentra el documento que busca?{' '}
              <a href="/contacto" className="text-primary font-heading font-semibold hover:underline">
                Contáctenos
              </a>{' '}
              y le enviamos la información técnica que necesite.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
