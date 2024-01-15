'use client'

import { ReactNode } from 'react'

import { MobileMenuProvider } from '@/components/mobile-menu'

export default function Providers({ children }: { children: ReactNode }) {
  return <MobileMenuProvider>{children}</MobileMenuProvider>
}
