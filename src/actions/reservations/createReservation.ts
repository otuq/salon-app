// src/actions/reservation/createReservation.ts

'use server'

import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'

type CreateReservationInput = {
  staffId: string
  menuId: string
  date: string
  time: string
}

export async function createReservation(input: CreateReservationInput) {
  const { staffId, menuId, date, time } = input
  const menu = await prisma.menu.findUnique({
    where: { id: menuId },
  })

  if (!menu) {
    throw new Error('メニューが見つかりません')
  }

  const startTime = new Date(date)
  const [hour, minute] = time.split(':').map(Number)
  startTime.setHours(hour, minute, 0, 0)
  //dateは値型から参照型にするためnew Nate
  const endTime = new Date(startTime)
  endTime.setMinutes(endTime.getMinutes() + menu.durationMin)
  const existingReservation = await prisma.reservation.findFirst({
    where: {
      staffId,
      startTime: {
        lt: endTime,
      },
      endTime: {
        gt: startTime,
      },
      status: {
        in: ['PENDING', 'CONFIRMED'],
      },
    },
  })

  if (existingReservation) {
    throw new Error('この時間はすでに予約されています')
  }

  await prisma.reservation.create({
    data: {
      staffId,
      menuId,
      startTime,
      endTime,
      status: 'PENDING',
    },
  })

  redirect('/reservation/complete')
}
