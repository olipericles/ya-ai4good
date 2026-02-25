import SlideContainer from "./SlideContainer";


interface SlideVoicesProps {
    isActive: boolean;
    transition?: "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";
}

const SlideVoices = ({ isActive, transition = "fade-zoom" }: SlideVoicesProps) => {
    return (
        <SlideContainer isActive={isActive} transition={transition}>
            <div className="text-center space-y-10">
                {/* Header */}
                <div className="space-y-2">
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground">
                        As Vozes
                    </h2>
                    <p className="text-xl md:text-2xl text-muted-foreground">
                        Transformação real
                    </p>
                </div>

                {/* Testimonials */}
                <div className="flex flex-col gap-8 md:gap-12 mt-10 max-w-4xl mx-auto">
                    {/* Quote 1 */}
                    <div className="p-6 md:p-8 rounded-3xl bg-card/50 border border-border/50 backdrop-blur-sm text-left">
                        <p className="text-xl md:text-3xl font-medium text-foreground mb-4">
                            "Eu achava que o problema era o salário. <span className="text-primary">Era o delivery.</span>"
                        </p>
                        <p className="text-base md:text-lg text-muted-foreground">
                            Descobriu <span className="text-primary font-semibold">R$300/mês</span> em delivery invisível.
                            Redirecionou para mercado.
                        </p>
                    </div>

                    {/* Quote 2 */}
                    <div className="p-6 md:p-8 rounded-3xl bg-card/50 border border-border/50 backdrop-blur-sm text-left">
                        <p className="text-xl md:text-3xl font-medium text-foreground mb-4">
                            "Pela primeira vez em 3 anos, <span className="text-primary">sobrou R$50</span> no fim do mês."
                        </p>
                        <p className="text-base md:text-lg text-muted-foreground">
                            O começo de uma reserva. <span className="text-primary font-semibold">Dignidade.</span>
                        </p>
                    </div>
                </div>

                {/* Logo */}
                <div className="mt-8">
                    <span className="text-4xl md:text-5xl font-bold text-primary">Yá</span>
                </div>
            </div>
        </SlideContainer>
    );
};

export default SlideVoices;
