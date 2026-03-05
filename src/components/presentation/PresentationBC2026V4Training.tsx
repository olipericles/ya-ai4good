import { useState, useEffect, useCallback, useMemo } from "react";
import { ChevronLeft, ChevronRight, Clock, Volume2, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
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

import roteiroRaw from "@/assets/docs/roteiro.md?raw";
import { parseRoteiro } from "@/lib/parseRoteiro";

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

const PresentationBC2026V4Training = () => {
    const SCRIPTS = useMemo(() => {
        return parseRoteiro(roteiroRaw);
    }, []);
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

    const currentScript = SCRIPTS[currentSlide] || {
        title: `SLIDE ${currentSlide} — (Sem script)`,
        time: "—",
        speaker: "Equipe",
        notes: "",
        script: "Este slide não possui correspondente no roteiro."
    };

    return (
        <div className="relative w-full h-screen bg-background overflow-hidden flex text-white font-sans">
            {/* Slide area — 60% */}
            <div className="relative w-[60%] h-full">

                {/* Header context from V4 original presentation */}
                {currentSlide > 0 && currentSlide < TOTAL_SLIDES - 1 && (
                    <header className="absolute top-0 left-0 w-full p-8 z-50 flex justify-between items-start pointer-events-none transition-opacity duration-1000">
                        <div className="flex items-center gap-3">
                            <img src={yaLogo} alt="Yá Logo" className="h-8 object-contain" />
                            <div className="hidden sm:flex items-center pl-3 border-l-[2px] border-primary">
                                <p className="text-[12px] font-mono text-primary uppercase tracking-[0.2em] font-bold leading-none">AI4GOOD 2026</p>
                            </div>
                        </div>
                    </header>
                )}

                <div className="absolute inset-0 flex items-center justify-center">
                    <SlideWaitingV4 isActive={currentSlide === 0} step={currentStep} />
                    <SlideImpactV4 isActive={currentSlide === 1} step={currentStep} />
                    <SlideProblemV4 isActive={currentSlide === 2} step={currentStep} />
                    <SlideSolutionV4 isActive={currentSlide === 3} step={currentStep} />
                    <SlideTestV4 isActive={currentSlide === 4} step={currentStep} />
                    <SlideVoicesV4 isActive={currentSlide === 5} step={currentStep} />
                    <SlideScaleV4 isActive={currentSlide === 6} step={currentStep} />
                    <SlidePathV4 isActive={currentSlide === 7} step={currentStep} />
                    <SlideTeamV4 isActive={currentSlide === 8} step={currentStep} />
                    <SlideQRCodeV4 isActive={currentSlide === 9} step={currentStep} />
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
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${index === currentSlide ? "w-6 bg-primary" : "bg-white/20 hover:bg-white/40"}`}
                        />
                    ))}
                </div>
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
                    <div className="text-foreground leading-relaxed whitespace-pre-line text-base markdown-script">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                p: ({ node, ...props }) => {
                                    const content = props.children?.toString() || '';
                                    if (content.startsWith("*[") || content.startsWith("*(")) {
                                        return <p className="text-foreground/60 italic bg-muted/20 px-4 py-2 rounded-md border-l-2 border-muted/50 my-4" {...props} />;
                                    }
                                    if (content.includes("(CLIQUE)") || content.includes("**CLIQUE**") || content.includes("**Step")) {
                                        return (
                                            <div className="bg-primary/20 border border-primary/50 text-primary py-2 px-4 rounded-lg my-6 font-mono text-sm font-bold shadow-[0_0_15px_rgba(229,91,60,0.2)]">
                                                {props.children}
                                            </div>
                                        );
                                    }
                                    return <p className="text-foreground leading-relaxed text-lg pt-2 mb-4" {...props} />;
                                },
                                em: ({ node, ...props }) => {
                                    const t = props.children?.toString() || '';
                                    if (t.startsWith("[") || t.startsWith("(")) {
                                        return <span className="not-italic" {...props} />;
                                    }
                                    return <em className="text-foreground/60 italic" {...props} />;
                                },
                                strong: ({ node, ...props }) => {
                                    const t = props.children?.toString() || '';
                                    if (t.endsWith(":") || t === "TODOS JUNTOS:") {
                                        return <strong className="font-bold text-primary mr-2 uppercase tracking-wide text-xs bg-primary/10 px-2 py-1 rounded" {...props} />;
                                    }
                                    return <strong className="font-bold text-foreground" {...props} />;
                                }
                            }}
                        >
                            {currentScript.script}
                        </ReactMarkdown>
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
                        🔒 Versão de treino V4 • {currentSlide} / {TOTAL_SLIDES - 1}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PresentationBC2026V4Training;
