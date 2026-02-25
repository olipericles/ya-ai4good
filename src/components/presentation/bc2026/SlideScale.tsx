import SlideContainer from "./SlideContainer";

import { ArrowRight } from "lucide-react";

interface SlideScaleProps {
    isActive: boolean;
    transition?: "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";
}

const SlideScale = ({ isActive, transition = "slide-left" }: SlideScaleProps) => {
    return (
        <SlideContainer isActive={isActive} transition={transition}>
            <div className="text-center space-y-10">
                {/* Header */}
                <div className="space-y-2">
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground">
                        Escalar o Sucesso
                    </h2>
                    <p className="text-xl md:text-2xl text-muted-foreground">
                        Mudamos a vida de 2. Queremos mudar a vida de 1.000.
                    </p>
                </div>

                {/* Comparison columns */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-10">
                    {/* Left column - What we did */}
                    <div className="p-6 md:p-8 rounded-3xl bg-card/50 border border-border/50 backdrop-blur-sm min-w-[280px] md:min-w-[320px]">
                        <h3 className="text-lg md:text-xl font-semibold text-muted-foreground mb-6">O que já fizemos</h3>
                        <div className="space-y-4">
                            <div className="text-center">
                                <p className="text-4xl md:text-5xl font-bold text-foreground">18</p>
                                <p className="text-sm md:text-base text-muted-foreground">mães</p>
                            </div>
                            <div className="text-center">
                                <p className="text-lg md:text-xl font-semibold text-primary">Custo zero</p>
                                <p className="text-sm text-muted-foreground">beta gratuito</p>
                            </div>
                            <div className="text-center">
                                <p className="text-4xl md:text-5xl font-bold text-primary">2</p>
                                <p className="text-sm md:text-base text-muted-foreground">transformadas (11%)</p>
                            </div>
                            <div className="text-center pt-2">
                                <p className="text-base md:text-lg text-foreground/80">2 semanas</p>
                                <p className="text-sm text-muted-foreground">de teste</p>
                            </div>
                        </div>
                    </div>

                    {/* Arrow */}
                    <ArrowRight className="w-8 h-8 md:w-12 md:h-12 text-primary rotate-90 md:rotate-0" />

                    {/* Right column - Goals */}
                    <div className="p-6 md:p-8 rounded-3xl bg-primary/10 border border-primary/30 min-w-[280px] md:min-w-[320px]">
                        <h3 className="text-lg md:text-xl font-semibold text-primary mb-6">Onde queremos chegar</h3>
                        <div className="space-y-4">
                            <div className="text-center">
                                <p className="text-4xl md:text-5xl font-bold text-foreground">1.000</p>
                                <p className="text-sm md:text-base text-muted-foreground">mães</p>
                            </div>
                            <div className="text-center">
                                <p className="text-lg md:text-xl font-semibold text-primary">~R$ 5</p>
                                <p className="text-sm text-muted-foreground">por mãe/mês</p>
                            </div>
                            <div className="text-center">
                                <p className="text-4xl md:text-5xl font-bold text-primary">~110</p>
                                <p className="text-sm md:text-base text-muted-foreground">transformadas (projeção)</p>
                            </div>
                            <div className="text-center pt-2">
                                <p className="text-base md:text-lg text-foreground/80">6 meses</p>
                                <p className="text-sm text-muted-foreground">de operação</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Logo */}
                <div className="mt-4">
                    <span className="text-4xl md:text-5xl font-bold text-primary">Yá</span>
                </div>
            </div>
        </SlideContainer>
    );
};

export default SlideScale;
