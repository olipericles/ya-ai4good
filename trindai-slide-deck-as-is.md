# As-Is: `/trindai` Slide Deck
> Avaliação de estado atual, pendências e melhorias — 2026-04-29

---

## 1. Contexto e Localização

| Item | Valor |
|------|-------|
| Rota | `/trindai` |
| Página | `src/pages/TrindAIPage.tsx` |
| Componente orquestrador | `src/components/presentation/talk/PresentationTalk.tsx` |
| Variant | `"trindai"` |
| Total de slides | **14** |
| Canvas | 1920 × 1080 (scaled via `TalkSlideContainer`) |
| Referências de qualidade | `/vBC2026` (Brazil Conference) · `/v3` (demoday) |

Três variantes compartilham a mesma estrutura: `trindai`, `baia`, `rba`. As diferenças por variante são condicionais dentro de cada slide (subtítulo, blocos de texto, logos de rodapé).

---

## 2. Inventário de Slides — Estado Atual

| # | Componente | BG | Assets reais | Placeholders |
|---|------------|-----|-------------|-------------|
| 0 | `SlideAbertura` | Escuro | `ya_logo_branco.svg` | `logo_trindai` (dashed box) |
| 1 | `SlideQuemSouEu` | Claro | — | `foto_pericles_perfil.jpg` |
| 2 | `SlideProblemaMacro` | Escuro | — | — |
| 3 | `SlideProblemaEmocional` | Claro | — | `foto_vila_matos.jpg` |
| 4 | `SlideSolucao` | Escuro | `ya_logo_branco.svg` | — |
| 5 | `SlideDemo` | Claro | — | `demo_ya_whatsapp.gif` |
| 6 | `SlideArquitetura` | Escuro | — | `icon_whatsapp.svg` · `icon_n8n.svg` · `icon_gemini.svg` · `icon_postgresql.svg` · `print_n8n_workflow.png` |
| 7 | `SlidePiloto` | Claro | — | — |
| 8 | `SlideAI4Good` | Escuro | — | — |
| 9 | `SlideFotos` | Claro | — | `foto_harvard_palco.jpg` · `foto_mit_campus.jpg` · `foto_equipe_boston.jpg` |
| 10 | `SlideEquipe` | Escuro | — | `foto_pericles_card.jpg` · `foto_lua_card.jpg` · `foto_adriele_card.jpg` |
| 11 | `SlideVisao` | Claro | — | — |
| 12 | `SlideAprendizados` | Diagonal | — | `foto_engenharia_popular.jpg` |
| 13 | `SlideFechamento` | Escuro | `ya_logo_branco.svg` | `logo_trindai` · `logo_redebahia` |

**Assets reais disponíveis no projeto** (ainda não usados nos slides):

```
src/assets/team/
  equipe-pericles.png   ← substitui foto_pericles_*
  equipe-lua.png        ← substitui foto_lua_card.jpg
  equipe-adriele.png    ← substitui foto_adriele_card.jpg
  equipe.jpg / equipe-2.jpeg / equipe-centered.jpg

src/assets/images/
  ya-whatsapp-mockup.jpg    ← substitui demo area
  whatsapp-mockup.png
  interacao-carol-audio.jpeg
  interacao-carol-saldo.jpeg
  dash-carol.jpeg

src/assets/maes/
  1.jpeg … 14.jpeg, aurea.jpeg ← foto contexto periférico
```

---

## 3. Pendências Críticas (Bloqueantes)

### 3.1 Placeholders de Logo

**Onde:** `SlideAbertura` (rodapé direito) e `SlideFechamento` (rodapé central)

```tsx
// Atual — não é apresentável
<div className="h-[40px] w-[100px] rounded-lg border border-dashed border-[#666]">
  <span className="text-[9px] font-mono">logo_trindai</span>
</div>
```

