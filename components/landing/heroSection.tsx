"use client";

import { useTranslations } from 'next-intl';
import { BorderBeam } from "@/components/magicui/frame-animation";
import { PulsatingButton } from '@/components/magicui/pulsating-button';
import { useState, useEffect } from "react";

const HeroSection = () => {
  const t = useTranslations('HeroSection');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerOffset = 100;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id='hero'
      className="relative mx-auto mt-10 max-w-[80rem] px-6 text-center md:px-8"
    >
      <h1
        className={`pb-10 bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        style={{ transitionDelay: '200ms' }}
      >
        <br className="hidden md:block" /> {t('title')}
      </h1>

      <p
        className={`mb-12 text-lg tracking-tight text-gray-400 md:text-xl text-balance transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        style={{ transitionDelay: '400ms' }}
      >
        {t('description1')}
        <br className="hidden md:block" /> {t('description2')}
      </p>

      <div
        className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        style={{ transitionDelay: '600ms' }}
      >
        <PulsatingButton
          onClick={scrollToContact}
          className="mx-auto text-white px-8 py-3 rounded-full"
          pulseColor="#71717b"
          duration="1.5s"
          style={{
            background: 'linear-gradient(to right, rgb(2, 6, 23), rgb(55, 65, 81))'
          }}
        >
          <span className="text-sm font-medium lg:text-lg">
            {t('ctaButton')}
          </span>
        </PulsatingButton>
      </div>

      <div className="relative mt-[8rem] rounded-xl bg-black before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,#fbbf24,#f59e0b,transparent_40%)] before:animate-image-glow">
        <div
          className={`relative z-10 [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,var(--background)_30%,transparent)] transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="rounded-xl border border-border bg-black bg-opacity-[0.01]">
            <BorderBeam
              size={200}
              duration={12}
              delay={11}
              colorFrom="var(--color-one)"
              colorTo="var(--color-two)"
            />

            <img
              src="/hero-dark.png"
              alt={t('imageAlt')}
              className="hidden relative w-full h-full rounded-[inherit] border object-contain dark:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;