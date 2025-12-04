import React from 'react';
import { BookOpen, UserPlus, Users } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      icon: BookOpen,
      title: 'Stwórz kurs',
      description: 'Zaloguj się, przejdź do panelu administracyjnego i stwórz swój pierwszy kurs. Dodaj rozdziały, lekcje i materiały wideo.'
    },
    {
      number: 2,
      icon: UserPlus,
      title: 'Zaproś uczniów',
      description: 'Udostępnij link do kursu lub opublikuj go publicznie. Ustaw cenę lub zrób go darmowym - to Ty decydujesz.'
    },
    {
      number: 3,
      icon: Users,
      title: 'Buduj społeczność',
      description: 'Odpowiadaj na komentarze, prowadź dyskusje i obserwuj postępy uczniów. Twórz wartość przez zaangażowanie.'
    }
  ];

  return (
    <section id="jak-dziala" className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <br className="hidden md:block" /> Jak to działa?
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connection Lines - hidden on mobile */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-[2px]">
            <div className="relative w-full h-full mx-auto px-32">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
            </div>
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Animated Step Number Container */}
                <div className="relative inline-flex overflow-hidden rounded-full p-[2px] mb-6  duration-300">
                  {/* Animated border gradient */}
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Step Number Circle */}
                  <div className="relative w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center backdrop-blur-xl">
                    <span className="text-3xl font-bold text-white">{step.number}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-indigo-300 transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed max-w-sm">
                  {step.description}
                </p>

                {/* Decorative gradient on hover */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-500/0 via-indigo-500/5 to-purple-600/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Wszystko gotowe w mniej niż 10 minut
          </p>
          <button className="relative inline-flex overflow-hidden rounded-full p-[1px] group">
            {/* Animated border gradient */}
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

            {/* Button */}
            <span className="relative inline-flex items-center justify-center rounded-full bg-gray-900 px-8 py-3 text-sm font-medium text-white backdrop-blur-3xl transition-all duration-300 hover:scale-105">
              Zacznij teraz za darmo
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;