import SlideContainer from "../SlideContainer";
import AnimatedNumber from "../AnimatedNumber";
import { MessageCircle } from "lucide-react";

type TransitionType = "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";

interface SlideWhyWhatsAppProps {
  isActive: boolean;
  transition?: TransitionType;
}

const SlideWhyWhatsApp = ({ isActive, transition }: SlideWhyWhatsAppProps) => {
  return (
    <SlideContainer isActive={isActive} transition={transition}>
      <div className="text-center space-y-12">
        {/* Title */}
        <h2 className={`text-3xl md:text-5xl font-bold ${isActive ? 'animate-fade-up' : 'opacity-0'}`}>
          Por que <span className="text-[#25D366]">WhatsApp</span>?
        </h2>

        {/* Stats */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* First stat */}
          <div className={`relative ${isActive ? 'animate-scale-in delay-200' : 'opacity-0'}`}>
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12 hover:border-[#25D366]/50 transition-colors">
              <div className="text-6xl md:text-8xl font-black text-[#25D366]">
                <AnimatedNumber value={98} suffix="%" isActive={isActive} />
              </div>
              <p className="text-foreground/70 text-lg md:text-xl mt-4 max-w-56">
                acessam internet pelo celular
              </p>
            </div>
          </div>

          {/* WhatsApp icon */}
          <div className={`${isActive ? 'animate-scale-in delay-300' : 'opacity-0'}`}>
            <div className="relative">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#25D366] flex items-center justify-center glow-coral">
                <MessageCircle className="w-12 h-12 md:w-16 md:h-16 text-white" />
              </div>
              <div className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping"></div>
            </div>
          </div>

          {/* Second stat */}
          <div className={`relative ${isActive ? 'animate-scale-in delay-400' : 'opacity-0'}`}>
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12 hover:border-[#25D366]/50 transition-colors">
              <div className="text-6xl md:text-8xl font-black text-[#25D366]">
                <AnimatedNumber value={91} suffix="%" isActive={isActive} duration={1800} />
              </div>
              <p className="text-foreground/70 text-lg md:text-xl mt-4 max-w-56">
                usam WhatsApp todos os dias
              </p>
            </div>
          </div>
        </div>

        {/* Quote */}
        <p className={`text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto ${isActive ? 'animate-fade-up delay-600' : 'opacity-0'}`}>
          A gente não pede pra mudarem de vida — 
          <span className="text-[#25D366] font-semibold"> a gente entra na vida delas.</span>
        </p>
      </div>

      {/* Background decorations */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-[#25D366]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-[#25D366]/5 rounded-full blur-3xl pointer-events-none" />
    </SlideContainer>
  );
};

export default SlideWhyWhatsApp;
