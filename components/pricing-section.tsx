"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Truck, CreditCard, ShieldCheck, Sparkles, Heart, ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { CheckoutMinificado } from "@/components/checkout-minificado"

const pricingOptions = [
  {
    id: 1,
    name: "LIQUIDACIÓN - 3 Frascos",
    originalPrice: 165000,
    price: 99000,
    savings: 66000,
    discount: "40%",
    shipping: "Incluido",
    popular: true,
    features: [
      "3 Frascos de 500g (51 porciones)",
      "3 meses de tratamiento completo",
      "¡Última oportunidad! Stock limitado",
      "Envío GRATIS incluido",
    ],
  },
]

export function PricingSection() {
  const [isMobile, setIsMobile] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { addItem } = useCart()
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
    // Agregar producto al carrito
    addItem({
      name: option.name,
      price: option.price,
      originalPrice: option.originalPrice,
      savings: option.savings,
    })

    // En mobile, redirigir al checkout después de agregar
    if (isMobile) {
      router.push("/checkout")
    } else {
      // En desktop, abrir el carrito automáticamente
      setIsCartOpen(true)
    }
  }

  return (
    <>
      <section id="pricing" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4 bg-destructive text-destructive-foreground border-0 text-base md:text-lg px-6 md:px-8 py-3 rounded-full animate-pulse shadow-lg">
              🔥 LIQUIDACIÓN DE INVENTARIO - Últimas Unidades
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              ¡Stock Limitado! <span className="text-destructive">Cambio de Empaque</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Aprovecha esta liquidación especial antes de que se agoten. Mismo producto premium, empaque anterior.
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-6 md:gap-8 max-w-2xl mx-auto mb-8 md:mb-12">
            {pricingOptions.map((option) => (
              <Card
                key={option.id}
                className={`relative border-2 transition-all duration-300 hover:shadow-2xl ${
                  option.popular ? "border-primary shadow-xl md:scale-105" : "border-border hover:border-primary/50"
                }`}
              >
                {option.popular && (
                  <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 z-10">
                    <Badge className="bg-destructive text-destructive-foreground border-0 px-6 md:px-8 py-2 md:py-3 text-sm md:text-base shadow-xl rounded-full animate-pulse">
                      🔥 ÚLTIMAS UNIDADES
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
                      className="w-fit mx-auto bg-destructive text-white border-0 rounded-full text-base md:text-lg font-bold px-6 py-3 shadow-xl shadow-destructive/40 animate-pulse"
                    >
                      ¡Ahorras ${option.savings.toLocaleString("es-CO")}!
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
                      className="w-full text-base md:text-xl py-6 md:py-8 rounded-full font-bold transition-all duration-300 hover:scale-105 bg-destructive hover:bg-destructive/90 text-destructive-foreground shadow-xl shadow-destructive/30 animate-pulse"
                      onClick={() => handleBuyClick(option)}
                    >
                      <ShoppingCart className="mr-2 h-6 w-6" />
                      ¡Comprar Ahora Antes de que se Agote!
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

      <CheckoutMinificado
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  )
}
