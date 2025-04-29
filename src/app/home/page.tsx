'use client';

import { useAuthStore, AuthState } from '../../store/authStore';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useIsHydrated } from '@/hooks/useIsHydrated';

export default function HomePrivatePage() {
  const { isAuthenticated, userEmail, logout } = useAuthStore((state: AuthState) => state)
  const isHydrated = useIsHydrated()
  const router = useRouter()

  useEffect(() => {
    if (isHydrated && !isAuthenticated) {
      router.replace('/');
    }
  }, [isAuthenticated, isHydrated, router]);

  if (!isHydrated) {
    return null;
  }

  const handleLogout = () => {
    logout();
    router.replace('/');
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Bienvenido 🚀
      </Typography>
      <Typography variant="h6" gutterBottom>
        Estás logueado como: {userEmail}
      </Typography>

      <Button variant="contained" color="secondary" onClick={handleLogout} sx={{ mt: 4 }}>
        Cerrar sesión
      </Button>
    </Container>
  );
}
