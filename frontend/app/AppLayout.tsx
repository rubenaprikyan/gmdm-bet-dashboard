import Header from '@/components/header';

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col w-full h-full'>
      <Header />
      {children}
    </div>
  );
}

export default AppLayout;
