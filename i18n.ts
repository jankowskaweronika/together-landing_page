import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Dostępne języki
export const locales = ['pl', 'en'] as const;
export const defaultLocale = 'pl' as const;

export default getRequestConfig(async ({ locale }) => {
  // Walidacja czy język jest wspierany
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});