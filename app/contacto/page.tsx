'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import { FaPhone, FaWhatsapp } from 'react-icons/fa'
import { FiMail, FiUser, FiPhone, FiMessageSquare, FiSend } from 'react-icons/fi'

// Note: metadata must be in a separate server component when using 'use client'.
// The title/description are set in layout via the template defined in root layout.

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', mensaje: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Error al enviar')
      setStatus('success')
      setForm({ nombre: '', email: '', telefono: '', mensaje: '' })
    } catch {
      setStatus('error')
    }
  }

  const waUrl =
    'https://wa.me/573132816757?text=' +
    encodeURIComponent('Hola, me gustaría obtener información sobre sus servicios.')

  return (
    <>
      {/* Hero */}
      <section className="bg-dark py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-primary font-heading font-bold uppercase tracking-widest text-sm">
            Estamos para servirle
          </span>
          <h1 className="font-heading font-extrabold text-white text-4xl md:text-5xl mt-3">
            Contáctenos
          </h1>
          <p className="mt-4 text-light/80 text-lg">
            Solicite cotización, resuelva sus dudas o comuníquese directamente con nuestro equipo.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h2 className="font-heading font-bold text-dark text-2xl mb-6">Información de contacto</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <FaPhone className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-heading font-bold text-dark">Teléfonos</p>
                  <p className="text-body-text mt-1">313 281 6757</p>
                  <p className="text-body-text">320 687 3798</p>
                  <p className="text-body-text">320 699 3020</p>
                  <p className="text-body-text">+57 &minus; 467 5813</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <FiMail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-heading font-bold text-dark">Correo electrónico</p>
                  <a href="mailto:info@graderiasgrs.com" className="text-primary hover:underline mt-1 block">
                    info@graderiasgrs.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#25D366]/10 rounded-lg flex items-center justify-center shrink-0">
                  <FaWhatsapp className="text-[#25D366]" size={24} />
                </div>
                <div>
                  <p className="font-heading font-bold text-dark">WhatsApp</p>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-2 bg-[#25D366] text-white font-heading font-semibold px-4 py-2 rounded-lg hover:bg-[#128C7E] transition-colors text-sm"
                  >
                    <FaWhatsapp size={16} />
                    Iniciar chat
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-dark rounded-xl text-white">
              <h3 className="font-heading font-bold text-primary mb-2">Cobertura nacional</h3>
              <p className="text-light/80 text-sm leading-relaxed">
                Atendemos eventos en todo el territorio colombiano. Nuestro equipo se desplaza
                a cualquier ciudad para garantizar una instalación profesional y segura.
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="font-heading font-bold text-dark text-2xl mb-6">Envíenos un mensaje</h2>

            {status === 'success' ? (
              <div className="bg-primary/10 border border-primary rounded-xl p-8 text-center">
                <div className="text-primary text-5xl mb-4">✓</div>
                <h3 className="font-heading font-bold text-dark text-xl">¡Mensaje enviado!</h3>
                <p className="text-body-text mt-2">
                  Nos pondremos en contacto con usted a la brevedad.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-primary font-heading font-semibold hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nombre */}
                <div>
                  <label className="font-heading font-semibold text-dark text-sm mb-1 flex items-center gap-2">
                    <FiUser className="text-primary" /> Nombre completo *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Su nombre"
                    className="w-full border border-light rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="font-heading font-semibold text-dark text-sm mb-1 flex items-center gap-2">
                    <FiMail className="text-primary" /> Correo electrónico *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="correo@ejemplo.com"
                    className="w-full border border-light rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <label className="font-heading font-semibold text-dark text-sm mb-1 flex items-center gap-2">
                    <FiPhone className="text-primary" /> Teléfono / WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={form.telefono}
                    onChange={handleChange}
                    placeholder="300 000 0000"
                    className="w-full border border-light rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Mensaje */}
                <div>
                  <label className="font-heading font-semibold text-dark text-sm mb-1 flex items-center gap-2">
                    <FiMessageSquare className="text-primary" /> Mensaje *
                  </label>
                  <textarea
                    name="mensaje"
                    required
                    value={form.mensaje}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Cuéntenos sobre su evento: tipo de evento, fecha, ciudad, número de espectadores estimado..."
                    className="w-full border border-light rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm">
                    Hubo un error al enviar el mensaje. Por favor intente de nuevo o contáctenos por WhatsApp.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-white font-heading font-bold px-6 py-4 rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-60 text-lg"
                >
                  <FiSend />
                  {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
