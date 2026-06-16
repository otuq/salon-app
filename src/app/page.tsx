import { ConceptSection } from '@/components/layout/ConceptSection'
import { HeroSection } from '@/components/layout/HeroSection'
import { MenuSection } from '@/components/layout/MenuSection'
import { ReservationSection } from '@/components/layout/ReservationSection'
import { StylistSection } from '@/components/layout/StylistSection'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ConceptSection />
      <MenuSection />
      <StylistSection />
      <ReservationSection />
    </main>
  )
}
