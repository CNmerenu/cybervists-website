"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Blog", href: "/blog" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full px-4 md:px-16 py-6 md:py-8 bg-gradient-to-b md:bg-gradient-to-r from-primary-500 to-accent-500 h-auto md:h-[100px] flex justify-center items-center sticky top-0 z-50">
      <header className="w-full max-w-[1440px] mx-auto h-full">
        <div className="flex items-center justify-between ">
          <div className="flex items-center justify-between w-full">
            <Link href="/">
              <Image
                src={"/assets/logo-light.svg"}
                width={150}
                height={50}
                alt="cybervists textlogo"
              />
            </Link>
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-blue-400 hover:font-bold transition-colors duration-300 font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors duration-300"
            >
              {open ? (
                <X size={24} className="text-white" />
              ) : (
                <Menu size={24} className="text-white" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-4 pt-4 border-t border-blue-500/20 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </section>
  );
}
