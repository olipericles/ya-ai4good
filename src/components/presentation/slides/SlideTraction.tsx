import SlideContainer from "../SlideContainer";
import { Check, Star, Circle } from "lucide-react";

type TransitionType = "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";

interface SlideTractionProps {
  isActive: boolean;
  transition?: TransitionType;
}

const SlideTraction = ({ isActive, transition }: SlideTractionProps) => {
  const milestones = [
    { text: "Propósito e ideia", status: "done" },
    { text: "Selecionados AI4Good", status: "done" },
    { text: "Pesquisa em campo", status: "done" },
    { text: "Protótipo WhatsApp", status: "done" },
    { text: "DemoDay", status: "current" },
    { text: "Consciência e controle", status: "pending" },
    { text: "Dados para políticas", status: "pending" },
    { text: "Ambiente seguro", status: "pending" },
    { text: "Impacto geracional", status: "pending" },
  ];

  // Positions for snake-like path (alternating left-right)
  const positions = [
    { x: 15, y: 8 },   // 1
    { x: 50, y: 8 },   // 2
    { x: 85, y: 8 },   // 3
    { x: 85, y: 35 },  // 4
    { x: 50, y: 35 },  // 5 - current
    { x: 15, y: 35 },  // 6
    { x: 15, y: 62 },  // 7
    { x: 50, y: 62 },  // 8
    { x: 85, y: 62 },  // 9
  ];

  return (
    <SlideContainer isActive={isActive} transition={transition}>
      <div className="space-y-4 sm:space-y-6">
        {/* Title */}
        <h2 className={`text-xl sm:text-2xl md:text-4xl font-bold text-center ${isActive ? 'animate-fade-up' : 'opacity-0'}`}>
          Nossa <span className="text-gradient">Jornada</span>
        </h2>

        {/* Game Map */}
        <div className={`relative w-full max-w-4xl mx-auto aspect-[16/9] ${isActive ? 'animate-fade-in delay-200' : 'opacity-0'}`}>
          {/* SVG Path */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 75" preserveAspectRatio="xMidYMid meet">
            {/* Curved path connecting points */}
            <path
              d={`M 15 8 
                  L 50 8 
                  L 85 8 
                  C 95 8, 95 35, 85 35
                  L 50 35 
                  L 15 35
                  C 5 35, 5 62, 15 62
                  L 50 62 
                  L 85 62`}
              fill="none"
              stroke="url(#pathGradient)"
              strokeWidth="0.8"
              strokeDasharray="2 1"
              className="opacity-40"
            />
            {/* Progress path (filled up to current) */}
            <path
              d={`M 15 8 
                  L 50 8 
                  L 85 8 
                  C 95 8, 95 35, 85 35
                  L 50 35`}
              fill="none"
              stroke="url(#progressGradient)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--muted))" />
              </linearGradient>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--secondary))" />
              </linearGradient>
            </defs>
          </svg>

          {/* Milestone Points */}
          {milestones.map((milestone, index) => {
            const pos = positions[index];
            const isDone = milestone.status === "done";
            const isCurrent = milestone.status === "current";

            return (
              <div
                key={index}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center ${isActive ? 'animate-scale-in' : 'opacity-0'}`}
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  animationDelay: `${200 + index * 80}ms`
                }}
              >
                {/* Point circle */}
                <div className={`
                  w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center
                  ${isCurrent
                    ? 'bg-secondary text-secondary-foreground ring-4 ring-secondary/30 animate-pulse'
                    : isDone
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground border-2 border-dashed border-muted-foreground/30'}
                `}>
                  {isDone ? (
                    <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                  ) : isCurrent ? (
                    <Star className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" />
                  ) : (
                    <Circle className="w-2 h-2 sm:w-3 sm:h-3" />
                  )}
                </div>

                {/* Label */}
                <span className={`
                  mt-1 text-[8px] sm:text-[10px] md:text-xs text-center max-w-[60px] sm:max-w-[80px] md:max-w-[100px] leading-tight
                  ${isCurrent ? 'text-secondary font-bold' : isDone ? 'text-foreground/80' : 'text-foreground/50'}
                `}>
                  {milestone.text}
                </span>

                {/* Current indicator */}
                {isCurrent && (
                  <span className="mt-0.5 text-[6px] sm:text-[8px] bg-secondary/20 text-secondary px-1.5 py-0.5 rounded-full font-medium">
                    Você está aqui!
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className={`flex justify-center gap-4 sm:gap-6 text-xs sm:text-sm ${isActive ? 'animate-fade-up delay-700' : 'opacity-0'}`}>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-foreground/60">Concluído</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
            <span className="text-foreground/60">Atual</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-muted border border-dashed border-muted-foreground/30" />
            <span className="text-foreground/60">Próximo</span>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

export default SlideTraction;
