import Link from 'next/link'
import styles from '@/app/style.module.css'
import { cn } from '@/lib/utils'

export function Footer() {
  return (
    <footer className={cn('py-10 text-[#f7f3ed]', styles.transparentTop)}>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='grid gap-3 py-8 text-[#f7f3ed]/60 md:grid-cols-3'>
          {/* Logo */}
          <div className='justify-self-center'>
            <div className='text-center'>
              <p className='font-cormorant text-4xl tracking-widest'>Lueur</p>
              <p className='font-cormorant text-lg text-[#f7f3ed]/70'>
                hair salon
              </p>
            </div>
          </div>
          {/* Access */}
          <div className='justify-self-center'>
            <div className='text-center md:text-left'>
              <p className='font-cormorant mb-2 text-xl tracking-widest'>
                Access
              </p>
              <p className='text-sm leading-7 text-[#f7f3ed]/70'>
                東京都〇〇区〇〇 1-2-3
                <br />
                〇〇駅 徒歩5分
              </p>
            </div>
          </div>
          {/* Open */}
          <div className='justify-self-center'>
            <div className='text-center md:text-left'>
              <p className='font-cormorant mb-2 text-xl tracking-widest'>
                Open
              </p>
              <p className='text-sm leading-7 text-[#f7f3ed]/70'>
                10:00 - 20:00
                <br />
                Closed: Tuesday
              </p>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className=''>
          <div className='grid justify-center border-t border-[#f7f3ed]/20 pt-6 text-center text-sm text-[#f7f3ed]/60'>
            <div className='flex gap-6'>
              <Link href='/menu'>Menu</Link>
              <Link href='/staff'>Staff</Link>
              <Link href='/reservations'>Reservation</Link>
            </div>
            <p className='pt-3'>© 2026 Lueur hair salon</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

{
  /* <div className='mx-auto grid max-w-5xl grid-cols-3 border-t border-[#f7f3ed]/20 px-6 pt-6 text-sm text-[#f7f3ed]/60'>
  <p className='justify-self-start'>© 2026 Lueur hair salon</p>
  <div className='flex gap-6 justify-self-center'>
    <Link href='/menu'>Menu</Link>
    <Link href='/staff'>Staff</Link>
    <Link href='/reservations'>Reservation</Link>
  </div>
</div> */
}
