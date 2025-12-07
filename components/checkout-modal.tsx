"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Building2, Smartphone, ShieldCheck, Lock, ArrowLeft, ArrowRight, User, CheckCircle2, Plus, Minus, RefreshCw, Edit, X, Wallet, QrCode, Coins, DollarSign } from "lucide-react"
import { CartItem, useCart } from "@/contexts/cart-context"

interface CheckoutModalProps {
  isOpen: boolean
  onClose: () => void
  product?: {
    name: string
    price: number
    originalPrice: number
    savings: number
  }
  cartItems?: CartItem[]
  asPage?: boolean
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

type Step = 0 | 1 | 2

export function CheckoutModal({ 
  isOpen, 
  onClose, 
  product: initialProduct, 
  cartItems,
  asPage = false 
}: CheckoutModalProps) {
  const [currentStep, setCurrentStep] = useState<Step>(0)
  const [isProcessing, setIsProcessing] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const { clearCart } = useCart()
  const [selectedProducts, setSelectedProducts] = useState<CartItem[]>([])
  const [showProductSelection, setShowProductSelection] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })

  // Determinar si necesita selección de producto
  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      setCurrentStep(1)
      setShowProductSelection(false)
    } else if (initialProduct) {
      setSelectedProducts([{
        id: 0,
        name: initialProduct.name,
        price: initialProduct.price,
        originalPrice: initialProduct.originalPrice,
        quantity: 1,
        savings: initialProduct.savings,
      }])
      setCurrentStep(1)
      setShowProductSelection(false)
    } else {
      setCurrentStep(0)
      setShowProductSelection(true)
      setSelectedProducts([])
    }
  }, [cartItems, initialProduct, isOpen])

  // Calcular totales basado en cartItems o selectedProducts
  const getItems = (): CartItem[] => {
    if (cartItems && cartItems.length > 0) {
      return cartItems
    }
    if (selectedProducts.length > 0) {
      return selectedProducts
    }
    return []
  }

  const items = getItems()
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const totalSavings = items.reduce((sum, item) => sum + (item.originalPrice - item.price) * item.quantity, 0)
  const subtotal = items.reduce((sum, item) => sum + item.originalPrice * item.quantity, 0)

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[0-9]{10}$/
    return phoneRegex.test(phone.replace(/\s/g, ""))
  }

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "name":
        if (!value.trim()) return "El nombre es requerido"
        if (value.trim().length < 2) return "El nombre debe tener al menos 2 caracteres"
        return ""
      case "email":
        if (!value.trim()) return "El email es requerido"
        if (!validateEmail(value)) return "Ingresa un email válido"
        return ""
      case "phone":
        if (!value.trim()) return "El teléfono es requerido"
        if (!validatePhone(value)) return "Ingresa un teléfono válido (10 dígitos)"
        return ""
      default:
        return ""
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (touched[name]) {
      const error = validateField(name, value)
      setErrors((prev) => ({ ...prev, [name]: error }))
    }
  }

  const handleBlur = (name: string) => {
    setTouched((prev) => ({ ...prev, [name]: true }))
    const value = formData[name as keyof typeof formData]
    const error = validateField(name, value as string)
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  const validateStep = (): boolean => {
    const stepErrors: Record<string, string> = {}
    const fields = ["name", "email", "phone"]
    
    fields.forEach((field) => {
      const value = formData[field as keyof typeof formData] as string
      const error = validateField(field, value)
      if (error) stepErrors[field] = error
    })

    setErrors(stepErrors)
    fields.forEach((field) => {
      setTouched((prev) => ({ ...prev, [field]: true }))
    })

    return Object.keys(stepErrors).length === 0
  }

  const handleProductSelect = (option: typeof pricingOptions[0], quantity: number = 1) => {
    setSelectedProducts((prev) => {
      const existingIndex = prev.findIndex(p => p.id === option.id)
      if (existingIndex >= 0) {
        // Si ya existe, actualizar cantidad
        const updated = [...prev]
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        }
        return updated
      } else {
        // Si no existe, agregar nuevo
        return [...prev, {
          id: option.id,
          name: option.name,
          price: option.price,
          originalPrice: option.originalPrice,
          quantity: quantity,
          savings: option.savings,
        }]
      }
    })
  }

  const handleQuantityChange = (productId: number, delta: number) => {
    setSelectedProducts((prev) => {
      return prev.map(product => {
        if (product.id === productId) {
          const newQuantity = Math.max(1, product.quantity + delta)
          return {
            ...product,
            quantity: newQuantity,
          }
        }
        return product
      })
    })
  }

  const handleRemoveProduct = (productId: number) => {
    setSelectedProducts((prev) => prev.filter(p => p.id !== productId))
  }

  const handleNext = () => {
    if (currentStep === 0) {
      if (selectedProducts.length > 0) {
        setCurrentStep(1)
      }
    } else if (currentStep === 1) {
      if (validateStep()) {
        setCurrentStep(2)
      }
    }
  }

  const handleBack = () => {
    if (currentStep === 2) {
      setCurrentStep(1)
    } else if (currentStep === 1) {
      if (showProductSelection || (!cartItems && !initialProduct)) {
        setCurrentStep(0)
      } else {
        onClose()
      }
    } else if (currentStep === 0) {
      onClose()
    }
  }

  const createWompiSession = async () => {
    const description = items.map(item => 
      `${item.quantity}x ${item.name}`
    ).join(", ")

    const wompiData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      amount: total,
      currency: "COP",
      reference: `AMAZONIICO-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      description: `Amazoniico Colágeno Marino - ${description}`,
      cartItems: items,
    }

    try {
      const response = await fetch("/api/wompi/create-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(wompiData),
      })

      const data = await response.json()

      if (!response.ok) {
        const errorMessage = data.error || "Error al crear sesión de pago"
        alert(`${errorMessage}\n\nPor favor verifica tus datos e intenta de nuevo.`)
        setIsProcessing(false)
        return
      }

      if (data.checkoutUrl) {
        clearCart()
        window.location.href = data.checkoutUrl
      } else {
        throw new Error(`No se recibió la URL de checkout`)
      }
    } catch (error) {
      console.error("Error:", error)
      const errorMessage = error instanceof Error ? error.message : "Error desconocido"
      alert(`Hubo un error al procesar el pago: ${errorMessage}\n\nPor favor intenta de nuevo o contacta a soporte.`)
      setIsProcessing(false)
    }
  }

  const handleSubmit = async () => {
    setIsProcessing(true)
    await createWompiSession()
  }

  // Resetear cuando se cierra
  useEffect(() => {
    if (!isOpen) {
      setCurrentStep(0)
      setFormData({ name: "", email: "", phone: "" })
      setErrors({})
      setTouched({})
      setIsProcessing(false)
      setSelectedProducts([])
      setShowProductSelection(false)
    }
  }, [isOpen])

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <div className="-mt-2">
              <h3 className="font-bold text-lg text-foreground mb-2">Selecciona tus Productos</h3>
              <p className="text-sm text-muted-foreground">
                Puedes agregar múltiples productos. Haz clic en un producto para agregarlo.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {pricingOptions.map((option) => {
                const productInCart = selectedProducts.find(p => p.id === option.id)
                return (
                  <div
                    key={option.id}
                    className={`relative border-2 rounded-xl p-4 sm:p-5 transition-all duration-300 cursor-pointer flex flex-col justify-between touch-manipulation ${
                      productInCart
                        ? "border-primary bg-primary/5 shadow-md"
                        : option.popular
                        ? "border-primary/30 bg-background hover:border-primary/50 active:scale-95"
                        : "border-border hover:border-primary/30 active:scale-95"
                    }`}
                    onClick={() => handleProductSelect(option, 1)}
                  >
                    {option.popular && (
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10">
                        <Badge className="bg-primary text-primary-foreground border-0 px-2 py-0.5 text-[10px] shadow-lg rounded-full">
                          MÁS VENDIDO
                        </Badge>
                      </div>
                    )}
                    <div className="text-center flex flex-col justify-between h-full">
                      <div>
                        <h4 className="font-bold text-base sm:text-sm mb-3">{option.name}</h4>
                        <div className="flex items-center justify-center gap-2 mb-3">
                          <span className="text-xs sm:text-sm text-muted-foreground line-through decoration-2 decoration-destructive/70">
                            {`$${option.originalPrice.toLocaleString("es-CO")}`}
                          </span>
                          <span className="text-xl sm:text-lg font-bold text-primary">
                            {`$${option.price.toLocaleString("es-CO")}`}
                          </span>
                        </div>
                        {productInCart && (
                          <Badge className="bg-primary text-primary-foreground text-xs sm:text-[10px] mb-2 px-2 py-1">
                            {productInCart.quantity} en pedido
                          </Badge>
                        )}
                      </div>
                      <Badge className="bg-primary/10 text-primary border-primary/30 rounded-full text-xs sm:text-[10px] font-medium w-fit mx-auto px-2 py-1">
                        + Envío GRATIS
                      </Badge>
                    </div>
                  </div>
                )
              })}
            </div>
            {selectedProducts.length > 0 && (
              <div className="bg-muted/30 rounded-xl p-4 sm:p-5 space-y-3 border-2 border-primary/20">
                <h4 className="font-bold text-base sm:text-lg mb-3">Tu Pedido</h4>
                <div className="space-y-3">
                  {selectedProducts.map((product) => (
                    <div key={product.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 sm:p-4 bg-background rounded-lg border">
                      <div className="flex-1 min-w-0">
                        <h5 className="font-semibold text-sm sm:text-base">{product.name}</h5>
                        <p className="text-xs sm:text-sm text-muted-foreground">Amazoniico Colágeno Marino</p>
                      </div>
                      <div className="flex items-center justify-between sm:justify-end gap-3">
                        <div className="flex items-center gap-2 border rounded-lg">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-9 w-9 sm:h-8 sm:w-8 p-0 touch-manipulation"
                            onClick={(e) => {
                              e.stopPropagation()
                              handleQuantityChange(product.id, -1)
                            }}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 sm:w-10 text-center text-sm sm:text-base font-medium">
                            {product.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-9 w-9 sm:h-8 sm:w-8 p-0 touch-manipulation"
                            onClick={(e) => {
                              e.stopPropagation()
                              handleQuantityChange(product.id, 1)
                            }}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="text-right min-w-[90px] sm:min-w-[80px]">
                          <div className="font-bold text-base sm:text-sm text-primary">
                            ${(product.price * product.quantity).toLocaleString("es-CO")}
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-9 w-9 sm:h-8 sm:w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10 touch-manipulation flex-shrink-0"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleRemoveProduct(product.id)
                          }}
                        >
                          <X className="h-5 w-5 sm:h-4 sm:w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-primary/20">
                  <span className="text-base sm:text-sm font-semibold">Total:</span>
                  <span className="font-bold text-xl sm:text-2xl text-primary">
                    ${total.toLocaleString("es-CO")}
                  </span>
                </div>
              </div>
            )}
          </div>
        )

      case 1:
        return (
          <div className="space-y-4 sm:space-y-5">
            <div className="-mt-2">
              <h3 className="font-bold text-lg sm:text-xl text-foreground mb-2">Datos Básicos</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Solo necesitamos esta información para procesar tu pedido.
              </p>
            </div>
            <div className="space-y-1">
              <Input
                id="name"
                name="name"
                required
                placeholder="Nombre completo *"
                className={`rounded-xl h-12 sm:h-10 text-base sm:text-sm ${errors.name && touched.name ? "border-destructive focus-visible:ring-destructive" : ""}`}
                value={formData.name}
                onChange={handleInputChange}
                onBlur={() => handleBlur("name")}
              />
              {errors.name && touched.name && (
                <p className="text-xs sm:text-sm text-destructive mt-1">{errors.name}</p>
              )}
            </div>
            <div className="space-y-1">
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email *"
                className={`rounded-xl h-12 sm:h-10 text-base sm:text-sm ${errors.email && touched.email ? "border-destructive focus-visible:ring-destructive" : ""}`}
                value={formData.email}
                onChange={handleInputChange}
                onBlur={() => handleBlur("email")}
              />
              {errors.email && touched.email && (
                <p className="text-xs sm:text-sm text-destructive mt-1">{errors.email}</p>
              )}
            </div>
            <div className="space-y-1">
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="WhatsApp/Teléfono *"
                className={`rounded-xl h-12 sm:h-10 text-base sm:text-sm ${errors.phone && touched.phone ? "border-destructive focus-visible:ring-destructive" : ""}`}
                value={formData.phone}
                onChange={handleInputChange}
                onBlur={() => handleBlur("phone")}
              />
              {errors.phone && touched.phone && (
                <p className="text-xs sm:text-sm text-destructive mt-1">{errors.phone}</p>
              )}
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-5 sm:space-y-6">
            <div className="text-center space-y-2">
              <h3 className="font-bold text-lg sm:text-xl text-foreground">
                Serás redirigido a Wompi para completar tu pago
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground px-2">
                En Wompi completarás tu dirección de envío, documento y seleccionarás tu método de pago
              </p>
            </div>

            {/* Medios de pago disponibles */}
            <div className="space-y-2">
              <h4 className="font-bold text-sm sm:text-base text-foreground">Medios de Pago Disponibles en Wompi:</h4>
              <div className="bg-muted/20 rounded-lg p-3 sm:p-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-2 sm:gap-y-2.5 text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-foreground">PSE</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-foreground">Tarjetas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-foreground">Bancolombia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wallet className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-foreground">Nequi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wallet className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-foreground">Daviplata</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <QrCode className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-foreground">QR</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Coins className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-foreground">Puntos Colombia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-foreground">Efectivo</span>
                  </div>
                  <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                    <CreditCard className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-foreground">Cuotas</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Información de seguridad */}
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 sm:py-2 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-primary/20 rounded-full">
              <div className="bg-primary/10 p-1 sm:p-1.5 rounded-full flex-shrink-0">
                <ShieldCheck className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
              </div>
              <span className="text-[11px] sm:text-[10px] font-medium text-foreground text-center">
                Pago 100% seguro • Encriptación SSL • Certificado por Wompi
              </span>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  const checkoutContent = (
    <div className={`${asPage ? "min-h-screen w-full" : "w-full h-full"} flex flex-col`}>
      <div className={`flex-shrink-0 px-4 md:px-6 pt-4 md:pt-6 pb-0 ${asPage ? "bg-background" : ""}`}>
        {asPage ? (
          <div className="mb-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                <h1 className="text-xl md:text-2xl font-bold">Checkout Seguro</h1>
              </div>
            </div>
          </div>
        ) : (
          <DialogHeader>
            <DialogTitle className="text-xl md:text-2xl flex items-center gap-2">
              <Lock className="h-5 w-5 text-primary" />
              Checkout Seguro
            </DialogTitle>
          </DialogHeader>
        )}

        {/* Progress Steps */}
        <div className={`flex items-center mb-4 sm:mb-6 gap-1 sm:gap-2 ${asPage ? "mt-2" : "mt-4 sm:mt-6"}`}>
          <div className="flex items-center flex-1">
            {showProductSelection && (
              <>
                <div className="flex flex-col items-center w-full">
                  <div
                    className={`w-10 h-10 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border-2 transition-all flex-shrink-0 ${
                      currentStep >= 0
                        ? "bg-primary border-primary text-primary-foreground"
                        : "bg-background border-border text-muted-foreground"
                    }`}
                  >
                    {currentStep > 0 ? (
                      <CheckCircle2 className="h-5 w-5 sm:h-4 sm:w-4" />
                    ) : (
                      <span className="text-sm sm:text-xs font-bold">1</span>
                    )}
                  </div>
                </div>
                <div className={`h-1 sm:h-0.5 flex-1 mx-1 transition-all ${currentStep > 0 ? "bg-primary" : "bg-border"}`} />
              </>
            )}
            <div className="flex flex-col items-center w-full">
              <div
                className={`w-10 h-10 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border-2 transition-all flex-shrink-0 ${
                  currentStep >= 1
                    ? "bg-primary border-primary text-primary-foreground"
                    : "bg-background border-border text-muted-foreground"
                }`}
              >
                {currentStep > 1 ? (
                  <CheckCircle2 className="h-5 w-5 sm:h-4 sm:w-4" />
                ) : (
                  <User className="h-5 w-5 sm:h-4 sm:w-4" />
                )}
              </div>
            </div>
            <div className={`h-1 sm:h-0.5 flex-1 mx-1 transition-all ${currentStep >= 2 ? "bg-primary" : "bg-border"}`} />
            <div className="flex flex-col items-center w-full">
              <div
                className={`w-10 h-10 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border-2 transition-all flex-shrink-0 ${
                  currentStep >= 2
                    ? "bg-primary border-primary text-primary-foreground"
                    : "bg-background border-border text-muted-foreground"
                }`}
              >
                <ShieldCheck className="h-5 w-5 sm:h-4 sm:w-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Product Card - Show selected products when not in selection mode */}
        {currentStep > 0 && items.length > 0 && !cartItems && (
          <div className="mb-4 relative">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-4 sm:p-5 border-2 border-primary/20">
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2 h-9 w-9 sm:h-8 sm:w-8 p-0 rounded-full hover:bg-primary/10 touch-manipulation"
                onClick={() => {
                  setCurrentStep(0)
                  setShowProductSelection(true)
                }}
                title="Modificar pedido"
              >
                <Edit className="h-5 w-5 sm:h-4 sm:w-4 text-primary" />
              </Button>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 pr-10 sm:pr-8 gap-2">
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base sm:text-lg text-foreground break-words">
                    {items.map(item => `${item.quantity}x ${item.name}`).join(", ")}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Amazoniico Colágeno Marino</p>
                </div>
                <Badge className="bg-accent text-accent-foreground rounded-full text-xs sm:text-sm w-fit">
                  Envío GRATIS
                </Badge>
              </div>
              {items.length > 1 && (
                <div className="space-y-1.5 mb-2 pt-2 border-t border-primary/20">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-xs sm:text-sm">
                      <span className="text-muted-foreground">{item.quantity}x {item.name}</span>
                      <span className="font-medium">${(item.price * item.quantity).toLocaleString("es-CO")}</span>
                    </div>
                  ))}
                </div>
              )}
              <div className="flex justify-between items-center pt-2 border-t border-primary/20">
                <span className="text-sm sm:text-base text-muted-foreground">Total a Pagar</span>
                <span className="font-bold text-xl sm:text-2xl text-primary">
                  ${total.toLocaleString("es-CO")}
                </span>
              </div>
            </div>
          </div>
        )}
        
        {/* Product Card - Show cart items with edit option */}
        {currentStep > 0 && items.length > 0 && cartItems && (
          <div className="mb-4 relative">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-4 sm:p-5 border-2 border-primary/20">
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2 h-9 w-9 sm:h-8 sm:w-8 p-0 rounded-full hover:bg-primary/10 touch-manipulation"
                onClick={() => {
                  onClose()
                  // Abrir el carrito para modificar
                  setTimeout(() => {
                    const event = new CustomEvent('openCart')
                    window.dispatchEvent(event)
                  }, 100)
                }}
                title="Modificar pedido en el carrito"
              >
                <Edit className="h-5 w-5 sm:h-4 sm:w-4 text-primary" />
              </Button>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 pr-10 sm:pr-8 gap-2">
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base sm:text-lg text-foreground break-words">
                    {items.map(item => `${item.quantity}x ${item.name}`).join(", ")}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Amazoniico Colágeno Marino</p>
                </div>
                <Badge className="bg-accent text-accent-foreground rounded-full text-xs sm:text-sm w-fit">
                  Envío GRATIS
                </Badge>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-primary/20">
                <span className="text-sm sm:text-base text-muted-foreground">Total a Pagar</span>
                <span className="font-bold text-xl sm:text-2xl text-primary">
                  ${total.toLocaleString("es-CO")}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Step Content */}
      <div className={`flex-1 overflow-y-auto px-4 sm:px-6 min-h-0 ${asPage ? "pb-24 sm:pb-20" : "pb-2"}`}>
        <div className="pb-4 pt-2">
          {renderStepContent()}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className={`flex-shrink-0 px-4 sm:px-6 pt-4 pb-4 sm:pb-6 bg-background border-t ${asPage ? "fixed bottom-0 left-0 right-0 z-50" : ""}`}>
        <div className="flex gap-3">
          {currentStep > 0 && (
            <Button
              type="button"
              variant="outline"
              onClick={handleBack}
              className="flex-1 rounded-full h-12 sm:h-10 text-base sm:text-sm touch-manipulation"
            >
              <ArrowLeft className="mr-2 h-5 w-5 sm:h-4 sm:w-4" />
              Atrás
            </Button>
          )}
          {currentStep === 0 ? (
            <Button
              type="button"
              onClick={handleNext}
              className="flex-1 rounded-full bg-primary h-12 sm:h-10 text-base sm:text-sm touch-manipulation"
              disabled={selectedProducts.length === 0}
            >
              Continuar
              <ArrowRight className="ml-2 h-5 w-5 sm:h-4 sm:w-4" />
            </Button>
          ) : currentStep < 2 ? (
            <Button
              type="button"
              onClick={handleNext}
              className="flex-1 rounded-full bg-primary h-12 sm:h-10 text-base sm:text-sm touch-manipulation"
            >
              Continuar
              <ArrowRight className="ml-2 h-5 w-5 sm:h-4 sm:w-4" />
            </Button>
          ) : (
            <Button
              type="button"
              onClick={handleSubmit}
              className="flex-1 rounded-full bg-primary h-12 sm:h-10 text-base sm:text-sm touch-manipulation"
              disabled={isProcessing}
            >
              {isProcessing ? (
                <>
                  <span className="animate-spin mr-2">🔄</span>
                  Procesando...
                </>
              ) : (
                <>
                  Continuar a Wompi
                  <ArrowRight className="ml-2 h-5 w-5 sm:h-4 sm:w-4" />
                </>
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  )

  if (asPage) {
    return <div className="min-h-screen bg-background">{checkoutContent}</div>
  }

  if (!isOpen) {
    return null
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl h-[100vh] sm:h-[90vh] w-full sm:w-auto flex flex-col p-0 overflow-hidden gap-0 m-0 sm:m-4 rounded-none sm:rounded-lg top-0 left-0 sm:top-[50%] sm:left-[50%] translate-x-0 sm:translate-x-[-50%] translate-y-0 sm:translate-y-[-50%]">
        {checkoutContent}
      </DialogContent>
    </Dialog>
  )
}
