import { type SlideMode } from "../bc2026v2/SlideContainerV2";
import yaLogo from "@/assets/logos/ya_logo_branco.svg";

interface SlideWaitingV4Props {
    isActive: boolean;
    mode?: SlideMode;
    slideNumber?: number;
    step?: number;
}

export const SLIDE_WAITING_V4_STEPS = 0;

const SlideWaitingV4 = ({ isActive }: SlideWaitingV4Props) => {
    if (!isActive) return null;

    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-background z-10 animate-in fade-in duration-1000">

            {/* V2 style subtle glow and particles */}
            <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center px-4 pointer-events-none">
                <div className="absolute top-[10%] left-[15%] w-1.5 h-1.5 rounded-full bg-primary blur-[1px] opacity-80" />
                <div className="absolute top-[25%] right-[20%] w-2 h-2 rounded-full bg-[#8B3A8B] blur-[1px] opacity-80" />
                <div className="absolute bottom-[20%] left-[25%] w-1.5 h-1.5 rounded-full bg-[#D4AF37] blur-[1px] opacity-60" />
                <div className="absolute bottom-[15%] right-[15%] w-2.5 h-2.5 rounded-full bg-[#E55B3C] blur-[1px] opacity-70" />

                {/* Central Soft Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] min-w-[600px] min-h-[400px] max-w-[1200px] bg-primary/5 blur-[120px] rounded-full -z-10" />
            </div>

            {/* Massive V3 style background typography for texture but subtle opacity */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center opacity-[0.03] pointer-events-none select-none -z-20">
                <span className="text-[30vw] font-black tracking-tighter uppercase whitespace-nowrap">
                    2026
                </span>
            </div>

            {/* Content Container */}
            <div className="relative flex flex-col items-center justify-center space-y-16 z-20 w-full max-w-7xl px-8">

                {/* The Logo */}
                <div className="flex justify-center drop-shadow-[0_0_20px_rgba(229,91,60,0.2)]">
                    <img
                        src={yaLogo}
                        alt="Yá Logo"
                        className="h-32 md:h-48 lg:h-64 object-contain"
                    />
                </div>

                {/* Minimalist translation block - matching V2 requirement but V4 robust font */}
                <div className="pt-6">
                    <p className="text-3xl md:text-5xl font-bold tracking-tight text-white drop-shadow-md">
                        Yá: <span className="text-primary">mãe</span>, em yorubá.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default SlideWaitingV4;
