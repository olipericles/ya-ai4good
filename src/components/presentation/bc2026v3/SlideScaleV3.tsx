import { type SlideMode } from "../bc2026v2/SlideContainerV2";

interface SlideScaleV3Props {
    isActive: boolean;
    mode?: SlideMode;
    slideNumber?: number;
    step?: number;
}

export const SLIDE_SCALE_V3_STEPS = 2;

const SlideScaleV3 = ({ isActive, step = 0 }: SlideScaleV3Props) => {
    if (!isActive) return null;

    const done = [
        { label: "Mães no piloto", value: "18" },
        { label: "Custo de Aquisição", value: "R$ 0,00" },
        { label: "Vidas Transformadas", value: "2" },
    ];

    const future = [
        { label: "Meta Escala Mínima", value: "1.000" },
        { label: "Investimento Estimado", value: "$3.000" },
        { label: "Projeção Conversão (11%)", value: "~ 110" },
    ];

    return (
        <div className="w-full h-full flex flex-col justify-center items-start px-[10vw] max-w-[1600px] mx-auto relative">
            <div className="w-full mb-12">
                <h2 className="text-xl font-mono text-primary mb-4 uppercase tracking-widest flex items-center gap-4">
                    <span className="w-8 h-px bg-primary inline-block"></span>
                    Alavancagem
                </h2>
                <h3 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter uppercase selection:bg-primary selection:text-black">
                    Escalar o <span className="bg-primary text-black px-2">Sucesso</span>.
                </h3>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/20">

                {/* Column 1 — Done */}
                <div className={`p-10 border-r border-white/20 bg-[#111] transition-opacity duration-300 ${step >= 1 ? "opacity-100" : "opacity-0"
                    }`}>
                    <h4 className="text-2xl font-bold uppercase mb-8 pb-4 border-b border-white/10 text-white/50">Baseline</h4>
                    <div className="space-y-4">
                        {done.map((item, i) => (
                            <div key={i} className="flex justify-between items-end border-b border-white/5 pb-2">
                                <span className="text-sm font-mono text-white/40 uppercase">{item.label}</span>
                                <span className="text-2xl font-bold">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Column 2 — Future */}
                <div className={`p-10 bg-primary text-black transition-opacity duration-300 ${step >= 2 ? "opacity-100" : "opacity-0"
                    }`}>
                    <h4 className="text-2xl font-bold uppercase mb-8 pb-4 border-b border-black/10">Projeção</h4>
                    <div className="space-y-4">
                        {future.map((item, i) => (
                            <div key={i} className="flex justify-between items-end border-b border-black/10 pb-2">
                                <span className="text-sm font-mono uppercase font-bold">{item.label}</span>
                                <span className="text-2xl font-black">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlideScaleV3;
