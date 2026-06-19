import { prisma } from '@/lib/prisma'
import { MenuCard } from '../features/menu/MenuCard'
import { ArrowButton } from '../ui/arrow-button'
import { Description } from './Description'

export async function MenuSection() {
  const menus = await prisma.menu.findMany({
    take: 3,
    orderBy: {
      createdAt: 'asc',
    },
  })
  return (
    <section id='menu' className='py-32'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='flex flex-col items-center justify-center'>
          <Description
            englishTitle='MENU'
            title='人気メニュー'
            description='髪質やライフスタイルに合わせて、扱いやすく自然なスタイルをご提案します。'
          ></Description>
          <div className='mt-16 grid gap-8 md:grid-cols-3'>
            {menus.map((menu) => (
              <MenuCard
                key={menu.id}
                name={menu.name}
                imageUrl={menu.imageUrl}
                englishName={menu.englishName}
                description={menu.description}
                price={menu.price}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
