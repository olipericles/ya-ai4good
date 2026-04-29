import { TalkSlideProps } from "../types";
import TalkSlideContainer from "../TalkSlideContainer";

const funnel = [
  { label: "Pre-registradas", value: 14, pct: "100%", color: "#E8673C" },
  { label: "Engajadas", value: 10, pct: "71%", color: "#D050A8" },
  { label: "Uso significativo", value: 5, pct: "36%", color: "#A038B8" },
  { label: "Transformadas", value: 3, pct: "21%", color: "#8C30B0" },
];

const insights = [
  "Maes nao registram gastos espontaneamente — onboarding proativo e essencial",
  "Linguagem de amiga reduz ansiedade financeira em vez de provocar",
  "Foto do comprovante foi a forma mais natural de registro",
];

const SlidePiloto = ({ isActive }: TalkSlideProps) => {
  if (!isActive) return null;

  return (
    <TalkSlideContainer className="bg-background flex relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-[700px] h-[400px] bg-primary/6 blur-[120px] rounded-full pointer-events-none" />

      {/* Left 50% */}
      <div className="w-1/2 h-full flex flex-col pt-16 pb-16 pl-20 pr-10 z-10 justify-between">
        <div>
          <p className="font-display text-[14px] font-bold text-primary uppercase tracking-[3px] mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-primary inline-block" />
            Piloto real
          </p>
          <h2 className="font-display text-[72px] font-black text-white leading-tight">
            Piloto com<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">maes reais</span>
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          {funnel.map((f, i) => (
            <div key={i} className="flex items-center gap-5">
              <div
                className="h-[72px] rounded-2xl flex items-center px-8 shrink-0"
                style={{ width: f.pct, maxWidth: "75%", backgroundColor: f.color, minWidth: 90 }}
              >
                <span className="font-display text-[42px] font-black text-white leading-none">{f.value}</span>
              </div>
              <span className="font-display text-[22px] text-foreground/70">{f.label}</span>
            </div>
          ))}
        </div>

        <div className="bg-accent/10 border border-accent/30 rounded-2xl px-8 py-5">
          <p className="font-display text-[22px] font-bold text-accent">
            Custo operacional: menos de R$2/usuaria/mes
          </p>
        </div>
      </div>

      {/* Right 50% */}
      <div className="w-1/2 h-full flex flex-col pt-16 pb-16 pr-20 pl-10 z-10 justify-between">
        <h3 className="font-display text-[36px] font-bold text-white">O que aprendemos</h3>

        <div className="flex flex-col gap-6 flex-1 mt-8">
          {insights.map((t, i) => (
            <div
              key={i}
              className="bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl p-8 relative overflow-hidden flex-1 flex items-center"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl" style={{ background: "linear-gradient(180deg, #E8673C, #8C30B0)" }} />
              <p className="font-display text-[20px] text-foreground/80 leading-relaxed pl-3">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </TalkSlideContainer>
  );
};

export default SlidePiloto;
