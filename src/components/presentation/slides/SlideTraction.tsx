import SlideContainer from "../SlideContainer";
import { Users, TrendingUp, Database } from "lucide-react";

type TransitionType = "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";

interface SlideTractionProps {
  isActive: boolean;
  transition?: TransitionType;
}

const SlideTraction = ({ isActive, transition }: SlideTractionProps) => {
  // Placeholder bubbles for mother photos - larger sizes with slide-down animation
  const bubbles = [
    { id: 1, top: "2%", left: "3%", size: "w-16 h-16", animDelay: "0s" },
    { id: 2, top: "18%", left: "8%", size: "w-14 h-14", animDelay: "1s" },
    { id: 3, top: "35%", left: "2%", size: "w-18 h-18", animDelay: "2s" },
    { id: 4, top: "52%", left: "6%", size: "w-15 h-15", animDelay: "3s" },
    { id: 5, top: "68%", left: "1%", size: "w-14 h-14", animDelay: "4s" },
    { id: 6, top: "82%", left: "7%", size: "w-16 h-16", animDelay: "5s" },
    { id: 7, top: "5%", right: "5%", size: "w-15 h-15", animDelay: "0.5s" },
    { id: 8, top: "20%", right: "2%", size: "w-17 h-17", animDelay: "1.5s" },
    { id: 9, top: "38%", right: "7%", size: "w-14 h-14", animDelay: "2.5s" },
    { id: 10, top: "55%", right: "3%", size: "w-16 h-16", animDelay: "3.5s" },
    { id: 11, top: "70%", right: "1%", size: "w-15 h-15", animDelay: "4.5s" },
    { id: 12, top: "85%", right: "6%", size: "w-14 h-14", animDelay: "5.5s" },
    { id: 13, top: "92%", left: "12%", size: "w-12 h-12", animDelay: "6s" },
    { id: 14, top: "8%", right: "12%", size: "w-12 h-12", animDelay: "6.5s" },
    { id: 15, top: "95%", right: "10%", size: "w-13 h-13", animDelay: "7s" },
  ];

  return (
    <SlideContainer isActive={isActive} transition={transition}>
      {/* Background bubbles layer with slide-down animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className={`absolute rounded-full bg-gradient-to-br from-primary/25 to-secondary/25 border border-primary/40 flex items-center justify-center text-sm font-bold text-foreground/50 animate-slide-down ${isActive ? 'opacity-100' : 'opacity-0'}`}
            style={{
              top: bubble.top,
              left: bubble.left,
              right: bubble.right,
              width: bubble.size.includes('18') ? '72px' : bubble.size.includes('17') ? '68px' : bubble.size.includes('16') ? '64px' : bubble.size.includes('15') ? '60px' : bubble.size.includes('14') ? '56px' : bubble.size.includes('13') ? '52px' : '48px',
              height: bubble.size.includes('18') ? '72px' : bubble.size.includes('17') ? '68px' : bubble.size.includes('16') ? '64px' : bubble.size.includes('15') ? '60px' : bubble.size.includes('14') ? '56px' : bubble.size.includes('13') ? '52px' : '48px',
              animationDelay: bubble.animDelay,
            }}
          >
            {bubble.id}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col h-full gap-3 sm:gap-4 max-w-4xl mx-auto">
        {/* Title */}
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center ${isActive ? 'animate-fade-up' : 'opacity-0'}`}>
          Feito <span className="text-gradient">COM</span> elas, <span className="text-gradient">PARA</span> elas
        </h2>

        {/* Block 1 - O que já aprendemos */}
        <div className={`bg-card/95 backdrop-blur-sm border border-border rounded-2xl p-5 sm:p-6 ${isActive ? 'animate-scale-in delay-200' : 'opacity-0'}`}>
          <div className="flex items-center gap-2 mb-3">
            <Users className="w-6 h-6 text-primary" />
            <h3 className="text-xl sm:text-2xl font-bold text-primary">O que já aprendemos</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-base sm:text-lg">
              <span className="text-primary mt-0.5 text-xl">•</span>
              <span><strong>23 mães</strong> ouvidas em pesquisa de campo</span>
            </li>
            <li className="flex items-start gap-3 text-base sm:text-lg">
              <span className="text-primary mt-0.5 text-xl">•</span>
              <span><strong>56%</strong> só percebem que o dinheiro acabou quando olham o saldo</span>
            </li>
            <li className="flex items-start gap-3 text-base sm:text-lg">
              <span className="text-primary mt-0.5 text-xl">•</span>
              <span><strong>70%</strong> querem ser alertadas ANTES — não depois que o dinheiro acabou</span>
            </li>
          </ul>
        </div>

        {/* Subtitle */}
        <div className={`flex justify-center ${isActive ? 'animate-fade-in delay-400' : 'opacity-0'}`}>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Do <span className="text-gradient">Dado</span> ao <span className="text-gradient">Impacto</span>
          </h3>
        </div>

        {/* Block 2 - O que isso pode gerar */}
        <div className={`bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/30 rounded-2xl p-5 sm:p-6 ${isActive ? 'animate-scale-in delay-500' : 'opacity-0'}`}>
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-6 h-6 text-secondary" />
            <h3 className="text-xl sm:text-2xl font-bold text-secondary">O que isso pode gerar</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-base sm:text-lg">
              <Database className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
              <span>Dados agregados sobre padrões de gasto em famílias vulneráveis</span>
            </li>
            <li className="flex items-start gap-3 text-base sm:text-lg">
              <Database className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
              <span>Insumo para políticas públicas municipais</span>
            </li>
            <li className="flex items-start gap-3 text-base sm:text-lg">
              <Database className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
              <span>Menos estresse → melhor ambiente para <strong>22 milhões de crianças</strong></span>
            </li>
          </ul>
        </div>
      </div>
    </SlideContainer>
  );
};

export default SlideTraction;
