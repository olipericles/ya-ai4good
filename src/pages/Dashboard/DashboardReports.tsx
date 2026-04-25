import { useState, useEffect, useMemo } from "react";
import { Loader2, BarChart3, MapPin, Smartphone, Users, Megaphone, CalendarDays, TrendingDown } from "lucide-react";
import {
    BarChart, Bar, ResponsiveContainer, Tooltip as RechartsTooltip,
    XAxis, YAxis, Cell, PieChart, Pie
} from "recharts";

const API_BASE_URL = import.meta.env.VITE_API_URL || "https://www.praxisagencia.com.br";

interface WaitlistEntry {
    id: number;
    tipo: string;
    nome: string;
    estado: string;
    cidade: string;
    ja_usou_app_financeiro: string | null;
    interesse_ajudar_outras: string;
    como_conheceu: string[];
    created_at: string;
    filhos: string;
}

interface DashboardReportsProps {
    adminToken: string;
}

const COLORS = {
    primary: "#E26B58",
    secondary: "#8B3A8B",
    accent: "#D4AF37",
    emerald: "#10b981",
    blue: "#3b82f6",
    amber: "#f59e0b",
    cyan: "#06b6d4",
    red: "#ef4444",
    purple: "#a855f7",
    pink: "#ec4899",
    indigo: "#6366f1",
    teal: "#14b8a6",
};

const CHART_PALETTE = [
    COLORS.primary, COLORS.blue, COLORS.emerald, COLORS.amber,
    COLORS.purple, COLORS.cyan, COLORS.pink, COLORS.indigo,
    COLORS.teal, COLORS.red, COLORS.accent, COLORS.secondary,
];

const COMO_CONHECEU_LABELS: Record<string, string> = {
    g1: "G1",
    conexao_bahia: "Conexão Bahia",
    brazil_conference: "Brazil Conference",
    instagram: "Instagram",
    linkedin: "LinkedIn",
    amiga: "Amiga(o)",
    radio_tv: "Rádio/TV",
    outro: "Outro",
};

const TIPO_LABELS: Record<string, string> = {
    mae_solo: "🤱 Mãe Solo",
    apoiador: "💛 Apoiador",
    comunidade: "🏢 Comunidade",
    selo: "🏆 Parceiro Selo",
};

const APP_LABELS: Record<string, string> = {
    sim: "✅ Sim, usa",
    tentou: "⚠️ Tentou, não adaptou",
    nao: "❌ Nunca usou",
};

const AJUDAR_LABELS: Record<string, string> = {
    sim: "🤝 Sim!",
    nao: "— Não agora",
    talvez: "🤔 Talvez",
};

function CustomTooltip({ active, payload, label }: any) {
    if (active && payload && payload.length) {
        return (
            <div className="bg-[#0a0a0a]/95 border border-white/10 px-4 py-3 rounded-xl shadow-2xl">
                <p className="text-white/50 text-[10px] font-mono uppercase tracking-wider mb-1">{label || payload[0].payload.name}</p>
                <p className="text-white font-black text-lg">{payload[0].value}</p>
            </div>
        );
    }
    return null;
}

function ChartCard({ title, icon: Icon, children, subtitle }: { title: string; icon: any; children: React.ReactNode; subtitle?: string }) {
    return (
        <div className="bg-[#0d0d0d]/80 border border-white/5 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[60px] rounded-full" />
            <div className="flex items-center gap-3 mb-1 relative z-10">
                <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-sm font-bold text-white">{title}</h3>
            </div>
            {subtitle && <p className="text-[10px] text-white/30 font-mono uppercase tracking-wider mb-4 ml-11">{subtitle}</p>}
            <div className="relative z-10 mt-4">
                {children}
            </div>
        </div>
    );
}

function countBy(arr: WaitlistEntry[], keyFn: (item: WaitlistEntry) => string | null | undefined): Record<string, number> {
    const counts: Record<string, number> = {};
    for (const item of arr) {
        const key = keyFn(item);
        if (key) {
            counts[key] = (counts[key] || 0) + 1;
        }
    }
    return counts;
}

function toChartData(counts: Record<string, number>, labels?: Record<string, string>) {
    return Object.entries(counts)
        .map(([key, value]) => ({ name: labels?.[key] || key, value, rawKey: key }))
        .sort((a, b) => b.value - a.value);
}

