import { TalkSlideProps } from "../types";
import TalkSlideContainer from "../TalkSlideContainer";
import bostonPhoto from "@/assets/team/boston-lua-pericles.jpeg";

const insightsTrind = [
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

const insightsBaia = [
  {
    quote: "Frameworks de robótica social funcionam para IA conversacional.",
    sub: "O Almere Model captura ansiedade social e confiança percebida que métricas de UX tradicionais ignoram",
  },
  {
    quote: "O agente não é um chatbot. É um sistema cognitivo.",
    sub: "Deliberação via LLM permite adaptação contextual que regras fixas nunca alcançam para este público",
  },
  {
    quote: "Construir e pesquisar ao mesmo tempo é Design Science Research na prática.",
    sub: "O artefato (Yá) e o conhecimento (dissertação) se alimentam mutuamente",
  },
];

const SlideAprendizados = ({ isActive, variant }: TalkSlideProps) => {
  if (!isActive) return null;
  const insights = variant === "baia" ? insightsBaia : insightsTrind;
  const title = variant === "baia" ? "O que a pesquisa está revelando" : "O que Harvard e o piloto nos ensinaram";

  return (
    <TalkSlideContainer className="bg-[#0A0A0A] flex relative overflow-hidden">
      {/* Left content — 65% */}
      <div className="w-[65%] h-full flex flex-col pt-16 pb-16 pl-20 pr-16 z-10">
        <p className="font-display text-[14px] font-bold text-primary uppercase tracking-[3px] mb-4 flex items-center gap-3">
          <span className="w-8 h-px bg-primary inline-block" />
          Aprendizados
        </p>
        <h2 className="font-display text-[52px] font-black text-white leading-tight mb-10">{title}</h2>

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

      {/* Right — photo */}
      <div className="w-[35%] h-full relative overflow-hidden">
        <img
          src={bostonPhoto}
          alt="Luã e Péricles em Boston"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-transparent" style={{ backgroundSize: "30% 100%", backgroundRepeat: "no-repeat" }} />
        <div className="absolute top-0 bottom-0 left-0 w-[18%] bg-gradient-to-r from-[#0A0A0A] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/50 via-transparent to-transparent" />
      </div>
    </TalkSlideContainer>
  );
};

export default SlideAprendizados;
