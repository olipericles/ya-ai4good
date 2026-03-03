import { type SlideMode } from "../bc2026v2/SlideContainerV2";
import yaLogo from "@/assets/logos/ya_logo_branco.svg";

interface SlideOpeningV3Props {
    isActive: boolean;
    mode?: SlideMode;
    slideNumber?: number;
    step?: number;
}

export const SLIDE_OPENING_V3_STEPS = 0;

const SlideOpeningV3 = ({ isActive }: SlideOpeningV3Props) => {
    if (!isActive) return null;

    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-[#0A0A0A]">

            {/* Massive background typography for texture */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center opacity-5 pointer-events-none select-none">
                <span className="text-[30vw] font-black tracking-tighter uppercase whitespace-nowrap">
                    2026
                </span>
            </div>

            {/* The Logo */}
            <div className="relative z-10 flex flex-col items-center animate-fade-up">
                <img
                    src={yaLogo}
                    alt="Yá Logo"
                    className="h-32 md:h-48 lg:h-64 object-contain filter drop-shadow-[0_0_15px_rgba(226,107,88,0.3)]"
                />

                {/* Minimalist subtitle block */}
                <div className="mt-16 border-t border-primary/30 pt-6 px-12">
                    <p className="text-xl md:text-2xl font-mono text-white/50 uppercase tracking-widest text-center">
                        AI4Good <span className="text-primary font-bold">Pitch Deck</span>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default SlideOpeningV3;
