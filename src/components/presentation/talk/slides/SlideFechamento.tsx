import { TalkSlideProps } from "../types";
import TalkSlideContainer from "../TalkSlideContainer";
import yaLogo from "@/assets/logos/ya_logo_branco.svg";
import trindaiLogo from "@/assets/logos/logo-trindai.svg";
import redebahiaLogo from "@/assets/logos/logo-redebahia.png";
import qrCode from "@/assets/images/ya-links-qrcode.png";

const contactsPericles = [
  { icon: "📧", text: "s.olipericles@gmail.com" },
  { icon: "🔗", text: "linkedin.com/in/olipericles" },
];

const contactsYa = [
  { icon: "📧", text: "ya.ai4good@gmail.com" },
  { icon: "🔗", text: "linkedin.com/company/112041166" },
  { icon: "🌐", text: "ya-ai4good.lovable.app" },
];

const SlideFechamento = ({ isActive, variant }: TalkSlideProps) => {
  if (!isActive) return null;

  return (
    <TalkSlideContainer className="bg-[#1A1A2E] flex">
      {/* Motif bg */}
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

      {/* Left — 55% */}
      <div className="w-[55%] h-full flex flex-col justify-center pl-20 z-10">
        <img src={yaLogo} alt="Yá" className="h-[90px] mb-8 self-start" />
        <h1 className="font-talk-headline text-[52px] text-white leading-tight">Obrigado.</h1>
        <p className="font-talk-body text-[22px] text-[#F5A623] mt-2 mb-10">Vamos conversar?</p>

        {/* Two contact columns */}
        <div className="flex gap-8">
          {/* Péricles */}
          <div className="flex flex-col gap-1">
            <p className="font-talk-headline text-[13px] text-[#E8673C] uppercase tracking-widest mb-3">Péricles</p>
            {contactsPericles.map((c, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-[15px]">{c.icon}</span>
                <span className="font-talk-body text-[14px] text-gray-300">{c.text}</span>
              </div>
            ))}
          </div>

          <div className="w-[1px] bg-white/10 self-stretch" />

          {/* Yá */}
          <div className="flex flex-col gap-1">
            <p className="font-talk-headline text-[13px] text-[#E8673C] uppercase tracking-widest mb-3">Yá</p>
            {contactsYa.map((c, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-[15px]">{c.icon}</span>
                <span className="font-talk-body text-[14px] text-gray-300">{c.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right — 45% */}
      <div className="w-[45%] h-full flex flex-col items-center justify-center pr-16 z-10 gap-5">
        <p className="font-talk-body text-[15px] text-gray-400 uppercase tracking-widest">Escaneie para todos os links</p>

        {/* QR frame */}
        <div className="bg-white rounded-2xl p-4 shadow-2xl">
          <img src={qrCode} alt="QR Code — links da Yá" className="w-[260px] h-[260px] object-contain" />
        </div>

        <p className="font-talk-body text-[14px] text-[#F5A623] font-mono tracking-wide">qr.rede.ba/mT02</p>
      </div>

      {/* Footer logos */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-8 z-10">
        <img src={yaLogo} alt="Yá" className="h-[24px] object-contain opacity-60" />
        <div className="w-[1px] h-[20px] bg-white/20" />
        {variant === "trindai" && (
          <img src={trindaiLogo} alt="Trind AI" className="h-[20px] object-contain opacity-70" />
        )}
        {variant === "baia" && (
          <div className="h-[24px] w-[55px] rounded border border-dashed border-[#555] flex items-center justify-center">
            <span className="text-[7px] text-[#777] font-mono">logo_baia</span>
          </div>
        )}
        <div className="w-[1px] h-[20px] bg-white/20" />
        <img src={redebahiaLogo} alt="Rede Bahia" className="h-[24px] object-contain opacity-70" />
      </div>
    </TalkSlideContainer>
  );
};

export default SlideFechamento;
