import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Gaming Tools | hplaptop.co',
    template: '%s | hplaptop.co',
  },
  description: 'Free gaming tools: username generator, FPS sensitivity calculator, PC build checker and more. Built for gamers.',
  keywords: ['gaming tools', 'gamertag generator', 'fps sensitivity calculator', 'can i run this game', 'roblox username generator'],
  authors: [{ name: 'hplaptop.co' }],
  creator: 'hplaptop.co',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hplaptop.co',
    siteName: 'hplaptop.co Gaming Tools',
    title: 'Gaming Tools | hplaptop.co',
    description: 'Free gaming tools: username generator, FPS sensitivity calculator, PC build checker and more.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gaming Tools | hplaptop.co',
    description: 'Free gaming tools built for gamers.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-bg-primary min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
