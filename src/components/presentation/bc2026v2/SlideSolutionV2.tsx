import SlideContainerV2, { type SlideMode } from "./SlideContainerV2";
import { cn } from "@/lib/utils";
import { Mic, Ban, Smartphone } from "lucide-react";
import yaWhatsappMockup from "@/assets/ya-whatsapp-mockup.jpg";

interface SlideSolutionV2Props {
    isActive: boolean;
    mode?: SlideMode;
    slideNumber?: number;
    step?: number;
}

export const SLIDE_SOLUTION_V2_STEPS = 3;

const SlideSolutionV2 = ({ isActive, mode, slideNumber, step = 0 }: SlideSolutionV2Props) => {
    const showAll = mode === "section";

    const points = [
        { icon: Mic, text: "Áudio, texto ou foto de comprovante" },
        { icon: Ban, text: "Sem app. Sem formulário. Sem fricção." },
        { icon: Smartphone, text: "91% usam WhatsApp todo dia" },
    ];

    return (
        <SlideContainerV2 isActive={isActive} mode={mode} slideNumber={slideNumber}>
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-5xl mx-auto">
                {/* Left — Mockup */}
                <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
                    <div className="relative max-w-[280px] sm:max-w-[320px]">
                        <img
                            src={yaWhatsappMockup}
                            alt="Conversa com a Yá no WhatsApp — áudio, texto e foto de cupom"
                            className="rounded-2xl shadow-2xl border border-border"
                        />
                        {/* TODO: substituir por GIF/vídeo ou carrossel de prints reais */}
                    </div>
                </div>

                {/* Right — Key points */}
                <div className="flex-1 space-y-6 text-left">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                        A Solução
                    </h2>

                    {points.map((point, i) => (
                        <div
                            key={i}
                            className={cn(
                                "flex items-start gap-4 p-4 bg-card/50 border border-border rounded-xl backdrop-blur-sm transition-all duration-700 ease-out",
                                (showAll || step >= i + 1) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                            )}
                        >
                            <point.icon className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-base sm:text-lg text-foreground font-medium">{point.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </SlideContainerV2>
    );
};

export default SlideSolutionV2;
