import { useState, useEffect } from "react";
import { ArrowUpCircle, ArrowDownCircle, Wallet, Activity, Loader2 } from "lucide-react";

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
                <p className="text-gray-400 mt-2 font-mono text-sm tracking-wide uppercase">Seu Dashboard Financeiro</p>
            </header>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
                {/* Entradas */}
                <div className="bg-card/40 border border-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl flex flex-col justify-between hover:bg-card/50 transition-colors group">
                    <div className="flex justify-between items-start mb-4">
                        <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Entradas</p>
                        <ArrowUpCircle className="text-emerald-400 w-5 h-5 group-hover:scale-110 transition-transform" />
                    </div>
                    <p className="text-2xl md:text-3xl font-display font-bold text-emerald-400">
                        {formatCurrency(data.entradas)}
                    </p>
                </div>

                {/* Saídas */}
                <div className="bg-card/40 border border-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl flex flex-col justify-between hover:bg-card/50 transition-colors group">
                    <div className="flex justify-between items-start mb-4">
                        <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Saídas</p>
                        <ArrowDownCircle className="text-rose-400 w-5 h-5 group-hover:scale-110 transition-transform" />
                    </div>
                    <p className="text-2xl md:text-3xl font-display font-bold text-rose-400">
                        {formatCurrency(data.saidas)}
                    </p>
                </div>

                {/* Saldo */}
                <div className="bg-card/40 border border-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl flex flex-col justify-between hover:bg-card/50 transition-colors group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 blur-[30px] rounded-full -z-10" />
                    <div className="flex justify-between items-start mb-4">
                        <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Saldo Atual</p>
                        <Wallet className="text-primary w-5 h-5 group-hover:scale-110 transition-transform" />
                    </div>
                    <p className={`text-2xl md:text-3xl font-display font-bold ${data.saldo >= 0 ? 'text-primary' : 'text-rose-400'}`}>
                        {formatCurrency(data.saldo)}
                    </p>
                </div>

                {/* Transações */}
                <div className="bg-card/40 border border-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl flex flex-col justify-between hover:bg-card/50 transition-colors group">
                    <div className="flex justify-between items-start mb-4">
                        <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Transações</p>
                        <Activity className="text-blue-400 w-5 h-5 group-hover:scale-110 transition-transform" />
                    </div>
                    <p className="text-2xl md:text-3xl font-display font-bold text-white">
                        {data.num_transacoes}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                {/* Categorias */}
                <div className="bg-dark-900/60 border border-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute -left-10 top-10 w-40 h-40 bg-[#8B3A8B]/10 blur-[50px] rounded-full -z-10" />
                    <h2 className="text-lg font-display font-bold text-white mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8B3A8B]" /> Categorias
                    </h2>

                    <div className="space-y-4">
                        {data.categorias && data.categorias.length > 0 ? (
                            data.categorias.map((cat, idx) => (
                                <div key={idx} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0 hover:bg-white/[0.02] px-2 rounded-lg transition-colors">
                                    <span className="text-gray-300 capitalize font-medium">{cat.categoria || 'Sem categoria'}</span>
                                    <span className={`${cat.tipo === 'RECEITA' ? 'text-emerald-400' : 'text-rose-400'} font-bold font-mono`}>
                                        {formatCurrency(Number(cat.total))}
                                    </span>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 text-sm py-4 text-center">Nenhuma categoria encontrada</p>
                        )}
                    </div>
                </div>

                {/* Últimas Transações */}
                <div className="bg-dark-900/60 border border-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute -right-10 bottom-10 w-40 h-40 bg-[#D4AF37]/10 blur-[50px] rounded-full -z-10" />
                    <h2 className="text-lg font-display font-bold text-white mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" /> Últimas Transações
                    </h2>

                    <div className="space-y-4">
                        {data.transacoes_recentes && data.transacoes_recentes.length > 0 ? (
                            data.transacoes_recentes.map((t, idx) => (
                                <div key={idx} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0 hover:bg-white/[0.02] px-2 rounded-lg transition-colors">
                                    <div>
                                        <p className="text-white text-sm font-semibold">{t.produto}</p>
                                        <p className="text-gray-500 text-[11px] uppercase tracking-wider mt-0.5">
                                            {t.categoria || 'S/ Categoria'} • {new Date(t.data).toLocaleDateString('pt-BR')}
                                        </p>
                                    </div>
                                    <span className={`${t.tipo === 'RECEITA' ? 'text-emerald-400' : 'text-rose-400'} font-bold font-mono`}>
                                        {formatCurrency(Number(t.valor_total))}
                                    </span>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 text-sm py-4 text-center">Nenhuma transação encontrada</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
