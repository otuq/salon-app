import { Staff } from '@/generated/prisma/client'
import { cn } from '@/lib/utils'

type Props = {
  staffList: Staff[]
  selectedStaffId: string
  onSelectStaff: (StaffId: string) => void
}

export function StaffSelector({
  staffList,
  selectedStaffId,
  onSelectStaff,
}: Props) {
  return (
    <section>
      <h2 className='text-xl font-medium'>Stylist</h2>

      <div className='mt-6 grid gap-4 md:grid-cols-3'>
        {staffList.map((staff) => {
          const isSelected = selectedStaffId === staff.id
          return (
            <button
              key={staff.id}
              type='button'
              onClick={() => {
                onSelectStaff(staff.id)
              }}
              className={cn(
                'rounded-xl border p-4 text-left transition hover:border-black',
                isSelected && 'border-black bg-black text-white',
              )}
            >
              <p className='font-medium'>{staff.displayName}</p>
              <p className='text-muted-foreground mt-2 text-sm'>
                {staff.position}
              </p>
            </button>
          )
        })}
      </div>
    </section>
  )
}
