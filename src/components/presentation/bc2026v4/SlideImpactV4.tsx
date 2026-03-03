import { type SlideMode } from "../bc2026v2/SlideContainerV2";

interface SlideImpactV4Props {
    isActive: boolean;
    mode?: SlideMode;
    slideNumber?: number;
    step?: number;
}

export const SLIDE_IMPACT_V4_STEPS = 3;

const SlideImpactV4 = ({ isActive, step = 0 }: SlideImpactV4Props) => {
    // If not active, hide it instantly
    if (!isActive) return null;

    return (
        <div className="w-full h-full flex flex-col justify-center items-start px-[10vw] max-w-[1600px] mx-auto relative z-10">

            <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 relative">

                {/* Left Column: The Narrative */}
                <div className="md:col-span-5 flex flex-col justify-center">
                    <h2 className="text-xl font-mono text-primary mb-8 uppercase tracking-widest flex items-center gap-4">
                        <span className="w-8 h-px bg-primary inline-block"></span>
                        A realidade
                    </h2>

                    <div className="space-y-6">
                        <p className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-white drop-shadow-md">
                            Milagres não têm planilha
                        </p>
                        <p className="text-xl md:text-2xl text-foreground/60 font-medium leading-relaxed max-w-lg">
                            Elas sabem fazer muito com pouco. Só não sabem para onde o dinheiro vai.
                        </p>
                    </div>
                </div>

                {/* Right Column: The "Soft Brutalism" Data */}
                <div className="md:col-span-7 flex flex-col gap-6 justify-center">

                    {/* Data Block 1 - Glowing Glassmorphism but with V3 Typography */}
                    <div
                        className={`relative border border-primary/30 rounded-3xl bg-card/40 backdrop-blur-md p-8 md:p-12 transition-all duration-500 hover:border-primary/60 ${step >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                        aria-live="polite"
                    >
                        {/* Glow effect behind */}
                        <div className="absolute inset-0 bg-primary/10 blur-[40px] -z-10 rounded-full" />

                        <h3 className="text-7xl md:text-9xl font-black tabular-nums tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50 leading-none">
                            11M
                        </h3>
                        <p className="text-xl md:text-3xl font-bold text-primary mt-4 uppercase tracking-normal">
                            Mães Solo Brasileiras
                        </p>
                    </div>

                    {/* Data Base 2 */}
                    <div
                        className={`flex flex-col md:flex-row gap-6 transition-all duration-500 delay-100 ${step >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        <div className="flex-1 bg-card/40 backdrop-blur-sm border border-border rounded-3xl p-8 hover:bg-card/60 transition-colors">
                            <p className="text-sm font-mono text-primary/80 uppercase mb-4">Volume Demográfico</p>
                            <p className="text-2xl md:text-3xl font-bold leading-tight">
                                População maior que o país inteiro de <span className="text-primary underline decoration-2 underline-offset-8">Portugal.</span>
                            </p>
                        </div>

                        <div className={`relative flex-1 p-8 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/20 to-primary/5 transition-all duration-500 delay-200 ${step >= 3 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                            }`}>
                            <p className="text-sm font-mono text-white/60 uppercase mb-4 font-bold">Recorte Racial</p>
                            <h4 className="text-6xl md:text-7xl font-black tabular-nums tracking-tighter text-white">90%</h4>
                            <p className="text-lg font-bold mt-2 leading-tight text-white/80">
                                Deste crescimento na última década são mulheres negras.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default SlideImpactV4;
