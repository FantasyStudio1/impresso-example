'use client'

import CartButton from '@/app/_components/header/cart-button'
import HeaderLink from '@/app/_components/header/header-link'
import { Portal } from '@radix-ui/react-portal'
import { Dispatch, ReactNode, SetStateAction, useState } from 'react'
import { RemoveScroll } from 'react-remove-scroll'

import { createContext } from '@/utils/create-context'

import s from './mobile-menu.module.scss'

type MenuContext = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const [MenuProvider, useMenuContext] = createContext<MenuContext>('MenuContext')

export const useMobileMenuContext = () => useMenuContext('MenuContext')

export function MobileMenuProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <MenuProvider open={isOpen} setOpen={setIsOpen}>
      {children}
    </MenuProvider>
  )
}

export function MobileMenu() {
  const menuContext = useMobileMenuContext()

  if (!menuContext.open) return null

  return (
    <Portal>
      <RemoveScroll allowPinchZoom enabled>
        <div className={s.root}>
          <HeaderLink className={s.menuLink}>For Enterprise</HeaderLink>
          <HeaderLink className={s.menuLink}>For Home</HeaderLink>
          <HeaderLink className={s.menuLink}>Accessories</HeaderLink>
          <HeaderLink className={s.menuLink}>Coffee</HeaderLink>
          <HeaderLink className={s.menuLink}>About Us</HeaderLink>
          <CartButton inMenu />
        </div>
      </RemoveScroll>
    </Portal>
  )
}
