'use client'

import * as Dialog from '@radix-ui/react-dialog'
import cn from 'classnames'
import { IoMdClose } from 'react-icons/io'
import { IoCartOutline } from 'react-icons/io5'

import reset from '@/styles/reset.module.scss'

import s from './header.module.scss'

export default function CartButton({ inMenu = false }: { inMenu?: boolean }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type='button'
          className={cn(reset.root, s.cartButton)}
          data-menu={inMenu ? '' : undefined}
          aria-label='Open Cart'
        >
          <IoCartOutline aria-hidden />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={s.modalOverlay} />
        <Dialog.Content className={s.modalContent}>
          <div>
            <div>
              <Dialog.Title data-title>Cart</Dialog.Title>
              <Dialog.Description data-desc>Here you can proceed to payment</Dialog.Description>
            </div>
            <button
              type='button'
              className={cn(reset.root, s.proceedButton)}
              onClick={() => alert('Переходим к оплате...')}
            >
              Buy Coffee Machine
            </button>
          </div>
          <Dialog.Close asChild>
            <button type='button' className={cn(reset.root, s.closeButton)} aria-label='Close cart'>
              <IoMdClose />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
