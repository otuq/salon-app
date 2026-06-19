import Link from 'next/link'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { ArrowButton } from '../ui/arrow-button'
import { Logo } from '../ui/logo'

export function MobileHeader() {
  return (
    <div className=''>
      <div className='flex items-center justify-between border-b border-[#a4a4a4]'>
        <Logo />
        <div className='shrink-0'>
          <ArrowButton
            href='/reservation'
            children='ご予約はこちら'
            className='bg-[#000000aa] px-3'
            textClassName=' text-sm'
          />
        </div>
      </div>
      <nav>
        <ul className='font-cormorant flex justify-center text-[20px] font-light tracking-wide'>
          <li className='px-2'>
            <a href='#concept' className='hover:opacity-50'>
              Concept
            </a>
          </li>
          <li className='md px-2'>
            <a href='#menu' className='hover:opacity-50'>
              Menu
            </a>
          </li>
          <li className='px-2'>
            <a href='#staff' className='hover:opacity-50'>
              Stylist
            </a>
          </li>
          <li className='md:md px-2'>
            <a href='#reservation' className='hover:opacity-50'>
              Reserve
            </a>
          </li>
          <li>
            <Sheet>
              <SheetTrigger asChild>
                <button className='outline-none'>
                  <span>More</span>
                </button>
              </SheetTrigger>
              <SheetContent side='top' className='opacity-50'>
                <div className='font-cormorant mx-auto mt-12 text-xl'>
                  <h2 className='border-b border-[#a4a4a4] text-center'>
                    More
                  </h2>
                  <div className='flex justify-center gap-6'>
                    <Link href='/access' className='hover:opacity-50'>
                      Access
                    </Link>
                    <Link href='/blog' className='hover:opacity-50'>
                      Blog
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </li>
        </ul>
      </nav>
    </div>
  )
}
