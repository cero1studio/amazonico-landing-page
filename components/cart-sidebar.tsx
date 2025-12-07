"use client"

import { useCart } from "@/contexts/cart-context"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Plus, Minus, Trash2, ArrowRight } from "lucide-react"
import { useState } from "react"
import { CheckoutModal } from "@/components/checkout-modal"

interface CartSidebarProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CartSidebar({ open, onOpenChange }: CartSidebarProps) {
  const { items, updateQuantity, removeFromCart, getTotalPrice, getTotalSavings } =
    useCart()
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  const total = getTotalPrice()
  const savings = getTotalSavings()
  const subtotal = items.reduce(
    (sum, item) => sum + item.originalPrice * item.quantity,
    0
  )

  const handleCheckout = () => {
    if (items.length === 0) return
    setIsCheckoutOpen(true)
    onOpenChange(false)
  }

  return (
    <>
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent side="right" className="w-full sm:w-[400px] flex flex-col p-0 sm:p-6">
          <SheetHeader className="px-4 sm:px-0 pt-4 sm:pt-0">
            <SheetTitle className="flex items-center gap-2 text-lg sm:text-xl">
              <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
              Mi Carrito
            </SheetTitle>
            <SheetDescription className="text-sm">
              {items.length === 0
                ? "Tu carrito está vacío"
                : `${items.reduce((sum, item) => sum + item.quantity, 0)} ${
                    items.reduce((sum, item) => sum + item.quantity, 0) === 1
                      ? "producto"
                      : "productos"
                  }`}
            </SheetDescription>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto py-4 px-4 sm:px-0">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <ShoppingCart className="h-16 w-16 text-muted-foreground/50" />
                <p className="text-muted-foreground">
                  No hay productos en tu carrito
                </p>
                <Button
                  variant="outline"
                  onClick={() => onOpenChange(false)}
                  className="rounded-full"
                >
                  Seguir Comprando
                </Button>
              </div>
            ) : (
              <div className="space-y-3 sm:space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3 sm:gap-4 p-3 sm:p-4 border rounded-xl bg-background"
                  >
                    <div className="flex-1 space-y-2 min-w-0">
                      <h4 className="font-semibold text-sm sm:text-base">{item.name}</h4>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                        <span className="text-base sm:text-lg font-bold text-primary">
                          ${(item.price * item.quantity).toLocaleString("es-CO")}
                        </span>
                        {item.originalPrice > item.price && (
                          <span className="text-xs sm:text-sm text-muted-foreground line-through">
                            ${(item.originalPrice * item.quantity).toLocaleString(
                              "es-CO"
                            )}
                          </span>
                        )}
                      </div>
                      {item.savings > 0 && (
                        <Badge
                          variant="outline"
                          className="text-xs bg-primary/10 text-primary border-primary/30 w-fit"
                        >
                          Ahorras ${(item.savings * item.quantity).toLocaleString(
                            "es-CO"
                          )}
                        </Badge>
                      )}
                    </div>
                    <div className="flex flex-col items-end justify-between gap-2 flex-shrink-0">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-9 w-9 sm:h-8 sm:w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10 touch-manipulation"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-4 w-4 sm:h-5 sm:w-5" />
                      </Button>
                      <div className="flex items-center gap-1 sm:gap-2 border rounded-lg">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-9 w-9 sm:h-8 sm:w-8 p-0 touch-manipulation"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 sm:w-10 text-center font-medium text-sm sm:text-base">
                          {item.quantity}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-9 w-9 sm:h-8 sm:w-8 p-0 touch-manipulation"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t pt-4 pb-4 sm:pb-0 px-4 sm:px-0 space-y-4 bg-background">
              <div className="space-y-2 text-sm sm:text-base">
                {subtotal > total && (
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal:</span>
                    <span>${subtotal.toLocaleString("es-CO")}</span>
                  </div>
                )}
                {savings > 0 && (
                  <div className="flex justify-between text-primary font-medium">
                    <span>Ahorro:</span>
                    <span>-${savings.toLocaleString("es-CO")}</span>
                  </div>
                )}
                <div className="flex justify-between text-lg sm:text-xl font-bold pt-2 border-t">
                  <span>Total:</span>
                  <span className="text-primary">
                    ${total.toLocaleString("es-CO")}
                  </span>
                </div>
              </div>
              <Button
                onClick={handleCheckout}
                className="w-full rounded-full bg-primary hover:bg-primary/90 text-base sm:text-lg py-6 sm:py-7 touch-manipulation"
                size="lg"
              >
                Ir a Checkout
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          )}
        </SheetContent>
      </Sheet>

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={items}
      />
    </>
  )
}

