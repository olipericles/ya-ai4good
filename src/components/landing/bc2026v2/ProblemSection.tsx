
import { motion } from "framer-motion";
import { CreditCard, Pill, Bike, TrendingUp, Store, Receipt } from "lucide-react";

const ProblemSection = () => {
    const problems = [
        { icon: CreditCard, label: "Taxa surpresa" },
        { icon: Pill, label: "Remédio de emergência" },
        { icon: Bike, label: "Delivery acumulado" },
        { icon: TrendingUp, label: "Juros sem avisar" },
        { icon: Store, label: "Farmácia 24h" },
        { icon: Receipt, label: "R$12 que virou R$200" },
    ];

    return (
        <section className="py-24 px-6 bg-background relative overflow-hidden">

            <div className="max-w-6xl mx-auto text-center space-y-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold text-foreground"
                >
                    Pra onde foi o dinheiro?
                </motion.h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 md:p-8 rounded-2xl bg-card border border-border/30 hover:border-primary/50 transition-colors group flex flex-col items-center justify-center gap-4 aspect-square md:aspect-auto md:h-48"
                        >
                            <problem.icon className="w-12 h-12 text-muted-foreground group-hover:text-primary transition-colors duration-300" strokeWidth={1.5} />
                            <span className="text-lg md:text-xl font-medium text-foreground/90 group-hover:text-white transition-colors">
                                {problem.label}
                            </span>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="pt-8"
                >
                    <p className="text-2xl md:text-4xl font-light text-muted-foreground italic max-w-3xl mx-auto leading-relaxed">
                        "Não é falta de esforço. <br className="hidden md:block" />
                        <span className="text-primary font-semibold not-italic">É falta de ferramenta.</span>"
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ProblemSection;
