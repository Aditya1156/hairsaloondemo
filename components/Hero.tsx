"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { heroSlides, siteConfig } from "@/lib/data";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = heroSlides[current];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={current === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl"
          >
            <p className="font-[family-name:var(--font-script)] text-2xl text-gold md:text-3xl">
              {slide.subtitle}
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-playfair)] text-5xl font-bold leading-[1.1] text-white md:text-7xl lg:text-8xl">
              {slide.title.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </h1>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-gold/40 bg-transparent px-8 py-3.5 text-xs font-semibold uppercase tracking-[3px] text-white transition-all hover:bg-gold hover:text-dark"
              >
                Read More
              </Link>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center bg-gold px-8 py-3.5 text-xs font-semibold uppercase tracking-[3px] text-dark transition-all hover:bg-gold-light"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Indicators */}
      <div className="absolute right-8 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-4">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`flex h-10 w-10 items-center justify-center rounded-full border text-xs transition-all ${
              idx === current
                ? "border-gold text-gold"
                : "border-white/20 text-white/40 hover:border-white/50"
            }`}
          >
            {String(idx + 1).padStart(2, "0")}
          </button>
        ))}
      </div>
    </section>
  );
}
