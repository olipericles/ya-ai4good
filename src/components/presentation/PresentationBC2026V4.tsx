import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import yaLogo from "@/assets/logos/ya_logo_branco.svg";

import SlideWaitingV4, { SLIDE_WAITING_V4_STEPS } from "./bc2026v4/SlideWaitingV4";
import SlideImpactV4, { SLIDE_IMPACT_V4_STEPS } from "./bc2026v4/SlideImpactV4";
import SlideProblemV4, { SLIDE_PROBLEM_V4_STEPS } from "./bc2026v4/SlideProblemV4";
import SlideSolutionV4, { SLIDE_SOLUTION_V4_STEPS } from "./bc2026v4/SlideSolutionV4";
import SlideTestV4, { SLIDE_TEST_V4_STEPS } from "./bc2026v4/SlideTestV4";
import SlideVoicesV4, { SLIDE_VOICES_V4_STEPS } from "./bc2026v4/SlideVoicesV4";
import SlideScaleV4, { SLIDE_SCALE_V4_STEPS } from "./bc2026v4/SlideScaleV4";
import SlidePathV4, { SLIDE_PATH_V4_STEPS } from "./bc2026v4/SlidePathV4";
import SlideTeamV4, { SLIDE_TEAM_V4_STEPS } from "./bc2026v4/SlideTeamV4";
import SlideQRCodeV4, { SLIDE_QRCODE_V4_STEPS } from "./bc2026v4/SlideQRCodeV4";

const STEPS_PER_SLIDE = [
    SLIDE_WAITING_V4_STEPS, // 0
    SLIDE_IMPACT_V4_STEPS,  // 1
    SLIDE_PROBLEM_V4_STEPS, // 2
    SLIDE_SOLUTION_V4_STEPS,// 3
    SLIDE_TEST_V4_STEPS,    // 4
    SLIDE_VOICES_V4_STEPS,  // 5
    SLIDE_SCALE_V4_STEPS,   // 6
    SLIDE_PATH_V4_STEPS,    // 7
    SLIDE_TEAM_V4_STEPS,    // 8
    SLIDE_QRCODE_V4_STEPS,  // 9
];

const TOTAL_SLIDES = STEPS_PER_SLIDE.length;

const PresentationBC2026V4 = () => {
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
        <div className="relative w-full h-screen bg-background overflow-hidden text-white font-sans selection:bg-primary selection:text-black">

            {/* High-Contrast Anchor Header (Except on Intro/Outro) */}
            {currentSlide > 0 && currentSlide < TOTAL_SLIDES - 1 && (
                <header className="absolute top-0 left-0 w-full p-8 z-50 flex justify-between items-start pointer-events-none transition-opacity duration-1000">
                    <div className="flex items-center gap-3">
                        <img src={yaLogo} alt="Yá Logo" className="h-8 object-contain" />
                        <div className="hidden sm:flex items-center pl-3 border-l-[2px] border-primary">
                            <p className="text-[12px] font-mono text-primary uppercase tracking-[0.2em] font-bold leading-none">AI4GOOD 2026</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-xs font-mono text-white/40 uppercase tracking-widest">Confidencial</p>
                    </div>
                </header>
            )}

            {/* Slide Content Area */}
            <main className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out">
                {currentSlide === 0 && <SlideWaitingV4 isActive={true} step={currentStep} />}
                {currentSlide === 1 && <SlideImpactV4 isActive={true} step={currentStep} />}
                {currentSlide === 2 && <SlideProblemV4 isActive={true} step={currentStep} />}
                {currentSlide === 3 && <SlideSolutionV4 isActive={true} step={currentStep} />}
                {currentSlide === 4 && <SlideTestV4 isActive={true} step={currentStep} />}
                {currentSlide === 5 && <SlideVoicesV4 isActive={true} step={currentStep} />}
                {currentSlide === 6 && <SlideScaleV4 isActive={true} step={currentStep} />}
                {currentSlide === 7 && <SlidePathV4 isActive={true} step={currentStep} />}
                {currentSlide === 8 && <SlideTeamV4 isActive={true} step={currentStep} />}
                {currentSlide === 9 && <SlideQRCodeV4 isActive={true} step={currentStep} />}
            </main>

            {/* Navigation satisfying web-design-guidelines (focus rings, explicit aria-labels, semantic buttons) */}
            <div className="absolute bottom-8 right-8 z-50 flex gap-4">
                <button
                    onClick={(e) => { e.stopPropagation(); prev(); }}
                    aria-label="Slide ou sub-passo anterior"
                    disabled={currentSlide === 0 && currentStep === 0}
                    className="p-3 rounded-full bg-card/40 border border-white/10 backdrop-blur-md text-white hover:bg-primary hover:border-primary hover:text-black focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none disabled:opacity-0 disabled:pointer-events-none transition-all duration-300 shadow-xl shadow-black/40"
                >
                    <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                </button>
                <button
                    onClick={(e) => { e.stopPropagation(); next(); }}
                    aria-label="Próximo slide ou sub-passo"
                    disabled={currentSlide === TOTAL_SLIDES - 1 && currentStep === STEPS_PER_SLIDE[currentSlide]}
                    className="p-3 rounded-full bg-card/40 border border-white/10 backdrop-blur-md text-white hover:bg-primary hover:border-primary hover:text-black focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none disabled:opacity-0 disabled:pointer-events-none transition-all duration-300 shadow-xl shadow-black/40"
                >
                    <ChevronRight className="w-5 h-5" aria-hidden="true" />
                </button>
            </div>

            {/* Progress Indicator */}
            <div className="absolute bottom-0 left-0 h-1 bg-primary/20 transition-all duration-300 z-50" style={{ width: `${(currentSlide / (TOTAL_SLIDES - 1)) * 100}%` }}>
                <div className="h-full bg-primary shadow-[0_0_10px_rgba(229,91,60,0.5)] w-full" />
            </div>

        </div>
    );
};

export default PresentationBC2026V4;
