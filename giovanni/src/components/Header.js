import React from 'react';

function Header() {
  return (
    <header>
      <h1 className="text-3xl font-bold">Giovanni Sferrazza</h1>
      <nav>
        <ul className="flex justify-center space-x-4 mt-2">
          <li><a href="/" className="text-white hover:text-gray-400">Home</a></li>
          <li><a href="/about" className="text-white hover:text-gray-400">Projects</a></li>
          <li><a href="/contact" className="text-white hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;