**O que fazer:**
- Obter o arquivo `logo_trindai` e adicioná-lo em `src/assets/logos/`
- Obter `logo_redebahia` (presente em `/vbc2026`? verificar) e adicionar
- Substituir os `ImagePlaceholder` / dashed boxes por `<img src={...} alt="..." />`

### 3.2 Placeholders de Fotos — Slides sem Imagem Real

**Slides afetados:** 1, 3, 5, 6, 9, 10, 12

Todos usam `<ImagePlaceholder label="..." />` — um div com borda tracejada. Em apresentação ao vivo isso aparece como uma caixa vazia com texto mono.

**Ações imediatas por slide:**

| Slide | Placeholder | Substituto disponível |
|-------|------------|----------------------|
| 1 — Quem Sou Eu | `foto_pericles_perfil.jpg` | `equipe-pericles.png` ✅ |
| 3 — Problema Emocional | `foto_vila_matos.jpg` | `src/assets/maes/` (qualquer) ou foto de território |
| 5 — Demo | `demo_ya_whatsapp.gif` | `interacao-carol-audio.jpeg` + `interacao-carol-saldo.jpeg` ✅ |
| 6 — Arquitetura | `print_n8n_workflow.png` | Screenshot real do N8N — precisa capturar |
| 9 — Fotos | `foto_harvard_palco.jpg`, `foto_mit_campus.jpg`, `foto_equipe_boston.jpg` | Fotos reais da viagem — precisam ser adicionadas |
| 10 — Equipe | `foto_pericles_card.jpg`, `foto_lua_card.jpg`, `foto_adriele_card.jpg` | `equipe-pericles.png`, `equipe-lua.png`, `equipe-adriele.png` ✅ |
| 12 — Aprendizados | `foto_engenharia_popular.jpg` | `src/assets/maes/` ou foto do piloto |

### 3.3 Dados de Contato Falsos — SlideFechamento

```tsx
// Atual — placeholder text, não funciona em apresentação real
const contacts = [
  { icon: "📧", text: "pericles@email.com" },        // ← fake
  { icon: "🔗", text: "linkedin.com/in/pericles" },   // ← incompleto
  { icon: "📱", text: "@ya.ai4good" },
  { icon: "🌐", text: "ya-ai4good.lovable.app" },     // ← URL incorreta
];
```

**O que fazer:** Atualizar com dados reais do Péricles (email, LinkedIn completo, Instagram/WhatsApp, URL da landing page).

---

## 4. Pendências Importantes (Qualidade)

### 4.1 Ausência de Sistema de Steps/Animações Progressivas

O `PresentationTalk` **não implementa steps internos por slide** — avança sempre de slide em slide diretamente. O `/vBC2026` tem `step >= N` com reveals progressivos (ex: `SlideImpactV4` tem 3 steps que revelam dados um a um).

**Impacto:** O apresentador não consegue revelar informações de forma narrativa — tudo aparece de uma vez por slide.

**Sugestão:** Adicionar um contador de steps no `PresentationTalk` similar ao BC2026:

```tsx
// PresentationTalk — adicionar:
const [currentStep, setCurrentStep] = useState(0);
const maxSteps = STEPS_PER_SLIDE[current]; // ex: [0, 0, 2, 0, 0, 1, 1, 0, ...]

const next = () => {
  if (currentStep < maxSteps) setCurrentStep(s => s + 1);
  else { go(current + 1); setCurrentStep(0); }
};
```

Slides candidatos para steps (alto impacto narrativo):
- **Slide 2 (ProblemaMacro)**: revelar os 4 stats um a um
- **Slide 6 (Arquitetura)**: revelar blocos do stack em sequência
- **Slide 11 (Visao)**: revelar roadmap passo a passo

### 4.2 Violações do Design System

O design system do projeto (`docs/DESIGN-SYSTEM.md`) exige tokens semânticos. Os slides `talk` usam **cores hardcoded** em todo o código:

