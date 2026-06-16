import Link from 'next/link'
import { Button } from '../ui/button'
import Image from 'next/image'
import styles from '@/app/style.module.css'

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7f3ed]">
      <Image
        src="/image/home/hero.png"
        alt="ヘアスタイルモデル"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-white/40" />
      <header className={`fixed top-0 z-50 w-full`}>
        <div className={`${styles.transparentBottom} absolute inset-0`} />
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
          <Link href="/">
            <div className="flex flex-col items-center">
              <p className="font-cormorant text-4xl tracking-widest">Lueur</p>
              <p className="text-muted-foreground font-cormorant text-lg">
                hair salon
              </p>
            </div>
          </Link>
          <nav>
            <ul className="font-cormorant flex text-[20px] font-light tracking-wide">
              <li className="border-x border-black px-6">
                <a href="#concept" className="hover:opacity-50">
                  Concept
                </a>
              </li>
              <li className="px-6">
                <a href="#menu" className="hover:opacity-50">
                  Menu
                </a>
              </li>
              <li className="border-x border-black px-6">
                <a href="#staff" className="hover:opacity-50">
                  Stylist
                </a>
              </li>
              <li className="px-6">
                <a href="#reservation" className="hover:opacity-50">
                  Reservation
                </a>
              </li>
              <li className="border-x border-black px-6">
                <a href="/access" className="hover:opacity-50">
                  Access
                </a>
              </li>
              <li className="border-r border-black px-6">
                <a href="/blog" className="hover:opacity-50">
                  Blog
                </a>
              </li>
            </ul>
          </nav>

          <Button asChild className="bg-[#000000aa] px-10 py-6">
            <Link href="/reservation">🗓️ ご予約はこちら</Link>
          </Button>
        </div>
      </header>
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-6">
        <div className="max-w-xl">
          <h1
            className={`${styles.textOutline} text-4xl leading-relaxed font-medium tracking-widest md:text-6xl`}
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

          <Button asChild className="mt-10 bg-[#000000aa] px-10 py-6">
            <Link href="/reservation">ご予約はこちら　→</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