export default function DashboardReports({ adminToken }: DashboardReportsProps) {
    const [entries, setEntries] = useState<WaitlistEntry[]>([]);
    const [intents, setIntents] = useState<{ tipo: string; timestamp: string }[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const [entriesRes, intentsRes] = await Promise.all([
                    fetch(`${API_BASE_URL}/api/waitlist/`, {
                        headers: { Authorization: `Bearer ${adminToken}` },
                    }),
                    fetch(`${API_BASE_URL}/api/forms/intents`, {
                        headers: { Authorization: `Bearer ${adminToken}` },
                    }).catch(() => null),
                ]);
                if (entriesRes.ok) setEntries(await entriesRes.json());
                if (intentsRes && intentsRes.ok) {
                    const data = await intentsRes.json();
                    if (Array.isArray(data)) setIntents(data);
                }
            } catch (err) {
                console.error("Reports fetch error:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [adminToken]);

    // --- Computed chart data ---

    const tipoData = useMemo(() => {
        return toChartData(countBy(entries, e => e.tipo), TIPO_LABELS);
    }, [entries]);

    const estadoData = useMemo(() => {
        const counts = countBy(entries, e => e.estado);
        return toChartData(counts).slice(0, 12); // top 12 states
    }, [entries]);

    const appData = useMemo(() => {
        const maeSolo = entries.filter(e => e.tipo === "mae_solo");
        return toChartData(countBy(maeSolo, e => e.ja_usou_app_financeiro), APP_LABELS);
    }, [entries]);

    const ajudarData = useMemo(() => {
        const maeSolo = entries.filter(e => e.tipo === "mae_solo");
        return toChartData(countBy(maeSolo, e => e.interesse_ajudar_outras), AJUDAR_LABELS);
    }, [entries]);

    const comoConheceuData = useMemo(() => {
        const counts: Record<string, number> = {};
        for (const entry of entries) {
            if (entry.como_conheceu && Array.isArray(entry.como_conheceu)) {
                for (const canal of entry.como_conheceu) {
                    counts[canal] = (counts[canal] || 0) + 1;
                }
            }
        }
        return toChartData(counts, COMO_CONHECEU_LABELS);
    }, [entries]);

    const timelineData = useMemo(() => {
        const counts: Record<string, number> = {};
        for (const entry of entries) {
            const date = new Date(entry.created_at);
            const key = `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1).toString().padStart(2, "0")}`;
            counts[key] = (counts[key] || 0) + 1;
        }
        // Sort chronologically
        return Object.entries(counts)
            .sort(([a], [b]) => {
                const [da, ma] = a.split("/").map(Number);
                const [db, mb] = b.split("/").map(Number);
                return ma !== mb ? ma - mb : da - db;
            })
            .map(([name, value]) => ({ name, value }));
    }, [entries]);

    // Conversion funnel: intents vs completions
    const funnelData = useMemo(() => {
        const intentMae = intents.filter(i => i.tipo === "mae_solo").length;
        const intentApo = intents.filter(i => i.tipo === "apoiador").length;
        const completedMae = entries.filter(e => e.tipo === "mae_solo").length;
        const completedApo = entries.filter(e => e.tipo === "apoiador").length;
        return [
            { name: "Mãe Solo - Clicou", value: intentMae || completedMae, fill: COLORS.blue },
            { name: "Mãe Solo - Finalizou", value: completedMae, fill: COLORS.emerald },
            { name: "Apoiador - Clicou", value: intentApo || completedApo, fill: COLORS.amber },
            { name: "Apoiador - Finalizou", value: completedApo, fill: COLORS.teal },
        ];
    }, [entries, intents]);

    const conversionRate = useMemo(() => {
        const intentMae = intents.filter(i => i.tipo === "mae_solo").length;
        const completedMae = entries.filter(e => e.tipo === "mae_solo").length;
        if (intentMae === 0) return null;
        return Math.round((completedMae / intentMae) * 100);
    }, [entries, intents]);

    // Summary stats
    const totalMaes = entries.filter(e => e.tipo === "mae_solo").length;
    const totalApoiadores = entries.filter(e => e.tipo === "apoiador").length;
    const querAjudar = entries.filter(e => e.interesse_ajudar_outras === "sim").length;
    const nuncaUsouApp = entries.filter(e => e.tipo === "mae_solo" && e.ja_usou_app_financeiro === "nao").length;

    if (loading) {
        return (
            <div className="flex items-center justify-center h-[60vh]">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
        );
    }

    return (
        <div className="w-full max-w-[1400px] mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-black text-white">
                    Relatórios <span className="text-primary">Yá</span>
                </h1>
                <p className="text-gray-500 text-sm font-mono uppercase tracking-wider mt-1">
                    Mapeamento da Waitlist • {entries.length} registros
                </p>
            </div>

            {/* KPI Summary */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-[#0d0d0d]/80 border border-white/5 p-5 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 blur-[30px] rounded-full" />
                    <p className="text-gray-400 text-[10px] font-mono uppercase tracking-wider mb-3">Total Waitlist</p>
                    <p className="text-3xl font-black text-white">{entries.length}</p>
                </div>
                <div className="bg-[#0d0d0d]/80 border border-white/5 p-5 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-pink-500/10 blur-[30px] rounded-full" />
                    <p className="text-gray-400 text-[10px] font-mono uppercase tracking-wider mb-3">Mães Solo</p>
                    <p className="text-3xl font-black text-primary">{totalMaes}</p>
                    <p className="text-[10px] text-gray-500 mt-2">{entries.length > 0 ? Math.round((totalMaes / entries.length) * 100) : 0}% do total</p>
                </div>
                <div className="bg-[#0d0d0d]/80 border border-white/5 p-5 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/10 blur-[30px] rounded-full" />
                    <p className="text-gray-400 text-[10px] font-mono uppercase tracking-wider mb-3">Querem Multiplicar</p>
                    <p className="text-3xl font-black text-emerald-400">{querAjudar}</p>
                    <p className="text-[10px] text-gray-500 mt-2">Potenciais mães-âncora</p>
                </div>
                <div className="bg-[#0d0d0d]/80 border border-white/5 p-5 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500/10 blur-[30px] rounded-full" />
                    <p className="text-gray-400 text-[10px] font-mono uppercase tracking-wider mb-3">Sem App Financeiro</p>
                    <p className="text-3xl font-black text-amber-400">{nuncaUsouApp}</p>
                    <p className="text-[10px] text-gray-500 mt-2">{totalMaes > 0 ? Math.round((nuncaUsouApp / totalMaes) * 100) : 0}% das mães</p>
                </div>
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* 1. Distribuição por Tipo */}
                <ChartCard title="Distribuição por Tipo" icon={Users} subtitle={`${entries.length} registros`}>
                    <div className="h-52">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={tipoData} layout="horizontal" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                                <XAxis dataKey="name" stroke="#555" fontSize={10} tickLine={false} axisLine={false} interval={0} angle={-15} textAnchor="end" height={50} />
                                <YAxis stroke="#333" fontSize={10} tickLine={false} axisLine={false} width={30} />
                                <RechartsTooltip content={<CustomTooltip />} />
                                <Bar dataKey="value" radius={[8, 8, 0, 0]} maxBarSize={50}>
                                    {tipoData.map((_, i) => (
                                        <Cell key={i} fill={CHART_PALETTE[i % CHART_PALETTE.length]} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                        {tipoData.map((d, i) => (
                            <span key={d.name} className="text-[10px] text-white/50 flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: CHART_PALETTE[i] }} />
                                {d.name}: <strong className="text-white/80">{d.value}</strong>
                            </span>
                        ))}
                    </div>
                </ChartCard>

                {/* 2. Top Estados */}
                <ChartCard title="Top Estados" icon={MapPin} subtitle="Concentração geográfica">
                    <div className="h-52">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={estadoData} layout="horizontal" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                                <XAxis dataKey="name" stroke="#555" fontSize={10} tickLine={false} axisLine={false} />
                                <YAxis stroke="#333" fontSize={10} tickLine={false} axisLine={false} width={30} />
                                <RechartsTooltip content={<CustomTooltip />} />
                                <Bar dataKey="value" radius={[8, 8, 0, 0]} maxBarSize={40} fill={COLORS.blue}>
                                    {estadoData.map((_, i) => (
                                        <Cell key={i} fill={i === 0 ? COLORS.primary : i === 1 ? COLORS.amber : COLORS.blue} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </ChartCard>

                {/* 3. Familiaridade Tecnológica (só mães) */}
                <ChartCard title="Familiaridade com Apps Financeiros" icon={Smartphone} subtitle="Apenas mães solo">
                    {appData.length > 0 ? (
                        <>
                            <div className="h-48">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={appData} layout="horizontal" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                                        <XAxis dataKey="name" stroke="#555" fontSize={9} tickLine={false} axisLine={false} interval={0} />
                                        <YAxis stroke="#333" fontSize={10} tickLine={false} axisLine={false} width={30} />
                                        <RechartsTooltip content={<CustomTooltip />} />
                                        <Bar dataKey="value" radius={[8, 8, 0, 0]} maxBarSize={60}>
                                            <Cell fill={COLORS.emerald} />
                                            <Cell fill={COLORS.amber} />
                                            <Cell fill={COLORS.red} />
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="flex flex-wrap gap-3 mt-3">
                                {appData.map((d, i) => (
                                    <span key={d.name} className="text-[10px] text-white/50 flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: [COLORS.emerald, COLORS.amber, COLORS.red][i] }} />
                                        {d.name}: <strong className="text-white/80">{d.value}</strong>
                                    </span>
                                ))}
                            </div>
                        </>
                    ) : (
                        <p className="text-white/30 text-sm text-center py-8">Ainda sem dados suficientes</p>
                    )}
                </ChartCard>

                {/* 4. Interesse em Multiplicar (só mães) */}
                <ChartCard title="Interesse em Ajudar Outras Mães" icon={Users} subtitle="Potencial de comunidade digital">
                    {ajudarData.length > 0 ? (
                        <>
                            <div className="h-48">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={ajudarData} layout="horizontal" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                                        <XAxis dataKey="name" stroke="#555" fontSize={10} tickLine={false} axisLine={false} interval={0} />
                                        <YAxis stroke="#333" fontSize={10} tickLine={false} axisLine={false} width={30} />
                                        <RechartsTooltip content={<CustomTooltip />} />
                                        <Bar dataKey="value" radius={[8, 8, 0, 0]} maxBarSize={60}>
                                            <Cell fill={COLORS.emerald} />
                                            <Cell fill={COLORS.red} />
                                            <Cell fill={COLORS.amber} />
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="flex flex-wrap gap-3 mt-3">
                                {ajudarData.map((d, i) => (
                                    <span key={d.name} className="text-[10px] text-white/50 flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: [COLORS.emerald, COLORS.red, COLORS.amber][i] }} />
                                        {d.name}: <strong className="text-white/80">{d.value}</strong>
                                    </span>
                                ))}
                            </div>
                        </>
                    ) : (
                        <p className="text-white/30 text-sm text-center py-8">Ainda sem dados suficientes</p>
                    )}
                </ChartCard>

                {/* 5. Canais de Aquisição */}
                <ChartCard title="Canais de Aquisição" icon={Megaphone} subtitle="Como nos conheceram">
                    <div className="h-52">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={comoConheceuData} layout="vertical" margin={{ top: 0, right: 10, left: 0, bottom: 0 }}>
                                <XAxis type="number" stroke="#333" fontSize={10} tickLine={false} axisLine={false} />
                                <YAxis dataKey="name" type="category" stroke="#555" fontSize={10} tickLine={false} axisLine={false} width={100} />
                                <RechartsTooltip content={<CustomTooltip />} />
                                <Bar dataKey="value" radius={[0, 8, 8, 0]} maxBarSize={24}>
                                    {comoConheceuData.map((_, i) => (
                                        <Cell key={i} fill={CHART_PALETTE[i % CHART_PALETTE.length]} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </ChartCard>

                {/* 6. Timeline de Cadastros */}
                <ChartCard title="Cadastros ao Longo do Tempo" icon={CalendarDays} subtitle="Evolução diária">
                    <div className="h-52">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={timelineData} layout="horizontal" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                                <XAxis dataKey="name" stroke="#555" fontSize={9} tickLine={false} axisLine={false} interval={Math.max(0, Math.floor(timelineData.length / 8))} />
                                <YAxis stroke="#333" fontSize={10} tickLine={false} axisLine={false} width={25} />
                                <RechartsTooltip content={<CustomTooltip />} />
                                <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={16} fill={COLORS.primary} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </ChartCard>

                {/* 7. Funil de Conversão Waitlist */}
                <ChartCard title="Funil de Conversão Waitlist" icon={TrendingDown} subtitle={conversionRate !== null ? `Taxa mãe solo: ${conversionRate}%` : "Dados de intent acumulando"}>
                    <div className="h-52">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={funnelData} layout="horizontal" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                                <XAxis dataKey="name" stroke="#555" fontSize={9} tickLine={false} axisLine={false} interval={0} angle={-15} textAnchor="end" height={55} />
                                <YAxis stroke="#333" fontSize={10} tickLine={false} axisLine={false} width={30} />
                                <RechartsTooltip content={<CustomTooltip />} />
                                <Bar dataKey="value" radius={[8, 8, 0, 0]} maxBarSize={50}>
                                    {funnelData.map((entry, i) => (
                                        <Cell key={i} fill={entry.fill} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <p className="text-[10px] text-white/30 mt-3 text-center">
                        {intents.length > 0
                            ? `${intents.length} cliques registrados no formulário`
                            : "O tracking de intenção foi ativado agora — os dados de abandono começarão a aparecer com os próximos acessos."
                        }
                    </p>
                </ChartCard>
            </div>

            {/* Footer */}
            <p className="text-center text-[10px] text-gray-600 font-mono pb-4">
                {entries.length} registros analisados • Gerado em {new Date().toLocaleString("pt-BR")}
            </p>
        </div>
    );
}
