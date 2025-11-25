"use client"

import { CheckoutModal } from "@/components/checkout-modal"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function CheckoutPage() {
  const [isMobile, setIsMobile] = useState(false)
  const [initialProduct, setInitialProduct] = useState<{
    name: string
    price: number
    originalPrice: number
    savings: number
  } | undefined>(undefined)
  const router = useRouter()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Cargar producto seleccionado desde sessionStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = sessionStorage.getItem('selectedProduct')
      if (stored) {
        try {
          setInitialProduct(JSON.parse(stored))
          sessionStorage.removeItem('selectedProduct')
        } catch (e) {
          console.error('Error parsing stored product:', e)
        }
      }
    }
  }, [])

  // Si es desktop, redirigir a home
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      router.push("/")
    }
  }, [router])

  const handleClose = () => {
    router.back()
  }

  return (
    <CheckoutModal 
      isOpen={true} 
      onClose={handleClose} 
      asPage={true}
      product={initialProduct}
    />
  )
}

