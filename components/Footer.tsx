'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
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

const colVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}
const colItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Footer() {
  return (
    <footer className="relative bg-[#111] text-white overflow-hidden">
      {/* Textura de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/images/footer-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
        />
      </div>

      <motion.div
        variants={colVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10 items-start"
      >
        {/* Col 1 — Logo + redes */}
        <motion.div variants={colItem} className="flex flex-col items-start gap-6">
          <Image
            src="/images/logo-footer.png"
            alt="Graderías GRS — Graderías y Escenarios"
            width={200}
            height={80}
            className="w-48 h-auto"
          />
          <p className="text-light/50 text-xs font-heading tracking-widest uppercase">
            Graderias y Escenarios
          </p>
          <div className="flex gap-3 mt-1">
            {sociales.map(({ href, label, Icono }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15 }}
                className="w-10 h-10 rounded bg-white/10 hover:bg-primary transition-colors flex items-center justify-center"
              >
                <Icono size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Col 2 — Contacto */}
        <motion.div variants={colItem}>
          <h3 className="font-heading font-bold text-primary uppercase tracking-widest text-xs mb-5">
            Nos encuentras en
          </h3>
          <ul className="space-y-3">
            {contacto.map(({ Icono, texto, href }, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <Icono className="text-primary mt-0.5 shrink-0" size={15} />
                {href ? (
                  <a href={href} className="text-white font-semibold hover:text-primary transition-colors break-all">
                    {texto}
                  </a>
                ) : (
                  <span className="text-white font-semibold">{texto}</span>
                )}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Col 3 — Certificaciones */}
        <motion.div variants={colItem} className="flex flex-col gap-6">
          <Image
            src="/images/certificaciones/logosFooter3.png"
            alt="Certificaciones — ICC, ISO 9001, ISO 10001"
            width={280}
            height={120}
            className="object-contain w-full max-w-[280px]"
          />

        </motion.div>
      </motion.div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/20 py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm font-semibold text-white">
          <span>&copy; {new Date().getFullYear()} Graderías GRS. Todos los derechos reservados.</span>
          <span className="text-white/80">
            Hecho por <span className="text-primary font-bold">PRISXEL</span> con <span className="heart-cycle">❤</span>
          </span>
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
