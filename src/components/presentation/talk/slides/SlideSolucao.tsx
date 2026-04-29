import { Mic, Smartphone, MessageCircle } from "lucide-react";
import { TalkSlideProps } from "../types";
import TalkSlideContainer from "../TalkSlideContainer";
import yaLogo from "@/assets/logos/ya_logo_branco.svg";

const cards = [
  {
    Icon: Mic,
    title: "Áudio, texto ou foto",
    desc: "Envia como falar com uma amiga — áudio, mensagem ou foto do comprovante. Sem formulário, sem app.",
  },
  {
    Icon: Smartphone,
    title: "Direto no WhatsApp",
    desc: "Sem app pra baixar. Funciona onde ela já está, no celular que ela já usa todo dia.",
  },
  {
    Icon: MessageCircle,
    title: "Tom de amiga, não de professora",
    desc: "Linguagem empática, sem julgamento. Visibilidade, não cobrança.",
  },
];

const SlideSolucao = ({ isActive }: TalkSlideProps) => {
  if (!isActive) return null;

  return (
    <TalkSlideContainer className="bg-background flex flex-col pt-14 pb-14 px-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-secondary/8 blur-[140px] rounded-full pointer-events-none" />
      <svg className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none" viewBox="0 0 1920 1080" fill="none">
        <path d="M200 800 Q600 300 1000 500 Q1400 700 1700 200" stroke="url(#solG)" strokeWidth="2" fill="none"/>
        <path d="M100 900 Q500 400 900 600 Q1300 800 1800 300" stroke="url(#solG)" strokeWidth="1.5" fill="none"/>
        <defs>
          <linearGradient id="solG" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E8673C"/><stop offset="100%" stopColor="#8C30B0"/>
          </linearGradient>
        </defs>
      </svg>

      <div className="z-10 flex flex-col h-full">
        <div className="flex items-center gap-6 mb-8 shrink-0">
          <img src={yaLogo} alt="Yá" className="h-[100px]" />
          <div>
            <h1 className="font-display text-[64px] font-black text-white leading-none">
              Yá — sua amiga financeira
            </h1>
            <p className="font-display text-[26px] text-accent mt-2">
              Yá vem do Yorubá e significa "mãe"
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 flex-1">
          {cards.map(({ Icon, title, desc }, i) => (
            <div key={i} className="bg-card/40 backdrop-blur-md border border-primary/20 rounded-3xl p-10 flex flex-col justify-between hover:border-primary/50 transition-colors">
              <div className="w-20 h-20 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center">
                <Icon size={40} className="text-primary" />
              </div>
              <div className="flex flex-col gap-5">
                <h3 className="font-display text-[32px] font-bold text-white">{title}</h3>
                <p className="font-display text-[20px] text-foreground/60 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </TalkSlideContainer>
  );
};

export default SlideSolucao;
