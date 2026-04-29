import { TalkSlideProps } from "../types";
import TalkSlideContainer from "../TalkSlideContainer";

const infos = [
  { label: "27–29 de março de 2026" },
  { label: "Harvard e MIT, Boston" },
  { label: "Programa de aceleração + mentoria" },
];

const SlideAI4Good = ({ isActive }: TalkSlideProps) => {
  if (!isActive) return null;

  return (
    <TalkSlideContainer className="bg-[#0A0A0A] flex flex-col px-24 pt-16 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[50vw] font-black text-white/[0.025] leading-none">3</span>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/8 blur-[160px] rounded-full pointer-events-none" />

      <div className="z-10 flex flex-col h-full justify-between">
        {/* Top label */}
        <div className="text-center">
          <p className="font-display text-[16px] font-bold text-primary uppercase tracking-[3px] flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-primary inline-block" />
            Validação externa
            <span className="w-8 h-px bg-primary inline-block" />
          </p>
          <h1 className="font-display text-[64px] font-bold text-foreground/70 mt-4">
            Selecionados entre <span className="text-white font-black">188 projetos</span>
          </h1>
          <p className="font-display text-[28px] text-accent mt-3">
            AI4Good 2026 — Brazil Conference at Harvard and MIT
          </p>
        </div>

        {/* Big "3" */}
        <div className="flex flex-col items-center">
          <span className="font-display font-black leading-none text-transparent bg-clip-text bg-gradient-to-br from-primary via-[#C040A0] to-secondary" style={{ fontSize: "260px" }}>
            3
          </span>
          <p className="font-display text-[40px] font-bold text-white -mt-6">projetos premiados</p>
          <p className="font-display text-[24px] text-accent mt-3 font-semibold">
            Único projeto do Nordeste do Brasil
          </p>
        </div>

        {/* Info chips */}
        <div className="flex gap-8 justify-center">
          {infos.map((info, i) => (
            <div key={i} className="bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl px-10 py-5">
              <span className="font-display text-[20px] text-foreground/70">{info.label}</span>
            </div>
          ))}
        </div>
      </div>
    </TalkSlideContainer>
  );
};

export default SlideAI4Good;
