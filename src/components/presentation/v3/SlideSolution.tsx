import SlideContainer from "./SlideContainer";
import personaImage from "@/assets/persona-image.jpeg";
import whatsappMockup from "@/assets/whatsapp-mockup.png";
import yaLogo from "@/assets/ya-logo.png";

type TransitionType = "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";

interface SlideSolutionProps {
  isActive: boolean;
  transition?: TransitionType;
}

const SlideSolution = ({ isActive, transition }: SlideSolutionProps) => {
  return (
    <SlideContainer isActive={isActive} transition={transition}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 items-center">
        {/* Left - Phone mockup - hidden on very small screens */}
        <div className={`relative hidden sm:block ${isActive ? 'animate-slide-right' : 'opacity-0'}`}>
          <div className="relative mx-auto w-48 sm:w-72 md:w-80">
            <img
              src={whatsappMockup}
              alt="Conversa no WhatsApp com Yá"
              className="w-full h-auto rounded-[2rem] shadow-2xl"
            />
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-primary/20 rounded-[4rem] blur-2xl -z-10"></div>
          </div>
        </div>

        {/* Right - Description */}
        <div className={`space-y-3 sm:space-y-4 md:space-y-8 ${isActive ? 'animate-slide-left' : 'opacity-0'}`}>
          <div className="space-y-2 sm:space-y-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <img src={personaImage} alt="Persona Yá" className="h-10 sm:h-12 md:h-20 rounded-full object-cover aspect-square" />
              <img src={yaLogo} alt="Yá" className="h-10 sm:h-12 md:h-16" />
            </div>
            <p className="text-lg sm:text-xl md:text-3xl text-primary font-semibold">
              Sua parceira financeira no WhatsApp
            </p>
          </div>

          <div className={`space-y-2 sm:space-y-4 ${isActive ? 'animate-fade-up delay-400' : 'opacity-0'}`}>
            <div className="flex items-start gap-2 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <span className="text-base sm:text-xl">🎤</span>
              </div>
              <p className="text-sm sm:text-lg text-foreground/80">Manda áudio enquanto tá no ônibus</p>
            </div>
            <div className="flex items-start gap-2 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <span className="text-base sm:text-xl">📸</span>
              </div>
              <p className="text-sm sm:text-lg text-foreground/80">Foto do comprovante</p>
            </div>
            <div className="flex items-start gap-2 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <span className="text-base sm:text-xl">⌨️</span>
              </div>
              <p className="text-sm sm:text-lg text-foreground/80">Ou só digita rápido</p>
            </div>
          </div>

          <div className={`grid grid-cols-3 gap-2 sm:gap-4 pt-2 sm:pt-4 ${isActive ? 'animate-fade-up delay-600' : 'opacity-0'}`}>
            {["Sem app novo", "Sem cadastro", "Sem julgamento"].map((text, i) => (
              <div key={i} className="bg-muted/50 border border-border rounded-xl p-2 sm:p-3 text-center">
                <span className="text-xs sm:text-sm font-medium text-foreground/80">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

export default SlideSolution;
