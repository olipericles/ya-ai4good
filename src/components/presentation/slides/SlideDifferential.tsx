import SlideContainer from "../SlideContainer";
import { Check, X } from "lucide-react";
import yaLogo from "@/assets/ya_logo_branco.svg";

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
  ];

  return (
    <SlideContainer isActive={isActive} transition={transition}>
      <div className="space-y-6 sm:space-y-8 md:space-y-12">
        {/* Title */}
        <h2 className={`text-2xl sm:text-3xl md:text-5xl font-bold text-center ${isActive ? 'animate-fade-up' : 'opacity-0'}`}>
          Feito <span className="text-gradient">COM</span> elas, <span className="text-gradient">PARA</span> elas
        </h2>

        {/* Quote Card - Above table */}
        <div className={`${isActive ? 'animate-fade-up delay-100' : 'opacity-0'}`}>
          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto text-center">
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/70">
              "Não é robô falando 'prezada cliente'.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-primary font-bold mt-2">
              É uma amiga que entende."
            </p>
          </div>
        </div>

        {/* Comparison table */}
        <div className={`bg-card border border-border rounded-2xl overflow-hidden max-w-3xl mx-auto ${isActive ? 'animate-scale-in delay-300' : 'opacity-0'}`}>
          {/* Header */}
          <div className="grid grid-cols-3 bg-muted">
            <div className="p-4 sm:p-5"></div>
            <div className="p-4 sm:p-5 text-center border-l border-border">
              <span className="text-foreground/60 font-medium text-base sm:text-lg">Outros</span>
            </div>
            <div className="p-4 sm:p-5 text-center border-l border-primary/50 bg-primary/5">
              <div className="flex items-center justify-center">
                <img src={yaLogo} alt="Yá" className="h-6 sm:h-8" />
              </div>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 border-t border-border ${isActive ? `animate-fade-up` : 'opacity-0'}`}
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="p-4 sm:p-5 font-semibold text-foreground/80 text-base sm:text-lg">
                {row.criteria}
              </div>
              <div className="p-4 sm:p-5 border-l border-border flex items-center gap-2 text-foreground/60 text-base sm:text-lg">
                <X className="w-5 h-5 text-destructive shrink-0" />
                <span>{row.traditional}</span>
              </div>
              <div className="p-4 sm:p-5 border-l border-primary/50 bg-primary/5 flex items-center gap-2 text-base sm:text-lg">
                <Check className="w-5 h-5 text-primary shrink-0" />
                <span className="font-medium">{row.ya}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote about Granazen */}
        <p className={`text-center text-sm text-foreground/50 max-w-2xl mx-auto ${isActive ? 'animate-fade-up delay-500' : 'opacity-0'}`}>
          *O Granazen também usa WhatsApp, mas exige cadastro formal e não entende áudio.
        </p>
      </div>
    </SlideContainer>
  );
};

export default SlideDifferential;
