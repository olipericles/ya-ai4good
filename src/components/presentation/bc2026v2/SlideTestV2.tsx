import SlideContainerV2, { type SlideMode } from "./SlideContainerV2";
import { cn } from "@/lib/utils";

interface SlideTestV2Props {
    isActive: boolean;
    mode?: SlideMode;
    slideNumber?: number;
    step?: number;
}

export const SLIDE_TEST_V2_STEPS = 3;

const SlideTestV2 = ({ isActive, mode, slideNumber, step = 0 }: SlideTestV2Props) => {
    const showAll = mode === "section";

    // Mapeando as imagens reais (misturando com placeholders para inteirar 18)
    const getAvatar = (i: number) => {
        const id = (i % 14) + 1; // 1 to 14
        return new URL(`../../../assets/maes/${id}.jpeg`, import.meta.url).href;
    };

    const bubbles = Array.from({ length: 18 }).map((_, i) => {
        let activeAtStep = 0; // Contatadas
        if (i < 10) activeAtStep = 1; // Cadastro
        if (i < 5) activeAtStep = 2; // Engajadas
        if (i < 2) activeAtStep = 3; // Transformação

        return {
            id: i,
            avatar: getAvatar(i),
            activeAtStep,
            x: Math.random() * 80 - 40,
            y: Math.random() * 40 - 20,
        };
    });

    const currentNumber = showAll ? 2 : (step === 0 ? 18 : step === 1 ? 10 : step === 2 ? 5 : 2);
    const labels = ["Mães contatadas", "Fizeram cadastro", "Engajadas de verdade", "Transformação real"];
    const currentLabel = showAll ? labels[3] : labels[step] || labels[0];

    return (
        <SlideContainerV2 isActive={isActive} mode={mode} slideNumber={slideNumber}>
            <div className="flex flex-col items-center justify-center h-full text-center space-y-12 max-w-4xl mx-auto">
                <div className="space-y-2">
                    <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-foreground">
                        O <span className="text-gradient">Teste</span>
                    </h2>
                    <p className="text-sm sm:text-base text-foreground/60">
                        Piloto em Salvador · Fevereiro 2026
                    </p>
                </div>

                {/* Big Number Display */}
                <div className="relative z-10 bg-card border border-border/50 backdrop-blur-xl p-8 rounded-3xl min-w-[300px] transition-all duration-500 hover:border-primary/50">
                    <p className="text-7xl sm:text-8xl md:text-9xl font-black text-gradient transition-all duration-700">
                        {currentNumber}
                    </p>
                    <p className="text-xl sm:text-2xl font-medium text-foreground mt-4 transition-all duration-500">
                        {currentLabel}
                    </p>
                </div>

                {/* Face Bubbles Area */}
                <div className="relative w-full h-[60px] sm:h-[80px] flex justify-center items-center">
                    <div className="relative w-full max-w-3xl flex flex-wrap justify-center gap-2 sm:gap-4 transition-all duration-1000">
                        {bubbles.map((bubble) => {
                            const isVisible = showAll ? bubble.activeAtStep >= 3 : step <= bubble.activeAtStep;
                            const isHero = isVisible && bubble.activeAtStep === 3;

                            return (
                                <div
                                    key={bubble.id}
                                    style={{
                                        transition: `all ${500 + Math.random() * 500}ms cubic-bezier(0.4, 0, 0.2, 1)`,
                                        transform: isVisible ? `translate(0px, 0px) scale(${isHero && (showAll || step === 3) ? 1.4 : 1})` : `translate(${bubble.x}px, ${bubble.y}px) scale(0)`,
                                        opacity: isVisible ? 1 : 0,
                                    }}
                                    className={cn(
                                        "w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 shadow-lg",
                                        isHero && (showAll || step === 3) ? "border-primary shadow-primary/50 z-20" : "border-border shadow-black/20 z-10"
                                    )}
                                >
                                    <img src={bubble.avatar} alt="Mãe" className="w-full h-full object-cover grayscale opacity-80" />
                                    {isHero && (showAll || step === 3) && (
                                        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </SlideContainerV2>
    );
};

export default SlideTestV2;
