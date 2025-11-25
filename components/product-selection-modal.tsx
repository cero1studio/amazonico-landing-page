"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

interface ProductSelectionModalProps {
  isOpen: boolean
  onClose: () => void
  onSelectProduct: (product: {
    name: string
    price: number
    originalPrice: number
    savings: number
  }) => void
}

const pricingOptions = [
  {
    id: 1,
    name: "1 Frasco",
    originalPrice: 60000,
    price: 55000,
    savings: 5000,
    features: ["1 Frasco de 500g (17 porciones)", "1 mes de tratamiento"],
  },
  {
    id: 2,
    name: "2 Frascos",
    originalPrice: 110000,
    price: 90000,
    savings: 20000,
    features: [
      "2 Frascos de 500g (34 porciones)",
      "2 meses de tratamiento completo",
      "Mejor relación precio-beneficio",
    ],
    popular: true,
  },
]

export function ProductSelectionModal({ isOpen, onClose, onSelectProduct }: ProductSelectionModalProps) {
  const handleSelect = (option: typeof pricingOptions[0]) => {
    onSelectProduct({
      name: option.name,
      price: option.price,
      originalPrice: option.originalPrice,
      savings: option.savings,
    })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center">
            Elige tu Cantidad
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-6">
          {pricingOptions.map((option) => (
            <div
              key={option.id}
              className={`relative border-2 rounded-2xl p-5 md:p-6 transition-all duration-300 cursor-pointer hover:shadow-lg ${
                option.popular
                  ? "border-primary bg-primary/5 shadow-md"
                  : "border-border hover:border-primary/50"
              }`}
              onClick={() => handleSelect(option)}
            >
              {option.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <Badge className="bg-primary text-primary-foreground border-0 px-4 py-1.5 text-xs shadow-lg rounded-full">
                    MÁS VENDIDO
                  </Badge>
                </div>
              )}

              <div className="text-center mb-4">
                <h3 className="text-xl md:text-2xl font-bold mb-3">{option.name}</h3>

                <div className="mb-3">
                  <div className="text-sm text-muted-foreground mb-1.5 font-semibold">
                    <span className="line-through decoration-2 decoration-destructive/70 text-muted-foreground/70">
                      Antes: ${option.originalPrice.toLocaleString("es-CO")}
                    </span>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    ${option.price.toLocaleString("es-CO")}
                  </div>
                  <Badge className="bg-destructive text-white border-0 rounded-full text-sm font-bold px-4 py-1.5">
                    Ahorras ${option.savings.toLocaleString("es-CO")}
                  </Badge>
                </div>

                <Badge className="bg-primary/10 text-primary border-primary/30 rounded-full text-xs font-medium mb-4">
                  + Envío GRATIS incluido
                </Badge>
              </div>

              <div className="space-y-2 mb-4">
                {option.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="bg-primary/10 rounded-full p-1 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                className={`w-full rounded-full font-semibold ${
                  option.popular
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                }`}
                onClick={(e) => {
                  e.stopPropagation()
                  handleSelect(option)
                }}
              >
                Seleccionar {option.name}
              </Button>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

