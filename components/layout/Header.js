"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "../ui/Icons";
import { homeData } from "@/lib/data/homeData";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigasi kini menggunakan Link dari Next.js untuk routing yang lebih cepat
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Fasilitas", href: "/fasilitas" },
    { name: "Prestasi", href: "/prestasi" },
    { name: "Berita", href: "/berita" },
    { name: "Kontak", href: "/kontak" },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          {homeData.profile.logo ? (
            <img
              src={homeData.profile.logo}
              alt={`${homeData.profile.name} Logo`}
              className="h-10 w-auto"
            />
          ) : (
            <span className="text-xl font-bold text-emerald-600">
              {homeData.profile.name}
            </span>
          )}
        </Link>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-emerald-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
