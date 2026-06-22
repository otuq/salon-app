import { ConceptSection } from '@/components/layout/concept/ConceptSection'
import { Footer } from '@/components/layout/home/Footer'
import { HeroSection } from '@/components/layout/home/HeroSection'
import { MenuSection } from '@/components/layout/menu/MenuSection'
import { ReservationSection } from '@/components/layout/reservations/ReservationSection'
import { StaffSection } from '@/components/layout/staff/StaffSection'

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