```tsx
// Padrão atual (violação)
className="bg-[#1A1A2E]"        // ← deveria ser bg-background
className="text-[#E8673C]"      // ← deveria ser text-primary
className="text-[#F5A623]"      // ← deveria ser text-accent
className="bg-[#F5F5F0]"        // ← sem equivalente no DS — ver nota abaixo
className="text-[#8C30B0]"      // ← deveria ser text-secondary
```

**Nota sobre `#F5F5F0`:** Este fundo creme (slides "claros") não existe como token. É uma escolha deliberada de alternância dark/light. Pode ser mantido como exceção documentada, ou criar `--ya-cream: #F5F5F0` no `:root` e expor como `bg-cream`.

**Mínimo recomendado:** padronizar pelo menos `#1A1A2E → bg-background`, `#E8673C → text-primary/bg-primary`, `#8C30B0 → text-secondary`.

### 4.3 Sem Header Persistente com Logo e Contexto

O `/vBC2026` tem um header fixo em todos os slides (exceto 0 e 9) com:
- Logo Yá à esquerda
- Badge "AI4GOOD 2026" 
- Progress bar inferior

O `/trindai` tem apenas dots + contador numérico no rodapé. O apresentador e a audiência perdem contexto visual de "quem está apresentando".

**Sugestão:** Adicionar header mínimo nos slides 1–12 com logo Yá + "Talk Trind AI — Abril 2026".

### 4.4 SlideQuemSouEu — Layout sem Foto Real

Slide 1 tem layout 40/60 (foto esquerda / texto direita) mas a foto é placeholder. O layout **vai quebrar visualmente** sem a imagem. Com `equipe-pericles.png` disponível, a substituição é trivial.

### 4.5 SlideDemo — Sem Conteúdo Real

O slide de demo é o **ponto de maior impacto técnico** da apresentação e está completamente vazio — apenas uma caixa tracejada onde deveria estar o demo do WhatsApp. Dois assets de interação real existem:
- `interacao-carol-audio.jpeg` — mostra áudio sendo enviado
- `interacao-carol-saldo.jpeg` — mostra resposta da Yá com saldo

Estes dois podem compor um layout split-phone muito mais convincente que um GIF único.

---

## 5. Comparação com Referências (/vBC2026 e /v3)

### O que o /vBC2026 tem que o /trindai não tem

| Feature | /vBC2026 | /trindai |
|---------|---------|---------|
| Steps progressivos por slide | ✅ até 4 steps | ❌ slide inteiro de uma vez |
| Tokens semânticos (bg-background, text-primary) | ✅ | ❌ cores hardcoded |
| Header persistente com logo | ✅ | ❌ |
| Glassmorphism com `backdrop-blur` | ✅ cards com blur | ✅ parcial (SlideFechamento) |
| Glow effects (`bg-primary/10 blur-[40px]`) | ✅ | ❌ só motifs SVG |
| Transições `animate-in fade-in` | ✅ | ✅ `animate-fade-in` parcial |
| Aria-live em reveals | ✅ | ❌ |
| Photos reais | ✅ todos slides | ❌ maioria placeholder |

### O que o /v3 tem de bom

- `AnimatedNumber` para contadores — poderia ser reutilizado em `SlideProblemaMacro`
- `HoverInfo` com tooltips de fonte — excelente para contexto acadêmico
- Responsive (mobile-first) — `/trindai` é fixed 1920px, OK para apresentação

### O que o /trindai faz bem

- Alternância dark/light cria ritmo visual claro
- SVG motif decoration é elegante e consistente com identidade
- Funil em `SlidePiloto` é o melhor gráfico data-driven do deck
- Layout diagonal em `SlideAprendizados` é criativo e diferente
- Tipografia Sora + DM Sans é bem escolhida e carregada corretamente
- `TalkSlideContainer` com scale dinâmico funciona perfeitamente

---

## 6. Sugestões Ordenadas por Impacto × Esforço

### Alta Prioridade (fazer hoje — baixo esforço)

