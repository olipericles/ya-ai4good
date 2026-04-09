import { TalkSlideProps } from "../types";
import TalkSlideContainer from "../TalkSlideContainer";
import yaLogo from "@/assets/logos/ya_logo_branco.svg";

const contacts = [
  { icon: "📧", text: "pericles@email.com" },
  { icon: "🔗", text: "linkedin.com/in/pericles" },
  { icon: "📱", text: "@ya.ai4good" },
  { icon: "🌐", text: "ya-ai4good.lovable.app" },
];

const SlideFechamento = ({ isActive, variant }: TalkSlideProps) => {
  if (!isActive) return null;

  const footerLogos = variant === "trindai"
    ? [{ file: "logo_ya", w: 50 }, { file: "logo_trindai", w: 80 }, { file: "logo_redebahia", w: 80 }]
    : variant === "baia"
    ? [{ file: "logo_ya", w: 50 }, { file: "logo_baia", w: 70 }, { file: "logo_liao", w: 70 }, { file: "logo_redebahia", w: 80 }, { file: "logo_ufba", w: 70 }]
    : [{ file: "logo_ya", w: 50 }, { file: "logo_redebahia", w: 100 }];

  return (
    <TalkSlideContainer className="bg-[#1A1A2E] flex flex-col items-center justify-center">
      {/* Motif bg */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.12] pointer-events-none" viewBox="0 0 1920 1080" fill="none">
        <path d="M100 900 Q500 300 900 500 Q1300 700 1800 200" stroke="url(#motifClose)" strokeWidth="2" fill="none" />
        <path d="M200 950 Q600 400 1000 600 Q1400 800 1700 350" stroke="url(#motifClose)" strokeWidth="1.5" fill="none" />
        <path d="M0 800 Q400 200 800 400 Q1200 600 1920 100" stroke="url(#motifClose)" strokeWidth="1" fill="none" />
        <defs>
          <linearGradient id="motifClose" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E8673C" />
            <stop offset="50%" stopColor="#C040A0" />
            <stop offset="100%" stopColor="#8C30B0" />
          </linearGradient>
        </defs>
      </svg>

      <img src={yaLogo} alt="Yá" className="h-[120px] mb-6 z-10" />
      <h1 className="font-talk-headline text-[44px] text-white z-10">Obrigado.</h1>
      <p className="font-talk-body text-[20px] text-[#F5A623] mt-2 mb-10 z-10">Vamos conversar?</p>

      <div className="bg-white/[0.05] rounded-xl p-6 w-[600px] flex flex-col gap-3 z-10">
        {contacts.map((c, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-[18px]">{c.icon}</span>
            <span className="font-talk-body text-[16px] text-gray-300">{c.text}</span>
          </div>
        ))}
      </div>

      {/* Footer logos */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 z-10">
        {footerLogos.map((l, i) => (
          <div
            key={i}
            className="h-[30px] rounded border border-dashed border-[#555] flex items-center justify-center px-2"
            style={{ width: l.w }}
          >
            <span className="text-[7px] text-[#777] font-mono">{l.file}</span>
          </div>
        ))}
      </div>
    </TalkSlideContainer>
  );
};

export default SlideFechamento;
