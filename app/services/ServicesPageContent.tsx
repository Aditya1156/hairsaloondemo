"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/data";
import AnimateIn from "@/components/AnimateIn";

export default function ServicesPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[50vh] items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1559599101-f09722fb4948?w=1920&q=80"
          alt="Services"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-dark/70" />
        <div className="relative z-10 text-center">
          <p className="font-[family-name:var(--font-script)] text-2xl text-gold">Our Services</p>
          <h1 className="mt-2 font-[family-name:var(--font-playfair)] text-5xl font-bold text-white md:text-6xl">
            WHAT WE OFFER
          </h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <AnimateIn key={service.name} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group overflow-hidden border border-dark-border bg-dark-card"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60" />
                    <div className="absolute bottom-4 left-4">
                      <span className="rounded-sm bg-gold/20 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-gold">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white">
                        {service.name}
                      </h3>
                      <div>
                        <span className="text-xs align-top text-gold">$</span>
                        <span className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-gold">
                          {service.price}
                        </span>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.3}>
            <div className="mt-16 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold px-10 py-4 text-xs font-semibold uppercase tracking-[3px] text-dark transition-all hover:bg-gold-light"
              >
                Book Your Appointment
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
