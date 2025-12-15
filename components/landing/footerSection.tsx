'use client';

import { useTranslations } from 'next-intl';

const FooterSection = () => {
  const t = useTranslations('FooterSection');

  return (
    <div id='footer' className="flex justify-center mt-24 pt-8 border-t border-white/5">
      <p className="text-slate-400 text-sm">
        © {new Date().getFullYear()} Together. {t('rights')}
      </p>
    </div>
  );
};

export default FooterSection;