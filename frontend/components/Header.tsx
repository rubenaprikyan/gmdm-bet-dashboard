'use client';

import { ThemeModeToggle } from '@/components/ThemeModeToggle';

function Header() {
  return (
    <header className='w-full shadow p-3 border-b'>
      <div className='mx-auto flex justify-between items-center'>
        <ThemeModeToggle />
      </div>
    </header>
  );
}

export default Header;
