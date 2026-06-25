import { Calendar } from '@/components/ui/calendar'
import { useState } from 'react'

type Props = {
  selectedDate: Date | undefined
  onSelectDate: (date: Date | undefined) => void
}

export function DateSelector({ selectedDate, onSelectDate }: Props) {
  return (
    <section>
      <h2 className='text-xl font-medium'>Date</h2>
      <div className='mt-6 rounded-xl border p-6'>
        <Calendar
          mode='single'
          selected={selectedDate}
          onSelect={onSelectDate}
          className='rounded-md'
        />
      </div>
    </section>
  )
}
