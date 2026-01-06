'use client'

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { useRouter, usePathname } from '@/i18n/routing';
import { useLocale } from 'next-intl';

const SiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languages = [
    { code: 'pl', label: 'Polski', flag: '🇵🇱' },
    { code: 'en', label: 'English', flag: '🇬🇧' }
  ] as const;

  const handleLanguageChange = (newLocale: 'pl' | 'en') => {
    setIsOpen(false);

    // Użyj router.replace z parametrem locale
    router.replace(
      // @ts-ignore
      pathname,
      { locale: newLocale }
    );
  };

  const currentLanguage = languages.find(lang => lang.code === currentLocale);

  return (
    <div className="container mx-auto flex h-[var(--navigation-height)] w-full items-center justify-between px-4">
      <img
        src="/logo.png"
        alt="together-course-logo"
        width={250}
        height={300}
      />

      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 p-2 px-4 rounded-lg transition-colors hover:bg-white/10 border border-white/10"
          aria-label="Change language"
        >
          <span className="text-sm text-gray-300">
            {currentLanguage?.flag} {currentLanguage?.code.toUpperCase()}
          </span>
          <ChevronDown
            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
              }`}
          />
        </button>

        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown */}
            <div className="absolute right-0 mt-2 w-48 rounded-lg border border-white/10 bg-black/90 backdrop-blur-md shadow-xl overflow-hidden z-50">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-white/10 ${currentLocale === language.code ? 'bg-white/5' : ''
                    }`}
                >
                  <span className="text-2xl">{language.flag}</span>
                  <span className="text-sm text-gray-300">{language.label}</span>
                  {currentLocale === language.code && (
                    <Check className="ml-auto w-4 h-4 text-blue-400" />
                  )}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default SiteHeader;