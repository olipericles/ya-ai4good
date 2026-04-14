
import { motion } from "framer-motion";

const ClosingSection = () => {
    return (
        <section className="py-32 px-6 bg-[#050505] flex flex-col items-center justify-center text-center min-h-[60vh]">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="space-y-8"
            >
                <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter">
                    11M mães. <br />
                    <span className="text-muted-foreground/50">22M crianças.</span>
                </h2>

                <div className="py-12">
                    <h1 className="text-9xl font-display font-bold text-white tracking-tighter">Yá</h1>
                    <p className="text-primary text-xl mt-2 italic font-serif">"mãe", em yorubá</p>
                </div>

                <p className="text-2xl md:text-4xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
                    Uma IA que cuida de quem <br />
                    <span className="font-medium text-white">cuida de todo mundo.</span>
                </p>
            </motion.div>
        </section>
    );
};

export default ClosingSection;
