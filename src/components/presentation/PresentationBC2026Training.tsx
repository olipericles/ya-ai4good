import { useState, useEffect, useCallback, useMemo } from "react";
import { ChevronLeft, ChevronRight, Clock, Volume2, User } from "lucide-react";
import SlideOpening from "./bc2026/SlideOpening";
import SlideProblem from "./bc2026/SlideProblem";
import SlideSolution from "./bc2026/SlideSolution";
import SlideTest from "./bc2026/SlideTest";
import SlideVoices from "./bc2026/SlideVoices";
import SlideScale from "./bc2026/SlideScale";
import SlideVision from "./bc2026/SlideVision";
import SlideTeam from "./bc2026/SlideTeam";
import SlideClosing from "./bc2026/SlideClosing";
import SlideDemo from "./bc2026/SlideDemo";
import roteiroRaw from "@/assets/docs/roteiro-v1.md?raw";
import { parseRoteiro } from "@/lib/parseRoteiro";


const TOTAL_SLIDES = 10;

const PresentationBC2026Training = () => {
    const SCRIPTS = useMemo(() => parseRoteiro(roteiroRaw), []);
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

    const currentScript = SCRIPTS[currentSlide];

    return (
        <div className="relative w-full h-screen bg-background overflow-hidden flex">
            {/* Slide area - 60% */}
            <div className="relative w-[60%] h-full">
                {/* Slides */}
                <div className="absolute inset-0">
                    <SlideOpening isActive={currentSlide === 0} transition="fade-zoom" />
                    <SlideProblem isActive={currentSlide === 1} transition="slide-up" />
                    <SlideSolution isActive={currentSlide === 2} transition="blur-scale" />
                    <SlideTest isActive={currentSlide === 3} transition="zoom-rotate" />
                    <SlideVoices isActive={currentSlide === 4} transition="fade-zoom" />
                    <SlideScale isActive={currentSlide === 5} transition="slide-left" />
                    <SlideVision isActive={currentSlide === 6} transition="zoom-rotate" />
                    <SlideTeam isActive={currentSlide === 7} transition="blur-scale" />
                    <SlideClosing isActive={currentSlide === 8} transition="fade-zoom" />
                    <SlideDemo isActive={currentSlide === 9} transition="slide-up" />
                </div>

                {/* Navigation arrows */}
                <button
                    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                    className={`absolute left - 4 top - 1 / 2 - translate - y - 1 / 2 z - 50 p - 2 rounded - full bg - card / 80 border border - border backdrop - blur - sm hover: bg - primary / 20 transition - all ${currentSlide === 0 ? "opacity-30 pointer-events-none" : "opacity-100"} `}
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                    className={`absolute right - 4 top - 1 / 2 - translate - y - 1 / 2 z - 50 p - 2 rounded - full bg - card / 80 border border - border backdrop - blur - sm hover: bg - primary / 20 transition - all ${currentSlide === TOTAL_SLIDES - 1 ? "opacity-30 pointer-events-none" : "opacity-100"} `}
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>

                {/* Slide indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5">
                    {Array.from({ length: TOTAL_SLIDES }).map((_, index) => (
                        <button
                            key={index}
                            onClick={(e) => { e.stopPropagation(); goToSlide(index); }}
                            className={`w - 1.5 h - 1.5 rounded - full transition - all duration - 300 ${index === currentSlide ? "w-6 bg-primary" : "bg-foreground/20 hover:bg-foreground/40"} `}
                            aria-label={`Go to slide ${index + 1} `}
                        />
                    ))}
                </div>

                {/* Background gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.1),transparent_50%)] pointer-events-none" />
            </div>

            {/* Script panel - 40% */}
            <div className="w-[40%] h-full bg-card border-l border-border p-6 overflow-y-auto">
                {/* Header */}
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

                {/* Script */}
                <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Roteiro</h3>
                    <div className="text-foreground leading-relaxed whitespace-pre-line text-base">
                        {currentScript.script}
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-8 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground text-center">
                        🔒 Versão de treino • {currentSlide + 1} / {TOTAL_SLIDES}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PresentationBC2026Training;
