import { TalkSlideProps } from "../types";
import TalkSlideContainer from "../TalkSlideContainer";

const roadmap = [
  { label: "Visibilidade Financeira Individual", desc: "A mãe enxerga pra onde vai o dinheiro", status: "✅ MVP atual", color: "#E8673C", width: "55%" },
  { label: "Inteligência Comportamental", desc: "Padrões, alertas preditivos, comparações", status: "🔄 Próxima fase", color: "#D050A8", width: "70%" },
  { label: "Grafo Comportamental", desc: "Recomendações entre pares com perfis similares", status: "🔮 Futuro", color: "#A038B8", width: "85%" },
  { label: "Rede de Suporte Emergente", desc: "Comunidade autônoma de apoio mútuo", status: "🔮 Futuro", color: "#8C30B0", width: "100%" },
];

const academic = [
  { area: "HCI / Interação Humano-Computador", contribution: "Como populações vulneráveis aceitam e se apropriam de IA conversacional", borderColor: "#E8673C" },
  { area: "Sistemas Inteligentes", contribution: "Arquitetura de SMA-c com LLMs para assistência financeira empática", borderColor: "#C040A0" },
  { area: "Economia Comportamental", contribution: "Grafos de comportamento financeiro emergente em comunidades de baixa renda", borderColor: "#8C30B0" },
];

const SlideVisao = ({ isActive, variant }: TalkSlideProps) => {
  if (!isActive) return null;
  const isBaia = variant === "baia";

  if (isBaia) {
    return (
      <TalkSlideContainer className="bg-[#F5F5F0] flex">
        {/* Left 55% - Roadmap compact */}
        <div className="w-[55%] h-full flex flex-col justify-center px-16">
          <h2 className="font-talk-headline text-[28px] text-[#8C30B0] mb-6">Para onde a Yá vai</h2>
          <div className="flex flex-col gap-3">
            {roadmap.map((r, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="rounded-lg h-[36px] flex items-center px-3" style={{ width: r.width, backgroundColor: r.color }}>
                  <span className="font-talk-headline text-[13px] text-white truncate">{r.label}</span>
                </div>
                <span className="text-[12px] text-[#666] whitespace-nowrap">{r.status}</span>
              </div>
            ))}
          </div>
          <p className="font-talk-body text-[16px] text-[#F5A623] font-bold mt-6">
            Meta: 10.000 usuárias ativas até 2027
          </p>
        </div>

        {/* Right 45% - Academic */}
        <div className="w-[45%] h-full flex flex-col justify-center pr-16">
          <h2 className="font-talk-headline text-[22px] text-[#E8673C] mb-6">Contribuição Acadêmica</h2>
          <div className="flex flex-col gap-4">
            {academic.map((a, i) => (
              <div key={i} className="bg-white rounded-lg p-5 shadow-sm" style={{ borderLeft: `3px solid ${a.borderColor}` }}>
                <p className="font-talk-headline text-[14px] text-[#333] mb-1">{a.area}</p>
                <p className="font-talk-body text-[13px] text-[#555] leading-relaxed">{a.contribution}</p>
              </div>
            ))}
          </div>
        </div>
      </TalkSlideContainer>
    );
  }

  return (
    <TalkSlideContainer className="bg-[#F5F5F0] flex flex-col items-center justify-center px-20">
      <h2 className="font-talk-headline text-[32px] text-[#8C30B0] mb-10">Para onde a Yá vai</h2>

      <div className="flex flex-col items-center gap-3 w-full max-w-[900px]">
        {roadmap.map((r, i) => (
          <div key={i} className="flex items-center gap-4 w-full" style={{ paddingLeft: `${i * 40}px` }}>
            <div className="rounded-lg h-[56px] flex items-center justify-between px-5 flex-1" style={{ backgroundColor: r.color, maxWidth: r.width }}>
              <div>
                <span className="font-talk-headline text-[16px] text-white">{r.label}</span>
                <span className="font-talk-body text-[12px] text-white/70 ml-3">{r.desc}</span>
              </div>
              <span className="text-[14px] text-white/90 whitespace-nowrap">{r.status}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="font-talk-headline text-[18px] text-[#F5A623]">Meta: 10.000 usuárias ativas até 2027</p>
        <p className="font-talk-body text-[14px] text-[#666] mt-1">Expansão para América Latina</p>
      </div>
    </TalkSlideContainer>
  );
};

export default SlideVisao;
