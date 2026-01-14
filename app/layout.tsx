import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AJPR World – Your Partner for Tech & Business Growth',
  description: 'AJPR World delivers complete business solutions including web development, mobile apps, and digital transformation. We help startups and businesses grow with reliable, end-to-end technology support.',
  keywords: 'Best Software, business solutions, web development, mobile apps, digital transformation, IT services, India, business consulting India',
  alternates: { canonical: 'https://ajprworld.com' },
  openGraph: {
    title: 'AJPR World - Complete Business Solutions',
    description: 'Your one-stop partner for business success: tech & digital services.',
    url: 'https://ajprworld.com',
    siteName: 'AJPR World',
    images: [
      {
        url: 'https://ajprworld.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AJPR World',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AJPR World - Complete Business Solutions',
    description: 'Tech & Digital Services for your business growth.',
    images: ['https://ajprworld.com/og-image.jpg'],
    creator: '@ajprworld',
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
            <Analytics />
            <SpeedInsights />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
