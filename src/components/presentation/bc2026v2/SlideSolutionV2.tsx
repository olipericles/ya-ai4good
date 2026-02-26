import SlideContainerV2, { type SlideMode } from "./SlideContainerV2";
import { cn } from "@/lib/utils";
import yaWhatsappMockup from "@/assets/ya-whatsapp-mockup.jpg";
import personaImage from "@/assets/persona-image-768x768.jpg";
import yaLogo from "@/assets/ya_logo_branco.svg";

interface SlideSolutionV2Props {
    isActive: boolean;
    mode?: SlideMode;
    slideNumber?: number;
    step?: number;
}

export const SLIDE_SOLUTION_V2_STEPS = 1;

const SlideSolutionV2 = ({ isActive, mode, slideNumber, step = 0 }: SlideSolutionV2Props) => {
    const showAll = mode === "section";

    return (
        <SlideContainerV2 isActive={isActive} mode={mode} slideNumber={slideNumber}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 items-center max-w-5xl mx-auto">
                {/* Left — Phone mockup */}
                <div className={`relative hidden sm:block ${isActive ? 'animate-slide-right' : 'opacity-0'}`}>
                    <div className="relative mx-auto w-52 sm:w-72 md:w-[380px]">
                        <div className="rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border border-border/30">
                            <img
                                src={yaWhatsappMockup}
                                alt="Conversa no WhatsApp com Yá"
                                className="w-full h-auto scale-[1.02]"
                            />
                        </div>
                        <div className="absolute inset-0 bg-primary/20 rounded-[4rem] blur-3xl -z-10" />
                    </div>
                </div>

                {/* Right — Description */}
                <div className={cn(
                    "space-y-4 md:space-y-8 transition-all duration-1000 ease-out",
                    (showAll || step >= 1) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                )}>
                    <div className="space-y-2 sm:space-y-4">
                        <div className="flex items-center gap-3 sm:gap-4">
                            <img src={personaImage} alt="Persona Yá" className="h-10 sm:h-14 md:h-20 rounded-full object-cover aspect-square" />
                            <img src={yaLogo} alt="Yá" className="h-10 sm:h-14 md:h-16" />
                        </div>
                        <p className="text-lg sm:text-2xl md:text-4xl text-primary font-bold leading-tight">
                            Assistente financeira no WhatsApp
                        </p>
                    </div>

                    <div className="space-y-2 sm:space-y-4">
                        <div className="flex items-start gap-3 sm:gap-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                <span className="text-xl sm:text-2xl">🎤</span>
                            </div>
                            <p className="text-base sm:text-xl text-foreground/80 font-medium">Manda áudio enquanto tá no ônibus</p>
                        </div>
                        <div className="flex items-start gap-3 sm:gap-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                <span className="text-xl sm:text-2xl">📸</span>
                            </div>
                            <p className="text-base sm:text-xl text-foreground/80 font-medium">Foto do comprovante</p>
                        </div>
                        <div className="flex items-start gap-3 sm:gap-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                <span className="text-xl sm:text-2xl">⌨️</span>
                            </div>
                            <p className="text-base sm:text-xl text-foreground/80 font-medium">Ou só digita rápido</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-2 sm:pt-4">
                        {["Sem app novo", "Sem cadastro", "Sem julgamento"].map((text, i) => (
                            <div key={i} className="bg-muted/50 border border-border rounded-xl p-2 sm:p-3 text-center">
                                <span className="text-sm sm:text-lg font-bold text-foreground/80">{text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SlideContainerV2>
    );
};

export default SlideSolutionV2;
