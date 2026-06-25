import { ArrowButton } from '@/components/ui/arrow-button'
import { prisma } from '@/lib/prisma'
import { createReservation } from '@/actions/reservations/createReservation'
import { redirect } from 'next/navigation'

type Props = {
  searchParams: Promise<{
    staffId?: string
    menuId?: string
    date?: string
    time?: string
  }>
}

export default async function ReservationCheckPage({ searchParams }: Props) {
  const { staffId, menuId, date, time } = await searchParams

  if (!staffId || !menuId || !date || !time) {
    return <div>不正なアクセスです。</div>
  }
  const reservationInput = {
    staffId: staffId as string,
    menuId: menuId as string,
    date: date as string,
    time: time as string,
  }

  async function handleSubmit() {
    'use server'
    await createReservation(reservationInput)
  }

  const [staff, menu] = await Promise.all([
    prisma.staff.findUnique({
      where: {
        id: staffId,
      },
    }),

    prisma.menu.findUnique({
      where: {
        id: menuId,
      },
    }),
  ])

  return (
    <main className='pt-32'>
      <section className='mx-auto max-w-3xl space-y-8'>
        <h1 className='text-3xl font-semibold'>CONFIRM</h1>

        <div className='space-y-4 rounded-xl border p-6'>
          <p>Stylist : {staff?.displayName}</p>

          <p>Menu : {menu?.name}</p>

          <p>Price : ¥{menu?.price.toLocaleString()}</p>

          <p>Date :{new Date(date).toLocaleDateString()}</p>

          <p>Time :{time}</p>
        </div>
        <form action={handleSubmit}>
          <ArrowButton type='submit' children={'確認'} />
        </form>
      </section>
    </main>
  )
}
