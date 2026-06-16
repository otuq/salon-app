import Link from 'next/link'
import styles from '@/app/style.module.css'

export function Footer() {
  return (
    <footer className={`${styles.transparentTop} py-6 text-[#f7f3ed]`}>
      <div className="grid max-w-7xl gap-10 px-6 md:grid-cols-3">
        <div className="text-center">
          <p className="font-cormorant text-4xl tracking-widest">Lueur</p>
          <p className="font-cormorant mt-2 text-lg text-[#f7f3ed]/70">
            hair salon
          </p>
        </div>
        <div>
          <p className="font-cormorant text-xl tracking-widest">Access</p>
          <p className="mt-4 text-sm leading-7 text-[#f7f3ed]/70">
            東京都〇〇区〇〇 1-2-3
            <br />
            〇〇駅 徒歩5分
          </p>
        </div>
        <div>
          <p className="font-cormorant text-xl tracking-widest">Open</p>
          <p className="mt-4 text-sm leading-7 text-[#f7f3ed]/70">
            10:00 - 20:00
            <br />
            Closed: Tuesday
          </p>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl justify-between border-t border-[#f7f3ed]/20 px-6 pt-6 text-sm text-[#f7f3ed]/60">
        <p>© 2026 Lueur hair salon</p>
        <div className="flex gap-6">
          <Link href="/menu">Menu</Link>
          <Link href="/staff">Staff</Link>
          <Link href="/reservations">Reservation</Link>
        </div>
      </div>
    </footer>
  )
}
