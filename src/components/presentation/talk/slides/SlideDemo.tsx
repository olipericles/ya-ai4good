import { ChevronRight } from "lucide-react";
import { TalkSlideProps } from "../types";
import TalkSlideContainer from "../TalkSlideContainer";
import audioPhoto from "@/assets/images/interacao-carol-audio.jpeg";
import saldoPhoto from "@/assets/images/interacao-carol-saldo.jpeg";

const steps = ["Recebe áudio", "Transcreve", "Categoriza", "Responde com empatia"];

const SlideDemo = ({ isActive }: TalkSlideProps) => {
  if (!isActive) return null;

  return (
    <TalkSlideContainer className="bg-background flex items-center px-16 gap-16 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-primary/6 blur-[120px] rounded-full pointer-events-none" />

      {/* Phones */}
      <div className="flex gap-6 items-center z-10 shrink-0">
        <div className="flex flex-col items-center gap-4">
          <div className="w-[290px] h-[600px] rounded-[40px] border-[6px] border-foreground/20 bg-black shadow-2xl overflow-hidden">
            <img src={audioPhoto} alt="Carol enviando áudio" className="w-full h-full object-cover" />
          </div>
          <p className="font-display text-[15px] text-foreground/40">Carol manda um áudio</p>
        </div>

        <div className="w-14 h-14 rounded-full flex items-center justify-center bg-primary/20 border border-primary/40 z-10 shrink-0">
          <ChevronRight size={24} className="text-primary" />
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="w-[290px] h-[600px] rounded-[40px] border-[6px] border-primary/40 bg-black shadow-2xl shadow-primary/20 overflow-hidden">
            <img src={saldoPhoto} alt="Yá responde com saldo" className="w-full h-full object-cover" />
          </div>
          <p className="font-display text-[15px] text-foreground/40">Yá responde com o saldo</p>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col flex-1 z-10">
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
