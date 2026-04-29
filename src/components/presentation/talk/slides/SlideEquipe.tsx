import { Linkedin } from "lucide-react";
import { TalkSlideProps } from "../types";
import TalkSlideContainer from "../TalkSlideContainer";
import equipePericles from "@/assets/team/equipe-pericles.png";
import equipeLua from "@/assets/team/equipe-lua.png";
import equipeAdriele from "@/assets/team/equipe-adriele.png";

const team = [
  {
    name: "Péricles Oliveira",
    role: "Estratégia e Produto",
    bio: "Eng. Eletricista, Mestrando UFBA, Analista na Rede Bahia",
    photo: equipePericles,
    color: "#E8673C",
    linkedin: "https://www.linkedin.com/in/olipericles/",
  },
  {
    name: "Luã Mota",
    role: "Arquitetura de Software",
    bio: "Dev na Rede Bahia, co-arquiteto técnico da Yá",
    photo: equipeLua,
    color: "#C040A0",
    linkedin: "https://www.linkedin.com/in/luaamota/",
  },
  {
    name: "Adriele Ornellas",
    role: "UX Research & Comunidades",
    bio: "Pesquisadora, porta-voz oficial, ponte com as mães",
    photo: equipeAdriele,
    color: "#8C30B0",
    linkedin: "https://www.linkedin.com/in/adrieleornellas/",
  },
];

const SlideEquipe = ({ isActive }: TalkSlideProps) => {
  if (!isActive) return null;

  return (
    <TalkSlideContainer className="bg-[#0A0A0A] flex flex-col pt-14 pb-14 px-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[500px] bg-secondary/6 blur-[150px] rounded-full pointer-events-none" />

      <div className="z-10 flex flex-col h-full">
        <div className="shrink-0 text-center mb-10">
          <p className="font-display text-[14px] font-bold text-primary uppercase tracking-[3px] mb-3 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-primary inline-block" />
            Time
            <span className="w-8 h-px bg-primary inline-block" />
          </p>
          <h2 className="font-display text-[64px] font-black text-white">
            Quem constrói a Yá
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-10 flex-1 min-h-0" style={{ gridTemplateRows: "1fr" }}>
          {team.map((t, i) => (
            <div
              key={i}
              className="bg-card/40 backdrop-blur-md border border-border/50 rounded-3xl p-10 flex flex-col items-center text-center justify-between hover:border-primary/40 transition-colors min-h-0"
            >
              {/* Circular photo */}
              <div
                className="w-[220px] h-[220px] rounded-full overflow-hidden border-4 mb-7 shrink-0"
                style={{ borderColor: t.color }}
              >
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <h3 className="font-display text-[28px] font-black text-white mb-1">{t.name}</h3>
              <p className="font-display text-[18px] font-bold mb-3" style={{ color: t.color }}>{t.role}</p>
              <p className="font-display text-[16px] text-foreground/50 leading-relaxed mb-6">{t.bio}</p>

              <a
                href={t.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/50 hover:text-[#0A66C2] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span className="font-display text-[14px] font-bold uppercase tracking-widest">Conectar</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </TalkSlideContainer>
  );
};

export default SlideEquipe;
