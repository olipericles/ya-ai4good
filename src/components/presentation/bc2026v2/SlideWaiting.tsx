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
            <div className="flex flex-col items-center justify-center text-center space-y-8">
                {/* Logo with glow */}
                <div className={`relative ${isActive ? 'animate-scale-in' : 'opacity-0'}`}>
                    <img src={yaLogo} alt="Yá" className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 animate-pulse-slow" />
                    <div className="absolute inset-0 bg-primary/30 blur-[80px] -z-10 rounded-full" />
                </div>

                {/* Slogan */}
                <div className={`space-y-4 ${isActive ? 'animate-fade-up delay-300' : 'opacity-0'}`}>
                    <p className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        Yá: <span className="text-gradient">mãe</span>, em yorubá.
                    </p>
                    <p className="text-xl sm:text-2xl md:text-3xl text-foreground/60 max-w-2xl">
                        A assistente que cuida de quem cuida de todo mundo.
                    </p>
                </div>
            </div>

            {/* Background elements */}
            <div className="hidden sm:block absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="hidden sm:block absolute bottom-20 left-20 w-48 h-48 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        </SlideContainerV2>
    );
};

export default SlideWaiting;
