import { TalkSlideProps } from "../types";
import TalkSlideContainer from "../TalkSlideContainer";
import ImagePlaceholder from "../ImagePlaceholder";

const insightsTrind = [
  { quote: "A tecnologia que não entende contexto cultural não serve.", sub: "Design empático > design funcional para populações vulneráveis" },
  { quote: "Dados pequenos, impacto real.", sub: "3 mães transformadas valem mais que 10.000 downloads vazios" },
  { quote: "O WhatsApp não é canal. É território.", sub: "As mães já estão lá. A Yá vai até elas, não o contrário" },
];

const insightsBaia = [
  { quote: "Frameworks de robótica social funcionam para IA conversacional — com adaptações.", sub: "O Almere Model captura dimensões que métricas de UX tradicionais ignoram: ansiedade social, confiança percebida, atitude frente à tecnologia" },
  { quote: "O agente não é um chatbot. É um sistema cognitivo.", sub: "A deliberação via LLM permite adaptação contextual que regras fixas nunca alcançariam para este público" },
  { quote: "Construir e pesquisar ao mesmo tempo é Design Science Research na prática.", sub: "O artefato (Yá) e o conhecimento (dissertação) se alimentam mutuamente" },
];

const SlideAprendizados = ({ isActive, variant }: TalkSlideProps) => {
  if (!isActive) return null;
  const insights = variant === "baia" ? insightsBaia : insightsTrind;
  const title = variant === "baia"
    ? "O que a pesquisa está revelando"
    : "O que Harvard e o piloto nos ensinaram";
  const photoCaption = variant === "baia" ? "Pesquisa aplicada no território" : "Engenharia popular em ação";

  return (
    <TalkSlideContainer className="overflow-hidden">
      {/* Diagonal bg */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[#1A1A2E]" style={{ clipPath: "polygon(0 0, 100% 0, 55% 100%, 0 100%)" }} />
        <div className="absolute top-0 left-0 w-full h-full bg-[#F5F5F0]" style={{ clipPath: "polygon(100% 0, 100% 100%, 55% 100%)" }} />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center px-16">
        <h2 className="font-talk-headline text-[28px] text-white mb-10">{title}</h2>

        <div className="flex flex-col gap-6 max-w-[750px]">
          {insights.map((ins, i) => (
            <div key={i} className="relative pl-10">
              {/* Quote mark */}
              <span className="absolute -left-2 -top-4 text-[60px] font-talk-headline bg-gradient-to-r from-[#E8673C] to-[#8C30B0] bg-clip-text text-transparent opacity-20 select-none">
                "
              </span>
              <p className="font-talk-headline text-[16px] text-white leading-snug">"{ins.quote}"</p>
              <p className="font-talk-body text-[13px] text-gray-400 mt-1">{ins.sub}</p>
            </div>
          ))}
        </div>

        {/* Photo bottom-right */}
        <div className="absolute bottom-12 right-12">
          <ImagePlaceholder
            label="foto_engenharia_popular.jpg"
            caption={photoCaption}
            className="w-[200px] h-[150px]"
          />
        </div>
      </div>
    </TalkSlideContainer>
  );
};

export default SlideAprendizados;
