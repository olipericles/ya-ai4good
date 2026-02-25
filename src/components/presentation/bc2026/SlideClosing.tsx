import SlideContainer, { type SlideMode } from "./SlideContainer";
import yaLogo from "@/assets/ya_logo_branco.svg";
import { Heart } from "lucide-react";

interface SlideClosingProps {
    isActive: boolean;
    transition?: "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";
    mode?: SlideMode;
    slideNumber?: number;
}

const SlideClosing = ({ isActive, transition = "fade-zoom", mode, slideNumber = 9 }: SlideClosingProps) => {
    return (
        <SlideContainer isActive={isActive} transition={transition} mode={mode} slideNumber={slideNumber}>
            <div className="flex flex-col items-center justify-center h-full gap-8 sm:gap-12 md:gap-16">
                {/* Impact numbers */}
                <div className={`text-center ${isActive ? 'animate-fade-up' : 'opacity-0'}`}>
                    <p className="text-xl sm:text-2xl md:text-3xl">
                        <span className="text-gradient font-bold">11 milhões</span> de mães.{" "}
                        <span className="text-gradient font-bold">22 milhões</span> de crianças.
                    </p>
                </div>

                {/* Logo with glow */}
                <div className={`relative inline-block ${isActive ? 'animate-scale-in delay-200' : 'opacity-0'}`}>
                    <img
                        src={yaLogo}
                        alt="Yá Logo"
                        className="h-24 sm:h-32 md:h-48 object-contain mx-auto"
                    />
                    <div className="absolute inset-0 bg-primary/30 blur-[80px] -z-10 rounded-full" />
                </div>

                {/* Main message */}
                <div className={`text-center space-y-4 sm:space-y-6 ${isActive ? 'animate-fade-up delay-300' : 'opacity-0'}`}>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
                        Yá: <span className="text-gradient">mãe</span>, em yorubá.
                    </h2>
                </div>

                {/* Tagline */}
                <div className={`${isActive ? 'animate-fade-in delay-500' : 'opacity-0'}`}>
                    <div className="inline-flex items-center gap-3 text-primary">
                        <Heart className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" fill="currentColor" />
                        <span className="text-base sm:text-lg md:text-xl font-medium">Uma IA que cuida de quem cuida de todo mundo</span>
                        <Heart className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" fill="currentColor" />
                    </div>
                </div>

                {/* Presenter Credit */}
                <div className={`${isActive ? 'animate-fade-up delay-700' : 'opacity-0'}`}>
                    <div className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-4 sm:p-6 border border-primary/20 mt-4 text-center">
                        <p className="text-xl sm:text-2xl font-bold text-gradient mb-1">
                            Obrigada!
                        </p>
                        <p className="text-foreground/60 text-sm sm:text-base">
                            Adriele Ornellas — Apresentadora
                        </p>
                    </div>
                </div>
            </div>

            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-10 left-10 w-2 h-2 bg-primary rounded-full animate-pulse" />
                <div className="absolute top-20 right-20 w-3 h-3 bg-secondary rounded-full animate-pulse delay-200" />
                <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-accent rounded-full animate-pulse delay-400" />
                <div className="absolute bottom-40 right-1/4 w-4 h-4 bg-primary/50 rounded-full animate-pulse delay-300" />
            </div>
        </SlideContainer>
    );
};

export default SlideClosing;
