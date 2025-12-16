import SlideContainer from "../SlideContainer";
import { Check, X } from "lucide-react";
import yaLogo from "@/assets/ya-logo.png";

type TransitionType = "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";

interface SlideDifferentialProps {
  isActive: boolean;
  transition?: TransitionType;
}

const SlideDifferential = ({ isActive, transition }: SlideDifferentialProps) => {
  const comparisons = [
    {
      criteria: "Onde",
      traditional: "App separado, exige download",
      ya: "WhatsApp, onde elas já estão"
    },
    {
      criteria: "Input",
      traditional: "Formulários rígidos",
      ya: "Voz, texto, foto"
    },
    {
      criteria: "Tom",
      traditional: "Genérico, técnico",
      ya: "Construído com o público"
    },
    {
      criteria: "Foco",
      traditional: "Classe média",
      ya: "Mães solo"
    },
  ];

  return (
    <SlideContainer isActive={isActive} transition={transition}>
      <div className="space-y-6 sm:space-y-10">
        {/* Title */}
        <h2 className={`text-2xl sm:text-3xl md:text-5xl font-bold text-center ${isActive ? 'animate-fade-up' : 'opacity-0'}`}>
          Feito <span className="text-gradient">COM</span> elas, <span className="text-gradient">PARA</span> elas
        </h2>

        {/* Comparison table */}
        <div className={`bg-card border border-border rounded-2xl overflow-hidden ${isActive ? 'animate-scale-in delay-200' : 'opacity-0'}`}>
          {/* Header */}
          <div className="grid grid-cols-3 bg-muted">
            <div className="p-2 sm:p-4 md:p-6"></div>
            <div className="p-2 sm:p-4 md:p-6 text-center border-l border-border">
              <span className="text-foreground/60 font-medium text-xs sm:text-sm md:text-base">Apps Tradicionais</span>
            </div>
            <div className="p-2 sm:p-4 md:p-6 text-center border-l border-primary/50 bg-primary/5">
              <div className="flex items-center justify-center gap-2">
                <img src={yaLogo} alt="Yá" className="h-6 md:h-8" />
                <span className="text-primary font-bold">Yá</span>
              </div>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 border-t border-border ${isActive ? `animate-fade-up delay-${300 + index * 100}` : 'opacity-0'}`}
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="p-4 md:p-6 font-semibold text-foreground/80">
                {row.criteria}
              </div>
              <div className="p-4 md:p-6 border-l border-border flex items-center gap-2 text-foreground/60">
                <X className="w-5 h-5 text-destructive shrink-0" />
                <span className="text-sm md:text-base">{row.traditional}</span>
              </div>
              <div className="p-4 md:p-6 border-l border-primary/50 bg-primary/5 flex items-center gap-2">
                <Check className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm md:text-base font-medium">{row.ya}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <p className={`text-lg md:text-xl text-center text-foreground/70 max-w-2xl mx-auto ${isActive ? 'animate-fade-up delay-700' : 'opacity-0'}`}>
          O tom de voz vem de pesquisa direta.
          <span className="text-foreground font-medium"> Não é robô falando "prezada cliente". É uma amiga que entende.</span>
        </p>
      </div>
    </SlideContainer>
  );
};

export default SlideDifferential;
