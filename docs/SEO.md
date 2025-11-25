# Guía de Optimización SEO - Amazoniico Landing Page

## Resumen

Este documento describe las optimizaciones SEO implementadas en el proyecto Amazoniico Landing Page y cómo mantenerlas/mejorarlas.

## Optimizaciones Implementadas

### 1. Metadata Básica (`app/layout.tsx`)

#### Title y Description
- **Title:** "Amazoniico - Colágeno Marino Hidrolizado Premium | Envío Gratis Colombia"
- **Description:** Descripción optimizada con palabras clave principales
- **Keywords:** Palabras clave relevantes para el producto

#### Metadata Adicional
- `authors`: CeroUno SAS
- `creator`: CeroUno SAS
- `publisher`: Amazoniico
- `metadataBase`: URL base del sitio
- `alternates.canonical`: URLs canónicas

### 2. Open Graph Tags

Implementados para compartir en redes sociales:

```typescript
openGraph: {
  title: "Amazoniico - Colágeno Marino Hidrolizado Premium",
  description: "...",
  url: "https://amazoniico.co",
  siteName: "Amazoniico",
  images: [{ url: "/amazoniico-logo.png", width: 1200, height: 630 }],
  locale: "es_CO",
  type: "website",
}
```

**Recomendaciones:**
- Crear imagen OG específica (1200x630px)
- Actualizar URL cuando se tenga dominio real
- Ajustar locale según mercado objetivo

### 3. Twitter Cards

```typescript
twitter: {
  card: "summary_large_image",
  title: "...",
  description: "...",
  images: ["/amazoniico-logo.png"],
}
```

**Recomendaciones:**
- Crear imagen específica para Twitter
- Optimizar tamaño (1200x675px recomendado)

### 4. Robots.txt (`app/robots.ts`)

Configuración actual:
- Permite todo el sitio excepto `/api/`
- Apunta al sitemap

**Recomendaciones:**
- Revisar y ajustar según necesidades
- Agregar más rutas a `disallow` si es necesario

### 5. Sitemap.xml (`app/sitemap.ts`)

Incluye:
- Página principal (priority: 1, weekly)
- Términos y condiciones (priority: 0.5, monthly)
- Política de privacidad (priority: 0.5, monthly)
- Política de devoluciones (priority: 0.5, monthly)

**Recomendaciones:**
- Actualizar `lastModified` cuando se hagan cambios
- Ajustar `changeFrequency` según frecuencia de actualización
- Agregar más páginas cuando se creen

### 6. Schema.org JSON-LD (`app/page.tsx`)

Implementado para producto:

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Amazoniico - Colágeno Marino Hidrolizado Premium",
  "description": "...",
  "brand": { "@type": "Brand", "name": "Amazoniico" },
  "offers": {
    "@type": "Offer",
    "price": "55000",
    "priceCurrency": "COP",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  }
}
```

**Recomendaciones:**
- Actualizar rating y reviewCount con datos reales
- Agregar más propiedades (ingredientes, beneficios, etc.)
- Considerar agregar `Review` schema para testimonios

## Optimizaciones Adicionales Recomendadas

### 1. Imágenes

**Estado actual:**
- Algunas imágenes tienen alt text
- Uso de Next.js Image component

**Mejoras:**
- ✅ Agregar alt text descriptivo a todas las imágenes
- ✅ Optimizar imágenes (WebP, tamaños apropiados)
- ✅ Usar lazy loading donde sea apropiado
- ✅ Agregar imágenes a Schema.org

### 2. Contenido

**Mejoras:**
- ✅ Agregar más contenido textual relevante
- ✅ Usar headings semánticos (H1, H2, H3)
- ✅ Incluir palabras clave de forma natural
- ✅ Agregar contenido único en cada página

### 3. Performance

**Mejoras:**
- ✅ Optimizar Core Web Vitals
- ✅ Minimizar JavaScript
- ✅ Optimizar CSS
- ✅ Implementar lazy loading

### 4. Enlaces Internos

**Mejoras:**
- ✅ Agregar más enlaces internos relevantes
- ✅ Usar anchor text descriptivo
- ✅ Crear estructura de enlaces lógica

### 5. Meta Tags Adicionales

**Considerar agregar:**
- `viewport` (ya está en Next.js por defecto)
- `theme-color` para mobile
- `apple-mobile-web-app-capable`
- `format-detection`

### 6. Páginas Adicionales

**Considerar crear:**
- Página "Sobre Nosotros"
- Página de blog/artículos
- Página de contacto
- Página de garantía

## Herramientas de Validación

### Google
- [Google Search Console](https://search.google.com/search-console)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev/)

### Otros
- [Schema.org Validator](https://validator.schema.org/)
- [Open Graph Debugger](https://www.opengraph.xyz/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## Checklist SEO

### Implementado ✅
- [x] Metadata básica (title, description, keywords)
- [x] Open Graph tags
- [x] Twitter Cards
- [x] Robots.txt
- [x] Sitemap.xml
- [x] Schema.org JSON-LD
- [x] Canonical URLs
- [x] Idioma configurado (es)

### Pendiente 📋
- [ ] Favicons personalizados
- [ ] Imagen OG optimizada (1200x630px)
- [ ] Imagen Twitter optimizada (1200x675px)
- [ ] Alt text en todas las imágenes
- [ ] Configurar Google Search Console
- [ ] Configurar Google Analytics
- [ ] Agregar más Schema.org types
- [ ] Optimizar Core Web Vitals
- [ ] Agregar breadcrumbs schema
- [ ] Crear contenido adicional

## Mantenimiento

### Revisión Mensual
1. Verificar que todas las URLs funcionen
2. Revisar sitemap
3. Actualizar contenido si es necesario
4. Revisar métricas en Search Console

### Revisión Trimestral
1. Auditar SEO completo
2. Revisar y actualizar keywords
3. Analizar competencia
4. Actualizar Schema.org con datos reales

## Recursos

- [Next.js Metadata Documentation](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Schema.org Product](https://schema.org/Product)
- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Open Graph Protocol](https://ogp.me/)

## Notas

- Todas las URLs usan variables de entorno (`NEXT_PUBLIC_SITE_URL`)
- Actualizar variables de entorno cuando se tenga dominio real
- Revisar y actualizar precios y disponibilidad en Schema.org regularmente

