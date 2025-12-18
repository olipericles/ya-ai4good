import SlideContainer from "./SlideContainer";
import AnimatedNumber from "../AnimatedNumber";
import { Mic, Camera, Keyboard, Settings, TrendingUp, ArrowRight, MessageCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
      subtitle: "Fala, digita ou foto",
      icons: [Mic, Camera, Keyboard],
      color: "from-primary to-primary/70",
      delay: "delay-100",
    },
    {
      number: "02",
      title: "Processe",
      subtitle: "IA categoriza",
      icons: [Settings],
      color: "from-secondary to-secondary/70",
      delay: "delay-200",
    },
    {
      number: "03",
      title: "Visualize",
      subtitle: "Controle total",
      icons: [TrendingUp],
      color: "from-accent to-accent/70",
      delay: "delay-300",
    },
  ];

  return (
    <SlideContainer isActive={isActive} transition={transition}>
      <TooltipProvider>
        <div className="flex flex-col h-full justify-center gap-6 md:gap-8">
          {/* Title with WhatsApp */}
          <div className={`text-center ${isActive ? 'animate-fade-up' : 'opacity-0'}`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Como funciona no <span className="text-[#25D366]">WhatsApp</span>
            </h2>
          </div>

          {/* Stats row */}
          <div className={`flex justify-center items-center gap-6 md:gap-12 relative z-20 ${isActive ? 'animate-scale-in delay-100' : 'opacity-0'}`}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#25D366] flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-2xl md:text-3xl font-black text-[#25D366]">
                      <AnimatedNumber value={98} suffix="%" isActive={isActive} />
                    </span>
                    <p className="text-xs text-foreground/60">acessam pelo celular</p>
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="bg-card border border-border p-3 max-w-xs">
                <p className="text-sm text-foreground/80">
                  Fonte: <a href="https://cetic.br" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline font-medium">TIC Domicílios 2023</a>
                </p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
                  <span className="text-2xl md:text-3xl font-black text-[#25D366]">
                    <AnimatedNumber value={91} suffix="%" isActive={isActive} duration={1800} />
                  </span>
                  <p className="text-xs text-foreground/60 max-w-20">usam WhatsApp todo dia</p>
                </div>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="bg-card border border-border p-3 max-w-xs">
                <p className="text-sm text-foreground/80">
                  Fonte: <a href="https://mobiletime.com.br" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline font-medium">Mobile Time/Opinion Box 2024</a>
                </p>
              </TooltipContent>
            </Tooltip>
          </div>

          {/* Steps */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-3">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center">
                <div
                  className={`relative bg-card border border-border rounded-2xl p-4 sm:p-5 w-full max-w-[280px] md:w-56 hover:border-primary/50 transition-all duration-300 ${isActive ? `animate-scale-in ${step.delay}` : 'opacity-0'}`}
                >
                  {/* Step number */}
                  <div className={`absolute -top-3 left-5 px-3 py-0.5 rounded-full bg-gradient-to-r ${step.color} text-white text-xs font-bold`}>
                    {step.number}
                  </div>

                  <div className="pt-1 space-y-3">
                    {/* Icons */}
                    <div className="flex items-center gap-2">
                      {step.icons.map((Icon, iconIndex) => (
                        <div
                          key={iconIndex}
                          className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center"
                        >
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                      ))}
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold">{step.title}</h3>
                      <p className="text-xs sm:text-sm text-foreground/60">{step.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className={`hidden md:flex mx-3 ${isActive ? `animate-fade-in ${steps[index + 1].delay}` : 'opacity-0'}`}>
                    <ArrowRight className="w-5 h-5 text-primary/50" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom quote */}
          <div className={`text-center ${isActive ? 'animate-fade-up delay-500' : 'opacity-0'}`}>
            <p className="inline-block text-sm sm:text-base md:text-lg text-foreground/60">
              A gente não pede pra mudarem de vida — <span className="text-[#25D366] font-semibold">a gente entra na vida delas.</span>
            </p>
          </div>
        </div>
      </TooltipProvider>

      {/* Background decorations */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-[#25D366]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-[#25D366]/5 rounded-full blur-3xl pointer-events-none" />
    </SlideContainer>
  );
};

export default SlideHowItWorks;
