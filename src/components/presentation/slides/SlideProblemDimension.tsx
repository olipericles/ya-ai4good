import SlideContainer from "../SlideContainer";
import AnimatedNumber from "../AnimatedNumber";
import HoverInfo from "@/components/ui/HoverInfo";

type TransitionType = "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";

interface SlideProblemDimensionProps {
  isActive: boolean;
  transition?: TransitionType;
}

const SlideProblemDimension = ({ isActive, transition }: SlideProblemDimensionProps) => {
  const stats = [
    {
      value: 64,
      suffix: "%",
      label: "vivem em situação de pobreza",
      delay: "delay-100",
      tooltip: "Fonte: Síntese de Indicadores Sociais, IBGE 2023"
    },
    {
      value: 39,
      suffix: "%",
      label: "menos renda que homens casados com filhos",
      delay: "delay-300",
      tooltip: "Comparativo de renda média mensal — Fonte: PNAD Contínua 2023"
    },
    {
      value: 72,
      suffix: "%",
      label: "enfrentam essa jornada sozinhas",
      delay: "delay-500",
      tooltip: "Sem rede de apoio familiar ou institucional — Fonte: FGV Social"
    },
  ];

  return (
    <SlideContainer isActive={isActive} transition={transition}>
      <div className="space-y-6 sm:space-y-12">
        {/* Title */}
        <h2 className={`text-2xl sm:text-3xl md:text-5xl font-bold text-center ${isActive ? 'animate-fade-up' : 'opacity-0'}`}>
          A Falta de <span className="text-gradient">Estrutura</span>, Não de Esforço
        </h2>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-card border border-border/50 rounded-2xl p-4 sm:p-8 text-center hover:border-primary/50 transition-all duration-300 ${isActive ? `animate-scale-in ${stat.delay}` : 'opacity-0'}`}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-black text-primary mb-2 sm:mb-4">
                <HoverInfo tooltip={stat.tooltip}>
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    isActive={isActive}
                    duration={1500 + index * 200}
                  />
                </HoverInfo>
              </div>
              <p className="text-foreground/70 text-sm sm:text-lg">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Highlight */}
        <div className={`relative ${isActive ? 'animate-fade-up delay-700' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-secondary/20 via-primary/20 to-secondary/20 rounded-2xl p-4 sm:p-6 md:p-8 border border-primary/20">
            <p className="text-center text-base sm:text-xl md:text-2xl">
              <HoverInfo tooltip="Crescimento de 2012-2022 — Fonte: IPEA Retrato das Desigualdades">
                <span className="text-primary font-bold">90%</span>
              </HoverInfo>{" "}
              do aumento na última década:
              <span className="text-secondary font-semibold"> mulheres pretas e pardas</span>
            </p>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="hidden sm:block absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="hidden sm:block absolute bottom-20 left-20 w-48 h-48 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
    </SlideContainer>
  );
};

export default SlideProblemDimension;
