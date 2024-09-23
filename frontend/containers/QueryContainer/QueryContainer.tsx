'use client';

import * as React from 'react';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { IBaseContainerProps } from '../interfaces';

export const queryClient = new QueryClient();

export type IQueryContainerProps = IBaseContainerProps

function QueryContainer(props: IQueryContainerProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
      {__DEV__ && <ReactQueryDevtools initialIsOpen={false} buttonPosition='bottom-right' />}
    </QueryClientProvider>
  );
}

export default QueryContainer;
