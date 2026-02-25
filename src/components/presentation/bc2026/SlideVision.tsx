import SlideContainer from "./SlideContainer";

import { Building2, Users, FileText, Globe } from "lucide-react";

interface SlideVisionProps {
    isActive: boolean;
    transition?: "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";
}

const SlideVision = ({ isActive, transition = "zoom-rotate" }: SlideVisionProps) => {
    const pillars = [
        { icon: Building2, label: "Integração com CRAS", emoji: "🏛️" },
        { icon: Users, label: "Parcerias com ONGs", emoji: "🤝" },
        { icon: FileText, label: "Políticas públicas", emoji: "📋" },
        { icon: Globe, label: "Escala nacional", emoji: "🌎" },
    ];

    return (
        <SlideContainer isActive={isActive} transition={transition}>
            <div className="text-center space-y-10">
                {/* Header */}
                <div className="space-y-4">
                    <h2 className="text-5xl md:text-7xl font-bold text-primary">
                        1.000 mães em 6 meses
                    </h2>
                </div>

                {/* Pillars */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-10">
                    {pillars.map((pillar, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 min-w-[140px]"
                        >
                            <span className="text-4xl md:text-5xl">{pillar.emoji}</span>
                            <p className="text-sm md:text-base text-foreground/80 font-medium">{pillar.label}</p>
                        </div>
                    ))}
                </div>

                {/* Quote */}
                <div className="mt-12 p-6 md:p-8 rounded-3xl bg-primary/10 border border-primary/30 max-w-3xl mx-auto">
                    <p className="text-xl md:text-2xl text-foreground font-medium">
                        "Assistente Social Digital: o WhatsApp já tá lá. A mãe já tá lá.
                        <span className="text-primary font-bold"> Só faltava a Yá.</span>"
                    </p>
                </div>
            </div>
        </SlideContainer>
    );
};

export default SlideVision;
