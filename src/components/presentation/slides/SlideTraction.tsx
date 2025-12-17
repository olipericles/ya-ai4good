import SlideContainer from "../SlideContainer";
import { Users, TrendingUp, Database } from "lucide-react";

type TransitionType = "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";

interface SlideTractionProps {
  isActive: boolean;
  transition?: TransitionType;
}

const SlideTraction = ({ isActive, transition }: SlideTractionProps) => {
  // Placeholder bubbles for mother photos (will be replaced with real photos)
  const bubbles = [
    { id: 1, top: "5%", left: "5%", size: "w-12 h-12", delay: "delay-100" },
    { id: 2, top: "15%", left: "12%", size: "w-10 h-10", delay: "delay-200" },
    { id: 3, top: "30%", left: "3%", size: "w-14 h-14", delay: "delay-300" },
    { id: 4, top: "45%", left: "8%", size: "w-11 h-11", delay: "delay-400" },
    { id: 5, top: "60%", left: "2%", size: "w-10 h-10", delay: "delay-500" },
    { id: 6, top: "75%", left: "10%", size: "w-12 h-12", delay: "delay-100" },
    { id: 7, top: "85%", left: "5%", size: "w-9 h-9", delay: "delay-200" },
    { id: 8, top: "10%", right: "8%", size: "w-11 h-11", delay: "delay-300" },
    { id: 9, top: "25%", right: "3%", size: "w-13 h-13", delay: "delay-400" },
    { id: 10, top: "40%", right: "10%", size: "w-10 h-10", delay: "delay-500" },
    { id: 11, top: "55%", right: "5%", size: "w-12 h-12", delay: "delay-100" },
    { id: 12, top: "70%", right: "2%", size: "w-11 h-11", delay: "delay-200" },
    { id: 13, top: "80%", right: "12%", size: "w-9 h-9", delay: "delay-300" },
    { id: 14, top: "92%", right: "6%", size: "w-10 h-10", delay: "delay-400" },
    { id: 15, top: "50%", left: "15%", size: "w-8 h-8", delay: "delay-500" },
  ];

  return (
    <SlideContainer isActive={isActive} transition={transition}>
      {/* Background bubbles layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className={`absolute ${bubble.size} rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center text-xs font-medium text-foreground/40 ${isActive ? `animate-fade-in ${bubble.delay}` : 'opacity-0'}`}
            style={{
              top: bubble.top,
              left: bubble.left,
              right: bubble.right,
            }}
          >
            {bubble.id}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col h-full gap-4 sm:gap-6">
        {/* Title */}
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center ${isActive ? 'animate-fade-up' : 'opacity-0'}`}>
          Feito <span className="text-gradient">COM</span> elas, <span className="text-gradient">PARA</span> elas
        </h2>

        {/* Block 1 - O que já aprendemos */}
        <div className={`bg-card/95 backdrop-blur-sm border border-border rounded-2xl p-4 sm:p-5 ${isActive ? 'animate-scale-in delay-200' : 'opacity-0'}`}>
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

        {/* Subtitle */}
        <div className={`flex justify-center ${isActive ? 'animate-fade-in delay-400' : 'opacity-0'}`}>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
            Do <span className="text-gradient">Dado</span> ao <span className="text-gradient">Impacto</span>
          </h3>
        </div>

        {/* Block 2 - O que isso pode gerar */}
        <div className={`bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/30 rounded-2xl p-4 sm:p-5 ${isActive ? 'animate-scale-in delay-500' : 'opacity-0'}`}>
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
    </SlideContainer>
  );
};

export default SlideTraction;
