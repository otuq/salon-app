import { Footer } from '@/components/layout/home/Footer'
import { SectionHeading } from '@/components/layout/home/SectionHeading'
import { StaffCard } from '@/components/layout/staff/StaffCard'
import { Logo } from '@/components/ui/logo'
import { prisma } from '@/lib/prisma'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import styles from '@/app/style.module.css'
import { ArrowButton } from '@/components/ui/arrow-button'
import { FixedHeader } from '@/components/layout/home/FixedHeader'

type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function StaffPage({ params }: Props) {
  const { id } = await params
  const staff = await prisma.staff.findUnique({
    where: {
      id: id,
    },
  })
  const noImageSrc = '/image/home/no_image.png'
  const staffList = await prisma.staff.findMany({
    orderBy: {
      createdAt: 'asc',
    },
  })
  if (!staff) return

  return (
    <main className='bg-[rgb(247,243,237)]'>
      <FixedHeader>
        <div className='flex items-center justify-between'>
          <Logo href='/' className='' />
          <ArrowButton
            href='/reservation'
            children='ご予約はこちら'
            className='bg-[#000000aa]'
          />
        </div>
      </FixedHeader>
      <section className='mx-auto max-w-7xl px-6 pt-36'>
        <div className='flex flex-col items-center'>
          <SectionHeading
            englishTitle='Stylist'
            title='スタイリスト一覧'
            className='text-2xl'
          />
          <Card className='overflow-hidden md:w-lg'>
            <CardContent className='text-muted-foreground m-3 leading-6'>
              <div className='relative mb-6 aspect-square overflow-hidden rounded-lg'>
                <Image
                  alt={staff.displayName}
                  fill
                  src={staff.imageUrl || noImageSrc}
                  className='object-cover object-top'
                />
              </div>
              <p className='font-cormorant text-[15px] tracking-widest'>
                {staff.displayName}
              </p>
              {staff.bio}
            </CardContent>
          </Card>

          <div className='grid gap-4 py-36 md:grid-cols-2'>
            {staffList.map(
              (staff) =>
                staff.id != id && (
                  <StaffCard
                    key={staff.id}
                    displayName={staff.displayName}
                    imageUrl={staff.imageUrl}
                    bio={staff.bio}
                    id={staff.id}
                  />
                ),
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
