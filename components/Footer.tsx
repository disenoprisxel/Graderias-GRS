import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FiMapPin, FiSmartphone, FiPhone, FiMail } from 'react-icons/fi'

const sociales = [
  { href: 'https://www.facebook.com/graderiasgrs',  label: 'Facebook',  Icono: FaFacebook },
  { href: 'https://www.instagram.com/graderiasgrs', label: 'Instagram', Icono: FaInstagram },
  { href: 'https://www.youtube.com/@graderiasgrs',  label: 'YouTube',   Icono: FaYoutube },
]

const contacto = [
  { Icono: FiMapPin,     texto: 'TRSV. 8a BIS # 164 B - 45 Bogotá - Colombia' },
  { Icono: FiSmartphone, texto: '+57 320 699 3020' },
  { Icono: FiPhone,      texto: '+57 - 467 5813' },
  { Icono: FiMail,       texto: 'graderiasgrs@outlook.com',      href: 'mailto:graderiasgrs@outlook.com' },
  { Icono: FiMail,       texto: 'rodrigosabogal58@hotmail.com',  href: 'mailto:rodrigosabogal58@hotmail.com' },
]

const certificaciones = [
  { src: '/images/certificaciones/25-years.png',         alt: '25 Years Experience',        w: 70,  h: 70 },
  { src: '/images/certificaciones/icc.png',              alt: 'ICC International Code Council', w: 130, h: 60 },
  { src: '/images/certificaciones/iso-9001.png',         alt: 'ISO 9001 Icontec',            w: 90,  h: 90 },
  { src: '/images/certificaciones/iso-14001.png',        alt: 'ISO 14001 Icontec',           w: 90,  h: 90 },
  { src: '/images/certificaciones/camara-comercio.png',  alt: 'Cámara de Comercio de Bogotá', w: 120, h: 50 },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#111] text-white overflow-hidden">
      {/* Textura de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/images/footer-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-10"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

        {/* Col 1 — Logo + redes */}
        <div className="flex flex-col items-start gap-6">
          <Image
            src="/images/logo.png"
            alt="Graderías GRS — Graderías y Escenarios"
            width={200}
            height={80}
            className="w-48 h-auto brightness-0 invert"
          />
          <p className="text-light/50 text-xs font-heading tracking-widest uppercase">
            Graderias y Escenarios
          </p>
          <div className="flex gap-3 mt-1">
            {sociales.map(({ href, label, Icono }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded bg-white/10 hover:bg-primary transition-colors flex items-center justify-center"
              >
                <Icono size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — Contacto */}
        <div>
          <h3 className="font-heading font-bold text-primary uppercase tracking-widest text-xs mb-5">
            Nos encuentras en
          </h3>
          <ul className="space-y-3">
            {contacto.map(({ Icono, texto, href }, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-light/80">
                <Icono className="text-primary mt-0.5 shrink-0" size={15} />
                {href ? (
                  <a href={href} className="hover:text-primary transition-colors break-all">
                    {texto}
                  </a>
                ) : (
                  <span>{texto}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Certificaciones */}
        <div className="flex flex-col gap-4">
          {/* Fila 1: 25 years + ICC */}
          <div className="flex items-center gap-4 flex-wrap">
            <Image
              src="/images/certificaciones/25-years.png"
              alt="25 Years Experience"
              width={65}
              height={65}
              className="object-contain"
            />
            <Image
              src="/images/certificaciones/icc.png"
              alt="ICC International Code Council"
              width={140}
              height={55}
              className="object-contain"
            />
          </div>

          {/* Fila 2: ISO 9001 + ISO 14001 */}
          <div className="flex items-center gap-4 flex-wrap">
            <Image
              src="/images/certificaciones/iso-9001.png"
              alt="ISO 9001 Icontec"
              width={85}
              height={85}
              className="object-contain"
            />
            <Image
              src="/images/certificaciones/iso-14001.png"
              alt="ISO 14001 Icontec"
              width={85}
              height={85}
              className="object-contain"
            />
          </div>

          <p className="text-white/70 text-xs font-heading text-center leading-snug">
            Fabricación de graderías con<br />materiales certificados
          </p>

          {/* Cámara de Comercio */}
          <Image
            src="/images/certificaciones/camara-comercio.png"
            alt="Cámara de Comercio de Bogotá"
            width={110}
            height={45}
            className="object-contain"
          />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/10 py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/30">
          <span>&copy; {new Date().getFullYear()} Graderías GRS. Todos los derechos reservados.</span>
          <span>
            <Link href="/contacto" className="hover:text-primary transition-colors">Contacto</Link>
            {' '}&mdash;{' '}
            <Link href="/descargas" className="hover:text-primary transition-colors">Descargas</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
