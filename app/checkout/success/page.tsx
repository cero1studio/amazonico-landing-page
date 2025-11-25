'use client'

import { Suspense, useEffect, useState } from 'react'
import { CheckCircle, Package, Mail, Truck } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useSearchParams } from 'next/navigation'

function SuccessContent() {
  const searchParams = useSearchParams()
  const reference = searchParams?.get('reference')
  const [orderInfo, setOrderInfo] = useState<{ reference?: string } | null>(null)

  useEffect(() => {
    if (reference) {
      setOrderInfo({ reference })
    }
  }, [reference])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-muted/30 to-background p-4">
      <div className="max-w-2xl w-full bg-background rounded-2xl shadow-xl border-2 border-primary/20 p-8 md:p-12 text-center">
        <div className="mb-6">
          <div className="bg-primary/10 w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
            <CheckCircle className="h-10 w-10 md:h-12 md:w-12 text-primary" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
            ¡Pedido Confirmado!
          </h1>
          <p className="text-base md:text-lg text-muted-foreground">
            Tu compra ha sido procesada exitosamente
          </p>
          {orderInfo?.reference && (
            <p className="text-sm text-muted-foreground mt-2">
              Referencia: <span className="font-mono font-semibold text-foreground">{orderInfo.reference}</span>
            </p>
          )}
        </div>

        <div className="bg-muted/50 rounded-xl p-6 mb-6 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Package className="h-5 w-5 text-primary flex-shrink-0" />
            <p className="text-sm md:text-base text-foreground">
              Recibirás un email con los detalles de tu pedido y el número de guía de envío
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Truck className="h-5 w-5 text-primary flex-shrink-0" />
            <p className="text-sm md:text-base text-foreground">
              Tu pedido será enviado por Coordinadora en 2-7 días hábiles
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Mail className="h-5 w-5 text-primary flex-shrink-0" />
            <p className="text-sm md:text-base text-foreground">
              Te notificaremos cuando tu pedido sea despachado
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <Button asChild size="lg" className="w-full rounded-full">
            <Link href="/">Volver al Inicio</Link>
          </Button>
          <p className="text-xs text-muted-foreground">
            Si tienes alguna pregunta, contáctanos en{' '}
            <a href="mailto:servicio_cliente@amazoniico.com" className="text-primary hover:underline font-medium">
              servicio_cliente@amazoniico.com
            </a>{' '}
            o{' '}
            <a href="tel:+573245020012" className="text-primary hover:underline font-medium">
              +57 3245020012
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Cargando...</p>
        </div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  )
}

