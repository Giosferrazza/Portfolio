"use client";

import React, { useState } from 'react';
import Link from 'next/link';

function Header() {
  return (
    <header className="text-white p-5">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-mono ">
          <a href="/Home" className="hover:underline">Giovanni Sferrazza</a>
        </h1>

        <nav className="flex space-x-3">

        <Link href="/projects" className="hover:underline font-mono text-2xl">
            Projects
          </Link>

          <a href="/contact" className="hover:underline font-mono text-2xl">Contact</a>
          <a href="/Blog" className="hover:underline font-mono text-2xl">Blog</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;