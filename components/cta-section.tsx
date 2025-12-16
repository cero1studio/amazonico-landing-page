"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock } from "lucide-react"

export function CTASection() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing")
    if (pricingSection) {
      const offset = 80 // Offset para navbar sticky
      const elementPosition = pricingSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/abstract-wave-pattern.png')] opacity-5 bg-cover bg-center" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge className="bg-destructive text-destructive-foreground border-0 text-lg px-8 py-3 animate-pulse shadow-xl">
            <Clock className="mr-2 h-5 w-5" />
            ⚠️ LIQUIDACIÓN - Stock Limitado
          </Badge>

          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-balance">
            <span className="text-destructive">¡Últimas Unidades!</span> 3 Frascos x <span className="text-primary">$99.000</span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Ahorra <strong className="text-destructive">$66.000</strong> en esta liquidación especial. Mismo colágeno premium, empaque anterior. <strong>¡Hasta agotar stock!</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="text-xl px-12 py-8 bg-destructive hover:bg-destructive/90 text-destructive-foreground shadow-xl shadow-destructive/40 animate-pulse font-bold"
              onClick={scrollToPricing}
            >
              ¡Comprar Antes de que se Agote!
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 max-w-3xl mx-auto">
            <div className="bg-background/80 backdrop-blur rounded-lg p-6 border border-border">
              <div className="text-3xl font-bold text-primary mb-2">30</div>
              <div className="text-sm text-muted-foreground">Días de Garantía</div>
            </div>
            <div className="bg-background/80 backdrop-blur rounded-lg p-6 border border-border">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Natural y Seguro</div>
            </div>
            <div className="bg-background/80 backdrop-blur rounded-lg p-6 border border-border">
              <div className="text-3xl font-bold text-primary mb-2">$0</div>
              <div className="text-sm text-muted-foreground">Costo de Envío</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
