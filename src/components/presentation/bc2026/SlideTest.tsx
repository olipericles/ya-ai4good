import SlideContainer from "./SlideContainer";
import AnimatedNumber from "../AnimatedNumber";

interface SlideTestProps {
    isActive: boolean;
    transition?: "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";
}

const SlideTest = ({ isActive, transition = "zoom-rotate" }: SlideTestProps) => {
    const funnelSteps = [
        { value: 18, label: "mães", sublabel: "convidadas", delay: "delay-100" },
        { value: 10, label: "cadastros", sublabel: "(56%)", delay: "delay-200" },
        { value: 5, label: "engajadas", sublabel: "(50%)", delay: "delay-300" },
        { value: 2, label: "transformação", sublabel: "real", delay: "delay-400" },
    ];

    return (
        <SlideContainer isActive={isActive} transition={transition}>
            <div className="space-y-6 sm:space-y-10 text-center">
                {/* Header */}
                <div className={`space-y-2 ${isActive ? 'animate-fade-up' : 'opacity-0'}`}>
                    <h2 className="text-3xl sm:text-5xl md:text-7xl font-black">
                        O <span className="text-gradient">Teste</span>
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-foreground/60">
                        Piloto em Salvador | Fev 2026
                    </p>
                </div>

                {/* Funnel */}
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6">
                    {funnelSteps.map((step, index) => (
                        <div key={index} className="flex items-center gap-3 sm:gap-4 md:gap-6">
                            <div className={`bg-card border border-border/50 rounded-2xl p-4 sm:p-6 md:p-8 min-w-[90px] sm:min-w-[120px] md:min-w-[160px] hover:border-primary/50 transition-all duration-300 ${isActive ? `animate-scale-in ${step.delay}` : 'opacity-0'}`}>
                                <p className="text-3xl sm:text-5xl md:text-6xl font-black text-primary">
                                    <AnimatedNumber value={step.value} suffix="" isActive={isActive} duration={1200 + index * 300} />
                                </p>
                                <p className="text-sm sm:text-base md:text-lg text-foreground/80 font-medium mt-1">{step.label}</p>
                                <p className="text-xs sm:text-sm text-muted-foreground">{step.sublabel}</p>
                            </div>
                            {index < funnelSteps.length - 1 && (
                                <span className={`text-2xl sm:text-3xl md:text-4xl text-primary/40 ${isActive ? `animate-fade-in ${funnelSteps[index + 1].delay}` : 'opacity-0'}`}>→</span>
                            )}
                        </div>
                    ))}
                </div>

                {/* Success highlight */}
                <div className={`${isActive ? 'animate-fade-up delay-600' : 'opacity-0'}`}>
                    <div className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl p-4 sm:p-6 md:p-8 max-w-2xl">
                        <p className="text-base sm:text-lg md:text-xl text-foreground">
                            <span className="text-primary font-bold text-xl sm:text-2xl">✓</span>{" "}
                            <span className="font-semibold">Meta atingida:</span> 5 mães com uso consistente em 2 semanas
                        </p>
                    </div>
                </div>
            </div>
        </SlideContainer>
    );
};

export default SlideTest;
