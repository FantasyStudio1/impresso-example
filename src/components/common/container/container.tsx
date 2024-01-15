import cn from 'classnames'
import { ComponentProps } from 'react'

import s from './container.module.scss'

interface ContainerProps extends ComponentProps<'div'> {
  borderBottom?: boolean
  borderTop?: boolean
}

export default function Container(props: ContainerProps) {
  const { children, className, borderBottom, borderTop, ...containerProps } = props

  return (
    <div
      className={cn(s.root, className)}
      data-border-top={borderTop ? '' : undefined}
      data-border-bottom={borderBottom ? '' : undefined}
      {...containerProps}
    >
      {children}
    </div>
  )
}
