import { cn } from '@/lib/utils'
import Link from 'next/link'

type Props = {
  href?: string
  className?: string
}

export function Logo({ href, className }: Props) {
  const content = (
    <div className='flex flex-col items-center'>
      <p className='font-cormorant text-4xl tracking-widest'>Lueur</p>
      <p className='text-muted-foreground font-cormorant text-lg'>hair salon</p>
    </div>
  )
  return href ? (
    <Link href={href} className={cn('shrink-0', className)}>
      {content}
    </Link>
  ) : (
    content
  )
}
