import SlideContainer, { type SlideMode } from "./SlideContainer";
import AnimatedNumber from "../AnimatedNumber";
import HoverInfo from "@/components/ui/HoverInfo";
import yaLogo from "@/assets/ya-logo.png";

interface SlideOpeningProps {
    isActive: boolean;
    transition?: "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";
    mode?: SlideMode;
}

const SlideOpening = ({ isActive, transition = "fade-zoom", mode }: SlideOpeningProps) => {
    return (
        <SlideContainer isActive={isActive} transition={transition} mode={mode}>
            <div className="text-center space-y-6 sm:space-y-10">
                {/* Logo */}
                <div className={`flex justify-center ${isActive ? 'animate-fade-in' : 'opacity-0'}`}>
                    <div className="relative">
                        <img src={yaLogo} alt="Yá Logo" className="h-20 sm:h-28 md:h-36 object-contain" />
                        <div className="absolute inset-0 bg-primary/30 blur-[60px] -z-10 rounded-full" />
                    </div>
                </div>

                {/* Main number */}
                <div className={`space-y-4 ${isActive ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
                    <h1 className="text-5xl sm:text-7xl md:text-9xl font-black">
                        <span className="text-gradient">
                            <AnimatedNumber value={11} suffix="" isActive={isActive} duration={2000} />
                        </span>
                        <span className="text-foreground"> milhões</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto">
                        de lares chefiados por mães solo no Brasil
                    </p>
                </div>

                {/* Growth stat */}
                <div className={`relative ${isActive ? 'animate-fade-up delay-500' : 'opacity-0'}`}>
                    <div className="bg-gradient-to-r from-secondary/20 via-primary/20 to-secondary/20 rounded-2xl p-4 sm:p-6 md:p-8 border border-primary/20 max-w-xl mx-auto">
                        <p className="text-base sm:text-xl md:text-2xl leading-snug">
                            <HoverInfo tooltip="Crescimento 2012-2022 — Fonte: FGV/IBRE com base na PNAD Contínua">
                                <span className="text-primary font-bold text-2xl sm:text-3xl">90%</span>
                            </HoverInfo>{" "}
                            do crescimento na última década:
                            <br />
                            <span className="text-secondary font-semibold">mulheres negras e pardas</span>
                        </p>
                    </div>
                </div>

                {/* Source */}
                <p className={`text-xs sm:text-sm text-muted-foreground/50 ${isActive ? 'animate-fade-in delay-700' : 'opacity-0'}`}>
                    Fonte: FGV/IBRE 2022
                </p>
            </div>

            {/* Background elements */}
            <div className="hidden sm:block absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="hidden sm:block absolute bottom-20 left-20 w-48 h-48 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        </SlideContainer>
    );
};

export default SlideOpening;
