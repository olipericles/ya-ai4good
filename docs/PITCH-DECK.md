# Pitch Deck — Yá | Brazil Conference 2026

> Documentação técnica e narrativa da apresentação interativa de 10 slides.

---

## 📍 Rotas Disponíveis

| Rota | Modo | Descrição |
|------|------|-----------|
| `/vBC2026` | **Apresentação** | Fullscreen, navegação por clique/teclado |
| `/vBC2026t` | **Treino** | Slide (60%) + roteiro sincronizado (40%) |
| `/vBC2026op` | **One Page** | Scroll contínuo com todos os slides |
| `/vBC2026s` | **Script Viewer** | Roteiro Markdown renderizado |

---

## 🧱 Arquitetura de Slides

### Componentes Principais

```
src/components/presentation/
├── PresentationBC2026V4.tsx          # Orquestrador fullscreen
├── PresentationBC2026V4Training.tsx  # Orquestrador modo treino
├── PresentationBC2026V4OnePage.tsx   # Orquestrador scroll contínuo
├── ScriptViewer.tsx                  # Renderizador do roteiro .md
└── bc2026v4/                         # 10 slides individuais
    ├── SlideWaitingV4.tsx
    ├── SlideImpactV4.tsx
    ├── SlideProblemV4.tsx
    ├── SlideSolutionV4.tsx
    ├── SlideTestV4.tsx
    ├── SlideVoicesV4.tsx
    ├── SlideScaleV4.tsx
    ├── SlidePathV4.tsx
    ├── SlideTeamV4.tsx
    └── SlideQRCodeV4.tsx
```

### Padrão de Cada Slide

Todo slide exporta:
- **Componente default** — recebe `{ isActive, mode?, slideNumber?, step? }`
- **Constante `SLIDE_*_STEPS`** — número de sub-steps internos (animações progressivas)

```tsx
// Exemplo: SlideImpactV4.tsx
export const SLIDE_IMPACT_V4_STEPS = 3;

const SlideImpactV4 = ({ isActive, step = 0 }: SlideImpactV4Props) => {
    if (!isActive) return null;
    // step 0: estado inicial
    // step 1: revela dado 1
    // step 2: revela dado 2
    // step 3: revela dado 3
};
```

---

## 🎬 Estrutura Narrativa (10 Slides)

| # | Slide | Componente | Sub-steps | Tempo | Quem fala | Arco emocional |
|---|-------|-----------|-----------|-------|-----------|----------------|
| 0 | **Espera** | `SlideWaitingV4` | 0 | ~10s | Adriele | Antecipação |
| 1 | **Impacto** | `SlideImpactV4` | 3 | ~45s | Adriele | Íntima, pausada |
| 2 | **O Problema** | `SlideProblemV4` | 4 | ~40s | Adriele | Intensa, crescente |
| 3 | **A Solução** | `SlideSolutionV4` | 3 | ~50s | Luã | Clara, moderada |
| 4 | **O Teste** | `SlideTestV4` | 3 | ~40s | Luã → Adriele | Confiante |
| 5 | **As Vozes** | `SlideVoicesV4` | 2 | ~60s | Adriele | Emocional, lenta |
| 6 | **Escalar** | `SlideScaleV4` | 1 | ~50s | Adriele → Péricles | Celebração → ambição |
| 7 | **O Caminho** | `SlidePathV4` | 4 | ~45s | Péricles | Reflexiva → provocativa |
| 8 | **Nós** | `SlideTeamV4` | 1 | ~50s | Todos (jogral) | Firme, unida |
| 9 | **QR Code** | `SlideQRCodeV4` | 0 | — | — | Curiosidade |

**Total: 30 cliques | ~8 minutos**

---

## 🔄 Sistema de Navegação

### Como funciona

O orquestrador (`PresentationBC2026V4.tsx`) mantém dois estados:
- `currentSlide` — índice do slide ativo (0–9)
- `currentStep` — sub-step dentro do slide (0–N)

**Ao clicar/teclar →:**
1. Se `currentStep < maxSteps` → incrementa step (animação interna)
2. Se step já está no máximo → avança para o próximo slide com `step = 0`

**Ao clicar/teclar ←:**
1. Se `currentStep > 0` → decrementa step
2. Se step é 0 → volta ao slide anterior no último step

