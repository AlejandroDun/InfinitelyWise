import { useState } from 'react'
import { supabase } from '../supabaseClient'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) alert(error.message)
    else alert('Sesión iniciada')
  }

  const signUp = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })
    if (error) alert(error.message)
    else alert('Revisa tu correo para confirmar el registro')
  }

  return (
    <div className="p-4">
      <input type="email" placeholder="Email" className="mb-2" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Contraseña" className="mb-2" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={signIn}>Iniciar Sesión</button>
      <button onClick={signUp}>Registrarse</button>
    </div>
  )
}
