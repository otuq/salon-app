import { cn } from '@/lib/utils'
import styles from '@/app/style.module.css'

type Props = {
  children?: React.ReactNode
}

export function FixedHeader({ children }: Props) {
  return (
    <header className='fixed top-0 z-50 w-full'>
      <div className={cn('absolute inset-0', styles.transparentBottom)} />
      <div className='relative mx-auto max-w-7xl px-6 py-6'>{children}</div>
    </header>
  )
}
