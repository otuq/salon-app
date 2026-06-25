'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'

type Props = {
  src: string
  alt: string
}

export function MenuImageDialog({ src, alt }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className={cn(
            'relative aspect-square w-64 cursor-pointer overflow-hidden rounded-lg',
          )}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className='object-cover object-center transition-transform duration-300 hover:scale-105'
          />
        </button>
      </DialogTrigger>
      <DialogContent className='fixed! inset-0! top-0! left-0! h-screen! w-screen! max-w-none! translate-x-0! translate-y-0! rounded-none border-none bg-[#00000099] shadow-none [&>button]:hidden'>
        <div
          className='flex h-full w-full items-center justify-center'
          onPointerDown={() => setOpen(false)}
        >
          <div className='relative h-full w-full max-w-5xl'>
            <Image
              src={src}
              alt={alt}
              fill
              className='object-contain object-center'
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
