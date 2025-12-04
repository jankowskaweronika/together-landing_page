import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-600/20 via-transparent to-transparent"></div>

      {/* Animated background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        {/* Main card with animated border */}
        <div className="relative inline-flex w-full overflow-hidden rounded-3xl p-[2px]">
          {/* Animated border gradient */}
          <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

          {/* Card content */}
          <div className="relative w-full bg-gray-900/90 backdrop-blur-xl rounded-3xl p-8 md:p-16 text-center">
            {/* Sparkle icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Gotowy, żeby zacząć?
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Dołącz do Together i zacznij budować swoją społeczność uczenia się już dziś
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Primary CTA - Shimmer Button */}
              <button className="relative inline-flex overflow-hidden rounded-full p-[1px] group">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 px-8 py-4 text-base font-semibold text-white backdrop-blur-3xl transition-all duration-300 hover:scale-105">
                  Rozpocznij za darmo
                  <ArrowRight className="w-5 h-5" />
                </span>
              </button>

              {/* Secondary CTA */}
              <button className="relative inline-flex overflow-hidden rounded-full p-[1px] group">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative inline-flex items-center justify-center rounded-full bg-gray-800/80 backdrop-blur-3xl px-8 py-4 text-base font-medium text-white border border-gray-700/50 transition-all duration-300 hover:scale-105 hover:border-transparent">
                  Skontaktuj się z nami
                </span>
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 pt-8 border-t border-gray-800/50">
              <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Bez karty kredytowej</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Start w 5 minut</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Anuluj w każdej chwili</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;