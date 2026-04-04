import { TalkSlideProps } from "../types";
import TalkSlideContainer from "../TalkSlideContainer";
import ImagePlaceholder from "../ImagePlaceholder";

const techBlocks = [
  { label: "WhatsApp Business API", file: "icon_whatsapp.svg" },
  { label: "N8N — Orquestração", file: "icon_n8n.svg" },
  { label: "Gemini API — Motor Cognitivo", file: "icon_gemini.svg" },
  { label: "PostgreSQL — Dados", file: "icon_postgresql.svg" },
];

const academicCards = [
  { icon: "🧠", title: "SMA-c (Sistema Multi-Agente Cognitivo)", desc: "Agentes com capacidade deliberativa habilitada por LLMs" },
  { icon: "📊", title: "Almere Model (adaptado)", desc: "Framework de robótica social aplicado a IA conversacional" },
  { icon: "🔄", title: "Design Science Research", desc: "Metodologia: construir o artefato E gerar conhecimento científico" },
];

const SlideArquitetura = ({ isActive, variant }: TalkSlideProps) => {
  if (!isActive) return null;
  const isBaia = variant === "baia";

  return (
    <TalkSlideContainer className="bg-[#1A1A2E] flex flex-col px-16 pt-16">
      <h2 className="font-talk-headline text-[isBaia ? 30 : 32]px text-white mb-1" style={{ fontSize: isBaia ? 30 : 32 }}>
        {isBaia ? "Da arquitetura técnica ao framework teórico" : "Como funciona por dentro"}
      </h2>
      <p className="font-talk-body text-[16px] text-[#F5A623] mb-8">
        {isBaia ? "Como a Yá funciona — e como a pesquisa a investiga" : "Stack técnico da Yá"}
      </p>

      {/* Tech flow diagram */}
      <div className="flex items-center justify-center gap-4 mb-8">
        {techBlocks.map((b, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="bg-white/[0.08] rounded-xl p-5 flex flex-col items-center w-[220px]">
              <div className="w-[48px] h-[48px] rounded-lg border border-dashed border-[#666] flex items-center justify-center mb-3">
                <span className="text-[8px] text-[#888] font-mono">{b.file}</span>
              </div>
              <p className="font-talk-body text-[14px] text-white text-center">{b.label}</p>
            </div>
            {i < techBlocks.length - 1 && (
              <span className="text-[24px] bg-gradient-to-r from-[#E8673C] to-[#C040A0] bg-clip-text text-transparent font-bold">→</span>
            )}
          </div>
        ))}
      </div>

      {isBaia ? (
        <>
          {/* Academic layer separator */}
          <div className="relative flex items-center my-4">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#E8673C] via-[#C040A0] to-[#8C30B0]" />
            <span className="px-4 text-[12px] text-[#F5A623] uppercase tracking-[2px] font-talk-body font-bold">
              Camada de Investigação Acadêmica
            </span>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#8C30B0] via-[#C040A0] to-[#E8673C]" />
          </div>

          <div className="flex gap-4 mt-4">
            {academicCards.map((c, i) => (
              <div key={i} className="bg-white/[0.06] rounded-xl p-4 flex-1">
                <span className="text-[32px]">{c.icon}</span>
                <h4 className="font-talk-headline text-[16px] text-white mt-2 mb-1">{c.title}</h4>
                <p className="font-talk-body text-[12px] text-gray-400 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        /* Trind: N8N screenshot */
        <div className="flex-1 mt-4 relative">
          <ImagePlaceholder
            label="print_n8n_workflow.png"
            caption="Screenshot do workflow real do N8N da Yá"
            className="w-full h-full opacity-85"
          />
          <p className="absolute bottom-4 right-4 text-[12px] text-[#666] font-talk-body">
            Workflow real no N8N
          </p>
        </div>
      )}
    </TalkSlideContainer>
  );
};

export default SlideArquitetura;
