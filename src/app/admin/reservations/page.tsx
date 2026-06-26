import { prisma } from '@/lib/prisma'

export default async function ReservationsPage() {
  const reservations = await prisma.reservation.findMany({
    include: {
      staff: true,
      menu: true,
    },
    orderBy: {
      startTime: 'asc',
    },
  })
  return (
    <section>
      <h1 className='text-3xl font-bold'>Reservations</h1>
      <p className='text-muted-foreground mt-2'>
        {reservations.length}件の予約があります。
      </p>
    </section>
  )
}
