import SlideContainer from "./SlideContainer";
import yaLogo from "@/assets/ya-logo.png";
import { Heart } from "lucide-react";

type TransitionType = "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";

interface SlideClosingProps {
  isActive: boolean;
  transition?: TransitionType;
}

const SlideClosing = ({ isActive, transition }: SlideClosingProps) => {
  return (
    <SlideContainer isActive={isActive} transition={transition}>
      <div className="flex flex-col items-center justify-center h-full gap-8 sm:gap-12 md:gap-16">

        {/* Impact numbers - above logo */}
        <div className={`text-center ${isActive ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="text-lg sm:text-2xl md:text-3xl text-foreground/60 lowercase tracking-wide">
            Cuidando de quem <span className="text-primary font-bold">cuida</span>.
          </p>
        </div>

        {/* Logo with glow */}
        <div className={`relative inline-block ${isActive ? 'animate-scale-in delay-200' : 'opacity-0'}`}>
          <img
            src={yaLogo}
            alt="Yá Logo"
            className="h-12 sm:h-16 md:h-20 object-contain"
          />
          <div className="absolute inset-0 bg-primary/30 blur-[80px] -z-10 rounded-full" />
        </div>

        {/* Main message */}
        <div className={`text-center space-y-4 sm:space-y-6 ${isActive ? 'animate-fade-up delay-300' : 'opacity-0'}`}>
          <p className="text-base sm:text-lg md:text-xl text-foreground/50">
            Apresentação por <span className="text-primary font-semibold">Cofilia</span>
            <br />
            Dezembro 2024
          </p>
        </div>

        {/* Tagline */}
        <div className={`${isActive ? 'animate-fade-in delay-500' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-4 text-primary">
            <Heart className="w-6 h-6 sm:w-10 sm:h-10 animate-pulse" fill="currentColor" />
            <span className="text-lg sm:text-2xl md:text-3xl font-bold italic">Uma IA que cuida de quem cuida de todo mundo</span>
            <Heart className="w-6 h-6 sm:w-10 sm:h-10 animate-pulse" fill="currentColor" />
          </div>
        </div>

        {/* Presenter Credit */}
        <div className={`${isActive ? 'animate-fade-up delay-700' : 'opacity-0'}`}>
          <div className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-6 sm:p-10 border border-primary/20 mt-8 text-center shadow-xl backdrop-blur-sm">
            <p className="text-3xl sm:text-5xl font-black text-gradient mb-2">
              Obrigada!
            </p>
            <p className="text-foreground/70 text-lg sm:text-2xl font-medium">
              Adriele Ornellas — Apresentadora
            </p>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-20 right-20 w-3 h-3 bg-secondary rounded-full animate-pulse delay-200" />
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-accent rounded-full animate-pulse delay-400" />
        <div className="absolute bottom-40 right-1/4 w-4 h-4 bg-primary/50 rounded-full animate-pulse delay-300" />
      </div>
    </SlideContainer>
  );
};

export default SlideClosing;
