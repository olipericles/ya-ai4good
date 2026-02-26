import SlideContainerV2, { type SlideMode } from "./SlideContainerV2";
import { cn } from "@/lib/utils";
import { CreditCard, ShoppingBag, Pill, TrendingUp, Store, Receipt } from "lucide-react";

interface SlideProblemV2Props {
    isActive: boolean;
    mode?: SlideMode;
    slideNumber?: number;
    step?: number;
}

export const SLIDE_PROBLEM_V2_STEPS = 4;

const SlideProblemV2 = ({ isActive, mode, slideNumber, step = 0 }: SlideProblemV2Props) => {
    const showAll = mode === "section";

    const problems = [
        { icon: CreditCard, label: "Taxa surpresa" },
        { icon: ShoppingBag, label: "R$12 → R$200/mês" },
        { icon: Pill, label: "Remédio de madrugada" },
        { icon: TrendingUp, label: "Juros sem avisar" },
        { icon: Store, label: "Farmácia 24h" },
        { icon: Receipt, label: "Delivery acumulado" },
    ];

    return (
        <SlideContainerV2 isActive={isActive} mode={mode} slideNumber={slideNumber}>
            <div className="space-y-6 sm:space-y-10 text-center">
                {/* Main question */}
                <div className={cn(
                    "space-y-4 transition-all duration-700",
                    (!showAll && step >= 4) ? "opacity-30" : "opacity-100"
                )}>
                    <h2 className={cn(
                        "text-3xl sm:text-5xl md:text-7xl font-black",
                        (showAll || step >= 1) ? (isActive ? 'animate-fade-up' : 'opacity-0') : 'opacity-0'
                    )}>
                        Pra onde foi o <span className="text-gradient">dinheiro</span>?
                    </h2>
                    <p className={cn(
                        "text-lg sm:text-2xl md:text-3xl text-foreground/60",
                        (showAll || step >= 1) ? (isActive ? 'animate-fade-up delay-100' : 'opacity-0') : 'opacity-0'
                    )}>
                        O maior inimigo não é a conta grande
                    </p>
                </div>

                {/* Problem grid */}
                <div className={cn(
                    "transition-all duration-1000",
                    (!showAll && step >= 4) ? "opacity-20 scale-95 blur-[2px]" : "opacity-100 scale-100 blur-0"
                )}>
                    <div className={cn(
                        "inline-block bg-card border border-primary/30 rounded-2xl p-4 sm:p-8 md:p-10",
                        (showAll || step >= 2) ? "opacity-100" : "opacity-0"
                    )}>
                        <p className="text-xl sm:text-3xl md:text-5xl font-bold text-primary mb-4 sm:mb-8">
                            É o gasto invisível
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                            {problems.map((problem, index) => (
                                <div
                                    key={index}
                                    className={cn(
                                        "flex flex-col items-center gap-3 transition-all duration-500",
                                        (showAll || step >= 3) ? "opacity-100 scale-100" : "opacity-0 scale-90"
                                    )}
                                >
                                    <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-muted flex items-center justify-center">
                                        <problem.icon className="w-7 h-7 md:w-10 md:h-10 text-primary" />
                                    </div>
                                    <span className="text-sm md:text-base text-foreground/70 font-medium">
                                        {problem.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Quote/Revelation */}
                <div className={cn(
                    "max-w-3xl mx-auto transition-all duration-1000 ease-out",
                    (showAll || step >= 4) ? "opacity-100 scale-100" : "opacity-0 scale-90"
                )}>
                    <blockquote className="border-l-4 border-primary pl-6 py-2 text-left">
                        <p className="text-lg sm:text-xl md:text-2xl text-foreground/70 italic">
                            "Eu já vi minha prima chorar no fim do mês sem entender como o dinheiro acabou.
                        </p>
                        <p className="text-lg sm:text-xl md:text-3xl text-primary font-semibold mt-4">
                            Não é falta de esforço. É falta de ferramenta."
                        </p>
                    </blockquote>
                </div>
            </div>

            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-10 text-6xl text-primary/5 font-bold animate-float">R$</div>
                <div className="absolute bottom-1/4 right-10 text-8xl text-primary/5 font-bold animate-float delay-300">?</div>
            </div>
        </SlideContainerV2>
    );
};

export default SlideProblemV2;
