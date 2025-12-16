import SlideContainer from "../SlideContainer";
import { ArrowDown, Users, TrendingUp, Database } from "lucide-react";

type TransitionType = "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";

interface SlideTractionProps {
  isActive: boolean;
  transition?: TransitionType;
}

const SlideTraction = ({ isActive, transition }: SlideTractionProps) => {
  return (
    <SlideContainer isActive={isActive} transition={transition}>
      <div className="flex flex-col h-full gap-6 sm:gap-8">
        {/* Title */}
        <h2 className={`text-2xl sm:text-3xl md:text-5xl font-bold text-center ${isActive ? 'animate-fade-up' : 'opacity-0'}`}>
          Do <span className="text-gradient">Dado</span> ao <span className="text-gradient">Impacto</span>
        </h2>

        {/* Two blocks */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-6">

          {/* Block 1 - O que já aprendemos */}
          <div className={`flex-1 bg-card border border-border rounded-2xl p-4 sm:p-6 ${isActive ? 'animate-scale-in delay-200' : 'opacity-0'}`}>
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-primary" />
              <h3 className="text-lg sm:text-xl font-bold text-primary">O que já aprendemos</h3>
            </div>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 text-sm sm:text-base md:text-lg">
                <span className="text-primary mt-1">•</span>
                <span><strong>23 mães</strong> ouvidas em pesquisa de campo</span>
              </li>
              <li className="flex items-start gap-2 text-sm sm:text-base md:text-lg">
                <span className="text-primary mt-1">•</span>
                <span><strong>56%</strong> só percebem que o dinheiro acabou quando olham o saldo</span>
              </li>
              <li className="flex items-start gap-2 text-sm sm:text-base md:text-lg">
                <span className="text-primary mt-1">•</span>
                <span><strong>Alimentação:</strong> gasto mais citado como "sem controle"</span>
              </li>
            </ul>
          </div>

          {/* Arrow */}
          <div className={`flex justify-center ${isActive ? 'animate-fade-in delay-400' : 'opacity-0'}`}>
            <ArrowDown className="w-8 h-8 text-primary/50" />
          </div>

          {/* Block 2 - O que isso pode gerar */}
          <div className={`flex-1 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl p-4 sm:p-6 ${isActive ? 'animate-scale-in delay-500' : 'opacity-0'}`}>
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-secondary" />
              <h3 className="text-lg sm:text-xl font-bold text-secondary">O que isso pode gerar</h3>
            </div>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 text-sm sm:text-base md:text-lg">
                <Database className="w-4 h-4 text-secondary mt-1 shrink-0" />
                <span>Dados agregados e anônimos sobre padrões de gasto em famílias vulneráveis</span>
              </li>
              <li className="flex items-start gap-2 text-sm sm:text-base md:text-lg">
                <Database className="w-4 h-4 text-secondary mt-1 shrink-0" />
                <span>Insumo para políticas públicas municipais</span>
              </li>
              <li className="flex items-start gap-2 text-sm sm:text-base md:text-lg">
                <Database className="w-4 h-4 text-secondary mt-1 shrink-0" />
                <span>Menos estresse financeiro → melhor ambiente para <strong>22 milhões de crianças</strong></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

export default SlideTraction;
