import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Container from "./Container";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  // Close menu on route change
  useEffect(() => setOpen(false), [location.pathname]);

  // Close on outside click
  useEffect(() => {
    function onDocClick(e) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target)) setOpen(false);
    }
    if (open) document.addEventListener("pointerdown", onDocClick);
    return () => document.removeEventListener("pointerdown", onDocClick);
  }, [open]);

  const linkBase =
    "block px-3 py-2 rounded-lg transition hover:bg-black/5 md:hover:bg-white/10";
  const active =
    "font-semibold underline underline-offset-4";

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-indigo-500 to-cyan-400 text-white shadow-soft">
      <Container className="py-2 md:py-3 relative">
        <div className="flex items-center justify-between gap-2">
          <Link
            to="/"
            className="font-bold whitespace-nowrap truncate max-w-[65%] text-base sm:text-lg md:text-xl"
            title="Chitti & Sana Learn Sentiment"
          >
            <span className="md:hidden">🌞 Chitti &amp; Sana</span>
            <span className="hidden md:inline">🌞 Chitti &amp; Sana Learn Sentiment</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-4 text-sm md:text-base">
            {[
              ["Learn", "/learn"],
              ["Play", "/play"],
              ["Quiz", "/quiz"],
              ["About", "/about"],
            ].map(([label, to]) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? active : "opacity-90 hover:opacity-100"}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden" ref={menuRef}>
            <button
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-lg px-2.5 py-2
                         bg-white/15 hover:bg-white/25 active:bg-white/30 transition"
            >
              {/* hamburger icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 6h18M3 12h18M3 18h18" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Dropdown panel */}
            {open && (
              <div
                className="absolute right-2 top-full mt-2 w-44 rounded-xl bg-white text-gray-800 shadow-soft ring-1 ring-black/5 overflow-hidden"
              >
                {[
                  ["Learn", "/learn"],
                  ["Play", "/play"],
                  ["Quiz", "/quiz"],
                  ["About", "/about"],
                ].map(([label, to]) => (
                  <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm ${isActive ? "font-semibold bg-gray-100" : "hover:bg-gray-50"}`
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
}
