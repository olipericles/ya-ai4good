import { TalkSlideProps } from "../types";
import TalkSlideContainer from "../TalkSlideContainer";

const techBlocks = [
  { label: "WhatsApp Business API", sub: "Canal de entrada", color: "#25D366", icon: "💬" },
  { label: "N8N", sub: "Orquestração", color: "#E05B2D", icon: "⚙️" },
  { label: "Gemini API", sub: "Motor Cognitivo", color: "#4285F4", icon: "🧠" },
  { label: "PostgreSQL", sub: "Persistência", color: "#336791", icon: "🗄️" },
];

const academicCards = [
  { icon: "🧠", title: "SMA-c (Sistema Multi-Agente Cognitivo)", desc: "Agentes com capacidade deliberativa habilitada por LLMs" },
  { icon: "📊", title: "Almere Model (adaptado)", desc: "Framework de robótica social aplicado a IA conversacional" },
  { icon: "🔄", title: "Design Science Research", desc: "Metodologia: construir o artefato E gerar conhecimento científico" },
];

const SlideArquitetura = ({ isActive, variant }: TalkSlideProps) => {
  if (!isActive) return null;
  const isBaia = variant === "baia";

  return (
    <TalkSlideContainer className="bg-[#1A1A2E] flex flex-col px-16 pt-16">
      <h2 className="font-talk-headline text-white mb-1" style={{ fontSize: isBaia ? 30 : 32 }}>
        {isBaia ? "Da arquitetura técnica ao framework teórico" : "Como funciona por dentro"}
      </h2>
      <p className="font-talk-body text-[16px] text-[#F5A623] mb-8">
        {isBaia ? "Como a Yá funciona — e como a pesquisa a investiga" : "Stack técnico da Yá"}
      </p>

      {/* Tech flow */}
      <div className="flex items-center justify-center gap-4 mb-8">
        {techBlocks.map((b, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="bg-white/[0.08] rounded-xl p-5 flex flex-col items-center w-[220px] border border-white/[0.06]">
              <div
                className="w-[52px] h-[52px] rounded-xl flex items-center justify-center text-[26px] mb-3"
                style={{ background: `${b.color}22`, border: `1px solid ${b.color}55` }}
              >
                {b.icon}
              </div>
              <p className="font-talk-headline text-[15px] text-white text-center">{b.label}</p>
              <p className="font-talk-body text-[12px] text-gray-400 mt-1 text-center">{b.sub}</p>
            </div>
            {i < techBlocks.length - 1 && (
              <span className="text-[24px] bg-gradient-to-r from-[#E8673C] to-[#C040A0] bg-clip-text text-transparent font-bold">→</span>
            )}
          </div>
        ))}
      </div>

      {isBaia ? (
        <>
          <div className="relative flex items-center my-4">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#E8673C] via-[#C040A0] to-[#8C30B0]" />
            <span className="px-4 text-[12px] text-[#F5A623] uppercase tracking-[2px] font-talk-body font-bold">
              Camada de Investigação Acadêmica
            </span>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#8C30B0] via-[#C040A0] to-[#E8673C]" />
          </div>

          <div className="flex gap-4 mt-4">
            {academicCards.map((c, i) => (
              <div key={i} className="bg-white/[0.06] rounded-xl p-4 flex-1">
                <span className="text-[32px]">{c.icon}</span>
                <h4 className="font-talk-headline text-[16px] text-white mt-2 mb-1">{c.title}</h4>
                <p className="font-talk-body text-[12px] text-gray-400 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        /* Trind: fluxo completo detalhado */
        <div className="flex gap-4 mt-2">
          {[
            { step: "1", label: "Mãe envia", desc: "Áudio, texto ou foto do comprovante via WhatsApp", icon: "📱" },
            { step: "2", label: "N8N orquestra", desc: "Detecta tipo, roteaia para STT ou OCR se necessário", icon: "⚙️" },
            { step: "3", label: "Gemini interpreta", desc: "Categoriza, extrai valor, gera resposta empática", icon: "🧠" },
            { step: "4", label: "Yá responde", desc: "Confirmação + contexto do mês de volta no WhatsApp", icon: "💬" },
          ].map((f, i) => (
            <div key={i} className="bg-white/[0.06] rounded-xl p-5 flex-1 border border-white/[0.04]">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[24px]">{f.icon}</span>
                <span className="font-talk-headline text-[13px] text-[#F5A623] uppercase tracking-wider">Passo {f.step}</span>
              </div>
              <h4 className="font-talk-headline text-[17px] text-white mb-1">{f.label}</h4>
              <p className="font-talk-body text-[13px] text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      )}
    </TalkSlideContainer>
  );
};

export default SlideArquitetura;
