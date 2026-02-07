"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const linkStyle = (href: string) =>
    `px-4 py-2 rounded-lg transition ${
      pathname === href
        ? "bg-cyan-500/20 text-cyan-400 border border-cyan-400"
        : "text-gray-400 hover:text-cyan-400 hover:bg-gray-800/40"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <Link
          href="/"
          className="text-xl font-bold text-white hover:text-cyan-400 transition"
        >
          SaiyoniX
        </Link>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300 text-xl"
        >
          ☰
        </button>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex space-x-3">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkStyle(link.href)}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block ${linkStyle(link.href)}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
