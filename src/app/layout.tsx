import { Footer } from '@/app/_components/footer'
import cn from 'classnames'
import type { Metadata } from 'next'
import { Playfair_Display, Roboto } from 'next/font/google'
import { ReactNode } from 'react'

import '@/styles/globals.scss'

import { Header } from './_components/header'
import Providers from './providers'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--roboto-font'
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--playfair-font'
})

export const metadata: Metadata = {
  title: 'Impresso Coffee Machine',
  description: 'Example for Zelenka'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className={cn(roboto.variable, playfair.variable)}>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
