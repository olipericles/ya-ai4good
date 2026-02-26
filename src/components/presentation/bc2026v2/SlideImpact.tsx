import SlideContainerV2, { type SlideMode } from "./SlideContainerV2";
import { cn } from "@/lib/utils";

interface SlideImpactProps {
    isActive: boolean;
    mode?: SlideMode;
    slideNumber?: number;
    step?: number;
}

export const SLIDE_IMPACT_STEPS = 3;

const SlideImpact = ({ isActive, mode, slideNumber, step = 0 }: SlideImpactProps) => {
    const showAll = mode === "section";

    return (
        <SlideContainerV2 isActive={isActive} mode={mode} slideNumber={slideNumber}>
            <div className="flex flex-col items-center justify-center text-center space-y-10 max-w-4xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                    Impacto
                </h2>

                <div className="space-y-8 w-full">
                    {/* Step 1 */}
                    <div className={cn(
                        "transition-all duration-700 ease-out",
                        (showAll || step >= 1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}>
                        <div className="bg-card/50 border border-border rounded-2xl p-6 sm:p-8 backdrop-blur-sm flex items-center justify-center">
                            <p className="text-6xl sm:text-7xl md:text-8xl font-black text-primary">
                                11 MILHÕES
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className={cn(
                        "transition-all duration-700 ease-out delay-100",
                        (showAll || step >= 2) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}>
                        <div className="bg-card/50 border border-border rounded-2xl p-6 backdrop-blur-sm flex items-center justify-center">
                            <p className="text-3xl sm:text-4xl text-foreground font-semibold">
                                Mais pessoas que <span className="text-primary font-bold">PORTUGAL</span>
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className={cn(
                        "transition-all duration-700 ease-out delay-200",
                        (showAll || step >= 3) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}>
                        <div className="bg-primary/10 border-2 border-primary rounded-2xl p-6 backdrop-blur-sm flex flex-col items-center justify-center">
                            <p className="text-4xl sm:text-5xl border-b-2 border-primary/30 pb-2 text-primary font-extrabold">
                                90%
                            </p>
                            <p className="text-xl sm:text-2xl text-primary/80 font-medium uppercase tracking-wider mt-2">
                                Mulheres Negras
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </SlideContainerV2>
    );
};

export default SlideImpact;
