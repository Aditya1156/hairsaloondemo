"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/data";
import AnimateIn from "./AnimateIn";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          service: data.get("service"),
          message: data.get("message"),
        }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="bg-dark py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid overflow-hidden lg:grid-cols-2">
          {/* Image */}
          <AnimateIn direction="left">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full">
              <Image
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80"
                alt="Salon interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimateIn>

          {/* Form */}
          <AnimateIn direction="right" delay={0.2}>
            <div className="bg-dark-card p-8 md:p-12">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white md:text-4xl">
                SCHEDULE PROCEDURE
              </h2>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <input
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  required
                  className="w-full border-b border-dark-border bg-transparent px-0 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors focus:border-gold"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full border-b border-dark-border bg-transparent px-0 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors focus:border-gold"
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="w-full border-b border-dark-border bg-transparent px-0 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors focus:border-gold"
                />
                <select
                  name="service"
                  required
                  className="w-full border-b border-dark-border bg-transparent px-0 py-3 text-sm text-neutral-500 outline-none transition-colors focus:border-gold"
                >
                  <option value="">Procedure</option>
                  <option value="haircut">Haircut</option>
                  <option value="coloring">Coloring</option>
                  <option value="styling">Styling</option>
                  <option value="balayage">Balayage</option>
                  <option value="extensions">Extensions</option>
                  <option value="bridal">Bridal Hair</option>
                  <option value="scalp-care">Scalp Care</option>
                  <option value="glossing">Glossing</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Message (optional)"
                  rows={3}
                  className="w-full border-b border-dark-border bg-transparent px-0 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors focus:border-gold"
                />

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-gold py-4 text-xs font-semibold uppercase tracking-[3px] text-dark transition-all hover:bg-gold-light disabled:opacity-50"
                >
                  {status === "loading" ? "Sending..." : "Make an Appointment"}
                </button>

                {status === "success" && (
                  <p className="text-center text-sm text-green-400">
                    Thank you! We&apos;ll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-center text-sm text-red-400">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>

              <div className="mt-6 text-center">
                <p className="text-xs uppercase tracking-wider text-neutral-500">
                  Make an appointment by phone:
                </p>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="mt-1 inline-flex items-center gap-2 text-sm text-white transition-colors hover:text-gold"
                >
                  <svg className="h-4 w-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
