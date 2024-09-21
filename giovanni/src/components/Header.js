"use client";

import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-white p-5">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-mono ">Giovanni Sferrazza</h1>
        <nav className="flex space-x-3">
          <a href="/" className="hover:underline font-mono text-2xl">Home</a>
          <a href="/projects" className="hover:underline font-mono text-2xl">Projects</a>
          <a href="/contact" className="hover:underline font-mono text-2xl">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;