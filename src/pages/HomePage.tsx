import { HeroSection } from '../sections/HeroSection'
import { TrustSection } from '../sections/TrustSection'
import { DayToursSection } from '../sections/DayToursSection'
import { multiDayTours, oneDayTours } from '../data/dayTours'
import { ToursSection } from '../sections/ToursSection'
import { MarqueeBand } from '../sections/MarqueeBand'
import { WhyChooseSection } from '../sections/WhyChooseSection'
import { AboutSection } from '../sections/AboutSection'
import { ReviewsSection } from '../sections/ReviewsSection'
import { CTASection } from '../sections/CTASection'
import { useT } from '../i18n'

export function HomePage() {
  const t = useT()
  return (
    <>
      <HeroSection />
      <TrustSection />
      <DayToursSection
        id="multi-day-tours"
        headingId="multi-day-heading"
        heading={t.catalog.sectionMultiDay}
        items={multiDayTours}
      />
      <DayToursSection
        id="one-day-tours"
        headingId="one-day-heading"
        heading={t.catalog.sectionOneDay}
        items={oneDayTours}
      />
      <ToursSection />
      <MarqueeBand />
      <WhyChooseSection />
      <AboutSection />
      <ReviewsSection />
      <CTASection />
    </>
  )
}
