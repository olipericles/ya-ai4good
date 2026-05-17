import { TalkSlideProps } from "../types";
import TalkSlideContainer from "../TalkSlideContainer";
import harvardPhoto from "@/assets/team/harvard-aprendizados.jpg";

const insights = [
  {
    quote: "A tecnologia que não entende contexto cultural não serve.",
    sub: "Design empático supera design funcional para populações vulneráveis",
  },
  {
    quote: "Dados pequenos, impacto real.",
    sub: "3 mães transformadas valem mais que 10.000 downloads vazios",
  },
  {
    quote: "O WhatsApp não é canal. É território.",
    sub: "As mães já estão lá. A Yá vai até elas, não o contrário",
  },
];

const SlideAprendizados = ({ isActive }: TalkSlideProps) => {
  if (!isActive) return null;

  return (
    <TalkSlideContainer className="bg-[#0A0A0A] flex relative overflow-hidden">
      <div className="w-1/2 h-full flex flex-col pt-16 pb-16 pl-20 pr-10 z-10">
        <p className="font-display text-[14px] font-bold text-primary uppercase tracking-[3px] mb-4 flex items-center gap-3">
          <span className="w-8 h-px bg-primary inline-block" />
          Aprendizados
        </p>
        <h2 className="font-display text-[52px] font-black text-white leading-tight mb-10">
          O que Harvard e o piloto nos ensinaram
        </h2>

        <div className="flex flex-col gap-8 flex-1 justify-center">
          {insights.map((ins, i) => (
            <div key={i} className="relative pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full" style={{ background: "linear-gradient(180deg, #E8673C, #8C30B0)" }} />
              <p className="font-display text-[26px] font-bold text-white leading-snug mb-3">"{ins.quote}"</p>
              <p className="font-display text-[17px] text-foreground/50 leading-relaxed">{ins.sub}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/2 h-full relative flex items-center justify-center bg-[#0A0A0A]">
        <img
          src={harvardPhoto}
          alt="Harvard — aprendizados"
          className="w-full h-full object-contain"
        />
        <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#0A0A0A] to-transparent pointer-events-none" />
      </div>
    </TalkSlideContainer>
  );
};

export default SlideAprendizados;
