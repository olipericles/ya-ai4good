import SlideContainer from "../SlideContainer";
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
      <div className="flex flex-col items-center justify-center h-full gap-12 sm:gap-16 md:gap-20">
        {/* Logo with glow */}
        <div className={`relative inline-block ${isActive ? 'animate-scale-in' : 'opacity-0'}`}>
          <img
            src={yaLogo}
            alt="Yá Logo"
            className="h-28 sm:h-40 md:h-56 object-contain mx-auto"
          />
          <div className="absolute inset-0 bg-primary/30 blur-[80px] -z-10 rounded-full" />
        </div>

        {/* Main message */}
        <div className={`text-center space-y-6 sm:space-y-8 ${isActive ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold">
            Yá: <span className="text-gradient">mãe</span>, em yorubá.
          </h2>
        </div>

        {/* Tagline */}
        <div className={`${isActive ? 'animate-fade-in delay-400' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-3 text-primary">
            <Heart className="w-6 h-6 sm:w-8 sm:h-8 animate-pulse" fill="currentColor" />
            <span className="text-lg sm:text-xl md:text-2xl font-medium">Uma IA que cuida de quem cuida de todo mundo</span>
            <Heart className="w-6 h-6 sm:w-8 sm:h-8 animate-pulse" fill="currentColor" />
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
