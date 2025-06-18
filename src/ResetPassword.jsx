import React, { useState } from 'react'
import { supabase } from '../supabaseClient'
import Spinner from './Spinner'

export default function ResetPassword() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)

  const handleReset = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setMessage(null)

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + '/login', // opcional, dónde ir tras cambiar la contraseña
    })

    setLoading(false)
    if (error) {
      setError(error.message)
    } else {
      setMessage('Revisa tu correo para restablecer tu contraseña.')
    }
  }

  if (loading) return <Spinner />

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Recuperar Contraseña</h1>
      <form onSubmit={handleReset}>
        <label className="block mb-2">Correo Electrónico</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full border p-2 rounded mb-4"
          required
        />
        {error && <p className="text-red-600 mb-4">{error}</p>}
        {message && <p className="text-green-600 mb-4">{message}</p>}
        <button
          type="submit"
          className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
        >
          Enviar enlace de recuperación
        </button>
      </form>
    </div>
  )
}
