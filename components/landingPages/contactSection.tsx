'use client';

import { useTranslations } from 'next-intl';
import { AlertCircle, CheckCircle, Mail } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const t = useTranslations('ContactSection');

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(t('successMessage'));
        setEmail('');

        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 5000);
      } else {
        setStatus('error');
        setMessage(data.error || t('errorMessage'));
      }
    } catch (error) {
      setStatus('error');
      setMessage(t('errorMessage'));
    }
  };

  return (
    <form id='contact' onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('emailPlaceholder')}
            required
            disabled={status === 'loading' || status === 'success'}
            className="w-full pl-12 pr-4 py-3.5 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full 
                     text-white placeholder:text-gray-500
                     focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20
                     disabled:opacity-50 disabled:cursor-not-allowed
                     transition-all duration-300
                     hover:border-white/20"
            style={{
              background: 'linear-gradient(to right, rgba(2, 6, 23, 0.6), rgba(55, 65, 81, 0.4))'
            }}
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="relative px-8 py-3.5 rounded-full font-medium text-white
                   transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
                   whitespace-nowrap overflow-hidden group
                   hover:shadow-lg hover:shadow-zinc-700/50"
          style={{
            background: 'linear-gradient(to right, rgb(2, 6, 23), rgb(55, 65, 81))'
          }}
        >
          <span className="relative z-10 text-sm lg:text-base">
            {status === 'loading' ? t('submitting') : status === 'success' ? t('submitted') : t('submit')}
          </span>

          {/* Pulsating effect */}
          <span
            className="absolute inset-0 rounded-full animate-pulse"
            style={{
              background: 'linear-gradient(to right, rgb(2, 6, 23), rgb(55, 65, 81))',
              opacity: 0.4,
              animation: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            }}
          />
        </button>
      </div>

      {message && (
        <div className={`mt-4 flex items-center justify-center gap-2 text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'
          }`}>
          {status === 'success' ? (
            <CheckCircle className="w-4 h-4" />
          ) : (
            <AlertCircle className="w-4 h-4" />
          )}
          <span>{message}</span>
        </div>
      )}
    </form>
  );
};

export default ContactSection;