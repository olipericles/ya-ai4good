
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
// Placeholder QR Code
const QrCodeUrl = "https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg";

const DemoSection = () => {
    return (
        <section className="py-24 px-6 bg-[#0D0D0D] border-t border-white/5">
            <div className="max-w-5xl mx-auto bg-card border border-primary/20 rounded-[2.5rem] p-8 md:p-16 overflow-hidden relative">

                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />

                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

                    {/* QR Code Column (Hidden on Mobile) */}
                    <div className="hidden md:flex flex-col items-center space-y-4 flex-shrink-0">
                        <div className="bg-white p-4 rounded-3xl shadow-2xl shadow-primary/10">
                            <img src={QrCodeUrl} alt="Scan QR Code" className="w-48 h-48 opacity-90" />
                        </div>
                        <p className="text-sm text-muted-foreground uppercase tracking-widest font-medium">Escaneie para testar</p>
                    </div>

                    {/* Content Column */}
                    <div className="flex-1 text-center md:text-left space-y-8">
                        <div className="space-y-2">
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 text-green-500 text-sm font-medium border border-green-500/20 mb-4"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                Demo em Tempo Real
                            </motion.div>

                            <h2 className="text-4xl md:text-5xl font-bold text-white">Experimente a Yá agora!</h2>
                            <p className="text-lg text-muted-foreground">
                                Nossa IA está pronta para te ouvir, entender suas necessidades e mostrar como cuidamos de quem cuida.
                            </p>
                        </div>

                        <motion.a
                            href="https://wa.me/5571999999999" // TODO: Add real number
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold text-xl px-8 py-5 rounded-full shadow-lg shadow-green-900/20 hover:bg-[#20bd5a] transition-colors w-full md:w-auto hover:shadow-green-500/20"
                        >
                            <MessageCircle className="w-6 h-6" />
                            Falar com a Yá
                            <ArrowUpRight className="w-5 h-5 opacity-70" />
                        </motion.a>

                        <p className="text-xs text-muted-foreground block md:hidden">
                            * Abre seu WhatsApp diretamente
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DemoSection;
