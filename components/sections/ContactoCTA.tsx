import { FaWhatsapp, FaPhone } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

export default function ContactoCTA() {
  const waUrl =
    'https://wa.me/573132816757?text=' +
    encodeURIComponent('Hola, me gustaría obtener información sobre sus servicios de graderías.')

  return (
    <section className="py-20 bg-dark text-white relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #96CF24 0, #96CF24 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <span className="text-primary font-heading font-bold uppercase tracking-widest text-sm">
          ¿Listo para cotizar?
        </span>
        <h2 className="font-heading font-extrabold text-white text-3xl md:text-5xl mt-3 leading-tight">
          Su evento en las mejores manos
        </h2>
        <p className="mt-4 text-light/80 text-lg max-w-2xl mx-auto">
          Contáctenos hoy y reciba asesoría personalizada para su evento.
          Más de 25 años respaldando los mejores eventos de Colombia.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] text-white font-heading font-bold px-8 py-4 rounded-lg hover:bg-[#128C7E] transition-colors text-lg w-full sm:w-auto justify-center"
          >
            <FaWhatsapp size={24} />
            WhatsApp
          </a>
          <a
            href="/contacto"
            className="flex items-center gap-3 bg-primary text-white font-heading font-bold px-8 py-4 rounded-lg hover:bg-opacity-90 transition-colors text-lg w-full sm:w-auto justify-center"
          >
            <FiMail size={22} />
            Enviar mensaje
          </a>
          <a
            href="tel:+573132816757"
            className="flex items-center gap-3 border-2 border-white text-white font-heading font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-dark transition-colors text-lg w-full sm:w-auto justify-center"
          >
            <FaPhone size={20} />
            Llamar ahora
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-white/10 pt-12">
          {[
            { num: '25+', label: 'Años de experiencia' },
            { num: '500+', label: 'Eventos realizados' },
            { num: '100%', label: 'Certificados ICC' },
            { num: '24/7', label: 'Soporte técnico' },
          ].map(({ num, label }) => (
            <div key={label} className="text-center">
              <div className="font-heading font-extrabold text-primary text-4xl">{num}</div>
              <div className="text-light/70 text-sm mt-1 font-heading">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
