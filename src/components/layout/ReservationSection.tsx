import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function ReservationSection() {
  return (
    <section id="reservation" className="py-32">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="font-cormorant text-muted-foreground text-sm tracking-[0.4em]">
          RESERVATION
        </p>

        <h2 className="mt-6 text-4xl tracking-widest">ご予約はこちら</h2>

        <p className="text-muted-foreground mx-auto mt-8 max-w-2xl leading-8">
          メニューやスタイリストをお選びいただき、
          ご希望の日時から簡単にご予約いただけます。
        </p>

        <div className="mt-12 flex justify-center gap-6">
          <Button asChild className="bg-[#000000aa] px-10 py-6">
            <Link href="/reservations">Web予約する</Link>
          </Button>

          <Button asChild variant="outline" className="px-10 py-6">
            <Link href="/menu">メニューを見る</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
