"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimateIn from "./AnimateIn";

export default function MastersCircle() {
  return (
    <section className="relative overflow-hidden bg-dark-lighter py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-center">
          {/* Left Image */}
          <div className="absolute left-0 hidden h-48 w-48 overflow-hidden rounded-full lg:block">
            <Image
              src="https://images.unsplash.com/photo-1559599101-f09722fb4948?w=400&q=80"
              alt="Salon"
              fill
              className="object-cover"
              sizes="200px"
            />
          </div>

          {/* Center Circle */}
          <AnimateIn>
            <div className="relative flex h-72 w-72 items-center justify-center md:h-96 md:w-96 lg:h-[500px] lg:w-[500px]">
              {/* Rotating Text */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <svg viewBox="0 0 500 500" className="h-full w-full">
                  <defs>
                    <path
                      id="circlePath"
                      d="M250,250 m-200,0 a200,200 0 1,1 400,0 a200,200 0 1,1 -400,0"
                    />
                  </defs>
                  <text className="fill-white text-[22px] font-bold uppercase tracking-[8px]">
                    <textPath href="#circlePath">
                      HAIRSTYLE MASTERS &bull; HAIRSTYLE MASTERS &bull;{" "}
                    </textPath>
                  </text>
                </svg>
              </motion.div>

              {/* Center Content */}
              <div className="relative h-48 w-48 overflow-hidden rounded-full md:h-64 md:w-64 lg:h-80 lg:w-80">
                <Image
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80"
                  alt="Hairstyle"
                  fill
                  className="object-cover"
                  sizes="300px"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-dark/20">
                  <svg className="h-16 w-16 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                  </svg>
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Right Image */}
          <div className="absolute right-0 hidden h-48 w-48 overflow-hidden rounded-full lg:block">
            <Image
              src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&q=80"
              alt="Styling"
              fill
              className="object-cover"
              sizes="200px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
