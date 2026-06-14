// src/types/reservation.ts
import type { ReservationStatus } from "@/generated/prisma/enums"

export type ReservationFormValues = {
  menuId: string
  staffId: string
  startTime: string
  note?: string
}

export type ReservationStatusValue = ReservationStatus
