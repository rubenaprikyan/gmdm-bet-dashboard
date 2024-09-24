'use client';

import { IBaseContainerProps } from '../interfaces';
import useAuth from '@/hooks/auth/useAuth';
import { usePathname, useRouter } from 'next/navigation';
import PageLoader from '@/components/PageLoader';

export interface IAuthContainerProps extends IBaseContainerProps {}

function AuthContainer(props: IAuthContainerProps) {
  const { isLoggedIn, loading } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  if (loading) {
    return <PageLoader />;
  }
  if (['auth'].includes(pathname.split('/')[1]) && isLoggedIn) {
    router.push('/');
  }

  if (!isLoggedIn) {
    router.push('/auth/login');
  }

  return props.children;
}

export default AuthContainer;
