import { TalkSlideProps } from "../types";
import TalkSlideContainer from "../TalkSlideContainer";

const decisions = [
  {
    chosen: "WhatsApp",
    rejected: "Telegram",
    reason: "É onde as mães já estão — é território, não canal. Não exige migração de hábito.",
  },
  {
    chosen: "N8N",
    rejected: "LangGraph / LangChain",
    reason: "Integração nativa com WhatsApp e PostgreSQL, sem Python obrigatório. Curva de semanas, não meses.",
  },
  {
    chosen: "Gemini",
    rejected: "Ollama local",
    reason: "Qualidade de transcrição e síntese em português. Viabilidade operacional sem infraestrutura própria.",
  },
];

const SlideTradeOffs = ({ isActive }: TalkSlideProps) => {
  if (!isActive) return null;

  return (
    <TalkSlideContainer className="bg-[#0A0A0A] flex flex-col pt-14 pb-14 px-20 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-secondary/6 blur-[140px] rounded-full pointer-events-none" />

      <div className="z-10 flex flex-col h-full">
        <div className="shrink-0 mb-14">
          <p className="font-display text-[14px] font-bold text-primary uppercase tracking-[3px] mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-primary inline-block" />
            As decisões por trás
          </p>
          <h2 className="font-display text-[64px] font-black text-white leading-tight">
            Por que construímos assim
          </h2>
        </div>

        <div className="flex flex-col gap-7 flex-1 justify-center">
          {decisions.map((d, i) => (
            <div
              key={i}
              className="bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl px-10 py-8 relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl" style={{ background: "linear-gradient(180deg, #E8673C, #8C30B0)" }} />
              <div className="flex items-baseline gap-4 mb-3 pl-3">
                <span className="font-display text-[30px] font-black text-white">{d.chosen}</span>
                <span className="font-display text-[16px] text-foreground/40 font-semibold">não</span>
                <span className="font-display text-[22px] text-foreground/35 font-semibold line-through decoration-foreground/20">{d.rejected}</span>
              </div>
              <p className="font-display text-[19px] text-foreground/60 leading-relaxed pl-3">{d.reason}</p>
            </div>
          ))}
        </div>
      </div>
    </TalkSlideContainer>
  );
};

export default SlideTradeOffs;
