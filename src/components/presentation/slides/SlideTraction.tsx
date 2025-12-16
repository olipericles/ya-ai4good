import SlideContainer from "../SlideContainer";
import { Check, RefreshCw, Clock } from "lucide-react";

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
      text: "Protótipo funcional no WhatsApp",
      delay: "delay-100"
    },
    {
      status: "done",
      icon: Check,
      text: "Selecionados AI4Good 2026 (8 de 167)",
      highlight: true,
      delay: "delay-200"
    },
    {
      status: "progress",
      icon: RefreshCw,
      text: "Pesquisa com mães solo em campo",
      delay: "delay-300"
    },
    {
      status: "pending",
      icon: Clock,
      text: "Piloto com 50 usuárias em Salvador",
      delay: "delay-400"
    },
    {
      status: "pending",
      icon: Clock,
      text: "Parcerias com CRAS e ONGs",
      delay: "delay-500"
    },
  ];

  return (
    <SlideContainer isActive={isActive} transition={transition}>
      <div className="space-y-6 sm:space-y-12">
        {/* Title */}
        <h2 className={`text-2xl sm:text-3xl md:text-5xl font-bold text-center ${isActive ? 'animate-fade-up' : 'opacity-0'}`}>
          Tração e <span className="text-gradient">Próximos Passos</span>
        </h2>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-muted" />

          <div className="space-y-4 sm:space-y-6">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const statusColors = {
                done: "bg-primary text-primary-foreground",
                progress: "bg-secondary text-secondary-foreground animate-pulse",
                pending: "bg-muted text-muted-foreground",
              };

              return (
                <div
                  key={index}
                  className={`relative flex items-start gap-4 sm:gap-6 pl-12 sm:pl-16 md:pl-20 ${isActive ? `animate-slide-left ${milestone.delay}` : 'opacity-0'}`}
                  style={{ animationDelay: `${100 + index * 100}ms` }}
                >
                  {/* Icon circle */}
                  <div
                    className={`absolute left-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center ${statusColors[milestone.status as keyof typeof statusColors]}`}
                  >
                    <Icon className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 bg-card border rounded-xl p-5 md:p-6 ${milestone.highlight
                        ? "border-primary/50 bg-primary/5"
                        : "border-border"
                      }`}
                  >
                    <p className={`text-lg md:text-xl ${milestone.highlight ? "font-semibold text-primary" : "text-foreground/80"}`}>
                      {milestone.text}
                    </p>
                    {milestone.highlight && (
                      <span className="inline-block mt-2 px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">
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
