import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import yaLogo from "@/assets/logos/ya_logo_branco.svg";
import DashboardLogin from "./DashboardLogin";
import DashboardUser from "./DashboardUser";
import DashboardAdmin from "./DashboardAdmin";
import DashboardCRM from "./DashboardCRM";
import DashboardReports from "./DashboardReports";
import { PWAPrompt } from "@/components/PWAPrompt";

const Dashboard = () => {
    const { phone } = useParams();
    const navigate = useNavigate();
    const [token, setToken] = useState<string | null>(localStorage.getItem('ya_token'));
    const [role, setRole] = useState<'user' | 'admin' | null>(localStorage.getItem('ya_role') as 'user' | 'admin' | null);
    const [userId, setUserId] = useState<number | null>(localStorage.getItem('ya_userid') ? parseInt(localStorage.getItem('ya_userid')!) : null);
    const [userName, setUserName] = useState<string | null>(localStorage.getItem('ya_username'));
    const [userPhone, setUserPhone] = useState<string | null>(localStorage.getItem('ya_userphone'));
    const [adminTab, setAdminTab] = useState<'crm' | 'reports' | 'logs'>('crm');

    // Automatically redirect users to their specific parameterized dashboard URL if they hit the naked route.
    // This ensures that any bookmarks or PWAs initiated on this page correctly capture their /dashboard/7199... path.
    useEffect(() => {
        if (token && role === 'user' && userPhone && !phone) {
            navigate(`/dashboard/${userPhone}`, { replace: true });
        }
    }, [token, role, userPhone, phone, navigate]);

    const handleLoginSuccess = (newToken: string, newRole: 'user' | 'admin', id?: number, name?: string, newPhone?: string) => {
        localStorage.setItem('ya_token', newToken);
        localStorage.setItem('ya_role', newRole);
        setToken(newToken);
        setRole(newRole);
        if (id) { localStorage.setItem('ya_userid', id.toString()); setUserId(id); }
        if (name) { localStorage.setItem('ya_username', name); setUserName(name); }
        if (newPhone) { localStorage.setItem('ya_userphone', newPhone); setUserPhone(newPhone); }
    };

    const handleLogout = () => {
        localStorage.removeItem('ya_token');
        localStorage.removeItem('ya_role');
        localStorage.removeItem('ya_userid');
        localStorage.removeItem('ya_username');
        localStorage.removeItem('ya_userphone');
        setToken(null);
        setRole(null);
        setUserId(null);
        setUserName(null);
        setUserPhone(null);
        navigate('/dashboard');
    };

    // High-contrast, glassmorphic layout based on V4 concept
    return (
        <div className="relative w-full min-h-screen bg-background overflow-hidden text-white font-sans selection:bg-primary selection:text-black">

            {/* V4 Glow and Particles Background */}
            <div className="fixed inset-0 w-full h-full flex flex-col items-center justify-center text-center px-4 pointer-events-none z-0">
                <div className="absolute top-[10%] left-[15%] w-1.5 h-1.5 rounded-full bg-primary blur-[1px] opacity-80" />
                <div className="absolute top-[25%] right-[20%] w-2 h-2 rounded-full bg-[#8B3A8B] blur-[1px] opacity-80" />
                <div className="absolute bottom-[20%] left-[25%] w-1.5 h-1.5 rounded-full bg-[#D4AF37] blur-[1px] opacity-60" />
                <div className="absolute bottom-[15%] right-[15%] w-2.5 h-2.5 rounded-full bg-[#E55B3C] blur-[1px] opacity-70" />

                {/* Central Soft Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] min-w-[600px] min-h-[400px] max-w-[1200px] bg-primary/5 blur-[120px] rounded-full -z-10" />
            </div>

            {/* Editorial Header */}
            <header className="absolute top-0 left-0 w-full p-6 z-50 flex justify-between items-center pointer-events-auto">
                <div
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() => navigate('/')}
                >
                    <img src={yaLogo} alt="Yá Logo" className="h-8 object-contain" />
                    <div className="hidden sm:flex items-center">
                        <p className="border-l-[2px] border-primary pl-3 text-[12px] font-mono text-primary uppercase tracking-[0.2em] font-bold leading-none">
                            Meu Dinheiro
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    {token && (
                        <button
                            onClick={handleLogout}
                            className="text-xs font-mono text-white/50 hover:text-white uppercase tracking-widest transition-colors"
                        >
                            Sair
                        </button>
                    )}
                </div>
            </header>

            {/* Main Content Area */}
            <main className="relative z-10 flex min-h-screen items-center justify-center pt-20 px-4 pb-12">
                {!token ? (
                    <DashboardLogin initialPhone={phone} onLoginSuccess={handleLoginSuccess} />
                ) : (
                    <div className="w-full">
                        {role === 'user' && userId && userName && (
                            <>
                                {phone && <PWAPrompt />}
                                <DashboardUser
                                    userId={userId}
                                    userName={userName}
                                    token={token}
                                />
                            </>
                        )}

                        {role === 'admin' && (
                            <div className="w-full">
                                <div className="flex gap-2 mb-6 justify-center">
                                    <button
                                        onClick={() => setAdminTab('crm')}
                                        className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${adminTab === 'crm'
                                                ? 'bg-primary/20 border border-primary/30 text-primary'
                                                : 'bg-white/5 border border-white/10 text-white/50 hover:text-white'
                                            }`}
                                    >
                                        CRM & Funil
                                    </button>
                                    <button
                                        onClick={() => setAdminTab('reports')}
                                        className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${adminTab === 'reports'
                                                ? 'bg-primary/20 border border-primary/30 text-primary'
                                                : 'bg-white/5 border border-white/10 text-white/50 hover:text-white'
                                            }`}
                                    >
                                        📊 Relatórios
                                    </button>
                                    <button
                                        onClick={() => setAdminTab('logs')}
                                        className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${adminTab === 'logs'
                                                ? 'bg-primary/20 border border-primary/30 text-primary'
                                                : 'bg-white/5 border border-white/10 text-white/50 hover:text-white'
                                            }`}
                                    >
                                        Logs & Chat
                                    </button>
                                </div>
                                {adminTab === 'crm' ? (
                                    <DashboardCRM adminToken={token} />
                                ) : adminTab === 'reports' ? (
                                    <DashboardReports adminToken={token} />
                                ) : (
                                    <DashboardAdmin adminToken={token} />
                                )}
                            </div>
                        )}
                    </div>
                )}
            </main>
        </div>
    );
};

export default Dashboard;
