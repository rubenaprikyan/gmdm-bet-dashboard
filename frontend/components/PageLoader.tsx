'use client';

import React from 'react';
import { BsWindowDock } from 'react-icons/bs';
import { cn } from '@/lib/utils';

function PageLoader({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex items-center justify-center w-full h-screen',
        className
      )}
    >
      <BsWindowDock
        className={'h-8 w-8 font-medium text-primary/60 animate-pulse'}
      />
    </div>
  );
}

PageLoader.displayName = 'PageLoader';

export default PageLoader;
