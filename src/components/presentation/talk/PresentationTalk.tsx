import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import yaLogo from "@/assets/logos/ya_logo_branco.svg";
import { TalkVariant } from "./types";

import SlideAbertura from "./slides/SlideAbertura";
import SlideQuemSouEu from "./slides/SlideQuemSouEu";
import SlideProblemaMacro from "./slides/SlideProblemaMacro";
import SlideProblemaEmocional from "./slides/SlideProblemaEmocional";
import SlideSolucao from "./slides/SlideSolucao";
import SlideArquitetura from "./slides/SlideArquitetura";
import SlideTradeOffs from "./slides/SlideTradeOffs";
import SlidePiloto from "./slides/SlidePiloto";
import SlideAI4Good from "./slides/SlideAI4Good";
import SlideFotos from "./slides/SlideFotos";
import SlideEquipe from "./slides/SlideEquipe";
import SlideVisao from "./slides/SlideVisao";
import SlideAprendizados from "./slides/SlideAprendizados";
import SlideFechamento from "./slides/SlideFechamento";

// baia: sem QuemSouEu, Equipe na pos 4, TradeOffs após Arquitetura — 13 slides
// trindai/rba: ordem original com QuemSouEu — 13 slides
const TOTAL_SLIDES = 13;

interface PresentationTalkProps {
  variant: TalkVariant;
}

const PresentationTalk = ({ variant }: PresentationTalkProps) => {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const go = useCallback((idx: number) => {
    if (transitioning || idx < 0 || idx >= TOTAL_SLIDES) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(idx);
      setTransitioning(false);
    }, 250);
  }, [transitioning]);

  const next = useCallback(() => go(current + 1), [current, go]);
  const prev = useCallback(() => go(current - 1), [current, go]);

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

  const slidesBaia = [
    <SlideAbertura       key="abertura"          isActive={current === 0}  variant={variant} />,
    <SlideProblemaMacro  key="problema-macro"    isActive={current === 1}  variant={variant} />,
    <SlideProblemaEmocional key="problema-emocional" isActive={current === 2} variant={variant} />,
    <SlideEquipe         key="equipe"            isActive={current === 3}  variant={variant} />,
    <SlideSolucao        key="solucao"           isActive={current === 4}  variant={variant} />,
    <SlideArquitetura    key="arquitetura"       isActive={current === 5}  variant={variant} />,
    <SlideTradeOffs      key="tradeoffs"         isActive={current === 6}  variant={variant} />,
    <SlidePiloto         key="piloto"            isActive={current === 7}  variant={variant} />,
    <SlideAI4Good        key="ai4good"           isActive={current === 8}  variant={variant} />,
    <SlideFotos          key="fotos"             isActive={current === 9}  variant={variant} />,
    <SlideVisao          key="visao"             isActive={current === 10} variant={variant} />,
    <SlideAprendizados   key="aprendizados"      isActive={current === 11} variant={variant} />,
    <SlideFechamento     key="fechamento"        isActive={current === 12} variant={variant} />,
  ];

  const slidesDefault = [
    <SlideAbertura       key="abertura"          isActive={current === 0}  variant={variant} />,
    <SlideQuemSouEu      key="quem-sou-eu"       isActive={current === 1}  variant={variant} />,
    <SlideProblemaMacro  key="problema-macro"    isActive={current === 2}  variant={variant} />,
    <SlideProblemaEmocional key="problema-emocional" isActive={current === 3} variant={variant} />,
    <SlideSolucao        key="solucao"           isActive={current === 4}  variant={variant} />,
    <SlideArquitetura    key="arquitetura"       isActive={current === 5}  variant={variant} />,
    <SlidePiloto         key="piloto"            isActive={current === 6}  variant={variant} />,
    <SlideAI4Good        key="ai4good"           isActive={current === 7}  variant={variant} />,
    <SlideFotos          key="fotos"             isActive={current === 8}  variant={variant} />,
    <SlideEquipe         key="equipe"            isActive={current === 9}  variant={variant} />,
    <SlideVisao          key="visao"             isActive={current === 10} variant={variant} />,
    <SlideAprendizados   key="aprendizados"      isActive={current === 11} variant={variant} />,
    <SlideFechamento     key="fechamento"        isActive={current === 12} variant={variant} />,
  ];

  const slides = variant === "baia" ? slidesBaia : slidesDefault;

  return (
    <div className="relative w-full h-screen bg-[#0A0A0A] overflow-hidden select-none" style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}>
      {current > 0 && current < TOTAL_SLIDES - 1 && (
        <header className="absolute top-0 left-0 w-full p-10 z-50 flex justify-between items-start pointer-events-none transition-opacity duration-1000">
          <div className="flex items-center">
            <img src={yaLogo} alt="Yá Logo" className="h-8 object-contain" />
          </div>
        </header>
      )}

      <div
        className="absolute inset-0 transition-opacity duration-300 ease-in-out"
        style={{ opacity: transitioning ? 0 : 1 }}
      >
        {slides}
      </div>

      <button
        onClick={prev}
        disabled={current === 0}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-black/40 border border-white/10 backdrop-blur-md text-white hover:bg-primary hover:border-primary hover:text-black focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none disabled:opacity-0 disabled:pointer-events-none transition-all duration-300 shadow-xl shadow-black/40"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        disabled={current === TOTAL_SLIDES - 1}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-black/40 border border-white/10 backdrop-blur-md text-white hover:bg-primary hover:border-primary hover:text-black focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none disabled:opacity-0 disabled:pointer-events-none transition-all duration-300 shadow-xl shadow-black/40"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5 z-50">
        <div
          className="h-full bg-gradient-to-r from-[#E8673C] via-[#C040A0] to-[#8C30B0] transition-all duration-400 shadow-[0_0_15px_rgba(232,103,60,0.6)]"
          style={{ width: `${((current + 1) / TOTAL_SLIDES) * 100}%` }}
        />
      </div>

      <div className="absolute bottom-4 right-6 z-50 text-xs text-white/30 font-mono">
        {current + 1} / {TOTAL_SLIDES}
      </div>
    </div>
  );
};

export default PresentationTalk;
