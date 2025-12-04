import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Funkcje', href: '#funkcje' },
      { name: 'Cennik', href: '#cennik' },
      { name: 'Demo', href: '#demo' },
      { name: 'Dokumentacja', href: '#dokumentacja' }
    ],
    company: [
      { name: 'O nas', href: '#o-nas' },
      { name: 'Blog', href: '#blog' },
      { name: 'Kariera', href: '#kariera' },
      { name: 'Kontakt', href: '#kontakt' }
    ],
    help: [
      { name: 'FAQ', href: '#faq' },
      { name: 'Wsparcie', href: '#wsparcie' },
      { name: 'Polityka prywatności', href: '#prywatnosc' },
      { name: 'Regulamin', href: '#regulamin' }
    ],
    legal: [
      { name: 'Warunki użytkowania', href: '#warunki' },
      { name: 'Cookies', href: '#cookies' },
      { name: 'RODO', href: '#rodo' },
      { name: 'Licencje', href: '#licencje' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' }
  ];

  return (
    <footer className="relative bg-gray-950 border-t border-gray-800/50">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  Together
                </h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Platforma kursowa nowej generacji, która łączy wiedzę ze społecznością. Twórz, ucz się i rozwijaj razem z innymi.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="group relative inline-flex overflow-hidden rounded-lg p-[1px] transition-all duration-300 hover:scale-110"
                      aria-label={social.name}
                    >
                      {/* Animated border on hover */}
                      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <span className="relative inline-flex items-center justify-center w-10 h-10 bg-gray-900 rounded-lg backdrop-blur-xl">
                        <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Produkt</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Firma</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Pomoc</h4>
              <ul className="space-y-3">
                {footerLinks.help.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Prawo</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="py-8 border-t border-gray-800/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-indigo-400 mt-0.5" />
              <div>
                <p className="text-gray-500 mb-1">Email</p>
                <a href="mailto:kontakt@together.pl" className="text-gray-300 hover:text-white transition-colors">
                  kontakt@together.pl
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-indigo-400 mt-0.5" />
              <div>
                <p className="text-gray-500 mb-1">Telefon</p>
                <a href="tel:+48123456789" className="text-gray-300 hover:text-white transition-colors">
                  +48 123 456 789
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-indigo-400 mt-0.5" />
              <div>
                <p className="text-gray-500 mb-1">Adres</p>
                <p className="text-gray-300">
                  Warszawa, Polska
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Together. Wszystkie prawa zastrzeżone.
            </p>

            {/* Payment methods or certifications */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Bezpieczne płatności</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span>RODO Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;