"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Building2, Smartphone, ShieldCheck, Lock, CheckCircle, Sparkles, Truck, ArrowLeft, ArrowRight, User, MapPin, CreditCard as CreditCardIcon, FileCheck, RefreshCw, X } from "lucide-react"
import { useCart } from "@/lib/cart-context"

interface CheckoutModalProps {
  isOpen: boolean
  onClose: () => void
  product?: {
    name: string
    price: number
    originalPrice: number
    savings: number
  }
  asPage?: boolean // Si es true, se muestra como página completa (mobile), si es false, como modal (desktop)
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
    name: "Promo 2 Frascos",
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

type Step = 1 | 2 | 3 | 4

export function CheckoutModal({ isOpen, onClose, product: initialProduct, asPage = false }: CheckoutModalProps) {
  const { items, getTotal, clearCart } = useCart()
  const [currentStep, setCurrentStep] = useState<Step>(1)
  const [paymentMethod, setPaymentMethod] = useState("pse")
  const [isProcessing, setIsProcessing] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [showProductSelection, setShowProductSelection] = useState(!initialProduct && items.length === 0)
  
  // Si hay un producto inicial pero no hay items en el carrito, agregarlo
  useEffect(() => {
    if (initialProduct && items.length === 0) {
      // El producto inicial se manejará como antes para compatibilidad
    }
  }, [initialProduct, items.length])

  // Calcular total desde el carrito
  const total = items.length > 0 ? getTotal() : (initialProduct?.price || 0)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    documentType: "CC",
    documentNumber: "",
    address: "",
    city: "",
    department: "",
    instructions: "",
  })

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
      case "firstName":
        if (!value.trim()) return "El nombre es requerido"
        if (value.trim().length < 2) return "El nombre debe tener al menos 2 caracteres"
        return ""
      case "lastName":
        if (!value.trim()) return "El apellido es requerido"
        if (value.trim().length < 2) return "El apellido debe tener al menos 2 caracteres"
        return ""
      case "email":
        if (!value.trim()) return "El email es requerido"
        if (!validateEmail(value)) return "Ingresa un email válido"
        return ""
      case "phone":
        if (!value.trim()) return "El teléfono es requerido"
        if (!validatePhone(value)) return "Ingresa un teléfono válido (10 dígitos)"
        return ""
      case "documentNumber":
        if (!value.trim()) return "El número de documento es requerido"
        if (value.trim().length < 5) return "El documento debe tener al menos 5 caracteres"
        return ""
      case "address":
        if (!value.trim()) return "La dirección es requerida"
        if (value.trim().length < 10) return "Ingresa una dirección completa"
        return ""
      case "city":
        if (!value.trim()) return "La ciudad es requerida"
        if (value.trim().length < 2) return "Ingresa una ciudad válida"
        return ""
      case "department":
        if (!value.trim()) return "El departamento es requerido"
        if (value.trim().length < 2) return "Ingresa un departamento válido"
        return ""
      default:
        return ""
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Validar en tiempo real si el campo ya fue tocado
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

  const validateStep = (step: Step): { isValid: boolean; errors: Record<string, string> } => {
    const stepErrors: Record<string, string> = {}

    switch (step) {
      case 1:
        const fields1 = ["firstName", "lastName", "email", "phone", "documentNumber"]
        fields1.forEach((field) => {
          const value = formData[field as keyof typeof formData] as string
          const error = validateField(field, value)
          if (error) stepErrors[field] = error
        })
        break
      case 2:
        const fields2 = ["address", "city", "department"]
        fields2.forEach((field) => {
          const value = formData[field as keyof typeof formData] as string
          const error = validateField(field, value)
          if (error) stepErrors[field] = error
        })
        break
      case 3:
        if (!paymentMethod) {
          stepErrors.paymentMethod = "Selecciona un método de pago"
        }
        break
    }

    return { isValid: Object.keys(stepErrors).length === 0, errors: stepErrors }
  }

  const handleNext = () => {
    const validation = validateStep(currentStep)

    if (validation.isValid) {
      // Marcar todos los campos del paso como tocados
      const stepFields: Record<string, string[]> = {
        1: ["firstName", "lastName", "email", "phone", "documentNumber"],
        2: ["address", "city", "department"],
        3: ["paymentMethod"],
      }

      stepFields[currentStep]?.forEach((field) => {
        setTouched((prev) => ({ ...prev, [field]: true }))
      })

      setErrors(validation.errors)

      if (currentStep < 4) {
        setCurrentStep((prev) => (prev + 1) as Step)
      }
    } else {
      setErrors(validation.errors)
      // Marcar todos los campos del paso como tocados para mostrar errores
      const stepFields: Record<string, string[]> = {
        1: ["firstName", "lastName", "email", "phone", "documentNumber"],
        2: ["address", "city", "department"],
        3: ["paymentMethod"],
      }

      stepFields[currentStep]?.forEach((field) => {
        setTouched((prev) => ({ ...prev, [field]: true }))
      })
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      // Limpiar errores del paso actual al retroceder
      const stepFields: Record<string, string[]> = {
        1: ["firstName", "lastName", "email", "phone", "documentNumber"],
        2: ["address", "city", "department"],
        3: ["paymentMethod"],
      }

      const fieldsToClear = stepFields[currentStep] || []
      const newErrors = { ...errors }
      fieldsToClear.forEach((field) => {
        delete newErrors[field]
      })
      setErrors(newErrors)

      setCurrentStep((prev) => (prev - 1) as Step)
    }
  }

  const createWompiSession = async () => {
    const fullName = `${formData.firstName} ${formData.lastName}`
    
    // Construir descripción con todos los productos
    const productsDescription = items.length > 0
      ? items.map(item => `${item.quantity}x ${item.name}`).join(", ")
      : (initialProduct?.name || "")
    
    const description = formData.instructions
      ? `${productsDescription} - Amazoniico Colágeno Marino. Indicaciones: ${formData.instructions}`
      : `${productsDescription} - Amazoniico Colágeno Marino`

    const wompiData = {
      name: fullName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      department: formData.department,
      documentType: formData.documentType,
      documentNumber: formData.documentNumber,
      instructions: formData.instructions || "",
      amount: total,
      currency: "COP",
      reference: `AMAZONIICO-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      description: description,
      productName: items.length > 0 ? items.map(item => item.name).join(", ") : (initialProduct?.name || ""),
      paymentMethod: paymentMethod,
      items: items.length > 0 ? items : (initialProduct ? [{
        name: initialProduct.name,
        price: initialProduct.price,
        quantity: 1
      }] : [])
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
      console.log('Respuesta completa de la API:', data)

      if (!response.ok) {
        const errorMessage = data.error || "Error al crear sesión de pago"
        const errorDetails = data.details ? `\n\nDetalles: ${JSON.stringify(data.details)}` : ""
        console.error("Error de la API:", errorMessage, data)
        alert(`${errorMessage}${errorDetails}\n\nPor favor verifica tus datos e intenta de nuevo.`)
        setIsProcessing(false)
        return
      }

      if (data.checkoutUrl) {
        console.log('Redirigiendo a:', data.checkoutUrl)
        // Limpiar carrito después de crear la sesión exitosamente
        if (items.length > 0) {
          clearCart()
        }
        window.location.href = data.checkoutUrl
      } else {
        console.error('Respuesta sin checkoutUrl:', data)
        throw new Error(`No se recibió la URL de checkout. Respuesta: ${JSON.stringify(data)}`)
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

  const steps = [
    { number: 1, title: "Tus Datos", icon: User },
    { number: 2, title: "Dirección", icon: MapPin },
    { number: 3, title: "Pago", icon: CreditCardIcon },
    { number: 4, title: "Confirmar", icon: FileCheck },
  ]

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="-mt-2">
              <h3 className="font-bold text-lg text-foreground mb-2">Tu Información Personal</h3>
              <p className="text-sm text-muted-foreground">
                Necesitamos estos datos para procesar tu pedido y enviarte la confirmación.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Input
                  id="firstName"
                  name="firstName"
                  required
                  placeholder="Nombre *"
                  className={`rounded-xl ${errors.firstName && touched.firstName ? "border-destructive focus-visible:ring-destructive" : ""}`}
                  value={formData.firstName}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur("firstName")}
                />
                {errors.firstName && touched.firstName && (
                  <p className="text-xs text-destructive mt-1">{errors.firstName}</p>
                )}
              </div>
              <div className="space-y-1">
                <Input
                  id="lastName"
                  name="lastName"
                  required
                  placeholder="Apellido *"
                  className={`rounded-xl ${errors.lastName && touched.lastName ? "border-destructive focus-visible:ring-destructive" : ""}`}
                  value={formData.lastName}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur("lastName")}
                />
                {errors.lastName && touched.lastName && (
                  <p className="text-xs text-destructive mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div className="space-y-1">
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email *"
                className={`rounded-xl ${errors.email && touched.email ? "border-destructive focus-visible:ring-destructive" : ""}`}
                value={formData.email}
                onChange={handleInputChange}
                onBlur={() => handleBlur("email")}
              />
              {errors.email && touched.email && (
                <p className="text-xs text-destructive mt-1">{errors.email}</p>
              )}
            </div>
            <div className="space-y-1">
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="WhatsApp/Teléfono *"
                className={`rounded-xl ${errors.phone && touched.phone ? "border-destructive focus-visible:ring-destructive" : ""}`}
                value={formData.phone}
                onChange={handleInputChange}
                onBlur={() => handleBlur("phone")}
              />
              {errors.phone && touched.phone && (
                <p className="text-xs text-destructive mt-1">{errors.phone}</p>
              )}
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <select
                id="documentType"
                name="documentType"
                required
                className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={formData.documentType}
                onChange={handleInputChange}
              >
                <option value="CC">Cédula de Ciudadanía</option>
                <option value="CE">Cédula de Extranjería</option>
                <option value="NIT">NIT</option>
                <option value="PP">Pasaporte</option>
              </select>
              <div className="space-y-1">
                <Input
                  id="documentNumber"
                  name="documentNumber"
                  type="text"
                  required
                  placeholder="Número de Documento *"
                  className={`rounded-xl ${errors.documentNumber && touched.documentNumber ? "border-destructive focus-visible:ring-destructive" : ""}`}
                  value={formData.documentNumber}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur("documentNumber")}
                />
                {errors.documentNumber && touched.documentNumber && (
                  <p className="text-xs text-destructive mt-1">{errors.documentNumber}</p>
                )}
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-4">
            <div className="-mt-2">
              <h3 className="font-bold text-lg text-foreground mb-2">Dirección de Envío</h3>
              <p className="text-sm text-muted-foreground">
                Ingresa la dirección completa donde quieres recibir tu pedido.
              </p>
            </div>
            <div className="space-y-1">
              <Input
                id="address"
                name="address"
                required
                placeholder="Dirección Completa *"
                className={`rounded-xl ${errors.address && touched.address ? "border-destructive focus-visible:ring-destructive" : ""}`}
                value={formData.address}
                onChange={handleInputChange}
                onBlur={() => handleBlur("address")}
              />
              {errors.address && touched.address && (
                <p className="text-xs text-destructive mt-1">{errors.address}</p>
              )}
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Input
                  id="city"
                  name="city"
                  required
                  placeholder="Ciudad *"
                  className={`rounded-xl ${errors.city && touched.city ? "border-destructive focus-visible:ring-destructive" : ""}`}
                  value={formData.city}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur("city")}
                />
                {errors.city && touched.city && (
                  <p className="text-xs text-destructive mt-1">{errors.city}</p>
                )}
              </div>
              <div className="space-y-1">
                <Input
                  id="department"
                  name="department"
                  required
                  placeholder="Departamento *"
                  className={`rounded-xl ${errors.department && touched.department ? "border-destructive focus-visible:ring-destructive" : ""}`}
                  value={formData.department}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur("department")}
                />
                {errors.department && touched.department && (
                  <p className="text-xs text-destructive mt-1">{errors.department}</p>
                )}
              </div>
            </div>
            <div className="space-y-1">
              <Textarea
                id="instructions"
                name="instructions"
                placeholder="Indicaciones adicionales (opcional)"
                className="rounded-xl min-h-[80px] resize-none"
                value={formData.instructions}
                onChange={(e) => handleInputChange(e)}
              />
              <p className="text-xs text-muted-foreground">
                Ej: Piso, apartamento, punto de referencia, horario de entrega preferido, etc.
              </p>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-4">
            {errors.paymentMethod && touched.paymentMethod && (
              <p className="text-xs text-destructive mb-2">{errors.paymentMethod}</p>
            )}
            <RadioGroup value={paymentMethod} onValueChange={(value) => {
              setPaymentMethod(value)
              setErrors((prev) => ({ ...prev, paymentMethod: "" }))
            }} className="space-y-2">
              <div
                className={`flex items-center space-x-3 border-2 rounded-2xl p-3 cursor-pointer transition-all ${paymentMethod === "pse"
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
                className={`flex items-center space-x-3 border-2 rounded-2xl p-3 cursor-pointer transition-all ${paymentMethod === "card"
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
                className={`flex items-center space-x-3 border-2 rounded-2xl p-3 cursor-pointer transition-all ${paymentMethod === "bancolombia"
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
        )

      case 4:
        const displayItems = items.length > 0 ? items : (initialProduct ? [{
          id: 'single',
          name: initialProduct.name,
          price: initialProduct.price,
          originalPrice: initialProduct.originalPrice,
          savings: initialProduct.savings,
          quantity: 1
        }] : [])
        
        return (
          <div className="space-y-4">
            <div className="bg-muted/30 rounded-xl p-4 space-y-3">
              <h4 className="font-bold text-base text-foreground">Resumen del Pedido</h4>
              <div className="space-y-3">
                {displayItems.map((item) => (
                  <div key={item.id} className="space-y-1 pb-2 border-b last:border-0">
                    <div className="flex justify-between items-start">
                      <span className="font-medium text-foreground text-sm">{item.name}</span>
                      <span className="font-medium text-foreground text-sm">
                        {item.quantity > 1 && `${item.quantity}x `}
                        ${item.price.toLocaleString("es-CO")}
                      </span>
                    </div>
                    {item.quantity > 1 && (
                      <div className="text-xs text-muted-foreground text-right">
                        Subtotal: ${(item.price * item.quantity).toLocaleString("es-CO")}
                      </div>
                    )}
                  </div>
                ))}
                <div className="flex justify-between text-sm pt-2">
                  <span className="text-muted-foreground">Envío:</span>
                  <span className="font-medium text-primary">GRATIS</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-bold">
                  <span>Total:</span>
                  <span className="text-primary">${total.toLocaleString("es-CO")}</span>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 rounded-xl p-4 space-y-2">
              <h4 className="font-bold text-base text-foreground mb-2">Información de Envío</h4>
              <p className="text-sm text-foreground">
                <strong>{formData.firstName} {formData.lastName}</strong>
              </p>
              <p className="text-sm text-muted-foreground">{formData.email}</p>
              <p className="text-sm text-muted-foreground">{formData.phone}</p>
              <p className="text-sm text-muted-foreground mt-2">
                {formData.address}, {formData.city}, {formData.department}
              </p>
            </div>

            <div className="bg-muted/30 rounded-xl p-4">
              <h4 className="font-bold text-base text-foreground mb-2">Método de Pago</h4>
              <p className="text-sm text-foreground">
                {paymentMethod === "pse" && "PSE - Débito directo desde tu banco"}
                {paymentMethod === "card" && "Tarjeta Crédito/Débito"}
                {paymentMethod === "bancolombia" && "Botón Bancolombia"}
              </p>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  const checkoutContent = (
    <div className={`${asPage ? "min-h-screen w-full" : "w-full h-full"} flex flex-col`}>
      {/* Header Section - Fixed */}
      <div className={`flex-shrink-0 px-4 md:px-6 pt-4 md:pt-6 pb-0 ${asPage ? "bg-background" : ""}`}>
        {asPage ? (
          <div className="mb-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                <h1 className="text-xl md:text-2xl font-bold">Checkout Seguro</h1>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="h-8 w-8 p-0 rounded-full"
              >
                <X className="h-5 w-5" />
              </Button>
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
        <div className={`flex items-center mb-4 md:mb-6 gap-2 ${asPage ? "mt-2" : "mt-6"}`}>
          {steps.map((step, index) => {
            const Icon = step.icon
            const isActive = currentStep === step.number
            const isCompleted = currentStep > step.number

            return (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center w-full">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all flex-shrink-0 ${isActive
                      ? "bg-primary border-primary text-primary-foreground"
                      : isCompleted
                        ? "bg-primary/20 border-primary text-primary"
                        : "bg-background border-border text-muted-foreground"
                      }`}
                  >
                    {isCompleted ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <Icon className="h-5 w-5" />
                    )}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-0.5 flex-1 mx-2 transition-all ${isCompleted ? "bg-primary" : "bg-border"
                      }`}
                  />
                )}
              </div>
            )
          })}
        </div>

        {/* Product Selection - Solo mostrar si no hay items en carrito y hay initialProduct para compatibilidad */}
        {currentStep === 1 && showProductSelection && items.length === 0 && !initialProduct && (
          <div className="mb-4">
            <p className="text-sm text-muted-foreground text-center">
              Por favor agrega productos al carrito desde la sección de precios
            </p>
          </div>
        )}

        {/* Product Card - Show cart summary when not in selection mode */}
        {(!showProductSelection || currentStep !== 1) && currentStep !== 4 && items.length > 0 && (
          <div className="mb-4 relative">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-4 border-2 border-primary/20">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h3 className="font-bold text-base text-foreground">
                    {items.length} {items.length === 1 ? 'Producto' : 'Productos'} en el carrito
                  </h3>
                  <p className="text-xs text-muted-foreground">Amazoniico Colágeno Marino</p>
                </div>
                <Badge className="bg-accent text-accent-foreground rounded-full text-xs">Envío GRATIS</Badge>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-primary/20">
                <span className="text-sm text-muted-foreground">Total a Pagar</span>
                <span className="font-bold text-xl text-primary">
                  ${total.toLocaleString("es-CO")}
                </span>
              </div>
            </div>
          </div>
        )}
        
        {/* Product Card - Show single product when initialProduct is provided */}
        {(!showProductSelection || currentStep !== 1) && currentStep !== 4 && items.length === 0 && initialProduct && (
          <div className="mb-4 relative">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-4 border-2 border-primary/20">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h3 className="font-bold text-base text-foreground">{initialProduct.name}</h3>
                  <p className="text-xs text-muted-foreground">Amazoniico Colágeno Marino</p>
                </div>
                <Badge className="bg-accent text-accent-foreground rounded-full text-xs">Envío GRATIS</Badge>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-primary/20">
                <span className="text-sm text-muted-foreground">Total a Pagar</span>
                <span className="font-bold text-xl text-primary">
                  ${initialProduct.price.toLocaleString("es-CO")}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Step Content - Scrollable */}
      <div className={`flex-1 overflow-y-auto px-4 md:px-6 min-h-0 ${asPage ? "pb-20" : ""}`}>
        <div className="pb-4 pt-2">
          {renderStepContent()}
        </div>
      </div>

      {/* Navigation Buttons - Fixed at bottom */}
      <div className={`flex-shrink-0 px-4 md:px-6 pt-4 pb-6 bg-background border-t ${asPage ? "fixed bottom-0 left-0 right-0 z-50" : ""}`}>
        {currentStep >= 3 && (
          <div className="flex items-center justify-center gap-1.5 mb-3 px-3 py-1.5 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-primary/20 rounded-full backdrop-blur-sm">
            <div className="bg-primary/10 p-1 rounded-full">
              <ShieldCheck className="h-3 w-3 text-primary" />
            </div>
            <span className="text-[10px] font-medium text-foreground">{"Pago 100% seguro • Encriptación SSL • Certificado por Wompi"}</span>
          </div>
        )}
        <div className="flex gap-3">
          {currentStep > 1 && (
            <Button
              type="button"
              variant="outline"
              onClick={handleBack}
              className="flex-1 rounded-full"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Atrás
            </Button>
          )}
          {currentStep < 4 ? (
            <Button
              type="button"
              onClick={handleNext}
              className="flex-1 rounded-full bg-primary"
            >
              Continuar
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button
              type="button"
              onClick={handleSubmit}
              className="flex-1 rounded-full bg-primary"
              disabled={isProcessing}
            >
              {isProcessing ? (
                <>
                  <span className="animate-spin mr-2">🔄</span>
                  Procesando...
                </>
              ) : (
                <>
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Confirmar Pedido - ${total.toLocaleString("es-CO")}
                </>
              )}
            </Button>
          )}
        </div>
        {currentStep === 4 && (
          <div className="space-y-2 mt-4">
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
          </div>
        )}
      </div>
    </div>
  );

  if (asPage) {
    return <div className="min-h-screen bg-background">{checkoutContent}</div>
  }

  if (!isOpen) {
    return null
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl h-[90vh] flex flex-col p-0 overflow-hidden gap-0">
        {checkoutContent}
      </DialogContent>
    </Dialog>
  )
}
