import { useState, useEffect, useMemo } from "react";
import { ArrowUpCircle, ArrowDownCircle, Wallet, Activity, Loader2 } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis } from "recharts";

interface DashboardUserProps {
    userId: number;
    userName: string;
    token: string;
}

interface Transaction {
    produto: string;
    categoria: string | null;
    data: string;
    tipo: 'RECEITA' | 'DESPESA';
    valor_total: number;
}

interface Category {
    categoria: string | null;
    tipo: 'RECEITA' | 'DESPESA';
    total: number;
}

interface DashboardData {
    entradas: number;
    saidas: number;
    saldo: number;
    num_transacoes: number;
    categorias: Category[];
    transacoes_recentes: Transaction[];
}

const API_BASE_URL = import.meta.env.VITE_API_URL || "https://www.praxisagencia.com.br";

export default function DashboardUser({ userId, userName, token }: DashboardUserProps) {
    const [data, setData] = useState<DashboardData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDashboard = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/api/user/dashboard/${userId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    if (response.status === 401) {
                        throw new Error("Sessão expirada. Faça login novamente.");
                    }
                    throw new Error("Falha ao carregar dashboard.");
                }

                const result = await response.json();
                setData(result);
            } catch (err: any) {
                setError(err.message || 'Erro desconhecido');
            } finally {
                setLoading(false);
            }
        };

        fetchDashboard();
    }, [userId, token]);

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-64 space-y-4">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
                <p className="text-gray-400 text-sm animate-pulse">Carregando seus dados financeiros...</p>
            </div>
        );
    }

    if (error || !data) {
        return (
            <div className="text-center p-8 bg-black/40 border border-red-500/20 rounded-2xl">
                <p className="text-red-400 font-medium">{error || "Não foi possível carregar as informações."}</p>
            </div>
        );
    }

    return (
        <div className="w-full max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">

            <header className="mb-10 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-display font-black tracking-tight text-white">
                    Olá, <span className="text-primary">{userName}</span>!
                </h1>
                <p className="text-gray-400 mt-2 font-mono text-sm tracking-wide uppercase">Visão Geral do Mês</p>
            </header>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
                {/* Entradas */}
                <div className="bg-dark-900/60 border border-white/5 backdrop-blur-md p-6 rounded-3xl shadow-2xl flex flex-col justify-between hover:bg-dark-900/80 transition-all group overflow-hidden relative">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/10 blur-[40px] rounded-full pointer-events-none" />
                    <div className="flex justify-between items-start mb-6">
                        <p className="text-gray-400 text-xs font-mono font-semibold uppercase tracking-wider z-10">Entrou</p>
                        <ArrowUpCircle className="text-emerald-400 w-6 h-6 group-hover:scale-110 transition-transform z-10" />
                    </div>
                    <p className="text-3xl md:text-4xl font-display font-black text-emerald-400 z-10 drop-shadow-sm">
                        {formatCurrency(data.entradas)}
                    </p>
                </div>

                {/* Saídas */}
                <div className="bg-dark-900/60 border border-white/5 backdrop-blur-md p-6 rounded-3xl shadow-2xl flex flex-col justify-between hover:bg-dark-900/80 transition-all group overflow-hidden relative">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-rose-500/10 blur-[40px] rounded-full pointer-events-none" />
                    <div className="flex justify-between items-start mb-6">
                        <p className="text-gray-400 text-xs font-mono font-semibold uppercase tracking-wider z-10">Saiu</p>
                        <ArrowDownCircle className="text-rose-400 w-6 h-6 group-hover:scale-110 transition-transform z-10" />
                    </div>
                    <p className="text-3xl md:text-4xl font-display font-black text-rose-400 z-10 drop-shadow-sm">
                        {formatCurrency(data.saidas)}
                    </p>
                </div>

                {/* Saldo */}
                <div className="bg-dark-900/60 border border-white/5 backdrop-blur-md p-6 rounded-3xl shadow-2xl flex flex-col justify-between hover:bg-dark-900/80 transition-all group overflow-hidden relative sm:col-span-2 lg:col-span-1">
                    <div className={`absolute -top-10 -right-10 w-32 h-32 ${data.saldo >= 0 ? 'bg-primary/20' : 'bg-rose-500/20'} blur-[40px] rounded-full pointer-events-none`} />
                    <div className="flex justify-between items-start mb-6">
                        <p className="text-gray-400 text-xs font-mono font-semibold uppercase tracking-wider z-10">Sobrou na Carteira</p>
                        <Wallet className={`${data.saldo >= 0 ? 'text-primary' : 'text-rose-400'} w-6 h-6 group-hover:scale-110 transition-transform z-10`} />
                    </div>
                    <p className={`text-3xl md:text-4xl font-display font-black z-10 drop-shadow-sm ${data.saldo >= 0 ? 'text-white' : 'text-rose-400'}`}>
                        {formatCurrency(data.saldo)}
                    </p>
                </div>

                {/* Transações */}
                <div className="bg-dark-900/60 border border-white/5 backdrop-blur-md p-6 rounded-3xl shadow-2xl flex flex-col justify-between hover:bg-dark-900/80 transition-all group overflow-hidden relative sm:col-span-2 lg:col-span-1">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 blur-[40px] rounded-full pointer-events-none" />
                    <div className="flex justify-between items-start mb-6">
                        <p className="text-gray-400 text-xs font-mono font-semibold uppercase tracking-wider z-10">Nº de Lançamentos</p>
                        <Activity className="text-blue-400 w-6 h-6 group-hover:scale-110 transition-transform z-10" />
                    </div>
                    <p className="text-3xl md:text-4xl font-display font-black text-white z-10">
                        {data.num_transacoes}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                {/* Categorias - Gráfico de Rosca */}
                <div className="bg-dark-900/60 border border-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden flex flex-col">
                    <div className="absolute -left-10 top-10 w-40 h-40 bg-[#8B3A8B]/10 blur-[50px] rounded-full -z-10" />
                    <h2 className="text-lg font-display font-bold text-white mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8B3A8B]" /> Para onde meu dinheiro tá indo?
                    </h2>
                    <p className="text-gray-400 text-xs font-mono uppercase tracking-wider mb-6">Distribuição de Gastos e Entradas</p>

                    <div className="flex-1 flex flex-col justify-center items-center min-h-[300px]">
                        {data.categorias && data.categorias.length > 0 ? (
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={data.categorias.map(c => ({ name: c.categoria || 'Sem categoria', value: Number(c.total), tipo: c.tipo }))}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={80}
                                        outerRadius={110}
                                        paddingAngle={5}
                                        dataKey="value"
                                        stroke="none"
                                    >
                                        {data.categorias.map((entry, index) => {
                                            // Lógica de cores baseada em tipo ou índex
                                            const isReceita = entry.tipo === 'RECEITA';
                                            const colors = isReceita ? ['#34d399', '#10b981', '#059669'] : ['#fb7185', '#E55B3C', '#8B3A8B', '#D4AF37', '#e11d48'];
                                            return <Cell key={`cell-${index}`} fill={colors[index % colors.length]} className="hover:opacity-80 transition-opacity outline-none" />;
                                        })}
                                    </Pie>
                                    <Tooltip
                                        formatter={(value: number) => [formatCurrency(value), 'Total']}
                                        contentStyle={{ backgroundColor: 'rgba(10, 10, 10, 0.9)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}
                                        itemStyle={{ color: '#fff', fontWeight: 'bold' }}
                                    />
                                    <Legend
                                        verticalAlign="bottom"
                                        height={36}
                                        iconType="circle"
                                        formatter={(value, entry: any) => (
                                            <span className="text-sm font-medium text-gray-300 ml-1">{value}</span>
                                        )}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        ) : (
                            <div className="flex flex-col items-center justify-center space-y-3 h-full opacity-60">
                                <PieChart className="w-16 h-16 text-gray-500" />
                                <p className="text-gray-500 text-sm text-center">Nenhum movimento registrado.<br />Mande áudios pra Yá pra começar a ver os gráficos!</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Últimas Transações e Evolução */}
                <div className="bg-dark-900/60 border border-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden flex flex-col">
                    <div className="absolute -right-10 bottom-10 w-40 h-40 bg-[#D4AF37]/10 blur-[50px] rounded-full -z-10" />
                    <div className="flex flex-col mb-6">
                        <h2 className="text-lg font-display font-bold text-white flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" /> O que aconteceu recentemente?
                        </h2>
                        <p className="text-gray-400 text-xs font-mono uppercase tracking-wider mt-1">Últimos Lançamentos</p>
                    </div>

                    <div className="flex-1 flex flex-col">
                        {data.transacoes_recentes && data.transacoes_recentes.length > 0 ? (
                            <>
                                {/* Mini Bar Chart */}
                                <div className="h-32 mb-6 border-b border-white/5 pb-4">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart
                                            data={data.transacoes_recentes.slice().reverse().map((t, i) => ({
                                                name: `T${i}`,
                                                valor: Number(t.valor_total),
                                                tipo: t.tipo,
                                                fill: t.tipo === 'RECEITA' ? '#10b981' : '#f43f5e'
                                            }))}
                                            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                                        >
                                            <Tooltip
                                                cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                                                contentStyle={{ backgroundColor: 'rgba(10, 10, 10, 0.9)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                                                formatter={(value: number) => [formatCurrency(value), 'Valor']}
                                                labelStyle={{ display: 'none' }}
                                            />
                                            <Bar dataKey="valor" radius={[4, 4, 0, 0]} maxBarSize={40} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>

                                {/* Lista de Transações */}
                                <div className="space-y-4">
                                    {data.transacoes_recentes.slice(0, 5).map((t, idx) => (
                                        <div key={idx} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0 hover:bg-white/[0.02] px-2 rounded-lg transition-colors">
                                            <div>
                                                <p className="text-white text-sm font-semibold">{t.produto}</p>
                                                <p className="text-gray-500 text-[11px] uppercase tracking-wider mt-0.5">
                                                    {t.categoria || 'S/ Categoria'} • {new Date(t.data).toLocaleDateString('pt-BR')}
                                                </p>
                                            </div>
                                            <span className={`${t.tipo === 'RECEITA' ? 'text-emerald-400' : 'text-rose-400'} font-bold font-mono text-sm`}>
                                                {t.tipo === 'DESPESA' ? '-' : '+'}{formatCurrency(Number(t.valor_total))}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="flex-1 flex flex-col items-center justify-center opacity-60">
                                <p className="text-gray-500 text-sm pb-4 text-center">Nenhuma transação encontrada</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
