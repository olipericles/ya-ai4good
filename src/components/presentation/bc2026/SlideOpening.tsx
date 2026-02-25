import SlideContainer from "./SlideContainer";
import yaLogo from "@/assets/ya-logo.png";

interface SlideOpeningProps {
    isActive: boolean;
    transition?: "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";
}

const SlideOpening = ({ isActive, transition = "fade-zoom" }: SlideOpeningProps) => {
    return (
        <SlideContainer isActive={isActive} transition={transition}>
            <div className="text-center space-y-8">
                {/* Main number */}
                <div className="space-y-4">
                    <h1 className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-primary via-orange-400 to-primary bg-clip-text text-transparent animate-pulse">
                        11 milhões
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                        de lares chefiados por mães solo no Brasil
                    </p>
                </div>

                {/* Growth stat */}
                <div className="mt-12 p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm max-w-xl mx-auto">
                    <p className="text-lg md:text-xl text-foreground/90">
                        <span className="text-primary font-bold">90%</span> do crescimento na última década:
                        <span className="text-primary font-semibold"> mulheres negras e pardas</span>
                    </p>
                </div>

                {/* Logo */}
                <div className="mt-8 flex justify-center">
                    <img src={yaLogo} alt="Yá Logo" className="h-24 md:h-32 object-contain" />
                </div>

                {/* Source */}
                <p className="text-sm text-muted-foreground/60 mt-8">
                    Fonte: FGV/IBRE 2022
                </p>
            </div>
        </SlideContainer>
    );
};

export default SlideOpening;
