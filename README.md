# LadingContable

Landing de conversión para estudio contable especializado en monotributo y asesoramiento impositivo para autónomos y pequeñas empresas en Argentina.

## Qué es

Una landing page optimizada para generación de leads. El visitante puede:

- Conocer los servicios del estudio contable
- Ver beneficios, proceso de trabajo y testimonios
- Consultar preguntas frecuentes
- Contactar por WhatsApp directamente
- Completar un formulario de contacto con validación

## Stack

| Tecnología | Versión | Para qué |
|------------|---------|----------|
| Next.js | 16.2.7 | Framework (App Router) |
| React | 19.2.4 | UI |
| TypeScript | 5+ | Tipado estricto |
| Tailwind CSS | v4 | Estilos |
| Zod | 4+ | Validación de formularios |
| React Hook Form | 7+ | Manejo de formularios |
| pnpm | — | Package manager |

## Estructura

```
app/
├── actions/
│   └── contact.ts              # Server Action del formulario
├── components/
│   ├── sections/
│   │   ├── Hero.tsx            # Sección principal con CTA
│   │   ├── Benefits.tsx        # Beneficios del servicio
│   │   ├── Process.tsx         # Pasos del proceso
│   │   ├── SocialProof.tsx     # Testimonios
│   │   ├── FAQ.tsx             # Preguntas frecuentes
│   │   ├── Contact.tsx         # Formulario de contacto
│   │   └── Footer.tsx          # Pie de página
│   └── ui/
│       ├── Button.tsx          # Botón polimórfico
│       ├── Input.tsx           # Input con label y error
│       ├── Card.tsx            # Card con slots
│       └── Section.tsx         # Wrapper de sección
├── constants/
│   └── index.ts                # Datos del negocio y copy
├── lib/
│   └── validations/
│       └── contact.ts          # Schema de Zod
├── types/
│   └── index.ts                # Interfaces TypeScript
├── layout.tsx                  # Layout raíz con SEO
├── page.tsx                    # Página principal
└── globals.css                 # Theme tokens
```

## Características

- **Conversión optimizada**: CTA claro, fricción mínima, mobile-first
- **WhatsApp CTA**: Link directo con mensaje prellenado
- **Formulario validado**: Zod + React Hook Form + Server Action
- **SEO completo**: Metadata API, Open Graph, Twitter Cards, JSON-LD
- **Seguridad**: Headers de protección (X-Frame-Options, XSS-Protection, etc.)
- **Performance**: Server Components, next/image con AVIF/WebP, lazy loading
- **Accesibilidad**: HTML semántico, aria labels, focus management

## Desarrollo

```bash
# Instalar dependencias
pnpm install

# Servidor de desarrollo
pnpm dev

# Build de producción
pnpm build

# Lint
pnpm lint
```

Abrir [http://localhost:3000](http://localhost:3000)

## Deploy

El proyecto está preparado para deploy en [Vercel](https://vercel.com).

```bash
# Instalar CLI de Vercel
pnpm add -g vercel

# Deploy
vercel
```

## Configuración

Los datos del negocio se configuran en `app/constants/index.ts`:

- `SITE_METADATA`: título, descripción, keywords, URL del sitio
- `WHATSAPP_URL`: número de WhatsApp y mensaje prellenado
- `BENEFITS`: lista de beneficios
- `PROCESS_STEPS`: pasos del proceso
- `FAQS`: preguntas frecuentes
- `TESTIMONIALS`: testimonios de clientes

## License

Privado — Uso interno del estudio contable.
