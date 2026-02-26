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
            <div className="flex flex-col items-center justify-center text-center space-y-10 min-h-[60vh]">
                {/* Stats */}
                <div className="space-y-2">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground">
                        11M mães. <span className="text-gradient">22M crianças.</span>
                    </h2>
                </div>

                {/* Logo com pulse e glow */}
                <div className="relative animate-pulse my-8 flex justify-center">
                    <img src={yaLogo} alt="Yá Logo" className="w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 object-contain" />
                    <div className="absolute inset-0 bg-primary/30 blur-[80px] -z-10 rounded-full" />
                </div>

                {/* Meaning */}
                <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light">
                    <span className="text-primary font-semibold tracking-wide">mãe</span>, em yorubá
                </p>

                {/* Tagline */}
                <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto">
                    A assistente que cuida de quem cuida de todo mundo.
                </p>
            </div>

            {/* Background elements */}
            <div className="hidden sm:block absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="hidden sm:block absolute bottom-20 left-20 w-48 h-48 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        </SlideContainerV2>
    );
};

export default SlideWaiting;
