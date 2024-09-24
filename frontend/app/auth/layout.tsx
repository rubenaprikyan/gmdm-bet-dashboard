'use client';

import { IBaseContainerProps } from '@/containers/interfaces';

function AuthLayout(props: IBaseContainerProps) {
  // facade
  return props.children;
}

export default AuthLayout;
