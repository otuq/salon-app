import { Footer } from '@/components/layout/home/Footer'
import { SectionHeading } from '@/components/layout/home/SectionHeading'
import { MenuCard } from '@/components/layout/menu/MenuCard'
import { ArrowButton } from '@/components/ui/arrow-button'
import { Logo } from '@/components/ui/logo'
import { prisma } from '@/lib/prisma'
import { cn } from '@/lib/utils'
import styles from '@/app/style.module.css'
import { FixedHeader } from '@/components/layout/home/FixedHeader'

export default async function MenusPage() {
  const menus = await prisma.menu.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })

  return (
    <main className='bg-[rgb(247,243,237)]'>
      <FixedHeader>
        <div className='flex items-center justify-between'>
          <Logo href='/' className='' />
          <ArrowButton
            href='/reservation'
            children='ご予約はこちら'
            className='bg-[#000000aa]'
          />
        </div>
      </FixedHeader>
      <section className='mx-auto max-w-7xl px-6 py-36'>
        <div className='flex flex-col items-center justify-center'>
          <SectionHeading
            englishTitle='Menus'
            title='メニュー一覧'
            className='text-2xl'
          />
          <div className='grid gap-4 md:grid-cols-2'>
            {menus.map((menu) => (
              <MenuCard
                englishName={menu.englishName}
                name={menu.name}
                imageUrl={menu.imageUrl}
                description={menu.description}
                price={menu.price}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

{
  /* <p className='text-muted-foreground mt-2 text-sm'>
  {menu.description}
</p>

<div className='mt-4 flex justify-between text-sm'>
  <span>{menu.durationMin}分</span>
  <span className='font-semibold'>
    ¥{menu.price.toLocaleString()}
  </span>
</div> */
}
// </div>
