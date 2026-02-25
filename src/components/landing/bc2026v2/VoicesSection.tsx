
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const VoicesSection = () => {
    return (
        <section className="py-24 px-6 bg-[#0D0D0D]">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">As Vozes</h2>
                    <p className="text-xl text-muted-foreground/80">Transformação real</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ margin: "-100px" }}
                        className="bg-card/20 p-8 md:p-10 rounded-3xl border border-white/5 relative"
                    >
                        <Quote className="absolute top-6 left-6 text-primary/20 w-12 h-12" />
                        <p className="text-2xl md:text-3xl font-medium text-white italic mb-8 relative z-10 leading-relaxed">
                            "Eu achava que o problema era o salário. <br />
                            <span className="text-primary font-bold">Era o delivery.</span>"
                        </p>
                        <div className="border-t border-white/10 pt-6">
                            <p className="text-muted-foreground text-lg">Descobriu <strong className="text-white">R$300/mês</strong> em delivery invisível. Redirecionou para mercado.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ margin: "-100px" }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-br from-primary/10 to-transparent p-8 md:p-10 rounded-3xl border border-primary/20 relative"
                    >
                        <Quote className="absolute top-6 left-6 text-primary/20 w-12 h-12" />
                        <p className="text-2xl md:text-3xl font-medium text-white italic mb-8 relative z-10 leading-relaxed">
                            "Pela primeira vez em 3 anos, <br />
                            <span className="text-primary font-bold">sobrou R$50</span> no fim do mês."
                        </p>
                        <div className="border-t border-white/10 pt-6">
                            <p className="text-muted-foreground text-lg">O começo de uma reserva. <strong className="text-[#F5A623] text-xl block mt-2">Dignidade.</strong></p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default VoicesSection;
