import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex w-full justify-center items-center'>
      <Link href='/sport/events'>Events</Link>
    </div>
  );
}
