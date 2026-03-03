import { type SlideMode } from "../bc2026v2/SlideContainerV2";
import yaLogo from "@/assets/logos/ya_logo_branco.svg";
import { Heart } from "lucide-react";

interface SlideClosingV3Props {
    isActive: boolean;
    mode?: SlideMode;
    slideNumber?: number;
    step?: number;
}

export const SLIDE_CLOSING_V3_STEPS = 2;

const SlideClosingV3 = ({ isActive, step = 0 }: SlideClosingV3Props) => {
    if (!isActive) return null;

    return (
        <div className="w-full h-full flex flex-col justify-center items-start px-[10vw] max-w-[1600px] mx-auto relative">
            <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">

                {/* Left Column: Macro Impact */}
                <div className="md:col-span-6 flex flex-col justify-center">
                    <h2 className="text-xl font-mono text-primary mb-8 uppercase tracking-widest flex items-center gap-4">
                        <span className="w-8 h-px bg-primary inline-block"></span>
                        A Base
                    </h2>

                    <div className="space-y-4">
                        <h3 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter uppercase selection:bg-primary selection:text-black">
                            <span className="bg-primary text-black px-2">11</span> Milhões<br />
                            de Mães.
                        </h3>
                        <h3 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter uppercase text-white/40 selection:bg-primary selection:text-black">
                            <span className="bg-[#1A1A1A] text-white px-2">22</span> Milhões<br />
                            de Crianças.
                        </h3>
                    </div>
                </div>

                {/* Right Column: The Brand & Close */}
                <div className="md:col-span-6 flex flex-col items-start md:items-end justify-center border-l-4 border-white/20 pl-8 md:pl-16 gap-12">

                    <div className="relative inline-block w-full max-w-[300px]">
                        <img
                            src={yaLogo}
                            alt="Yá Logo"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    <div className="space-y-4 text-left md:text-right w-full">
                        <p className="text-2xl md:text-4xl font-bold uppercase tracking-tight">
                            Yá: <span className="text-primary">Mãe</span>, em yorubá.
                        </p>
                        <p className="text-sm font-mono text-white/50 uppercase tracking-widest flex flex-wrap gap-2 items-center md:justify-end">
                            <Heart className="w-4 h-4 text-primary" aria-hidden="true" />
                            Uma IA que cuida de quem cuida.
                        </p>
                    </div>

                    <div className={`w-full mt-4 flex md:justify-end transition-opacity duration-300 ${step >= 1 ? "opacity-100" : "opacity-0"
                        }`}>
                        <div className="bg-[#1A1A1A] p-6 border-r-8 border-primary text-left md:text-right w-full sm:w-auto">
                            <p className="text-3xl font-black uppercase text-white mb-2">Obrigada.</p>
                            <p className="text-sm font-mono text-primary uppercase">Adriele Ornellas — Apresentadora</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SlideClosingV3;
