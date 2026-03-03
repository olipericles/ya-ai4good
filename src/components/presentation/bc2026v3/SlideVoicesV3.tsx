import { type SlideMode } from "./SlideContainerV2";
import yaLogo from "@/assets/logos/ya_logo_branco.svg";

interface SlideVoicesV3Props {
    isActive: boolean;
    mode?: SlideMode;
    slideNumber?: number;
    step?: number;
}

export const SLIDE_VOICES_V3_STEPS = 2;

const SlideVoicesV3 = ({ isActive, step = 0 }: SlideVoicesV3Props) => {
    if (!isActive) return null;

    return (
        <div className="w-full h-full flex flex-col justify-center items-start px-[10vw] max-w-[1600px] mx-auto relative">
            <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">

                {/* Left Column */}
                <div className="md:col-span-5 flex flex-col justify-center">
                    <h2 className="text-xl font-mono text-primary mb-8 uppercase tracking-widest flex items-center gap-4">
                        <span className="w-8 h-px bg-primary inline-block"></span>
                        O Realógico
                    </h2>
                    <h3 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter uppercase selection:bg-primary selection:text-black">
                        As <span className="bg-primary text-black px-2">Vozes</span><br />
                    </h3>

                    <div className="mt-16 opacity-50 hidden md:block">
                        <img src={yaLogo} alt="Yá Logo" className="h-12 object-contain grayscale" />
                    </div>
                </div>

                {/* Right Column: Quotes */}
                <div className="md:col-span-7 flex flex-col justify-center gap-8">

                    {/* Quote 1 */}
                    <div className={`p-8 border-l-8 border-primary bg-[#111] transition-opacity duration-300 ${step >= 1 ? "opacity-100" : "opacity-0"
                        }`}>
                        <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-6">
                            "Eu achava que o problema era o salário.<br />
                            <span className="font-bold text-primary">Era o delivery.</span>"
                        </p>
                        <div className="space-y-1">
                            <p className="font-mono text-sm uppercase text-white/50 tracking-wider">Cegueira financeira crônica descoberta.</p>
                            <p className="font-mono text-sm uppercase font-bold text-white tracking-wider">R$ 300/mês redirecionados para mercado.</p>
                        </div>
                    </div>

                    {/* Quote 2 */}
                    <div className={`p-8 border-l-8 border-white bg-[#111] transition-opacity duration-300 ${step >= 2 ? "opacity-100" : "opacity-0"
                        }`}>
                        <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-6">
                            "Pela primeira vez em 3 anos,<br />
                            <span className="font-bold underline decoration-4 decoration-white">sobrou R$ 50 no fim do mês.</span>"
                        </p>
                        <div className="space-y-1">
                            <p className="font-mono text-sm uppercase text-white/50 tracking-wider">Ansiedade financeira mitigada.</p>
                            <p className="font-mono text-sm uppercase font-bold text-white tracking-wider">Início da primeira reserva de emergência.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SlideVoicesV3;
