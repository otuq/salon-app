import { AdminHeader } from '@/components/features/admin/AdminHeader'
import { AdminSidebar } from '@/components/features/admin/AdminSidebar'

type Props = {
  children: React.ReactNode
}

export default function AdminLayout({ children }: Props) {
  return (
    <div className='bg-background min-h-screen'>
      <div className='flex'>
        <AdminSidebar />
        <div className='flex min-h-screen flex-1 flex-col'>
          <AdminHeader />
          <main className='flex-1 px-6 py-8'>{children}</main>
        </div>
      </div>
    </div>
  )
}
