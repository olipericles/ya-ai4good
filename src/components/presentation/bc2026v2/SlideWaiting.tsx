import SlideContainerV2, { type SlideMode } from "./SlideContainerV2";
import yaLogo from "@/assets/ya-logo.png";

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
            <div className="text-center space-y-10 flex flex-col items-center justify-center min-h-[60vh] h-full">
                {/* Stats */}
                <div className="space-y-2">
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground">
                        11M mães. 22M crianças.
                    </h2>
                </div>

                {/* Logo */}
                <div className="my-8 flex justify-center">
                    <img src={yaLogo} alt="Yá Logo" className="h-32 md:h-48 object-contain" />
                </div>

                {/* Meaning */}
                <p className="text-xl md:text-2xl text-muted-foreground">
                    <span className="text-primary font-semibold">mãe</span>, em yorubá
                </p>

                {/* Tagline */}
                <p className="text-lg md:text-xl text-foreground/80 max-w-xl mx-auto">
                    Uma IA que cuida de quem cuida de todo mundo.
                </p>
            </div>
        </SlideContainerV2>
    );
};

export default SlideWaiting;
