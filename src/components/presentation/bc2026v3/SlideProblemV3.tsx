import { type SlideMode } from "./SlideContainerV2";
import { Receipt, ShoppingBag, Pill } from "lucide-react";

interface SlideProblemV3Props {
    isActive: boolean;
    mode?: SlideMode;
    slideNumber?: number;
    step?: number;
}

export const SLIDE_PROBLEM_V3_STEPS = 4;

const SlideProblemV3 = ({ isActive, step = 0 }: SlideProblemV3Props) => {
    if (!isActive) return null;

    const items = [
        { icon: Receipt, text: "Taxa surpresa" },
        { icon: ShoppingBag, text: "R$12 → R$200/mês" },
        { icon: Pill, text: "Remédio de madrugada" },
    ];

    return (
        <div className="w-full h-full flex flex-col justify-center items-start px-[10vw] max-w-[1600px] mx-auto relative">

            <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">

                {/* Left Column: The Narrative */}
                <div className="md:col-span-5 flex flex-col justify-center">
                    <h2 className="text-xl font-mono text-primary mb-8 uppercase tracking-widest flex items-center gap-4">
                        <span className="w-8 h-px bg-primary inline-block"></span>
                        O Paradoxo
                    </h2>

                    <h3 className="text-5xl md:text-7xl font-black leading-none tracking-tighter mb-6 selection:bg-primary selection:text-black py-2">
                        Pra onde foi<br />
                        <span className="text-black bg-primary px-3 mt-2 inline-block">o dinheiro?</span>
                    </h3>
                </div>

                {/* Right Column: Information Flow */}
                <div className="md:col-span-7 flex flex-col gap-4 justify-center">
                    <p className="text-sm font-mono text-white/40 uppercase mb-2">Despesas Invisíveis</p>

                    {items.map((item, i) => (
                        <div
                            key={i}
                            className={`flex items-center justify-between border-l-4 border-primary bg-[#1A1A1A] p-6 transition-opacity duration-300 ${step >= i + 1 ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            <p className="text-2xl md:text-3xl font-bold">{item.text}</p>
                            <item.icon className="w-8 h-8 text-primary" aria-hidden="true" />
                        </div>
                    ))}

                    <div
                        className={`mt-8 bg-primary text-black p-8 transition-opacity duration-300 ${step >= 4 ? "opacity-100" : "opacity-0"
                            }`}
                        aria-live="polite"
                    >
                        <p className="text-2xl md:text-3xl font-black uppercase tracking-tighter">
                            Não é falta de esforço.<br />
                            É falta de ferramenta.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SlideProblemV3;
