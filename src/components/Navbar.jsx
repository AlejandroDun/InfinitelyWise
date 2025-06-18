import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-700 p-4 text-white flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">InfinitelyWise</h1>
      <ul className="flex gap-6">
        <li><a href="#" className="hover:text-yellow-300">Inicio</a></li>
        <li><a href="#" className="hover:text-yellow-300">Nosotros</a></li>
        <li><a href="#" className="hover:text-yellow-300">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
