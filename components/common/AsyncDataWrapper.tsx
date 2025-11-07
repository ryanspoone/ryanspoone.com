import React from 'react';

interface AsyncDataWrapperProps<T> {
  data?: T;
  isLoading?: boolean;
  error?: string;
  errorCode?: number;
  loadingComponent: React.ReactNode;
  errorComponent: React.ReactNode;
  children: (data: T) => React.ReactNode;
}

export default function AsyncDataWrapper<T>({
  data,
  isLoading,
  loadingComponent,
  errorComponent,
  children,
}: AsyncDataWrapperProps<T>) {
  if (isLoading) {
    return <>{loadingComponent}</>;
  }

  if (data) {
    return <>{children(data)}</>;
  }

  return <>{errorComponent}</>;
}
