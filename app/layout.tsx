import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const apxSans = Geist({ subsets: ['latin', 'cyrillic'], variable: '--font-apx-sans' })
const apxMono = Geist_Mono({ subsets: ['latin', 'cyrillic'], variable: '--font-apx-mono' })

export const metadata: Metadata = {
  title: 'Apex Casino — независимый обзор входа, зеркала и игр',
  description: 'Понятный статейный обзор Apex Casino: официальный сайт, вход, регистрация, зеркало и ответственный игровой подход.',
  generator: 'Apex Casino Guide',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f3f0e8',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="bg-background">
      <body className={`${apxSans.variable} ${apxMono.variable}`}>{children}</body>
    </html>
  )
}
