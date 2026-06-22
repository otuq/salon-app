'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import styles from '@/app/style.module.css'

interface ArrowButtonProps extends React.ComponentProps<typeof Button> {
  href: string
  children: React.ReactNode
  textClassName?: string
}

export function ArrowButton({
  href,
  className,
  children,
  textClassName,
  ...props
}: ArrowButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Button
      asChild
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={cn(
        'border-none px-4 py-6 md:px-10',
        styles.transparentLeft,
        className,
      )}
      {...props}
    >
      <Link href={href}>
        <p className={textClassName}>{children}</p>
        <span
          className={cn(
            'inline-block transition duration-300 ease-in-out',
            isOpen ? 'translate-x-2' : 'translate-x-0',
          )}
        >
          {'>'}
        </span>
      </Link>
    </Button>
  )
}
