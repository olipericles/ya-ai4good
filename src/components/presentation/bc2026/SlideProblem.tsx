import SlideContainer from "./SlideContainer";
import { CreditCard, Pill, Bike, TrendingUp, Store, Receipt } from "lucide-react";

interface SlideProblemProps {
    isActive: boolean;
    transition?: "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";
}

const SlideProblem = ({ isActive, transition = "slide-up" }: SlideProblemProps) => {
    const problems = [
        { icon: CreditCard, label: "Taxa surpresa", emoji: "💳" },
        { icon: Pill, label: "Remédio de emergência", emoji: "💊" },
        { icon: Bike, label: "Delivery acumulado", emoji: "🛵" },
        { icon: TrendingUp, label: "Juros sem avisar", emoji: "📈" },
        { icon: Store, label: "Farmácia 24h", emoji: "🏪" },
        { icon: Receipt, label: "R$12 que virou R$200", emoji: "🧾" },
    ];

    return (
        <SlideContainer isActive={isActive} transition={transition}>
            <div className="text-center space-y-10">
                {/* Question */}
                <h2 className="text-4xl md:text-6xl font-bold text-foreground">
                    Pra onde foi o dinheiro?
                </h2>

                {/* Problem grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mt-8">
                    {problems.map((problem, index) => (
                        <div
                            key={index}
                            className="p-4 md:p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:scale-105"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <span className="text-3xl md:text-4xl mb-2 block">{problem.emoji}</span>
                            <p className="text-sm md:text-base text-foreground/80 font-medium">{problem.label}</p>
                        </div>
                    ))}
                </div>

                {/* Quote */}
                <div className="mt-12 max-w-2xl mx-auto">
                    <p className="text-xl md:text-2xl text-muted-foreground italic">
                        "Não é falta de esforço. <span className="text-primary font-semibold">É falta de ferramenta.</span>"
                    </p>
                </div>
            </div>
        </SlideContainer>
    );
};

export default SlideProblem;
