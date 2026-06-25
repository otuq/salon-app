import { Menu } from '@/generated/prisma/client'
import { cn } from '@/lib/utils'
import { useState } from 'react'

type Props = {
  menuList: Menu[]
  selectedMenuId: string
  onSelectMenu: (MenuId: string) => void
}
export function MenuSelector({
  menuList,
  selectedMenuId,
  onSelectMenu,
}: Props) {
  return (
    <section>
      <h2 className='text-xl font-medium'>Menu</h2>
      <div className='mt-6 grid gap-4 md:grid-cols-2'>
        {menuList.map((menu) => {
          const isSelected = selectedMenuId === menu.id
          return (
            <button
              key={menu.id}
              type='button'
              onClick={() => {
                onSelectMenu(menu.id)
              }}
              className={cn(
                'rounded-xl border p-4 text-left transition hover:border-black',
                isSelected && 'border-black bg-black text-white',
              )}
            >
              <p className='font-medium'>{menu.name}</p>
              <p className='text-muted-foreground mt-2 text-sm'>
                ¥{menu.price.toLocaleString()}
              </p>
              <p className='text-muted-foreground mt-1 text-sm'>
                {menu.description}分
              </p>
            </button>
          )
        })}
      </div>
    </section>
  )
}
