import SlideContainer from "./SlideContainer";
import AnimatedNumber from "../AnimatedNumber";
import { ArrowRight } from "lucide-react";

interface SlideScaleProps {
    isActive: boolean;
    transition?: "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";
}

const SlideScale = ({ isActive, transition = "slide-left" }: SlideScaleProps) => {
    return (
        <SlideContainer isActive={isActive} transition={transition}>
            <div className="space-y-6 sm:space-y-10 text-center">
                {/* Header */}
                <div className={`space-y-2 ${isActive ? 'animate-fade-up' : 'opacity-0'}`}>
                    <h2 className="text-3xl sm:text-5xl md:text-7xl font-black">
                        Escalar o <span className="text-gradient">Sucesso</span>
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-foreground/60">
                        Mudamos a vida de 2. Queremos mudar a vida de 1.000.
                    </p>
                </div>

                {/* Comparison columns */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12">
                    {/* Left column - What we did */}
                    <div className={`bg-card border border-border/50 rounded-3xl p-5 sm:p-8 min-w-[260px] sm:min-w-[300px] hover:border-primary/50 transition-all duration-300 ${isActive ? 'animate-scale-in delay-200' : 'opacity-0'}`}>
                        <h3 className="text-lg sm:text-xl font-bold text-foreground/60 mb-6">O que já fizemos</h3>
                        <div className="space-y-4">
                            <div className="text-center">
                                <p className="text-4xl sm:text-5xl font-black text-foreground">
                                    <AnimatedNumber value={18} suffix="" isActive={isActive} />
                                </p>
                                <p className="text-sm sm:text-base text-muted-foreground">mães</p>
                            </div>
                            <div className="text-center">
                                <p className="text-lg sm:text-xl font-semibold text-primary">Custo zero</p>
                                <p className="text-sm text-muted-foreground">beta gratuito</p>
                            </div>
                            <div className="text-center">
                                <p className="text-4xl sm:text-5xl font-black text-primary">
                                    <AnimatedNumber value={2} suffix="" isActive={isActive} />
                                </p>
                                <p className="text-sm sm:text-base text-muted-foreground">transformadas (11%)</p>
                            </div>
                            <div className="text-center pt-2">
                                <p className="text-base sm:text-lg text-foreground/80 font-medium">2 semanas</p>
                                <p className="text-sm text-muted-foreground">de teste</p>
                            </div>
                        </div>
                    </div>

                    {/* Arrow */}
                    <div className={`${isActive ? 'animate-fade-in delay-300' : 'opacity-0'}`}>
                        <ArrowRight className="w-8 h-8 md:w-12 md:h-12 text-primary rotate-90 md:rotate-0" />
                    </div>

                    {/* Right column - Goals */}
                    <div className={`bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-3xl p-5 sm:p-8 min-w-[260px] sm:min-w-[300px] hover:border-primary/50 transition-all duration-300 ${isActive ? 'animate-scale-in delay-400' : 'opacity-0'}`}>
                        <h3 className="text-lg sm:text-xl font-bold text-primary mb-6">Onde queremos chegar</h3>
                        <div className="space-y-4">
                            <div className="text-center">
                                <p className="text-4xl sm:text-5xl font-black text-foreground">1.000</p>
                                <p className="text-sm sm:text-base text-muted-foreground">mães</p>
                            </div>
                            <div className="text-center">
                                <p className="text-lg sm:text-xl font-semibold text-primary">~R$ 5</p>
                                <p className="text-sm text-muted-foreground">por mãe/mês</p>
                            </div>
                            <div className="text-center">
                                <p className="text-4xl sm:text-5xl font-black text-primary">~110</p>
                                <p className="text-sm sm:text-base text-muted-foreground">transformadas (projeção)</p>
                            </div>
                            <div className="text-center pt-2">
                                <p className="text-base sm:text-lg text-foreground/80 font-medium">6 meses</p>
                                <p className="text-sm text-muted-foreground">de operação</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SlideContainer>
    );
};

export default SlideScale;
