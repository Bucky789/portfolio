"use client";

import { useState } from "react";
import Link from "next/link";

const Logo = () => (
  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-sm font-bold text-white bg-black/40">
    MS
  </div>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
      <div
        className="relative flex items-center gap-6 rounded-full border border-white/20 bg-[#00ADB5]/25 px-4 py-2 backdrop-blur-xl shadow-lg text-white"
      >
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-base font-medium">
          {["Projects", "Skills", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-white/80 transition-colors hover:text-white after:absolute after:-bottom-1 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-white after:transition-all after:duration-300 hover:after:w-5"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Resume Button (desktop) */}
        <a
          href="/ResumeMain.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase text-black transition-all hover:bg-white/90"
        >
          Resume
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white bg-black/40"
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full mt-2">
            <div
              className="rounded-2xl border border-white/20 bg-[#00ADB5] shadow-lg px-4 py-4 flex flex-col gap-3 text-base font-medium text-white"
            >
              {["Projects", "Skills", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-white hover:text-white/90 transition-colors"
                >
                  {item}
                </Link>
              ))}

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase text-black text-center transition-all hover:bg-white/90"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
