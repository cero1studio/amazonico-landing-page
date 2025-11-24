"use client"

import type React from "react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Building2, Smartphone, ShieldCheck, Lock, CheckCircle, Sparkles, Truck } from "lucide-react"

interface CheckoutModalProps {
  isOpen: boolean
  onClose: () => void
  product: {
    name: string
    price: number
    originalPrice: number
    savings: number
  }
}

export function CheckoutModal({ isOpen, onClose, product }: CheckoutModalProps) {
  const [paymentMethod, setPaymentMethod] = useState("pse")
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsProcessing(true)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert(
      `¡Gracias por tu compra! Tu pedido de ${product.name} ha sido procesado. Recibirás tu número de guía de Coordinadora por email.`,
    )
    setIsProcessing(false)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl flex items-center gap-2">
            <Lock className="h-5 w-5 md:h-6 md:w-6 text-accent" />
            Checkout Seguro
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-4 md:p-5 space-y-3 border-2 border-primary/20">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-base md:text-lg text-foreground">{product.name}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">Amazoniico Colágeno Marino</p>
              </div>
              <Badge className="bg-accent text-accent-foreground rounded-full text-xs">Envío GRATIS</Badge>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Precio regular</span>
                <span className="line-through text-muted-foreground">
                  ${product.originalPrice.toLocaleString("es-CO")}
                </span>
              </div>
              <div className="flex justify-between items-center text-accent-foreground font-semibold">
                <span>Descuento aplicado</span>
                <span>-${product.savings.toLocaleString("es-CO")}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Envío por Coordinadora</span>
                <span className="text-accent-foreground font-semibold">GRATIS</span>
              </div>
            </div>

            <div className="border-t-2 border-primary/20 pt-3 mt-3">
              <div className="flex justify-between items-center">
                <span className="font-bold text-base md:text-lg text-foreground">Total a Pagar</span>
                <span className="font-bold text-2xl md:text-3xl text-primary">
                  ${product.price.toLocaleString("es-CO")}
                </span>
              </div>
            </div>

            <div className="bg-background/50 rounded-xl p-3 space-y-2 border border-accent/20">
              <div className="flex items-center gap-2 text-xs md:text-sm">
                <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="font-medium text-foreground">Piel más firme en 3 semanas</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm">
                <Sparkles className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="font-medium text-foreground">Cabello fuerte y uñas resistentes</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm">
                <Truck className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="font-medium text-foreground">Llega en 2-7 días a tu puerta</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 md:space-y-4">
            <h3 className="font-bold text-base md:text-lg text-foreground">Tus Datos</h3>
            <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-medium">
                  Nombre *
                </Label>
                <Input id="firstName" required placeholder="Juan" className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-medium">
                  Apellido *
                </Label>
                <Input id="lastName" required placeholder="Pérez" className="rounded-xl" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email (para tu guía de envío) *
              </Label>
              <Input id="email" type="email" required placeholder="juan@email.com" className="rounded-xl" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                WhatsApp/Teléfono *
              </Label>
              <Input id="phone" type="tel" required placeholder="300 123 4567" className="rounded-xl" />
            </div>
          </div>

          <div className="space-y-3 md:space-y-4">
            <h3 className="font-bold text-base md:text-lg text-foreground">¿Dónde lo enviamos?</h3>
            <div className="space-y-2">
              <Label htmlFor="address" className="text-sm font-medium">
                Dirección Completa *
              </Label>
              <Input id="address" required placeholder="Calle 123 # 45-67, Apto 301" className="rounded-xl" />
            </div>
            <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
              <div className="space-y-2">
                <Label htmlFor="city" className="text-sm font-medium">
                  Ciudad *
                </Label>
                <Input id="city" required placeholder="Bogotá" className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="department" className="text-sm font-medium">
                  Departamento *
                </Label>
                <Input id="department" required placeholder="Cundinamarca" className="rounded-xl" />
              </div>
            </div>
          </div>

          <div className="space-y-3 md:space-y-4">
            <h3 className="font-bold text-base md:text-lg flex items-center gap-2 text-foreground">
              <Lock className="h-5 w-5 text-accent" />
              Elige tu Forma de Pago
            </h3>

            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
              <div
                className={`flex items-center space-x-3 border-2 rounded-2xl p-3 md:p-4 cursor-pointer transition-all ${
                  paymentMethod === "pse"
                    ? "border-primary bg-primary/5 shadow-md"
                    : "border-border hover:border-primary/30"
                }`}
              >
                <RadioGroupItem value="pse" id="pse" />
                <Label htmlFor="pse" className="flex items-center gap-3 cursor-pointer flex-1">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm md:text-base text-foreground">PSE</div>
                    <div className="text-xs text-muted-foreground">Débito directo desde tu banco</div>
                  </div>
                </Label>
                <Badge variant="outline" className="border-primary/40 text-primary rounded-full text-xs">
                  Más usado
                </Badge>
              </div>

              <div
                className={`flex items-center space-x-3 border-2 rounded-2xl p-3 md:p-4 cursor-pointer transition-all ${
                  paymentMethod === "card"
                    ? "border-primary bg-primary/5 shadow-md"
                    : "border-border hover:border-primary/30"
                }`}
              >
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card" className="flex items-center gap-3 cursor-pointer flex-1">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <CreditCard className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm md:text-base text-foreground">Tarjeta Crédito/Débito</div>
                    <div className="text-xs text-muted-foreground">Visa, Mastercard, AmEx</div>
                  </div>
                </Label>
              </div>

              <div
                className={`flex items-center space-x-3 border-2 rounded-2xl p-3 md:p-4 cursor-pointer transition-all ${
                  paymentMethod === "bancolombia"
                    ? "border-primary bg-primary/5 shadow-md"
                    : "border-border hover:border-primary/30"
                }`}
              >
                <RadioGroupItem value="bancolombia" id="bancolombia" />
                <Label htmlFor="bancolombia" className="flex items-center gap-3 cursor-pointer flex-1">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Smartphone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm md:text-base text-foreground">Botón Bancolombia</div>
                    <div className="text-xs text-muted-foreground">Pago rápido desde tu app</div>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="bg-accent/10 border-2 border-accent/30 rounded-2xl p-3 md:p-4 flex items-start gap-3">
            <div className="bg-accent/20 p-2 rounded-lg flex-shrink-0">
              <ShieldCheck className="h-5 w-5 md:h-6 md:w-6 text-accent" />
            </div>
            <div className="text-xs md:text-sm">
              <div className="font-bold mb-1 text-foreground">Pago 100% Seguro y Protegido</div>
              <div className="text-muted-foreground leading-relaxed">
                Encriptación SSL 256-bit. Tus datos bancarios nunca son almacenados ni compartidos. Procesamiento seguro
                certificado.
              </div>
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full text-base md:text-lg py-5 md:py-7 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 rounded-full font-bold transition-all duration-300 hover:scale-105"
            disabled={isProcessing}
          >
            {isProcessing ? (
              <>
                <span className="animate-spin mr-2">⏳</span>
                Procesando tu Pedido...
              </>
            ) : (
              <>
                <CheckCircle className="mr-2 h-5 w-5" />
                Confirmar Pedido - ${product.price.toLocaleString("es-CO")}
              </>
            )}
          </Button>

          <div className="space-y-2">
            <p className="text-xs text-center text-muted-foreground leading-relaxed">
              Al confirmar aceptas los{" "}
              <a href="/terminos" className="text-primary hover:underline font-medium">
                términos y condiciones
              </a>{" "}
              y{" "}
              <a href="/privacidad" className="text-primary hover:underline font-medium">
                política de privacidad
              </a>
            </p>
            <p className="text-xs text-center font-medium text-foreground">
              ✓ Garantía de satisfacción 30 días • ✓ Envío gratis por Coordinadora
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
