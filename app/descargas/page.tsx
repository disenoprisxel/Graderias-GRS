import type { Metadata } from 'next'
import { FiDownload, FiFileText } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Descargas — Graderías GRS',
  description:
    'Descargue los brochures de alquiler y venta de graderías y escenarios de Graderías GRS.',
}

const archivos = [
  {
    nombre: 'Brochure Alquiler de Graderías',
    descripcion: 'Catálogo completo de servicios de alquiler: graderías, escenarios, cubiertas y mobiliario para eventos.',
    archivo: '/downloads/Brochure-Alquiler-GRS.pdf',
    badge: 'ALQUILER',
  },
  {
    nombre: 'Brochure Venta de Graderías',
    descripcion: 'Catálogo de productos en venta: graderías en aluminio, silletería, estructuras truss y más.',
    archivo: '/downloads/Brochure-Venta-GRS.pdf',
    badge: 'VENTA',
  },
]

export default function DescargasPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-primary font-heading font-bold uppercase tracking-widest text-sm">
            Material corporativo
          </span>
          <h1 className="font-heading font-extrabold text-white text-4xl md:text-5xl mt-3">
            Descargas
          </h1>
          <p className="mt-4 text-light/80 text-lg">
            Descarga nuestros brochures con toda la información de productos y servicios.
          </p>
        </div>
      </section>

      {/* Archivos */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-6">
            {archivos.map((archivo) => (
              <a
                key={archivo.archivo}
                href={archivo.archivo}
                download
                className="flex items-center justify-between p-6 border border-light rounded-xl hover:border-primary hover:shadow-lg transition-all group bg-white"
              >
                <div className="flex items-start gap-5">
                  {/* Icono */}
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <FiFileText className="text-primary group-hover:text-white transition-colors" size={28} />
                  </div>

                  {/* Texto */}
                  <div>
                    <span className="inline-block bg-primary/10 text-primary font-heading font-bold text-xs uppercase tracking-widest px-2 py-0.5 rounded mb-2">
                      {archivo.badge}
                    </span>
                    <h2 className="font-heading font-bold text-dark text-lg leading-tight">
                      {archivo.nombre}
                    </h2>
                    <p className="mt-1 text-body-text text-sm leading-relaxed max-w-sm">
                      {archivo.descripcion}
                    </p>
                  </div>
                </div>

                {/* Botón */}
                <div className="flex flex-col items-center gap-1 text-primary shrink-0 ml-4 group-hover:text-dark transition-colors">
                  <FiDownload size={24} />
                  <span className="text-xs font-heading font-bold uppercase tracking-wide hidden sm:block">
                    Descargar
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-14 p-7 bg-[#f9f9f9] rounded-2xl text-center border border-light">
            <p className="text-body-text text-sm leading-relaxed">
              ¿Necesita información técnica específica de algún producto?{' '}
              <a href="/contacto" className="text-primary font-heading font-semibold hover:underline">
                Contáctenos
              </a>{' '}
              y le enviamos el material que necesite.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
