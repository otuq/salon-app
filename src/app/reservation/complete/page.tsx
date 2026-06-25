import Link from 'next/link'

export default function ReservationCompletePage() {
  return (
    <main className='min-h-screen bg-[#f7f3ed] px-4 py-24'>
      <div className='mx-auto max-w-2xl rounded-2xl bg-white p-8 text-center shadow-sm'>
        <p className='mb-3 text-sm tracking-[0.3em] text-stone-500'>
          RESERVATION COMPLETE
        </p>

        <h1 className='mb-6 text-3xl font-semibold text-stone-800'>
          ご予約が完了しました
        </h1>

        <p className='mb-8 leading-8 text-stone-600'>
          ご予約ありがとうございます。
          <br />
          当日はお気をつけてお越しください。
        </p>

        <Link
          href='/'
          className='inline-flex rounded-full bg-stone-800 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700'
        >
          トップページへ戻る
        </Link>
      </div>
    </main>
  )
}
