'use client';

import * as React from 'react';

import { IBaseContainerProps } from '../interfaces';

export interface IErrorContainerProps extends IBaseContainerProps {}

class ErrorContainer extends React.Component<IErrorContainerProps, any> {
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // TODO Add toast or other base error component
    console.log('ERROR ====> ', {
      error,
      errorInfo,
    });
    if (__DEV__) throw error;
  }

  render() {
    return this.props.children;
  }
}

export default ErrorContainer;
