import { TalkSlideProps } from "../types";
import TalkSlideContainer from "../TalkSlideContainer";
import periclesPhoto from "@/assets/team/equipe-pericles.png";
import luaPhoto from "@/assets/team/equipe-lua.png";
import adrielePhoto from "@/assets/team/equipe-adriele.png";

const team = [
  {
    name: "Péricles Oliveira",
    role: "Estratégia de IA & Negócio",
    bio: "Eng. Eletricista, Mestrando UFBA, Analista na Rede Bahia",
    photo: periclesPhoto,
  },
  {
    name: "Luã Mota",
    role: "Arquitetura de Software",
    bio: "Dev na Rede Bahia, Co-arquiteto técnico da Yá",
    photo: luaPhoto,
  },
  {
    name: "Adriele Ornellas",
    role: "UX Research & Comunidades",
    bio: "Pesquisadora, porta-voz oficial, ponte com as mães",
    photo: adrielePhoto,
  },
];

const SlideEquipe = ({ isActive }: TalkSlideProps) => {
  if (!isActive) return null;

  return (
    <TalkSlideContainer className="bg-[#1A1A2E] flex flex-col items-center justify-center px-20">
      <h2 className="font-talk-headline text-[32px] text-white mb-12">Quem constrói a Yá</h2>

      <div className="flex gap-8">
        {team.map((t, i) => (
          <div key={i} className="bg-white/[0.06] rounded-2xl p-7 w-[320px] flex flex-col items-center text-center">
            <img
              src={t.photo}
              alt={t.name}
              className="w-[100px] h-[100px] rounded-full mb-4 object-cover object-top"
            />
            <h3 className="font-talk-headline text-[18px] text-white">{t.name}</h3>
            <p className="font-talk-body text-[14px] text-[#F5A623] mt-1">{t.role}</p>
            <p className="font-talk-body text-[12px] text-gray-400 mt-2">{t.bio}</p>
          </div>
        ))}
      </div>
    </TalkSlideContainer>
  );
};

export default SlideEquipe;
