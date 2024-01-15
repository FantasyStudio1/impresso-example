'use client'

import cn from 'classnames'
import { IoMdClose } from 'react-icons/io'
import { RxHamburgerMenu } from 'react-icons/rx'

import { useMobileMenuContext } from '@/components/mobile-menu'

import reset from '@/styles/reset.module.scss'

import s from './header.module.scss'

export default function BurgerButton() {
  const { open, setOpen } = useMobileMenuContext()

  return (
    <button
      type='button'
      className={cn(reset.root, s.burgerButton)}
      aria-label={!open ? 'Open Mobile Menu' : 'Close Mobile Menu'}
      onClick={() => setOpen(!open)}
    >
      {!open ? <RxHamburgerMenu aria-hidden /> : <IoMdClose aria-hidden />}
    </button>
  )
}
