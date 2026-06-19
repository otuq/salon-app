import { prisma } from '@/lib/prisma'
import { StaffCard } from '../features/staff/StaffCard'
import { Description } from './Description'

export async function StaffSection() {
  const staff = await prisma.staff.findMany({
    orderBy: {
      createdAt: 'asc',
    },
  })
  return (
    <section id='staff' className='py-32'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='flex flex-col items-center justify-center'>
          <Description
            englishTitle='STYLIST'
            title='スタイリスト'
            description='笑顔と丁寧なカウンセリングで、髪の悩みに寄り添う自慢のスタッフ達です。
            初めての方も緊張せず、どうぞリラックスして何でもご相談ください。'
          />
          <div className='mt-16 grid gap-8 md:grid-cols-3'>
            {staff.map((stylist) => (
              <StaffCard
                key={stylist.id}
                displayName={stylist.displayName}
                imageUrl={stylist.imageUrl}
                bio={stylist.bio}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
