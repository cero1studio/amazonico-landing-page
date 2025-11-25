"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Truck, CreditCard, ShieldCheck, Sparkles, Heart } from "lucide-react"
import { CheckoutModal } from "@/components/checkout-modal"

const pricingOptions = [
  {
    id: 1,
    name: "1 Frasco",
    originalPrice: 60000,
    price: 55000,
    savings: 5000,
    discount: "8%",
    shipping: "Incluido",
    popular: false,
    features: [
      "1 Frasco de 500g (17 porciones)",
      "1 mes de tratamiento",
    ],
  },
  {
    id: 2,
    name: "2 Frascos",
    originalPrice: 110000,
    price: 90000,
    savings: 20000,
    discount: "18%",
    shipping: "Incluido",
    popular: true,
    features: [
      "2 Frascos de 500g (34 porciones)",
      "2 meses de tratamiento completo",
      "Mejor relación precio-beneficio",
    ],
  },
]

export function PricingSection() {
  const [selectedOption, setSelectedOption] = useState<(typeof pricingOptions)[0] | null>(null)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleBuyClick = (option: (typeof pricingOptions)[0]) => {
    if (isMobile) {
      // En mobile, guardar la opción en sessionStorage y redirigir
      sessionStorage.setItem('selectedProduct', JSON.stringify({
        name: option.name,
        price: option.price,
        originalPrice: option.originalPrice,
        savings: option.savings,
      }))
      router.push("/checkout")
    } else {
      setSelectedOption(option)
      setIsCheckoutOpen(true)
    }
  }

  return (
    <>
      <section id="pricing" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4 bg-destructive text-destructive-foreground border-0 text-sm md:text-base px-4 md:px-6 py-2 rounded-full animate-pulse">
              Oferta Limitada - Envío Gratis Hoy
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Aprovecha Nuestra <span className="text-primary">Promoción Especial</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-8 md:mb-12">
            {pricingOptions.map((option) => (
              <Card
                key={option.id}
                className={`relative border-2 transition-all duration-300 hover:shadow-2xl ${option.popular ? "border-primary shadow-xl md:scale-105" : "border-border hover:border-primary/50"
                  }`}
              >
                {option.popular && (
                  <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 z-10">
                    <Badge className="bg-primary text-primary-foreground border-0 px-4 md:px-6 py-1.5 md:py-2 text-xs md:text-sm shadow-lg rounded-full">
                      MÁS VENDIDO - 67% lo eligen
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4 pt-6 md:pt-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{option.name}</h3>

                  <div className="mb-4">
                    <div className="text-sm md:text-base text-muted-foreground mb-2 font-semibold">
                      <span className="line-through decoration-3 decoration-destructive/80 text-muted-foreground/70">
                        Antes: ${option.originalPrice.toLocaleString("es-CO")}
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-2 md:gap-3 mb-3">
                      <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                        ${option.price.toLocaleString("es-CO")}
                      </span>
                    </div>
                    <Badge
                      className="w-fit mx-auto bg-destructive text-white border-0 rounded-full text-sm md:text-base font-bold px-5 py-2 shadow-lg shadow-destructive/30"
                    >
                      Ahorras ${option.savings.toLocaleString("es-CO")}
                    </Badge>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Badge className="w-fit mx-auto bg-primary/10 text-primary border-primary/30 rounded-full text-xs md:text-sm font-medium">
                      + Envío GRATIS incluido
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 px-4 md:px-6 pb-6">
                  <div className="space-y-2">
                    {option.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="bg-primary/10 rounded-full p-1 mt-0.5 flex-shrink-0">
                          <Check className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                        </div>
                        <span className="text-sm md:text-base leading-relaxed text-foreground font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Button
                      size="lg"
                      className={`w-full text-base md:text-lg py-5 md:py-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${option.popular
                          ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30"
                          : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                        }`}
                      onClick={() => handleBuyClick(option)}
                    >
                      Comprar Ahora
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mb-8 md:mb-12">
            <Card className="border-2 border-border/50 bg-muted/30">
              <CardContent className="p-6 md:p-8">
                <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 rounded-full p-1.5 mt-0.5 flex-shrink-0">
                        <Check className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                      </div>
                      <span className="text-sm md:text-base text-foreground leading-relaxed">4,500mg de colágeno marino por porción</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 rounded-full p-1.5 mt-0.5 flex-shrink-0">
                        <Check className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                      </div>
                      <span className="text-sm md:text-base text-foreground leading-relaxed">Vitaminas A, E, B1, B6, B12 + Biotina</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 rounded-full p-1.5 mt-0.5 flex-shrink-0">
                        <Check className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                      </div>
                      <span className="text-sm md:text-base text-foreground leading-relaxed">Registro INVIMA certificado</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 rounded-full p-1.5 mt-0.5 flex-shrink-0">
                        <Check className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                      </div>
                      <span className="text-sm md:text-base text-foreground leading-relaxed">Garantía de satisfacción 30 días</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-accent/10 p-2 rounded-lg flex-shrink-0">
                        <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-accent" />
                      </div>
                      <span className="text-sm md:text-base font-medium text-foreground">Piel más firme en 3 semanas</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-accent/10 p-2 rounded-lg flex-shrink-0">
                        <Heart className="h-4 w-4 md:h-5 md:w-5 text-accent" />
                      </div>
                      <span className="text-sm md:text-base font-medium text-foreground">Cabello más fuerte y uñas duras</span>
                    </div>
                    <div className="pt-2 mt-4 border-t border-border/50">
                      <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                        <Truck className="h-4 w-4" />
                        <span>Entrega 2-7 días • Pago seguro</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            <Card className="border-2 border-border/50 hover:border-primary/50 transition-all">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="bg-primary/10 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CreditCard className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                </div>
                <h4 className="font-bold mb-2 text-sm md:text-base text-foreground">Pago 100% Seguro</h4>
                <p className="text-xs md:text-sm text-muted-foreground">PSE, Tarjetas, Bancolombia</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border/50 hover:border-primary/50 transition-all">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="bg-accent/10 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Truck className="h-6 w-6 md:h-8 md:w-8 text-accent" />
                </div>
                <h4 className="font-bold mb-2 text-sm md:text-base text-foreground">Envío Gratis</h4>
                <p className="text-xs md:text-sm text-muted-foreground">Por Coordinadora a toda Colombia</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border/50 hover:border-primary/50 transition-all">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="bg-accent/10 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ShieldCheck className="h-6 w-6 md:h-8 md:w-8 text-accent" />
                </div>
                <h4 className="font-bold mb-2 text-sm md:text-base text-foreground">Garantía 30 Días</h4>
                <p className="text-xs md:text-sm text-muted-foreground">Devolución sin complicaciones</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {selectedOption && (
        <CheckoutModal
          isOpen={isCheckoutOpen}
          onClose={() => {
            setIsCheckoutOpen(false)
            setSelectedOption(null)
          }}
          product={{
            name: selectedOption.name,
            price: selectedOption.price,
            originalPrice: selectedOption.originalPrice,
            savings: selectedOption.savings,
          }}
        />
      )}
    </>
  )
}
