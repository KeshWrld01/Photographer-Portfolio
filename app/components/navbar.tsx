'use client';

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full bg-black text-white fixed top-0 left-0 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <h2 className="text-2xl font-bold">
          <Link href="/" className="hover:text-red-400">
            Drey Pictures
          </Link>
        </h2>

        {/* Links */}
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/About"
              className="text-white transition-all duration-300 ease-in-out hover:text-blue-400 hover:scale-105"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/Projects"
              className="text-white transition-all duration-300 ease-in-out hover:text-gray-400 hover:scale-105"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/Contacts"
              className="text-white transition-all duration-300 ease-in-out hover:text-gray-400 hover:scale-105"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
