
## Plano de Implementação — Apresentação Trind AI / BaIA

### Fase 1 — Infraestrutura (agora)
- Criar design tokens (cores, gradientes) no index.css
- Configurar fonte Sora Bold (fallback de Garet) + DM Sans
- Criar componente `TalkSlideContainer` com scaling 1920x1080
- Criar orquestrador `PresentationTalk.tsx` com navegação (setas, teclado, dots, fullscreen)
- Criar rotas `/trindai` e `/baia` no App.tsx
- Implementar slides 1, 3, 5 (mais simples, para validar o sistema)

### Fase 2 — Slides de conteúdo
- Slides 2, 4, 6, 8, 9, 11, 14 (compartilhados ou com props)
- Slides com placeholders de imagem (borda tracejada + legenda)

### Fase 3 — Slides complexos + variantes BaIA
- Slide 7 (arquitetura técnica com diagrama)
- Slide 10 (grid de fotos editorial)
- Slide 12 (roadmap/layers)
- Slide 13 (layout diagonal)
- Variantes 2-B, 7-B, 12-B, 13-B

### Fase 4 — Polish
- Animações stagger reveal
- Modo fullscreen (F11)
- Lazy loading de imagens
- Testes e ajustes responsivos

**Componentes reutilizáveis:**
- `SlideAbertura` — props: logos[], subtítulo
- `SlideFechamento` — props: logos[]
- `SlideArquitetura` — props: showAcademic
- `SlideVisao` — props: showAcademic
- `SlideAprendizados` — props: variant (trind | baia)
- `SlideQuemSouEu` — props: variant (trind | baia)
- Demais slides: compartilhados 100%

**Estimativa:** ~12-15 arquivos novos, implementação em 3-4 fases.
