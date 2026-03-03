import { type SlideMode } from "./SlideContainerV2"; // We can reuse the type

interface SlideImpactV3Props {
    isActive: boolean;
    mode?: SlideMode;
    slideNumber?: number;
    step?: number;
}

export const SLIDE_IMPACT_V3_STEPS = 3;

const SlideImpactV3 = ({ isActive, step = 0 }: SlideImpactV3Props) => {
    // If not active, hide it instantly to avoid performance layout reads (Vercel rule)
    if (!isActive) return null;

    return (
        <div className="w-full h-full flex flex-col justify-center items-start px-[10vw] max-w-[1600px] mx-auto relative">

            {/* The aesthetic direction here is 'Editorial Brutalism'.
                - Sharp edges, high contrast.
                - No gradients on the box, just pure solid color blocks.
                - Using font-mono for metrics to feel raw and data-driven.
            */}

            <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 relative">

                {/* Left Column: The Narrative */}
                <div className="md:col-span-5 flex flex-col justify-center">
                    <h2 className="text-xl font-mono text-primary mb-8 uppercase tracking-widest flex items-center gap-4">
                        <span className="w-8 h-px bg-primary inline-block"></span>
                        O Impacto
                    </h2>

                    <div className="space-y-6">
                        <p className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
                            Isso tem rosto e nome.
                        </p>
                        <p className="text-xl md:text-2xl text-white/50 font-medium leading-relaxed max-w-lg">
                            Elas sabem fazer muito com pouco. Só não sabem para onde o dinheiro vai.
                        </p>
                    </div>
                </div>

                {/* Right Column: The Brutal Data */}
                <div className="md:col-span-7 flex flex-col gap-6 justify-center">

                    <div
                        className={`border-l-8 border-primary bg-[#1A1A1A] p-8 md:p-12 mb-6 transition-opacity duration-300 ${step >= 1 ? "opacity-100" : "opacity-0"
                            }`}
                        aria-live="polite"
                    >
                        <h3 className="text-7xl md:text-9xl font-black tabular-nums tracking-tighter text-white leading-none">11M</h3>
                        <p className="text-xl md:text-3xl font-bold text-primary mt-4 uppercase tracking-wide">Mães Solo Brasileiras</p>
                    </div>

                    {/* Data Base 2 */}
                    <div
                        className={`flex flex-col md:flex-row gap-6 transition-opacity duration-300 ${step >= 2 ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <div className="flex-1 bg-[#1A1A1A] border border-white/10 p-8">
                            <p className="text-sm font-mono text-white/40 uppercase mb-4">Volume Demográfico</p>
                            <p className="text-2xl md:text-3xl font-bold leading-tight">População maior que o país inteiro de <span className="text-primary underline decoration-2 underline-offset-8">Portugal.</span></p>
                        </div>

                        <div className={`flex-1 bg-primary p-8 text-black transition-opacity duration-300 ${step >= 3 ? "opacity-100" : "opacity-0"
                            }`}>
                            <p className="text-sm font-mono text-black/60 uppercase mb-4 font-bold">Recorte Racial</p>
                            <h4 className="text-6xl md:text-7xl font-black tabular-nums tracking-tighter leading-none">90%</h4>
                            <p className="text-xl font-bold mt-2 leading-tight">Deste crescimento na última década são mulheres negras.</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default SlideImpactV3;
