"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ShoppingCart } from "lucide-react"
import { CheckoutModal } from "@/components/checkout-modal"
import { useRouter } from "next/navigation"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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

  const handleCheckoutClick = () => {
    if (isMobile) {
      router.push("/checkout")
    } else {
      setIsCheckoutOpen(true)
    }
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 w-full bg-primary backdrop-blur-sm border-b border-primary-foreground/10 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/amazoniico-logo.png" alt="Amazoniico" className="h-10 md:h-12 w-auto brightness-0 invert" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors"
            >
              Beneficios
            </button>
            <button
              onClick={() => scrollToSection("product")}
              className="text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors"
            >
              Producto
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors"
            >
              Testimonios
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors"
            >
              FAQ
            </button>
          </div>

          <div className="flex items-center gap-4">
            <Button
              onClick={handleCheckoutClick}
              size="sm"
              className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary hidden md:flex rounded-full px-6 shadow-lg font-semibold"
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Comprar Ahora
            </Button>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-primary-foreground">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-foreground/10">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("benefits")}
                className="text-left text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors py-2"
              >
                Beneficios
              </button>
              <button
                onClick={() => scrollToSection("product")}
                className="text-left text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors py-2"
              >
                Producto
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-left text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors py-2"
              >
                Testimonios
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-left text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors py-2"
              >
                FAQ
              </button>
              <Button
                onClick={() => {
                  handleCheckoutClick()
                  setIsMenuOpen(false)
                }}
                size="sm"
                className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary w-full mt-2 rounded-full font-semibold"
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Comprar Ahora
              </Button>
            </div>
          </div>
        )}
      </div>

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </nav>
  )
}
