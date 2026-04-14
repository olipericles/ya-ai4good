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
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold">
              Como funciona no <span className="text-[#25D366]">WhatsApp</span>
            </h2>
          </div>

          {/* Stats row with pulsing WhatsApp icon in center */}
          <div className={`flex justify-center items-center gap-6 md:gap-12 relative z-20 ${isActive ? 'animate-scale-in delay-100' : 'opacity-0'}`}>
            {/* Left stat - 98% */}
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform">
                  <span className="text-3xl md:text-6xl font-black text-[#25D366]">
                    <AnimatedNumber value={98} suffix="%" isActive={isActive} />
                  </span>
                  <p className="text-xs md:text-base text-foreground/60 text-center">acessam internet pelo<br />celular</p>
                </div>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="bg-card border border-border p-3 max-w-xs">
                <p className="text-sm text-foreground/80">
                  Fonte: <a href="https://cetic.br" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline font-medium">TIC Domicílios 2023</a>
                </p>
              </TooltipContent>
            </Tooltip>

            {/* Central pulsing WhatsApp icon */}
            <div className="relative flex items-center justify-center">
              {/* Outer glow ring */}
              <div className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#25D366]/20 animate-pulse" />
              <div className="absolute w-20 h-20 md:w-28 md:h-28 rounded-full bg-[#25D366]/30 animate-pulse" style={{ animationDelay: '0.2s' }} />
              {/* Main icon */}
              <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/40">
                <MessageCircle className="w-8 h-8 md:w-12 md:h-12 text-white" />
              </div>
            </div>

            {/* Right stat - 91% */}
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform">
                  <span className="text-3xl md:text-6xl font-black text-[#25D366]">
                    <AnimatedNumber value={91} suffix="%" isActive={isActive} duration={1800} />
                  </span>
                  <p className="text-xs md:text-base text-foreground/60 text-center">usam WhatsApp todos<br />os dias</p>
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
                  className={`relative bg-card border border-border rounded-3xl p-5 sm:p-8 w-full max-w-[340px] md:w-72 md:h-56 flex flex-col justify-center hover:border-primary/50 transition-all duration-300 ${isActive ? `animate-scale-in ${step.delay}` : 'opacity-0'}`}
                >
                  {/* Step number */}
                  <div className={`absolute -top-3 left-5 px-3 py-0.5 rounded-full bg-gradient-to-r ${step.color} text-white text-xs font-bold`}>
                    {step.number}
                  </div>

                  <div className="pt-1 space-y-3">
                    {/* Icons */}
                    <div className="flex items-center gap-3">
                      {step.icons.map((Icon, iconIndex) => (
                        <div
                          key={iconIndex}
                          className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center"
                        >
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                      ))}
                    </div>

                    {/* Text */}
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-2xl font-bold">{step.title}</h3>
                      <p className="text-sm sm:text-lg text-foreground/60">{step.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className={`hidden md:flex mx-4 ${isActive ? `animate-fade-in ${steps[index + 1].delay}` : 'opacity-0'}`}>
                    <ArrowRight className="w-6 h-6 text-primary/50" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom quote */}
          <div className={`text-center ${isActive ? 'animate-fade-up delay-500' : 'opacity-0'}`}>
            <p className="inline-block text-base sm:text-xl md:text-2xl text-foreground/70">
              A gente não pede pra mudarem de vida — <span className="text-[#25D366] font-bold">a gente entra na vida delas.</span>
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
