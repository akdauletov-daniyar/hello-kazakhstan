import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { HeroSection } from './sections/HeroSection'
import { TrustSection } from './sections/TrustSection'
import { DayToursSection } from './sections/DayToursSection'
import { multiDayTours, oneDayTours } from './data/dayTours'
import { ToursSection } from './sections/ToursSection'
import { MarqueeBand } from './sections/MarqueeBand'
import { WhyChooseSection } from './sections/WhyChooseSection'
import { AboutSection } from './sections/AboutSection'
import { ReviewsSection } from './sections/ReviewsSection'
import { CTASection } from './sections/CTASection'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <span id="top" />
      <Nav />
      <main id="main">
        <HeroSection />
        <TrustSection />
        <DayToursSection
          id="multi-day-tours"
          headingId="multi-day-heading"
          heading="Multiple day tours"
          items={multiDayTours}
        />
        <DayToursSection
          id="one-day-tours"
          headingId="one-day-heading"
          heading="1 Day tours"
          items={oneDayTours}
        />
        <ToursSection />
        <MarqueeBand />
        <WhyChooseSection />
        <AboutSection />
        <ReviewsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
