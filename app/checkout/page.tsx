"use client"

import { CheckoutMinificado } from "@/components/checkout-minificado"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "@/lib/cart-context"

export default function CheckoutPage() {
  const router = useRouter()
  const { items } = useCart()

  // Si es desktop o no hay items, redirigir a home
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isDesktop = window.innerWidth >= 768
      const hasNoItems = items.length === 0
      
      if (isDesktop || hasNoItems) {
        router.push("/")
      }
    }
  }, [router, items])

  const handleClose = () => {
    router.push("/")
  }

  // En mobile, mostrar el checkout minificado como página completa
  return (
    <div className="min-h-screen bg-background">
      <CheckoutMinificado 
        isOpen={true} 
        onClose={handleClose} 
      />
    </div>
  )
}

