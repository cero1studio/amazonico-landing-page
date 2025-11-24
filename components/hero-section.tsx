"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, ShieldCheck, Truck } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing")
    pricingSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="absolute inset-0 bg-[url('/ocean-waves-texture.jpg')] opacity-5 bg-cover bg-center" />

      <div className="container relative mx-auto px-4 py-12 md:py-20 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col gap-4 md:gap-6 text-center lg:text-left">
            <Badge className="self-center lg:self-start w-fit bg-accent text-accent-foreground border-0 px-4 py-2 rounded-full text-sm md:text-base">
              <Sparkles className="mr-2 h-4 w-4" />
              Producto Premium Certificado INVIMA
            </Badge>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-balance">
              Piel Joven, Cabello Fuerte y <span className="text-primary">Articulaciones Sanas</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground text-pretty leading-relaxed">
              Colágeno marino hidrolizado de máxima absorción con{" "}
              <span className="font-semibold text-foreground">delicioso sabor a coco natural</span>. Resultados visibles
              en 3 semanas: menos arrugas, cabello más grueso, uñas fuertes y mayor movilidad articular.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start mt-2 md:mt-4">
              <Button
                size="lg"
                className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                onClick={scrollToPricing}
              >
                Comprar con Envío Gratis
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 bg-transparent rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:bg-primary/5"
                onClick={() => document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver Beneficios
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-4 md:mt-6 justify-center lg:justify-start text-sm md:text-base">
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border">
              <Image
                src="/product-beach.jpeg"
                alt="Amazoniico Colágeno Marino"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-accent text-accent-foreground rounded-3xl p-4 md:p-6 shadow-xl border-2 border-background">
              <div className="text-xs md:text-sm text-accent-foreground/80 line-through">Antes: $60.000</div>
              <div className="text-2xl md:text-3xl font-bold">$55.000</div>
              <div className="text-xs md:text-sm font-medium">Con envío gratis</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
