import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ProductSection } from "@/components/product-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { TrustSection } from "@/components/trust-section"
import { ShippingInfo } from "@/components/shipping-info"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <BenefitsSection />
      <ProductSection />
      <TestimonialsSection />
      <PricingSection />
      <ShippingInfo />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
