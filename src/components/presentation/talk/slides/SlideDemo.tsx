import { TalkSlideProps } from "../types";
import TalkSlideContainer from "../TalkSlideContainer";
import demoGif from "@/assets/videos/demo.gif";

const steps = ["Recebe áudio, texto ou foto", "Transcreve e categoriza", "Responde com empatia no WhatsApp"];

const SlideDemo = ({ isActive }: TalkSlideProps) => {
  if (!isActive) return null;

  return (
    <TalkSlideContainer className="bg-[#0A0A0A] flex items-center justify-center px-20 gap-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/6 blur-[120px] rounded-full pointer-events-none" />

      {/* GIF */}
      <div className="h-[860px] w-auto shrink-0 z-10 rounded-[32px] overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10">
        <img src={demoGif} alt="Yá em ação — demo" className="h-full w-auto object-contain" />
      </div>

      {/* Right */}
      <div className="flex flex-col z-10 max-w-[680px]">
        <p className="font-display text-[14px] font-bold text-primary uppercase tracking-[3px] mb-4 flex items-center gap-3">
          <span className="w-8 h-px bg-primary inline-block" />
          Yá em ação
        </p>
        <h2 className="font-display text-[68px] font-black text-white leading-tight mb-6">
          Uma conversa real<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">no WhatsApp</span>
        </h2>
        <p className="font-display text-[22px] text-foreground/50 mb-16">Nenhum app. Nenhuma planilha. Só a Yá.</p>

        <div className="flex flex-col gap-6">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center gap-5">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white text-[18px] font-black shrink-0"
                style={{ background: "linear-gradient(135deg, #E8673C, #8C30B0)" }}
              >
                {i + 1}
              </div>
              <span className="font-display text-[24px] font-semibold text-foreground/80">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </TalkSlideContainer>
  );
};

export default SlideDemo;
