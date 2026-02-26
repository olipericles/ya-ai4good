import SlideContainerV2, { type SlideMode } from "./SlideContainerV2";
import { cn } from "@/lib/utils";
import { Building2, Users, FileText, Globe, Handshake } from "lucide-react";

interface SlidePathProps {
    isActive: boolean;
    mode?: SlideMode;
    slideNumber?: number;
    step?: number;
}

export const SLIDE_PATH_STEPS = 4;

const SlidePath = ({ isActive, mode, slideNumber, step = 0 }: SlidePathProps) => {
    const showAll = mode === "section";

    const pillars = [
        { icon: Building2, label: "Integração com CRAS", delay: "delay-200" },
        { icon: Users, label: "Parcerias com ONGs", delay: "delay-300" },
        { icon: FileText, label: "Políticas públicas", delay: "delay-400" },
        { icon: Globe, label: "Escala nacional", delay: "delay-500" },
    ];

    return (
        <SlideContainerV2 isActive={isActive} mode={mode} slideNumber={slideNumber}>
            <div className="space-y-6 sm:space-y-10 text-center">
                {/* Header */}
                <div className={cn(
                    "space-y-4 transition-all duration-700",
                    (showAll || step >= 1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}>
                    <h2 className="text-4xl sm:text-6xl md:text-8xl font-black">
                        <span className="text-gradient">1.000</span> mães
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-foreground/60">
                        em 6 meses
                    </p>
                </div>

                {/* Pillars */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
                    {pillars.map((pillar, index) => (
                        <div
                            key={index}
                            className={cn(
                                "bg-card border border-border/50 rounded-2xl p-4 sm:p-6 flex flex-col items-center gap-3 hover:border-primary/50 transition-all duration-300",
                                (showAll || step >= index + 1) ? "opacity-100 scale-100" : "opacity-0 scale-90"
                            )}
                        >
                            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/20 flex items-center justify-center">
                                <pillar.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                            </div>
                            <p className="text-sm sm:text-base text-foreground/80 font-medium">{pillar.label}</p>
                        </div>
                    ))}
                </div>

                {/* Quote */}
                <div className={cn(
                    "transition-all duration-1000 ease-out",
                    (showAll || step >= 4) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}>
                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-4 sm:p-6 md:p-8 max-w-3xl mx-auto">
                        <p className="text-lg sm:text-xl md:text-2xl text-foreground font-medium leading-relaxed">
                            "Assistente Social Digital: o WhatsApp já tá lá. A mãe já tá lá.
                            <span className="text-primary font-bold"> Só faltava a Yá.</span>"
                        </p>
                    </div>
                </div>
            </div>

            {/* Background elements */}
            <div className="hidden sm:block absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="hidden sm:block absolute bottom-20 left-20 w-48 h-48 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        </SlideContainerV2>
    );
};

export default SlidePath;
