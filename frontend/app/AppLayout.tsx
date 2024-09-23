'use client';

import Header from '@/components/Header';

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col w-full h-full'>
      <Header />
      {children}
    </div>
  );
}

export default AppLayout;
