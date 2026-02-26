import { useState, useEffect, useCallback, useMemo } from "react";
import { ChevronLeft, ChevronRight, Clock, Volume2, User } from "lucide-react";
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
import roteiroRaw from "@/assets/docs/roteiro-v2.md?raw";
import { parseRoteiro } from "@/lib/parseRoteiro";

const STEPS_PER_SLIDE = [
    SLIDE_WAITING_STEPS, SLIDE_IMPACT_STEPS, SLIDE_PROBLEM_V2_STEPS,
    SLIDE_SOLUTION_V2_STEPS, SLIDE_TEST_V2_STEPS, SLIDE_VOICES_V2_STEPS,
    SLIDE_SCALE_V2_STEPS, SLIDE_PATH_STEPS, SLIDE_TEAM_V2_STEPS, SLIDE_QRCODE_STEPS,
];

const TOTAL_SLIDES = STEPS_PER_SLIDE.length;

const PresentationBC2026V2Training = () => {
    const SCRIPTS = useMemo(() => parseRoteiro(roteiroRaw), []);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const goToSlide = useCallback((index: number) => {
        if (isTransitioning) return;
        if (index < 0 || index >= TOTAL_SLIDES) return;
        setIsTransitioning(true);
        setCurrentSlide(index);
        setCurrentStep(0);
        setTimeout(() => setIsTransitioning(false), 500);
    }, [isTransitioning]);

    const next = useCallback(() => {
        if (isTransitioning) return;
        const maxSteps = STEPS_PER_SLIDE[currentSlide];
        if (currentStep < maxSteps) {
            setCurrentStep(prev => prev + 1);
        } else {
            goToSlide(currentSlide + 1);
        }
    }, [currentSlide, currentStep, isTransitioning, goToSlide]);

    const prev = useCallback(() => {
        if (isTransitioning) return;
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        } else if (currentSlide > 0) {
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
                e.preventDefault(); next();
            } else if (e.key === "ArrowLeft") {
                e.preventDefault(); prev();
            } else if (e.key === "Home") {
                e.preventDefault(); goToSlide(0);
            } else if (e.key === "End") {
                e.preventDefault(); goToSlide(TOTAL_SLIDES - 1);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [next, prev, goToSlide]);

    const currentScript = SCRIPTS[currentSlide];

    return (
        <div className="relative w-full h-screen bg-background overflow-hidden flex">
            {/* Slide area — 60% */}
            <div className="relative w-[60%] h-full">
                <div className="absolute inset-0">
                    <SlideWaiting isActive={currentSlide === 0} step={currentStep} />
                    <SlideImpact isActive={currentSlide === 1} step={currentStep} />
                    <SlideProblemV2 isActive={currentSlide === 2} step={currentStep} />
                    <SlideSolutionV2 isActive={currentSlide === 3} step={currentStep} />
                    <SlideTestV2 isActive={currentSlide === 4} step={currentStep} />
                    <SlideVoicesV2 isActive={currentSlide === 5} step={currentStep} />
                    <SlideScaleV2 isActive={currentSlide === 6} step={currentStep} />
                    <SlidePath isActive={currentSlide === 7} step={currentStep} />
                    <SlideTeamV2 isActive={currentSlide === 8} step={currentStep} />
                    <SlideQRCode isActive={currentSlide === 9} step={currentStep} />
                </div>

                {/* Navigation */}
                <button
                    onClick={(e) => { e.stopPropagation(); prev(); }}
                    className={`absolute left-4 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full bg-card/80 border border-border backdrop-blur-sm hover:bg-primary/20 transition-all ${currentSlide === 0 && currentStep === 0 ? "opacity-30 pointer-events-none" : "opacity-100"}`}
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                    onClick={(e) => { e.stopPropagation(); next(); }}
                    className={`absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full bg-card/80 border border-border backdrop-blur-sm hover:bg-primary/20 transition-all ${currentSlide === TOTAL_SLIDES - 1 ? "opacity-30 pointer-events-none" : "opacity-100"}`}
                >
                    <ChevronRight className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5">
                    {Array.from({ length: TOTAL_SLIDES }).map((_, index) => (
                        <button
                            key={index}
                            onClick={(e) => { e.stopPropagation(); goToSlide(index); }}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${index === currentSlide ? "w-6 bg-primary" : "bg-foreground/20 hover:bg-foreground/40"}`}
                        />
                    ))}
                </div>

                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.1),transparent_50%)] pointer-events-none" />
            </div>

            {/* Script panel — 40% */}
            <div className="w-[40%] h-full bg-card border-l border-border p-6 overflow-y-auto">
                <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-xl font-bold text-foreground">{currentScript.title}</h2>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>{currentScript.time}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 mb-3 p-2 rounded-lg bg-muted/30">
                        <User className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">{currentScript.speaker}</span>
                    </div>

                    {currentScript.notes && (
                        <div className="flex items-start gap-2 p-3 rounded-lg bg-primary/10 border border-primary/30">
                            <Volume2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-sm text-primary font-medium">{currentScript.notes}</p>
                        </div>
                    )}
                </div>

                <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Roteiro</h3>
                    <div className="text-foreground leading-relaxed whitespace-pre-line text-base">
                        {currentScript.script}
                    </div>
                </div>

                {/* Step indicator */}
                {STEPS_PER_SLIDE[currentSlide] > 0 && (
                    <div className="mt-6 p-3 rounded-lg bg-muted/30 border border-border">
                        <p className="text-xs text-muted-foreground">
                            Sub-step: <span className="text-primary font-bold">{currentStep}</span> / {STEPS_PER_SLIDE[currentSlide]}
                        </p>
                    </div>
                )}

                <div className="mt-8 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground text-center">
                        🔒 Versão de treino V2 • {currentSlide} / {TOTAL_SLIDES - 1}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PresentationBC2026V2Training;
