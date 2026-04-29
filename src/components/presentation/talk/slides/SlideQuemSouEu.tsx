import { TalkSlideProps } from "../types";
import TalkSlideContainer from "../TalkSlideContainer";
import periclesPhoto from "@/assets/team/pericles-oficial.jpg";

const iconStyle = "w-9 h-9 rounded-full flex items-center justify-center text-white text-[16px] shrink-0";
const gradientBg = "bg-gradient-to-br from-[#E8673C] via-[#C040A0] to-[#8C30B0]";

const blocksTrind = [
  { icon: "⚡", text: "Engenheiro Eletricista — Analista de Dados e IA na Rede Bahia" },
  { icon: "🎓", text: "Mestrando em Engenharia Elétrica (PPGEE/UFBA) — Sistemas Multi-Agente Cognitivos" },
  { icon: "🏗️", text: "Co-fundador da Praxis Agência" },
  { icon: "🏠", text: "Cria da Vila Matos, Salvador" },
];

const blocksBaia = [
  { icon: "⚡", text: "Engenheiro Eletricista — Analista de Dados e IA na Rede Bahia" },
  { icon: "🎓", text: "Mestrando no PPGEE/UFBA — Sistemas Multi-Agente Cognitivos com LLMs" },
  { icon: "🔬", text: "Pesquisa: Aceitação de IA conversacional por populações vulneráveis" },
  { icon: "🏠", text: "Cria da Vila Matos, Salvador" },
];

const SlideQuemSouEu = ({ isActive, variant }: TalkSlideProps) => {
  if (!isActive) return null;
  const blocks = variant === "baia" ? blocksBaia : blocksTrind;

  return (
    <TalkSlideContainer className="bg-[#F5F5F0] flex">
      {/* Left column - 40% */}
      <div className="w-[40%] h-full flex flex-col items-center justify-center px-12">
        <img
          src={periclesPhoto}
          alt="Péricles Oliveira da Silva"
          className="w-[280px] h-[350px] object-cover object-top rounded-xl"
        />
        <h3 className="font-talk-headline text-[20px] text-[#1A1A2E] mt-6">Péricles Oliveira da Silva</h3>
        <p className="font-talk-body text-[14px] text-[#666]">Salvador, Bahia</p>
      </div>

      {/* Right column - 60% */}
      <div className="w-[60%] h-full flex flex-col justify-center pr-16">
        <h2 className="font-talk-headline text-[28px] text-[#8C30B0] mb-8">
          Engenharia Popular e Solidária
        </h2>

        <div className="flex flex-col gap-5">
          {blocks.map((b, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className={`${iconStyle} ${gradientBg}`}>{b.icon}</div>
              <p className="font-talk-body text-[16px] text-[#333] leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>

        {/* Separator line */}
        <div className="mt-8 mb-5 h-[2px] w-full bg-gradient-to-r from-[#E8673C] via-[#C040A0] to-[#8C30B0] opacity-30 rounded-full" />

        <p className="font-talk-body text-[16px] italic text-[#E8673C]">
          "Tecnologia deve servir a quem mais precisa"
        </p>
      </div>
    </TalkSlideContainer>
  );
};

export default SlideQuemSouEu;
