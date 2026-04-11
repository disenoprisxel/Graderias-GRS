import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaYoutube, FaPhone, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <Image
            src="/images/logo.png"
            alt="Graderías GRS"
            width={140}
            height={52}
            className="h-12 w-auto mb-4 brightness-0 invert"
          />
          <p className="text-light text-sm leading-relaxed">
            Empresa colombiana especializada en alquiler y venta de graderías, escenarios,
            cubiertas y mobiliario para eventos con más de 25 años de experiencia.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="https://www.facebook.com/graderiasgrs" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-light hover:text-primary transition-colors">
              <FaFacebook size={20} />
            </a>
            <a href="https://www.instagram.com/graderiasgrs" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-light hover:text-primary transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.youtube.com/@graderiasgrs" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-light hover:text-primary transition-colors">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Productos */}
        <div>
          <h3 className="font-heading font-bold text-primary uppercase tracking-wide mb-4">Productos</h3>
          <ul className="space-y-2 text-sm text-light">
            {[
              ['Alquiler de Graderías', '/alquiler_de_graderias'],
              ['Venta de Graderías', '/venta_de_graderias'],
              ['Techos de Graderías', '/techos-de-graderias'],
              ['Silletería Escenarios', '/silleteria-escenarios'],
              ['Cubiertas Truss', '/cubiertas-truss'],
              ['Bancas de Madera', '/bancas-de-madera'],
              ['Paneles y Tarimas', '/paneles-y-tarimas'],
              ['Vallas y Barreras', '/vallas-y-barreras'],
              ['Stand Truss', '/stand-truss'],
              ['Pantallas LED', '/pantallas-led'],
              ['Diseño y Producción', '/diseno-y-produccion'],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-primary transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Proyectos */}
        <div>
          <h3 className="font-heading font-bold text-primary uppercase tracking-wide mb-4">Proyectos</h3>
          <ul className="space-y-2 text-sm text-light">
            {[
              ['Pista BMX Tocancipá', '/pista_bmx_tocancipa'],
              ['Estadio Béisbol Sincelejo', '/venta_de_silleteria_sincelejo'],
              ['Fuxion 2024', '/fuxion2024'],
              ['Visita Papa Francisco', '/visita-del-papa-francisco'],
              ['Copa Davis Colombia', '/copa-davis-colombia-turkia'],
              ['Copa Claro Colsanitas', '/copa-claro-colsanitas'],
              ['Juegos Centroamericanos', '/juegos-centroamericanos-y-del-caribe'],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-primary transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="font-heading font-bold text-primary uppercase tracking-wide mb-4">Contacto</h3>
          <ul className="space-y-3 text-sm text-light">
            <li className="flex items-start gap-2">
              <FaPhone className="mt-0.5 shrink-0 text-primary" />
              <span>313 281 6757<br />320 687 3798<br />320 699 3020</span>
            </li>
            <li className="flex items-start gap-2">
              <FaPhone className="mt-0.5 shrink-0 text-primary" />
              <span>+57 &minus; 467 5813</span>
            </li>
            <li className="flex items-start gap-2">
              <FaEnvelope className="mt-0.5 shrink-0 text-primary" />
              <a href="mailto:info@graderiasgrs.com" className="hover:text-primary transition-colors">
                info@graderiasgrs.com
              </a>
            </li>
          </ul>
          <div className="mt-4">
            <Link
              href="/contacto"
              className="inline-block bg-primary text-white font-heading font-bold px-4 py-2 rounded text-sm hover:bg-opacity-90 transition-colors"
            >
              Contáctenos
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-light/60">
        <span>&copy; {new Date().getFullYear()} Graderías GRS. Todos los derechos reservados.</span>
        <span>Colombia &mdash; <Link href="/contacto" className="hover:text-primary transition-colors">Contacto</Link> &mdash; <Link href="/descargas" className="hover:text-primary transition-colors">Descargas</Link></span>
      </div>
    </footer>
  )
}
