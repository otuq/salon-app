import { ConceptSection } from '@/components/layout/ConceptSection'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/layout/HeroSection'
import { MenuSection } from '@/components/layout/MenuSection'
import { ReservationSection } from '@/components/layout/ReservationSection'
import { StaffSection } from '@/components/layout/StaffSection'

export default function HomePage() {
  return (
    <main className="bg-[#f7f3ed]">
      <HeroSection />
      <ConceptSection />
      <MenuSection />
      <StaffSection />
      <ReservationSection />
      <Footer />
    </main>
  )
}
