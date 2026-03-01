"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { teamMembers } from "@/lib/data";
import AnimateIn from "@/components/AnimateIn";

export default function AboutPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[50vh] items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1920&q=80"
          alt="About us"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-dark/70" />
        <div className="relative z-10 text-center">
          <p className="font-[family-name:var(--font-script)] text-2xl text-gold">Our Story</p>
          <h1 className="mt-2 font-[family-name:var(--font-playfair)] text-5xl font-bold text-white md:text-6xl">
            ABOUT US
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <AnimateIn direction="left">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1559599101-f09722fb4948?w=800&q=80"
                  alt="Our salon"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimateIn>

            <AnimateIn direction="right" delay={0.2}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[4px] text-gold">
                  Since 2015
                </p>
                <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-bold text-white md:text-4xl">
                  WHERE ARTISTRY MEETS HAIR CARE
                </h2>
                <div className="mt-8 space-y-4 text-neutral-400">
                  <p>
                    Founded with a vision to redefine the salon experience, Luxe Hair Studio has
                    grown from a small boutique salon to one of the city&apos;s most sought-after
                    hair destinations.
                  </p>
                  <p>
                    Our philosophy is simple: every client deserves to feel like a celebrity. We
                    combine cutting-edge techniques with timeless artistry to create looks that are
                    uniquely you.
                  </p>
                  <p>
                    Our team of certified professionals undergoes continuous training with
                    international brands to stay at the forefront of hair fashion and technology.
                  </p>
                </div>
                <div className="mt-10 grid grid-cols-3 gap-8">
                  {[
                    { number: "10+", label: "Years Experience" },
                    { number: "5K+", label: "Happy Clients" },
                    { number: "15+", label: "Expert Stylists" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-gold">
                        {stat.number}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-wider text-neutral-500">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-dark-lighter py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[4px] text-gold">
                The Experts
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-bold text-white md:text-4xl">
                MEET OUR TEAM
              </h2>
            </div>
          </AnimateIn>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
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
    </>
  );
}
