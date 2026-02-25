
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const interval = duration / steps;
        const target = 11;

        let current = 0;
        const timer = setInterval(() => {
            current += target / steps;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, interval);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center p-6 overflow-hidden bg-gradient-to-b from-background to-[#1A1A2E]">
            {/* Background Element - Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 max-w-4xl mx-auto"
            >
                <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-foreground mb-4">
                    <span className="text-primary">{count}</span> milhões
                </h1>

                <h2 className="text-2xl md:text-4xl font-light text-muted-foreground/90">
                    de lares chefiados por mães solo no Brasil
                </h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mt-12 p-6 md:p-8 rounded-2xl bg-card border border-border/50 backdrop-blur-sm max-w-2xl mx-auto shadow-xl"
                >
                    <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                        90% do crescimento na última década: <br />
                        <span className="text-primary font-bold text-2xl">mulheres negras e pardas</span>
                    </p>
                    <p className="text-xs text-muted-foreground mt-4 uppercase tracking-widest text-right">Fonte: FGV/IBRE 2022</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="mt-20 flex justify-center"
                >
                    {/* Placeholder for Yá stylized logo - Using text for now if SVG not available */}
                    <span className="text-6xl font-bold font-display text-foreground">Yá</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
                >
                    <span className="text-muted-foreground text-sm cursor-pointer">Conheça a Yá ↓</span>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
