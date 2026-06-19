import Link from 'next/link'

export function Logo({ href }: { href?: string }) {
  const content = (
    <div className='flex flex-col items-center'>
      <p className='font-cormorant text-4xl tracking-widest'>Lueur</p>
      <p className='text-muted-foreground font-cormorant text-lg'>hair salon</p>
    </div>
  )
  return href ? (
    <Link href={href} className='shrink-0'>
      {content}
    </Link>
  ) : (
    content
  )
}
