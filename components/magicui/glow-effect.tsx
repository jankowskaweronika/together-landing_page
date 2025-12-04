"use client";

import { useRef } from 'react';
import { useInView } from 'framer-motion';

const YourComponent = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className={`relative rounded-xl bg-black before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,#fbbf24,#f59e0b,transparent_40%)] ${inView ? "before:animate-image-glow" : ""
        }`}
    >
      <div className="relative z-10">
      </div>
    </div>
  );
};