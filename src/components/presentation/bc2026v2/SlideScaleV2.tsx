import SlideContainerV2, { type SlideMode } from "./SlideContainerV2";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import AnimatedNumber from "../AnimatedNumber";

interface SlideScaleV2Props {
    isActive: boolean;
    mode?: SlideMode;
    slideNumber?: number;
    step?: number;
}

export const SLIDE_SCALE_V2_STEPS = 2;

const SlideScaleV2 = ({ isActive, mode, slideNumber, step = 0 }: SlideScaleV2Props) => {
    const showAll = mode === "section";

    return (
        <SlideContainerV2 isActive={isActive} mode={mode} slideNumber={slideNumber}>
            <div className="space-y-6 sm:space-y-10 text-center">
                {/* Header */}
                <div className={`space-y-2 ${isActive ? 'animate-fade-up' : 'opacity-0'}`}>
                    <h2 className="text-3xl sm:text-5xl md:text-7xl font-black">
                        Escalar o <span className="text-gradient">Sucesso</span>
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-foreground/60">
                        Mudamos a vida de 2. Queremos mudar a vida de 1.000.
                    </p>
                </div>

                {/* Comparison columns */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12">
                    {/* Left column - What we did */}
                    <div className={cn(
                        "transition-all duration-700 ease-out",
                        (showAll || step >= 1) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                    )}>
                        <div className="bg-card border border-border/50 rounded-3xl p-5 sm:p-8 min-w-[260px] sm:min-w-[300px] hover:border-primary/50 transition-all duration-300">
                            <h3 className="text-lg sm:text-xl font-bold text-foreground/60 mb-6">O que já fizemos</h3>
                            <div className="space-y-4">
                                <div className="text-center">
                                    <p className="text-4xl sm:text-5xl font-black text-foreground">
                                        <AnimatedNumber value={18} suffix="" isActive={isActive} />
                                    </p>
                                    <p className="text-sm sm:text-base text-muted-foreground">mães</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-lg sm:text-xl font-semibold text-primary">Custo zero</p>
                                    <p className="text-sm text-muted-foreground">beta gratuito</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-4xl sm:text-5xl font-black text-primary">
                                        <AnimatedNumber value={2} suffix="" isActive={isActive} />
                                    </p>
                                    <p className="text-sm sm:text-base text-muted-foreground">transformadas (11%)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Arrow */}
                    <div className={cn(
                        "transition-all duration-500",
                        (showAll || step >= 2) ? "opacity-100" : "opacity-0"
                    )}>
                        <ArrowRight className="w-8 h-8 md:w-12 md:h-12 text-primary rotate-90 md:rotate-0" />
                    </div>

                    {/* Right column - Goals */}
                    <div className={cn(
                        "transition-all duration-700 ease-out delay-200",
                        (showAll || step >= 2) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                    )}>
                        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-3xl p-5 sm:p-8 min-w-[260px] sm:min-w-[300px] hover:border-primary/50 transition-all duration-300">
                            <h3 className="text-lg sm:text-xl font-bold text-primary mb-6">Onde queremos chegar</h3>
                            <div className="space-y-4">
                                <div className="text-center">
                                    <p className="text-4xl sm:text-5xl font-black text-foreground">1.000</p>
                                    <p className="text-sm sm:text-base text-muted-foreground">mães</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-lg sm:text-xl font-semibold text-primary">~R$ 5</p>
                                    <p className="text-sm text-muted-foreground">por mãe/mês</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-4xl sm:text-5xl font-black text-primary">~110</p>
                                    <p className="text-sm sm:text-base text-muted-foreground">transformadas (projeção)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SlideContainerV2>
    );
};

export default SlideScaleV2;
