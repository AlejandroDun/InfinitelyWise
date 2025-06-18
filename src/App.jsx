import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white text-gray-800 font-sans">
      <header className="bg-blue-600 text-white shadow p-6">
        <h1 className="text-3xl font-bold text-center">InfinitelyWise</h1>
        <p className="text-center mt-2">Una comunidad cristiana comprometida con el crecimiento espiritual</p>
      </header>

      <main className="p-8 max-w-4xl mx-auto space-y-10">
        <section className="text-center">
          <h2 className="text-2xl font-semibold">Bienvenido</h2>
          <p className="mt-4 text-lg">Este es un sitio construido con amor, fe y tecnología moderna.</p>
          <button
            className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition"
            onClick={() => setCount(count + 1)}
          >
            ¡Has hecho clic {count} veces!
          </button>
        </section>

        <section className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-4">Sobre Nosotros</h3>
          <p>
            Somos una comunidad enfocada en ayudar a las personas a crecer en su fe a través del aprendizaje, el apoyo mutuo y el servicio.
          </p>
        </section>

        <section className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-4">Contáctanos</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full border border-gray-300 p-2 rounded"
            />
            <input
              type="email"
              placeholder="Tu correo"
              className="w-full border border-gray-300 p-2 rounded"
            />
            <textarea
              placeholder="Tu mensaje"
              className="w-full border border-gray-300 p-2 rounded h-24"
            ></textarea>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-800"
            >
              Enviar
            </button>
          </form>
        </section>
      </main>

      <footer className="text-center text-sm text-gray-600 py-6">
        © {new Date().getFullYear()} InfinitelyWise. Todos los derechos reservados.
      </footer>
    </div>
  );
}
