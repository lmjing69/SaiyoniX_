"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold text-white hover:text-cyan-400 transition"
        >
          SaiyoniX
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300 text-xl"
        >
          ☰
        </button>

        <div className="hidden md:flex space-x-8 text-gray-400">
          <Link href="/about" className="hover:text-cyan-400 transition">About</Link>
          <Link href="/services" className="hover:text-cyan-400 transition">Services</Link>
          <Link href="/team" className="hover:text-cyan-400 transition">Team</Link>
          <Link href="/contact" className="hover:text-cyan-400 transition">Contact</Link>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 space-y-3 text-gray-400">
          <Link href="/about" className="block">About</Link>
          <Link href="/services" className="block">Services</Link>
          <Link href="/team" className="block">Team</Link>
          <Link href="/contact" className="block">Contact</Link>
        </div>
      )}
    </nav>
  );
}
