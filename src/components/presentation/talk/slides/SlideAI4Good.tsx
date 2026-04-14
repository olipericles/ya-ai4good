import { TalkSlideProps } from "../types";
import TalkSlideContainer from "../TalkSlideContainer";

const infos = [
  { icon: "📅", text: "27-29 de março de 2026" },
  { icon: "📍", text: "Harvard & MIT, Boston" },
  { icon: "🏆", text: "Programa de aceleração + mentoria" },
];

const SlideAI4Good = ({ isActive }: TalkSlideProps) => {
  if (!isActive) return null;

  return (
    <TalkSlideContainer className="bg-[#1A1A2E] flex flex-col items-center justify-center px-20">
      {/* Motif decoration */}
      <svg className="absolute top-0 left-0 w-[400px] h-[300px] opacity-[0.10]" viewBox="0 0 400 300" fill="none">
        <path d="M0 250 Q100 50 250 150 Q350 220 400 50" stroke="url(#motifGrad3)" strokeWidth="1.5" fill="none" />
        <defs>
          <linearGradient id="motifGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E8673C" />
            <stop offset="100%" stopColor="#8C30B0" />
          </linearGradient>
        </defs>
      </svg>
      <svg className="absolute bottom-0 right-0 w-[400px] h-[300px] opacity-[0.10] rotate-180" viewBox="0 0 400 300" fill="none">
        <path d="M0 250 Q100 50 250 150 Q350 220 400 50" stroke="url(#motifGrad3b)" strokeWidth="1.5" fill="none" />
        <defs>
          <linearGradient id="motifGrad3b" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E8673C" />
            <stop offset="100%" stopColor="#8C30B0" />
          </linearGradient>
        </defs>
      </svg>

      <h1 className="font-talk-headline text-[40px] text-white mb-2 z-10">Selecionados entre 188 projetos</h1>
      <p className="font-talk-body text-[18px] text-[#F5A623] mb-14 z-10">
        AI4Good 2026 — Brazil Conference at Harvard and MIT
      </p>

      <div className="flex flex-col items-center mb-12 z-10">
        <span className="font-talk-headline text-[120px] leading-none bg-gradient-to-r from-[#E8673C] via-[#C040A0] to-[#8C30B0] bg-clip-text text-transparent">
          3
        </span>
        <p className="font-talk-body text-[22px] text-white mt-2">projetos premiados</p>
        <p className="font-talk-body text-[16px] text-[#F5A623] mt-1 flex items-center gap-1">
          📍 Único projeto do Nordeste do Brasil
        </p>
      </div>

      <div className="flex gap-10 z-10">
        {infos.map((info, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-[20px]">{info.icon}</span>
            <span className="font-talk-body text-[14px] text-gray-300">{info.text}</span>
          </div>
        ))}
      </div>
    </TalkSlideContainer>
  );
};

export default SlideAI4Good;
