import SlideContainerV2, { type SlideMode } from "./SlideContainerV2";
import { cn } from "@/lib/utils";
import AnimatedNumber from "../AnimatedNumber";
import HoverInfo from "@/components/ui/HoverInfo";

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
            <div className="flex flex-col items-center justify-center text-center space-y-8 max-w-4xl mx-auto">
                {/* Main number */}
                <div className={cn(
                    "space-y-4 transition-all duration-700 ease-out",
                    (showAll || step >= 1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}>
                    <h1 className="text-5xl sm:text-7xl md:text-9xl font-black">
                        <span className="text-gradient">
                            <AnimatedNumber value={11} suffix="" isActive={isActive} duration={2000} />
                        </span>
                        <span className="text-foreground"> milhões</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-foreground/60 max-w-2xl mx-auto">
                        de lares chefiados por mães solo no Brasil
                    </p>
                </div>

                {/* Portugal comparison */}
                <div className={cn(
                    "transition-all duration-700 ease-out delay-100",
                    (showAll || step >= 2) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}>
                    <div className="bg-card border border-border/50 rounded-2xl p-6 sm:p-8 hover:border-primary/50 transition-all duration-300">
                        <p className="text-2xl sm:text-3xl md:text-4xl text-foreground font-semibold">
                            Mais pessoas que <span className="text-gradient font-bold">PORTUGAL</span>
                        </p>
                    </div>
                </div>

                {/* 90% stat */}
                <div className={cn(
                    "transition-all duration-700 ease-out delay-200",
                    (showAll || step >= 3) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}>
                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl p-6 sm:p-8 max-w-xl mx-auto">
                        <p className="text-base sm:text-xl md:text-2xl leading-snug">
                            <HoverInfo tooltip="Crescimento 2012-2022 — Fonte: FGV/IBRE com base na PNAD Contínua">
                                <span className="text-primary font-bold text-3xl sm:text-4xl">90%</span>
                            </HoverInfo>{" "}
                            do crescimento na última década:
                            <br />
                            <span className="text-secondary font-semibold">mulheres negras e pardas</span>
                        </p>
                    </div>
                </div>

                {/* Source */}
                <p className="text-xs sm:text-sm text-muted-foreground/50">
                    Fonte: FGV/IBRE 2022
                </p>
            </div>

            {/* Background elements */}
            <div className="hidden sm:block absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="hidden sm:block absolute bottom-20 left-20 w-48 h-48 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        </SlideContainerV2>
    );
};

export default SlideImpact;
