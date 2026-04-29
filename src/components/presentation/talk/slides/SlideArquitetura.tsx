import { TalkSlideProps } from "../types";
import TalkSlideContainer from "../TalkSlideContainer";
import n8nWorkflow from "@/assets/images/n8n-ya.png";

const techBlocks = [
  { label: "WhatsApp Business API", sub: "Canal de entrada", color: "#25D366" },
  { label: "N8N", sub: "Orquestração", color: "#E8673C" },
  { label: "Gemini API", sub: "Motor Cognitivo", color: "#4285F4" },
  { label: "PostgreSQL", sub: "Persistência", color: "#336791" },
];

const academicCards = [
  { title: "SMA-c", desc: "Sistema Multi-Agente Cognitivo — deliberação habilitada por LLMs" },
  { title: "Almere Model", desc: "Framework de robótica social aplicado a IA conversacional" },
  { title: "Design Science Research", desc: "Construir o artefato E gerar conhecimento científico" },
];

const SlideArquitetura = ({ isActive, variant }: TalkSlideProps) => {
  if (!isActive) return null;
  const isBaia = variant === "baia";

  return (
    <TalkSlideContainer className="bg-[#0A0A0A] flex flex-col px-20 pt-14 pb-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-secondary/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="z-10 flex flex-col h-full">
        <div className="shrink-0">
          <p className="font-display text-[14px] font-bold text-primary uppercase tracking-[3px] mb-3 flex items-center gap-3">
            <span className="w-8 h-px bg-primary inline-block" />
            {isBaia ? "Arquitetura + Pesquisa" : "Stack técnico"}
          </p>
          <h2 className="font-display text-[56px] font-black text-white leading-tight mb-8">
            {isBaia ? "Da arquitetura técnica ao framework teórico" : "Como funciona por dentro"}
          </h2>

          {/* Tech flow */}
          <div className="flex items-center gap-3 mb-8">
            {techBlocks.map((b, i) => (
              <div key={i} className="flex items-center gap-3 flex-1">
                <div className="bg-card/50 backdrop-blur-md border border-border/50 rounded-2xl px-5 py-4 flex items-center gap-3 w-full">
                  <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: b.color, boxShadow: `0 0 10px ${b.color}80` }} />
                  <div>
                    <p className="font-display text-[16px] font-bold text-white">{b.label}</p>
                    <p className="font-display text-[12px] text-foreground/50">{b.sub}</p>
                  </div>
                </div>
                {i < techBlocks.length - 1 && (
                  <svg width="24" height="14" viewBox="0 0 24 14" fill="none" className="shrink-0">
                    <path d="M0 7h20M14 2l6 5-6 5" stroke="url(#arrG)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                      <linearGradient id="arrG" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#E8673C"/>
                        <stop offset="100%" stopColor="#8C30B0"/>
                      </linearGradient>
                    </defs>
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        {isBaia ? (
          <div className="flex flex-col flex-1 gap-5">
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-primary/40 via-secondary/40 to-primary/40" />
              <span className="font-display text-[12px] text-accent uppercase tracking-[3px] font-bold shrink-0">Camada Acadêmica</span>
              <div className="flex-1 h-px bg-gradient-to-r from-primary/40 via-secondary/40 to-primary/40" />
            </div>
            <div className="grid grid-cols-3 gap-5 flex-1">
              {academicCards.map((c, i) => (
                <div key={i} className="bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-7 flex flex-col justify-center">
                  <p className="font-display text-[22px] font-black text-white mb-3">{c.title}</p>
                  <p className="font-display text-[15px] text-foreground/60 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Trind: real N8N workflow screenshot */
          <div className="flex-1 relative rounded-2xl overflow-hidden border border-border/30">
            <img
              src={n8nWorkflow}
              alt="Workflow real da Yá no N8N"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 right-5 bg-[#0A0A0A]/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-border/40">
              <p className="font-display text-[12px] text-foreground/60">Workflow real da Yá — N8N</p>
            </div>
          </div>
        )}
      </div>
    </TalkSlideContainer>
  );
};

export default SlideArquitetura;
