import { ArrowButton } from '../../ui/arrow-button'
import { SectionHeading } from '../home/SectionHeading'

export function ReservationSection() {
  return (
    <section id='reservation' className='py-32'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='flex flex-col items-center justify-center'>
          <SectionHeading
            englishTitle='RESERVATION'
            title='ご予約はこちら'
            description='メニューやスタイリストをお選びいただき、ご希望の日時から簡単にご予約いただけます。'
          />
          <ArrowButton
            variant={'outline'}
            href='/reservation'
            children='webで予約'
            className='mt-6'
          />
        </div>
      </div>
    </section>
  )
}
