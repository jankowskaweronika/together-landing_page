'use client';

import { useTranslations } from 'next-intl';
import { BorderBeam } from "@/components/ui/frame-animation";
import { Users, Target, TrendingUp, BookOpen, MessageCircle, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

const FeaturesSection = () => {
  const t = useTranslations('FeaturesSection');
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

    const section = document.getElementById('features');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Users,
      title: t('collaborative.title'),
      description: t('collaborative.description'),
      delay: '200ms'
    },
    {
      icon: Target,
      title: t('interactive.title'),
      description: t('interactive.description'),
      delay: '400ms'
    },
    {
      icon: TrendingUp,
      title: t('progress.title'),
      description: t('progress.description'),
      delay: '600ms'
    },
    {
      icon: BookOpen,
      title: t('courses.title'),
      description: t('courses.description'),
      delay: '800ms'
    },
    {
      icon: MessageCircle,
      title: t('community.title'),
      description: t('community.description'),
      delay: '1000ms'
    },
    {
      icon: Award,
      title: t('certificates.title'),
      description: t('certificates.description'),
      delay: '1200ms'
    }
  ];

  return (
    <section id='features' className="relative mx-auto mt-32 max-w-[80rem] px-6 md:px-8">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`group relative rounded-xl p-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{
              transitionDelay: isVisible ? feature.delay : '0ms',
              background: 'linear-gradient(to right, rgba(2, 6, 23, 0.6), rgba(55, 65, 81, 0.4))'
            }}
          >
            <BorderBeam
              size={200}
              duration={15}
              delay={index * 2}
              colorFrom="var(--color-one)"
              colorTo="var(--color-two)"
              borderWidth={1}
            />

            <div className="relative z-10">
              <div className="mb-4 inline-flex p-3 rounded-lg bg-gradient-to-br from-orange-500/20 to-purple-500/20">
                <feature.icon className="w-6 h-6 text-orange-400" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>

            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at center, rgba(255, 170, 64, 0.1), transparent 70%)'
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;