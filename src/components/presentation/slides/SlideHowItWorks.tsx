import SlideContainer from "../SlideContainer";
import { Mic, Camera, Keyboard, Settings, TrendingUp, ArrowRight, ArrowDown } from "lucide-react";

type TransitionType = "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";

interface SlideHowItWorksProps {
  isActive: boolean;
  transition?: TransitionType;
}

const SlideHowItWorks = ({ isActive, transition }: SlideHowItWorksProps) => {
  const steps = [
    {
      number: "01",
      title: "Registre",
      subtitle: "Fala, digita ou manda foto",
      icons: [Mic, Camera, Keyboard],
      color: "from-primary to-primary/70",
      delay: "delay-100",
    },
    {
      number: "02",
      title: "Processe",
      subtitle: "IA categoriza automaticamente",
      icons: [Settings],
      color: "from-secondary to-secondary/70",
      delay: "delay-300",
    },
    {
      number: "03",
      title: "Visualize",
      subtitle: "Você tem visibilidade total",
      icons: [TrendingUp],
      color: "from-accent to-accent/70",
      delay: "delay-500",
    },
  ];

  return (
    <SlideContainer isActive={isActive} transition={transition}>
      <div className="space-y-4 sm:space-y-8 md:space-y-12">
        {/* Title */}
        <h2 className={`text-xl sm:text-2xl md:text-5xl font-bold text-center ${isActive ? 'animate-fade-up' : 'opacity-0'}`}>
          Visibilidade em <span className="text-gradient">3 Passos</span> Simples
        </h2>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-0">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center">
              <div
                className={`relative bg-card border border-border rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 w-full max-w-[280px] sm:max-w-none sm:w-56 md:w-64 hover:border-primary/50 transition-all duration-300 ${isActive ? `animate-scale-in ${step.delay}` : 'opacity-0'}`}
              >
                {/* Step number */}
                <div className={`absolute -top-3 left-4 sm:left-6 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-gradient-to-r ${step.color} text-white text-xs sm:text-sm font-bold`}>
                  {step.number}
                </div>

                <div className="pt-1 sm:pt-2 space-y-2 sm:space-y-3">
                  {/* Icons */}
                  <div className="flex items-center gap-2">
                    {step.icons.map((Icon, iconIndex) => (
                      <div
                        key={iconIndex}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-muted flex items-center justify-center"
                      >
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      </div>
                    ))}
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-base sm:text-lg font-bold">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-foreground/60">{step.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <>
                  <div className={`hidden md:flex mx-3 ${isActive ? `animate-fade-in ${steps[index + 1].delay}` : 'opacity-0'}`}>
                    <ArrowRight className="w-6 h-6 text-primary/40" />
                  </div>
                  <div className={`flex md:hidden my-1 ${isActive ? `animate-fade-in ${steps[index + 1].delay}` : 'opacity-0'}`}>
                    <ArrowDown className="w-5 h-5 text-primary/40" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Bottom quote - hidden on very small screens */}
        <div className={`text-center hidden sm:block ${isActive ? 'animate-fade-up delay-700' : 'opacity-0'}`}>
          <p className="inline-block bg-muted/50 border border-border rounded-xl px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base md:text-lg">
            <span className="text-primary font-semibold">"</span>
            Não exigimos perfeição. Um registro imperfeito é melhor do que nenhum.
            <span className="text-primary font-semibold">"</span>
          </p>
        </div>
      </div>
    </SlideContainer>
  );
};

export default SlideHowItWorks;
