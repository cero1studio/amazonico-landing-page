# Guía de Favicons - Amazoniico Landing Page

## Estado Actual

Los favicons de v0 han sido eliminados. Actualmente el proyecto está configurado para usar:
- `/favicon.ico` (icono principal)
- `/apple-touch-icon.png` (icono para dispositivos Apple)

**Nota:** Estos archivos aún no existen y deben ser creados.

## Favicons Requeridos

### 1. favicon.ico
- **Ubicación:** `/public/favicon.ico`
- **Tamaño:** 16x16, 32x32, 48x48 (formato ICO multi-resolución)
- **Uso:** Navegadores estándar

### 2. apple-touch-icon.png
- **Ubicación:** `/public/apple-touch-icon.png`
- **Tamaño:** 180x180px
- **Uso:** Dispositivos iOS (iPhone, iPad)

## Favicons Opcionales (Recomendados)

### 3. icon-192.png
- **Ubicación:** `/public/icon-192.png`
- **Tamaño:** 192x192px
- **Uso:** Android, PWA

### 4. icon-512.png
- **Ubicación:** `/public/icon-512.png`
- **Tamaño:** 512x512px
- **Uso:** Android, PWA

### 5. favicon-16x16.png
- **Ubicación:** `/public/favicon-16x16.png`
- **Tamaño:** 16x16px
- **Uso:** Navegadores modernos

### 6. favicon-32x32.png
- **Ubicación:** `/public/favicon-32x32.png`
- **Tamaño:** 32x32px
- **Uso:** Navegadores modernos

## Configuración Actual

En `app/layout.tsx`:

```typescript
icons: {
  icon: "/favicon.ico",
  apple: "/apple-touch-icon.png",
}
```

## Configuración Recomendada (Completa)

Para una implementación completa, actualizar `app/layout.tsx`:

```typescript
icons: {
  icon: [
    { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "/favicon.ico", sizes: "any" },
  ],
  apple: [
    { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  ],
  other: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      url: "/icon-192.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "512x512",
      url: "/icon-512.png",
    },
  ],
}
```

## Herramientas para Crear Favicons

### Online
1. **Favicon.io** - https://favicon.io/
   - Genera favicons desde texto o imagen
   - Incluye todos los tamaños necesarios

2. **RealFaviconGenerator** - https://realfavicongenerator.net/
   - Generador completo con preview
   - Soporta múltiples plataformas

3. **Favicon Generator** - https://www.favicon-generator.org/
   - Simple y directo

### Desde Logo Existente
Si ya tienes el logo de Amazoniico:

1. Usar una versión cuadrada del logo
2. Asegurar que sea legible en tamaños pequeños
3. Exportar en los tamaños requeridos
4. Usar herramienta online para generar favicon.ico

## Especificaciones de Diseño

### Recomendaciones
- **Fondo:** Transparente o sólido (según diseño)
- **Contraste:** Alto contraste para legibilidad
- **Simplicidad:** Diseño simple que funcione en 16x16px
- **Colores:** Usar colores de la marca Amazoniico
- **Forma:** Preferiblemente cuadrado o circular

### Colores del Proyecto
- Primary: `oklch(0.42 0.15 265)` - #344EAD
- Accent: `oklch(0.48 0.14 220)`

## Pasos para Implementar

1. **Diseñar/Crear favicons**
   - Usar logo de Amazoniico
   - Crear versiones en todos los tamaños necesarios

2. **Generar favicon.ico**
   - Usar herramienta online o
   - Convertir PNG a ICO manualmente

3. **Colocar archivos en `/public/`**
   - favicon.ico
   - apple-touch-icon.png
   - (opcional) otros tamaños

4. **Actualizar `app/layout.tsx`**
   - Agregar referencias a nuevos favicons
   - (Opcional) Expandir configuración para más tamaños

5. **Probar**
   - Verificar en diferentes navegadores
   - Probar en dispositivos móviles
   - Verificar en modo oscuro/claro

## Testing

### Navegadores
- Chrome/Edge
- Firefox
- Safari
- Opera

### Dispositivos
- Desktop
- Mobile (iOS)
- Mobile (Android)
- Tablet

### Herramientas de Testing
- [Favicon Checker](https://realfavicongenerator.net/favicon_checker)
- Inspeccionar en DevTools → Elements → `<head>`

## Notas

- Los favicons se cachean agresivamente, puede tomar tiempo ver cambios
- Para desarrollo, usar modo incógnito o limpiar caché
- Asegurar que los archivos estén en `/public/` (no en subcarpetas)
- Los nombres de archivo deben coincidir exactamente con las referencias en `layout.tsx`

## Referencias

- [MDN - Favicon](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preconnect)
- [Next.js - Metadata Icons](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#icons)
- [Apple - Touch Icons](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html)

