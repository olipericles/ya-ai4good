import { TalkSlideProps } from "../types";
import TalkSlideContainer from "../TalkSlideContainer";

const stats = [
  { number: "64%", label: "abaixo da linha de pobreza" },
  { number: "45%", label: "trabalham na informalidade" },
];

const SlideProblemaMacro = ({ isActive }: TalkSlideProps) => {
  if (!isActive) return null;

  return (
    <TalkSlideContainer className="bg-[#0A0A0A] flex flex-col pt-16 pb-14 px-24 relative overflow-hidden">
      <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="text-[38vw] font-black text-white/[0.025] leading-none">11M</span>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="z-10 flex flex-col h-full">
        <div className="shrink-0">
          <p className="font-display text-[16px] font-bold text-primary uppercase tracking-[3px] mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-primary inline-block" />
            O problema
          </p>
          <div className="flex items-end gap-10 mb-12">
            <div>
              <h1 className="font-display text-[112px] font-black text-white leading-none tracking-tight">
                11,3 milhões
              </h1>
              <p className="font-display text-[36px] font-semibold text-accent mt-3">
                de lares chefiados por mães solo no Brasil
              </p>
            </div>
            <div className="mb-3 pb-1 border-l border-white/15 pl-10 shrink-0">
              <p className="font-display text-[64px] font-black text-primary leading-none tracking-tight">+1,7M</p>
              <p className="font-display text-[18px] text-foreground/50 mt-2 leading-snug">novas mães solo<br/>na última década</p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-5 min-h-0">
          <div className="flex gap-5 flex-1 min-h-0">
            {/* 2 stat cards */}
            <div className="flex flex-col gap-5 w-[340px] shrink-0">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="bg-card/40 backdrop-blur-md border border-primary/20 rounded-3xl p-10 relative overflow-hidden flex flex-col justify-center flex-1"
                >
                  <div className="absolute inset-0 bg-primary/5 blur-[40px] -z-10" />
                  <div className="absolute top-8 left-10 right-10 h-[3px] rounded-full opacity-60" style={{ background: "linear-gradient(90deg, #E8673C, transparent)" }} />
                  <p className="font-display text-[80px] font-black text-white leading-none tracking-tight">{s.number}</p>
                  <p className="font-display text-[20px] text-foreground/60 mt-3 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Banner 90% — destaque principal */}
            <div
              className="flex-1 rounded-3xl border border-primary/40 p-12 flex flex-col justify-between relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, rgba(232,103,60,0.18) 0%, rgba(192,64,160,0.12) 50%, rgba(140,48,176,0.10) 100%)" }}
            >
              <div className="absolute inset-0 bg-primary/5 blur-[80px] pointer-events-none" />
              <div>
                <p className="font-display text-[18px] font-bold text-primary uppercase tracking-[3px] mb-4">O recorte que define tudo</p>
                <p className="font-display text-[88px] font-black text-white leading-none tracking-tight">90%</p>
                <p className="font-display text-[28px] font-bold text-white/90 mt-3 leading-snug">
                  do crescimento foram<br/>
                  <span className="text-primary">mulheres negras</span>
                </p>
              </div>
              <div className="flex items-end justify-between">
                <p className="font-display text-[18px] text-foreground/50 leading-relaxed max-w-[420px]">
                  Esse crescimento tem <span className="text-white/80 font-bold">cor</span> e tem <span className="text-white/80 font-bold">CEP</span> —<br/>
                  raça e território ainda determinam quem fica para trás
                </p>
                <p className="font-display text-[13px] text-foreground/30 text-right shrink-0">FGV/IBRE · PNAD Contínua</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TalkSlideContainer>
  );
};

export default SlideProblemaMacro;
