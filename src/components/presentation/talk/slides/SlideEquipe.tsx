import { TalkSlideProps } from "../types";
import TalkSlideContainer from "../TalkSlideContainer";
import periclesPhoto from "@/assets/team/pericles-oficial.jpg";
import luaPhoto from "@/assets/team/equipe-lua.png";
import adrielePhoto from "@/assets/team/equipe-adriele.png";

const team = [
  {
    name: "Pericles Oliveira",
    role: "Estrategia de IA & Negocio",
    bio: "Eng. Eletricista, Mestrando UFBA, Analista na Rede Bahia",
    photo: periclesPhoto,
    color: "#E8673C",
  },
  {
    name: "Lua Mota",
    role: "Arquitetura de Software",
    bio: "Dev na Rede Bahia, Co-arquiteto tecnico da Ya",
    photo: luaPhoto,
    color: "#C040A0",
  },
  {
    name: "Adriele Ornellas",
    role: "UX Research & Comunidades",
    bio: "Pesquisadora, porta-voz oficial, ponte com as maes",
    photo: adrielePhoto,
    color: "#8C30B0",
  },
];

const SlideEquipe = ({ isActive }: TalkSlideProps) => {
  if (!isActive) return null;

  return (
    <TalkSlideContainer className="bg-background flex flex-col pt-14 pb-14 px-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[500px] bg-secondary/6 blur-[150px] rounded-full pointer-events-none" />

      <div className="z-10 flex flex-col h-full">
        <div className="shrink-0">
          <p className="font-display text-[14px] font-bold text-primary uppercase tracking-[3px] mb-3 flex items-center gap-3">
            <span className="w-8 h-px bg-primary inline-block" />
            Time
          </p>
          <h2 className="font-display text-[64px] font-black text-white mb-8">
            Quem constroi a Ya
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-8 flex-1">
          {team.map((t, i) => (
            <div
              key={i}
              className="bg-card/40 backdrop-blur-md border border-border/50 rounded-3xl overflow-hidden hover:border-primary/40 transition-colors flex flex-col"
            >
              {/* Photo */}
              <div className="flex-1 relative overflow-hidden min-h-0">
                <img src={t.photo} alt={t.name} className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, ${t.color}, ${t.color}44)` }} />
              </div>

              {/* Info */}
              <div className="p-8 shrink-0">
                <h3 className="font-display text-[28px] font-black text-white">{t.name}</h3>
                <p className="font-display text-[18px] font-bold mt-1 mb-3" style={{ color: t.color }}>{t.role}</p>
                <p className="font-display text-[16px] text-foreground/50 leading-relaxed">{t.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </TalkSlideContainer>
  );
};

export default SlideEquipe;
