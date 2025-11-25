import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validar datos requeridos
    const requiredFields = ['name', 'email', 'phone', 'address', 'city', 'department', 'documentType', 'documentNumber', 'amount']
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Campo requerido faltante: ${field}` },
          { status: 400 }
        )
      }
    }

    // Credenciales de Wompi
    const WOMPI_PUBLIC_KEY = process.env.NEXT_PUBLIC_WOMPI_PUBLIC_KEY
    const WOMPI_ENVIRONMENT = process.env.WOMPI_ENVIRONMENT || 'test'

    if (!WOMPI_PUBLIC_KEY) {
      return NextResponse.json(
        { error: 'Configuración de Wompi incompleta' },
        { status: 500 }
      )
    }

    // Crear referencia única
    const reference = body.reference || `AMAZONIICO-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

    // Incluir instrucciones en la descripción si existen
    let description = body.description || `${body.productName || 'Amazoniico Colágeno Marino'}`
    if (body.instructions && body.instructions.trim()) {
      description += ` - ${body.instructions.substring(0, 100)}`
    }

    // Construir URL del widget de Wompi con todos los parámetros
    const amountInCents = Math.round(body.amount * 100)
    const redirectUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/checkout/success?reference=${encodeURIComponent(reference)}`

    // Mapear el método de pago seleccionado
    const paymentMethodMap: Record<string, string> = {
      'pse': 'PSE',
      'card': 'CARD',
      'bancolombia': 'BANCOLOMBIA_TRANSFER'
    }

    const selectedPaymentMethod = body.paymentMethod ? paymentMethodMap[body.paymentMethod] : 'PSE'

    const widgetParams = new URLSearchParams({
      'public-key': WOMPI_PUBLIC_KEY,
      'currency': 'COP',
      'amount-in-cents': amountInCents.toString(),
      'reference': reference,
      'redirect-url': redirectUrl,
    })

    // Agregar datos del cliente
    if (body.email) widgetParams.append('customer-data:email', body.email)
    if (body.name) widgetParams.append('customer-data:full-name', body.name)
    if (body.phone) widgetParams.append('customer-data:phone-number', body.phone)
    if (body.documentNumber) widgetParams.append('customer-data:legal-id', body.documentNumber)
    if (body.documentType) widgetParams.append('customer-data:legal-id-type', body.documentType)

    // Preseleccionar método de pago
    if (selectedPaymentMethod) {
      widgetParams.append('payment-method', selectedPaymentMethod)
    }

    const baseUrl = WOMPI_ENVIRONMENT === 'production'
      ? 'https://checkout.wompi.co/p/'
      : 'https://checkout.wompi.co/p/'

    const checkoutUrl = `${baseUrl}?${widgetParams.toString()}`

    console.log('URL de checkout generada:', checkoutUrl)
    console.log('Método de pago preseleccionado:', selectedPaymentMethod)

    // Retornar URL de checkout
    return NextResponse.json({
      checkoutUrl,
      reference,
      sessionId: reference,
    })
  } catch (error) {
    console.error('Error en create-session:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

