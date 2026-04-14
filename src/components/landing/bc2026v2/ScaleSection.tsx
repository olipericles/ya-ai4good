
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ScaleSection = () => {
    return (
        <section className="py-24 px-6 bg-background relative">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Escalar o Sucesso</h2>
                    <p className="text-xl md:text-2xl text-muted-foreground text-balance">
                        Mudamos a vida de 2. Queremos mudar a vida de 1.000.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
                    {/* Current State */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="p-8 rounded-3xl bg-card border border-border/50 text-center space-y-6 grayscale opacity-80"
                    >
                        <h3 className="text-2xl font-bold text-muted-foreground uppercase tracking-widest">O que já fizemos</h3>
                        <div className="space-y-4 text-lg text-white font-medium">
                            <p className="border-b border-border/50 pb-2">18 mães</p>
                            <p className="border-b border-border/50 pb-2">Custo zero</p>
                            <p className="border-b border-border/50 pb-2">2 transformadas (11%)</p>
                            <p className="text-muted-foreground">2 semanas</p>
                        </div>
                    </motion.div>

                    {/* Arrow for Desktop */}
                    <div className="hidden md:flex justify-center text-primary/30">
                        <ArrowRight size={48} />
                    </div>

                    {/* Future State */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="p-10 rounded-3xl bg-card border-2 border-primary/50 text-center space-y-6 shadow-[0_0_50px_rgba(224,112,32,0.15)] transform md:scale-105"
                    >
                        <h3 className="text-2xl font-bold text-primary uppercase tracking-widest">Onde queremos chegar</h3>
                        <div className="space-y-4 text-xl text-white font-bold">
                            <p className="border-b border-primary/20 pb-2">1.000 mães</p>
                            <p className="border-b border-primary/20 pb-2">~R$5 por mãe/mês</p>
                            <p className="border-b border-primary/20 pb-2 text-primary">~110 transformadas</p>
                            <p className="text-muted-foreground font-normal">6 meses</p>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-16 max-w-2xl mx-auto"
                >
                    <p className="text-xl md:text-2xl italic text-white/80">
                        "A tecnologia já existe. O produto já funciona. <br />
                        <span className="text-white font-semibold not-italic">A gente só precisa de escala.</span>"
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ScaleSection;
