import { TalkSlideProps } from "../types";
import TalkSlideContainer from "../TalkSlideContainer";
import yaLogo from "@/assets/logos/ya_logo_branco.svg";

const SlideAbertura = ({ isActive, variant }: TalkSlideProps) => {
  if (!isActive) return null;

  const subtitle = variant === "trindai"
    ? "Péricles Oliveira da Silva — Talk Trind AI — Abril 2026"
    : "Péricles Oliveira da Silva — BaIA 2026 — UFBA — Maio 2026";

  return (
    <TalkSlideContainer className="bg-[#1A1A2E] flex items-center justify-center">
      {/* Motif decoration */}
      <svg className="absolute bottom-0 right-0 w-[600px] h-[400px] opacity-[0.15]" viewBox="0 0 600 400" fill="none">
        <path d="M50 350 Q200 100 400 200 Q550 280 580 50" stroke="url(#motifGrad)" strokeWidth="2" fill="none" />
        <path d="M0 380 Q180 150 350 250 Q500 330 600 100" stroke="url(#motifGrad)" strokeWidth="1.5" fill="none" />
        <path d="M100 400 Q250 200 450 280 Q560 320 590 150" stroke="url(#motifGrad)" strokeWidth="1" fill="none" />
        <defs>
          <linearGradient id="motifGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E8673C" />
            <stop offset="50%" stopColor="#C040A0" />
            <stop offset="100%" stopColor="#8C30B0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="flex flex-col items-center z-10 animate-fade-in">
        <img src={yaLogo} alt="Yá Logo" className="h-[120px] mb-10" />

        <h1 className="font-talk-headline text-[44px] text-white text-center leading-tight max-w-[900px]">
          Como construímos uma IA financeira para mães solo
        </h1>

        <p className="font-talk-body text-[18px] text-[#F5A623] mt-5">
          Da Vila Matos em Salvador à Harvard e MIT
        </p>
      </div>

      {/* Footer */}
      <div className="absolute bottom-10 left-12 right-12 flex justify-between items-end">
        <p className="text-[12px] text-[#999] font-talk-body">{subtitle}</p>
        <div className="flex items-center gap-3">
          {variant === "trindai" ? (
            <div className="h-[40px] w-[100px] rounded-lg border border-dashed border-[#666] flex items-center justify-center">
              <span className="text-[9px] text-[#888] font-mono">logo_trindai</span>
            </div>
          ) : (
            <>
              <div className="h-[40px] w-[80px] rounded-lg border border-dashed border-[#666] flex items-center justify-center">
                <span className="text-[8px] text-[#888] font-mono">logo_baia</span>
              </div>
              <div className="h-[40px] w-[80px] rounded-lg border border-dashed border-[#666] flex items-center justify-center">
                <span className="text-[8px] text-[#888] font-mono">logo_liao</span>
              </div>
            </>
          )}
        </div>
      </div>
    </TalkSlideContainer>
  );
};

export default SlideAbertura;
