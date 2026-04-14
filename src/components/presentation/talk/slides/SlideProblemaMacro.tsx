import { TalkSlideProps } from "../types";
import TalkSlideContainer from "../TalkSlideContainer";

const stats = [
  { number: "64%", label: "abaixo da linha de pobreza" },
  { number: "6 em 10", label: "são mulheres negras" },
  { number: "45%", label: "trabalham na informalidade" },
  { number: "58%", label: "têm no máximo ensino fundamental" },
];

const SlideProblemaMacro = ({ isActive }: TalkSlideProps) => {
  if (!isActive) return null;

  return (
    <TalkSlideContainer className="bg-[#1A1A2E] flex flex-col items-center justify-center px-20">
      <h1 className="font-talk-headline text-[52px] text-white mb-3">11,3 milhões de lares</h1>
      <p className="font-talk-body text-[22px] text-[#F5A623] mb-14">chefiados por mães solo no Brasil</p>

      <div className="grid grid-cols-2 gap-6 max-w-[900px] w-full">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-white/[0.08] rounded-2xl p-8 border-b-2"
            style={{ borderImage: "linear-gradient(90deg, #E8673C, #C040A0) 1" }}
          >
            <p className="font-talk-headline text-[48px] text-white leading-none">{s.number}</p>
            <p className="font-talk-body text-[14px] text-gray-300 mt-2">{s.label}</p>
          </div>
        ))}
      </div>
    </TalkSlideContainer>
  );
};

export default SlideProblemaMacro;
