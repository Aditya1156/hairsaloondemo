"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const instaImages = [
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&q=80",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80",
  "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=400&q=80",
  "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&q=80",
  "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&q=80",
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=80",
];

export default function InstagramSection() {
  return (
    <section className="bg-dark py-24">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateIn>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[4px] text-gold">
              @luxehairstudio
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-bold text-white md:text-4xl">
              FOLLOW US ON INSTAGRAM
            </h2>
          </div>
        </AnimateIn>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {instaImages.map((src, i) => (
            <AnimateIn key={i} delay={i * 0.05}>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="group relative aspect-square overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`Instagram post ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gold/0 transition-all group-hover:bg-gold/30">
                  <svg className="h-6 w-6 text-white opacity-0 transition-opacity group-hover:opacity-100" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm-4 11a3 3 0 110-6 3 3 0 010 6zm4.5-7.5a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </div>
              </motion.a>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
