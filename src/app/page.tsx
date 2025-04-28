'use client'

import { Button, Container, Typography } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem', textAlign: 'center' }}>
      <Typography variant="h3" component="h1" gutterBottom>
        ¡Bienvenido a Next.js + Material UI!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Este es un proyecto inicial con TypeScript y MUI.
      </Typography>
      <Button variant="contained" color="primary">
        ¡Haz clic aquí!
      </Button>
    </Container>
  );
}
