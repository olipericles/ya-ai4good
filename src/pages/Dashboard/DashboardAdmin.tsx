import { useState, useEffect } from "react";
import { Search, Loader2, ArrowLeft, Terminal, Bot, Server, Shield, ExternalLink } from "lucide-react";

interface DashboardAdminProps {
    adminToken: string;
}

interface UserActivity {
    user_phone: string;
    user_name: string;
    last_activity: string;
}

interface ChatLog {
    id: number;
    input_content: string;
    output_content: string;
    created_at: string;
}

interface ExecDetail {
    node_type: string;
    node_name: string;
    output_summary: string;
    execution_id: string;
}

const API_BASE_URL = import.meta.env.VITE_API_URL || "https://www.praxisagencia.com.br";

export default function DashboardAdmin({ adminToken }: DashboardAdminProps) {
    const [users, setUsers] = useState<UserActivity[]>([]);
    const [search, setSearch] = useState("");
    const [loadingUsers, setLoadingUsers] = useState(true);

    const [selectedPhone, setSelectedPhone] = useState<string | null>(null);
    const [selectedName, setSelectedName] = useState<string | null>(null);
    const [logs, setLogs] = useState<ChatLog[]>([]);
    const [loadingLogs, setLoadingLogs] = useState(false);
    const [expandedDetails, setExpandedDetails] = useState<Record<number, ExecDetail[] | null>>({});
    const [loadingDetails, setLoadingDetails] = useState<Record<number, boolean>>({});

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/api/logs/users`, {
                    headers: { 'Authorization': `Bearer ${adminToken}` }
                });
                if (res.ok) {
                    const data = await res.json();
                    setUsers(data);
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoadingUsers(false);
            }
        };
        fetchUsers();
    }, [adminToken]);

    const handleSelectUser = async (phone: string, name: string) => {
        setSelectedPhone(phone);
        setSelectedName(name);
        setLoadingLogs(true);
        try {
            const res = await fetch(`${API_BASE_URL}/api/logs/user/${phone}`, {
                headers: { 'Authorization': `Bearer ${adminToken}` }
            });
            if (res.ok) {
                const data = await res.json();
                setLogs(data);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoadingLogs(false);
        }
    };

    const handleToggleDetails = async (logId: number) => {
        if (expandedDetails[logId] !== undefined) {
            // Toggle off
            const newDetails = { ...expandedDetails };
            delete newDetails[logId];
            setExpandedDetails(newDetails);
            return;
        }

        setLoadingDetails(prev => ({ ...prev, [logId]: true }));
        try {
            const res = await fetch(`${API_BASE_URL}/api/logs/execution/${logId}/details`, {
                headers: { 'Authorization': `Bearer ${adminToken}` }
            });
            if (res.ok) {
                const data = await res.json();
                setExpandedDetails(prev => ({ ...prev, [logId]: data }));
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoadingDetails(prev => ({ ...prev, [logId]: false }));
        }
    };

    const filteredUsers = users.filter(u =>
        (u.user_name || '').toLowerCase().includes(search.toLowerCase()) ||
        (u.user_phone || '').includes(search)
    );

    return (
        <div className="w-full max-w-[1400px] mx-auto h-[80vh] flex flex-col md:flex-row gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">

            {/* Sidebar - Users List */}
            <aside className="w-full md:w-80 h-full flex flex-col bg-dark-900/60 border border-white/10 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden shrink-0">
                <div className="p-5 border-b border-white/5 bg-black/20">
                    <h2 className="text-xl font-display font-bold text-white mb-4 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-primary" /> Admin Painel
                    </h2>
                    <div className="relative">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Buscar usuário..."
                            className="w-full pl-10 pr-4 py-2.5 bg-dark-800/80 border border-dark-600 text-white rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-3 space-y-1 custom-scrollbar">
                    {loadingUsers ? (
                        <div className="flex justify-center p-8"><Loader2 className="w-6 h-6 animate-spin text-primary" /></div>
                    ) : filteredUsers.length > 0 ? (
                        filteredUsers.map((u, idx) => (
                            <div
                                key={idx}
                                onClick={() => handleSelectUser(u.user_phone, u.user_name)}
                                className={`p-3.5 rounded-xl cursor-pointer transition-all border ${selectedPhone === u.user_phone
                                        ? 'bg-primary/20 border-primary/30 shadow-[0_0_15px_rgba(229,91,60,0.15)]'
                                        : 'border-transparent hover:bg-white/[0.03] hover:border-white/5'
                                    }`}
                            >
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className={`font-semibold truncate text-sm ${selectedPhone === u.user_phone ? 'text-primary' : 'text-white'}`}>
                                        {u.user_name || 'Desconhecido'}
                                    </h3>
                                    <span className="text-[10px] text-gray-500 ml-2 shrink-0">
                                        {new Date(u.last_activity).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })}
                                    </span>
                                </div>
                                <p className="text-xs text-gray-500 truncate font-mono">{u.user_phone || 'Sem telefone'}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-sm text-gray-500 p-4">Nenhum usuário encontrado</p>
                    )}
                </div>
            </aside>

            {/* Chat Area */}
            <main className="flex-1 h-full flex flex-col bg-dark-900/60 border border-white/10 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden relative">
                {!selectedPhone ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-6 text-center">
                        <div className="w-24 h-24 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                            <Terminal className="w-10 h-10 text-primary opacity-50" />
                        </div>
                        <p className="text-xl font-display font-medium text-gray-400">Selecione um usuário para visualizar o histórico.</p>
                    </div>
                ) : (
                    <>
                        {/* Chat Header */}
                        <div className="px-6 py-4 border-b border-white/5 bg-black/20 flex justify-between items-center z-10 backdrop-blur-xl">
                            <div>
                                <h2 className="font-bold text-white text-lg">{selectedName || 'Desconhecido'}</h2>
                                <p className="text-xs text-gray-500 font-mono tracking-wider">{selectedPhone}</p>
                            </div>
                            {/* Hidden button for future cross-view features */}
                            <button className="hidden opacity-0" />
                        </div>

                        {/* Chat Messages */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar relative">
                            {/* Subtle background glow */}
                            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

                            {loadingLogs ? (
                                <div className="flex justify-center p-12"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>
                            ) : logs.length > 0 ? (
                                logs.map((log) => (
                                    <div key={log.id} className="space-y-6">
                                        {/* User Input */}
                                        {log.input_content && (
                                            <div className="flex justify-end relative z-10 w-full">
                                                <div className="max-w-[85%] md:max-w-[75%]">
                                                    <div className="bg-primary/90 text-white px-5 py-3.5 rounded-2xl rounded-tr-sm shadow-xl border border-primary/20 backdrop-blur-sm">
                                                        <p className="text-sm whitespace-pre-wrap leading-relaxed">{log.input_content}</p>
                                                    </div>
                                                    <div className="text-[10px] text-gray-500 text-right mt-1.5 uppercase tracking-wider font-semibold">
                                                        {new Date(log.created_at).toLocaleString('pt-BR')}
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* AI Output */}
                                        {log.output_content && (
                                            <div className="flex justify-start relative w-full z-10">
                                                <div className="max-w-[90%] md:max-w-[80%] flex gap-3 md:gap-4">
                                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-[#f4a261] shrink-0 flex items-center justify-center text-white shadow-[0_0_15px_rgba(229,91,60,0.3)]">
                                                        <Bot className="w-5 h-5" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="bg-dark-800/90 border border-white/10 text-gray-200 px-5 py-4 rounded-2xl rounded-tl-sm shadow-xl backdrop-blur-md">
                                                            <p className="text-sm whitespace-pre-wrap leading-relaxed opacity-90">{log.output_content}</p>
                                                        </div>

                                                        {/* Execution Details Toggle */}
                                                        <div className="mt-3">
                                                            <button
                                                                onClick={() => handleToggleDetails(log.id)}
                                                                className="text-xs font-mono text-gray-500 hover:text-primary transition-colors flex items-center gap-1.5 group"
                                                            >
                                                                <Server className="w-3 h-3 group-hover:rotate-180 transition-transform duration-500" />
                                                                {expandedDetails[log.id] !== undefined ? 'Ocultar rastro de execução' : 'Rastrear execução do agente'}
                                                            </button>

                                                            {/* Execution Details Expansion */}
                                                            {loadingDetails[log.id] && (
                                                                <div className="mt-3 p-3 bg-dark-800/50 rounded-xl border border-white/5 flex items-center gap-2 text-xs text-gray-400">
                                                                    <Loader2 className="w-3 h-3 animate-spin" /> Mapeando nós...
                                                                </div>
                                                            )}

                                                            {expandedDetails[log.id] && (
                                                                <div className="mt-3 bg-dark-800/80 rounded-xl border border-dark-600 p-4 text-xs shadow-inner animate-in slide-in-from-top-2 duration-200">
                                                                    {expandedDetails[log.id]!.length === 0 ? (
                                                                        <p className="text-gray-500 italic">Interação simples. Nenhum subagente acionado.</p>
                                                                    ) : (
                                                                        <div className="space-y-4">
                                                                            <div className="flex justify-between items-center pb-2 border-b border-dark-600">
                                                                                <span className="text-gray-500 uppercase tracking-widest text-[9px]">{expandedDetails[log.id]!.length} Nós Invocados</span>
                                                                                <span className="bg-black text-primary font-mono px-2 py-0.5 rounded border border-primary/20 text-[10px]">
                                                                                    ID: {expandedDetails[log.id]![0]?.execution_id || 'N/A'}
                                                                                </span>
                                                                            </div>

                                                                            {(() => {
                                                                                const orchestrator = expandedDetails[log.id]!.filter(d => d.node_type === 'orchestrator');
                                                                                const subagents = expandedDetails[log.id]!.filter(d => d.node_type === 'subagent');
                                                                                const tools = expandedDetails[log.id]!.filter(d => d.node_type === 'tool');

                                                                                return (
                                                                                    <div className="space-y-3">
                                                                                        {orchestrator.length > 0 && (
                                                                                            <div>
                                                                                                <span className="text-blue-400 font-bold mb-1.5 block text-[10px] uppercase tracking-wider">Orquestrador</span>
                                                                                                <div className="flex flex-wrap gap-2">
                                                                                                    {orchestrator.map((n, i) => (
                                                                                                        <span key={i} className="bg-blue-500/10 text-blue-300 px-2 py-1 rounded border border-blue-500/20 font-mono text-[10px]">
                                                                                                            {n.node_name}
                                                                                                        </span>
                                                                                                    ))}
                                                                                                </div>
                                                                                            </div>
                                                                                        )}
                                                                                        {subagents.length > 0 && (
                                                                                            <div>
                                                                                                <span className="text-purple-400 font-bold mb-1.5 block text-[10px] uppercase tracking-wider">Subagentes</span>
                                                                                                <div className="flex flex-wrap gap-2">
                                                                                                    {subagents.map((n, i) => (
                                                                                                        <span key={i} className="bg-purple-500/10 text-purple-300 px-2 py-1 rounded border border-purple-500/20 font-mono text-[10px]">
                                                                                                            {n.node_name}
                                                                                                        </span>
                                                                                                    ))}
                                                                                                </div>
                                                                                            </div>
                                                                                        )}
                                                                                        {tools.length > 0 && (
                                                                                            <div>
                                                                                                <span className="text-[#f4a261] font-bold mb-1.5 block text-[10px] uppercase tracking-wider">Ferramentas</span>
                                                                                                <div className="flex flex-wrap gap-2">
                                                                                                    {tools.map((n, i) => (
                                                                                                        <span key={i} title={n.output_summary} className="bg-[#f4a261]/10 text-[#f4a261] px-2 py-1 rounded border border-[#f4a261]/20 font-mono text-[10px] cursor-help">
                                                                                                            {n.node_name}
                                                                                                        </span>
                                                                                                    ))}
                                                                                                </div>
                                                                                            </div>
                                                                                        )}
                                                                                    </div>
                                                                                );
                                                                            })()}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <p className="text-center text-gray-500 p-8">Nenhum histórico encontrado para este usuário.</p>
                            )}
                        </div>
                    </>
                )}
            </main>

        </div>
    );
}
