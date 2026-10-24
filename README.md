# Prepizzas Alejo — sitio web

Sitio estático (single page) de **Prepizzas Alejo**, empresa familiar de prepizzas caseras.
El cliente arma el pedido en el navegador y lo envía por WhatsApp (`https://wa.me/<numero>?text=...`).
No hay backend.

Stack: Vite + React 18 + TypeScript + Tailwind CSS. Tests con Vitest + Testing Library.

## Cómo correrlo

Requiere Node 20 o superior.

```bash
npm install
npm run dev       # servidor de desarrollo en http://localhost:5173
npm run build     # build de producción en dist/
npm run preview   # sirve el build localmente
npm run lint      # ESLint
npm test          # tests unitarios (Vitest)
npm run format    # Prettier
```

## Cambiar los datos del negocio

Todo está centralizado en **`src/config/site.ts`**: nombre, número de WhatsApp, Instagram,
zona de envío, horarios, texto de "Nosotros" y si se ofrece retiro y/o envío.
Los valores actuales son de ejemplo y están marcados con `// TODO: reemplazar con dato real`.

- `whatsappNumber`: formato internacional **sin `+` ni espacios**. Para un celular de Argentina:
  `549` + código de área sin 0 + número sin 15. Ej.: `5491123456789`.
- `instagram`: usuario sin `@`.
- `shipping`: `{ pickup: true, delivery: true }`. Si se desactiva uno, el carrito deja de ofrecerlo.

## Cambiar productos y precios

Editá **`src/data/products.ts`**. Cada producto tiene:

| Campo         | Descripción                                                         |
| ------------- | ------------------------------------------------------------------- |
| `id`          | Identificador único (también nombre de la imagen)                   |
| `name`        | Nombre visible                                                      |
| `description` | Texto corto                                                         |
| `price`       | Precio en pesos, número entero (ej. `2500`)                         |
| `image`       | Ruta relativa a `public/`, ej. `images/products/prepizza-comun.jpg` |
| `tag`         | Opcional: etiqueta destacada ("Sin TACC", "La más pedida")          |

Las fotos van en `public/images/products/<id>.jpg` (las actuales son placeholders, 800×600).

> Si cambiás el `id` o el precio de un producto, los carritos ya guardados en el navegador
> conservan el nombre y precio con el que se agregaron hasta que se vacíen.

## Cómo funciona el pedido

- El carrito vive en un React context con `useReducer` (`src/cart/`) y se guarda en
  `localStorage` con la clave `prepizzas-alejo-cart`.
- El mensaje se arma en `src/lib/whatsapp.ts` (`buildOrderMessage` y `buildWhatsAppUrl`).
- Al enviar se abre WhatsApp en una pestaña nueva y se vacía el carrito.

## Deploy (GitHub Pages)

El workflow está en **`deploy/github-pages.yml`**: hace lint, tests y build, y publica `dist/`
con `actions/deploy-pages` en cada push a `main`.

> Está fuera de `.github/workflows/` porque el token con el que se automatiza este repo no
> tiene permiso `workflow` para crear workflows. Activarlo es un paso único y manual:

1. Copiá el archivo: `mkdir -p .github/workflows && cp deploy/github-pages.yml .github/workflows/deploy.yml`
   y pusheá a `main` con tu usuario (o crealo desde la web de GitHub: _Add file → Create new file_).
2. En GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

### Ruta base (`VITE_BASE_PATH`)

`vite.config.ts` toma `base` de la variable `VITE_BASE_PATH` (por defecto `/`).

- Dominio propio o sitio de usuario (`https://<usuario>.github.io/`): dejala en `/`.
- Sitio de proyecto en `https://tefotazo.github.io/web-prepizzas-alejo/`: definí la variable
  del repositorio en **Settings → Secrets and variables → Actions → Variables** con
  `VITE_BASE_PATH` = `/web-prepizzas-alejo/` (con las dos barras). El workflow la lee de ahí.

Para probarlo localmente: `VITE_BASE_PATH=/web-prepizzas-alejo/ npm run build && npm run preview`.
Ver también `.env.example`.
