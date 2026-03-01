"use client";

import Image from "next/image";
import AnimateIn from "./AnimateIn";

export default function VideoSection() {
  return (
    <section className="bg-dark py-24">
      <div className="mx-auto max-w-5xl px-6">
        <AnimateIn>
          <div className="group relative mx-auto aspect-video w-full overflow-hidden rounded-[2rem]">
            <Image
              src="https://images.unsplash.com/photo-1559599101-f09722fb4948?w=1200&q=80"
              alt="Video tour of salon"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 900px"
            />
            <div className="absolute inset-0 bg-dark/30" />
            {/* Play Button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <button className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/50 transition-all hover:border-gold hover:bg-gold/20">
                <svg className="ml-1 h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[4px] text-white">
                Video Tour
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
