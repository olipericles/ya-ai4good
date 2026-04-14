import SlideContainer from "./SlideContainer";
import { Check, X } from "lucide-react";
import yaLogo from "@/assets/logos/ya_logo_branco.svg";

type TransitionType = "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";

interface SlideDifferentialProps {
  isActive: boolean;
  transition?: TransitionType;
}

const SlideDifferential = ({ isActive, transition }: SlideDifferentialProps) => {
  const comparisons = [
    {
      criteria: "Onde",
      traditional: "App separado",
      ya: "WhatsApp"
    },
    {
      criteria: "Input",
      traditional: "Formulários",
      ya: "Voz, texto, foto"
    },
    {
      criteria: "Tom",
      traditional: "Genérico",
      ya: "Com o público"
    },
    {
      criteria: "Foco",
      traditional: "Classe média",
      ya: "Mães solo"
    },
  ];

  return (
    <SlideContainer isActive={isActive} transition={transition}>
      <div className="space-y-4 sm:space-y-6 md:space-y-10">
        {/* Title */}
        <h2 className={`text-xl sm:text-2xl md:text-5xl font-bold text-center ${isActive ? 'animate-fade-up' : 'opacity-0'}`}>
          Feito <span className="text-gradient">COM</span> elas, <span className="text-gradient">PARA</span> elas
        </h2>

        {/* Comparison table */}
        <div className={`bg-card border border-border rounded-xl sm:rounded-2xl overflow-hidden text-xs sm:text-sm md:text-base ${isActive ? 'animate-scale-in delay-200' : 'opacity-0'}`}>
          {/* Header */}
          <div className="grid grid-cols-3 bg-muted">
            <div className="p-2 sm:p-3 md:p-4"></div>
            <div className="p-2 sm:p-3 md:p-4 text-center border-l border-border">
              <span className="text-foreground/60 font-medium">Outros</span>
            </div>
            <div className="p-2 sm:p-3 md:p-4 text-center border-l border-primary/50 bg-primary/5">
              <div className="flex items-center justify-center gap-1 sm:gap-2">
                <img src={yaLogo} alt="Yá" className="h-4 sm:h-5 md:h-6" />
                <span className="text-primary font-bold">Yá</span>
              </div>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 border-t border-border ${isActive ? `animate-fade-up` : 'opacity-0'}`}
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="p-2 sm:p-3 md:p-4 font-semibold text-foreground/80">
                {row.criteria}
              </div>
              <div className="p-2 sm:p-3 md:p-4 border-l border-border flex items-center gap-1 sm:gap-2 text-foreground/60">
                <X className="w-3 h-3 sm:w-4 sm:h-4 text-destructive shrink-0" />
                <span className="truncate">{row.traditional}</span>
              </div>
              <div className="p-2 sm:p-3 md:p-4 border-l border-primary/50 bg-primary/5 flex items-center gap-1 sm:gap-2">
                <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary shrink-0" />
                <span className="font-medium truncate">{row.ya}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quote - hidden on very small screens */}
        <p className={`hidden sm:block text-sm sm:text-base md:text-xl text-center text-foreground/70 max-w-2xl mx-auto ${isActive ? 'animate-fade-up delay-700' : 'opacity-0'}`}>
          O tom de voz vem de pesquisa direta.
          <span className="text-foreground font-medium"> Não é robô falando "prezada cliente". É uma amiga que entende.</span>
        </p>
      </div>
    </SlideContainer>
  );
};

export default SlideDifferential;
