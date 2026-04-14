
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const PilotSection = () => {
    const steps = [
        { count: 18, label: "Mães convidadas" },
        { count: 10, label: "Cadastros (56%)" },
        { count: 5, label: "Engajadas (50%)" },
        { count: 2, label: "Transformações" }
    ];

    return (
        <section className="py-24 px-6 bg-background border-t border-border/10">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">O Teste</h2>
                        <p className="text-xl text-primary font-medium">Piloto em Salvador | Fev 2026</p>
                    </div>
                    <div className="text-right text-muted-foreground">
                        <p>Duração: 2 semanas</p>
                        <p>Custo: Zero (beta gratuito)</p>
                    </div>
                </div>

                <div className="relative">
                    {/* Funnel Line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary/20 to-primary/5 -translate-y-1/2 hidden md:block" />

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                className="relative bg-card border border-border/50 p-6 rounded-2xl text-center z-10 hover:border-primary/30 transition-colors"
                            >
                                <div className="text-4xl md:text-6xl font-bold text-white mb-2">{step.count}</div>
                                <div className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wide">{step.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 bg-primary/10 border border-primary/20 p-6 rounded-xl flex items-center justify-center gap-4 text-center md:text-left"
                >
                    <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0" />
                    <p className="text-lg md:text-xl text-white font-medium">
                        Meta atingida: 5 mães com uso consistente por 2 semanas
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default PilotSection;
