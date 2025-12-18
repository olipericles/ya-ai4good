import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SlideOpening from "./v3/SlideOpening";
import SlideProblemDimension from "./v3/SlideProblemDimension";
import SlideProblemInvisible from "./v3/SlideProblemInvisible";
import SlideSolution from "./v3/SlideSolution";
import SlideHowItWorks from "./v3/SlideHowItWorks";
import SlideDifferential from "./v3/SlideDifferential";
import SlideTraction from "./v3/SlideTraction";
import SlideTeam from "./v3/SlideTeam";
import SlideClosing from "./v3/SlideClosing";

// V3: 9 slides
// 1. Opening
// 2. Problem Dimension
// 3. Problem Invisible
// 4. Solution
// 5. How It Works + WhatsApp (merged)
// 6. Differential (new - competitor comparison)
// 7. Traction (with photos)
// 8. Team
// 9. Closing

const TOTAL_SLIDES = 9;

const PresentationV3 = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const goToSlide = useCallback((index: number) => {
        if (isTransitioning) return;
        if (index < 0 || index >= TOTAL_SLIDES) return;

        setIsTransitioning(true);
        setCurrentSlide(index);

        setTimeout(() => {
            setIsTransitioning(false);
        }, 500);
    }, [isTransitioning]);

    const nextSlide = useCallback(() => {
        goToSlide(currentSlide + 1);
    }, [currentSlide, goToSlide]);

    const prevSlide = useCallback(() => {
        goToSlide(currentSlide - 1);
    }, [currentSlide, goToSlide]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
                e.preventDefault();
                nextSlide();
            } else if (e.key === "ArrowLeft") {
                e.preventDefault();
                prevSlide();
            } else if (e.key === "Home") {
                e.preventDefault();
                goToSlide(0);
            } else if (e.key === "End") {
                e.preventDefault();
                goToSlide(TOTAL_SLIDES - 1);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [nextSlide, prevSlide, goToSlide]);

    return (
        <div className="relative w-full h-screen bg-background overflow-hidden">
            {/* Slides - 9 total */}
            <div className="absolute inset-0">
                <SlideOpening isActive={currentSlide === 0} transition="fade-zoom" />
                <SlideProblemDimension isActive={currentSlide === 1} transition="slide-up" />
                <SlideProblemInvisible isActive={currentSlide === 2} transition="zoom-rotate" />
                <SlideSolution isActive={currentSlide === 3} transition="blur-scale" />
                <SlideHowItWorks isActive={currentSlide === 4} transition="slide-left" />
                <SlideDifferential isActive={currentSlide === 5} transition="fade-zoom" />
                <SlideTraction isActive={currentSlide === 6} transition="zoom-rotate" />
                <SlideTeam isActive={currentSlide === 7} transition="blur-scale" />
                <SlideClosing isActive={currentSlide === 8} transition="fade-zoom" />
            </div>

            {/* Navigation arrows */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    prevSlide();
                }}
                className={`absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-card/80 border border-border backdrop-blur-sm hover:bg-primary/20 hover:border-primary/50 transition-all ${currentSlide === 0 ? "opacity-30 pointer-events-none" : "opacity-100"
                    }`}
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button
                onClick={(e) => {
                    e.stopPropagation();
                    nextSlide();
                }}
                className={`absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-card/80 border border-border backdrop-blur-sm hover:bg-primary/20 hover:border-primary/50 transition-all ${currentSlide === TOTAL_SLIDES - 1 ? "opacity-30 pointer-events-none" : "opacity-100"
                    }`}
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2">
                {Array.from({ length: TOTAL_SLIDES }).map((_, index) => (
                    <button
                        key={index}
                        onClick={(e) => {
                            e.stopPropagation();
                            goToSlide(index);
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide
                            ? "w-8 bg-primary"
                            : "bg-foreground/20 hover:bg-foreground/40"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Slide counter */}
            <div className="absolute bottom-6 right-6 z-50 text-sm text-muted-foreground">
                {currentSlide + 1} / {TOTAL_SLIDES}
            </div>

            {/* Version badge */}
            <div className="absolute top-4 right-4 z-50 px-2 py-1 text-xs bg-secondary/20 text-secondary border border-secondary/30 rounded-full">
                v3
            </div>

            {/* Background gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.1),transparent_50%)] pointer-events-none" />
        </div>
    );
};

export default PresentationV3;
