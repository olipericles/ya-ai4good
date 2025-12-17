import SlideContainer from "../SlideContainer";
import { ArrowDown, Users, TrendingUp, Database } from "lucide-react";

type TransitionType = "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";

interface SlideTractionProps {
  isActive: boolean;
  transition?: TransitionType;
}

const SlideTraction = ({ isActive, transition }: SlideTractionProps) => {
  // Placeholder numbers for mother photos (will be replaced with real photos)
  const photoPlaceholders = Array.from({ length: 15 }, (_, i) => i + 1);

  return (
    <SlideContainer isActive={isActive} transition={transition}>
      <div className="flex h-full gap-4">
        {/* Left side - Photo bubbles */}
        <div className={`hidden md:flex flex-col justify-center gap-2 w-20 ${isActive ? 'animate-fade-in delay-300' : 'opacity-0'}`}>
          <div className="flex flex-wrap gap-2 justify-center">
            {photoPlaceholders.slice(0, 8).map((num) => (
              <div
                key={num}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 border border-primary/40 flex items-center justify-center text-xs font-medium text-foreground/60"
              >
                {num}
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-6">
          {/* Title */}
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center ${isActive ? 'animate-fade-up' : 'opacity-0'}`}>
            Feito <span className="text-gradient">COM</span> elas, <span className="text-gradient">PARA</span> elas
          </h2>

          {/* Block 1 - O que já aprendemos */}
          <div className={`bg-card border border-border rounded-2xl p-4 sm:p-5 ${isActive ? 'animate-scale-in delay-200' : 'opacity-0'}`}>
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-5 h-5 text-primary" />
              <h3 className="text-base sm:text-lg font-bold text-primary">O que já aprendemos</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm sm:text-base">
                <span className="text-primary mt-0.5">•</span>
                <span><strong>23 mães</strong> ouvidas em pesquisa de campo</span>
              </li>
              <li className="flex items-start gap-2 text-sm sm:text-base">
                <span className="text-primary mt-0.5">•</span>
                <span><strong>56%</strong> só percebem que o dinheiro acabou quando olham o saldo</span>
              </li>
              <li className="flex items-start gap-2 text-sm sm:text-base">
                <span className="text-primary mt-0.5">•</span>
                <span><strong>70%</strong> querem ser alertadas ANTES — não depois que o dinheiro acabou</span>
              </li>
            </ul>
          </div>

          {/* Arrow + Subtitle */}
          <div className={`flex items-center justify-center gap-3 ${isActive ? 'animate-fade-in delay-400' : 'opacity-0'}`}>
            <ArrowDown className="w-5 h-5 text-primary/50" />
            <span className="text-sm text-foreground/60 font-medium">Do Dado ao Impacto</span>
            <ArrowDown className="w-5 h-5 text-primary/50" />
          </div>

          {/* Block 2 - O que isso pode gerar */}
          <div className={`bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl p-4 sm:p-5 ${isActive ? 'animate-scale-in delay-500' : 'opacity-0'}`}>
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-secondary" />
              <h3 className="text-base sm:text-lg font-bold text-secondary">O que isso pode gerar</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm sm:text-base">
                <Database className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                <span>Dados agregados sobre padrões de gasto em famílias vulneráveis</span>
              </li>
              <li className="flex items-start gap-2 text-sm sm:text-base">
                <Database className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                <span>Insumo para políticas públicas municipais</span>
              </li>
              <li className="flex items-start gap-2 text-sm sm:text-base">
                <Database className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                <span>Menos estresse → melhor ambiente para <strong>22 milhões de crianças</strong></span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right side - Photo bubbles */}
        <div className={`hidden md:flex flex-col justify-center gap-2 w-20 ${isActive ? 'animate-fade-in delay-300' : 'opacity-0'}`}>
          <div className="flex flex-wrap gap-2 justify-center">
            {photoPlaceholders.slice(8, 15).map((num) => (
              <div
                key={num}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 border border-secondary/40 flex items-center justify-center text-xs font-medium text-foreground/60"
              >
                {num}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

export default SlideTraction;
