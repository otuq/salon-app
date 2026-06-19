import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card'
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
      <div className='mx-auto ml-6 flex flex-col items-center justify-center'>
        <CardTitle className='font-cormorant text-2xl tracking-widest'>
          {englishName}
        </CardTitle>
        <p className='text-muted-foreground text-[10px]'>{name}</p>
      </div>
      <div className='flex'>
        <MenuImageDialog src={imgSrc} alt={name} />
        <CardContent className='text-muted-foreground leading-6'>
          {description}
        </CardContent>
      </div>
      <CardFooter>
        <p className='font-cormorant text-2xl'>¥{price.toLocaleString()}</p>
      </CardFooter>
    </Card>
  )
}
