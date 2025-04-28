import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import EmotionProvider from "@/helpers/emotion/EmotionProvider";
import { ThemeProvider, CssBaseline } from '@mui/material';
import "./globals.css";

export const metadata: Metadata = {
  title: "Users Flow",
  description: "NextJS project to manage users and see an React Flow automatization.",
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <EmotionProvider>
          <CssBaseline />
          {children}
        </EmotionProvider>
      </body>
    </html>
  );
}
