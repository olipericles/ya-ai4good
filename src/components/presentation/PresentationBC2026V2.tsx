import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SlideWaiting, { SLIDE_WAITING_STEPS } from "./bc2026v2/SlideWaiting";
import SlideImpact, { SLIDE_IMPACT_STEPS } from "./bc2026v2/SlideImpact";
import SlideProblemV2, { SLIDE_PROBLEM_V2_STEPS } from "./bc2026v2/SlideProblemV2";
import SlideSolutionV2, { SLIDE_SOLUTION_V2_STEPS } from "./bc2026v2/SlideSolutionV2";
import SlideTestV2, { SLIDE_TEST_V2_STEPS } from "./bc2026v2/SlideTestV2";
import SlideVoicesV2, { SLIDE_VOICES_V2_STEPS } from "./bc2026v2/SlideVoicesV2";
import SlideScaleV2, { SLIDE_SCALE_V2_STEPS } from "./bc2026v2/SlideScaleV2";
import SlidePath, { SLIDE_PATH_STEPS } from "./bc2026v2/SlidePath";
import SlideTeamV2, { SLIDE_TEAM_V2_STEPS } from "./bc2026v2/SlideTeamV2";
import SlideQRCode, { SLIDE_QRCODE_STEPS } from "./bc2026v2/SlideQRCode";

// Steps per slide — 0 means no sub-steps, just show the slide
const STEPS_PER_SLIDE = [
    SLIDE_WAITING_STEPS,    // 0: Waiting
    SLIDE_IMPACT_STEPS,     // 1: Impact (3)
    SLIDE_PROBLEM_V2_STEPS, // 2: Problem (4)
    SLIDE_SOLUTION_V2_STEPS,// 3: Solution (3)
    SLIDE_TEST_V2_STEPS,    // 4: Test (0)
    SLIDE_VOICES_V2_STEPS,  // 5: Voices (3)
    SLIDE_SCALE_V2_STEPS,   // 6: Scale (2)
    SLIDE_PATH_STEPS,       // 7: Path (4)
    SLIDE_TEAM_V2_STEPS,    // 8: Team (0)
    SLIDE_QRCODE_STEPS,     // 9: QR (0)
];

const TOTAL_SLIDES = STEPS_PER_SLIDE.length;

const PresentationBC2026V2 = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const goToSlide = useCallback((index: number) => {
        if (isTransitioning) return;
        if (index < 0 || index >= TOTAL_SLIDES) return;

        setIsTransitioning(true);
        setCurrentSlide(index);
        setCurrentStep(0);

        setTimeout(() => {
            setIsTransitioning(false);
        }, 500);
    }, [isTransitioning]);

    const next = useCallback(() => {
        if (isTransitioning) return;
        const maxSteps = STEPS_PER_SLIDE[currentSlide];

        if (currentStep < maxSteps) {
            // Advance sub-step within current slide
            setCurrentStep(prev => prev + 1);
        } else {
            // Advance to next slide
            goToSlide(currentSlide + 1);
        }
    }, [currentSlide, currentStep, isTransitioning, goToSlide]);

    const prev = useCallback(() => {
        if (isTransitioning) return;

        if (currentStep > 0) {
            // Go back one sub-step
            setCurrentStep(prev => prev - 1);
        } else if (currentSlide > 0) {
            // Go to previous slide (show all its steps)
            const prevSlideIndex = currentSlide - 1;
            setIsTransitioning(true);
            setCurrentSlide(prevSlideIndex);
            setCurrentStep(STEPS_PER_SLIDE[prevSlideIndex]);
            setTimeout(() => setIsTransitioning(false), 500);
        }
    }, [currentSlide, currentStep, isTransitioning]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
                e.preventDefault();
                next();
            } else if (e.key === "ArrowLeft") {
                e.preventDefault();
                prev();
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
    }, [next, prev, goToSlide]);

    return (
        <div
            className="relative w-full h-screen bg-background overflow-hidden cursor-pointer"
            onClick={next}
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.1),transparent_50%)] pointer-events-none" />

            {/* Slides */}
            <div className="absolute inset-0">
                <SlideWaiting isActive={currentSlide === 0} step={currentStep} slideNumber={0} />
                <SlideImpact isActive={currentSlide === 1} step={currentStep} slideNumber={1} />
                <SlideProblemV2 isActive={currentSlide === 2} step={currentStep} slideNumber={2} />
                <SlideSolutionV2 isActive={currentSlide === 3} step={currentStep} slideNumber={3} />
                <SlideTestV2 isActive={currentSlide === 4} step={currentStep} slideNumber={4} />
                <SlideVoicesV2 isActive={currentSlide === 5} step={currentStep} slideNumber={5} />
                <SlideScaleV2 isActive={currentSlide === 6} step={currentStep} slideNumber={6} />
                <SlidePath isActive={currentSlide === 7} step={currentStep} slideNumber={7} />
                <SlideTeamV2 isActive={currentSlide === 8} step={currentStep} slideNumber={8} />
                <SlideQRCode isActive={currentSlide === 9} step={currentStep} slideNumber={9} />
            </div>

            {/* Navigation arrows */}
            <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className={`absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-card/80 border border-border backdrop-blur-sm hover:bg-primary/20 transition-all ${currentSlide === 0 && currentStep === 0 ? "opacity-30 pointer-events-none" : "opacity-100"}`}
                aria-label="Anterior"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className={`absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-card/80 border border-border backdrop-blur-sm hover:bg-primary/20 transition-all ${currentSlide === TOTAL_SLIDES - 1 ? "opacity-30 pointer-events-none" : "opacity-100"}`}
                aria-label="Próximo"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5">
                {Array.from({ length: TOTAL_SLIDES }).map((_, index) => {
                    const maxSteps = STEPS_PER_SLIDE[index];
                    const stepsCompleted = index === currentSlide ? currentStep : (index < currentSlide ? maxSteps : 0);
                    const progress = maxSteps > 0 ? stepsCompleted / maxSteps : (index <= currentSlide ? 1 : 0);

                    return (
                        <button
                            key={index}
                            onClick={(e) => { e.stopPropagation(); goToSlide(index); }}
                            className="relative w-8 h-1.5 rounded-full bg-foreground/10 overflow-hidden hover:bg-foreground/20 transition-colors"
                            aria-label={`Slide ${index}`}
                        >
                            <div
                                className="absolute inset-y-0 left-0 bg-primary rounded-full transition-all duration-300"
                                style={{ width: `${progress * 100}%` }}
                            />
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default PresentationBC2026V2;
