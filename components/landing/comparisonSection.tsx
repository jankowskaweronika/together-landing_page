"use client";

import React from 'react'
import { Check, X } from 'lucide-react'
import ShimmerCard from '../magicui/shimmerCard'

const ComparisonSection = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen gap-12 px-4'>
      <h1 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <br className="hidden md:block" /> Platforma, której szukałeś
      </h1>

      <div className='grid grid-cols-2 gap-8 max-w-4xl w-full'>
        <ShimmerCard>
          <h3 className='text-xl font-bold mb-6'>Tradycyjne platformy</h3>
          <div className='space-y-3'>
            <div className='flex items-start gap-3'>
              <X className='w-5 h-5 text-red-500 flex-shrink-0 mt-0.5' />
              <p>Brak interakcji z innymi uczestnikami</p>
            </div>
            <div className='flex items-start gap-3'>
              <X className='w-5 h-5 text-red-500 flex-shrink-0 mt-0.5' />
              <p>Zimna, bezosobowa nauka</p>
            </div>
            <div className='flex items-start gap-3'>
              <X className='w-5 h-5 text-red-500 flex-shrink-0 mt-0.5' />
              <p>Brak wsparcia społeczności</p>
            </div>
            <div className='flex items-start gap-3'>
              <X className='w-5 h-5 text-red-500 flex-shrink-0 mt-0.5' />
              <p>Uczenie się w izolacji</p>
            </div>
          </div>
        </ShimmerCard>

        <ShimmerCard>
          <h3 className='text-xl font-bold mb-6'>Together</h3>
          <div className='space-y-3'>
            <div className='flex items-start gap-3'>
              <Check className='w-5 h-5 text-green-500 flex-shrink-0 mt-0.5' />
              <p>Aktywna społeczność uczących się</p>
            </div>
            <div className='flex items-start gap-3'>
              <Check className='w-5 h-5 text-green-500 flex-shrink-0 mt-0.5' />
              <p>Dyskusje i wymiana doświadczeń</p>
            </div>
            <div className='flex items-start gap-3'>
              <Check className='w-5 h-5 text-green-500 flex-shrink-0 mt-0.5' />
              <p>Wspólne rozwiązywanie problemów</p>
            </div>
            <div className='flex items-start gap-3'>
              <Check className='w-5 h-5 text-green-500 flex-shrink-0 mt-0.5' />
              <p>Motywacja przez społeczność</p>
            </div>
          </div>
        </ShimmerCard>
      </div>
    </div>
  )
}

export default ComparisonSection