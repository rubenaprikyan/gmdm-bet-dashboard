import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  return (
    <Button
      size='icon'
      variant='ghost'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <div className='flex gap-2 dark:hidden'>
        <Moon className='size-5' />
      </div>

      <div className='dark:flex gap-2 hidden'>
        <Sun className='size-5' />
      </div>

      <span className='sr-only'>System</span>
    </Button>
  );
}
