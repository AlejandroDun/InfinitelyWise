import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'
import { useNavigate } from 'react-router-dom'

export default function Oraciones() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        navigate('/login') // Si no hay sesión, redirige al login
      } else {
        setUser(session.user)
      }
    }
    getUser()
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Bienvenido a tus Oraciones</h1>
      {user && <p className="text-green-700">Sesión activa como: {user.email}</p>}
    </div>
  )
}
