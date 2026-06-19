import Link from 'next/link'
import Image from 'next/image'
import styles from '@/app/style.module.css'
import { cn } from '@/lib/utils'
import { DesktopHeader } from './DesktopHeader'
import { MobileHeader } from './MobileHeader'

export function HeroSection() {
  return (
    <section className='relative min-h-screen overflow-hidden bg-[#f7f3ed]'>
      <Image
        src='/image/home/hero.png'
        alt='ヘアスタイルモデル'
        fill
        priority
        className='object-cover object-[70%_center] md:object-cover'
      />

      <div className='absolute inset-0 bg-white/40' />
      <header className='fixed top-0 z-50 w-full'>
        <div className={cn('absolute inset-0', styles.transparentBottom)} />
        <div className='relative mx-auto max-w-7xl px-6 py-6'>
          <div className='hidden md:block'>
            <DesktopHeader />
          </div>
          <div className='md:hidden'>
            <MobileHeader />
          </div>
        </div>
      </header>
      <div className='relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-6'>
        <div className='w-full'>
          <h1
            className={`${styles.textOutline} text-2xl leading-relaxed font-medium tracking-widest md:text-6xl`}
          >
            毎日が少し楽しくなる
            <br />
            ヘアスタイルを
          </h1>

          <p
            className={`${styles.textOutline} text-muted-foreground mt-8 leading-8`}
          >
            お客様一人ひとりの髪質やライフスタイルに寄り添い、
            <br />
            再現性の高いヘアデザインをご提案します。
          </p>
        </div>
      </div>
    </section>
  )
}
