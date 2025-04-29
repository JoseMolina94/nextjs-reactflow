import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@mui/material/styles'
import theme from "../../theme"
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'

export const metadata: Metadata = {
  title: "Users Flow",
  description: "NextJS project to manage users and see an React Flow automatization.",
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
