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
                {/* Logo grande com pulse */}
                <div className="animate-pulse">
                    <img src={yaLogo} alt="Yá" className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64" />
                </div>

                {/* Slogan */}
                <div className="space-y-3">
                    <p className="text-xl sm:text-2xl md:text-3xl font-light text-primary">
                        Yá: mãe, em yorubá.
                    </p>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-lg">
                        A assistente que cuida de quem cuida de todo mundo.
                    </p>
                </div>
            </div>
        </SlideContainerV2>
    );
};

export default SlideWaiting;
