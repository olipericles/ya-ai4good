import { TalkSlideProps } from "../types";
import TalkSlideContainer from "../TalkSlideContainer";
import ImagePlaceholder from "../ImagePlaceholder";

const steps = ["Recebe áudio", "Transcreve", "Categoriza", "Responde com empatia"];

const SlideDemo = ({ isActive }: TalkSlideProps) => {
  if (!isActive) return null;

  return (
    <TalkSlideContainer className="bg-[#F5F5F0] flex flex-col items-center justify-center px-20">
      <h2 className="font-talk-headline text-[32px] text-[#8C30B0] mb-2">Yá em ação</h2>
      <p className="font-talk-body text-[16px] text-[#666] mb-10">Uma conversa real no WhatsApp</p>

      {/* Phone mockup */}
      <div className="relative w-[280px] h-[560px] rounded-[32px] border-[6px] border-[#222] bg-[#111] shadow-2xl overflow-hidden">
        <ImagePlaceholder
          label="demo_ya_whatsapp.gif"
          caption="GIF demo da Yá"
          className="w-full h-full rounded-[26px]"
        />
      </div>

      {/* Steps */}
      <div className="flex items-center gap-3 mt-10">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="font-talk-body text-[14px] text-[#333] font-medium">{s}</span>
            {i < steps.length - 1 && <span className="text-[#E8673C] text-[16px]">→</span>}
          </div>
        ))}
      </div>
    </TalkSlideContainer>
  );
};

export default SlideDemo;
