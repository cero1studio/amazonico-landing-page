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
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amazoniico.co"
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Amazoniico - Colágeno Marino Hidrolizado Premium",
    "description": "Colágeno marino hidrolizado de máxima absorción con delicioso sabor a coco natural. Resultados visibles en 3 semanas: menos arrugas, cabello más grueso, uñas fuertes y mayor movilidad articular.",
    "brand": {
      "@type": "Brand",
      "name": "Amazoniico"
    },
    "image": `${baseUrl}/amazoniico-logo.png`,
    "offers": {
      "@type": "Offer",
      "price": "55000",
      "priceCurrency": "COP",
      "availability": "https://schema.org/InStock",
      "url": baseUrl,
      "seller": {
        "@type": "Organization",
        "name": "Amazoniico"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    }
  }

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
