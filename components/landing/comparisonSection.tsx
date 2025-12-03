"use client";

import React from 'react'

const ComparisonSection = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='grid grid-cols-2 gap-8 max-w-4xl w-full px-4'>
        <div className='bg-gray-100 p-6 rounded-lg'>
          <h3 className='text-xl font-bold mb-4'>Kolumna 1</h3>
          <p>To jest treść pierwszej kolumny. Możesz tutaj umieścić dowolny tekst lub komponenty.</p>
        </div>
        <div className='bg-gray-100 p-6 rounded-lg'>
          <h3 className='text-xl font-bold mb-4'>Kolumna 2</h3>
          <p>To jest treść drugiej kolumny. Możesz tutaj umieścić dowolny tekst lub komponenty.</p>
        </div>
      </div>
    </div>
  )
}

export default ComparisonSection 