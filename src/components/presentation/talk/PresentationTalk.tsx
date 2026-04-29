import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TalkVariant } from "./types";

import SlideAbertura from "./slides/SlideAbertura";
import SlideQuemSouEu from "./slides/SlideQuemSouEu";
import SlideProblemaMacro from "./slides/SlideProblemaMacro";
import SlideProblemaEmocional from "./slides/SlideProblemaEmocional";
import SlideSolucao from "./slides/SlideSolucao";
import SlideDemo from "./slides/SlideDemo";
import SlideArquitetura from "./slides/SlideArquitetura";
import SlidePiloto from "./slides/SlidePiloto";
import SlideAI4Good from "./slides/SlideAI4Good";
import SlideFotos from "./slides/SlideFotos";
import SlideEquipe from "./slides/SlideEquipe";
import SlideVisao from "./slides/SlideVisao";
import SlideAprendizados from "./slides/SlideAprendizados";
import SlideFechamento from "./slides/SlideFechamento";

const TOTAL_SLIDES = 14;

interface PresentationTalkProps {
  variant: TalkVariant;
}

const PresentationTalk = ({ variant }: PresentationTalkProps) => {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const go = useCallback((idx: number) => {
    if (transitioning || idx < 0 || idx >= TOTAL_SLIDES) return;
    setTransitioning(true);
    setCurrent(idx);
    setTimeout(() => setTransitioning(false), 400);
  }, [transitioning]);

  const next = useCallback(() => go(current + 1), [current, go]);
  const prev = useCallback(() => go(current - 1), [current, go]);

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") { e.preventDefault(); next(); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      else if (e.key === "Home") { e.preventDefault(); go(0); }
      else if (e.key === "End") { e.preventDefault(); go(TOTAL_SLIDES - 1); }
      else if (e.key === "F11") {
        e.preventDefault();
        if (!document.fullscreenElement) document.documentElement.requestFullscreen();
        else document.exitFullscreen();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, go]);

  const slides = [
    <SlideAbertura key={0} isActive={current === 0} variant={variant} />,
    <SlideQuemSouEu key={1} isActive={current === 1} variant={variant} />,
    <SlideProblemaMacro key={2} isActive={current === 2} variant={variant} />,
    <SlideProblemaEmocional key={3} isActive={current === 3} variant={variant} />,
    <SlideSolucao key={4} isActive={current === 4} variant={variant} />,
    <SlideDemo key={5} isActive={current === 5} variant={variant} />,
    <SlideArquitetura key={6} isActive={current === 6} variant={variant} />,
    <SlidePiloto key={7} isActive={current === 7} variant={variant} />,
    <SlideAI4Good key={8} isActive={current === 8} variant={variant} />,
    <SlideFotos key={9} isActive={current === 9} variant={variant} />,
    <SlideEquipe key={10} isActive={current === 10} variant={variant} />,
    <SlideVisao key={11} isActive={current === 11} variant={variant} />,
    <SlideAprendizados key={12} isActive={current === 12} variant={variant} />,
    <SlideFechamento key={13} isActive={current === 13} variant={variant} />,
  ];

  return (
    <div className="relative w-full h-screen bg-[#0A0A0A] overflow-hidden select-none" style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}>
      {/* Slide area with fade transition */}
      <div className="absolute inset-0 transition-opacity duration-400" style={{ opacity: transitioning ? 0.7 : 1 }}>
        {slides}
      </div>

      {/* Nav arrows */}
      <button
        onClick={prev}
        disabled={current === 0}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/30 border border-white/10 backdrop-blur-md text-white hover:bg-white/20 disabled:opacity-0 disabled:pointer-events-none transition-all"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        disabled={current === TOTAL_SLIDES - 1}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/30 border border-white/10 backdrop-blur-md text-white hover:bg-white/20 disabled:opacity-0 disabled:pointer-events-none transition-all"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5 z-50">
        <div
          className="h-full bg-gradient-to-r from-[#E8673C] via-[#C040A0] to-[#8C30B0] transition-all duration-400"
          style={{ width: `${((current + 1) / TOTAL_SLIDES) * 100}%` }}
        />
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex gap-1.5">
        {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-6 bg-gradient-to-r from-[#E8673C] to-[#C040A0]" : "bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="absolute bottom-4 right-6 z-50 text-xs text-white/30 font-mono">
        {current + 1} / {TOTAL_SLIDES}
      </div>
    </div>
  );
};

export default PresentationTalk;
