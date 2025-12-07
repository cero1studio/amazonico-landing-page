import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validar solo datos básicos requeridos
    const requiredFields = ['name', 'email', 'phone', 'amount']
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

    // Construir descripción desde cartItems o description
    let description = body.description || 'Amazoniico Colágeno Marino'
    if (body.cartItems && Array.isArray(body.cartItems) && body.cartItems.length > 0) {
      const itemsDescription = body.cartItems.map((item: any) => 
        `${item.quantity}x ${item.name}`
      ).join(', ')
      description = `Amazoniico Colágeno Marino - ${itemsDescription}`
    }

    // Construir URL del widget de Wompi con todos los parámetros
    const amountInCents = Math.round(body.amount * 100)
    const redirectUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/checkout/success?reference=${encodeURIComponent(reference)}`

    // No preseleccionar método de pago - el usuario lo seleccionará en Wompi

    const widgetParams = new URLSearchParams({
      'public-key': WOMPI_PUBLIC_KEY,
      'currency': 'COP',
      'amount-in-cents': amountInCents.toString(),
      'reference': reference,
      'redirect-url': redirectUrl,
    })

    // Agregar solo datos básicos del cliente (el resto se completa en Wompi)
    if (body.email) widgetParams.append('customer-data:email', body.email)
    if (body.name) widgetParams.append('customer-data:full-name', body.name)
    if (body.phone) widgetParams.append('customer-data:phone-number', body.phone)

    const baseUrl = WOMPI_ENVIRONMENT === 'production'
      ? 'https://checkout.wompi.co/p/'
      : 'https://checkout.wompi.co/p/'

    const checkoutUrl = `${baseUrl}?${widgetParams.toString()}`

    console.log('URL de checkout generada:', checkoutUrl)
    console.log('Descripción:', description)

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

