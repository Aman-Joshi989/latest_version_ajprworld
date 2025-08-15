import HeroSection from '@/components/sections/HeroSection'
import ServiceShowcaseSection from '@/components/sections/ServiceShowcaseSection'
import TechnologyStackSection from '@/components/sections/TechnologyStackSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'
import StatsSection from '@/components/sections/StatsSection'
import PortfolioPreviewSection from '@/components/sections/PortfolioPreviewSection'
import AboutPreviewSection from '@/components/sections/AboutPreviewSection'
import BlogPreviewSection from '@/components/sections/BlogPreviewSection'


export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <ServiceShowcaseSection />
      <TechnologyStackSection />
      <PortfolioPreviewSection />
      <AboutPreviewSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <CTASection />
    </div>
  )
}
