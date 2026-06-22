import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { MenuImageDialog } from './MenuImageDialog'

type MenuCardProps = {
  name: string
  englishName: string | null
  imageUrl: string | null
  description: string | null
  price: number
}

export function MenuCard({
  name,
  englishName,
  imageUrl,
  description,
  price,
}: MenuCardProps) {
  const imgSrc = imageUrl || '/image/home/no-image.png'
  return (
    <Card className='overflow-hidden'>
      <CardHeader className='font-cormorant text-2xl tracking-widest'>
        <div className='text-center'>
          <p>{englishName}</p>
          <p className='text-muted-foreground text-[10px]'>{name}</p>
        </div>
      </CardHeader>
      <CardContent className='text-muted-foreground mx-auto flex flex-col items-center gap-3 leading-6'>
        <MenuImageDialog src={imgSrc} alt={name} />
        <p>{description}</p>
      </CardContent>
      <CardFooter className='justify-center'>
        <p className='font-cormorant text-2xl'>¥{price.toLocaleString()}</p>
      </CardFooter>
    </Card>
  )
}
