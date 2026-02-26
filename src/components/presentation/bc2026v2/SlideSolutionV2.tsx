import SlideContainerV2, { type SlideMode } from "./SlideContainerV2";
import { cn } from "@/lib/utils";
import yaWhatsappMockup from "@/assets/images/ya-whatsapp-mockup.jpg";

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
                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/30 relative z-10">
                        <img
                            src={yaWhatsappMockup}
                            alt="Conversa com a Yá no WhatsApp"
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl -z-10" />
                </div>

                {/* Right — Anchor Point */}
                <div className={cn(
                    "flex-1 text-left transition-all duration-1000 ease-out",
                    (showAll || step >= 1) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                )}>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-6">
                        A <span className="text-gradient">Solução</span>
                    </h2>
                    <p className="text-3xl sm:text-4xl font-semibold text-foreground/70 leading-tight">
                        Sem app.<br />
                        Sem fricção.<br />
                        <span className="text-primary font-bold">Só WhatsApp.</span>
                    </p>
                </div>
            </div>
        </SlideContainerV2>
    );
};

export default SlideSolutionV2;
