import SlideContainer from "../SlideContainer";
import { Check, Star } from "lucide-react";
import { useState } from "react";

type TransitionType = "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";

interface SlideTractionProps {
  isActive: boolean;
  transition?: TransitionType;
}

const SlideTraction = ({ isActive, transition }: SlideTractionProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const activeIndex = hoveredIndex !== null ? hoveredIndex : 3; // DemoDay is index 3

  const milestones = [
    { text: "Selecionados AI4Good 2025 (8 de 167)", status: "done" },
    { text: "Pesquisa com mães solo em campo", status: "done" },
    { text: "Protótipo funcional no WhatsApp", status: "done" },
    { text: "DemoDay", status: "current" },
  ];

  const positions = [
    { x: 20, y: 25 },
    { x: 50, y: 25 },
    { x: 80, y: 25 },
    { x: 50, y: 75 },
  ];

  return (
    <SlideContainer isActive={isActive} transition={transition}>
      <div className="flex flex-col h-full justify-between">
        {/* Title */}
        <h2 className={`text-2xl sm:text-3xl md:text-5xl font-bold text-center ${isActive ? 'animate-fade-up' : 'opacity-0'}`}>
          Nossa <span className="text-gradient">Jornada</span>
        </h2>

        {/* Split Layout */}
        <div className={`flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 my-6 ${isActive ? 'animate-fade-in delay-200' : 'opacity-0'}`}>

          {/* Left: List */}
          <div className="flex flex-col justify-center gap-3 sm:gap-4">
            {milestones.map((milestone, index) => {
              const isDone = milestone.status === "done";
              const isCurrent = milestone.status === "current";
              const isHovered = activeIndex === index;

              return (
                <div
                  key={index}
                  className={`
                    flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl
                    transition-all duration-200
                    ${isHovered ? 'bg-primary/10 translate-x-1' : ''}
                  `}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className={`
                    w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0
                    text-base sm:text-lg font-bold
                    ${isCurrent
                      ? 'bg-secondary text-secondary-foreground'
                      : isDone
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'}
                  `}>
                    {isDone ? <Check className="w-5 h-5 sm:w-6 sm:h-6" /> : <Star className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" />}
                  </div>

                  <span className={`
                    text-base sm:text-lg md:text-xl flex-1 leading-tight
                    ${isCurrent ? 'text-secondary font-bold' : 'text-foreground'}
                  `}>
                    {milestone.text}
                  </span>

                  {isCurrent && (
                    <span className="text-xs sm:text-sm bg-secondary/20 text-secondary px-2 py-1 rounded-full whitespace-nowrap font-medium">
                      Nós estamos aqui!
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Map */}
          <div className="relative w-full h-full min-h-[250px] sm:min-h-[300px] bg-gradient-to-br from-card to-muted/30 rounded-3xl border border-border/50 shadow-inner">
            <svg className="absolute inset-0 w-full h-full p-6" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
              {/* Path: 1 -> 2 -> 3 -> 4 (curved down to center) */}
              <path
                d="M 20 25 L 50 25 L 80 25 C 90 25, 90 75, 50 75"
                fill="none"
                stroke="url(#progressGradient)"
                strokeWidth="2"
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
                    w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center
                    transition-all duration-200 shadow-lg
                    ${isHovered ? 'scale-125 ring-4 ring-primary/40' : ''}
                    ${isCurrent
                      ? 'bg-secondary text-secondary-foreground shadow-secondary/50'
                      : isDone
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'}
                  `}>
                    {isDone ? (
                      <Check className="w-6 h-6 sm:w-7 sm:h-7" />
                    ) : (
                      <Star className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Next Step Card */}
        <div className={`${isActive ? 'animate-fade-up delay-500' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-2xl p-4 sm:p-6 text-center">
            <p className="text-lg sm:text-xl md:text-2xl font-bold">
              <span className="text-foreground/60">Próximo:</span>{" "}
              <span className="text-gradient">Piloto com 50 mães em Salvador</span>
            </p>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

export default SlideTraction;
