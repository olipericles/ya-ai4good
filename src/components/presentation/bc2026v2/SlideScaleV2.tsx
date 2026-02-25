import SlideContainerV2, { type SlideMode } from "./SlideContainerV2";
import { cn } from "@/lib/utils";
import { ArrowRight, Check, Target } from "lucide-react";

interface SlideScaleV2Props {
    isActive: boolean;
    mode?: SlideMode;
    slideNumber?: number;
    step?: number;
}

export const SLIDE_SCALE_V2_STEPS = 2;

const SlideScaleV2 = ({ isActive, mode, slideNumber, step = 0 }: SlideScaleV2Props) => {
    const showAll = mode === "section";

    const done = [
        { label: "Mães no piloto", value: "18" },
        { label: "Custo", value: "Zero" },
        { label: "Transformadas", value: "2" },
    ];

    const future = [
        { label: "Meta", value: "1.000" },
        { label: "Investimento", value: "$3.000" },
        { label: "Projeção (~11%)", value: "~110" },
    ];

    return (
        <SlideContainerV2 isActive={isActive} mode={mode} slideNumber={slideNumber}>
            <div className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                    Escalar o Sucesso
                </h2>

                <div className="flex flex-col md:flex-row items-center gap-6 w-full">
                    {/* Column 1 — Done */}
                    <div className={cn(
                        "flex-1 transition-all duration-700 ease-out",
                        (showAll || step >= 1) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                    )}>
                        <div className="bg-card/50 border border-border rounded-2xl p-6 space-y-4">
                            <h3 className="text-lg font-semibold text-muted-foreground flex items-center justify-center gap-2">
                                <Check className="w-5 h-5 text-green-500" />
                                O que já fizemos
                            </h3>
                            {done.map((item, i) => (
                                <div key={i} className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                                    <span className="text-sm text-muted-foreground">{item.label}</span>
                                    <span className="text-xl font-bold text-foreground">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Arrow */}
                    <div className={cn(
                        "transition-all duration-500",
                        (showAll || step >= 2) ? "opacity-100" : "opacity-0"
                    )}>
                        <ArrowRight className="w-10 h-10 text-primary hidden md:block" />
                        <ArrowRight className="w-10 h-10 text-primary rotate-90 md:hidden" />
                    </div>

                    {/* Column 2 — Future */}
                    <div className={cn(
                        "flex-1 transition-all duration-700 ease-out delay-200",
                        (showAll || step >= 2) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                    )}>
                        <div className="bg-primary/5 border-2 border-primary/30 rounded-2xl p-6 space-y-4">
                            <h3 className="text-lg font-semibold text-primary flex items-center justify-center gap-2">
                                <Target className="w-5 h-5" />
                                Onde queremos chegar
                            </h3>
                            {future.map((item, i) => (
                                <div key={i} className="flex justify-between items-center p-3 bg-primary/5 rounded-lg">
                                    <span className="text-sm text-muted-foreground">{item.label}</span>
                                    <span className="text-xl font-bold text-primary">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </SlideContainerV2>
    );
};

export default SlideScaleV2;
