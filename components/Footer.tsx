import Link from "next/link";
import { siteConfig, navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-dark-border bg-dark">
      {/* Brand Logos Bar */}
      <div className="border-b border-dark-border py-10">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-12 px-6 opacity-40">
          {["rosé", "NF", "A", "Natural", "AW", "M"].map((brand) => (
            <span
              key={brand}
              className="font-[family-name:var(--font-cormorant)] text-xl font-light tracking-wider text-white md:text-2xl"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Logo + Tagline */}
          <div className="md:col-span-1">
            <Link href="/" className="mb-4 inline-flex items-center gap-2">
              <div className="flex flex-col items-center border-2 border-gold px-2.5 py-1">
                <span className="font-[family-name:var(--font-playfair)] text-2xl font-bold leading-none text-white">
                  H
                </span>
                <span className="text-[6px] uppercase tracking-[3px] text-gold">HAIR</span>
              </div>
            </Link>
            <h3 className="mt-6 font-[family-name:var(--font-playfair)] text-2xl font-bold leading-tight text-white">
              AESTHETIC HARMONY
            </h3>
            <p className="font-[family-name:var(--font-cormorant)] text-xl italic text-gold">
              OF YOUR HAIR
            </p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              Our team of experts creates modern stylish looks while focusing on the health and long
              term beauty of your hair.
            </p>
          </div>

          {/* Spacer */}
          <div className="hidden md:block" />

          {/* Explore */}
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-widest text-gold">
              Explore
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-gold"
                  >
                    {link.label} +
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-widest text-gold">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Central Office:
                </p>
                <p className="text-sm text-neutral-300">{siteConfig.address}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Phone:
                </p>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="text-sm text-neutral-300 transition-colors hover:text-gold"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Email:
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-neutral-300 transition-colors hover:text-gold"
                >
                  {siteConfig.email}
                </a>
              </div>
              {/* Social Icons */}
              <div className="flex gap-4 pt-2">
                {[
                  { href: siteConfig.social.facebook, label: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                  { href: siteConfig.social.youtube, label: "YouTube", path: "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" },
                  { href: siteConfig.social.instagram, label: "Instagram", path: "M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm-4 11a3 3 0 110-6 3 3 0 010 6zm4.5-7.5a1 1 0 110-2 1 1 0 010 2z" },
                  { href: siteConfig.social.tiktok, label: "TikTok", path: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm3 7h-1.5a1.5 1.5 0 00-1.5 1.5V17h-2v-6.5A3.5 3.5 0 0113.5 7H15z" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 transition-colors hover:text-gold"
                    aria-label={social.label}
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-dark-border py-6 text-center text-xs text-neutral-500">
        &copy; {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
      </div>
    </footer>
  );
}
