import { Mail, Linkedin, Globe } from "lucide-react";
import { TalkSlideProps } from "../types";
import TalkSlideContainer from "../TalkSlideContainer";
import yaLogo from "@/assets/logos/ya_logo_branco.svg";
import trindaiLogo from "@/assets/logos/logo-trindai.svg";
import redebahiaLogo from "@/assets/logos/logo-redebahia.png";
import qrCode from "@/assets/images/ya-links-qrcode.png";

const contactsPericles = [
  { Icon: Mail, text: "s.olipericles@gmail.com" },
  { Icon: Linkedin, text: "linkedin.com/in/olipericles" },
];

const contactsYa = [
  { Icon: Mail, text: "ya.ai4good@gmail.com" },
  { Icon: Linkedin, text: "linkedin.com/company/112041166" },
  { Icon: Globe, text: "ya-ai4good.lovable.app" },
];

const SlideFechamento = ({ isActive, variant }: TalkSlideProps) => {
  if (!isActive) return null;

  return (
    <TalkSlideContainer className="bg-[#0A0A0A] flex">
      {/* Background motif */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.10] pointer-events-none" viewBox="0 0 1920 1080" fill="none">
        <path d="M100 900 Q500 300 900 500 Q1300 700 1800 200" stroke="url(#motifClose)" strokeWidth="2" fill="none" />
        <path d="M200 950 Q600 400 1000 600 Q1400 800 1700 350" stroke="url(#motifClose)" strokeWidth="1.5" fill="none" />
        <defs>
          <linearGradient id="motifClose" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E8673C" />
            <stop offset="50%" stopColor="#C040A0" />
            <stop offset="100%" stopColor="#8C30B0" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[800px] h-[600px] bg-primary/6 blur-[160px] rounded-full pointer-events-none" />

      {/* Left — 55% */}
      <div className="w-[55%] h-full flex flex-col pt-16 pb-20 pl-20 pr-10 z-10 justify-between">
        <img src={yaLogo} alt="Yá" className="h-[120px] self-start" />

        <div>
          <h1 className="font-display text-[112px] font-black text-white leading-none mb-4">Obrigado.</h1>
          <p className="font-display text-[36px] text-accent font-semibold">Vamos conversar?</p>
        </div>

        <div className="flex gap-16">
          <div className="flex flex-col gap-4">
            <p className="font-display text-[13px] font-bold text-primary uppercase tracking-[3px]">Péricles</p>
            {contactsPericles.map(({ Icon, text }, i) => (
              <div key={i} className="flex items-center gap-3">
                <Icon size={22} className="text-primary/60 shrink-0" />
                <span className="font-display text-[20px] text-foreground/70">{text}</span>
              </div>
            ))}
          </div>

          <div className="w-px bg-white/10 self-stretch" />

          <div className="flex flex-col gap-4">
            <p className="font-display text-[13px] font-bold text-primary uppercase tracking-[3px]">Yá</p>
            {contactsYa.map(({ Icon, text }, i) => (
              <div key={i} className="flex items-center gap-3">
                <Icon size={22} className="text-primary/60 shrink-0" />
                <span className="font-display text-[20px] text-foreground/70">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right — 45% */}
      <div className="w-[45%] h-full flex flex-col items-center justify-center pr-20 z-10 gap-7">
        <p className="font-display text-[14px] font-bold text-foreground/40 uppercase tracking-[3px]">Escaneie para todos os links</p>
        <div className="bg-white rounded-3xl p-5 shadow-2xl shadow-primary/10">
          <img src={qrCode} alt="QR Code" className="w-[340px] h-[340px] object-contain" />
        </div>
        <p className="font-display text-[22px] text-accent font-mono tracking-wide font-bold">qr.rede.ba/mT02</p>
      </div>

      {/* Footer logos */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-10 z-10">
        <img src={yaLogo} alt="Yá" className="h-[30px] object-contain opacity-60" />
        <div className="w-px h-6 bg-white/20" />
        {variant === "trindai" && (
          <img src={trindaiLogo} alt="Trind AI" className="h-[26px] object-contain opacity-70" />
        )}
        {variant === "baia" && (
          <div className="h-[26px] w-[60px] rounded border border-dashed border-white/20 flex items-center justify-center">
            <span className="font-display text-[8px] text-foreground/30">logo_baia</span>
          </div>
        )}
        <div className="w-px h-6 bg-white/20" />
        <img src={redebahiaLogo} alt="Rede Bahia" className="h-[30px] object-contain opacity-70" />
      </div>
    </TalkSlideContainer>
  );
};

export default SlideFechamento;
