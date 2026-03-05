# Yá — Assistente Financeira no WhatsApp

> **"Yá" significa "mãe" em Yorubá.** Uma IA que cuida de quem cuida de todo mundo.

🏆 **Top 3 [AI4Good 2026](https://www.brazilconference.org/)** — Harvard & MIT | Top 3 entre 188 projetos do Brasil

---

## 🧭 Visão Geral

A **Yá** é uma assistente financeira conversacional que roda dentro do WhatsApp, feita para **11 milhões** de mães solo brasileiras. OCR de cupom fiscal, análise por áudio, insights personalizados — tudo na linguagem delas, sem julgamento.

Este repositório contém o **frontend web** do projeto:

| Módulo | Descrição | Rota |
|--------|-----------|------|
| **Landing Page** | Página pública bilíngue (PT/EN) com narrativa da marca e CTAs para WhatsApp | `/` |
| **Pitch Deck V4** | Apresentação interativa de 10 slides com sub-steps (Brazil Conference 2026) | `/vBC2026` |
| **Pitch Training** | Modo treino: slides + roteiro sincronizado lado a lado | `/vBC2026t` |
| **Pitch One Page** | Versão scroll contínuo de todos os slides | `/vBC2026op` |
| **Script Viewer** | Visualizador do roteiro em Markdown | `/vBC2026s` |
| **Dashboard Usuária** | Painel financeiro pessoal (receitas, despesas, categorias, gráficos) | `/dashboard/:phone` |
| **Dashboard Admin** | Painel para visualizar usuárias, logs de chat e rastreamento da IA | `/dashboard` (login admin) |

---

## 🏗️ Arquitetura

```
src/
├── assets/              # Imagens, logos, fotos da equipe, roteiro (.md)
├── components/
│   ├── landing/         # Seções da landing page (versões anteriores)
│   ├── presentation/
│   │   ├── bc2026v4/    # 10 slides individuais do pitch V4 (versão ativa)
│   │   ├── Presentation*.tsx  # Orquestradores (fullscreen, training, one-page)
│   │   └── ScriptViewer.tsx   # Renderizador de roteiro Markdown
│   ├── ui/              # Componentes shadcn/ui customizados
│   └── PWAPrompt.tsx    # Prompt de instalação PWA (iOS + Android)
├── hooks/               # Hooks customizados (mobile detection, toast)
├── lib/                 # Utilitários (parseRoteiro, cn)
├── pages/
│   ├── Dashboard/       # Login, User Dashboard, Admin Dashboard
│   ├── LandingV5.tsx    # Landing page principal (ativa)
│   └── Index*.tsx       # Wrappers de rota para apresentações
└── App.tsx              # Router principal
```

### Stack

- **Frontend**: React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui
- **Assistente**: WhatsApp Business API + IA conversacional (externo)
- **Deploy**: Lovable (frontend) + Docker (backend)

### Backend (externo)

O backend roda em `praxisagencia.com.br` (FastAPI) e **não está neste repositório**. Endpoints consumidos:

| Endpoint | Descrição |
|----------|-----------|
| `POST /api/user/check-phone` | Verificar se telefone está cadastrado |
| `POST /api/user/login` | Autenticação com senha |
| `POST /api/user/register-password` | Primeiro acesso — cadastrar senha |
| `POST /api/user/request-reset` | Recuperação de senha via WhatsApp PIN |
| `POST /api/user/reset-password` | Redefinir senha com PIN |
| `GET /api/user/dashboard/:id` | Dados financeiros da usuária |
| `POST /api/logs/auth` | Login admin |
| `GET /api/logs/users` | Lista de usuárias ativas |
| `GET /api/logs/user/:phone` | Histórico de chat de uma usuária |
| `GET /api/logs/execution/:id/details` | Detalhes de execução da IA |

### PWA

App instalável via `vite-plugin-pwa`:
- Cache offline com Workbox (NetworkFirst para API, CacheFirst para assets)
- `start_url: /dashboard` — abre direto no painel ao instalar
- Prompt inteligente: Android usa `beforeinstallprompt`, iOS mostra instruções manuais

---

## 🎨 Design System

- **Tema escuro** (dark mode only)
- **Paleta**: Primária coral/terracota (`--primary`), secundária roxa, dourado como accent
- **Tipografia**: Sans-serif (UI), mono (dados/labels), serif (citações)
- **Componentes**: shadcn/ui com variantes customizadas
- **Tokens semânticos**: Usar tokens CSS (`bg-card`, `text-foreground`, `border-border`) — nunca valores diretos

---

## 🚀 Desenvolvimento Local

```bash
git clone https://github.com/olipericles/ya-ai4good.git
cd ya-ai4good
npm install
npm run dev
```

### Variáveis de Ambiente

| Variável | Padrão | Descrição |
|----------|--------|-----------|
| `VITE_API_URL` | `https://www.praxisagencia.com.br` | URL base da API backend |

---

## 🔒 Segurança

- **Auth usuária**: JWT via API externa, `localStorage`
- **Pitch Deck**: Senha visual (`ai4good`) — não é segurança real
- **Admin**: Auth separada via `/api/logs/auth`
- ⚠️ Roles (user/admin) usam `localStorage` — migrar para validação server-side em produção

---

## 📋 Roadmap de Documentação

| Fase | Escopo | Status |
|------|--------|--------|
| **1. README.md** | Visão geral, arquitetura, rotas, setup | ✅ Feito |
| **2. docs/PITCH-DECK.md** | Estrutura narrativa dos 10 slides, sub-steps, como editar conteúdo | 📋 Planejado |
| **3. docs/DASHBOARD.md** | Fluxo de auth, endpoints, estrutura de dados financeiros | 📋 Planejado |
| **4. docs/DESIGN-SYSTEM.md** | Tokens, componentes, variantes, guidelines de contraste | 📋 Planejado |
| **5. docs/DEPLOY.md** | PWA config, domínio, SEO checklist | 📋 Planejado |

---

## 👥 Equipe

| Nome | Papel | LinkedIn |
|------|-------|----------|
| **Adriele Ornellas** | CEO & Idealizadora | [adrieleornellas](https://www.linkedin.com/in/adrieleornellas/) |
| **Luã Mota** | CTO & Produto | [luaamota](https://www.linkedin.com/in/luaamota/) |
| **Péricles Oliveira** | CPO & Estratégia | [olipericles](https://www.linkedin.com/in/olipericles/) |

## 📧 Contato

s.olipericles@gmail.com

---

*Projeto AI4Good 2026 — Todos os direitos reservados.*
