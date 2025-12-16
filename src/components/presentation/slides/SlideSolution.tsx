import SlideContainer from "../SlideContainer";
import yaLogo from "@/assets/ya-logo.png";

type TransitionType = "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";

interface SlideSolutionProps {
  isActive: boolean;
  transition?: TransitionType;
}

const SlideSolution = ({ isActive, transition }: SlideSolutionProps) => {
  return (
    <SlideContainer isActive={isActive} transition={transition}>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Phone mockup */}
        <div className={`relative ${isActive ? 'animate-slide-right' : 'opacity-0'}`}>
          <div className="relative mx-auto w-72 md:w-80">
            {/* Phone frame */}
            <div className="bg-card border-4 border-muted rounded-[3rem] p-3 shadow-2xl">
              {/* Status bar */}
              <div className="bg-muted rounded-t-[2.5rem] p-4 pb-2">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>9:41</span>
                  <span>●●●●</span>
                </div>
              </div>
              
              {/* Chat header */}
              <div className="bg-[hsl(142,70%,35%)] p-4 flex items-center gap-3">
                <img src={yaLogo} alt="Yá" className="w-10 h-10 rounded-full bg-card p-1" />
                <span className="text-white font-semibold">Yá</span>
              </div>

              {/* Chat messages */}
              <div className="bg-[hsl(30,20%,12%)] min-h-80 p-4 space-y-4">
                {/* User message */}
                <div className={`flex justify-end ${isActive ? 'animate-fade-up delay-300' : 'opacity-0'}`}>
                  <div className="bg-[hsl(142,70%,35%)] text-white rounded-2xl rounded-tr-sm px-4 py-2 max-w-52">
                    <p className="text-sm">🎤 gastei 50 no mercado</p>
                  </div>
                </div>

                {/* Yá response */}
                <div className={`flex justify-start ${isActive ? 'animate-fade-up delay-500' : 'opacity-0'}`}>
                  <div className="bg-card text-foreground rounded-2xl rounded-tl-sm px-4 py-3 max-w-56 space-y-2">
                    <p className="text-sm font-medium">Anotado! 🛒</p>
                    <p className="text-sm">Mercado: R$50</p>
                    <p className="text-xs text-muted-foreground">Esse mês você já gastou R$280 em mercado.</p>
                  </div>
                </div>
              </div>

              {/* Bottom notch */}
              <div className="bg-muted rounded-b-[2.5rem] p-4 pt-2">
                <div className="w-32 h-1 bg-foreground/20 rounded-full mx-auto"></div>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-4 bg-primary/20 rounded-[4rem] blur-2xl -z-10"></div>
          </div>
        </div>

        {/* Right - Description */}
        <div className={`space-y-8 ${isActive ? 'animate-slide-left' : 'opacity-0'}`}>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <img src={yaLogo} alt="Yá" className="h-12 md:h-16" />
              <h2 className="text-4xl md:text-5xl font-black">Yá</h2>
            </div>
            <p className="text-2xl md:text-3xl text-primary font-semibold">
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
