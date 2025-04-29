'use client';

import { useIsHydrated } from '@/hooks/useIsHydrated';
import { useProtectedRoute } from '@/hooks/useProtectedRoute';
import { AuthState, useAuthStore } from '@/store/authStore';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function ProtectedLayout({ children }: Props) {
  const { isAuthenticated, userEmail, logout } = useAuthStore((state: AuthState) => state)
  const isHydrated = useIsHydrated()
  const { isLoading } = useProtectedRoute({
    isAuthenticated,
    isHydrated,
    redirectTo: '/',
  });

  if (isLoading) {
    return null;
  }

  return (
    <>
      {children}
    </>
  );
}
