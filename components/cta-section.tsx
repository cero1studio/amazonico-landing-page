"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock } from "lucide-react"

export function CTASection() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing")
    pricingSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/abstract-wave-pattern.png')] opacity-5 bg-cover bg-center" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge className="bg-destructive text-destructive-foreground border-0 text-base px-6 py-2">
            <Clock className="mr-2 h-4 w-4" />
            Oferta por Tiempo Limitado
          </Badge>

          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-balance">
            Transforma tu Piel Hoy con <span className="text-primary">18% de Descuento</span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Únete a más de 15,000 colombianos que ya experimentaron resultados increíbles. Envío gratis y garantía de 30
            días.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="text-xl px-10 py-7 bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/30"
              onClick={scrollToPricing}
            >
              Aprovechar Oferta Ahora
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
