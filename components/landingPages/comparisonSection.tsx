'use client';

import { useTranslations } from 'next-intl';
import { BorderBeam } from "@/components/ui/frame-animation";
import { Check, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const ComparisonSection = () => {
  const t = useTranslations('ComparisonSection');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('comparison');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const comparisons = [
    { feature: t('feature1'), together: true, traditional: false },
    { feature: t('feature2'), together: true, traditional: false },
    { feature: t('feature3'), together: true, traditional: true },
    { feature: t('feature4'), together: true, traditional: false },
    { feature: t('feature5'), together: true, traditional: true },
    { feature: t('feature6'), together: true, traditional: false },
  ];

  return (
    <section id='comparison' className="relative mx-auto mt-32 max-w-[80rem] px-6 md:px-8">
      <div className="text-center mb-16">
        <h2
          className={`text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text text-transparent mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
        >
          {t('title')}
        </h2>
        <p
          className={`text-lg md:text-xl text-gray-400 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          style={{ transitionDelay: '200ms' }}
        >
          {t('subtitle')}
        </p>
      </div>

      <div
        className={`relative rounded-xl overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        style={{
          transitionDelay: '400ms',
          background: 'linear-gradient(to right, rgba(2, 6, 23, 0.6), rgba(55, 65, 81, 0.4))'
        }}
      >
        <BorderBeam
          size={300}
          duration={20}
          delay={5}
          colorFrom="var(--color-one)"
          colorTo="var(--color-three)"
          borderWidth={2}
        />

        <div className="relative z-10 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-6 text-gray-400 font-medium">{t('features')}</th>
                <th className="p-6 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-purple-500/20">
                    <span className="text-lg font-semibold text-white">Together</span>
                  </div>
                </th>
                <th className="p-6 text-center text-gray-400 font-medium">{t('traditional')}</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((item, index) => (
                <tr
                  key={index}
                  className={`border-b border-white/5 transition-colors hover:bg-white/5 ${isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                  style={{
                    transitionDelay: isVisible ? `${600 + index * 100}ms` : '0ms'
                  }}
                >
                  <td className="p-6 text-gray-300">{item.feature}</td>
                  <td className="p-6 text-center">
                    {item.together ? (
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20">
                        <Check className="w-5 h-5 text-green-400" />
                      </div>
                    ) : (
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-500/20">
                        <X className="w-5 h-5 text-red-400" />
                      </div>
                    )}
                  </td>
                  <td className="p-6 text-center">
                    {item.traditional ? (
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20">
                        <Check className="w-5 h-5 text-green-400" />
                      </div>
                    ) : (
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-500/20">
                        <X className="w-5 h-5 text-red-400" />
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div
        className={`mt-8 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        style={{ transitionDelay: '1400ms' }}
      >
        <p className="text-gray-400 text-lg">
          {t('highlight')}
        </p>
      </div>
    </section>
  );
};

export default ComparisonSection;