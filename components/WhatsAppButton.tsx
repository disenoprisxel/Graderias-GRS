import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  const phone = '573132816757'
  const message = encodeURIComponent('Hola, me gustaría obtener más información sobre sus servicios de graderías.')
  const url = `https://wa.me/${phone}?text=${message}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-[#25D366] text-white rounded-full shadow-lg px-4 py-3 hover:bg-[#128C7E] transition-colors group"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp size={26} className="shrink-0" />
      <span className="text-sm font-heading font-semibold hidden sm:block group-hover:block">
        ¿Cómo podemos ayudarte?
      </span>
    </a>
  )
}
