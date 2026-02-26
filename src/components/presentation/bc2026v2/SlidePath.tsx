import SlideContainerV2, { type SlideMode } from "./SlideContainerV2";
import { cn } from "@/lib/utils";
import { Building, Users, Landmark, Handshake } from "lucide-react";

interface SlidePathProps {
    isActive: boolean;
    mode?: SlideMode;
    slideNumber?: number;
    step?: number;
}

export const SLIDE_PATH_STEPS = 4;

const SlidePath = ({ isActive, mode, slideNumber, step = 0 }: SlidePathProps) => {
    const showAll = mode === "section";

    const paths = [
        { icon: Building, label: "CRAS", desc: "Centros de Referência de Assistência Social" },
        { icon: Users, label: "ONGs e associações", desc: "Comunidades que já atendem essa população" },
        { icon: Landmark, label: "Políticas públicas", desc: "Programas governamentais existentes" },
    ];

    return (
        <SlideContainerV2 isActive={isActive} mode={mode} slideNumber={slideNumber}>
            <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                    Como chegar a mil mães?
                </h2>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 w-full relative pt-4">
                    {/* Linha conectora de fundo (só em telas md+) */}
                    <div className="hidden sm:block absolute top-[50%] left-10 right-10 h-0.5 border-t-2 border-dashed border-primary/30 -z-10" />

                    {paths.map((path, i) => (
                        <div
                            key={i}
                            className={cn(
                                "flex flex-col items-center gap-4 p-6 w-full sm:w-1/3 transition-all duration-700 ease-out relative",
                                (showAll || step >= i + 1) ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
                            )}
                        >
                            <div className="w-20 h-20 rounded-full border-2 border-dashed border-primary flex items-center justify-center bg-background z-10">
                                <path.icon className="w-8 h-8 text-primary" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-lg font-bold text-foreground">{path.label}</h3>
                                <p className="text-sm text-muted-foreground">{path.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Closing thought */}
                <div className={cn(
                    "transition-all duration-1000 ease-out delay-300",
                    (showAll || step >= 4) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}>
                    <div className="flex items-center gap-3 bg-primary/10 border border-primary/30 rounded-2xl p-6 max-w-2xl mx-auto">
                        <Handshake className="w-8 h-8 text-primary flex-shrink-0" />
                        <p className="text-base sm:text-lg text-foreground text-left">
                            A gente só precisa do caminho até elas. E se alguém aqui puder nos ajudar, <span className="text-primary font-semibold">a gente vai adorar essa conversa.</span>
                        </p>
                    </div>
                </div>
            </div>
        </SlideContainerV2>
    );
};

export default SlidePath;
