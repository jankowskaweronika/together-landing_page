import React from 'react';
import {
  BookOpen,
  Users,
  FileText,
  Video,
  Lock,
  BarChart3
} from 'lucide-react';

const FeaturesSection = () => {
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
    <section id="funkcje" className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Wszystko czego potrzebujesz w jednym miejscu
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Kompleksowa platforma do tworzenia i sprzedaży kursów online
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 md:p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2"
              >
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;