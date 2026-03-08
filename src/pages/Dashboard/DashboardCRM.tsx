import { useState, useEffect, useMemo } from "react";
import {
    Search, Loader2, Users, Activity, Heart, UserCheck, AlertTriangle,
    Clock, ChevronDown, Filter, RefreshCw, Phone, MapPin
} from "lucide-react";
import { BarChart, Bar, ResponsiveContainer, Tooltip as RechartsTooltip, XAxis, Cell } from "recharts";

interface DashboardCRMProps {
    adminToken: string;
}

interface WaitlistEntry {
    id: number;
    tipo: string;
    status: string;
    status_computed: string;
    nome: string;
    whatsapp: string;
    filhos: string;
    cidade: string;
    estado: string;
    como_conheceu: string[];
    ja_usou_app_financeiro: string | null;
    usa_whatsapp: boolean | null;
    motivacao: string;
    alerta_duplicidade: boolean;
    interesse_ajudar_outras: string;
    dias_ativos_7d: number;
    ultima_interacao: string | null;
    created_at: string;
    updated_at: string;
}

interface Stats {
    total: number;
    total_mae_solo: number;
    total_apoiador: number;
    pre_cadastro: number;
    ativacao: number;
    cadastro: number;
    engajada: number;
    reengajamento: number;
}

const API_BASE_URL = import.meta.env.VITE_API_URL || "https://www.praxisagencia.com.br";

const STATUS_CONFIG: Record<string, { label: string; color: string; icon: typeof Clock; bg: string }> = {
    pre_cadastro: { label: "Pré-cadastro", color: "text-blue-400", icon: Clock, bg: "bg-blue-500/10 border-blue-500/20" },
    ativacao: { label: "Ativação", color: "text-amber-400", icon: Activity, bg: "bg-amber-500/10 border-amber-500/20" },
    cadastro: { label: "Cadastro", color: "text-cyan-400", icon: UserCheck, bg: "bg-cyan-500/10 border-cyan-500/20" },
    engajada: { label: "Engajada", color: "text-emerald-400", icon: Heart, bg: "bg-emerald-500/10 border-emerald-500/20" },
    reengajamento: { label: "Reengajamento", color: "text-red-400", icon: AlertTriangle, bg: "bg-red-500/10 border-red-500/20" },
};

function StatusBadge({ status }: { status: string }) {
    const cfg = STATUS_CONFIG[status] || STATUS_CONFIG.pre_cadastro;
    const Icon = cfg.icon;
    return (
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-bold ${cfg.bg} ${cfg.color}`}>
            <Icon className="w-3 h-3" />
            {cfg.label}
        </span>
    );
}

function TipoBadge({ tipo }: { tipo: string }) {
    const isMae = tipo === "mae_solo";
    return (
        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${isMae ? "bg-primary/10 border border-primary/20 text-primary" : "bg-white/5 border border-white/10 text-white/50"
            }`}>
            {isMae ? "🤱 Mãe Solo" : "💛 Apoiador"}
        </span>
    );
}

