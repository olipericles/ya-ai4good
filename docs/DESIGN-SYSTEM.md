# Design System — Yá

> Documentação de tokens, cores, tipografia, componentes e diretrizes visuais.

---

## 🎨 Filosofia

- **Tema escuro exclusivo** (sem light mode)
- **Paleta quente e empoderadora**: coral, roxo profundo, dourado
- **Glassmorphism**: blur, bordas translúcidas, glows sutis
- **Tokens semânticos obrigatórios**: nunca usar cores diretas (`text-white`, `bg-black`)

---

## 🎛️ Arquivos do Design System

| Arquivo | Responsabilidade |
|---------|-----------------|
| `src/index.css` | Tokens CSS (`:root`), utilities customizadas, keyframes |
| `tailwind.config.ts` | Mapeamento tokens → classes Tailwind |
| `src/components/ui/` | Componentes shadcn/ui customizados |

---

## 🏷️ Tokens de Cor

### Semânticos (usar estes)

| Token | CSS Variable | HSL | Uso |
|-------|-------------|-----|-----|
| `bg-background` | `--background` | `240 10% 6%` | Fundo global |
| `text-foreground` | `--foreground` | `45 30% 96%` | Texto principal |
| `bg-card` | `--card` | `240 8% 10%` | Cards, painéis |
| `bg-primary` | `--primary` | `18 85% 55%` | Coral — CTAs, destaques |
| `text-primary` | `--primary` | `18 85% 55%` | Texto de destaque |
| `bg-secondary` | `--secondary` | `280 60% 45%` | Roxo profundo |
| `bg-accent` | `--accent` | `45 90% 55%` | Dourado — highlights |
| `bg-muted` | `--muted` | `240 6% 15%` | Elementos sutis |
| `text-muted-foreground` | `--muted-foreground` | `240 5% 60%` | Texto secundário |
| `border-border` | `--border` | `240 6% 20%` | Bordas |
| `bg-destructive` | `--destructive` | `0 72% 50%` | Erros |

### Tokens customizados Yá

| Token CSS | HSL | Uso |
|-----------|-----|-----|
| `--ya-coral` | `18 85% 55%` | Coral primário |
| `--ya-coral-light` | `18 85% 65%` | Coral claro |
| `--ya-purple` | `280 60% 45%` | Roxo profundo |
| `--ya-purple-light` | `280 50% 60%` | Roxo claro |
| `--ya-gold` | `45 90% 55%` | Dourado |
| `--ya-dark` | `240 10% 6%` | Fundo escuro |
| `--ya-darker` | `240 12% 4%` | Fundo mais escuro |

---

## 🌈 Gradientes

| Nome | CSS | Uso |
|------|-----|-----|
| `--gradient-hero` | `coral → roxo (135deg)` | Hero sections, badges |
| `--gradient-warm` | `coral/20% → transparente` | Overlays sutis |
| `--gradient-card` | `card 12% → card 8%` | Fundo de cards |

Utilities disponíveis:
```html
<div class="text-gradient">Texto com gradiente</div>
<div class="bg-gradient-hero">Fundo hero</div>
```

---

## 💡 Sombras e Glows

| Utility | Efeito |
|---------|--------|
| `glow-coral` | `box-shadow: 0 0 60px coral/40%` |
| `glow-purple` | `box-shadow: 0 0 60px roxo/40%` |
| `--shadow-glow` | `0 0 60px coral/30%` |
| `--shadow-card` | `0 4px 30px preto/30%` |

---

## ✍️ Tipografia

| Propriedade | Valor |
|-------------|-------|
| **Fonte principal** | Inter (Google Fonts) |
| **Pesos usados** | 300–900 |
| **Display** | `font-display` (alias para Inter) |
| **Mono** | `font-mono` (dados, labels, timestamps) |
| **Rendering** | `antialiased` |

### Convenções por contexto

| Contexto | Classes típicas |
|----------|----------------|
| Título principal | `text-3xl md:text-5xl font-display font-black tracking-tight` |
| Subtítulo | `text-lg font-display font-bold` |
| Corpo | `text-base text-foreground leading-relaxed` |
| Label/badge | `text-xs font-mono uppercase tracking-widest` |
| Dado numérico | `text-4xl font-display font-black font-mono` |
| Citação | `text-lg italic text-foreground/80` |

---

## 🎬 Animações

### Utilities customizadas (index.css)

| Classe | Duração | Efeito |
|--------|---------|--------|
| `animate-float` | 6s loop | Flutuar Y ±20px |
| `animate-pulse-slow` | 4s loop | Opacidade 1→0.7→1 |
| `animate-fade-up` | 0.8s | Fade + translateY(40→0) |
| `animate-fade-in` | 0.6s | Fade simples |
| `animate-scale-in` | 0.5s | Scale 0.9→1 + fade |
| `animate-slide-left` | 0.6s | translateX(60→0) |
| `animate-slide-right` | 0.6s | translateX(-60→0) |
| `animate-slide-down` | 8s loop | Flutuar Y com opacidade |

### Delays

Classes `delay-100` a `delay-800` (incrementos de 100ms).

### Tailwind Animate (plugin)

`tailwindcss-animate` está instalado, habilitando:
- `animate-in`, `fade-in`, `slide-in-from-bottom-*`
- `duration-*` para controle de tempo

---

## 🧱 Componentes (shadcn/ui)

Base: shadcn/ui com customizações. Todos em `src/components/ui/`.

### Componentes disponíveis

Accordion, Alert, AlertDialog, AspectRatio, Avatar, Badge, Breadcrumb, Button, Calendar, Card, Carousel, Chart, Checkbox, Collapsible, Command, ContextMenu, Dialog, Drawer, DropdownMenu, Form, HoverCard, Input, InputOTP, Label, Menubar, NavigationMenu, Pagination, Popover, Progress, RadioGroup, Resizable, ScrollArea, Select, Separator, Sheet, Sidebar, Skeleton, Slider, Sonner, Switch, Table, Tabs, Textarea, Toast, Toggle, ToggleGroup, Tooltip.

### Customizações importantes

- **Border radius**: `--radius: 0.75rem` (12px) — componentes usam `rounded-lg/md/sm`
- **Ring color**: Coral primário para focus states
- **Dark mode**: `darkMode: ["class"]` no Tailwind — mas o app só usa dark

---

## ✅ Regras de Uso

### ✔️ FAZER

```tsx
// Usar tokens semânticos
<div className="bg-card text-foreground border-border">
<button className="bg-primary text-primary-foreground">
<p className="text-muted-foreground">
```

### ❌ NÃO FAZER

```tsx
// Nunca cores diretas
<div className="bg-white text-black">
<div className="bg-gray-900 text-gray-100">
<div className="bg-[#E55B3C]">  // usar bg-primary
```

### Exceções aceitas

Cores hardcoded são toleradas apenas em:
- Gráficos Recharts (arrays de cores em `DashboardUser.tsx` / `DashboardAdmin.tsx`)
- Partículas decorativas de background (glows com opacidade muito baixa)

---

## 🔧 Como Alterar o Tema

1. **Cores**: Editar variáveis HSL em `:root` no `src/index.css`
2. **Gradientes**: Atualizar `--gradient-*` no mesmo arquivo
3. **Raio de borda**: Alterar `--radius` no `:root`
4. **Fonte**: Trocar import do Google Fonts + `--font-display`
5. **Mapeamento Tailwind**: `tailwind.config.ts` geralmente não precisa de edição (mapeia automaticamente via `hsl(var(--*))`)

> ⚠️ Nunca editar esses arquivos sem solicitação explícita do usuário.
