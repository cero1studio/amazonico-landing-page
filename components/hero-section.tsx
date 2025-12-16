"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, ShieldCheck, Truck } from "lucide-react"
import Image from "next/image"

export function HeroSection() {

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
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="absolute inset-0 bg-[url('/ocean-waves-texture.jpg')] opacity-5 bg-cover bg-center" />

      <div className="container relative mx-auto px-4 py-6 md:py-10 lg:py-12">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col gap-4 md:gap-6 text-center lg:text-left">
            <Badge className="self-center lg:self-start w-fit bg-destructive text-destructive-foreground border-0 px-6 py-3 rounded-full text-sm md:text-base animate-pulse shadow-lg">
              <Sparkles className="mr-2 h-4 w-4" />
              🔥 LIQUIDACIÓN - Stock Limitado
            </Badge>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-balance">
              Piel Joven + Cabello Fuerte: <span className="text-destructive">3 Frascos x $99.000</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground text-pretty leading-relaxed">
              <strong className="text-foreground">Regala bienestar en este fin de año.</strong> Colágeno marino premium que rejuvenece tu piel, fortalece tu cabello y mejora tus articulaciones. <strong className="text-destructive">Liquidación por cambio de empaque - ¡Últimas unidades!</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start mt-2 md:mt-4">
              <Button
                size="lg"
                className="text-base md:text-xl px-8 md:px-10 py-6 md:py-8 bg-destructive hover:bg-destructive/90 text-destructive-foreground shadow-xl shadow-destructive/40 rounded-full font-bold transition-all duration-300 hover:scale-105 animate-pulse"
                onClick={scrollToPricing}
              >
                ¡Comprar Liquidación Ahora!
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 bg-transparent rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:bg-primary/5"
                onClick={() => {
                  const element = document.getElementById("benefits")
                  if (element) {
                    const offset = 80
                    const elementPosition = element.getBoundingClientRect().top
                    const offsetPosition = elementPosition + window.scrollY - offset
                    window.scrollTo({ top: offsetPosition, behavior: "smooth" })
                  }
                }}
              >
                Ver Beneficios
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-4 md:mt-6 justify-center lg:justify-start text-sm md:text-base">
              <div className="flex items-center gap-2 justify-center lg:justify-start bg-primary/10 px-4 py-2 rounded-full">
                <Sparkles className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium text-foreground">Resultados en 3 semanas</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start bg-accent/10 px-4 py-2 rounded-full">
                <ShieldCheck className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="font-medium text-foreground">100% Natural</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start bg-accent/10 px-4 py-2 rounded-full">
                <Truck className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="font-medium text-foreground">Envío Gratis</span>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border aspect-square">
              <Image
                src="/product-beach.jpeg"
                alt="Amazoniico Colágeno Marino"
                width={600}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-destructive text-destructive-foreground rounded-3xl p-4 md:p-6 shadow-xl border-4 border-background animate-pulse">
              <div className="text-xs md:text-sm font-bold mb-1">🔥 LIQUIDACIÓN</div>
              <div className="text-xs md:text-sm line-through opacity-80">Antes: $165.000</div>
              <div className="text-3xl md:text-4xl font-bold">$99.000</div>
              <div className="text-xs md:text-sm font-bold">3 Frascos + Envío GRATIS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
