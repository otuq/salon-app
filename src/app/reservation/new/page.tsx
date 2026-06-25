import { Footer } from '@/components/layout/home/06_footer/Footer'
import { Logo } from '@/components/ui/logo'
import { FixedHeader } from '@/components/layout/common/FixedHeader'
import { prisma } from '../../../lib/prisma'
import { ReservationNewForm } from '@/components/features/reservation/ReservationNewForm'

export default async function ReservationNewPage() {
  const [menuList, staffList] = await Promise.all([
    prisma.menu.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    }),
    prisma.staff.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    }),
  ])
  return (
    <main className='bg-[rgb(247,243,237)]'>
      <FixedHeader>
        <div className='flex justify-between'>
          <Logo href='/' />
        </div>
      </FixedHeader>
      <ReservationNewForm menuList={menuList} staffList={staffList} />
      <Footer />
    </main>
  )
}
