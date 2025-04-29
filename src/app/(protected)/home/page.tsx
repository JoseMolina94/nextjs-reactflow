'use client';

import { useAuthStore, AuthState } from '../../../store/authStore';
import { useRouter } from 'next/navigation';
import { Container, Typography, Button, Box } from '@mui/material';

export default function HomePrivatePage() {
  const { userEmail, logout } = useAuthStore((state: AuthState) => state)
  const router = useRouter()

  const handleLogout = () => {
    logout();
    router.replace('/');
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Typography variant="h4" component="h1" gutterBottom textAlign='center'>
        Bienvenido 🚀
      </Typography>
      <Typography variant="h4" component="h1" gutterBottom textAlign='center'>
        {userEmail}
      </Typography>
      <Typography variant="h6" gutterBottom textAlign='center' >
        Aquí podras crear un flujo automatizado!!
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }} >
        <Button variant="contained" color="primary" onClick={handleLogout} sx={{ mt: 4 }}>
          Crear nuevo
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleLogout} sx={{ mt: 4 }}>
          Cerrar sesión
        </Button>
      </Box>
    </Container>
  );
}
