# Deployment — teorianautica.com

## Arquitectura de subdominios

| Dominio | Proyecto | Tipo |
|---|---|---|
| `teorianautica.com` | teorianautica-landing | Landing estática (SSG) |
| `app.teorianautica.com` | teoria-nautica-conductor | App Next.js (SSR, Render). Todos los cursos |

---

## 1. DNS — Configurar dominio

En tu registrador de dominio (Namecheap, Cloudflare, etc.), agregar estos registros:

```
# Landing (teorianautica.com)
Tipo: CNAME  Nombre: @    Valor: [URL del deploy de landing, ej: teorianautica-landing.netlify.app]

# Conductor Náutico
Tipo: CNAME  Nombre: conductor  Valor: [URL del deploy actual, ej: teoria-nautica-conductor.up.railway.app]

# Timonel (futuro)
Tipo: CNAME  Nombre: timonel  Valor: [URL del deploy futuro]
```

> Si el registrador no permite CNAME en root (@), usá un ALIAS record o Cloudflare proxy.

---

## 2. Landing — Deploy estático

La landing usa `output: 'export'` en Next.js, generando HTML estático en `/out`.

### Opción A: Netlify
```bash
# Desde el root del proyecto
npm run build
# El output queda en /out — Netlify lo detecta automáticamente
```

En Netlify:
1. Conectar repo `luc-io/teorianautica-landing`
2. Build command: `npm run build`
3. Publish directory: `out`
4. Custom domain: `teorianautica.com`

### Opción B: Cloudflare Pages
```bash
# Build command: npm run build
# Output directory: out
```

### Opción C: Vercel
```bash
# Vercel detecta Next.js automáticamente
# Custom domain: teorianautica.com
```

---

## 3. Conductor — Deploy de la app

La app de Conductor Náutico ya está en producción. Solo hay que:

1. Agregar `conductor.teorianautica.com` como custom domain en el servicio de hosting actual (Railway/Vercel/etc.)
2. Actualizar la variable `NEXT_PUBLIC_APP_URL` en el `.env` de producción:
   ```
   NEXT_PUBLIC_APP_URL=https://conductor.teorianautica.com
   ```
3. Actualizar el redirect URL en Supabase Auth:
   - Dashboard > Authentication > URL Configuration
   - Site URL: `https://conductor.teorianautica.com`
   - Redirect URLs: agregar `https://conductor.teorianautica.com/**`

---

## 4. Auth — Cookies compartidas entre subdominios

Para que un login en `conductor.teorianautica.com` persista en `timonel.teorianautica.com`:

En el cliente de Supabase, configurar el dominio de la cookie:
```typescript
const supabase = createBrowserClient(url, key, {
  cookieOptions: {
    domain: '.teorianautica.com',  // nota el punto al inicio
    path: '/',
    sameSite: 'lax',
    secure: true,
  },
});
```

> Esto solo aplica cuando tengas múltiples apps. Para una sola app no es necesario.

---

## 5. PWA — Manifest por app

Cada app necesita su propio `manifest.json` en `/public`:

### conductor.teorianautica.com/manifest.json
```json
{
  "name": "Conductor Náutico",
  "short_name": "Conductor",
  "start_url": "/dashboard",
  "display": "standalone",
  "background_color": "#060e18",
  "theme_color": "#060e18",
  "icons": [
    { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

Agregar en `layout.tsx`:
```html
<link rel="manifest" href="/manifest.json" />
<meta name="theme-color" content="#060e18" />
<meta name="apple-mobile-web-app-capable" content="yes" />
```

---

## Checklist de lanzamiento

- [ ] Comprar dominio `teorianautica.com`
- [ ] Configurar DNS (landing + conductor subdomain)
- [ ] Deploy landing en Netlify/Vercel/Cloudflare Pages
- [ ] Agregar custom domain `conductor.teorianautica.com` al hosting de la app
- [ ] Actualizar `NEXT_PUBLIC_APP_URL` en producción
- [ ] Actualizar Supabase Auth redirect URLs
- [ ] Agregar manifest.json + iconos para PWA en la app de Conductor
- [ ] Probar instalación como PWA en iOS y Android
- [ ] Configurar SSL (automático en la mayoría de los proveedores)
- [ ] Verificar que los links de la landing apuntan correctamente
