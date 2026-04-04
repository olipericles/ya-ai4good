import { TalkSlideProps } from "../types";
import TalkSlideContainer from "../TalkSlideContainer";

const funnel = [
  { label: "Pré-registradas", value: 14, color: "#E8673C", width: "100%" },
  { label: "Engajadas", value: 10, color: "#D050A8", width: "71%" },
  { label: "Uso significativo", value: 5, color: "#A038B8", width: "36%" },
  { label: "Transformadas", value: 3, color: "#8C30B0", width: "21%" },
];

const insights = [
  "Mães não registram gastos espontaneamente — o onboarding proativo é essencial",
  "Linguagem de amiga reduz ansiedade financeira em vez de provocar",
  "Foto do comprovante foi a forma mais natural de registro",
];

const SlidePiloto = ({ isActive }: TalkSlideProps) => {
  if (!isActive) return null;

  return (
    <TalkSlideContainer className="bg-[#F5F5F0] flex">
      {/* Left 50% */}
      <div className="w-1/2 h-full flex flex-col justify-center px-16">
        <h2 className="font-talk-headline text-[28px] text-[#8C30B0] mb-8">Piloto com mães reais</h2>

        <div className="flex flex-col gap-3">
          {funnel.map((f, i) => (
            <div key={i} className="flex items-center gap-4">
              <div
                className="h-[44px] rounded-lg flex items-center px-4 transition-all"
                style={{ width: f.width, backgroundColor: f.color }}
              >
                <span className="font-talk-headline text-[20px] text-white">{f.value}</span>
              </div>
              <span className="font-talk-body text-[14px] text-[#333] whitespace-nowrap">{f.label}</span>
            </div>
          ))}
        </div>

        <p className="font-talk-body text-[14px] font-bold text-[#F5A623] mt-6">
          Custo operacional: menos de R$2/usuária/mês
        </p>
      </div>

      {/* Right 50% */}
      <div className="w-1/2 h-full flex flex-col justify-center pr-16">
        <h3 className="font-talk-headline text-[20px] text-[#333] mb-6">O que aprendemos</h3>

        <div className="flex flex-col gap-4">
          {insights.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-5 shadow-sm"
              style={{ borderLeft: "3px solid", borderImage: "linear-gradient(180deg, #E8673C, #8C30B0) 1" }}
            >
              <p className="font-talk-body text-[14px] text-[#333] leading-relaxed">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </TalkSlideContainer>
  );
};

export default SlidePiloto;
