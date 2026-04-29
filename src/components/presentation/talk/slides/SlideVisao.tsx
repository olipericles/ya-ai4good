import { TalkSlideProps } from "../types";
import TalkSlideContainer from "../TalkSlideContainer";

const roadmap = [
  { label: "Visibilidade Financeira Individual", desc: "A mae enxerga pra onde vai o dinheiro", status: "MVP atual", color: "#E8673C", pct: "50%" },
  { label: "Inteligencia Comportamental", desc: "Padroes, alertas preditivos, comparacoes", status: "Proxima fase", color: "#D050A8", pct: "65%" },
  { label: "Grafo Comportamental", desc: "Recomendacoes entre pares com perfis similares", status: "Futuro", color: "#A038B8", pct: "80%" },
  { label: "Rede de Suporte Emergente", desc: "Comunidade autonoma de apoio mutuo", status: "Futuro", color: "#8C30B0", pct: "100%" },
];

const academic = [
  { area: "HCI / Interacao Humano-Computador", contribution: "Como populacoes vulneraveis aceitam e se apropriam de IA conversacional", color: "#E8673C" },
  { area: "Sistemas Inteligentes", contribution: "Arquitetura de SMA-c com LLMs para assistencia financeira empatica", color: "#C040A0" },
  { area: "Economia Comportamental", contribution: "Grafos de comportamento financeiro emergente em comunidades de baixa renda", color: "#8C30B0" },
];

const SlideVisao = ({ isActive, variant }: TalkSlideProps) => {
  if (!isActive) return null;
  const isBaia = variant === "baia";

  return (
    <TalkSlideContainer className="bg-background flex relative overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-[700px] h-[500px] bg-secondary/8 blur-[140px] rounded-full pointer-events-none" />

      {/* Left */}
      <div className={`${isBaia ? "w-[55%]" : "w-full"} h-full flex flex-col pt-16 pb-16 pl-20 pr-16 z-10 justify-between`}>
        <div>
          <p className="font-display text-[14px] font-bold text-primary uppercase tracking-[3px] mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-primary inline-block" />
            Visao
          </p>
          <h2 className="font-display text-[72px] font-black text-white leading-tight">
            Para onde a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Ya vai</span>
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          {roadmap.map((r, i) => (
            <div key={i} className="flex items-center gap-5">
              <div
                className="h-[72px] rounded-2xl flex items-center justify-between px-8 shrink-0"
                style={{ width: r.pct, maxWidth: isBaia ? "100%" : "52%", backgroundColor: r.color, minWidth: 220 }}
              >
                <span className="font-display text-[20px] font-bold text-white truncate mr-4">{r.label}</span>
                <span className="font-display text-[14px] text-white/70 shrink-0 bg-black/20 rounded-lg px-3 py-1">{r.status}</span>
              </div>
              {!isBaia && <p className="font-display text-[18px] text-foreground/50 flex-1">{r.desc}</p>}
            </div>
          ))}
        </div>

        <div>
          <p className="font-display text-[32px] font-black text-accent">Meta: 10.000 usuarias ativas ate 2027</p>
          <p className="font-display text-[18px] text-foreground/40 mt-1">Expansao para America Latina</p>
        </div>
      </div>

      {/* Right — baia only */}
      {isBaia && (
        <div className="w-[45%] h-full flex flex-col justify-center pr-20 z-10">
          <h3 className="font-display text-[28px] font-bold text-white mb-8">Contribuicao Academica</h3>
          <div className="flex flex-col gap-5">
            {academic.map((a, i) => (
              <div key={i} className="bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl p-6" style={{ borderLeftColor: a.color, borderLeftWidth: 3 }}>
                <p className="font-display text-[18px] font-bold text-white mb-2">{a.area}</p>
                <p className="font-display text-[14px] text-foreground/60 leading-relaxed">{a.contribution}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </TalkSlideContainer>
  );
};

export default SlideVisao;
