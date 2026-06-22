import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <main className='mt-40 flex min-h-screen justify-center px-4'>
      <div className='max-w-md text-center'>
        <p className='text-muted-foreground text-9xl font-medium'>404</p>

        <h1 className='mt-2 text-2xl font-semibold'>ページが見つかりません</h1>

        <p className='text-muted-foreground mt-2'>
          お探しのページは削除されたか、URLが間違っている可能性があります。
        </p>

        <Button asChild className='mt-6'>
          <Link href='/'>トップページへ戻る</Link>
        </Button>
      </div>
    </main>
  )
}
