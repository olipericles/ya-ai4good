import { type SlideMode } from "../types";
import { ArrowRight, Check, Target } from "lucide-react";

interface SlideScaleV4Props {
    isActive: boolean;
    mode?: SlideMode;
    slideNumber?: number;
    step?: number;
}

export const SLIDE_SCALE_V4_STEPS = 1;

const SlideScaleV4 = ({ isActive, step = 0 }: SlideScaleV4Props) => {
    if (!isActive) return null;

    const done = [
        { label: "Mães no piloto", value: "18" },
        { label: "Custo", value: "Zero" },
        { label: "Transformadas", value: "2" },
    ];

    const future = [
        { label: "Meta", value: "1.000" },
        { label: "Investimento", value: "$3.000" },
        { label: "Projeção (~11%)", value: "~110" },
    ];

    return (
        <div className="w-full h-full flex flex-col justify-center items-start px-[10vw] max-w-[1600px] mx-auto relative z-10">
            {/* Soft v2 glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none -z-10" />

            <div className="w-full flex flex-col items-center text-center space-y-12">
                <h2 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter uppercase py-2 drop-shadow-md">
                    Escalar o <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary px-3 mt-2 inline-block">Sucesso</span>
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-5xl">
                    {/* Column 1 — Done */}
                    <div className={`flex-1 w-full transition-all duration-700 ease-out ${step >= 0 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                        }`}>
                        <div className="bg-card/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 space-y-6 hover:border-primary/50 transition-all duration-300">
                            <h3 className="text-xl font-bold uppercase tracking-tight text-white/60 flex items-center justify-center gap-3">
                                <Check className="w-6 h-6 text-green-500" aria-hidden="true" />
                                O que já fizemos
                            </h3>
                            <div className="space-y-3">
                                {done.map((item, i) => (
                                    <div key={i} className="flex justify-between items-center p-4 bg-black/40 rounded-xl">
                                        <span className="text-base text-white/50">{item.label}</span>
                                        <span className="text-2xl font-black text-white">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Arrow */}
                    <div className={`transition-all duration-500 my-4 md:my-0 ${step >= 1 ? "opacity-100 scale-100" : "opacity-0 scale-50"
                        }`}>
                        <div className="p-4 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                            <ArrowRight className="w-8 h-8 text-primary hidden md:block" />
                            <ArrowRight className="w-8 h-8 text-primary rotate-90 md:hidden" />
                        </div>
                    </div>

                    {/* Column 2 — Future */}
                    <div className={`flex-1 w-full transition-all duration-700 ease-out delay-200 ${step >= 1 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                        }`}>
                        <div className="relative bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 backdrop-blur-md rounded-3xl p-8 space-y-6 hover:border-primary/60 transition-all duration-300">
                            <h3 className="text-xl font-bold uppercase tracking-tight text-primary flex items-center justify-center gap-3">
                                <Target className="w-6 h-6" aria-hidden="true" />
                                Onde queremos chegar
                            </h3>
                            <div className="space-y-3">
                                {future.map((item, i) => (
                                    <div key={i} className="flex justify-between items-center p-4 bg-primary/10 rounded-xl border border-primary/10">
                                        <span className="text-base text-white/70">{item.label}</span>
                                        <span className="text-2xl font-black text-primary">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlideScaleV4;
