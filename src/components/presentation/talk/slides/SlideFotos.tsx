import { TalkSlideProps } from "../types";
import TalkSlideContainer from "../TalkSlideContainer";
import palcoPhoto from "@/assets/images/boston-palco.jpeg";
import placaPhoto from "@/assets/images/boston-harvard-placa.jpeg";
import tuorPhoto from "@/assets/images/boston-tuor-harvard.jpeg";

const SlideFotos = ({ isActive }: TalkSlideProps) => {
  if (!isActive) return null;

  return (
    <TalkSlideContainer className="bg-[#F5F5F0] flex flex-col px-16 pt-14">
      <h2 className="font-talk-headline text-[28px] text-[#8C30B0] mb-8">Boston — Março 2026</h2>

      <div className="flex-1 flex gap-5 pb-14">
        {/* Main photo - 60% */}
        <div className="w-[60%] h-full">
          <img
            src={palcoPhoto}
            alt="Apresentação no auditório — Brazil Conference at Harvard"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Right stack - 38% */}
        <div className="w-[38%] flex flex-col gap-5 h-full">
          <img
            src={placaPhoto}
            alt="Luã e Péricles na Harvard Business School"
            className="w-full flex-1 object-cover rounded-2xl"
          />
          <img
            src={tuorPhoto}
            alt="Tour no campus de Harvard"
            className="w-full flex-1 object-cover rounded-2xl"
          />
        </div>
      </div>
    </TalkSlideContainer>
  );
};

export default SlideFotos;
