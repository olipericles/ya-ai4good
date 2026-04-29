import { Zap, GraduationCap, Building2, Home, FlaskConical } from "lucide-react";
import { TalkSlideProps } from "../types";
import TalkSlideContainer from "../TalkSlideContainer";
import periclesPhoto from "@/assets/team/pericles-oficial.jpg";

const blocksTrind = [
  { Icon: Zap, label: "Engenheiro Eletricista", sub: "Analista de Dados e IA na Rede Bahia" },
  { Icon: GraduationCap, label: "Mestrando PPGEE/UFBA", sub: "Sistemas Multi-Agente Cognitivos com LLMs" },
  { Icon: Building2, label: "Co-fundador da Praxis Agência", sub: "Produtos digitais com impacto social" },
  { Icon: Home, label: "Cria da Vila Matos, Salvador", sub: "Periférico, orgulhoso, inconformado" },
];

const blocksBaia = [
  { Icon: Zap, label: "Engenheiro Eletricista", sub: "Analista de Dados e IA na Rede Bahia" },
  { Icon: GraduationCap, label: "Mestrando PPGEE/UFBA", sub: "Sistemas Multi-Agente Cognitivos com LLMs" },
  { Icon: FlaskConical, label: "Pesquisa: Aceitação de IA por populações vulneráveis", sub: "Design Science Research" },
  { Icon: Home, label: "Cria da Vila Matos, Salvador", sub: "Periférico, orgulhoso, inconformado" },
];

const SlideQuemSouEu = ({ isActive, variant }: TalkSlideProps) => {
  if (!isActive) return null;
  const blocks = variant === "baia" ? blocksBaia : blocksTrind;

  return (
    <TalkSlideContainer className="bg-background flex">
      {/* Left — full height photo */}
      <div className="w-[38%] h-full relative overflow-hidden">
        <img src={periclesPhoto} alt="Péricles Oliveira da Silva" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-r from-transparent to-background" />
        <div className="absolute bottom-12 left-10">
          <p className="font-display text-[22px] font-black text-white">Péricles Oliveira da Silva</p>
          <p className="font-display text-[16px] text-foreground/50 mt-1">Salvador, Bahia</p>
        </div>
      </div>

      {/* Right */}
      <div className="w-[62%] h-full flex flex-col justify-center pl-14 pr-20">
        <p className="font-display text-[14px] font-bold text-primary uppercase tracking-[3px] mb-4 flex items-center gap-3">
          <span className="w-8 h-px bg-primary inline-block" />
          Quem fala
        </p>
        <h2 className="font-display text-[52px] font-black text-white leading-tight mb-10">
          Engenharia Popular<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">e Solidária</span>
        </h2>

        <div className="flex flex-col gap-4">
          {blocks.map(({ Icon, label, sub }, i) => (
            <div key={i} className="flex items-center gap-5 bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl px-6 py-5">
              <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                <Icon size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-display text-[20px] font-bold text-white">{label}</p>
                <p className="font-display text-[14px] text-foreground/50 mt-0.5">{sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pl-6 border-l-2 border-primary/40">
          <p className="font-display text-[20px] italic text-primary/90">
            "Tecnologia deve servir a quem mais precisa"
          </p>
        </div>
      </div>
    </TalkSlideContainer>
  );
};

export default SlideQuemSouEu;
