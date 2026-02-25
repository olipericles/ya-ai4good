
import { motion } from "framer-motion";

// Fallback images since assets don't exist yet
const PlaceholderImg = "https://ui-avatars.com/api/?background=E07020&color=fff&size=200";

const TeamSection = () => {
    const team = [
        { name: "Adriele Ornellas", role: "UX Research & Apresentação", img: PlaceholderImg },
        { name: "Péricles Oliveira", role: "Arquitetura Técnica", img: PlaceholderImg },
        { name: "Luã Mota", role: "Dados & Software", img: PlaceholderImg }
    ];

    return (
        <section className="py-24 px-6 bg-background">
            <div className="max-w-6xl mx-auto text-center space-y-16">
                <div className="space-y-4">
                    <h2 className="text-4xl md:text-6xl font-bold text-white">O Time</h2>
                    <p className="text-xl text-primary">Da periferia de Salvador pro Brasil</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {team.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="flex flex-col items-center space-y-4"
                        >
                            <div className="w-48 h-48 rounded-full border-4 border-primary overflow-hidden relative group">
                                <img
                                    src={PlaceholderImg} // Using placeholder first to avoid broken images
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${member.name}&background=1E1E30&color=E07020&size=200`;
                                    }}
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                                <p className="text-muted-foreground">{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="max-w-3xl mx-auto space-y-8 pt-8"
                >
                    <p className="text-2xl text-white/90 font-medium">
                        "A gente não estudou esse problema num paper. <br />
                        A gente viveu do lado dele."
                    </p>
                    <p className="text-lg text-muted-foreground">
                        Cada um de nós tem uma mãe solo na família, na rua, na história. <br />
                        Estamos construindo a ferramenta que a gente queria que existisse pra elas.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default TeamSection;
