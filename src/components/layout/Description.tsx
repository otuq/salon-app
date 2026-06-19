type Props = {
  englishTitle: string
  title: string
  description: string
}

export function Description({ englishTitle, title, description }: Props) {
  return (
    <>
      <p className='text-muted-foreground font-cormorant text-sm tracking-[0.4em]'>
        {englishTitle}
      </p>
      <h2 className='mt-4 text-4xl tracking-widest'>{title}</h2>
      <p className='text-muted-foreground mt-10 leading-9'>{description}</p>
    </>
  )
}
