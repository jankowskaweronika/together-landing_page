"use client";

import { BorderBeam } from "@/components/magicui/frame-animation";
import { useInView } from "framer-motion";
import { useRef } from "react";

import { ShimmerButton } from "../magicui/shimmer-button";

export default function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="hero"
      className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8"
    >
      <h1 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <br className="hidden md:block" /> Wspólna droga do wiedzy
      </h1>
      <p className="mb-12 text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        Platforma kursowa, która łączy wiedzę ze społecznością.
        <br className="hidden md:block" /> Twórz, ucz się i rozwijaj razem z innymi.
      </p>
      <ShimmerButton className="shadow-2xl">
        <span className="text-center text-sm leading-none font-medium tracking-tight whitespace-pre-wrap text-white lg:text-lg">
          Wypróbuj za darmo
        </span>
      </ShimmerButton>

      {/* Glow Wrapper - poświata za obrazem */}
      <div
        ref={ref}
        className={`relative mt-[8rem] rounded-xl bg-black before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,#fbbf24,#f59e0b,transparent_40%)] ${inView ? "before:animate-image-glow" : ""
          }`}
      >
        {/* Content - obraz z animacjami NAD poświatą */}
        <div className="relative z-10 animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,var(--background)_30%,transparent)]">
          <div className="rounded-xl border border-border bg-white bg-opacity-[0.01]">
            <BorderBeam
              size={200}
              duration={12}
              delay={11}
              colorFrom="var(--color-one)"
              colorTo="var(--color-two)"
            />

            <img
              src="/hero-dark.png"
              alt="Hero Image"
              className="hidden relative w-full h-full rounded-[inherit] border object-contain dark:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}