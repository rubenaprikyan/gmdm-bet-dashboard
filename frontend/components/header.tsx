'use client';

import { ModeToggle } from '@/components/mode-toggle';

function Header() {
  return (
    <header className='w-full shadow p-3 border-b'>
      <div className='mx-auto flex justify-between items-center'>
        <ModeToggle />
      </div>
    </header>
  );
}

export default Header;
