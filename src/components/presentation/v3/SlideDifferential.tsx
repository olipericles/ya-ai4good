import SlideContainer from "./SlideContainer";
import { X, Check } from "lucide-react";
import yaLogo from "@/assets/ya-logo.png";

type TransitionType = "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";

interface SlideDifferentialProps {
  isActive: boolean;
  transition?: TransitionType;
}

const SlideDifferential = ({ isActive, transition }: SlideDifferentialProps) => {
  const comparisons = [
    {
      criteria: "Output",
      competitors: "Responde só em texto",
      ya: "Responde em áudio",
    },
    {
      criteria: "Tom",
      competitors: "Genérico",
      ya: "Linguagem acessível",
    },
    {
      criteria: "Foco",
      competitors: "Classe média",
      ya: "Mães solo",
    },
    {
      criteria: "Impacto",
      competitors: "Individual",
      ya: "Dados para políticas públicas",
    },
    {
      criteria: "Comunidade",
      competitors: "Não possui",
      ya: "Rede de apoio entre usuárias",
    },
  ];

  return (
    <SlideContainer isActive={isActive} transition={transition}>
      <div className="flex flex-col h-full justify-center gap-6 md:gap-8">
        {/* Title */}
        <div className={`text-center ${isActive ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Por que <span className="text-gradient">Yá</span> é diferente?
          </h2>
        </div>

        {/* Comparison Table */}
        <div className={`bg-card/80 border border-border rounded-2xl overflow-hidden ${isActive ? 'animate-scale-in delay-200' : 'opacity-0'}`}>
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-muted/50 border-b border-border">
            <div className="p-3 sm:p-4 text-center font-semibold text-foreground/70 text-sm sm:text-base">
              Critério
            </div>
            <div className="p-3 sm:p-4 flex items-center justify-center gap-2 border-x border-border">
              {/* Competitor logos */}
              <img
                src="https://poupa.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpig.e63ad011.png&w=256&q=75"
                alt="Poupa.ai"
                className="h-6 sm:h-8 object-contain"
              />
              <span className="text-foreground/50">/</span>
              <img
                src="https://granazen.com/_next/image?url=%2Flogo.png&w=256&q=75"
                alt="GranaZen"
                className="h-6 sm:h-8 object-contain"
              />
            </div>
            <div className="p-3 sm:p-4 flex items-center justify-center">
              <img
                src={yaLogo}
                alt="Yá"
                className="h-8 sm:h-10 object-contain"
              />
            </div>
          </div>

          {/* Table Rows */}
          {comparisons.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 border-b border-border last:border-b-0 ${isActive ? `animate-fade-in delay-${300 + index * 100}` : 'opacity-0'}`}
              style={{ animationDelay: isActive ? `${300 + index * 100}ms` : '0ms' }}
            >
              {/* Criteria */}
              <div className="p-3 sm:p-4 flex items-center">
                <span className="font-medium text-sm sm:text-base text-foreground/80">{row.criteria}</span>
              </div>

              {/* Competitors */}
              <div className="p-3 sm:p-4 flex items-center gap-2 border-x border-border bg-destructive/5">
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-destructive shrink-0" />
                <span className="text-xs sm:text-sm text-foreground/60">{row.competitors}</span>
              </div>

              {/* Yá */}
              <div className="p-3 sm:p-4 flex items-center gap-2 bg-primary/5">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
                <span className="text-xs sm:text-sm text-foreground/80 font-medium">{row.ya}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className={`text-center ${isActive ? 'animate-fade-up delay-700' : 'opacity-0'}`}>
          <p className="text-sm sm:text-base md:text-lg text-foreground/60">
            Não é só mais um app de finanças — <span className="text-primary font-semibold">é uma ferramenta de impacto social.</span>
          </p>
        </div>
      </div>
    </SlideContainer>
  );
};

export default SlideDifferential;
