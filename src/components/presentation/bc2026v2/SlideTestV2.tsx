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
        };
    });

    const currentNumber = showAll ? 2 : (step === 0 ? 18 : step === 1 ? 10 : step === 2 ? 5 : 2);
    const labels = ["Mães contatadas", "Fizeram cadastro", "Engajadas de verdade", "Transformação real"];
    const currentLabel = showAll ? labels[3] : labels[step] || labels[0];

    // Posições de "explosão" determinísticas para as bolhas que somem
    const getExplosion = (id: number) => ({
        x: Math.sin(id * 4.5) * 300,
        y: Math.cos(id * 3.2) * 300,
    });

    const getBubbleTransform = (id: number, stepPhase: number, showAll: boolean) => {
        const effectiveStep = showAll ? 3 : Math.min(stepPhase, 3);
        const wBase = window.innerWidth < 640 ? 45 : 60; // espaçamento adaptativo mobile/desktop
        const hBase = window.innerWidth < 640 ? 50 : 70;

        // IDs 14-17 são repetições para fechar 18 no começo.
        // A partir do passo 2 (Engajadas), elas somem para sobrar apenas as 14 originais ("sumindo as 4 repetidas").
        if (effectiveStep >= 2 && id >= 14) {
            const exp = getExplosion(id);
            return { x: exp.x, y: exp.y, scale: 0, opacity: 0 };
        }

        // Determinar quais bolhas foram "descartadas" do funil principal para flutuar nas laterais
        let discardedIds: number[] = [];
        if (effectiveStep === 1) discardedIds = [10, 11, 12, 13, 14, 15, 16, 17];
        if (effectiveStep === 2) discardedIds = [5, 6, 7, 8, 9, 10, 11, 12, 13];
        if (effectiveStep === 3) discardedIds = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        const discardedIdx = discardedIds.indexOf(id);

        if (discardedIdx !== -1) {
            // Bolha descartada flutuando na lateral
            const isLeft = discardedIdx % 2 === 0;
            const sideIndex = Math.floor(discardedIdx / 2);
            const totalOnThisSide = Math.ceil(discardedIds.length / 2);

            const edgeOffset = window.innerWidth < 640 ? window.innerWidth / 2 - 30 : 380;
            const xOrganic = Math.sin(id * 14.2) * 20; // variação orgânica
            const x = isLeft ? -edgeOffset + xOrganic : edgeOffset + xOrganic;

            const ySpacing = window.innerWidth < 640 ? 40 : 50;
            const y = (sideIndex - (totalOnThisSide - 1) / 2) * ySpacing;

            return { x, y, scale: 0.8, opacity: 0.6 };
        }

        // Visible states (Main Funnel)
        if (effectiveStep === 0) {
            // 9 top, 9 bottom
            const row = id < 9 ? 0 : 1;
            const col = id < 9 ? id : id - 9;
            const x = (col - 4) * wBase;
            const y = row === 0 ? -hBase / 2 : hBase / 2;
            return { x, y, scale: 1.0, opacity: 1 };
        }

        if (effectiveStep === 1) {
            // 5 top, 5 bottom
            const row = id < 5 ? 0 : 1;
            const col = id < 5 ? id : id - 5;
            const x = (col - 2) * wBase * 1.2;
            const y = row === 0 ? -hBase / 2 : hBase / 2;
            return { x, y, scale: 1.15, opacity: 1 };
        }

        if (effectiveStep === 2) {
            // 2 top, 3 bottom (Olympic rings)
            const row = id < 2 ? 0 : 1;
            let x = 0;
            if (row === 0) {
                x = (id - 0.5) * wBase * 1.5;
            } else {
                x = (id - 2 - 1) * wBase * 1.5;
            }
            const y = row === 0 ? -hBase / 2 : hBase / 2;
            return { x, y, scale: 1.3, opacity: 1 };
        }

        // Step 3 (2 Heroes)
        const x = id === 0 ? -wBase * 1.2 : wBase * 1.2;
        return { x, y: 0, scale: 1.8, opacity: 1 };
    };

    return (
        <SlideContainerV2 isActive={isActive} mode={mode} slideNumber={slideNumber}>
            <div className="flex flex-col items-center justify-center h-full text-center space-y-12 max-w-5xl mx-auto overflow-hidden">
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
                <div className="relative w-full h-[150px] sm:h-[180px]">
                    {bubbles.map((bubble) => {
                        const transform = getBubbleTransform(bubble.id, step, showAll);
                        const isHero = transform.scale >= 1.8;

                        return (
                            <div
                                key={bubble.id}
                                style={{
                                    transition: `all ${1000 + bubble.id * 40}ms cubic-bezier(0.34, 1.56, 0.64, 1)`,
                                    transform: `translate(calc(-50% + ${transform.x}px), calc(-50% + ${transform.y}px)) scale(${transform.scale})`,
                                    opacity: transform.opacity,
                                }}
                                className={cn(
                                    "absolute top-1/2 left-1/2 -ml-5 -mt-5 sm:-ml-7 sm:-mt-7 w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 shadow-lg",
                                    isHero ? "border-primary shadow-primary/50 z-20" : "border-border shadow-black/20 z-10"
                                )}
                            >
                                <img src={bubble.avatar} alt="Mãe" className="w-full h-full object-cover grayscale opacity-80" />
                                {isHero && (
                                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </SlideContainerV2>
    );
};

export default SlideTestV2;
