import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { HeroSection } from './sections/HeroSection'
import { TrustSection } from './sections/TrustSection'
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
