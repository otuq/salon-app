import Link from 'next/link'

const adminNavItems = [
  {
    label: 'Dashboard',
    href: '/admin',
  },
  {
    label: 'Reservations',
    href: '/admin/reservations',
  },
  {
    label: 'Menus',
    href: '/admin/menus',
  },
  {
    label: 'Staff',
    href: '/admin/staff',
  },
]

export function AdminSidebar() {
  return (
    <aside className='bg-background min-h-screen w-64 border-r px-6 py-8'>
      <div className='mb-10'>
        <p className='text-muted-foreground text-sm'>Admin</p>
        <h1 className='text-xl font-semibold'>Salon Manager</h1>
      </div>

      <nav className='space-y-2'>
        {adminNavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className='text-muted-foreground hover:bg-muted hover:text-foreground block rounded-md px-3 py-2 text-sm font-medium transition'
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
