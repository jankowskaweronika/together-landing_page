"use client";

import React from 'react';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import {
  BookOpen,
  Users,
  FileText,
  Video,
  Lock,
  BarChart3
} from 'lucide-react';

const FeaturesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: BookOpen,
      title: 'Struktura kursów',
      description: 'Organizuj wiedzę w rozdziały i lekcje. Twórz logiczną ścieżkę edukacyjną dla swoich uczniów.'
    },
    {
      icon: Users,
      title: 'Społeczność',
      description: 'Komentarze, dyskusje i fora. Uczestnicy mogą wymieniać się doświadczeniami i wspierać nawzajem.'
    },
    {
      icon: FileText,
      title: 'Notatki i postępy',
      description: 'Prywatne notatki do każdej lekcji i automatyczne śledzenie postępów. Nigdy nie zgub swojej wiedzy.'
    },
    {
      icon: Video,
      title: 'Hosting wideo',
      description: 'Zintegrowany hosting wideo z Vimeo. Profesjonalna jakość odtwarzania bez problemów technicznych.'
    },
    {
      icon: Lock,
      title: 'Bezpieczne płatności',
      description: 'Przyjmuj płatności za kursy bezpiecznie i wygodnie. Zarządzaj dostępami automatycznie.'
    },
    {
      icon: BarChart3,
      title: 'Analityka',
      description: 'Zobacz jak Twoi uczniowie radzą sobie z kursem. Dowiedz się, co wymaga poprawy.'
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-4xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            Wszystko czego potrzebujesz w jednym miejscu
          </h2>
        </div>

        {/* Features Grid with background glow */}
        <div
          ref={ref}
          className={`relative rounded-xl bg-black before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,#fcd003,#fcd003,transparent_40%)] ${inView ? "before:animate-image-glow" : ""
            }`}
        >
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 p-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative inline-flex overflow-hidden rounded-2xl p-[1px] transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Animated border gradient - appears on hover */}
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Card content */}
                  <div className="relative w-full p-6 md:p-8 bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-800/50 group-hover:border-transparent transition-all duration-300">
                    {/* Icon Container */}
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;