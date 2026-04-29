import { TalkSlideProps } from "../types";
import TalkSlideContainer from "../TalkSlideContainer";

const stats = [
  { number: "64%", label: "abaixo da linha de pobreza" },
  { number: "6 em 10", label: "são mulheres negras" },
  { number: "45%", label: "trabalham na informalidade" },
  { number: "58%", label: "têm no máx. ensino fundamental" },
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
          <h1 className="font-display text-[112px] font-black text-white leading-none tracking-tight">
            11,3 milhões
          </h1>
          <p className="font-display text-[36px] font-semibold text-accent mt-3 mb-12">
            de lares chefiados por mães solo no Brasil
          </p>
        </div>

        <div className="grid grid-cols-4 gap-5 flex-1">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-card/40 backdrop-blur-md border border-primary/20 rounded-3xl p-10 relative overflow-hidden hover:border-primary/50 transition-colors flex flex-col justify-end"
            >
              <div className="absolute inset-0 bg-primary/5 blur-[40px] -z-10" />
              <div className="absolute top-8 left-10 right-10 h-[3px] rounded-full opacity-60" style={{ background: "linear-gradient(90deg, #E8673C, transparent)" }} />
              <p className="font-display text-[96px] font-black text-white leading-none tracking-tight">{s.number}</p>
              <p className="font-display text-[20px] text-foreground/60 mt-3 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </TalkSlideContainer>
  );
};

export default SlideProblemaMacro;
