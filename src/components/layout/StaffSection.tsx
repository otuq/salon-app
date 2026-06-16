import { prisma } from '@/lib/prisma'
import { StaffCard } from '../features/staff/StaffCard'

export async function StaffSection() {
  const staff = await prisma.staff.findMany({
    orderBy: {
      createdAt: 'asc',
    },
  })
  return (
    <section id="staff" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto flex flex-col items-center justify-center">
          <p className="text-muted-foreground font-cormorant text-sm tracking-[0.4em]">
            STYLIST
          </p>
          <h2 className="mt-4 text-4xl tracking-widest">スタイリスト</h2>
          <p className="text-muted-foreground mt-6 px-12 leading-8 md:px-36 lg:px-72">
            笑顔と丁寧なカウンセリングで、髪の悩みに寄り添う自慢のスタッフ達です。初めての方も緊張せず、どうぞリラックスして何でもご相談ください。
          </p>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
