import SlideContainer from "./SlideContainer";
import yaLogo from "@/assets/ya-logo.png";

interface SlideClosingProps {
    isActive: boolean;
    transition?: "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";
}

const SlideClosing = ({ isActive, transition = "fade-zoom" }: SlideClosingProps) => {
    return (
        <SlideContainer isActive={isActive} transition={transition}>
            <div className="text-center space-y-10 flex flex-col items-center justify-center min-h-[60vh]">
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

                {/* Thanks */}
                <div className="mt-12">
                    <p className="text-3xl md:text-4xl font-bold text-primary">
                        Obrigada.
                    </p>
                </div>
            </div>
        </SlideContainer>
    );
};

export default SlideClosing;
