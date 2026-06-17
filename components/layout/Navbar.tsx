"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
  { name: "Delivery", path: "/delivery" },
  { name: "Corporate", path: "/corporate" },
  { name: "Events", path: "/events" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation Bar */}
      <header className="water-nav-bg backdrop-blur-lg border-b border-sky-200/50 shadow-sm sticky top-0 z-50 transition-all duration-300 overflow-hidden">
        {/* Under-layers for water environment */}
        <div className="water-caustics" />
        <div className="water-bubbles" />

        {/* Nav Content Container */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          {/* Adjusted height and gaps for mobile */}
          <div className="flex justify-between items-center h-16 sm:h-20 gap-2 sm:gap-4">
            {/* Logo Container - Scaled down for mobile, prevented from shrinking */}
            <Link
              href="/"
              className="relative flex items-center h-8 sm:h-14 w-28 sm:w-44 shrink-0 transition-transform duration-300 active:scale-95 hover:scale-102 mix-blend-multiply"
            >
              <Image
                src="/images/madina-logo.png"
                alt="Purified Madina Water Logo"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-w-sm) 112px, 176px"
              />
            </Link>

            {/* Desktop Navigation Layout Container */}
            <nav className="hidden xl:flex items-center gap-x-1 bg-white/40 backdrop-blur-sm border border-white/40 px-3 py-1.5 rounded-2xl shadow-inner shadow-sky-900/5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="relative text-blue-950 hover:text-blue-600 px-3 py-1.5 rounded-xl text-sm font-extrabold tracking-wide transition-all duration-200 ease-out group"
                >
                  <span className="relative z-10 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                    {link.name}
                  </span>
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
                </Link>
              ))}
            </nav>

            {/* Action Area: Mobile Hamburger + Order Button */}
            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
              {/* Mobile Menu Toggle Button - Scaled down slightly */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="xl:hidden p-1.5 sm:p-2 text-blue-950 hover:bg-blue-100/50 rounded-xl transition-colors active:scale-95 shrink-0"
                aria-label="Open Navigation Menu"
                aria-expanded={isMobileMenuOpen}
              >
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>

              {/* Order Button - added whitespace-nowrap and mobile-specific padding/text size */}
              <Link
                href="/order"
                className="bg-linear-to-r from-red-600 to-rose-500 text-white px-3.5 py-1.5 sm:px-6 sm:py-2.5 rounded-full text-[13px] sm:text-sm font-bold tracking-wide shadow-md shadow-red-600/20 hover:shadow-xl hover:shadow-red-600/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 transform-gpu whitespace-nowrap shrink-0"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Takeover Overlay - Cleaned up and modernized */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-[100] transition-all duration-300 flex flex-col xl:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex justify-between items-center px-6 h-16 sm:h-20 border-b border-sky-100/50 mb-4 shadow-sm shadow-sky-100/20">
          <span className="text-blue-950 font-extrabold tracking-widest uppercase text-xs sm:text-sm">
            Menu
          </span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-1.5 sm:p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors active:scale-95"
            aria-label="Close Navigation Menu"
          >
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Refined mobile links - Removed heavy borders, added rounded hover states */}
        <nav className="flex flex-col px-6 gap-2 overflow-y-auto pb-20">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg sm:text-xl font-bold text-blue-900/80 hover:text-blue-600 hover:bg-blue-50/50 transition-all rounded-2xl px-4 py-3 active:scale-[0.98]"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
