import SlideContainerV2, { type SlideMode } from "./SlideContainerV2";
import yaLogo from "@/assets/ya_logo_branco.svg";

interface SlideWaitingProps {
    isActive: boolean;
    mode?: SlideMode;
    slideNumber?: number;
    step?: number;
}

export const SLIDE_WAITING_STEPS = 0;

const SlideWaiting = ({ isActive, mode, slideNumber }: SlideWaitingProps) => {
    return (
        <SlideContainerV2 isActive={isActive} mode={mode} slideNumber={slideNumber}>
            <div className="relative w-full h-full flex flex-col items-center justify-center text-center px-4 overflow-hidden">
                {/* Efeitos de Fundo (Partículas Orgânicas Baseadas no Screenshot) */}
                <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-[#E55B3C] blur-[1px] opacity-80" />
                <div className="absolute top-[20%] right-1/4 w-2 h-2 rounded-full bg-[#8B3A8B] blur-[1px] opacity-80" />
                <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 rounded-full bg-[#D4AF37] blur-[1px] opacity-60" />
                <div className="absolute bottom-[30%] right-1/3 w-2.5 h-2.5 rounded-full bg-[#8B5A2B] blur-[1px] opacity-70" />

                {/* Brilho Suave de Fundo Centralizado (Baseado no Screenshot) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#E55B3C]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

                <div className="flex flex-col items-center justify-center space-y-16 z-10 w-full max-w-7xl px-8">
                    {/* Logo Yá Centrale */}
                    <div className="my-2 flex justify-center drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        <img src={yaLogo} alt="Yá Logo" className="h-32 sm:h-40 md:h-52 object-contain" />
                    </div>

                    {/* "Yá: mãe, em yorubá" */}
                    <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                        Yá: <span className="text-[#a04e8d]">mãe</span>, em yorubá.
                    </p>
                </div>
            </div>
        </SlideContainerV2>
    );
};

export default SlideWaiting;
