"use client";

import { BorderBeam } from "@/components/magicui/frame-animation";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ShimmerCardProps {
  children: React.ReactNode;
  className?: string;
}

const ShimmerCard = ({ children, className = "" }: ShimmerCardProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={`relative ${className}`}>
      <div
        className={`rounded-xl border border-border bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] ${inView ? "before:animate-image-glow" : ""
          }`}
      >
        <BorderBeam
          size={200}
          duration={12}
          delay={11}
          colorFrom="var(--color-one)"
          colorTo="var(--color-two)"
        />

        <div className="relative bg-black/5 backdrop-blur-sm p-6 rounded-[inherit] w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;