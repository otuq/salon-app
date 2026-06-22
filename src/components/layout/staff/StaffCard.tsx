import { ArrowButton } from '@/components/ui/arrow-button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

type StaffCardProps = {
  displayName: string
  imageUrl: string | null
  bio: string | null
  id?: string
}

export function StaffCard({ displayName, imageUrl, bio, id }: StaffCardProps) {
  const imgSrc = imageUrl || '/image/home/no-image.png'
  return (
    <Card className='overflow-hidden'>
      <div className='flex'>
        <div className='relative ml-6 h-48 w-36 shrink-0 overflow-hidden rounded-lg'>
          <Image alt={displayName} fill src={imgSrc} className='object-cover' />
        </div>
        <CardContent className='text-muted-foreground m-0 flex flex-col leading-6'>
          <p className='font-cormorant text-[15px] tracking-widest'>
            {displayName}
          </p>
          <p>{bio}</p>
          <ArrowButton
            href={`/staff/${id}`}
            children='more'
            className='mt-auto self-end bg-[#000000aa] py-4 md:px-5'
            textClassName='font-cormorant text-[15px] tracking-widest'
          />
        </CardContent>
      </div>
    </Card>
  )
}
