"use client"

import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, Plus, Minus, ShoppingCart } from "lucide-react"
import { useState } from "react"

interface CheckoutMinificadoProps {
  isOpen: boolean
  onClose: () => void
}

export function CheckoutMinificado({ isOpen, onClose }: CheckoutMinificadoProps) {
  const { items, removeItem, updateQuantity, getTotal, getTotalItems, clearCart } = useCart()
  const [isProcessing, setIsProcessing] = useState(false)

  const total = getTotal()
  const totalItems = getTotalItems()

  const handleCheckout = async () => {
    setIsProcessing(true)
    try {
      // Crear sesión de Wompi directamente sin pedir información adicional
      const productsDescription = items.map(item => `${item.quantity}x ${item.name}`).join(", ")
      
      const response = await fetch("/api/wompi/create-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: total,
          currency: "COP",
          description: `${productsDescription} - Amazoniico Colágeno Marino`,
          productName: items.map(item => item.name).join(", "),
          items: items,
          // No enviamos datos del cliente - Wompi los pedirá
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        const errorMessage = data.message || data.error || "Error al crear sesión de pago"
        // Extraer detalles del error de forma más clara
        let errorDetails = ""
        if (data.details) {
          if (typeof data.details === 'object') {
            errorDetails = data.details.error?.message || 
                          data.details.error?.reason ||
                          data.details.message ||
                          JSON.stringify(data.details)
          } else {
            errorDetails = String(data.details)
          }
        }
        
        console.error("Error al crear sesión:", { 
          errorMessage, 
          errorDetails, 
          status: data.status,
          statusText: data.statusText,
          fullData: data 
        })
        
        // Mostrar notificación toast no invasiva con más detalles
        const displayMessage = errorDetails && errorDetails !== '{}' 
          ? `${errorMessage}: ${errorDetails}` 
          : errorMessage
        showToast("error", "Error al procesar pago", displayMessage)
        setIsProcessing(false)
        return
      }

      if (data.checkoutUrl) {
        // Limpiar carrito antes de redirigir
        clearCart()
        onClose()
        // Redirigir a Wompi
        window.location.href = data.checkoutUrl
      } else {
        setIsProcessing(false)
        showToast("error", "Error al procesar pago", "No se recibió la URL de checkout de Wompi")
        return
      }
    } catch (error) {
      console.error("Error:", error)
      const errorMessage = error instanceof Error ? error.message : "Error desconocido"
      showToast("error", "Error al procesar pago", errorMessage)
      setIsProcessing(false)
    }
  }

  // Función para mostrar toast no invasivo
  const showToast = (type: "error" | "success", title: string, message: string) => {
    const toast = document.createElement('div')
    toast.className = `fixed top-4 right-4 ${
      type === "error" ? "bg-destructive text-destructive-foreground" : "bg-primary text-primary-foreground"
    } px-6 py-4 rounded-lg shadow-2xl z-[100] max-w-md animate-in slide-in-from-top-5`
    toast.innerHTML = `
      <div class="flex items-start gap-3">
        <span class="text-xl">${type === "error" ? "⚠️" : "✅"}</span>
        <div class="flex-1">
          <p class="font-semibold text-sm">${title}</p>
          <p class="text-xs mt-1 opacity-90">${message}</p>
        </div>
        <button onclick="this.parentElement.parentElement.remove()" class="text-current opacity-70 hover:opacity-100 ml-2">×</button>
      </div>
    `
    document.body.appendChild(toast)
    setTimeout(() => {
      toast.style.opacity = "0"
      toast.style.transition = "opacity 0.3s"
      setTimeout(() => toast.remove(), 300)
    }, 5000)
  }

  if (!isOpen) return null

  return (
    <>
      {/* Sidebar sin overlay - no opaca el contenido - altura 100% */}
      <div
        className={`fixed right-0 top-0 bottom-0 h-screen w-full max-w-md bg-background border-l-2 border-border shadow-2xl flex flex-col z-40 transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ height: '100vh' }}
      >
          {/* Header mejorado */}
          <div className="flex items-center justify-between p-5 md:p-6 border-b bg-gradient-to-r from-primary/5 to-accent/5">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <ShoppingCart className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-bold text-foreground">Mi Carrito</h2>
                {totalItems > 0 && (
                  <p className="text-xs text-muted-foreground">
                    {totalItems} {totalItems === 1 ? "producto" : "productos"}
                  </p>
                )}
              </div>
              {totalItems > 0 && (
                <Badge className="bg-primary text-primary-foreground rounded-full h-6 w-6 flex items-center justify-center p-0 text-xs font-bold">
                  {totalItems}
                </Badge>
              )}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-9 w-9 p-0 rounded-full hover:bg-muted"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingCart className="h-16 w-16 text-muted-foreground/30 mb-4" />
                <p className="text-muted-foreground font-medium">Tu carrito está vacío</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Agrega productos para continuar
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="border-2 rounded-2xl p-5 bg-gradient-to-br from-background to-muted/30 border-primary/20 shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-base md:text-lg text-foreground mb-1">
                          {item.name}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          Amazoniico Colágeno Marino
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="h-8 w-8 p-0 rounded-full hover:bg-destructive/10 hover:text-destructive transition-colors"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-border/50">
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-9 w-9 p-0 rounded-full border-2 hover:bg-primary/10 hover:border-primary transition-all"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="font-bold text-base w-10 text-center text-foreground">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-9 w-9 p-0 rounded-full border-2 hover:bg-primary/10 hover:border-primary transition-all"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="text-right">
                        <p className="font-bold text-primary text-lg md:text-xl">
                          ${(item.price * item.quantity).toLocaleString("es-CO")}
                        </p>
                        {item.quantity > 1 && (
                          <p className="text-xs text-muted-foreground">
                            ${item.price.toLocaleString("es-CO")} c/u
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer mejorado */}
          {items.length > 0 && (
            <div className="border-t-2 border-primary/20 p-5 md:p-6 bg-gradient-to-t from-background to-muted/20 space-y-4 shadow-lg">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal:</span>
                  <span className="font-semibold text-foreground">
                    ${total.toLocaleString("es-CO")}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Envío:</span>
                  <Badge className="bg-primary/10 text-primary border-primary/30 rounded-full px-3 py-1">
                    GRATIS
                  </Badge>
                </div>
                <div className="flex justify-between text-lg md:text-xl font-bold pt-3 border-t-2 border-primary/20">
                  <span className="text-foreground">Total:</span>
                  <span className="text-primary text-xl md:text-2xl">
                    ${total.toLocaleString("es-CO")}
                  </span>
                </div>
              </div>

              <Button
                onClick={handleCheckout}
                disabled={isProcessing}
                className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                size="lg"
              >
                {isProcessing ? (
                  <>
                    <span className="animate-spin mr-2">⏳</span>
                    Procesando...
                  </>
                ) : (
                  "Proceder al Pago"
                )}
              </Button>
            </div>
          )}
      </div>
    </>
  )
}
