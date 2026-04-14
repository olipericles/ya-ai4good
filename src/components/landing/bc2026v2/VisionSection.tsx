
import { motion } from "framer-motion";
import { Building2, Handshake, ScrollText, Globe2 } from "lucide-react";

const VisionSection = () => {
    const goals = [
        { icon: Building2, label: "Integração com CRAS" },
        { icon: Handshake, label: "Parcerias com ONGs" },
        { icon: ScrollText, label: "Políticas públicas" },
        { icon: Globe2, label: "Escala nacional" }
    ];

    return (
        <section className="py-24 px-6 bg-[#0F0F16]">
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-16"
                >
                    <span className="text-primary">1.000 mães</span> em 6 meses
                </motion.h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    {goals.map((goal, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-card/30 border border-white/5 p-6 rounded-2xl flex flex-col items-center gap-4 hover:bg-card/50 transition-colors"
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                <goal.icon size={32} />
                            </div>
                            <span className="font-medium text-white">{goal.label}</span>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto bg-gradient-to-r from-card to-card/50 border border-primary/20 p-8 md:p-12 rounded-3xl"
                >
                    <p className="text-2xl md:text-4xl font-light text-white leading-relaxed">
                        "Assistente Social Digital: o WhatsApp já tá lá. <br />
                        A mãe já tá lá.
                        <span className="block mt-4 text-primary font-bold">Só faltava a Yá.</span>"
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default VisionSection;
