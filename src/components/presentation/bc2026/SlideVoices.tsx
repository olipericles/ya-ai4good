import SlideContainer, { type SlideMode } from "./SlideContainer";
import yaLogo from "@/assets/ya_logo_branco.svg";

interface SlideVoicesProps {
    isActive: boolean;
    transition?: "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";
    mode?: SlideMode;
    slideNumber?: number;
}

const SlideVoices = ({ isActive, transition = "fade-zoom", mode, slideNumber = 5 }: SlideVoicesProps) => {
    return (
        <SlideContainer isActive={isActive} transition={transition} mode={mode} slideNumber={slideNumber}>
            <div className="space-y-6 sm:space-y-10 text-center">
                {/* Header */}
                <div className={`space-y-2 ${isActive ? 'animate-fade-up' : 'opacity-0'}`}>
                    <h2 className="text-3xl sm:text-5xl md:text-7xl font-black">
                        As <span className="text-gradient">Vozes</span>
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-foreground/60">
                        Transformação real
                    </p>
                </div>

                {/* Testimonials */}
                <div className="flex flex-col gap-6 sm:gap-8 max-w-4xl mx-auto">
                    {/* Quote 1 */}
                    <div className={`${isActive ? 'animate-scale-in delay-200' : 'opacity-0'}`}>
                        <div className="bg-card border border-border/50 rounded-3xl p-5 sm:p-8 text-left hover:border-primary/50 transition-all duration-300">
                            <blockquote className="border-l-4 border-primary pl-5">
                                <p className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground mb-3">
                                    "Eu achava que o problema era o salário. <span className="text-primary font-bold">Era o delivery.</span>"
                                </p>
                                <p className="text-base sm:text-lg text-foreground/60">
                                    Descobriu <span className="text-primary font-semibold">R$300/mês</span> em delivery invisível.
                                    Redirecionou para mercado.
                                </p>
                            </blockquote>
                        </div>
                    </div>

                    {/* Quote 2 */}
                    <div className={`${isActive ? 'animate-scale-in delay-400' : 'opacity-0'}`}>
                        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-3xl p-5 sm:p-8 text-left hover:border-primary/50 transition-all duration-300">
                            <blockquote className="border-l-4 border-secondary pl-5">
                                <p className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground mb-3">
                                    "Pela primeira vez em 3 anos, <span className="text-secondary font-bold">sobrou R$50</span> no fim do mês."
                                </p>
                                <p className="text-base sm:text-lg text-foreground/60">
                                    O começo de uma reserva. <span className="text-secondary font-semibold">Dignidade.</span>
                                </p>
                            </blockquote>
                        </div>
                    </div>
                </div>

                {/* Logo */}
                <div className={`flex justify-center ${isActive ? 'animate-fade-in delay-600' : 'opacity-0'}`}>
                    <div className="relative">
                        <img src={yaLogo} alt="Yá Logo" className="h-14 sm:h-20 object-contain" />
                        <div className="absolute inset-0 bg-primary/20 blur-[40px] -z-10 rounded-full" />
                    </div>
                </div>
            </div>
        </SlideContainer>
    );
};

export default SlideVoices;
