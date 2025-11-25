# Amazoniico Landing Page

Landing page para Amazoniico - Colágeno Marino Hidrolizado Premium

## Descripción

Landing page desarrollada por CeroUno SAS para Amazoniico, producto de colágeno marino certificado INVIMA. El sitio presenta información sobre el producto, beneficios, testimonios, precios y políticas de envío.

## Tecnologías

- **Next.js 16** - Framework React con App Router
- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS 4** - Framework de estilos
- **Radix UI** - Componentes accesibles
- **Vercel Analytics** - Análisis de tráfico

## Estructura del Proyecto

```
├── app/                    # App Router de Next.js
│   ├── layout.tsx         # Layout principal con metadata SEO
│   ├── page.tsx           # Página principal
│   ├── globals.css        # Estilos globales
│   ├── devoluciones/      # Política de devoluciones
│   ├── privacidad/        # Política de privacidad
│   └── terminos/          # Términos y condiciones
├── components/            # Componentes React
│   ├── ui/               # Componentes UI base (shadcn/ui)
│   └── [componentes de sección]
└── public/               # Archivos estáticos
```

## Scripts Disponibles

```bash
# Desarrollo
pnpm dev

# Construcción para producción
pnpm build

# Iniciar servidor de producción
pnpm start

# Linter
pnpm lint
```

## Desarrollo

Desarrollado por **CeroUno SAS**

## SEO

El proyecto incluye optimizaciones SEO iniciales:
- Metadata completa (Open Graph, Twitter Cards)
- Schema.org JSON-LD
- Sitemap.xml
- Robots.txt
- Canonical URLs

Ver `docs/SEO.md` para más detalles.

## Licencia

Privado - Todos los derechos reservados
