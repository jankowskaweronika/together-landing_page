"use client";

import React from 'react';
import { Check, X } from 'lucide-react';
import ShimmerCard from '../magicui/shimmerCard';

const ComparisonSection = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen gap-12 px-4 py-20'>
      <h2 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-4xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-5xl md:text-6xl lg:text-7xl">
        Platforma, której szukałeś
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full'>
        <ShimmerCard>
          <h3 className='text-2xl font-bold mb-6 text-black'>Tradycyjne platformy</h3>
          <div className='space-y-4'>
            <div className='flex items-start gap-3'>
              <X className='w-5 h-5 text-red-400 flex-shrink-0 mt-0.5' />
              <p className='text-gray-600'>Brak interakcji z innymi uczestnikami</p>
            </div>
            <div className='flex items-start gap-3'>
              <X className='w-5 h-5 text-red-400 flex-shrink-0 mt-0.5' />
              <p className='text-gray-600'>Zimna, bezosobowa nauka</p>
            </div>
            <div className='flex items-start gap-3'>
              <X className='w-5 h-5 text-red-400 flex-shrink-0 mt-0.5' />
              <p className='text-gray-600'>Brak wsparcia społeczności</p>
            </div>
            <div className='flex items-start gap-3'>
              <X className='w-5 h-5 text-red-400 flex-shrink-0 mt-0.5' />
              <p className='text-gray-600'>Uczenie się w izolacji</p>
            </div>
          </div>
        </ShimmerCard>

        <ShimmerCard>
          <h3 className='text-2xl font-bold mb-6 text-black'>together</h3>
          <div className='space-y-4'>
            <div className='flex items-start gap-3'>
              <Check className='w-5 h-5 text-green-400 flex-shrink-0 mt-0.5' />
              <p className='text-gray-600'>Aktywna społeczność uczących się</p>
            </div>
            <div className='flex items-start gap-3'>
              <Check className='w-5 h-5 text-green-400 flex-shrink-0 mt-0.5' />
              <p className='text-gray-600'>Dyskusje i wymiana doświadczeń</p>
            </div>
            <div className='flex items-start gap-3'>
              <Check className='w-5 h-5 text-green-400 flex-shrink-0 mt-0.5' />
              <p className='text-gray-600'>Wspólne rozwiązywanie problemów</p>
            </div>
            <div className='flex items-start gap-3'>
              <Check className='w-5 h-5 text-green-400 flex-shrink-0 mt-0.5' />
              <p className='text-gray-600'>Motywacja przez społeczność</p>
            </div>
          </div>
        </ShimmerCard>
      </div>
    </div>
  );
};

export default ComparisonSection;