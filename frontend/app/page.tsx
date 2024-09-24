import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className='flex w-full justify-center items-center p-10'>
      <Link href='/sport/events'>
        <Button>Show Events</Button>
      </Link>
    </div>
  );
}
