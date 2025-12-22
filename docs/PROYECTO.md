# Documentación del Proyecto - Amazoniico Landing Page

## Información General

**Proyecto:** Amazoniico Landing Page  
**Desarrollado por:** CeroUno SAS  
**Versión:** 0.1.0  
**Fecha de Documentación:** Enero 2025

## Descripción

Landing page para Amazoniico, un producto de colágeno marino hidrolizado premium certificado INVIMA. El sitio web presenta información completa sobre el producto, sus beneficios, testimonios de clientes, precios, políticas de envío y términos legales.

## Stack Tecnológico

### Frontend
- **Next.js 16.0.3** - Framework React con App Router
- **React 19.2.0** - Biblioteca de UI
- **TypeScript 5** - Tipado estático para mayor seguridad de código
- **Tailwind CSS 4.1.9** - Framework de utilidades CSS
- **Radix UI** - Componentes accesibles y sin estilos
- **Lucide React** - Iconos modernos

### Herramientas de Desarrollo
- **Vercel Analytics** - Análisis de tráfico y rendimiento
- **ESLint** - Linter para calidad de código
- **PostCSS** - Procesador de CSS
- **Autoprefixer** - Compatibilidad de navegadores

### Librerías Principales
- **react-hook-form** - Manejo de formularios
- **zod** - Validación de esquemas
- **next-themes** - Manejo de temas (claro/oscuro)
- **class-variance-authority** - Variantes de componentes

## Estructura del Proyecto

```
v0-amazonico-landing-page/
├── app/                          # App Router de Next.js
│   ├── layout.tsx               # Layout raíz con metadata SEO
│   ├── page.tsx                 # Página principal
│   ├── globals.css              # Estilos globales y variables CSS
│   ├── robots.ts                # Configuración robots.txt
│   ├── sitemap.ts               # Generación de sitemap.xml
│   ├── devoluciones/
│   │   └── page.tsx             # Política de devoluciones
│   ├── privacidad/
│   │   └── page.tsx             # Política de privacidad
│   └── terminos/
│       └── page.tsx             # Términos y condiciones
├── components/                   # Componentes React
│   ├── ui/                      # Componentes UI base (shadcn/ui)
│   │   ├── accordion.tsx
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   └── radio-group.tsx
│   ├── navbar.tsx               # Barra de navegación
│   ├── hero-section.tsx         # Sección hero principal
│   ├── benefits-section.tsx     # Sección de beneficios
│   ├── product-section.tsx      # Sección del producto
│   ├── pricing-section.tsx      # Sección de precios
│   ├── testimonials-section.tsx # Testimonios
│   ├── trust-section.tsx        # Elementos de confianza
│   ├── shipping-info.tsx        # Información de envío
│   ├── faq-section.tsx          # Preguntas frecuentes
│   ├── cta-section.tsx          # Llamado a la acción
│   ├── footer.tsx               # Pie de página
│   ├── checkout-modal.tsx       # Modal de checkout
│   └── theme-provider.tsx       # Proveedor de temas
├── lib/
│   └── utils.ts                # Utilidades (cn, etc.)
├── public/                      # Archivos estáticos
│   ├── amazoniico-logo.png      # Logo principal
│   ├── [imágenes del producto]
│   └── [otros assets]
├── docs/                        # Documentación
│   ├── PROYECTO.md             # Este archivo
│   ├── SEO.md                  # Guía SEO
│   ├── FAVICONS.md             # Guía de favicons
│   └── CAMBIOS.md              # Registro de cambios
├── package.json                 # Dependencias y scripts
├── tsconfig.json                # Configuración TypeScript
├── next.config.mjs              # Configuración Next.js
├── postcss.config.mjs           # Configuración PostCSS
├── components.json              # Configuración shadcn/ui
└── README.md                    # Documentación principal
```

## Componentes Principales

### Layout (`app/layout.tsx`)
- Define la estructura HTML base
- Configura metadata SEO completa
- Incluye Analytics de Vercel
- Configura fuentes (Geist)

### Página Principal (`app/page.tsx`)
- Orquesta todos los componentes de la landing
- Incluye Schema.org JSON-LD para SEO
- Estructura: Navbar → Hero → Trust → Benefits → Product → Testimonials → Pricing → Shipping → FAQ → CTA → Footer

### Componentes de Sección
Cada sección es un componente independiente y reutilizable:
- **Navbar**: Navegación sticky con menú móvil
- **HeroSection**: Presentación principal del producto
- **BenefitsSection**: Lista de beneficios del producto
- **ProductSection**: Galería y detalles del producto
- **PricingSection**: Planes y precios
- **TestimonialsSection**: Reseñas de clientes
- **TrustSection**: Elementos de confianza (certificaciones, garantías)
- **ShippingInfo**: Información de envío
- **FAQSection**: Preguntas frecuentes con acordeón
- **CTASection**: Llamado a la acción final
- **Footer**: Pie de página con enlaces y contacto

## Configuración

### Variables de Entorno

Crear archivo `.env.local` con:

```env
NEXT_PUBLIC_SITE_URL=https://amazoniico.co
```

### Scripts Disponibles

```bash
# Desarrollo local
pnpm dev          # Inicia servidor en http://localhost:3000

# Construcción
pnpm build        # Construye para producción

# Producción
pnpm start        # Inicia servidor de producción

# Linter
pnpm lint         # Ejecuta ESLint
```

## Características

### SEO
- Metadata completa (Open Graph, Twitter Cards)
- Schema.org JSON-LD para productos
- Sitemap.xml automático
- Robots.txt configurado
- Canonical URLs

### Accesibilidad
- Componentes Radix UI (ARIA compliant)
- Navegación por teclado
- Contraste de colores adecuado
- Alt text en imágenes

### Rendimiento
- Optimización de imágenes con Next.js Image
- Código splitting automático
- CSS optimizado con Tailwind
- Analytics de Vercel

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg
- Navegación adaptativa
- Imágenes responsivas

## Próximos Pasos

1. Crear favicons personalizados de Amazoniico
2. Configurar dominio y variables de entorno
3. Implementar sistema de checkout real
4. Agregar más contenido y optimizaciones SEO
5. Configurar Google Analytics
6. Implementar pruebas (testing)

## Contacto

**Desarrollado por:** CeroUno SAS


