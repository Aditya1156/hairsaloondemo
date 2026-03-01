"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { services } from "@/lib/data";
import AnimateIn from "./AnimateIn";

const tiers = ["Hairdresser", "Master", "Senior"] as const;
const tierMultiplier = { Hairdresser: 1, Master: 1.5, Senior: 2 };

export default function ServicesSection() {
  const [activeTier, setActiveTier] = useState<(typeof tiers)[number]>("Hairdresser");

  return (
    <section className="bg-dark-lighter py-24">
      <div className="mx-auto max-w-5xl px-6">
        <AnimateIn>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[4px] text-gold">Our Prices</p>
            <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              DISCOVER HAIRSTYLE PROCEDURES
            </h2>
          </div>
        </AnimateIn>

        {/* Tier Tabs */}
        <AnimateIn delay={0.1}>
          <div className="mt-10 flex justify-center">
            <div className="inline-flex rounded-full border border-dark-border">
              {tiers.map((tier) => (
                <button
                  key={tier}
                  onClick={() => setActiveTier(tier)}
                  className={`relative px-6 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all ${
                    activeTier === tier ? "text-dark" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {activeTier === tier && (
                    <motion.div
                      layoutId="tierBg"
                      className="absolute inset-0 rounded-full bg-gold"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{tier}</span>
                </button>
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* Price Grid */}
        <div className="mt-12 grid gap-x-16 gap-y-8 md:grid-cols-2">
          {services.map((service, i) => {
            const price = Math.round(service.price * tierMultiplier[activeTier]);
            return (
              <AnimateIn key={service.name} delay={i * 0.05}>
                <div className="group flex items-center justify-between border-b border-dark-border pb-4">
                  <div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold uppercase text-white transition-colors group-hover:text-gold">
                      {service.name}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-500">{service.description}</p>
                  </div>
                  <div className="ml-4 shrink-0">
                    <span className="text-xs align-top text-gold">$</span>
                    <span className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-gold">
                      {price}
                    </span>
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
