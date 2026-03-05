import { type SlideMode } from "../types";
import { cn } from "@/lib/utils";

interface SlideTestV4Props {
    isActive: boolean;
    mode?: SlideMode;
    slideNumber?: number;
    step?: number;
}

export const SLIDE_TEST_V4_STEPS = 3;

const SlideTestV4 = ({ isActive, step = 0 }: SlideTestV4Props) => {
    if (!isActive) return null;

    // The exact 14 real avatars
    const bubbles = Array.from({ length: 14 }).map((_, i) => ({
        id: i,
        avatar: new URL(`../../../assets/maes/${i + 1}.jpeg`, import.meta.url).href,
    }));

    const currentNumber = step === 0 ? 14 : step === 1 ? 10 : step === 2 ? 5 : 2;
    const labels = ["Mães contatadas", "Fizeram cadastro", "Engajadas de verdade", "Transformação real"];
    const currentLabel = labels[step] || labels[0];

    const getBubbleTransform = (id: number, stepPhase: number) => {
        const effectiveStep = Math.min(stepPhase, 3);
        const wBase = window.innerWidth < 640 ? 65 : 100;
        const hBase = window.innerWidth < 640 ? 70 : 110;

        const isCurrentlyDiscarded =
            (effectiveStep >= 1 && id >= 10 && id <= 13) ||
            (effectiveStep >= 2 && id >= 5 && id <= 9) ||
            (effectiveStep >= 3 && id >= 2 && id <= 4);

        if (isCurrentlyDiscarded) {
            const isLeft = id % 2 === 0;
            // 6 bubbles max per side. id values discarded: 2 to 13.
            const sideIndex = isLeft ? (12 - id) / 2 : (13 - id) / 2;
            const isMobile = window.innerWidth < 640;
            const xEdge = isMobile ? (window.innerWidth / 2 - 30) : 480;
            const yCenter = isMobile ? -180 : -220;
            const ySpacing = isMobile ? 55 : 85;

            // Maintain a larger scale when discarded
            return { x: isLeft ? -xEdge : xEdge, y: yCenter + (sideIndex - 2.5) * ySpacing, scale: 1.1, opacity: 0.6, isDiscarded: true };
        }

        if (effectiveStep === 0) {
            // 7 top, 7 bottom
            const row = id < 7 ? 0 : 1;
            const col = id < 7 ? id : id - 7;
            return { x: (col - 3) * wBase, y: row === 0 ? -hBase / 2 : hBase / 2, scale: 1.4, opacity: 1 };
        }

        if (effectiveStep === 1) {
            // 5 top, 5 bottom
            const row = id < 5 ? 0 : 1;
            const col = id < 5 ? id : id - 5;
            return { x: (col - 2) * wBase * 1.2, y: row === 0 ? -hBase / 2 : hBase / 2, scale: 1.7, opacity: 1 };
        }

        if (effectiveStep === 2) {
            // 2 top, 3 bottom
            const row = id < 2 ? 0 : 1;
            const x = row === 0 ? (id - 0.5) * wBase * 1.5 : (id - 3) * wBase * 1.5;
            return { x, y: row === 0 ? -hBase / 2 : hBase / 2, scale: 2.0, opacity: 1 };
        }

        // Hero state
        return { x: id === 0 ? -wBase * 1.2 : wBase * 1.2, y: 0, scale: 2.8, opacity: 1 };
    };

    return (
        <div className="w-full h-full flex flex-col items-center justify-center text-center space-y-12 max-w-[1600px] mx-auto px-4 relative z-10">
            <div className="space-y-4">
                <h2 className="text-xl font-mono text-primary uppercase tracking-widest flex items-center justify-center gap-4">
                    <span className="w-8 h-px bg-primary inline-block"></span>
                    Piloto em Salvador · Fev/2026
                    <span className="w-8 h-px bg-primary inline-block"></span>
                </h2>
                <h3 className="text-4xl sm:text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none drop-shadow-md">
                    O Teste
                </h3>
            </div>

            {/* Big V4 Number Display with V2 Glassmorphism box */}
            <div className="relative z-10 bg-card/40 border border-primary/20 backdrop-blur-xl p-8 rounded-3xl min-w-[300px] transition-all duration-500 hover:border-primary/50">
                <p className="text-7xl sm:text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 transition-all duration-700 leading-none">
                    {currentNumber}
                </p>
                <p className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mt-4 transition-all duration-500">
                    {currentLabel}
                </p>
            </div>

            {/* Face Bubbles Area */}
            <div className="relative w-full h-[150px] sm:h-[180px]">
                <style>{`
                    @keyframes v4-float {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-15px); }
                    }
                `}</style>

                {bubbles.map((bubble) => {
                    const transform = getBubbleTransform(bubble.id, step);
                    const isHero = transform.scale >= 1.8;
                    const isDiscarded = transform.isDiscarded;

                    return (
                        <div
                            key={bubble.id}
                            style={{
                                transition: `all ${1000 + bubble.id * 40}ms cubic-bezier(0.34, 1.56, 0.64, 1)`,
                                transform: `translate(calc(-50% + ${transform.x}px), calc(-50% + ${transform.y}px)) scale(${transform.scale})`,
                                opacity: transform.opacity,
                            }}
                            className={cn(
                                "absolute top-1/2 left-1/2 -ml-5 -mt-5 sm:-ml-7 sm:-mt-7 w-10 h-10 sm:w-14 sm:h-14 z-10",
                                isDiscarded ? "pointer-events-none" : ""
                            )}
                        >
                            <div
                                className={cn(
                                    "relative w-full h-full rounded-full overflow-hidden border-2 shadow-lg transition-colors duration-500",
                                    isHero ? "border-primary shadow-[0_0_20px_10px_rgba(226,107,88,0.2)]" : "border-border/50 shadow-black/30"
                                )}
                                style={{ animation: isDiscarded ? `v4-float ${3 + (bubble.id % 3)}s ease-in-out infinite ${bubble.id * 0.2}s` : 'none' }}
                            >
                                <img src={bubble.avatar} alt="Mãe" className={cn("w-full h-full object-cover", !isHero && "opacity-80")} />
                                {isHero && <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SlideTestV4;
