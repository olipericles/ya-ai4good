import { TalkSlideProps } from "../types";
import TalkSlideContainer from "../TalkSlideContainer";
import yaLogo from "@/assets/logos/ya_logo_branco.svg";
import trindaiLogo from "@/assets/logos/logo-trindai.svg";
import redebahiaLogo from "@/assets/logos/logo-redebahia.png";

const SlideAbertura = ({ isActive, variant }: TalkSlideProps) => {
  if (!isActive) return null;

  const subtitle = variant === "trindai"
    ? "Péricles Oliveira da Silva — Talk Trind AI — Abril 2026"
    : variant === "baia"
    ? "Péricles Oliveira da Silva — BaIA 2026 — UFBA — Maio 2026"
    : "Péricles Oliveira da Silva — Apresentação Interna — Rede Bahia 2026";

  return (
    <TalkSlideContainer className="bg-background flex flex-col items-center justify-center relative overflow-hidden">
      {/* Massive background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[28vw] font-black tracking-tighter uppercase text-white/[0.025] whitespace-nowrap">
          YÁ
        </span>
      </div>

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-primary/8 blur-[140px] rounded-full pointer-events-none" />

      {/* Gradient motif bottom-right */}
      <svg className="absolute bottom-0 right-0 w-[700px] h-[500px] opacity-[0.12] pointer-events-none" viewBox="0 0 700 500" fill="none">
        <path d="M50 450 Q250 100 500 250 Q650 330 680 50" stroke="url(#abGrad)" strokeWidth="2" fill="none"/>
        <path d="M0 480 Q200 180 450 300 Q600 380 700 100" stroke="url(#abGrad)" strokeWidth="1.5" fill="none"/>
        <defs>
          <linearGradient id="abGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E8673C"/>
            <stop offset="100%" stopColor="#8C30B0"/>
          </linearGradient>
        </defs>
      </svg>

      {/* Content */}
      <div className="z-10 flex flex-col items-center text-center px-20 animate-in fade-in duration-1000">
        <img src={yaLogo} alt="Yá" className="h-[200px] mb-14 drop-shadow-[0_0_40px_rgba(232,103,60,0.3)]" />

        <h1 className="font-display text-[72px] font-black text-white leading-[1.1] tracking-tight max-w-[1200px]">
          Como construímos uma IA financeira<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#C040A0] to-secondary">
            para mães solo
          </span>
        </h1>

        <p className="font-display text-[28px] font-semibold text-accent mt-8">
          Da Vila Matos em Salvador à Harvard e MIT
        </p>
      </div>

      {/* Footer */}
      <div className="absolute bottom-10 left-14 right-14 flex justify-between items-end z-10">
        <p className="text-[14px] text-foreground/40 font-display">{subtitle}</p>
        <div className="flex items-center gap-4">
          {variant === "trindai" && (
            <img src={trindaiLogo} alt="Trind AI" className="h-[30px] object-contain opacity-70" />
          )}
          {variant === "baia" && (
            <div className="h-[36px] w-[80px] rounded border border-dashed border-foreground/20 flex items-center justify-center">
              <span className="text-[9px] text-foreground/30 font-mono">logo_baia</span>
            </div>
          )}
          {variant === "rba" && (
            <img src={redebahiaLogo} alt="Rede Bahia" className="h-[30px] object-contain opacity-70" />
          )}
        </div>
      </div>
    </TalkSlideContainer>
  );
};

export default SlideAbertura;
