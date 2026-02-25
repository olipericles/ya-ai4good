import SlideContainer from "./SlideContainer";
import AnimatedNumber from "./AnimatedNumber";
import yaLogo from "@/assets/ya_logo_branco.svg";

type TransitionType = "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";

interface SlideOpeningProps {
  isActive: boolean;
  transition?: TransitionType;
}

const SlideOpening = ({ isActive, transition }: SlideOpeningProps) => {
  return (
    <SlideContainer isActive={isActive} transition={transition}>
      <div className="text-center space-y-4 sm:space-y-8">
        {/* Logo */}
        <div className={`flex justify-center mb-4 sm:mb-8 ${isActive ? 'animate-fade-up' : 'opacity-0'}`}>
          <img
            src={yaLogo}
            alt="Yá Logo"
            className="h-12 sm:h-16 md:h-20 object-contain"
          />
        </div>

        {/* Main number */}
        <div className={`${isActive ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black text-gradient tracking-tight">
            <AnimatedNumber value={11} isActive={isActive} /> milhões
          </h1>
        </div>

        {/* Subtitle */}
        <p className={`text-base sm:text-xl md:text-3xl text-foreground/80 max-w-3xl mx-auto leading-relaxed ${isActive ? 'animate-fade-up delay-400' : 'opacity-0'}`}>
          de lares chefiados por <span className="text-primary font-semibold">mães solo</span> no Brasil.
          <br />
          <span className="text-muted-foreground text-sm sm:text-lg md:text-xl">
            Mais do que a população inteira de Portugal.
          </span>
        </p>
      </div>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
    </SlideContainer>
  );
};

export default SlideOpening;
