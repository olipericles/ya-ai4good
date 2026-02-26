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

export const SLIDE_SOLUTION_V2_STEPS = 1;

const SlideSolutionV2 = ({ isActive, mode, slideNumber, step = 0 }: SlideSolutionV2Props) => {
    const showAll = mode === "section";

    return (
        <SlideContainerV2 isActive={isActive} mode={mode} slideNumber={slideNumber}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
                {/* Left — Mockup */}
                <div className="relative max-w-[280px] sm:max-w-[320px] flex-shrink-0">
                    <img
                        src={yaWhatsappMockup}
                        alt="Conversa com a Yá no WhatsApp"
                        className="rounded-2xl shadow-2xl border border-border"
                    />
                    {/* TODO: substituir por GIF/vídeo ou carrossel de prints reais */}
                </div>

                {/* Right — Anchor Point */}
                <div className={cn(
                    "flex-1 text-left transition-all duration-1000 ease-out",
                    (showAll || step >= 1) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                )}>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-6">
                        A Solução
                    </h2>
                    <p className="text-3xl sm:text-4xl font-semibold text-primary/80 leading-tight">
                        Sem app.<br />
                        Sem fricção.<br />
                        Só WhatsApp.
                    </p>
                </div>
            </div>
        </SlideContainerV2>
    );
};

export default SlideSolutionV2;
