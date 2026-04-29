import { useState, useEffect } from "react";
import { Pause, Play } from "lucide-react";
import { TalkSlideProps } from "../types";
import TalkSlideContainer from "../TalkSlideContainer";
import aeroportoPhoto  from "@/assets/images/boston-aeroporto.jpeg";
import palcoPhoto      from "@/assets/images/boston-palco.jpeg";
import premioPhoto     from "@/assets/images/boston-premio.jpeg";
import vencedoresPhoto from "@/assets/images/boston-vencedores.jpg";
import mitPhoto        from "@/assets/images/boston-mit.jpg";

const photos = [
  { src: aeroportoPhoto,  alt: "Recepção no aeroporto",                         caption: "Chegada em Boston",                          position: "object-center" },
  { src: palcoPhoto,      alt: "Apresentação no auditório — Brazil Conference", caption: "Wong Auditorium, MIT — Brazil Conference",     position: "object-center" },
  { src: premioPhoto,     alt: "Recebendo o prêmio AI4Good",                   caption: "Premiação AI4Good - Yá",                          position: "object-center" },
  { src: vencedoresPhoto, alt: "Vencedores do AI4Good 2026",                   caption: "Vencedores - AI4Good",  position: "object-center" },
  { src: mitPhoto,        alt: "Grupo em frente ao MIT",                        caption: "MIT — Massachusetts Institute of Technology", position: "object-center" },
];

const INTERVAL_MS = 5000;

const SlideFotos = ({ isActive }: TalkSlideProps) => {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);

  // Re-runs when active changes → resets 3-second countdown on manual select
  useEffect(() => {
    if (!isActive || !playing) return;
    const id = setInterval(() => setActive(i => (i + 1) % photos.length), INTERVAL_MS);
    return () => clearInterval(id);
  }, [isActive, playing, active]);

  if (!isActive) return null;

  return (
    <TalkSlideContainer className="bg-[#0A0A0A] flex flex-col relative overflow-hidden">
      <style>{`
        @keyframes slide-progress {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center px-16 pt-10 pb-6 bg-gradient-to-b from-[#0A0A0A] to-transparent pointer-events-none">
        <p className="font-display text-[14px] font-bold text-primary uppercase tracking-[3px] flex items-center gap-3">
          <span className="w-8 h-px bg-primary inline-block" />
          Boston — Março 2026
        </p>
      </div>

      {/* Hero — stacked images with opacity fade */}
      <div className="flex-1 relative overflow-hidden">
        {photos.map((p, i) => (
          <img
            key={i}
            src={p.src}
            alt={p.alt}
            className={`absolute inset-0 w-full h-full object-contain ${p.position}`}
            style={{ opacity: i === active ? 1 : 0, transition: "opacity 0.9s ease" }}
          />
        ))}

        {/* Caption */}
        <p className="absolute bottom-6 left-16 font-display text-[15px] text-white/80 z-10 drop-shadow-lg transition-opacity duration-500">
          {photos[active].caption}
        </p>

        {/* Play / Pause */}
        <button
          onClick={() => setPlaying(p => !p)}
          className="absolute bottom-5 right-16 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/15 transition-all duration-200"
        >
          {playing ? <Pause size={15} /> : <Play size={15} />}
        </button>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10 z-10">
          {playing && (
            <div
              key={`bar-${active}`}
              className="h-full bg-primary"
              style={{ animation: `slide-progress ${INTERVAL_MS}ms linear forwards` }}
            />
          )}
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="h-[158px] flex gap-3 px-16 py-4 shrink-0">
        {photos.map((p, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="relative flex-1 h-full rounded-xl overflow-hidden transition-all duration-300"
            style={{
              boxShadow: i === active ? "0 0 0 2px #0A0A0A, 0 0 0 4px #E8673C" : "none",
            }}
          >
            <img
              src={p.src}
              alt={p.alt}
              className={`w-full h-full object-contain ${p.position}`}
            />
            {/* Dimming overlay for inactive thumbnails */}
            <div
              className="absolute inset-0 transition-opacity duration-300"
              style={{ backgroundColor: "#0A0A0A", opacity: i === active ? 0 : 0.5 }}
            />
          </button>
        ))}
      </div>
    </TalkSlideContainer>
  );
};

export default SlideFotos;
