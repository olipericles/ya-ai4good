import SlideContainer from "./SlideContainer";
import { Users, TrendingUp, Database } from "lucide-react";

// Import mother photos
import mae1 from "@/assets/maes/1.jpeg";
import mae2 from "@/assets/maes/2.jpeg";
import mae3 from "@/assets/maes/3.jpeg";
import mae4 from "@/assets/maes/4.jpeg";
import mae5 from "@/assets/maes/5.jpeg";
import mae6 from "@/assets/maes/6.jpeg";
import mae7 from "@/assets/maes/7.jpeg";
import mae8 from "@/assets/maes/8.jpeg";
import mae9 from "@/assets/maes/9.jpeg";
import mae10 from "@/assets/maes/10.jpeg";
import mae11 from "@/assets/maes/11.jpeg";
import mae12 from "@/assets/maes/12.jpeg";
import mae13 from "@/assets/maes/13.jpeg";
import mae14 from "@/assets/maes/14.jpeg";

type TransitionType = "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";

interface SlideTractionProps {
  isActive: boolean;
  transition?: TransitionType;
}

const SlideTraction = ({ isActive, transition }: SlideTractionProps) => {
  // 14 bubbles with mother photos - more visible (less transparency)
  const bubbles = [
    // Left side - 7 bubbles (adjusted positions to stay visible)
    { id: 1, photo: mae1, top: "3%", left: "1%", size: 80, animDelay: "0s" },
    { id: 2, photo: mae2, top: "15%", left: "4%", size: 70, animDelay: "0.8s" },
    { id: 3, photo: mae3, top: "28%", left: "0%", size: 85, animDelay: "1.6s" },
    { id: 4, photo: mae4, top: "42%", left: "3%", size: 75, animDelay: "2.4s" },
    { id: 5, photo: mae5, top: "56%", left: "1%", size: 80, animDelay: "3.2s" },
    { id: 6, photo: mae6, top: "70%", left: "5%", size: 70, animDelay: "4s" },
    { id: 7, photo: mae7, top: "84%", left: "2%", size: 75, animDelay: "4.8s" },
    // Right side - 7 bubbles (adjusted positions to stay visible)
    { id: 8, photo: mae8, top: "5%", right: "1%", size: 75, animDelay: "0.4s" },
    { id: 9, photo: mae9, top: "18%", right: "5%", size: 80, animDelay: "1.2s" },
    { id: 10, photo: mae10, top: "31%", right: "0%", size: 72, animDelay: "2s" },
    { id: 11, photo: mae11, top: "45%", right: "3%", size: 90, animDelay: "2.8s" },
    { id: 12, photo: mae12, top: "59%", right: "0%", size: 78, animDelay: "3.6s" },
    { id: 13, photo: mae13, top: "73%", right: "4%", size: 68, animDelay: "4.4s" },
    { id: 14, photo: mae14, top: "87%", right: "1%", size: 75, animDelay: "5.2s" },
  ];

  return (
    <SlideContainer isActive={isActive} transition={transition}>
      {/* Background bubbles layer - more visible */}
      <div className="absolute inset-0 overflow-hidden">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className={`absolute rounded-full overflow-hidden border-2 border-primary/70 shadow-lg animate-slide-down transition-all duration-300 cursor-pointer hover:opacity-100 hover:scale-110 hover:border-primary hover:shadow-xl hover:z-20 ${isActive ? 'opacity-70' : 'opacity-0'}`}
            style={{
              top: bubble.top,
              left: bubble.left,
              right: bubble.right,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              animationDelay: bubble.animDelay,
            }}
          >
            <img
              src={bubble.photo}
              alt={`Mãe ${bubble.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col h-full gap-4 sm:gap-6 md:gap-10 max-w-6xl mx-auto py-8">
        {/* Title */}
        <h2 className={`text-3xl sm:text-5xl md:text-7xl font-black text-center ${isActive ? 'animate-fade-up' : 'opacity-0'}`}>
          Feito <span className="text-gradient">COM</span> elas, <span className="text-gradient">PARA</span> elas
        </h2>

        {/* Block 1 - O que já aprendemos */}
        <div className={`bg-card/95 backdrop-blur-sm border border-border rounded-3xl p-5 sm:p-7 md:p-8 ${isActive ? 'animate-scale-in delay-200' : 'opacity-0'}`}>
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-7 h-7 md:w-10 md:h-10 text-primary" />
            <h3 className="text-xl sm:text-3xl font-black text-primary">O que já aprendemos</h3>
          </div>
          <ul className="space-y-3 md:space-y-4">
            <li className="flex items-start gap-4 text-base sm:text-xl md:text-2xl">
              <span className="text-primary mt-1 text-xl">•</span>
              <span><strong>23 mães</strong> ouvidas em pesquisa de campo</span>
            </li>
            <li className="flex items-start gap-4 text-base sm:text-xl md:text-2xl">
              <span className="text-primary mt-1 text-xl">•</span>
              <span><strong>56%</strong> só percebem que o dinheiro acabou quando olham o saldo</span>
            </li>
            <li className="flex items-start gap-4 text-base sm:text-xl md:text-2xl">
              <span className="text-primary mt-1 text-xl">•</span>
              <span><strong>70%</strong> querem ser alertadas ANTES — não depois que o dinheiro acabou</span>
            </li>
          </ul>
        </div>

        {/* Subtitle - smaller to not compete with main title */}
        <div className={`flex justify-center py-1 ${isActive ? 'animate-fade-in delay-400' : 'opacity-0'}`}>
          <h3 className="text-lg sm:text-2xl md:text-4xl font-black text-foreground/70">
            Do <span className="text-gradient">Dado</span> ao <span className="text-gradient">Impacto</span>
          </h3>
        </div>

        {/* Block 2 - O que isso pode gerar */}
        <div className={`bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/30 rounded-3xl p-5 sm:p-7 md:p-8 ${isActive ? 'animate-scale-in delay-500' : 'opacity-0'}`}>
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-7 h-7 md:w-10 md:h-10 text-secondary" />
            <h3 className="text-xl sm:text-3xl font-black text-secondary">O que isso pode gerar</h3>
          </div>
          <ul className="space-y-3 md:space-y-4">
            <li className="flex items-start gap-4 text-base sm:text-xl md:text-2xl">
              <Database className="w-5 h-5 md:w-8 md:h-8 text-secondary mt-1 shrink-0" />
              <span>Tecnologia que tira as mães solo da <strong>invisibilidade estatística</strong></span>
            </li>
            <li className="flex items-start gap-4 text-base sm:text-xl md:text-2xl">
              <Database className="w-5 h-5 md:w-8 md:h-8 text-secondary mt-1 shrink-0" />
              <span>Insumo real para <strong>políticas públicas de justiça social</strong></span>
            </li>
            <li className="flex items-start gap-4 text-base sm:text-xl md:text-2xl">
              <Database className="w-5 h-5 md:w-8 md:h-8 text-secondary mt-1 shrink-0" />
              <span>Combate ao estresse tóxico para <strong>22 milhões de crianças</strong></span>
            </li>
          </ul>
        </div>
      </div>
    </SlideContainer>
  );
};

export default SlideTraction;
