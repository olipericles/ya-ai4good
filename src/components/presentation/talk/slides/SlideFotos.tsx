import { TalkSlideProps } from "../types";
import TalkSlideContainer from "../TalkSlideContainer";
import palcoPhoto from "@/assets/images/boston-palco.jpeg";
import placaPhoto from "@/assets/images/boston-harvard-placa.jpeg";
import tuorPhoto from "@/assets/images/boston-tuor-harvard.jpeg";

const SlideFotos = ({ isActive }: TalkSlideProps) => {
  if (!isActive) return null;

  return (
    <TalkSlideContainer className="bg-background flex flex-col relative overflow-hidden">
      {/* Header bar */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center px-16 pt-10 pb-6 bg-gradient-to-b from-background to-transparent">
        <p className="font-display text-[14px] font-bold text-primary uppercase tracking-[3px] flex items-center gap-3">
          <span className="w-8 h-px bg-primary inline-block" />
          Boston — Marco 2026
        </p>
      </div>

      {/* Full bleed photos */}
      <div className="flex-1 flex gap-2 pt-16">
        {/* Main photo - 60% */}
        <div className="w-[60%] h-full relative group overflow-hidden">
          <img
            src={palcoPhoto}
            alt="Apresentacao no auditorio — Brazil Conference at Harvard"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          <p className="absolute bottom-5 left-6 font-display text-[14px] text-white/70">Auditorio Harvard — Brazil Conference</p>
        </div>

        {/* Right stack - 40% */}
        <div className="w-[40%] flex flex-col gap-2 h-full">
          <div className="flex-1 relative group overflow-hidden">
            <img
              src={placaPhoto}
              alt="Harvard Business School"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-5 font-display text-[13px] text-white/70">Harvard Business School</p>
          </div>
          <div className="flex-1 relative group overflow-hidden">
            <img
              src={tuorPhoto}
              alt="Tour no campus de Harvard"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-5 font-display text-[13px] text-white/70">Campus Harvard, Cambridge</p>
          </div>
        </div>
      </div>
    </TalkSlideContainer>
  );
};

export default SlideFotos;
