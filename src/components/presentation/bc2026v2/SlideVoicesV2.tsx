import SlideContainerV2, { type SlideMode } from "./SlideContainerV2";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

interface SlideVoicesV2Props {
    isActive: boolean;
    mode?: SlideMode;
    slideNumber?: number;
    step?: number;
}

export const SLIDE_VOICES_V2_STEPS = 2;

const SlideVoicesV2 = ({ isActive, mode, slideNumber, step = 0 }: SlideVoicesV2Props) => {
    const showAll = mode === "section";

    return (
        <SlideContainerV2 isActive={isActive} mode={mode} slideNumber={slideNumber}>
            <div className="flex flex-col items-center justify-center text-center h-full max-w-5xl mx-auto px-4">
                <div className="relative w-full">
                    <Quote className="w-16 h-16 sm:w-24 sm:h-24 text-primary/10 absolute -top-8 sm:-top-16 left-0 sm:-left-8 -z-10" />

                    {/* Citation 1 (Visible on Step 1) */}
                    <div className={cn(
                        "transition-all duration-1000 ease-in-out absolute inset-0 flex items-center justify-center",
                        (showAll || step === 1) ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 pointer-events-none -z-10"
                    )}>
                        <blockquote className="space-y-4">
                            <p className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground leading-tight tracking-tight">
                                "Eu achava que o problema era o salário.
                            </p>
                            <p className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight tracking-tight">
                                <span className="text-gradient">Era o delivery.</span>"
                            </p>
                        </blockquote>
                    </div>

                    {/* Citation 2 (Visible on Step 2+) */}
                    <div className={cn(
                        "transition-all duration-1000 ease-in-out absolute inset-0 flex items-center justify-center",
                        (showAll || step >= 2) ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 pointer-events-none -z-10"
                    )}>
                        <blockquote className="space-y-4">
                            <p className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground leading-tight tracking-tight">
                                "Pela primeira vez em 3 anos,
                            </p>
                            <p className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight tracking-tight">
                                <span className="text-gradient">sobrou R$50</span> no fim do mês."
                            </p>
                        </blockquote>
                    </div>
                </div>
            </div>

            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        </SlideContainerV2>
    );
};

export default SlideVoicesV2;
