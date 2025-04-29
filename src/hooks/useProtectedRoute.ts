import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface UseProtectedRouteProps {
  isAuthenticated: boolean;
  isHydrated: boolean;
  redirectTo?: string;
}

export function useProtectedRoute({
  isAuthenticated,
  isHydrated,
  redirectTo = '/',
}: UseProtectedRouteProps) {
  const router = useRouter();

  useEffect(() => {
    if (isHydrated && !isAuthenticated) {
      router.replace(redirectTo);
    }
  }, [isAuthenticated, isHydrated, router, redirectTo]);

  const isLoading = !isHydrated;

  return { isLoading };
}
