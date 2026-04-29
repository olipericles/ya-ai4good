import { TalkSlideProps } from "../types";
import TalkSlideContainer from "../TalkSlideContainer";
import palcoPhoto    from "@/assets/images/boston-palco.jpeg";
import placaPhoto    from "@/assets/images/boston-harvard-placa.jpeg";
import tuorPhoto     from "@/assets/images/boston-tuor-harvard.jpeg";
import premioPhoto   from "@/assets/images/boston-premio.jpeg";
import vencedoresPhoto from "@/assets/images/boston-vencedores.jpg";

const photos = [
  // Row top — 3 colunas
  {
    src: placaPhoto,
    alt: "Harvard Business School",
    caption: "Harvard Business School",
    position: "object-center",
    gridArea: "placa",
  },
  {
    src: palcoPhoto,
    alt: "Apresentação no auditório — Brazil Conference",
    caption: "Auditório Harvard — Brazil Conference",
    position: "object-center",
    gridArea: "palco",
  },
  {
    src: tuorPhoto,
    alt: "Tour no campus de Harvard",
    caption: "Campus Harvard, Cambridge",
    position: "object-center",
    gridArea: "tuor",
  },
  // Row bottom — 2 células
  {
    src: premioPhoto,
    alt: "Recebendo o prêmio AI4Good",
    caption: "Premiação AI4Good",
    position: "object-top",
    gridArea: "premio",
  },
  {
    src: vencedoresPhoto,
    alt: "Vencedores do AI4Good 2026",
    caption: "Vencedores — Brazil Conference at Harvard",
    position: "object-top",
    gridArea: "vencedores",
  },
];

const SlideFotos = ({ isActive }: TalkSlideProps) => {
  if (!isActive) return null;

  return (
    <TalkSlideContainer className="bg-[#0A0A0A] flex flex-col relative overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center px-16 pt-10 pb-6 bg-gradient-to-b from-[#0A0A0A] to-transparent pointer-events-none">
        <p className="font-display text-[14px] font-bold text-primary uppercase tracking-[3px] flex items-center gap-3">
          <span className="w-8 h-px bg-primary inline-block" />
          Boston — Março 2026
        </p>
      </div>

      {/* Mosaic grid */}
      <div
        className="flex-1 pt-14"
        style={{
          display: "grid",
          gap: "6px",
          gridTemplateColumns: "3fr 4fr 3fr",
          gridTemplateRows: "3fr 2fr",
          gridTemplateAreas: `
            "placa palco tuor"
            "premio vencedores vencedores"
          `,
        }}
      >
        {photos.map((p) => (
          <div
            key={p.gridArea}
            className="relative overflow-hidden group"
            style={{ gridArea: p.gridArea }}
          >
            <img
              src={p.src}
              alt={p.alt}
              className={`w-full h-full object-cover ${p.position} group-hover:scale-105 transition-transform duration-700`}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-transparent to-transparent" />
            {/* Caption */}
            <p className="absolute bottom-3 left-4 font-display text-[12px] text-white/60 leading-none">
              {p.caption}
            </p>
          </div>
        ))}
      </div>
    </TalkSlideContainer>
  );
};

export default SlideFotos;
