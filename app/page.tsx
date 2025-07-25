import { HeroSection } from "@/components/hero-section"
import { AdvantagesSection } from "@/components/advantages-section"
import { ProductionSection } from "@/components/production-section"
import { PopularModelsSection } from "@/components/popular-models-section"
import { ClientsSection } from "@/components/clients-section"
import { QuickOrderForm } from "@/components/quick-order-form"
import { SeoSection } from "@/components/seo-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AdvantagesSection />
      <ProductionSection />
      <PopularModelsSection />
      <ClientsSection />
      <QuickOrderForm />
      <SeoSection />
    </div>
  )
}
