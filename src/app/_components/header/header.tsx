import Link from 'next/link'
import { CiCoffeeBean } from 'react-icons/ci'

import { MobileMenu } from '@/components/mobile-menu'

import BurgerButton from './burger'
import CartButton from './cart-button'
import HeaderLink from './header-link'
import s from './header.module.scss'

export default function Header() {
  return (
    <div className={s.wrap}>
      <header className={s.header}>
        <Link href='/' aria-label='Home' data-logo>
          <CiCoffeeBean strokeWidth={1.25} aria-hidden />
          Impresso
        </Link>
        <ul className={s.links}>
          <li>
            <HeaderLink>For Enterprise</HeaderLink>
          </li>
          <li>
            <HeaderLink>For Home</HeaderLink>
          </li>
          <li>
            <HeaderLink>Accessories</HeaderLink>
          </li>
          <li>
            <HeaderLink>Coffee</HeaderLink>
          </li>
          <li>
            <HeaderLink>About Us</HeaderLink>
          </li>
        </ul>
        <div className={s.rightSide}>
          <HeaderLink>Sign in</HeaderLink>
          <CartButton />
        </div>
        <BurgerButton />

        <MobileMenu />
      </header>
    </div>
  )
}
