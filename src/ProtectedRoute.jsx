import React, { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true)
  const [session, setSession] = useState(null)

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setSession(session)
      setLoading(false)
    }

    checkSession()
  }, [])

  if (loading) {
    return <p>Cargando...</p> // Puedes poner un spinner aquí
  }

  if (!session) {
    return <Navigate to="/login" replace />
  }

  return children
}
