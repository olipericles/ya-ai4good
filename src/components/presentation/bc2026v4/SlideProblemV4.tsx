import { type SlideMode } from "../bc2026v2/SlideContainerV2";
import { Receipt, ShoppingBag, Pill } from "lucide-react";

interface SlideProblemV4Props {
    isActive: boolean;
    mode?: SlideMode;
    slideNumber?: number;
    step?: number;
}

export const SLIDE_PROBLEM_V4_STEPS = 4;

const SlideProblemV4 = ({ isActive, step = 0 }: SlideProblemV4Props) => {
    if (!isActive) return null;

    const items = [
        { icon: Receipt, text: "Taxa surpresa" },
        { icon: ShoppingBag, text: "R$12 → R$200/mês" },
        { icon: Pill, text: "Remédio de madrugada" },
    ];

    return (
        <div className="w-full h-full flex flex-col justify-center items-start px-[10vw] max-w-[1600px] mx-auto relative z-10">

            {/* V2 specific floating decor */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-1/4 left-10 text-6xl text-primary/5 font-bold animate-pulse">R$</div>
                <div className="absolute bottom-1/4 right-10 text-8xl text-primary/5 font-bold animate-pulse delay-300">?</div>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">

                {/* Left Column: The Narrative (V3 Typography scale but soft styling) */}
                <div className="md:col-span-5 flex flex-col justify-center">
                    <h2 className="text-xl font-mono text-primary mb-8 uppercase tracking-widest flex items-center gap-4">
                        <span className="w-8 h-px bg-primary inline-block"></span>
                        O Paradoxo
                    </h2>

                    <h3 className="text-5xl md:text-7xl font-black leading-none tracking-tighter mb-6 py-2 drop-shadow-md">
                        Pra onde foi<br />o <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">dinheiro</span>?
                    </h3>
                </div>

                {/* Right Column: Information Flow (V2 glassmorphism but V3 layout) */}
                <div className="md:col-span-7 flex flex-col gap-4 justify-center">
                    <p className="text-sm font-mono text-white/40 uppercase mb-2">Despesas Invisíveis</p>

                    {items.map((item, i) => (
                        <div
                            key={i}
                            className={`flex items-center justify-between bg-card/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:border-primary/50 hover:bg-card/60 ${step >= i + 1 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                                }`}
                        >
                            <p className="text-2xl md:text-3xl font-bold">{item.text}</p>
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <item.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                            </div>
                        </div>
                    ))}

                    <div
                        className={`mt-8 bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30 backdrop-blur-md rounded-2xl p-8 transition-all duration-500 ${step >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                        aria-live="polite"
                    >
                        <p className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white drop-shadow-md">
                            Não é falta de esforço.<br />
                            <span className="text-primary">É falta de ferramenta.</span>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SlideProblemV4;
