import SlideContainer from "../SlideContainer";
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
    // Left side - 7 bubbles
    { id: 1, photo: mae1, top: "2%", left: "2%", size: 80, animDelay: "0s" },
    { id: 2, photo: mae2, top: "16%", left: "6%", size: 72, animDelay: "0.8s" },
    { id: 3, photo: mae3, top: "30%", left: "1%", size: 85, animDelay: "1.6s" },
    { id: 4, photo: mae4, top: "44%", left: "5%", size: 75, animDelay: "2.4s" },
    { id: 5, photo: mae5, top: "58%", left: "2%", size: 80, animDelay: "3.2s" },
    { id: 6, photo: mae6, top: "72%", left: "7%", size: 70, animDelay: "4s" },
    { id: 7, photo: mae7, top: "86%", left: "3%", size: 75, animDelay: "4.8s" },
    // Right side - 7 bubbles
    { id: 8, photo: mae8, top: "5%", right: "3%", size: 75, animDelay: "0.4s" },
    { id: 9, photo: mae9, top: "19%", right: "7%", size: 80, animDelay: "1.2s" },
    { id: 10, photo: mae10, top: "33%", right: "2%", size: 72, animDelay: "2s" },
    { id: 11, photo: mae11, top: "47%", right: "5%", size: 85, animDelay: "2.8s" },
    { id: 12, photo: mae12, top: "61%", right: "1%", size: 78, animDelay: "3.6s" },
    { id: 13, photo: mae13, top: "75%", right: "6%", size: 70, animDelay: "4.4s" },
    { id: 14, photo: mae14, top: "89%", right: "2%", size: 75, animDelay: "5.2s" },
  ];

  return (
    <SlideContainer isActive={isActive} transition={transition}>
      {/* Background bubbles layer - more visible */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className={`absolute rounded-full overflow-hidden border-2 border-primary/70 shadow-lg animate-slide-down ${isActive ? 'opacity-90' : 'opacity-0'}`}
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
