import { TalkSlideProps } from "../types";
import TalkSlideContainer from "../TalkSlideContainer";
import contextPhoto from "@/assets/maes/aurea.jpeg";

const SlideProblemaEmocional = ({ isActive }: TalkSlideProps) => {
  if (!isActive) return null;

  return (
    <TalkSlideContainer className="bg-[#0A0A0A] flex relative overflow-hidden">
      {/* Left */}
      <div className="w-[52%] h-full flex flex-col justify-center pl-24 pr-16 z-10">
        <p className="font-display text-[14px] font-bold text-primary uppercase tracking-[3px] mb-6 flex items-center gap-3">
          <span className="w-8 h-px bg-primary inline-block" />
          O problema real
        </p>

        <h2 className="font-display text-[64px] font-black text-white leading-tight mb-8">
          Invisibilidade<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Financeira</span>
        </h2>

        <p className="font-display text-[22px] text-foreground/70 leading-relaxed mb-10">
          Essas mães já têm inteligência financeira. Elas sabem quanto custa o leite, o gás, a passagem. O que falta não é educação financeira — é <strong className="text-white">visibilidade</strong>. É enxergar o todo quando cada dia é uma batalha.
        </p>

        <div className="bg-accent/10 border-l-4 border-accent rounded-r-2xl px-8 py-6">
          <p className="font-display text-[24px] font-semibold italic text-accent leading-snug">
            "Eu tinha medo de ver os números. A Yá me mostrou sem julgamento."
          </p>
          <p className="font-display text-[16px] text-foreground/50 mt-3 not-italic">— Áurea, mãe transformada do piloto Yá</p>
        </div>
      </div>

      {/* Right — full height photo */}
      <div className="w-[48%] h-full relative">
        <img
          src={contextPhoto}
          alt="Mulher negra, Salvador"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent" />
      </div>
    </TalkSlideContainer>
  );
};

export default SlideProblemaEmocional;
