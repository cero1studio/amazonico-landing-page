# Registro de Cambios - Amazoniico Landing Page

## [2025-01-XX] - Limpieza y Optimización SEO Inicial

### Cambios Realizados

#### 1. Eliminación de Referencias a v0

**Archivos Modificados:**
- `package.json`
  - Cambiado `name` de `"my-v0-project"` a `"amazoniico-landing-page"`

- `README.md`
  - Reescrito completamente
  - Eliminadas todas las referencias a v0.app y Vercel
  - Agregada información sobre CeroUno SAS como desarrollador
  - Documentación de estructura del proyecto
  - Scripts disponibles

- `app/layout.tsx`
  - Eliminado `generator: "v0.app"` de metadata

**Archivos Eliminados:**
- `public/icon-light-32x32.png` (favicon de v0)
- `public/icon-dark-32x32.png` (favicon de v0)
- `public/icon.svg` (favicon de v0)
- `public/apple-icon.png` (favicon de v0)

#### 2. Optimización SEO

**Archivos Creados:**
- `app/robots.ts`
  - Configuración de robots.txt
  - Permite todo el sitio excepto `/api/`
  - Apunta al sitemap

- `app/sitemap.ts`
  - Generación automática de sitemap.xml
  - Incluye: página principal, términos, privacidad, devoluciones
  - Prioridades y frecuencias configuradas

**Archivos Modificados:**
- `app/layout.tsx`
  - Metadata SEO completa:
    - Open Graph tags (Facebook, LinkedIn, etc.)
    - Twitter Cards
    - Robots configuration
    - Authors, creator, publisher
    - Canonical URLs
    - metadataBase configurado
  - Icons actualizados (referencias a nuevos favicons pendientes)

- `app/page.tsx`
  - Agregado Schema.org JSON-LD para Product
  - Incluye: nombre, descripción, marca, ofertas, ratings
  - Configurado con variables de entorno

#### 3. Documentación

**Archivos Creados:**
- `docs/PROYECTO.md`
  - Documentación completa del proyecto
  - Stack tecnológico
  - Estructura de directorios
  - Componentes principales
  - Configuración y scripts
  - Características del proyecto

- `docs/SEO.md`
  - Guía completa de optimización SEO
  - Descripción de optimizaciones implementadas
  - Recomendaciones adicionales
  - Checklist SEO
  - Herramientas de validación
  - Guía de mantenimiento

- `docs/FAVICONS.md`
  - Guía para crear/actualizar favicons
  - Especificaciones requeridas
  - Herramientas recomendadas
  - Pasos de implementación
  - Guía de testing

- `docs/CAMBIOS.md`
  - Este archivo
  - Registro de todos los cambios realizados

### Detalles Técnicos

#### Variables de Entorno
Se implementó uso de `NEXT_PUBLIC_SITE_URL` en:
- `app/layout.tsx` (metadataBase, Open Graph URL)
- `app/robots.ts` (sitemap URL)
- `app/sitemap.ts` (URLs del sitemap)
- `app/page.tsx` (Schema.org URLs)

**Nota:** Crear archivo `.env.local` con:
```env
NEXT_PUBLIC_SITE_URL=https://amazoniico.co
```

#### Schema.org JSON-LD
Implementado en página principal con:
- Tipo: Product
- Información de marca
- Ofertas con precio y moneda (COP)
- Ratings agregados (valores de ejemplo)

**Nota:** Actualizar ratings con datos reales cuando estén disponibles.

### Pendientes

1. **Favicons**
   - [ ] Crear favicons personalizados de Amazoniico
   - [ ] Colocar en `/public/`
   - [ ] Verificar que funcionen correctamente

2. **Variables de Entorno**
   - [ ] Crear `.env.local` con URL real
   - [ ] Configurar en producción

3. **SEO Adicional**
   - [ ] Crear imagen OG optimizada (1200x630px)
   - [ ] Crear imagen Twitter optimizada (1200x675px)
   - [ ] Agregar alt text a todas las imágenes
   - [ ] Actualizar Schema.org con datos reales (ratings, reviews)

4. **Testing**
   - [ ] Probar robots.txt
   - [ ] Probar sitemap.xml
   - [ ] Validar Schema.org JSON-LD
   - [ ] Verificar Open Graph tags
   - [ ] Verificar Twitter Cards

### Notas

- Todos los cambios son compatibles con la versión actual de Next.js 16
- No se modificaron componentes existentes, solo metadata y archivos de configuración
- La funcionalidad del sitio no se ve afectada
- Los favicons eliminados deben ser reemplazados antes de producción

### Próximos Pasos Sugeridos

1. Crear favicons personalizados
2. Configurar dominio y variables de entorno
3. Validar SEO con herramientas (Google Search Console, etc.)
4. Agregar más contenido optimizado
5. Implementar Google Analytics
6. Configurar pruebas automatizadas

---

## Formato de Registro

Para futuros cambios, seguir este formato:

```markdown
## [YYYY-MM-DD] - Título del Cambio

### Cambios Realizados
- Descripción del cambio 1
- Descripción del cambio 2

### Archivos Modificados
- `ruta/archivo.tsx` - Descripción

### Archivos Creados
- `ruta/nuevo-archivo.ts` - Descripción

### Archivos Eliminados
- `ruta/archivo-viejo.ts` - Razón

### Testing
- [ ] Prueba realizada 1
- [ ] Prueba realizada 2

### Notas
- Notas adicionales
```