1. **Substituir fotos de equipe pelos assets reais** — `equipe-pericles.png`, `equipe-lua.png`, `equipe-adriele.png` nos slides 1 e 10. Muda `ImagePlaceholder` por `<img>`.

2. **Usar `interacao-carol-audio.jpeg` + `interacao-carol-saldo.jpeg` no SlideDemo** — layout split com mockup de celular e duas screenshots reais. Impacto enorme na credibilidade.

3. **Corrigir dados de contato no SlideFechamento** — substituir email/LinkedIn/URL falsos pelos reais.

4. **Adicionar logo TrindAI e Rede Bahia** — obter arquivos e substituir dashed boxes. Bloqueia aparência profissional nos slides 0 e 13.

5. **Usar foto de `maes/` ou `dash-carol.jpeg` no SlideProblemaEmocional** — qualquer foto real de contexto periférico é infinitamente melhor que o placeholder.

### Média Prioridade (fazer hoje se sobrar tempo)

6. **Implementar steps progressivos em SlideProblemaMacro e SlideArquitetura** — os slides mais densos se beneficiam mais de reveal sequencial.

7. **Adicionar fotos de Harvard/Boston** — slides 9 (`SlideFotos`) precisam das fotos reais da viagem. Sem elas o slide não serve nada.

8. **Header persistente mínimo** — logo Yá + label do evento em todos os slides 1–12 (exceto abertura e fechamento).

### Baixa Prioridade (backlog)

9. Migrar cores hardcoded para tokens semânticos do design system.

10. Adicionar glow effects nos cards de `SlideSolucao` e `SlideEquipe` (padrão `bg-primary/10 blur-[40px]` do BC2026).

11. Screenshot real do N8N workflow para `SlideArquitetura`.

12. Adicionar `aria-live="polite"` nos elementos que fazem reveal progressivo (acessibilidade).

---

## 7. Checklist Para Concluir Hoje

```
CRÍTICO — sem isso a apresentação não é profissional:
[ ] Obter logo_trindai e logo_redebahia → adicionar em src/assets/logos/
[ ] Substituir equipe-pericles.png nos slides 1 e 10
[ ] Substituir equipe-lua.png e equipe-adriele.png no slide 10
[ ] Usar interacao-carol-*.jpeg no SlideDemo (slide 5)
[ ] Usar foto de maes/ no SlideProblemaEmocional (slide 3)
[ ] Corrigir contatos reais no SlideFechamento (slide 13)

IMPORTANTE — melhora qualidade significativamente:
[ ] Adicionar fotos reais de Boston no SlideFotos (slide 9)
[ ] Adicionar screenshot do N8N no SlideArquitetura (slide 6)
[ ] Header mínimo com logo nos slides 1–12

OPCIONAL — polish final:
[ ] Steps progressivos em SlideProblemaMacro e SlideArquitetura
[ ] Glow effects nos cards de SlideSolucao e SlideEquipe
[ ] Migrar bg-[#1A1A2E] → bg-background no PresentationTalk
```

---

## 8. Observações de Identidade Visual Yá

Com base em `docs/DESIGN-SYSTEM.md`:

- **Gradiente canônico**: `#E8673C → #C040A0 → #8C30B0` — os slides usam isso corretamente nas barras, bordas e motifs SVG ✅
- **Tema escuro obrigatório**: os slides escuros seguem `#1A1A2E ≈ bg-background` ✅
- **Glassmorphism**: presente em `SlideFechamento` (`bg-white/[0.05]`) mas ausente nos cards de `SlideSolucao`, `SlideEquipe` etc — oportunidade de melhoria
- **Fonte Sora** (headlines) + **DM Sans** (body): carregadas via Google Fonts, mapeadas no Tailwind como `font-talk-headline` e `font-talk-body` ✅
- **Dourado `#F5A623`** (≈ `--ya-gold`): usado em subtítulos e destaques — consistente com o design system ✅

O deck é visualmente coerente com a identidade Yá. Os principais desvios são uso de cores hardcoded em vez de tokens e ausência dos assets reais.
