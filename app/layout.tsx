import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CartProvider } from "@/lib/cart-context"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Amazoniico - Colágeno Marino Hidrolizado Premium | Envío Gratis Colombia",
  description:
    "Descubre el colágeno marino más puro del Amazonas. Rejuvenece tu piel, fortalece tu cabello y mejora tus articulaciones. Hasta 18% de descuento + Envío gratis a toda Colombia. Garantía de 30 días.",
  keywords: "colágeno marino, colágeno hidrolizado, belleza, piel joven, salud articular, suplementos Colombia",
  authors: [{ name: "CeroUno SAS" }],
  creator: "CeroUno SAS",
  publisher: "Amazoniico",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://amazoniico.co"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Amazoniico - Colágeno Marino Hidrolizado Premium",
    description:
      "Descubre el colágeno marino más puro del Amazonas. Rejuvenece tu piel, fortalece tu cabello y mejora tus articulaciones. Hasta 18% de descuento + Envío gratis a toda Colombia.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://amazoniico.co",
    siteName: "Amazoniico",
    images: [
      {
        url: "/amazoniico-logo.png",
        width: 1200,
        height: 630,
        alt: "Amazoniico - Colágeno Marino Hidrolizado Premium",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazoniico - Colágeno Marino Hidrolizado Premium",
    description:
      "Descubre el colágeno marino más puro del Amazonas. Rejuvenece tu piel, fortalece tu cabello y mejora tus articulaciones.",
    images: ["/amazoniico-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        <CartProvider>
          {children}
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
