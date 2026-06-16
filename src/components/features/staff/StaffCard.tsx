import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

type StaffCardProps = {
  displayName: string
  imageUrl: string | null
  bio: string | null
}

export function StaffCard({ displayName, imageUrl, bio }: StaffCardProps) {
  const imgSrc = imageUrl || '/image/home/no-image.png'
  return (
    <Card className="overflow-hidden">
      <div className="flex">
        <div className="relative ml-6 h-48 w-36 shrink-0 overflow-hidden rounded-lg">
          <Image alt={displayName} fill src={imgSrc} className="object-cover" />
        </div>
        <div className="flex flex-col items-end justify-between">
          <CardContent className="text-muted-foreground leading-6">
            <p className="font-cormorant text-[15px] tracking-widest">
              {displayName}
            </p>
            {bio}
          </CardContent>
          <Button asChild className="mr-6 bg-[#000000aa] p-4">
            <Link href="/staff">
              <span className="font-cormorant text-[15px] tracking-widest">
                more →
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  )
}
