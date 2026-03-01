"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { teamMembers } from "@/lib/data";
import AnimateIn from "./AnimateIn";

export default function TeamSection() {
  return (
    <section className="bg-dark py-24">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateIn>
          <div className="max-w-2xl">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold leading-tight text-white md:text-4xl">
              UNDERSTANDING YOUR GOALS, ENSURING TREATMENTS{" "}
              <span className="font-[family-name:var(--font-cormorant)] italic text-gold">ARE</span>
              <br />
              TAILORED TO YOUR UNIQUE BEAUTY NEEDS
            </h2>
          </div>
        </AnimateIn>

        {/* Navigation Arrows */}
        <AnimateIn delay={0.1}>
          <div className="mt-8 flex justify-end gap-4">
            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-dark-border text-white transition-all hover:border-gold hover:text-gold">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-gold text-gold transition-all hover:bg-gold hover:text-dark">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </AnimateIn>

        {/* Team Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, i) => (
            <AnimateIn key={member.name} delay={i * 0.1}>
              <motion.div whileHover={{ y: -8 }} className="group">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <h3 className="font-[family-name:var(--font-playfair)] text-sm font-bold uppercase tracking-wider text-white">
                    {member.name}
                  </h3>
                  <span className="rounded-sm bg-gold/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold">
                    {member.level}
                  </span>
                  <span className="ml-auto flex items-center gap-1 text-sm text-neutral-400">
                    <svg className="h-3.5 w-3.5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    {member.rating}
                  </span>
                </div>
                <p className="mt-1 text-xs text-neutral-500">{member.role}</p>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
