"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { galleryImages } from "@/lib/data";
import AnimateIn from "@/components/AnimateIn";

const categories = ["All", "Haircut", "Coloring", "Styling", "Bridal"];

export default function GalleryPageContent() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[50vh] items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1920&q=80"
          alt="Gallery"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-dark/70" />
        <div className="relative z-10 text-center">
          <p className="font-[family-name:var(--font-script)] text-2xl text-gold">Portfolio</p>
          <h1 className="mt-2 font-[family-name:var(--font-playfair)] text-5xl font-bold text-white md:text-6xl">
            OUR GALLERY
          </h1>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="mb-12 flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all ${
                    filter === cat
                      ? "bg-gold text-dark"
                      : "border border-dark-border text-neutral-400 hover:border-gold hover:text-gold"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimateIn>

          {/* Masonry Grid */}
          <motion.div layout className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            <AnimatePresence>
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="mb-4 break-inside-avoid"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="group relative cursor-pointer overflow-hidden"
                    onClick={() => setLightbox(i)}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={800}
                      height={i % 3 === 0 ? 1000 : i % 3 === 1 ? 800 : 600}
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-dark/70 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                      <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                        {img.category}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-dark/95 p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-h-[90vh] max-w-4xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightbox].src}
                alt={filtered[lightbox].alt}
                width={1200}
                height={800}
                className="max-h-[85vh] w-auto object-contain"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-dark/80 text-white hover:bg-gold hover:text-dark"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {/* Nav */}
              <div className="absolute inset-y-0 left-0 flex items-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightbox((lightbox - 1 + filtered.length) % filtered.length);
                  }}
                  className="ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-dark/80 text-white hover:bg-gold hover:text-dark"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightbox((lightbox + 1) % filtered.length);
                  }}
                  className="mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-dark/80 text-white hover:bg-gold hover:text-dark"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
