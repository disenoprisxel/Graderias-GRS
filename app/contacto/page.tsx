'use client'

import { useState } from 'react'
import ClientesCarrusel from '@/components/sections/ClientesCarrusel'

const inputClass =
  'w-full border border-gray-300 rounded px-4 py-3 text-sm text-dark placeholder-gray-400 focus:outline-none focus:border-primary transition-colors bg-white'

export default function ContactoPage() {
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    email: '',
    empresa: '',
    ciudad: '',
    asunto: '',
    mensaje: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ nombre: '', telefono: '', email: '', empresa: '', ciudad: '', asunto: '', mensaje: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="bg-white min-h-screen">

      {/* ── Hero Banner ── */}
      <div
        className="relative w-full h-64 md:h-80 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(/images/contacto-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-dark/70" />

        {/* Texto centrado */}
        <div className="relative z-10 text-center px-4">
          <h1 className="font-heading font-extrabold text-white text-4xl md:text-6xl uppercase tracking-wide">
            Contáctanos
          </h1>
          <p className="mt-3 text-primary font-heading font-semibold text-lg md:text-xl italic">
            Tu evento en las mejores manos...
          </p>
        </div>
      </div>

      {/* ── Subtítulo ── */}
      <div className="pt-12 pb-8 text-center">
        <p className="text-primary font-heading font-semibold italic text-lg">Sigamos</p>
        <h2 className="font-heading font-extrabold text-dark text-3xl md:text-4xl uppercase mt-1">
          En Contacto
        </h2>
        <div className="mt-3 mx-auto w-10 h-0.5 bg-primary" />
        <p className="mt-5 text-body-text text-sm max-w-lg mx-auto">
          Nos complace saber de ti, responderemos tu consulta lo más pronto posible
        </p>
      </div>

      {/* ── Mapa + Formulario ── */}
      <div className="max-w-7xl mx-auto px-4 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* Mapa Google */}
        <div className="w-full h-[480px] rounded-lg overflow-hidden shadow-md border border-gray-200">
          <iframe
            title="Ubicación Graderías GRS"
            src="https://maps.google.com/maps?q=Graderias+y+Escenarios+GRS,+TRSV+8a+BIS+%23+164+B+-+45,+Usaqu%C3%A9n,+Bogot%C3%A1,+Colombia&output=embed&hl=es&z=16"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        {/* Formulario */}
        <div>
          <h2 className="font-heading font-semibold text-dark text-xl mb-1">
            ¡Déjanos Un Mensaje!
          </h2>
          <div className="w-8 h-0.5 bg-primary mb-6" />

          {status === 'success' ? (
            <div className="border border-primary rounded-lg p-10 text-center">
              <div className="text-primary text-5xl mb-3">✓</div>
              <h3 className="font-heading font-bold text-dark text-xl">¡Mensaje enviado!</h3>
              <p className="text-body-text mt-2 text-sm">
                Nos pondremos en contacto contigo a la brevedad.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-5 text-primary font-heading font-semibold text-sm hover:underline"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">

              {/* Nombre */}
              <input
                type="text" name="nombre" required
                value={form.nombre} onChange={handleChange}
                placeholder="Nombre"
                className={inputClass}
              />

              {/* Tel/Cel + Correo */}
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="tel" name="telefono"
                  value={form.telefono} onChange={handleChange}
                  placeholder="Tel/Cel"
                  className={inputClass}
                />
                <input
                  type="email" name="email" required
                  value={form.email} onChange={handleChange}
                  placeholder="Correo Electrónico"
                  className={inputClass}
                />
              </div>

              {/* Empresa + Ciudad */}
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text" name="empresa"
                  value={form.empresa} onChange={handleChange}
                  placeholder="Empresa / Evento"
                  className={inputClass}
                />
                <input
                  type="text" name="ciudad"
                  value={form.ciudad} onChange={handleChange}
                  placeholder="Ciudad"
                  className={inputClass}
                />
              </div>

              {/* Asunto */}
              <input
                type="text" name="asunto"
                value={form.asunto} onChange={handleChange}
                placeholder="Asunto"
                className={inputClass}
              />

              {/* Mensaje */}
              <textarea
                name="mensaje" required rows={7}
                value={form.mensaje} onChange={handleChange}
                placeholder="Mensaje"
                className={`${inputClass} resize-none`}
              />

              {status === 'error' && (
                <p className="text-red-500 text-sm">
                  Error al enviar. Por favor intenta de nuevo.
                </p>
              )}

              {/* Botón Enviar — alineado a la derecha */}
              <div className="flex justify-end pt-1">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-primary hover:bg-[#7db31e] text-white font-heading font-bold px-10 py-3 rounded transition-colors disabled:opacity-60 text-sm uppercase tracking-wide"
                >
                  {status === 'loading' ? 'Enviando...' : 'Enviar'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* ── Carrusel Nuestros Clientes ── */}
      <ClientesCarrusel />

    </div>
  )
}
