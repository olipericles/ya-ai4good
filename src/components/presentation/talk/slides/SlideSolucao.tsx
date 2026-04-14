import { TalkSlideProps } from "../types";
import TalkSlideContainer from "../TalkSlideContainer";
import yaLogo from "@/assets/logos/ya_logo_branco.svg";

const cards = [
  { icon: "🎤", title: "Áudio, texto ou foto", desc: "Envia como falar com uma amiga: áudio, mensagem ou foto do comprovante" },
  { icon: "📱", title: "Direto no WhatsApp", desc: "Sem app pra baixar. Funciona onde ela já está" },
  { icon: "💬", title: "Tom de amiga, não de professora", desc: "Linguagem empática, sem julgamento. Visibilidade, não cobrança" },
];

const SlideSolucao = ({ isActive }: TalkSlideProps) => {
  if (!isActive) return null;

  return (
    <TalkSlideContainer className="bg-[#1A1A2E] flex flex-col items-center justify-center px-20">
      {/* Motif behind cards */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.10] pointer-events-none" viewBox="0 0 1920 1080" fill="none">
        <path d="M200 800 Q600 300 1000 500 Q1400 700 1700 200" stroke="url(#motifGrad2)" strokeWidth="2" fill="none" />
        <path d="M100 900 Q500 400 900 600 Q1300 800 1800 300" stroke="url(#motifGrad2)" strokeWidth="1.5" fill="none" />
        <defs>
          <linearGradient id="motifGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E8673C" />
            <stop offset="50%" stopColor="#C040A0" />
            <stop offset="100%" stopColor="#8C30B0" />
          </linearGradient>
        </defs>
      </svg>

      <img src={yaLogo} alt="Yá" className="h-[80px] mb-6 z-10" />
      <h1 className="font-talk-headline text-[36px] text-white mb-2 z-10">
        Yá — sua amiga financeira no WhatsApp
      </h1>
      <p className="font-talk-body text-[16px] text-[#F5A623] mb-12 z-10">
        Yá vem do Yorubá e significa "mãe"
      </p>

      <div className="flex gap-6 z-10">
        {cards.map((c, i) => (
          <div key={i} className="bg-white/[0.06] rounded-xl p-6 w-[320px] flex flex-col items-start">
            <span className="text-[40px] mb-3">{c.icon}</span>
            <h3 className="font-talk-headline text-[18px] text-white mb-2">{c.title}</h3>
            <p className="font-talk-body text-[14px] text-gray-400 leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </TalkSlideContainer>
  );
};

export default SlideSolucao;
