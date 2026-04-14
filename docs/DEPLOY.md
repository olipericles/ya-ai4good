# Deploy & Infraestrutura — Yá

> Configuração de PWA, SEO, domínio e processo de deploy.

---

## 🚀 Deploy

### Plataforma

O frontend é hospedado no **Lovable** com deploy automático a cada push.

| URL | Tipo |
|-----|------|
| `https://ya-ai4good.lovable.app` | URL publicada (produção) |
| `https://id-preview--*.lovable.app` | URL de preview (desenvolvimento) |

### Domínio Customizado

Para conectar um domínio próprio:

1. Acesse **Project Settings → Domains** no Lovable
2. Adicione o domínio (ex: `ya.com.br`) e `www.ya.com.br`
3. Configure no registrador:
   - **A Record** `@` → `185.158.133.1`
   - **A Record** `www` → `185.158.133.1`
   - **TXT Record** `_lovable` → valor fornecido pelo Lovable
4. SSL é provisionado automaticamente
5. Defina o domínio primário (o outro redireciona)

---

## 📱 PWA (Progressive Web App)

### Configuração

Plugin: `vite-plugin-pwa` em `vite.config.ts`

```ts
VitePWA({
  registerType: 'autoUpdate',
  manifest: {
    name: 'Yá',
    short_name: 'Yá',
    start_url: '/dashboard',    // Abre direto no painel
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    theme_color: '#0A0A0A',
    background_color: '#0A0A0A',
  }
})
```

### Ícones

| Arquivo | Tamanho | Uso |
|---------|---------|-----|
| `public/favicon.png` | 192x192 / 512x512 | Ícone do app (Android + PWA) |
| `public/favicon.ico` | 32x32 | Favicon do navegador |

> ⚠️ **Melhoria recomendada:** Criar ícones separados para 192x192 e 512x512 com `purpose: maskable` independente.

### Cache (Workbox)

| Tipo | Estratégia | Detalhes |
|------|-----------|----------|
| Assets estáticos | **Precache** | JS, CSS, HTML, ícones, SVGs |
| API (`praxisagencia.com.br`) | **NetworkFirst** | Cache fallback com timeout de 10s, expira em 7 dias, máx 50 entries |

### Prompt de Instalação

Componente: `src/components/PWAPrompt.tsx`

- **Android:** Intercepta `beforeinstallprompt` → botão nativo
- **iOS (Safari):** Detecta user agent → instruções manuais (Compartilhar → Tela Inicial)
- Exibido apenas em `/dashboard/:phone` (usuária logada)

---

## 🔍 SEO

### Meta Tags (`index.html`)

| Tag | Valor |
|-----|-------|
| `<title>` | Yá - Cuidando de Quem Cuida |
| `<meta name="description">` | Yá é uma assistente financeira no WhatsApp para mães solo brasileiras... |
| `<meta name="author">` | Adriele Ornellas, Péricles Oliveira, Luã Mota |
| `<meta property="og:type">` | website |
| `<meta property="og:title">` | Yá - Cuidando de Quem Cuida |
| `<meta property="og:description">` | (mesma da description) |
| `<meta property="og:image">` | Imagem OG hospedada no GCS |
| `<meta name="twitter:card">` | summary_large_image |
| `<meta name="theme-color">` | #0A0A0A |

### Apple Web App

```html
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
<meta name="apple-mobile-web-app-title" content="Yá" />
<link rel="apple-touch-icon" href="/favicon.png" />
```

### robots.txt

```
User-agent: *
Allow: /
```

Bots específicos permitidos: Googlebot, Bingbot, Twitterbot, facebookexternalhit.

### SEO Checklist

| Item | Status |
|------|--------|
| Title < 60 chars ✓ | ✅ "Yá - Cuidando de Quem Cuida" (28 chars) |
| Meta description < 160 chars ✓ | ✅ |
| OG tags completas | ✅ |
| Twitter card | ✅ |
| `lang="en"` no HTML | ⚠️ Deveria ser `"pt-BR"` |
| Canonical tag | ❌ Não implementado |
| JSON-LD (structured data) | ❌ Não implementado |
| Sitemap.xml | ❌ Não implementado |
| H1 único por página | ✅ (landing page) |
| Alt text em imagens | ✅ (maioria) |
| Viewport responsivo | ✅ |

---

## 🗺️ Mapa de Rotas

| Rota | Componente | Público | Indexável |
|------|-----------|---------|-----------|
| `/` | `LandingV5` | ✅ | ✅ Sim |
| `/original` | `LandingOriginal` | ✅ | ❌ Legacy |
| `/v1`, `/v2`, `/v3` | Versões antigas | ✅ | ❌ Legacy |
| `/vBC2026` | Pitch Deck V4 | ✅* | ❌ Não |
| `/vBC2026t` | Modo Treino | ✅* | ❌ Não |
| `/vBC2026op` | One Page | ✅* | ❌ Não |
| `/vBC2026s` | Script Viewer | ✅* | ❌ Não |
| `/dashboard` | Login/Admin | ✅ | ❌ Não |
| `/dashboard/:phone` | Dashboard Usuária | 🔐 Auth | ❌ Não |
| `*` | NotFound (404) | ✅ | ❌ |

\* Pitch deck protegido por senha visual (`ai4good`) — não é segurança real.

---

## ⚙️ Variáveis de Ambiente

| Variável | Default | Descrição |
|----------|---------|-----------|
| `VITE_API_URL` | `https://www.praxisagencia.com.br` | URL base do backend FastAPI |

> Não há `.env` file no Lovable. Variáveis são configuradas via Project Settings → Secrets.

---

## 🛠️ Build & Dev

```bash
# Desenvolvimento local
npm install
npm run dev          # Vite dev server na porta 8080

# Build de produção
npm run build        # Output em dist/
npm run preview      # Preview do build local
```

### Stack de build

| Ferramenta | Versão | Função |
|------------|--------|--------|
| Vite | 5.x | Bundler + dev server |
| React | 18.x | UI framework |
| TypeScript | 5.x | Type checking |
| Tailwind CSS | 3.x | Styling |
| PostCSS | 8.x | CSS processing |
| vite-plugin-pwa | — | Service worker + manifest |

---

## 📋 Melhorias Recomendadas

### SEO
- [ ] Alterar `lang="en"` para `lang="pt-BR"` no `index.html`
- [ ] Adicionar `<link rel="canonical">` na landing page
- [ ] Criar `public/sitemap.xml` com rotas públicas
- [ ] Adicionar JSON-LD (Organization + SoftwareApplication)
- [ ] Hospedar imagem OG em URL permanente (atual usa URL temporária do GCS)

### PWA
- [ ] Criar ícones dedicados 192x192 e 512x512 (atualmente usa o mesmo `favicon.png`)
- [ ] Separar `purpose: any` e `purpose: maskable` em ícones distintos
- [ ] Adicionar `navigateFallbackDenylist: [/^\/~oauth/]` ao Workbox (se OAuth for implementado)

### Limpeza de Rotas
- [ ] Considerar remover rotas legacy (`/original`, `/v1`, `/v2`, `/v3`) em produção
- [ ] Adicionar `noindex` meta tag nas rotas de pitch deck
