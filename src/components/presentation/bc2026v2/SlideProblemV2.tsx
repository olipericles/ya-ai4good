import SlideContainerV2, { type SlideMode } from "./SlideContainerV2";
import { cn } from "@/lib/utils";
import { Receipt, ShoppingBag, Pill } from "lucide-react";

interface SlideProblemV2Props {
    isActive: boolean;
    mode?: SlideMode;
    slideNumber?: number;
    step?: number;
}

export const SLIDE_PROBLEM_V2_STEPS = 4;

const SlideProblemV2 = ({ isActive, mode, slideNumber, step = 0 }: SlideProblemV2Props) => {
    const showAll = mode === "section";

    const items = [
        { icon: Receipt, text: "Taxa surpresa", delay: "" },
        { icon: ShoppingBag, text: "R$12 → R$200/mês", delay: "delay-100" },
        { icon: Pill, text: "Remédio de madrugada", delay: "delay-200" },
    ];

    return (
        <SlideContainerV2 isActive={isActive} mode={mode} slideNumber={slideNumber}>
            <div className="flex flex-col items-center justify-center text-center space-y-8 max-w-4xl mx-auto">
                <h2 className={cn(
                    "text-2xl sm:text-3xl md:text-4xl font-bold text-foreground transition-opacity duration-1000",
                    (!showAll && step >= 4) ? "opacity-30" : "opacity-100"
                )}>
                    Pra onde foi o dinheiro?
                </h2>

                <div className={cn(
                    "grid grid-cols-1 sm:grid-cols-3 gap-4 w-full transition-all duration-1000",
                    (!showAll && step >= 4) ? "opacity-20 scale-95 blur-[2px]" : "opacity-100 scale-100 blur-0"
                )}>
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className={cn(
                                "flex flex-col items-center gap-3 p-6 bg-card/50 border border-border rounded-2xl backdrop-blur-sm transition-all duration-700 ease-out",
                                item.delay,
                                (showAll || step >= i + 1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            )}
                        >
                            <item.icon className="w-8 h-8 text-destructive/80" />
                            <p className="text-xl sm:text-2xl text-foreground font-semibold">{item.text}</p>
                        </div>
                    ))}
                </div>

                {/* Revelation */}
                <div className={cn(
                    "transition-all duration-1000 ease-out delay-300",
                    (showAll || step >= 4) ? "opacity-100 scale-100" : "opacity-0 scale-90"
                )}>
                    <div className="bg-primary/15 border-2 border-primary rounded-2xl p-6 sm:p-8">
                        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">
                            Não é falta de esforço. É falta de ferramenta.
                        </p>
                    </div>
                </div>
            </div>
        </SlideContainerV2>
    );
};

export default SlideProblemV2;
