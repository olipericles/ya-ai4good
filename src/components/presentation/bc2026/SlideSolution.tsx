import SlideContainer from "./SlideContainer";

import { Mic, Camera, PenLine } from "lucide-react";

interface SlideSolutionProps {
    isActive: boolean;
    transition?: "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";
}

const SlideSolution = ({ isActive, transition = "blur-scale" }: SlideSolutionProps) => {
    const methods = [
        { icon: Mic, label: "Manda áudio", emoji: "🎤" },
        { icon: Camera, label: "Foto do cupom", emoji: "📷" },
        { icon: PenLine, label: "Ou só digita", emoji: "✍️" },
    ];

    return (
        <SlideContainer isActive={isActive} transition={transition}>
            <div className="text-center space-y-10">
                {/* Header */}
                <div className="space-y-4">
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground">
                        A solução
                    </h2>
                    <div className="flex items-center justify-center gap-3">
                        <span className="text-5xl md:text-7xl font-bold text-primary">Yá</span>
                    </div>
                    <p className="text-xl md:text-2xl text-muted-foreground">
                        Assistente financeira no WhatsApp
                    </p>
                </div>

                {/* Methods */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-8">
                    {methods.map((method, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                        >
                            <span className="text-4xl md:text-5xl">{method.emoji}</span>
                            <p className="text-base md:text-lg text-foreground/80 font-medium">{method.label}</p>
                        </div>
                    ))}
                </div>

                {/* Stats */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12">
                    <div className="text-center">
                        <p className="text-4xl md:text-5xl font-bold text-primary">97%</p>
                        <p className="text-sm md:text-base text-muted-foreground mt-1">acessam internet pelo celular</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl md:text-5xl font-bold text-primary">91%</p>
                        <p className="text-sm md:text-base text-muted-foreground mt-1">usam WhatsApp todo dia</p>
                    </div>
                </div>

                {/* Quote */}
                <p className="text-lg md:text-xl text-muted-foreground italic mt-8">
                    "A gente entra na vida delas."
                </p>
                <p className="text-sm md:text-base text-muted-foreground/70">
                    "Um registro imperfeito é melhor do que nenhum."
                </p>
            </div>
        </SlideContainer>
    );
};

export default SlideSolution;
