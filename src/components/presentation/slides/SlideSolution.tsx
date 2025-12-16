import SlideContainer from "../SlideContainer";
import personaImage from "@/assets/persona-image.jpeg";
import whatsappMockup from "@/assets/whatsapp-mockup.png";

type TransitionType = "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";

interface SlideSolutionProps {
  isActive: boolean;
  transition?: TransitionType;
}

const SlideSolution = ({ isActive, transition }: SlideSolutionProps) => {
  return (
    <SlideContainer isActive={isActive} transition={transition}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 items-center">
        {/* Left - Phone mockup */}
        <div className={`relative ${isActive ? 'animate-slide-right' : 'opacity-0'}`}>
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
        <div className={`space-y-4 sm:space-y-8 ${isActive ? 'animate-slide-left' : 'opacity-0'}`}>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <img src={personaImage} alt="Persona Yá" className="h-12 sm:h-16 md:h-20 rounded-full object-cover aspect-square" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">Yá</h2>
            </div>
            <p className="text-xl sm:text-2xl md:text-3xl text-primary font-semibold">
              Sua parceira financeira no WhatsApp
            </p>
          </div>

          <div className={`space-y-4 ${isActive ? 'animate-fade-up delay-400' : 'opacity-0'}`}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                <span className="text-xl">🎤</span>
              </div>
              <p className="text-lg text-foreground/80">Manda áudio enquanto tá no ônibus</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                <span className="text-xl">📸</span>
              </div>
              <p className="text-lg text-foreground/80">Foto do comprovante</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                <span className="text-xl">⌨️</span>
              </div>
              <p className="text-lg text-foreground/80">Ou só digita rápido</p>
            </div>
          </div>

          <div className={`grid grid-cols-3 gap-4 pt-4 ${isActive ? 'animate-fade-up delay-600' : 'opacity-0'}`}>
            {["Sem app novo", "Sem cadastro", "Sem julgamento"].map((text, i) => (
              <div key={i} className="bg-muted/50 border border-border rounded-xl p-3 text-center">
                <span className="text-sm font-medium text-foreground/80">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

export default SlideSolution;
