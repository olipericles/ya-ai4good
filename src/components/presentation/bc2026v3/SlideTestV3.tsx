import { type SlideMode } from "./SlideContainerV2";

interface SlideTestV3Props {
    isActive: boolean;
    mode?: SlideMode;
    slideNumber?: number;
    step?: number;
}

export const SLIDE_TEST_V3_STEPS = 3;

/**
 * In the brutalist/V3 design, we avoid playful bubbles/physics that look like app-games.
 * Instead, we show the funnel shrinking using raw blocks.
 */
const SlideTestV3 = ({ isActive, step = 0 }: SlideTestV3Props) => {
    if (!isActive) return null;

    const currentNumber = step === 0 ? 18 : step === 1 ? 10 : step === 2 ? 5 : 2;
    const labels = ["Mães contatadas", "Fizeram cadastro", "Engajadas de verdade", "Transformação real"];
    const currentLabel = labels[step] || labels[0];

    return (
        <div className="w-full h-full flex flex-col justify-center items-start px-[10vw] max-w-[1600px] mx-auto relative">
            <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">

                {/* Left Column: The Context */}
                <div className="md:col-span-5 flex flex-col justify-center">
                    <h2 className="text-xl font-mono text-primary mb-8 uppercase tracking-widest flex items-center gap-4">
                        <span className="w-8 h-px bg-primary inline-block"></span>
                        Piloto Salvador
                    </h2>
                    <h3 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter uppercase selection:bg-primary selection:text-black">
                        Validação<br />
                        <span className="text-primary tracking-wide">Extrema</span>
                    </h3>
                    <p className="mt-6 text-xl text-white/50 font-mono">Fev. 2026</p>
                </div>

                {/* Right Column: The Funnel Blocks */}
                <div className="md:col-span-7 flex flex-col justify-center gap-2">

                    <div className="bg-[#1A1A1A] p-8 border-l-8 border-white/20 relative overflow-hidden">

                        <div className="flex flex-col relative z-10 space-y-4">
                            <p className="text-sm font-mono text-primary uppercase font-bold tracking-widest">
                                Status da Operação
                            </p>

                            {/* Number explicitly transitioning via opacity */}
                            <h4
                                className="text-8xl md:text-[10rem] font-black tabular-nums tracking-tighter"
                                aria-live="polite"
                            >
                                {currentNumber}
                            </h4>

                            <p className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white/80">
                                {currentLabel}
                            </p>
                        </div>

                        {/* Progress "Bar" behind the text based on step */}
                        <div
                            className="absolute bottom-0 left-0 h-2 bg-primary transition-all duration-700 ease-out"
                            style={{
                                width: step === 0 ? '100%' : step === 1 ? '55%' : step === 2 ? '27%' : '11%'
                            }}
                        />
                    </div>

                    {/* Ghost data points to give scale to the brutalism layout */}
                    <div className={`grid grid-cols-3 gap-2 transition-opacity duration-300 delay-150 ${step >= 3 ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="bg-primary/10 border border-primary/20 p-4">
                            <p className="text-xs font-mono text-primary">CAC</p>
                            <p className="font-bold text-lg">R$ 0,00</p>
                        </div>
                        <div className="bg-primary/10 border border-primary/20 p-4">
                            <p className="text-xs font-mono text-primary">RETENÇÃO</p>
                            <p className="font-bold text-lg">100%</p>
                        </div>
                        <div className="bg-primary text-black p-4">
                            <p className="text-xs font-mono font-bold">VIABILIDADE</p>
                            <p className="font-black text-lg">PROVADA</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SlideTestV3;
