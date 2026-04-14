
import { motion } from "framer-motion";
import { Mic, Camera, Keyboard } from "lucide-react";

const SolutionSection = () => {
    return (
        <section className="py-24 px-6 bg-[#0F0F16]">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-primary text-sm font-bold tracking-widest uppercase"
                    >
                        Assistente Financeira no WhatsApp
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-2"
                    >
                        A solução: Yá
                    </motion.h2>
                    <p className="text-xl text-muted-foreground">A IA transcreve, categoriza e organiza.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-20">
                    {[
                        { icon: Mic, title: "Manda áudio", desc: "A Yá ouve e entende o contexto." },
                        { icon: Camera, title: "Foto do cupom", desc: "Digitaliza gastos em segundos." },
                        { icon: Keyboard, title: "Ou só digita", desc: "Texto livre, como falar com amiga." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15 }}
                            className="bg-card/30 border border-white/5 p-8 rounded-3xl text-center hover:bg-card/50 transition-all"
                        >
                            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-muted-foreground">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="bg-card border border-border/20 rounded-3xl p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8 text-center md:text-left">
                            <div>
                                <h3 className="text-5xl md:text-7xl font-bold text-white mb-2">97<span className="text-primary">%</span></h3>
                                <p className="text-muted-foreground text-lg">acessam internet pelo celular</p>
                            </div>
                            <div>
                                <h3 className="text-5xl md:text-7xl font-bold text-white mb-2">91<span className="text-primary">%</span></h3>
                                <p className="text-muted-foreground text-lg">usam WhatsApp todo dia</p>
                            </div>
                        </div>
                        <div className="text-center md:text-right space-y-6">
                            <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                "A gente entra na <br />
                                <span className="text-primary">vida delas</span>."
                            </h3>
                            <p className="text-xl text-muted-foreground italic">
                                "Um registro imperfeito é melhor do que nenhum."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
