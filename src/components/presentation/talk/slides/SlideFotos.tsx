import { TalkSlideProps } from "../types";
import TalkSlideContainer from "../TalkSlideContainer";
import ImagePlaceholder from "../ImagePlaceholder";

const SlideFotos = ({ isActive }: TalkSlideProps) => {
  if (!isActive) return null;

  return (
    <TalkSlideContainer className="bg-[#F5F5F0] flex flex-col px-16 pt-14">
      <h2 className="font-talk-headline text-[28px] text-[#8C30B0] mb-8">Boston — Março 2026</h2>

      <div className="flex-1 flex gap-5 pb-14">
        {/* Main photo - 60% */}
        <div className="w-[60%] h-full">
          <ImagePlaceholder
            label="foto_harvard_palco.jpg"
            caption="Apresentação no auditório — Brazil Conference"
            className="w-full h-full"
          />
        </div>

        {/* Right stack - 38% */}
        <div className="w-[38%] flex flex-col gap-5 h-full">
          <ImagePlaceholder
            label="foto_mit_campus.jpg"
            caption="MIT Campus, Cambridge"
            className="w-full flex-1"
          />
          <ImagePlaceholder
            label="foto_equipe_boston.jpg"
            caption="Time Yá na Brazil Conference"
            className="w-full flex-1"
          />
        </div>
      </div>
    </TalkSlideContainer>
  );
};

export default SlideFotos;
