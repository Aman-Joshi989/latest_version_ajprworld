import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AJPR World - Your Trusted Technology Partner',
  description: 'Beyond vendors: Your digital success deserves a partner. Professional web development, IT solutions, and digital transformation services in Haldwani, Uttarakhand.',
  keywords: 'web development, IT solutions, digital marketing, technology partner, Haldwani, Uttarakhand, Next.js, TypeScript',
  authors: [{ name: 'AJPR World' }],
  creator: 'AJPR World',
  publisher: 'AJPR World',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
