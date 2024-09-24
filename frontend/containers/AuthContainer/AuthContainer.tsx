'use client';

import { IBaseContainerProps } from '../interfaces';
import useAuth from '@/hooks/auth/useAuth';
import { usePathname, useRouter } from 'next/navigation';

export interface IAuthContainerProps extends IBaseContainerProps {}

function AuthContainer(props: IAuthContainerProps) {
  const { isLoggedIn } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  if (['auth'].includes(pathname.split('/')[1]) && isLoggedIn) {
    router.push('/');
  }

  if (!isLoggedIn) {
    router.push('/auth/login');
  }

  return props.children;
}

export default AuthContainer;
