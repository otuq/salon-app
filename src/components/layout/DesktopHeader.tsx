import Link from 'next/link'
import { Logo } from '../ui/logo'
import { ArrowButton } from '../ui/arrow-button'

export function DesktopHeader() {
  return (
    <div className='flex items-center'>
      <Logo href='/' />
      <nav className='flex-1'>
        <ul className='font-cormorant flex justify-center text-[20px] font-light tracking-wide'>
          <li className='border-x border-black px-6'>
            <a href='#concept' className='hover:opacity-50'>
              Concept
            </a>
          </li>
          <li className='px-6'>
            <a href='#menu' className='hover:opacity-50'>
              Menu
            </a>
          </li>
          <li className='border-x border-black px-6'>
            <a href='#staff' className='hover:opacity-50'>
              Stylist
            </a>
          </li>
          <li className='px-6'>
            <a href='#reservation' className='hover:opacity-50'>
              Reservation
            </a>
          </li>
          <li className='border-x border-black px-6'>
            <Link href='/access' className='hover:opacity-50'>
              Access
            </Link>
          </li>
          <li className='border-r border-black px-6'>
            <Link href='/blog' className='hover:opacity-50'>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <div className='shrink-0'>
        <ArrowButton
          href='/reservation'
          children='ご予約はこちら'
          className='bg-[#000000aa]'
        />
      </div>
    </div>
  )
}
