import { HeroSection } from "@/components/sections/hero-section"
import { MarketContextSection } from "@/components/sections/market-context-section"
import { SolutionSection } from "@/components/sections/solution-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { SuccessStoriesSection } from "@/components/sections/success-stories-section"
import { ContactSection } from "@/components/sections/contact-section"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"
import { FloatingCTA } from "@/components/floating-cta"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <MarketContextSection />
        <SolutionSection />
        <FeaturesSection />
        <SuccessStoriesSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <ScrollToTopButton />
      <FloatingCTA />
    </div>
  )
}
