"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { galleryImages } from "@/lib/data";
import AnimateIn from "./AnimateIn";

export default function GalleryPreview() {
  const previewImages = galleryImages.slice(0, 6);

  return (
    <section className="bg-dark py-24">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateIn>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[4px] text-gold">
              Unique Beauty Needs
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              TRANSFORM YOUR STYLE WITH PROFESSIONAL HAIR
              <br className="hidden md:block" /> SERVICES THAT HIGHLIGHT YOUR NATURAL BEAUTY WHILE
              <br className="hidden md:block" /> KEEPING YOUR HAIR STRONG HEALTHY
            </h2>
          </div>
        </AnimateIn>

        {/* Gallery Grid */}
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {previewImages.map((img, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group relative aspect-[3/4] overflow-hidden"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <p className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-widest text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {img.category}
                </p>
              </motion.div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 border border-gold/40 px-8 py-3.5 text-xs font-semibold uppercase tracking-[3px] text-gold transition-all hover:bg-gold hover:text-dark"
            >
              View Full Gallery
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
