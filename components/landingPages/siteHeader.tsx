'use client'

import React from 'react';
import { Languages } from 'lucide-react';

const SiteHeader = () => {
  return (
    <div className="container mx-auto flex h-[var(--navigation-height)] w-full items-center justify-between">
      <img
        src="/logo.png"
        alt="together-course-logo"
        width={250}
        height={300}
      />

      <Languages />
    </div>
  )
}

export default SiteHeader

