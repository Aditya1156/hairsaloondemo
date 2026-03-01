"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/data";
import AnimateIn from "@/components/AnimateIn";

export default function ContactPageContent() {
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
    <>
      {/* Hero */}
      <section className="relative flex h-[50vh] items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1920&q=80"
          alt="Contact"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-dark/70" />
        <div className="relative z-10 text-center">
          <p className="font-[family-name:var(--font-script)] text-2xl text-gold">Get In Touch</p>
          <h1 className="mt-2 font-[family-name:var(--font-playfair)] text-5xl font-bold text-white md:text-6xl">
            CONTACT US
          </h1>
        </div>
      </section>

      <section className="bg-dark py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact Info */}
            <AnimateIn direction="left">
              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white md:text-4xl">
                  LET&apos;S CONNECT
                </h2>
                <p className="mt-4 text-neutral-400">
                  Have questions or ready to book your next appointment? We&apos;d love to hear from
                  you.
                </p>

                <div className="mt-10 space-y-6">
                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                        Address
                      </h4>
                      <p className="mt-1 text-sm text-neutral-400">{siteConfig.address}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                        Phone
                      </h4>
                      <a
                        href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                        className="mt-1 text-sm text-neutral-400 transition-colors hover:text-gold"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                        Email
                      </h4>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="mt-1 text-sm text-neutral-400 transition-colors hover:text-gold"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                        Opening Hours
                      </h4>
                      <div className="mt-1 space-y-1 text-sm text-neutral-400">
                        <p>Mon – Fri: {siteConfig.hours.weekdays}</p>
                        <p>Saturday: {siteConfig.hours.saturday}</p>
                        <p>Sunday: {siteConfig.hours.sunday}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center gap-3 bg-[#25D366] px-8 py-3.5 text-xs font-semibold uppercase tracking-[3px] text-white transition-all hover:bg-[#20BD5A]"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>

                {/* Map */}
                <div className="mt-10 aspect-video overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3097.6!2d-94.585!3d39.099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sus!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Salon location"
                    className="grayscale"
                  />
                </div>
              </div>
            </AnimateIn>

            {/* Form */}
            <AnimateIn direction="right" delay={0.2}>
              <div className="bg-dark-card p-8 md:p-12">
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white">
                  SEND US A MESSAGE
                </h3>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div>
                    <input
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      required
                      className="w-full border-b border-dark-border bg-transparent px-0 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors focus:border-gold"
                    />
                  </div>
                  <div>
                    <input
                      name="email"
                      type="email"
                      placeholder="Email"
                      required
                      className="w-full border-b border-dark-border bg-transparent px-0 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors focus:border-gold"
                    />
                  </div>
                  <div>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="Phone Number"
                      required
                      className="w-full border-b border-dark-border bg-transparent px-0 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors focus:border-gold"
                    />
                  </div>
                  <div>
                    <select
                      name="service"
                      required
                      className="w-full border-b border-dark-border bg-transparent px-0 py-3 text-sm text-neutral-500 outline-none transition-colors focus:border-gold"
                    >
                      <option value="">Service interested in</option>
                      <option value="haircut">Haircut</option>
                      <option value="coloring">Coloring</option>
                      <option value="styling">Styling</option>
                      <option value="balayage">Balayage</option>
                      <option value="extensions">Extensions</option>
                      <option value="bridal">Bridal Hair</option>
                      <option value="scalp-care">Scalp Care</option>
                      <option value="glossing">Glossing</option>
                    </select>
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder="Your message"
                      rows={4}
                      required
                      className="w-full border-b border-dark-border bg-transparent px-0 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors focus:border-gold"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-gold py-4 text-xs font-semibold uppercase tracking-[3px] text-dark transition-all hover:bg-gold-light disabled:opacity-50"
                  >
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </button>

                  {status === "success" && (
                    <p className="text-center text-sm text-green-400">
                      Message sent successfully! We&apos;ll get back to you soon.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-center text-sm text-red-400">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
