import { prisma } from '@/lib/prisma'
import { MenuCard } from '../features/menu/MenuCard'

export async function MenuSection() {
  const menus = await prisma.menu.findMany({
    take: 3,
    orderBy: {
      createdAt: 'asc',
    },
  })
  return (
    <section id="menu" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto flex flex-col items-center justify-center">
          <p className="text-muted-foreground font-cormorant text-sm tracking-[0.4em]">
            MENU
          </p>
          <h2 className="mt-4 text-4xl tracking-widest">人気メニュー</h2>
          <p className="text-muted-foreground mt-6 leading-8">
            髪質やライフスタイルに合わせて、扱いやすく自然なスタイルをご提案します。
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
    </section>
  )
}
