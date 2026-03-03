import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SlideOpeningV3, { SLIDE_OPENING_V3_STEPS } from "./bc2026v3/SlideOpeningV3";
import SlideImpactV3, { SLIDE_IMPACT_V3_STEPS } from "./bc2026v3/SlideImpactV3";
import SlideProblemV3, { SLIDE_PROBLEM_V3_STEPS } from "./bc2026v3/SlideProblemV3";
import SlideSolutionV3, { SLIDE_SOLUTION_V3_STEPS } from "./bc2026v3/SlideSolutionV3";
import SlideTestV3, { SLIDE_TEST_V3_STEPS } from "./bc2026v3/SlideTestV3";
import SlideVoicesV3, { SLIDE_VOICES_V3_STEPS } from "./bc2026v3/SlideVoicesV3";
import SlideScaleV3, { SLIDE_SCALE_V3_STEPS } from "./bc2026v3/SlideScaleV3";
import SlidePathV3, { SLIDE_PATH_V3_STEPS } from "./bc2026v3/SlidePathV3";
import SlideVisionV3, { SLIDE_VISION_V3_STEPS } from "./bc2026v3/SlideVisionV3";
import SlideTeamV3, { SLIDE_TEAM_V3_STEPS } from "./bc2026v3/SlideTeamV3";
import SlideClosingV3, { SLIDE_CLOSING_V3_STEPS } from "./bc2026v3/SlideClosingV3";
import SlideDemoV3, { SLIDE_DEMO_V3_STEPS } from "./bc2026v3/SlideDemoV3";

const STEPS_PER_SLIDE = [
    SLIDE_OPENING_V3_STEPS, // 0: Waiting/Opening
    SLIDE_IMPACT_V3_STEPS,  // 1: Impact
    SLIDE_PROBLEM_V3_STEPS, // 2: Problem
    SLIDE_SOLUTION_V3_STEPS,// 3: Solution
    SLIDE_TEST_V3_STEPS,    // 4: Test
    SLIDE_VOICES_V3_STEPS,  // 5: Voices
    SLIDE_SCALE_V3_STEPS,   // 6: Scale
    SLIDE_PATH_V3_STEPS,    // 7: Path
    SLIDE_VISION_V3_STEPS,  // 8: Vision (Using this in the V3 flow before Team, as it replaced some parts)
    SLIDE_TEAM_V3_STEPS,    // 9: Team
    SLIDE_CLOSING_V3_STEPS, // 10: Closing
    SLIDE_DEMO_V3_STEPS,    // 11: Demo / QR Code
];

const TOTAL_SLIDES = STEPS_PER_SLIDE.length;

const PresentationBC2026V3 = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const next = useCallback(() => {
        if (isTransitioning) return;
        const maxSteps = STEPS_PER_SLIDE[currentSlide];
        if (currentStep < maxSteps) {
            setCurrentStep(prev => prev + 1);
        } else if (currentSlide < TOTAL_SLIDES - 1) {
            setIsTransitioning(true);
            setCurrentSlide(prev => prev + 1);
            setCurrentStep(0);
            setTimeout(() => setIsTransitioning(false), 300);
        }
    }, [currentSlide, currentStep, isTransitioning]);

    const prev = useCallback(() => {
        if (isTransitioning) return;
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        } else if (currentSlide > 0) {
            const prevSlideIndex = currentSlide - 1;
            setIsTransitioning(true);
            setCurrentSlide(prevSlideIndex);
            setCurrentStep(STEPS_PER_SLIDE[prevSlideIndex]);
            setTimeout(() => setIsTransitioning(false), 300);
        }
    }, [currentSlide, currentStep, isTransitioning]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
                e.preventDefault(); next();
            } else if (e.key === "ArrowLeft") {
                e.preventDefault(); prev();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [next, prev]);

    return (
        <div className="relative w-full h-screen bg-[#0A0A0A] overflow-hidden text-white font-sans selection:bg-primary selection:text-white">
            {/* Header / Identity Anchor */}
            <header className="absolute top-0 left-0 w-full p-8 z-50 flex justify-between items-start pointer-events-none">
                <div className="border-l-4 border-primary pl-4">
                    <h1 className="text-2xl font-black tracking-tighter uppercase leading-none">YÁ</h1>
                    <p className="text-[10px] font-mono text-primary uppercase tracking-[0.2em] mt-1">AI4Good 2026</p>
                </div>
                <div className="text-right">
                    <p className="text-xs font-mono text-white/40 uppercase tracking-widest">Confidential / V3 PoC</p>
                </div>
            </header>

            {/* Slide Content Area */}
            <main className="absolute inset-0 flex items-center justify-center">
                <SlideOpeningV3 isActive={currentSlide === 0} step={currentStep} />
                <SlideImpactV3 isActive={currentSlide === 1} step={currentStep} />
                <SlideProblemV3 isActive={currentSlide === 2} step={currentStep} />
                <SlideSolutionV3 isActive={currentSlide === 3} step={currentStep} />
                <SlideTestV3 isActive={currentSlide === 4} step={currentStep} />
                <SlideVoicesV3 isActive={currentSlide === 5} step={currentStep} />
                <SlideScaleV3 isActive={currentSlide === 6} step={currentStep} />
                <SlidePathV3 isActive={currentSlide === 7} step={currentStep} />
                <SlideVisionV3 isActive={currentSlide === 8} step={currentStep} />
                <SlideTeamV3 isActive={currentSlide === 9} step={currentStep} />
                <SlideClosingV3 isActive={currentSlide === 10} step={currentStep} />
                <SlideDemoV3 isActive={currentSlide === 11} step={currentStep} />
            </main>

            {/* Navigation satisfying web-design-guidelines (focus rings, explicit aria-labels, semantic buttons) */}
            <div className="absolute bottom-8 right-8 z-50 flex gap-4">
                <button
                    onClick={(e) => { e.stopPropagation(); prev(); }}
                    aria-label="Slide ou sub-passo anterior"
                    disabled={currentSlide === 0 && currentStep === 0}
                    className="p-4 rounded-none bg-white/5 border border-white/20 text-white hover:bg-primary hover:border-primary hover:text-white focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none transition-colors duration-200"
                >
                    <ChevronLeft className="w-6 h-6" aria-hidden="true" />
                </button>
                <button
                    onClick={(e) => { e.stopPropagation(); next(); }}
                    aria-label="Próximo slide ou sub-passo"
                    disabled={currentSlide === TOTAL_SLIDES - 1 && currentStep === STEPS_PER_SLIDE[currentSlide]}
                    className="p-4 rounded-none bg-white/5 border border-white/20 text-white hover:bg-primary hover:border-primary hover:text-white focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none disabled:opacity-30 disabled:pointer-events-none transition-colors duration-200"
                >
                    <ChevronRight className="w-6 h-6" aria-hidden="true" />
                </button>
            </div>
        </div>
    );
};

export default PresentationBC2026V3;
