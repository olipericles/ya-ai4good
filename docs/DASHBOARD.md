# Dashboard — Yá

> Documentação do painel financeiro (usuária) e painel administrativo (admin).

---

## 📍 Rotas

| Rota | Descrição |
|------|-----------|
| `/dashboard` | Login (telefone ou admin) |
| `/dashboard/:phone` | Dashboard da usuária (com deep link e PWA) |

---

## 🏗️ Arquitetura de Componentes

```
src/pages/Dashboard/
├── Dashboard.tsx          # Orquestrador: roteamento login/user/admin
├── DashboardLogin.tsx     # Tela de login multi-step
├── DashboardUser.tsx      # Painel financeiro da usuária
└── DashboardAdmin.tsx     # Painel administrativo
```

### Fluxo do `Dashboard.tsx`

```
Sem token → DashboardLogin
Token + role=user → DashboardUser + PWAPrompt
Token + role=admin → DashboardAdmin
```

Sessão armazenada em `localStorage`:
| Chave | Conteúdo |
|-------|----------|
| `ya_token` | JWT retornado pela API |
| `ya_role` | `"user"` ou `"admin"` |
| `ya_userid` | ID numérico da usuária |
| `ya_username` | Nome da usuária |
| `ya_userphone` | Telefone (usado no redirect) |

> ⚠️ **Segurança:** Roles via localStorage — migrar para validação server-side em produção.

---

## 🔐 Fluxo de Autenticação

### Usuária (por telefone)

```
[phone] → POST /api/user/check-phone
         ├─ não existe → tela "cadastre-se via WhatsApp"
         ├─ existe, sem senha → tela "criar senha" → POST /api/user/register-password
         └─ existe, com senha → tela "digitar senha" → POST /api/user/login
                                    └─ esqueceu? → POST /api/user/request-reset
                                                   → POST /api/user/reset-password (PIN via WhatsApp)
```

**Steps do login (`DashboardLogin.tsx`):**

| Step | Descrição |
|------|-----------|
| `phone` | Entrada do telefone |
| `password` | Digitar senha (usuária existente) |
| `create-password` | Primeiro acesso — criar senha |
| `not-registered` | Telefone não encontrado → CTA WhatsApp |
| `admin` | Login admin (user + senha) |
| `reset-request` | Solicitar PIN de recuperação |
| `reset-verify` | Digitar PIN + nova senha |

### Admin

```
[username + password] → POST /api/logs/auth → token admin
```

Acesso via link "Acesso Admin" no rodapé da tela de login.

---

## 📊 Dashboard da Usuária (`DashboardUser.tsx`)

### Dados consumidos

```
GET /api/user/dashboard/:userId
Authorization: Bearer <token>
```

**Resposta (`DashboardData`):**

```ts
interface DashboardData {
    entradas: number;        // Total de receitas
    saidas: number;          // Total de despesas
    saldo: number;           // Diferença (entradas - saídas)
    num_transacoes: number;  // Contagem de lançamentos
    categorias: Category[];  // Agrupamento por categoria e tipo
    transacoes_recentes: Transaction[];  // Últimos lançamentos
}

interface Category {
    categoria: string | null;
    tipo: 'RECEITA' | 'DESPESA';
    total: number;
}

interface Transaction {
    produto: string;
    categoria: string | null;
    data: string;
    tipo: 'RECEITA' | 'DESPESA';
    valor_total: number;
}
```

### Visualizações

| Componente | Tipo | Descrição |
|------------|------|-----------|
| **Cards resumo** | 4 cards | Entradas, Saídas, Saldo, Nº de Lançamentos |
| **Gráfico de rosca** | PieChart (Recharts) | Distribuição por categoria — tabs Saídas/Entradas |
| **Transações recentes** | Lista | Últimos lançamentos com produto, categoria, valor |
| **Evolução diária** | BarChart | Gastos por dia (últimos 14 dias) |

---

## 🛡️ Dashboard Admin (`DashboardAdmin.tsx`)

### Dados consumidos

| Endpoint | Método | Descrição |
|----------|--------|-----------|
| `GET /api/logs/users` | Lista | Todas as usuárias ativas |
| `GET /api/logs/user/:phone` | Lista | Histórico de chat de uma usuária |
| `GET /api/logs/execution/:id/details` | Detalhes | Rastreamento de execução da IA |

### Layout

```
┌─────────────┬──────────────────────────────────┐
│  Sidebar    │  Área principal                   │
│  (usuárias) │  Sem seleção: métricas globais    │
│  + busca    │  Com seleção: chat logs da user   │
└─────────────┴──────────────────────────────────┘
```

### Métricas globais (idle)

- Total de usuárias cadastradas
- Ativas hoje
- Gráfico de barras: atividade nos últimos 14 dias

### Chat viewer (com usuária selecionada)

- Mensagens da usuária (balão direito, cor primária)
- Respostas da IA (balão esquerdo, com ícone bot)
- Botão "Ver detalhes" em cada interação → expande nós de execução da IA
- Detalhes de execução: `node_type`, `node_name`, `output_summary`

---

## 📱 PWA

O componente `PWAPrompt` é exibido apenas na rota `/dashboard/:phone` (usuária logada).

- **Android:** Usa `beforeinstallprompt` para botão nativo de instalação
- **iOS:** Detecta Safari e exibe instruções manuais (Compartilhar → Tela Inicial)
- `start_url` configurado como `/dashboard` no manifest

---

## 🔌 API Externa (FastAPI)

Base URL: `VITE_API_URL` (default: `https://www.praxisagencia.com.br`)

### Endpoints completos

| Endpoint | Método | Auth | Descrição |
|----------|--------|------|-----------|
| `/api/user/check-phone` | POST | — | Verifica cadastro do telefone |
| `/api/user/login` | POST | — | Login com telefone + senha → JWT |
| `/api/user/register-password` | POST | — | Primeiro acesso → criar senha + JWT |
| `/api/user/request-reset` | POST | — | Envia PIN de recuperação via WhatsApp |
| `/api/user/reset-password` | POST | — | Redefine senha com PIN |
| `/api/user/dashboard/:id` | GET | Bearer | Dados financeiros da usuária |
| `/api/logs/auth` | POST | — | Login admin |
| `/api/logs/users` | GET | Bearer | Lista de usuárias (admin) |
| `/api/logs/user/:phone` | GET | Bearer | Chat logs de uma usuária (admin) |
| `/api/logs/execution/:id/details` | GET | Bearer | Detalhes de execução IA (admin) |

---

## ✏️ Como Editar

### Adicionar um card no dashboard da usuária

1. Adicionar campo na interface `DashboardData` em `DashboardUser.tsx`
2. Criar o card JSX no grid de resumo
3. Garantir que o backend retorna o novo campo

### Adicionar uma métrica no admin

1. Expandir o `useMemo` de `adminMetrics` em `DashboardAdmin.tsx`
2. Adicionar card ou gráfico na seção idle (quando nenhuma usuária está selecionada)

### Alterar cores dos gráficos

As cores estão hardcoded nos arrays dentro dos componentes:
- Despesas: `['#fb7185', '#E55B3C', '#8B3A8B', '#D4AF37', '#e11d48']`
- Receitas: `['#34d399', '#10b981', '#059669', '#6ee7b7']`
