import SlideContainerV2, { type SlideMode } from "./SlideContainerV2";
import { cn } from "@/lib/utils";
import { Users, UserCheck, Heart, Star } from "lucide-react";

interface SlideTestV2Props {
    isActive: boolean;
    mode?: SlideMode;
    slideNumber?: number;
    step?: number;
}

export const SLIDE_TEST_V2_STEPS = 0;

const SlideTestV2 = ({ isActive, mode, slideNumber }: SlideTestV2Props) => {
    const funnelStages = [
        { number: 18, label: "Mães contatadas", icon: Users, color: "text-muted-foreground", bg: "bg-muted/30", width: "w-full" },
        { number: 10, label: "Fizeram cadastro", icon: UserCheck, color: "text-foreground", bg: "bg-card/60", width: "w-[80%]" },
        { number: 5, label: "Engajaram de verdade", icon: Heart, color: "text-primary", bg: "bg-primary/10", width: "w-[55%]" },
        { number: 2, label: "Transformação real", icon: Star, color: "text-primary", bg: "bg-primary/20 border-primary/40", width: "w-[30%]" },
    ];

    return (
        <SlideContainerV2 isActive={isActive} mode={mode} slideNumber={slideNumber}>
            <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                    O Teste
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground">
                    Piloto em Salvador · Fevereiro 2026 · 2 semanas
                </p>

                {/* Funnel */}
                <div className="flex flex-col items-center gap-3 w-full mt-4">
                    {funnelStages.map((stage, i) => (
                        <div
                            key={i}
                            className={cn(
                                "flex items-center gap-4 p-4 sm:p-5 rounded-xl border border-border backdrop-blur-sm transition-all duration-500 mx-auto",
                                stage.bg, stage.width
                            )}
                        >
                            <stage.icon className={cn("w-6 h-6 flex-shrink-0", stage.color)} />
                            <span className={cn("text-2xl sm:text-3xl font-extrabold", stage.color)}>
                                {stage.number}
                            </span>
                            <span className="text-sm sm:text-base text-muted-foreground">{stage.label}</span>
                        </div>
                    ))}
                </div>

                {/* Mothers grid placeholder */}
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {/* TODO: substituir por fotos reais das mães participantes */}
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center">
                            <Heart className="w-5 h-5 text-primary/60" />
                        </div>
                    ))}
                </div>

                <p className="text-xs text-muted-foreground italic">
                    Meta simples: 1 mês com 1 registro = 1 vitória
                </p>
            </div>
        </SlideContainerV2>
    );
};

export default SlideTestV2;
