'use client'

import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

const PHONE = '573132816757'
const DEFAULT_MESSAGE = 'Hola, me gustaría obtener más información sobre sus servicios de graderías.'

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false)
  const [mensaje, setMensaje] = useState('')

  const handleEnviar = () => {
    const text = encodeURIComponent(mensaje.trim() || DEFAULT_MESSAGE)
    window.open(`https://wa.me/${PHONE}?text=${text}`, '_blank', 'noopener,noreferrer')
    setOpen(false)
    setMensaje('')
  }

  return (
    <>
      {/* ── Popup / Widget ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-24 left-4 sm:left-6 z-50 w-72 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#25D366] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                  <FaWhatsapp size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-heading font-bold text-sm leading-tight">
                    Bienvenido a Graderías GRS
                  </p>
                  <p className="text-white/80 text-xs">Normalmente responde al instante</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white transition-colors ml-2"
                aria-label="Cerrar"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Burbuja de mensaje */}
            <div className="bg-[#f0f0f0] px-4 pt-4 pb-3">
              <div className="bg-white rounded-lg rounded-tl-none px-4 py-3 shadow-sm max-w-[85%] relative">
                {/* Triangulo burbuja */}
                <div className="absolute -top-2 left-0 w-0 h-0
                  border-r-[10px] border-r-white
                  border-t-[10px] border-t-transparent" />
                <p className="text-[#333] text-sm font-heading font-semibold leading-snug">
                  Hola, Bienvenido a Graderías GRS
                </p>
                <p className="text-[#555] text-sm mt-0.5">
                  ¿En qué podemos ayudarte?
                </p>
              </div>

              {/* Input mensaje opcional */}
              <textarea
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleEnviar() } }}
                placeholder="Escribe tu mensaje..."
                rows={2}
                className="mt-3 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-dark placeholder-gray-400 focus:outline-none focus:border-[#25D366] resize-none bg-white"
              />
            </div>

            {/* Botón Hablamos */}
            <div className="bg-[#f0f0f0] px-4 pb-4">
              <button
                onClick={handleEnviar}
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-heading font-bold py-3 rounded-full flex items-center justify-center gap-2 transition-colors text-sm shadow-md"
              >
                <FaWhatsapp size={18} />
                Hablamos?
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Botón flotante ── */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        animate={open ? { scale: 1 } : {
          scale: [1, 1.15, 1, 1.15, 1],
        }}
        transition={open ? {} : {
          duration: 1.2,
          repeat: Infinity,
          repeatDelay: 2.5,
          ease: 'easeInOut',
        }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 left-4 sm:left-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
      >
        {/* Anillo de pulso */}
        {!open && (
          <>
            <motion.span
              className="absolute inset-0 rounded-full bg-[#25D366]"
              animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
            />
            <motion.span
              className="absolute inset-0 rounded-full bg-[#25D366]"
              animate={{ scale: [1, 1.35], opacity: [0.4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut', delay: 0.4 }}
            />
          </>
        )}
        <motion.div
          animate={open ? { rotate: 0 } : { rotate: [0, -15, 15, -10, 10, 0] }}
          transition={open ? {} : { duration: 0.6, repeat: Infinity, repeatDelay: 3 }}
        >
          <FaWhatsapp size={30} />
        </motion.div>
        {/* Indicador de notificación */}
        {!open && (
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"
          />
        )}
      </motion.button>
    </>
  )
}
