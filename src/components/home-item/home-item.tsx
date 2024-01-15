'use client'

import Link from 'next/link'
import { ComponentProps } from 'react'

import { NO_PAGE_MESSAGE } from '@/lib/contstants'

import s from './home-item.module.scss'

/* -------------------------------------------------------------------------------------------------
 * Item
 * -----------------------------------------------------------------------------------------------*/

interface ItemProps extends ComponentProps<'div'> {
  badge: string
}

function Item(props: ItemProps) {
  const { children, badge, ...itemProps } = props

  return (
    <div className={s.root} {...itemProps}>
      <div className={s.badge}>{badge}</div>
      <div className={s.content}>{children}</div>
    </div>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Title
 * -----------------------------------------------------------------------------------------------*/

function ItemTitle({ content }: { content: string }) {
  return (
    <div className={s.title} data-title>
      {content}
    </div>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Link
 * -----------------------------------------------------------------------------------------------*/

function ItemLink({ content }: { content: string }) {
  return (
    <Link
      className={s.link}
      href='/'
      data-link
      onClick={e => {
        e.preventDefault()
        alert(NO_PAGE_MESSAGE)
      }}
    >
      {content}
    </Link>
  )
}

/* ---------------------------------------------------------------------------------------------- */

const Root = Item
const Title = ItemTitle
const HomeLink = ItemLink

export { Root, Title, HomeLink }
