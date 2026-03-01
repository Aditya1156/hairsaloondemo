"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, siteConfig } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-dark/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex flex-col items-center border-2 border-gold px-2.5 py-1">
              <span className="font-[family-name:var(--font-playfair)] text-2xl font-bold leading-none text-white">
                H
              </span>
              <span className="text-[6px] uppercase tracking-[3px] text-gold">HAIR</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium uppercase tracking-widest transition-colors hover:text-gold ${
                  pathname === link.href ? "text-gold" : "text-white"
                }`}
              >
                {link.label}
                {link.href !== "/" && <span className="ml-1 text-[10px] text-gold/60">+</span>}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden items-center gap-6 md:flex">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-sm text-white transition-colors hover:text-gold"
            >
              <svg className="h-4 w-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className="border border-gold bg-transparent px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-gold transition-all hover:bg-gold hover:text-dark"
            >
              An Appointment
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-white"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-6 bg-white"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-white"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-dark/98 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg font-medium uppercase tracking-widest transition-colors hover:text-gold ${
                    pathname === link.href ? "text-gold" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="mt-4 text-sm text-gold"
              >
                {siteConfig.phone}
              </a>
              <Link
                href="/contact"
                className="mt-2 border border-gold px-6 py-3 text-center text-xs font-semibold uppercase tracking-widest text-gold transition-all hover:bg-gold hover:text-dark"
              >
                An Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
