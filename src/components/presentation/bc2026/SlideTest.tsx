import SlideContainer from "./SlideContainer";

interface SlideTestProps {
    isActive: boolean;
    transition?: "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";
}

const SlideTest = ({ isActive, transition = "zoom-rotate" }: SlideTestProps) => {
    const funnelSteps = [
        { value: "18", label: "mães", sublabel: "convidadas" },
        { value: "10", label: "cadastros", sublabel: "(56%)" },
        { value: "5", label: "engajadas", sublabel: "(50%)" },
        { value: "2", label: "transformação", sublabel: "✓" },
    ];

    return (
        <SlideContainer isActive={isActive} transition={transition}>
            <div className="text-center space-y-10">
                {/* Header */}
                <div className="space-y-2">
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground">
                        O Teste
                    </h2>
                    <p className="text-xl md:text-2xl text-muted-foreground">
                        Piloto em Salvador | Fev 2026
                    </p>
                </div>

                {/* Funnel */}
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mt-10">
                    {funnelSteps.map((step, index) => (
                        <div key={index} className="flex items-center gap-4 md:gap-8">
                            <div className="text-center p-4 md:p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm min-w-[100px] md:min-w-[140px]">
                                <p className="text-3xl md:text-5xl font-bold text-primary">{step.value}</p>
                                <p className="text-sm md:text-base text-foreground/80 font-medium mt-1">{step.label}</p>
                                <p className="text-xs md:text-sm text-muted-foreground">{step.sublabel}</p>
                            </div>
                            {index < funnelSteps.length - 1 && (
                                <span className="text-2xl md:text-4xl text-muted-foreground/50">→</span>
                            )}
                        </div>
                    ))}
                </div>

                {/* Success highlight */}
                <div className="mt-12 p-6 rounded-2xl bg-primary/10 border border-primary/30 max-w-2xl mx-auto">
                    <p className="text-lg md:text-xl text-foreground">
                        ✓ <span className="font-semibold">Meta atingida:</span> 5 mães com uso consistente em 2 semanas
                    </p>
                </div>
            </div>
        </SlideContainer>
    );
};

export default SlideTest;
