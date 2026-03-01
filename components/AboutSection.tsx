"use client";

import Image from "next/image";
import AnimateIn from "./AnimateIn";

export default function AboutSection() {
  return (
    <section className="bg-dark py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Images */}
          <AnimateIn direction="left">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
                  alt="Hair styling"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </AnimateIn>

          {/* Text */}
          <AnimateIn direction="right" delay={0.2}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[4px] text-gold">
                About Hair Salon
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                FIND THE PERFECT BALANCE BETWEEN ELEGANCE AND COMFORT WITH HAIRSTYLES
              </h2>
              <p className="mt-6 leading-relaxed text-neutral-400">
                Our stylists use modern techniques and trusted products to create hairstyles that
                remain stylish and practical. We focus on both style and hair health ensuring beauty
                that lasts beyond the salon visit.
              </p>
              <div className="mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1559599101-f09722fb4948?w=800&q=80"
                  alt="Salon tools"
                  width={500}
                  height={300}
                  className="object-cover"
                />
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
