import SlideContainer from "./SlideContainer";
import { Mic, Camera, Keyboard, Settings, TrendingUp, ArrowRight } from "lucide-react";

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
      <div className="flex flex-col h-full justify-center gap-8 md:gap-12">
        {/* Title */}
        <h2 className={`text-2xl sm:text-3xl md:text-5xl font-bold text-center ${isActive ? 'animate-fade-up' : 'opacity-0'}`}>
          Visibilidade em <span className="text-gradient">3 Passos</span> Simples
        </h2>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center">
              <div
                className={`relative bg-card border border-border rounded-2xl p-5 sm:p-6 md:p-8 w-full max-w-[320px] md:w-72 hover:border-primary/50 transition-all duration-300 ${isActive ? `animate-scale-in ${step.delay}` : 'opacity-0'}`}
              >
                {/* Step number */}
                <div className={`absolute -top-4 left-6 px-4 py-1 rounded-full bg-gradient-to-r ${step.color} text-white text-sm font-bold`}>
                  {step.number}
                </div>

                <div className="pt-2 space-y-4">
                  {/* Icons */}
                  <div className="flex items-center gap-3">
                    {step.icons.map((Icon, iconIndex) => (
                      <div
                        key={iconIndex}
                        className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center"
                      >
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    ))}
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold">{step.title}</h3>
                    <p className="text-sm sm:text-base text-foreground/60">{step.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className={`hidden md:flex mx-6 ${isActive ? `animate-fade-in ${steps[index + 1].delay}` : 'opacity-0'}`}>
                  <ArrowRight className="w-8 h-8 text-primary/50" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div className={`text-center ${isActive ? 'animate-fade-up delay-700' : 'opacity-0'}`}>
          <p className="inline-block bg-muted/50 border border-border rounded-2xl px-6 py-4 text-base sm:text-lg md:text-xl">
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
