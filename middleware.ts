import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  // Lista wszystkich wspieranych języków
  locales,
  
  // Domyślny język
  defaultLocale,
  
  // Automatyczna detekcja języka z przeglądarki
  localeDetection: true,
  
  // Prefix w URL (zawsze pokazuj /pl lub /en)
  localePrefix: 'always'
});

export const config = {
  // Matcher ignoruje _next, api, statyczne pliki
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};