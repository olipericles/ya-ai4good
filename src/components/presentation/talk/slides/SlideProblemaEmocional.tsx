import { TalkSlideProps } from "../types";
import TalkSlideContainer from "../TalkSlideContainer";
import contextPhoto from "@/assets/maes/aurea.jpeg";

const SlideProblemaEmocional = ({ isActive }: TalkSlideProps) => {
  if (!isActive) return null;

  return (
    <TalkSlideContainer className="bg-[#F5F5F0] flex">
      {/* Left - 55% */}
      <div className="w-[55%] h-full flex flex-col justify-center px-16">
        <h2 className="font-talk-headline text-[32px] text-[#8C30B0] mb-6">
          Invisibilidade Financeira
        </h2>
        <p className="font-talk-body text-[16px] text-[#333] leading-relaxed mb-8">
          Essas mães já têm inteligência financeira. Elas sabem quanto custa o leite, o gás, a passagem. O que falta não é educação financeira, é visibilidade. É conseguir enxergar o todo quando cada dia é uma batalha.
        </p>

        <div className="bg-[#F5A623]/[0.15] border-l-4 border-[#F5A623] rounded-r-lg p-5">
          <p className="font-talk-body text-[16px] italic text-[#333]">
            "O conceito não é educação financeira. É visibilidade financeira."
          </p>
        </div>
      </div>

      {/* Right - 45% */}
      <div className="w-[45%] h-full p-10 flex items-center">
        <img
          src={contextPhoto}
          alt="Mulher negra, Salvador"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </TalkSlideContainer>
  );
};

export default SlideProblemaEmocional;
