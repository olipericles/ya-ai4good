import SlideContainer, { type SlideMode } from "./SlideContainer";
import { CreditCard, Pill, Bike, TrendingUp, Store, Receipt } from "lucide-react";

interface SlideProblemProps {
    isActive: boolean;
    transition?: "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";
    mode?: SlideMode;
    slideNumber?: number;
}

const SlideProblem = ({ isActive, transition = "slide-up", mode, slideNumber = 2 }: SlideProblemProps) => {
    const problems = [
        { icon: CreditCard, label: "Taxa surpresa", delay: "delay-200" },
        { icon: Pill, label: "Remédio de emergência", delay: "delay-300" },
        { icon: Bike, label: "Delivery acumulado", delay: "delay-400" },
        { icon: TrendingUp, label: "Juros sem avisar", delay: "delay-500" },
        { icon: Store, label: "Farmácia 24h", delay: "delay-600" },
        { icon: Receipt, label: "R$12 que virou R$200", delay: "delay-700" },
    ];

    return (
        <SlideContainer isActive={isActive} transition={transition} mode={mode} slideNumber={slideNumber}>
            <div className="space-y-6 sm:space-y-10 text-center">
                {/* Main question */}
                <div className={`space-y-4 ${isActive ? 'animate-fade-up' : 'opacity-0'}`}>
                    <h2 className="text-3xl sm:text-5xl md:text-7xl font-black">
                        Pra onde foi o <span className="text-gradient">dinheiro</span>?
                    </h2>
                    <p className="text-lg sm:text-2xl md:text-3xl text-foreground/60">
                        O maior inimigo não é a conta grande
                    </p>
                </div>

                {/* Problem grid */}
                <div className={`${isActive ? 'animate-fade-up delay-100' : 'opacity-0'}`}>
                    <div className="inline-block bg-card border border-primary/30 rounded-2xl p-4 sm:p-8 md:p-10">
                        <p className="text-xl sm:text-3xl md:text-5xl font-bold text-primary mb-4 sm:mb-8">
                            É o gasto invisível
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                            {problems.map((problem, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col items-center gap-3 ${isActive ? `animate-scale-in ${problem.delay}` : 'opacity-0'}`}
                                >
                                    <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-muted flex items-center justify-center">
                                        <problem.icon className="w-7 h-7 md:w-10 md:h-10 text-primary" />
                                    </div>
                                    <span className="text-sm md:text-base text-foreground/70 font-medium">
                                        {problem.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Quote */}
                <div className={`max-w-3xl mx-auto ${isActive ? 'animate-fade-up delay-700' : 'opacity-0'}`}>
                    <blockquote className="border-l-4 border-primary pl-6 py-2 text-left">
                        <p className="text-lg sm:text-xl md:text-2xl text-foreground/70 italic">
                            "Eu já vi minha prima chorar no fim do mês sem entender como o dinheiro acabou.
                        </p>
                        <p className="text-lg sm:text-xl md:text-3xl text-primary font-semibold mt-4">
                            Não é falta de esforço. É falta de ferramenta."
                        </p>
                    </blockquote>
                </div>
            </div>

            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-10 text-6xl text-primary/5 font-bold animate-float">R$</div>
                <div className="absolute bottom-1/4 right-10 text-8xl text-primary/5 font-bold animate-float delay-300">?</div>
            </div>
        </SlideContainer>
    );
};

export default SlideProblem;
