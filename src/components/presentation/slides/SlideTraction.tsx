import SlideContainer from "../SlideContainer";
import { Check, RefreshCw, Clock, Star } from "lucide-react";

type TransitionType = "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";

interface SlideTractionProps {
  isActive: boolean;
  transition?: TransitionType;
}

const SlideTraction = ({ isActive, transition }: SlideTractionProps) => {
  const milestones = [
    {
      status: "done",
      icon: Check,
      text: "Propósito e ideia",
      delay: "delay-100"
    },
    {
      status: "done",
      icon: Check,
      text: "Selecionados AI4Good 2025 (8 de 167)",
      highlight: true,
      delay: "delay-150"
    },
    {
      status: "done",
      icon: Check,
      text: "Pesquisa com mães solo em campo",
      delay: "delay-200"
    },
    {
      status: "done",
      icon: Check,
      text: "Protótipo funcional no WhatsApp",
      delay: "delay-250"
    },
    {
      status: "progress",
      icon: Star,
      text: "DemoDay",
      highlight: true,
      current: true,
      delay: "delay-300"
    },
    {
      status: "pending",
      icon: Clock,
      text: "Piloto com 20 beta testers",
      delay: "delay-350"
    },
    {
      status: "pending",
      icon: Clock,
      text: "Parcerias e escala",
      delay: "delay-400"
    },
  ];

  return (
    <SlideContainer isActive={isActive} transition={transition}>
      <div className="space-y-6 sm:space-y-10">
        {/* Title */}
        <h2 className={`text-2xl sm:text-3xl md:text-5xl font-bold text-center ${isActive ? 'animate-fade-up' : 'opacity-0'}`}>
          Tração e <span className="text-gradient">Próximos Passos</span>
        </h2>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-muted" />

          <div className="space-y-3 sm:space-y-4">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const statusColors = {
                done: "bg-primary text-primary-foreground",
                progress: "bg-secondary text-secondary-foreground ring-4 ring-secondary/30",
                pending: "bg-muted text-muted-foreground",
              };

              return (
                <div
                  key={index}
                  className={`relative flex items-start gap-3 sm:gap-4 pl-10 sm:pl-14 md:pl-18 ${isActive ? `animate-slide-left ${milestone.delay}` : 'opacity-0'}`}
                  style={{ animationDelay: `${100 + index * 100}ms` }}
                >
                  {/* Icon circle */}
                  <div
                    className={`absolute left-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center ${statusColors[milestone.status as keyof typeof statusColors]}`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 bg-card border rounded-xl p-3 sm:p-4 ${milestone.current
                      ? "border-secondary bg-secondary/10 ring-2 ring-secondary/50"
                      : milestone.highlight
                        ? "border-primary/50 bg-primary/5"
                        : "border-border"
                      }`}
                  >
                    <p className={`text-sm sm:text-base md:text-lg ${milestone.current ? "font-bold text-secondary" : milestone.highlight ? "font-semibold text-primary" : "text-foreground/80"}`}>
                      {milestone.text}
                      {milestone.current && <span className="ml-2 text-xs sm:text-sm">← Estamos aqui!</span>}
                    </p>
                    {milestone.highlight && !milestone.current && (
                      <span className="inline-block mt-1 px-2 py-0.5 bg-primary/20 text-primary text-xs rounded-full">
                        🏆 Validação Externa
                      </span>
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
