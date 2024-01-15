'use client'

import cn from 'classnames'
import Link from 'next/link'
import { ReactNode } from 'react'

import { useMobileMenuContext } from '@/components/mobile-menu'

import { NO_PAGE_MESSAGE } from '@/lib/contstants'

import s from './header.module.scss'

interface HeaderLinkProps {
  children: ReactNode
  className?: string
}

export default function HeaderLink({ children, className }: HeaderLinkProps) {
  const context = useMobileMenuContext()

  return (
    <Link
      className={cn(s.headerLink, className)}
      href='/'
      onClick={e => {
        e.preventDefault()
        context.setOpen(false)
        alert(NO_PAGE_MESSAGE)
      }}
    >
      {children}
    </Link>
  )
}
