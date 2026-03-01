"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/data";
import AnimateIn from "./AnimateIn";

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const perPage = 2;
  const totalPages = Math.ceil(testimonials.length / perPage);
  const visible = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="bg-dark-lighter py-24">
      <div className="mx-auto max-w-5xl px-6">
        <AnimateIn>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[4px] text-gold">
              Testimonials
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-bold text-white md:text-4xl">
              WHAT OUR CUSTOMERS SAY
            </h2>
          </div>
        </AnimateIn>

        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-12 grid gap-6 md:grid-cols-2"
          >
            {visible.map((t) => (
              <div
                key={t.name}
                className="rounded-sm border border-dark-border bg-dark-card p-8"
              >
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-[family-name:var(--font-playfair)] text-sm font-bold uppercase text-white">
                        {t.name}
                      </h4>
                      <p className="text-xs text-neutral-500">{t.role}</p>
                    </div>
                  </div>
                  <span className="font-[family-name:var(--font-playfair)] text-5xl leading-none text-gold/20">
                    &ldquo;&rdquo;
                  </span>
                </div>

                {/* Text */}
                <p className="mt-6 font-[family-name:var(--font-cormorant)] text-lg italic leading-relaxed text-neutral-400">
                  {t.text}
                </p>

                {/* Rating */}
                <div className="mt-6">
                  <p className="text-[10px] uppercase tracking-wider text-neutral-600">
                    Customer&apos;s rate
                  </p>
                  <div className="mt-1 flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <svg key={i} className="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-3">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`h-2 w-2 rounded-full transition-all ${
                i === page ? "bg-gold w-6" : "bg-neutral-600 hover:bg-neutral-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
