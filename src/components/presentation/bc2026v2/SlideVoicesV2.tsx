import SlideContainerV2, { type SlideMode } from "./SlideContainerV2";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

interface SlideVoicesV2Props {
    isActive: boolean;
    mode?: SlideMode;
    slideNumber?: number;
    step?: number;
}

export const SLIDE_VOICES_V2_STEPS = 3;

const SlideVoicesV2 = ({ isActive, mode, slideNumber, step = 0 }: SlideVoicesV2Props) => {
    const showAll = mode === "section";

    return (
        <SlideContainerV2 isActive={isActive} mode={mode} slideNumber={slideNumber}>
            <div className="flex flex-col items-center justify-center text-center space-y-10 max-w-3xl mx-auto">
                <h2 className="text-xl sm:text-2xl text-muted-foreground font-light tracking-wide uppercase">
                    As Vozes
                </h2>

                {/* Citation 1 */}
                <div className={cn(
                    "transition-all duration-1000 ease-out",
                    (showAll || step >= 1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}>
                    <div className="relative">
                        <Quote className="w-8 h-8 text-primary/30 absolute -top-4 -left-4" />
                        <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-snug">
                            "Eu achava que o problema era o salário. <span className="text-primary">Era o delivery.</span>"
                        </blockquote>
                    </div>
                </div>

                {/* Context */}
                <div className={cn(
                    "transition-all duration-700 ease-out delay-200",
                    (showAll || step >= 2) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                )}>
                    <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
                        Ela descobriu que gastava mais de <span className="text-foreground font-semibold">R$300/mês</span> em delivery que não percebia. Redirecionou pra compras no mercado.
                    </p>
                </div>

                {/* Citation 2 */}
                <div className={cn(
                    "transition-all duration-1000 ease-out delay-300",
                    (showAll || step >= 3) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}>
                    <div className="relative mt-4">
                        <Quote className="w-8 h-8 text-primary/30 absolute -top-4 -left-4" />
                        <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-snug">
                            "Pela primeira vez em 3 anos, <span className="text-primary">sobrou R$50</span> no fim do mês."
                        </blockquote>
                        <p className="text-base sm:text-lg text-muted-foreground mt-4">
                            50 reais. Pra quem nunca sobrou nada, é o começo de uma reserva. <span className="text-foreground font-semibold">É dignidade.</span>
                        </p>
                    </div>
                </div>
            </div>
        </SlideContainerV2>
    );
};

export default SlideVoicesV2;
