import { TalkSlideProps } from "../types";
import TalkSlideContainer from "../TalkSlideContainer";
import audioPhoto from "@/assets/images/interacao-carol-audio.jpeg";
import saldoPhoto from "@/assets/images/interacao-carol-saldo.jpeg";

const steps = ["Recebe áudio", "Transcreve", "Categoriza", "Responde com empatia"];

const SlideDemo = ({ isActive }: TalkSlideProps) => {
  if (!isActive) return null;

  return (
    <TalkSlideContainer className="bg-[#F5F5F0] flex items-center justify-center px-20 gap-16">
      {/* Left: phone mockups */}
      <div className="flex gap-5 items-end">
        {/* First screen — áudio */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative w-[220px] h-[440px] rounded-[28px] border-[5px] border-[#222] bg-[#111] shadow-2xl overflow-hidden">
            <img src={audioPhoto} alt="Carol enviando áudio para Yá" className="w-full h-full object-cover rounded-[22px]" />
          </div>
          <span className="font-talk-body text-[12px] text-[#999]">Carol manda um áudio</span>
        </div>

        {/* Arrow */}
        <span className="text-[32px] text-[#E8673C] mb-16">→</span>

        {/* Second screen — resposta */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative w-[220px] h-[440px] rounded-[28px] border-[5px] border-[#222] bg-[#111] shadow-2xl overflow-hidden">
            <img src={saldoPhoto} alt="Yá responde com saldo do mês" className="w-full h-full object-cover rounded-[22px]" />
          </div>
          <span className="font-talk-body text-[12px] text-[#999]">Yá responde com o saldo</span>
        </div>
      </div>

      {/* Right: description */}
      <div className="flex flex-col max-w-[420px]">
        <h2 className="font-talk-headline text-[32px] text-[#8C30B0] mb-3">Yá em ação</h2>
        <p className="font-talk-body text-[16px] text-[#666] mb-10">Uma conversa real no WhatsApp</p>

        <div className="flex flex-col gap-3">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[13px] font-bold shrink-0"
                style={{ background: "linear-gradient(135deg, #E8673C, #8C30B0)" }}>
                {i + 1}
              </div>
              <span className="font-talk-body text-[15px] text-[#333] font-medium">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </TalkSlideContainer>
  );
};

export default SlideDemo;