### Controles

| Ação | Tecla |
|------|-------|
| Avançar | `→` / `Space` / `Enter` |
| Voltar | `←` |
| Início | `Home` (só modo treino) |
| Fim | `End` (só modo treino) |

---

## 📝 Roteiro Sincronizado

### Arquivo fonte

O roteiro vive em `src/assets/docs/roteiro.md` e é importado como string raw via Vite:

```ts
import roteiroRaw from "@/assets/docs/roteiro.md?raw";
```

### Parser

`src/lib/parseRoteiro.ts` extrai de cada bloco `## SLIDE N`:

```ts
interface SlideScript {
    title: string;   // "SLIDE 0 — Tela de Espera"
    time: string;    // "~45s"
    speaker: string; // "Adriele"
    notes: string;   // Notas de palco combinadas
    script: string;  // Corpo do roteiro (markdown)
}
```

### Modo Treino

O `PresentationBC2026V4Training` renderiza lado a lado:
- **60% esquerda:** slide visual com navegação
- **40% direita:** painel com título, tempo, speaker, notas e roteiro formatado

Marcadores `CLIQUE` no roteiro são renderizados como badges visuais para o apresentador saber quando clicar.

---

## 🎭 Transições entre Apresentadores

O pitch é apresentado por 3 pessoas. As transições são **implícitas** (sem pausa visual):

| # | Transição | Gancho verbal | Onde |
|---|-----------|---------------|------|
| 1 | Adriele → Luã | "É falta de ferramenta." | Slide 2 → 3 |
| 2 | Luã → Adriele | "Veio com dados." | Slide 3 → 4 |
| 3 | Adriele continua | Dados → depoimentos → celebração | Slides 4–6 |
| 4 | Adriele → Péricles | Celebra presente → projeta futuro | Meio do Slide 6 |
| 5 | Péricles → Todos | "adorar essa conversa" → jogral | Slide 7 → 8 |

---

## ✏️ Como Editar

### Alterar conteúdo visual de um slide

1. Abra `src/components/presentation/bc2026v4/Slide*V4.tsx`
2. Modifique o JSX do step desejado (condicional `step >= N`)
3. Para adicionar/remover sub-steps, altere a constante `SLIDE_*_STEPS`

### Alterar o roteiro

1. Edite `src/assets/docs/roteiro.md`
2. Mantenha o formato `## SLIDE N: Título` para o parser funcionar
3. Use `CLIQUE` em linha separada para marcar pontos de clique

### Adicionar um novo slide

1. Crie `src/components/presentation/bc2026v4/SlideNovoV4.tsx`
2. Exporte o componente default + `SLIDE_NOVO_V4_STEPS`
3. Importe nos 3 orquestradores (`PresentationBC2026V4*.tsx`)
4. Adicione ao array `STEPS_PER_SLIDE` na posição desejada
5. Adicione o bloco correspondente no `roteiro.md`

### Reordenar slides

1. Mude a ordem no array `STEPS_PER_SLIDE` nos orquestradores
2. Reordene os blocos `## SLIDE N` no `roteiro.md`
3. Atualize o mapa de transições se necessário

---

## 🎨 Design V4

A V4 é uma evolução híbrida:
- **Layout editorial** da V3 (tipografia forte, hierarquia clara)
- **Refinamento visual** da V2 (glassmorphism, glow, blur)
- **Barra de progresso** inferior com cor primária
- **Header contextual** com logo + badge "AI4GOOD 2026" (oculto no slide 0 e 9)
- **Tema escuro** exclusivo, usando tokens semânticos (`bg-background`, `text-foreground`, `bg-card`)

---

## ⚠️ Pontos de Atenção

1. **Slide 4 — números do piloto:** O roteiro usa 14→10→5→3. Confirmar com o time se esses são os números finais.
2. **Slide 7 — timing do 4º clique:** O visual da provocação precisa sincronizar com a fala do Péricles. Ensaiar.
3. **Slide 8 — credenciais após aplausos:** O clique que revela LinkedIn/GitHub só deve acontecer depois do momento emocional.
4. **Slide 0 — "Yá significa mãe":** Fala da Adriele acontece ANTES do primeiro clique, enquanto o logo está em tela.
