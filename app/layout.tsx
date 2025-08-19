import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AJPR World - Complete Business Solutions | Legal, Tech & Financial Services',
  description: 'AJPR World provides comprehensive business solutions including web development, legal services, GST returns, company registration, and financial consulting. Your one-stop partner for business success.',
  keywords: 'AJPR World, business solutions, web development, legal services, GST returns, company registration, financial consulting, Ballabgarh, Faridabad',
  authors: [{ name: 'AJPR World Team' }],
  creator: 'AJPR World',
  publisher: 'AJPR World',
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
