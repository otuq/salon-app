import { timeSlots } from '@/app/constant/timeSlots'
import { cn } from '@/lib/utils'

type Props = {
  selectedTime: string
  onSelectTime: (time: string) => void
}
export function TimeSelector({ selectedTime, onSelectTime }: Props) {
  return (
    <section>
      <h2 className='text-xl font-medium'>Time</h2>
      <div className='mt-6 grid grid-cols-3 gap-3 md:grid-cols-5'>
        {timeSlots.map((time) => {
          const isSelected = selectedTime === time
          return (
            <button
              key={time}
              type='button'
              onClick={() => onSelectTime(time)}
              className={cn(
                'rounded-full border px-4 py-2 text-sm transition hover:border-black',
                isSelected && 'border-black bg-black text-white',
              )}
            >
              {time}
            </button>
          )
        })}
      </div>
    </section>
  )
}
