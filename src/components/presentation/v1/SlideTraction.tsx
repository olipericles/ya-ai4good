import SlideContainer from "./SlideContainer";
import { Check, Star } from "lucide-react";
import { useState } from "react";

type TransitionType = "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";

interface SlideTractionProps {
  isActive: boolean;
  transition?: TransitionType;
}

const SlideTraction = ({ isActive, transition }: SlideTractionProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const activeIndex = hoveredIndex !== null ? hoveredIndex : 4;

  const milestones = [
    { text: "Propósito e ideia", status: "done" },
    { text: "Selecionados AI4Good 2025 (8 de 167)", status: "done" },
    { text: "Pesquisa com mães solo em campo", status: "done" },
    { text: "Protótipo funcional no WhatsApp", status: "done" },
    { text: "DemoDay", status: "current" },
    { text: "Mais consciência, senso de controle e menos estresse", status: "pending" },
    { text: "Dados agregados para políticas públicas", status: "pending" },
    { text: "Ambiente seguro e com perspectiva para ~2 filhos/mãe", status: "pending" },
    { text: "Impacto geracional: redução da pobreza e desigualdade", status: "pending" },
  ];

  const positions = [
    { x: 20, y: 12 },
    { x: 50, y: 12 },
    { x: 80, y: 12 },
    { x: 80, y: 50 },
    { x: 50, y: 50 },
    { x: 20, y: 50 },
    { x: 20, y: 88 },
    { x: 50, y: 88 },
    { x: 80, y: 88 },
  ];

  return (
    <SlideContainer isActive={isActive} transition={transition}>
      <div className="flex flex-col h-full">
        {/* Title */}
        <h2 className={`text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-6 sm:mb-8 ${isActive ? 'animate-fade-up' : 'opacity-0'}`}>
          Nossa <span className="text-gradient">Jornada</span>
        </h2>

        {/* Split Layout */}
        <div className={`flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 ${isActive ? 'animate-fade-in delay-200' : 'opacity-0'}`}>

          {/* Left: List */}
          <div className="flex flex-col justify-center gap-2 sm:gap-3">
            {milestones.map((milestone, index) => {
              const isDone = milestone.status === "done";
              const isCurrent = milestone.status === "current";
              const isHovered = activeIndex === index;

              return (
                <div
                  key={index}
                  className={`
                    flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-xl
                    transition-all duration-200
                    ${isHovered ? 'bg-primary/10 translate-x-1' : ''}
                  `}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className={`
                    w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0
                    text-sm sm:text-base font-bold
                    ${isCurrent
                      ? 'bg-secondary text-secondary-foreground'
                      : isDone
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'}
                  `}>
                    {isDone ? <Check className="w-4 h-4 sm:w-5 sm:h-5" /> : isCurrent ? <Star className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" /> : index + 1}
                  </div>

                  <span className={`
                    text-sm sm:text-base md:text-lg flex-1 leading-tight
                    ${isCurrent ? 'text-secondary font-semibold' : isDone ? 'text-foreground' : 'text-foreground/60'}
                  `}>
                    {milestone.text}
                  </span>

                  {isCurrent && (
                    <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-full whitespace-nowrap font-medium">
                      Nós estamos aqui!
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Map */}
          <div className="relative w-full h-full min-h-[300px] sm:min-h-[350px] bg-gradient-to-br from-card to-muted/30 rounded-3xl border border-border/50 shadow-inner">
            <svg className="absolute inset-0 w-full h-full p-6" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
              <path
                d="M 20 12 L 50 12 L 80 12 C 95 12, 95 50, 80 50 L 50 50 L 20 50 C 5 50, 5 88, 20 88 L 50 88 L 80 88"
                fill="none"
                stroke="hsl(var(--muted-foreground))"
                strokeWidth="0.6"
                strokeDasharray="2 1.5"
                className="opacity-20"
              />
              <path
                d="M 20 12 L 50 12 L 80 12 C 95 12, 95 50, 80 50 L 50 50"
                fill="none"
                stroke="url(#progressGradient)"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(var(--secondary))" />
                </linearGradient>
              </defs>
            </svg>

            {milestones.map((milestone, index) => {
              const pos = positions[index];
              const isDone = milestone.status === "done";
              const isCurrent = milestone.status === "current";
              const isHovered = activeIndex === index;

              return (
                <div
                  key={index}
                  className="absolute"
                  style={{
                    left: `${pos.x}%`,
                    top: `${pos.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className={`
                    w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center
                    transition-all duration-200 shadow-md
                    ${isHovered ? 'scale-125 ring-3 ring-primary/40 shadow-xl' : ''}
                    ${isCurrent
                      ? 'bg-secondary text-secondary-foreground shadow-lg shadow-secondary/50'
                      : isDone
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground border-2 border-dashed border-muted-foreground/30'}
                  `}>
                    {isDone ? (
                      <Check className="w-5 h-5 sm:w-6 sm:h-6" />
                    ) : isCurrent ? (
                      <Star className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" />
                    ) : (
                      <span className="text-sm sm:text-base font-bold">{index + 1}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

export default SlideTraction;