export default function DashboardCRM({ adminToken }: DashboardCRMProps) {
    const [entries, setEntries] = useState<WaitlistEntry[]>([]);
    const [stats, setStats] = useState<Stats | null>(null);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [filterStatus, setFilterStatus] = useState<string>("all");
    const [filterTipo, setFilterTipo] = useState<string>("all");
    const [selectedEntry, setSelectedEntry] = useState<WaitlistEntry | null>(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const [entriesRes, statsRes] = await Promise.all([
                fetch(`${API_BASE_URL}/api/waitlist/`, { headers: { Authorization: `Bearer ${adminToken}` } }),
                fetch(`${API_BASE_URL}/api/waitlist/stats`, { headers: { Authorization: `Bearer ${adminToken}` } }),
            ]);
            if (entriesRes.ok) setEntries(await entriesRes.json());
            if (statsRes.ok) setStats(await statsRes.json());
        } catch (err) {
            console.error("CRM fetch error:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchData(); }, [adminToken]);

    const filtered = useMemo(() => {
        return entries.filter(e => {
            const matchSearch = !search ||
                (e.nome || "").toLowerCase().includes(search.toLowerCase()) ||
                (e.whatsapp || "").includes(search) ||
                (e.cidade || "").toLowerCase().includes(search.toLowerCase());
            const matchStatus = filterStatus === "all" || e.status_computed === filterStatus;
            const matchTipo = filterTipo === "all" || e.tipo === filterTipo;
            return matchSearch && matchStatus && matchTipo;
        });
    }, [entries, search, filterStatus, filterTipo]);

    const funnelData = useMemo(() => {
        if (!stats) return [];
        return [
            { name: "Pré-cadastro", value: stats.pre_cadastro, fill: "#3b82f6" },
            { name: "Ativação", value: stats.ativacao, fill: "#f59e0b" },
            { name: "Cadastro", value: stats.cadastro, fill: "#06b6d4" },
            { name: "Engajada", value: stats.engajada, fill: "#10b981" },
            { name: "Reengajamento", value: stats.reengajamento, fill: "#ef4444" },
        ];
    }, [stats]);

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
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-black text-white">
                        CRM <span className="text-primary">Yá</span>
                    </h1>
                    <p className="text-gray-500 text-sm font-mono uppercase tracking-wider mt-1">Lista de Espera & Funil</p>
                </div>
                <button
                    onClick={fetchData}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-white/70 hover:bg-white/10 transition-colors"
                >
                    <RefreshCw className="w-4 h-4" /> Atualizar
                </button>
            </div>

            {/* KPI Cards */}
            {stats && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="bg-dark-800/80 border border-white/5 p-5 rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 blur-[30px] rounded-full" />
                        <p className="text-gray-400 text-[10px] font-mono uppercase tracking-wider mb-3">Total na Fila</p>
                        <p className="text-3xl font-black text-white">{stats.total}</p>
                        <div className="flex gap-2 mt-3">
                            <span className="text-[10px] text-primary font-bold">🤱 {stats.total_mae_solo}</span>
                            <span className="text-[10px] text-white/40 font-bold">💛 {stats.total_apoiador}</span>
                        </div>
                    </div>
                    <div className="bg-dark-800/80 border border-white/5 p-5 rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 blur-[30px] rounded-full" />
                        <p className="text-gray-400 text-[10px] font-mono uppercase tracking-wider mb-3">Pré-cadastro</p>
                        <p className="text-3xl font-black text-blue-400">{stats.pre_cadastro}</p>
                        <p className="text-[10px] text-gray-500 mt-3">
                            {stats.total > 0 ? Math.round((stats.pre_cadastro / stats.total) * 100) : 0}% do total
                        </p>
                    </div>
                    <div className="bg-dark-800/80 border border-white/5 p-5 rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/10 blur-[30px] rounded-full" />
                        <p className="text-gray-400 text-[10px] font-mono uppercase tracking-wider mb-3">Engajadas</p>
                        <p className="text-3xl font-black text-emerald-400">{stats.engajada}</p>
                        <p className="text-[10px] text-gray-500 mt-3">3+ dias nos últimos 7</p>
                    </div>
                    <div className="bg-dark-800/80 border border-white/5 p-5 rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/10 blur-[30px] rounded-full" />
                        <p className="text-gray-400 text-[10px] font-mono uppercase tracking-wider mb-3">Reengajamento</p>
                        <p className="text-3xl font-black text-red-400">{stats.reengajamento}</p>
                        <p className="text-[10px] text-gray-500 mt-3">7+ dias sem interação</p>
                    </div>
                </div>
            )}

            {/* Funnel Chart */}
            {funnelData.length > 0 && (
                <div className="bg-dark-800/80 border border-white/5 p-6 rounded-2xl">
                    <h2 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Funil de Conversão
                    </h2>
                    <div className="h-36">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={funnelData} layout="horizontal" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                                <XAxis dataKey="name" stroke="#666" fontSize={10} tickLine={false} axisLine={false} />
                                <RechartsTooltip
                                    cursor={{ fill: "rgba(255,255,255,0.05)" }}
                                    content={({ active, payload }) => {
                                        if (active && payload && payload.length) {
                                            return (
                                                <div className="bg-dark-900/95 border border-white/10 p-3 rounded-xl shadow-2xl">
                                                    <p className="text-gray-400 text-[10px] font-mono mb-1">{payload[0].payload.name}</p>
                                                    <p className="text-white font-bold">{payload[0].value}</p>
                                                </div>
                                            );
                                        }
                                        return null;
                                    }}
                                />
                                <Bar dataKey="value" radius={[6, 6, 0, 0]} maxBarSize={60}>
                                    {funnelData.map((entry, index) => (
                                        <Cell key={index} fill={entry.fill} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            )}

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Buscar por nome, telefone ou cidade..."
                        className="w-full pl-10 pr-4 py-2.5 bg-[#111] border border-white/10 text-white placeholder-white/40 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                    />
                </div>
                <div className="relative">
                    <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500" />
                    <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="pl-8 pr-8 py-2.5 bg-[#111] border border-white/10 text-white rounded-xl text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none appearance-none cursor-pointer"
                    >
                        <option value="all" className="bg-[#111] text-white">Todos Status</option>
                        {Object.entries(STATUS_CONFIG).map(([key, cfg]) => (
                            <option key={key} value={key} className="bg-[#111] text-white">{cfg.label}</option>
                        ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500 pointer-events-none" />
                </div>
                <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500" />
                    <select
                        value={filterTipo}
                        onChange={(e) => setFilterTipo(e.target.value)}
                        className="pl-8 pr-8 py-2.5 bg-[#111] border border-white/10 text-white rounded-xl text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none appearance-none cursor-pointer"
                    >
                        <option value="all" className="bg-[#111] text-white">Todos</option>
                        <option value="mae_solo" className="bg-[#111] text-white">🤱 Mãe Solo</option>
                        <option value="apoiador" className="bg-[#111] text-white">💛 Apoiador</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500 pointer-events-none" />
                </div>
            </div>

            {/* Table */}
            <div className="bg-dark-800/80 border border-white/5 rounded-2xl overflow-hidden">
                {/* Desktop Table */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-white/5">
                                <th className="text-left p-4 text-gray-500 font-mono text-[10px] uppercase tracking-wider">Nome</th>
                                <th className="text-left p-4 text-gray-500 font-mono text-[10px] uppercase tracking-wider">Tipo</th>
                                <th className="text-left p-4 text-gray-500 font-mono text-[10px] uppercase tracking-wider">Status</th>
                                <th className="text-left p-4 text-gray-500 font-mono text-[10px] uppercase tracking-wider">Cidade/UF</th>
                                <th className="text-left p-4 text-gray-500 font-mono text-[10px] uppercase tracking-wider">WhatsApp</th>
                                <th className="text-left p-4 text-gray-500 font-mono text-[10px] uppercase tracking-wider">Dias Ativos</th>
                                <th className="text-left p-4 text-gray-500 font-mono text-[10px] uppercase tracking-wider">Cadastro</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((entry) => (
                                <tr
                                    key={entry.id}
                                    onClick={() => setSelectedEntry(selectedEntry?.id === entry.id ? null : entry)}
                                    className={`border-b border-white/5 cursor-pointer transition-colors ${selectedEntry?.id === entry.id ? "bg-primary/10" : "hover:bg-white/[0.02]"
                                        }`}
                                >
                                    <td className="p-4 font-semibold text-white">{entry.nome || "—"}</td>
                                    <td className="p-4"><TipoBadge tipo={entry.tipo} /></td>
                                    <td className="p-4"><StatusBadge status={entry.status_computed || entry.status} /></td>
                                    <td className="p-4 text-gray-400">{entry.cidade}{entry.estado ? `/${entry.estado}` : ""}</td>
                                    <td className="p-4 text-gray-400 font-mono text-xs">{entry.whatsapp}</td>
                                    <td className="p-4">
                                        <span className={`font-bold ${(entry.dias_ativos_7d || 0) >= 3 ? "text-emerald-400" : "text-gray-500"}`}>
                                            {entry.dias_ativos_7d || 0}/7
                                        </span>
                                    </td>
                                    <td className="p-4 text-gray-500 text-xs">
                                        {new Date(entry.created_at).toLocaleDateString("pt-BR")}
                                    </td>
                                </tr>
                            ))}
                            {filtered.length === 0 && (
                                <tr>
                                    <td colSpan={7} className="p-8 text-center text-gray-500">Nenhum registro encontrado</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden divide-y divide-white/5">
                    {filtered.map((entry) => (
                        <div
                            key={entry.id}
                            onClick={() => setSelectedEntry(selectedEntry?.id === entry.id ? null : entry)}
                            className={`p-4 cursor-pointer transition-colors ${selectedEntry?.id === entry.id ? "bg-primary/10" : ""}`}
                        >
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <p className="font-bold text-white">{entry.nome || "—"}</p>
                                    <p className="text-xs text-gray-500 font-mono">{entry.whatsapp}</p>
                                </div>
                                <TipoBadge tipo={entry.tipo} />
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <StatusBadge status={entry.status_computed || entry.status} />
                                {entry.cidade && (
                                    <span className="text-[10px] text-gray-500 flex items-center gap-1">
                                        <MapPin className="w-3 h-3" />{entry.cidade}/{entry.estado}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                    {filtered.length === 0 && (
                        <p className="p-8 text-center text-gray-500">Nenhum registro encontrado</p>
                    )}
                </div>
            </div>

            {/* Detail Panel */}
            {selectedEntry && (
                <div className="bg-dark-800/80 border border-white/5 rounded-2xl p-6 animate-in slide-in-from-bottom-2 duration-300">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h3 className="text-xl font-bold text-white">{selectedEntry.nome}</h3>
                            <div className="flex items-center gap-3 mt-2">
                                <TipoBadge tipo={selectedEntry.tipo} />
                                <StatusBadge status={selectedEntry.status_computed || selectedEntry.status} />
                            </div>
                        </div>
                        <button onClick={() => setSelectedEntry(null)} className="text-gray-500 hover:text-white transition-colors text-xs font-mono">
                            Fechar ✕
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <InfoItem icon={Phone} label="WhatsApp" value={selectedEntry.whatsapp} />
                        <InfoItem icon={MapPin} label="Localização" value={`${selectedEntry.cidade || "—"}/${selectedEntry.estado || "—"}`} />
                        <InfoItem icon={Users} label="Filhos" value={selectedEntry.filhos || "—"} />
                        <InfoItem icon={Clock} label="Cadastro" value={new Date(selectedEntry.created_at).toLocaleString("pt-BR")} />
                        <InfoItem icon={Activity} label="Dias ativos (7d)" value={`${selectedEntry.dias_ativos_7d || 0} dias`} />
                        <InfoItem icon={Clock} label="Última interação" value={selectedEntry.ultima_interacao ? new Date(selectedEntry.ultima_interacao).toLocaleString("pt-BR") : "Nenhuma"} />
                    </div>

                    {(selectedEntry.como_conheceu && selectedEntry.como_conheceu.length > 0) && (
                        <div className="mt-4">
                            <p className="text-gray-500 text-[10px] font-mono uppercase tracking-wider mb-2">Como conheceu</p>
                            <div className="flex flex-wrap gap-2">
                                {selectedEntry.como_conheceu.map((c) => (
                                    <span key={c} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70">{c}</span>
                                ))}
                            </div>
                        </div>
                    )}

                    {selectedEntry.motivacao && (
                        <div className="mt-4">
                            <p className="text-gray-500 text-[10px] font-mono uppercase tracking-wider mb-2">Motivação</p>
                            <p className="text-white/70 text-sm bg-white/5 border border-white/10 rounded-xl p-4 leading-relaxed">{selectedEntry.motivacao}</p>
                        </div>
                    )}

                    <div className="flex flex-wrap gap-3 mt-4">
                        {selectedEntry.ja_usou_app_financeiro && (
                            <span className={`text-xs px-2.5 py-1 rounded-full border ${selectedEntry.ja_usou_app_financeiro === "sim" ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" :
                                selectedEntry.ja_usou_app_financeiro === "ja_mas_nao_adaptei" ? "bg-amber-500/10 border-amber-500/20 text-amber-400" :
                                    "bg-white/5 border-white/10 text-white/50"
                                }`}>
                                {selectedEntry.ja_usou_app_financeiro === "sim" ? "✅ Usa app financeiro" :
                                    selectedEntry.ja_usou_app_financeiro === "ja_mas_nao_adaptei" ? "⚠️ Já usou, não adaptou" :
                                        "❌ Nunca usou app financeiro"}
                            </span>
                        )}
                        {selectedEntry.interesse_ajudar_outras && (
                            <span className={`text-xs px-2.5 py-1 rounded-full border ${selectedEntry.interesse_ajudar_outras === "sim" ? "bg-primary/10 border-primary/20 text-primary" : "bg-white/5 border-white/10 text-white/50"}`}>
                                {selectedEntry.interesse_ajudar_outras === "sim" ? "🤝 Quer ajudar outras mães" : selectedEntry.interesse_ajudar_outras === "talvez" ? "🤔 Talvez ajude" : "— Não quer ajudar agora"}
                            </span>
                        )}
                    </div>
                </div>
            )}

            <p className="text-center text-[10px] text-gray-600 font-mono pb-4">
                {filtered.length} de {entries.length} registros • Última atualização: {new Date().toLocaleString("pt-BR")}
            </p>
        </div>
    );
}

function InfoItem({ icon: Icon, label, value }: { icon: typeof Clock; label: string; value: string }) {
    return (
        <div className="flex items-start gap-3 p-3 bg-white/[0.02] rounded-xl">
            <Icon className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />
            <div>
                <p className="text-gray-500 text-[10px] font-mono uppercase tracking-wider">{label}</p>
                <p className="text-white text-sm font-medium mt-0.5">{value}</p>
            </div>
        </div>
    );
}
