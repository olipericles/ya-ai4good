import { TalkSlideProps } from "../types";
import TalkSlideContainer from "../TalkSlideContainer";
import bostonPhoto from "@/assets/team/boston-lua-pericles.jpeg";

const insightsTrind = [
  {
    quote: "A tecnologia que nao entende contexto cultural nao serve.",
    sub: "Design empatico supera design funcional para populacoes vulneraveis",
  },
  {
    quote: "Dados pequenos, impacto real.",
    sub: "3 maes transformadas valem mais que 10.000 downloads vazios",
  },
  {
    quote: "O WhatsApp nao e canal. E territorio.",
    sub: "As maes ja estao la. A Ya vai ate elas, nao o contrario",
  },
];

const insightsBaia = [
  {
    quote: "Frameworks de robotica social funcionam para IA conversacional.",
    sub: "O Almere Model captura ansiedade social e confianca percebida que metricas de UX tradicionais ignoram",
  },
  {
    quote: "O agente nao e um chatbot. E um sistema cognitivo.",
    sub: "Deliberacao via LLM permite adaptacao contextual que regras fixas nunca alcancam para este publico",
  },
  {
    quote: "Construir e pesquisar ao mesmo tempo e Design Science Research na pratica.",
    sub: "O artefato (Ya) e o conhecimento (dissertacao) se alimentam mutuamente",
  },
];

const SlideAprendizados = ({ isActive, variant }: TalkSlideProps) => {
  if (!isActive) return null;
  const insights = variant === "baia" ? insightsBaia : insightsTrind;
  const title = variant === "baia" ? "O que a pesquisa esta revelando" : "O que Harvard e o piloto nos ensinaram";

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
          alt="Harvard campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent" />
      </div>
    </TalkSlideContainer>
  );
};

export default SlideAprendizados;
