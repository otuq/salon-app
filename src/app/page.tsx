import { HeroSection } from '@/components/layout/home/01_hero/HeroSection'
import { ConceptSection } from '@/components/layout/home/02_concept/ConceptSection'
import { MenuSection } from '@/components/layout/home/03_menu/MenuSection'
import { StaffSection } from '@/components/layout/home/04_staff/StaffSection'
import { ReservationSection } from '@/components/layout/home/05_reservation/ReservationSection'
import { Footer } from '@/components/layout/home/06_footer/Footer'

export default function HomePage() {
  return (
    <main className='bg-[#f7f3ed]'>
      <HeroSection />
      <ConceptSection />
      <MenuSection />
      <StaffSection />
      <ReservationSection />
      <Footer />
    </main>
  )
}
