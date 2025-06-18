// src/pages/EntregandoAmor.jsx
import React from 'react'
import { HeartIcon } from '@heroicons/react/24/solid'

export default function EntregandoAmor() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-yellow-100 p-8 font-sans">
      <h1 className="text-4xl font-bold text-center text-pink-800 mb-6">
        Entregando Amor <HeartIcon className="inline h-8 w-8 text-pink-500 ml-2" />
      </h1>

      <p className="max-w-2xl text-center mx-auto text-lg text-pink-700 mb-8">
        Este es un espacio para solicitar o brindar ayuda con amor. Aquí, puedes pedir apoyo en especie o para tu salud. 
        El dinero nunca se entrega directamente a las personas, sino que va a las instituciones que ofrecen el servicio.
      </p>

      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6 space-y-4">
        <h2 className="text-xl font-semibold text-pink-800">¿Qué necesitas?</h2>
        <form>
          <label className="block font-medium text-pink-700">Tipo de ayuda:</label>
          <select className="w-full p-2 border rounded mb-4">
            <option value="especie">En especie</option>
            <option value="salud">Apoyo para salud</option>
          </select>

          <label className="block font-medium text-pink-700">Descripción:</label>
          <textarea
            className="w-full p-2 border rounded mb-4"
            rows="4"
            placeholder="Ejemplo: Necesito una cama para mi hija..."
          ></textarea>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white font-bold py-2 rounded hover:bg-pink-700 transition"
          >
            Enviar Petición
          </button>
        </form>
      </div>
    </div>
  )
}
