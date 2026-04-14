import { useState, useEffect } from "react";
import { ArrowRight, Lock, KeyRound, ArrowLeft } from "lucide-react";
import yaLogo from "@/assets/logos/ya_logo_branco.svg";

interface DashboardLoginProps {
    initialPhone?: string;
    onLoginSuccess: (token: string, type: 'user' | 'admin', id?: number, name?: string, phone?: string) => void;
}

const API_BASE_URL = import.meta.env.VITE_API_URL || "https://www.praxisagencia.com.br";

export default function DashboardLogin({ initialPhone, onLoginSuccess }: DashboardLoginProps) {
    const [step, setStep] = useState<'phone' | 'password' | 'create-password' | 'not-registered' | 'admin' | 'reset-request' | 'reset-verify'>('phone');
    const [phone, setPhone] = useState(initialPhone || "");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [pin, setPin] = useState("");
    const [adminUser, setAdminUser] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [userName, setUserName] = useState("");
    const [userId, setUserId] = useState<number | null>(null);

    useEffect(() => {
        if (initialPhone && step === 'phone') {
            setPhone(initialPhone);
            handlePhoneSubmit(initialPhone);
        }
    }, [initialPhone]);

    const handlePhoneSubmit = async (phoneStr: string) => {
        const cleanPhone = phoneStr.replace(/\D/g, '');
        if (!cleanPhone || cleanPhone.length < 10) {
            setError('Digite um telefone válido');
            return;
        }

        setIsLoading(true);
        setError("");

        try {
            const res = await fetch(`${API_BASE_URL}/api/user/check-phone`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phone: cleanPhone })
            });
            const data = await res.json();

            if (!data.exists) {
                setStep('not-registered');
            } else if (data.has_password) {
                setUserName(data.user_name || 'Usuário');
                setUserId(data.user_id);
                setStep('password');
            } else {
                setUserName(data.user_name || 'Usuário');
                setUserId(data.user_id);
                setStep('create-password');
            }
        } catch (err) {
            setError('Erro ao comunicar com o servidor');
        } finally {
            setIsLoading(false);
        }
    };

    const handleUserLogin = async () => {
        if (!password) {
            setError('Digite sua senha');
            return;
        }

        setIsLoading(true);
        setError("");

        try {
            const res = await fetch(`${API_BASE_URL}/api/user/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phone: phone.replace(/\D/g, ''), password })
            });

            if (res.ok) {
                const data = await res.json();
                onLoginSuccess(data.access_token, 'user', data.user_id, data.user_name, data.user_phone);
            } else {
                setError('Senha incorreta');
            }
        } catch (err) {
            setError('Erro ao fazer login');
        } finally {
            setIsLoading(false);
        }
    };

    const handleRegisterPassword = async () => {
        if (password !== confirmPassword) {
            setError('Senhas não coincidem');
            return;
        }
        if (password.length < 4) {
            setError('Senha deve ter pelo menos 4 caracteres');
            return;
        }

        setIsLoading(true);
        setError("");

        try {
            const res = await fetch(`${API_BASE_URL}/api/user/register-password`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phone: phone.replace(/\D/g, ''), password })
            });

            if (res.ok) {
                const data = await res.json();
                onLoginSuccess(data.access_token, 'user', userId as number, userName, phone.replace(/\D/g, ''));
            } else {
                const data = await res.json();
                setError(data.detail || 'Erro ao cadastrar');
            }
        } catch (err) {
            setError('Erro ao comunicar com o servidor');
        } finally {
            setIsLoading(false);
        }
    };

    const handleAdminLogin = async () => {
        if (!adminUser || !password) {
            setError('Preencha todos os campos');
            return;
        }

        setIsLoading(true);
        setError("");

        try {
            const res = await fetch(`${API_BASE_URL}/api/logs/auth`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: adminUser, password })
            });

            if (res.ok) {
                const data = await res.json();
                onLoginSuccess(data.token, 'admin');
            } else {
                setError('Credenciais inválidas');
            }
        } catch (err) {
            setError('Erro ao comunicar com o servidor');
        } finally {
            setIsLoading(false);
        }
    };

    const handleRequestReset = async () => {
        setIsLoading(true);
        setError("");

        try {
            const res = await fetch(`${API_BASE_URL}/api/user/request-reset`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phone: phone.replace(/\D/g, '') })
            });

            if (res.ok) {
                setStep('reset-verify');
            } else {
                const data = await res.json();
                if (data.detail && data.detail.includes('JANELA_FECHADA')) {
                    setError(data.detail);
                } else {
                    setError(data.detail || 'Erro ao solicitar recuperação.');
                }
            }
        } catch (err) {
            setError('Erro ao comunicar com o servidor');
        } finally {
            setIsLoading(false);
        }
    };

    const handleResetPassword = async () => {
        if (!pin || pin.length !== 6) {
            setError('Digite o PIN de 6 dígitos enviado ao seu WhatsApp');
            return;
        }
        if (password.length < 4) {
            setError('A nova senha deve ter pelo menos 4 caracteres');
            return;
        }

        setIsLoading(true);
        setError("");

        try {
            const res = await fetch(`${API_BASE_URL}/api/user/reset-password`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    phone: phone.replace(/\D/g, ''),
                    pin: pin,
                    new_password: password
                })
            });

            if (res.ok) {
                // If reset successful, navigate to login step so user uses new password
                setStep('password');
                setPassword("");
                setPin("");
                setError("Senha redefinida com sucesso! Você já pode entrar.");
            } else {
                const data = await res.json();
                setError(data.detail || 'Erro ao redefinir a senha');
            }
        } catch (err) {
            setError('Erro ao comunicar com o servidor');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full max-w-md p-8 rounded-3xl bg-dark-900 border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] animate-in fade-in duration-500 relative overflow-hidden">

            {/* Subtle interior glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] -z-10 rounded-full" />

            <div className="flex justify-center mb-8 relative z-10">
                <img src={yaLogo} alt="Yá Logo" className="h-16 object-contain drop-shadow-[0_0_10px_rgba(229,91,60,0.3)]" />
            </div>

            <div className="relative z-10">
                {step === 'phone' && (
                    <div className="space-y-5 animate-in slide-in-from-bottom-2 fade-in duration-300">
                        <h2 className="text-2xl font-display font-bold text-white text-center">Entrar</h2>
                        <div>
                            <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Seu telefone</label>
                            <input
                                type="tel"
                                disabled={isLoading}
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handlePhoneSubmit(phone)}
                                className="w-full px-4 py-3 bg-black/40 border border-white/20 text-white rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none placeholder-gray-500 transition-all font-mono"
                                placeholder="71999046199"
                            />
                            <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest">DDD + número (ex: 71999046199)</p>
                        </div>
                        {error && <p className="text-destructive text-sm text-center font-medium">{error}</p>}
                        <button
                            onClick={() => handlePhoneSubmit(phone)}
                            disabled={isLoading}
                            className="w-full bg-primary hover:bg-primary/90 text-white py-3.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:pointer-events-none flex justify-center items-center gap-2"
                        >
                            {isLoading ? 'Verificando...' : 'Continuar'} <ArrowRight className="w-4 h-4" />
                        </button>
                        <div className="text-center pt-2">
                            <button onClick={() => { setStep('admin'); setError(""); setPassword(""); }} className="text-xs text-gray-500 hover:text-primary transition-colors uppercase tracking-widest font-bold">
                                Acesso Admin
                            </button>
                        </div>
                    </div>
                )}

                {step === 'password' && (
                    <div className="space-y-5 animate-in slide-in-from-right-2 fade-in duration-300">
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-display font-bold text-white">Olá, <span className="text-primary">{userName}</span>!</h2>
                            <p className="text-gray-400 text-sm mt-1">Digite sua senha para continuar</p>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Senha de acesso</label>
                            <div className="relative">
                                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                <input
                                    type="password"
                                    disabled={isLoading}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleUserLogin()}
                                    className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/20 text-white rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none placeholder-gray-500 transition-all font-mono tracking-widest"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>
                        {error && <p className="text-destructive text-sm text-center font-medium">{error}</p>}
                        <button
                            onClick={handleUserLogin}
                            disabled={isLoading}
                            className="w-full bg-primary hover:bg-primary/90 text-white py-3.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:pointer-events-none flex justify-center items-center"
                        >
                            {isLoading ? 'Entrando...' : 'Entrar na Conta'}
                        </button>
                        <div className="flex flex-col items-center gap-3 pt-2">
                            <button onClick={() => { setStep('reset-request'); setError(""); }} className="text-xs text-primary hover:text-primary/70 transition-colors">
                                Esqueci minha senha
                            </button>
                            <button onClick={() => { setStep('phone'); setPassword(""); setError(""); }} className="text-xs text-gray-500 hover:text-white transition-colors uppercase tracking-widest font-bold flex items-center justify-center gap-1">
                                <ArrowLeft className="w-3 h-3" /> Voltar
                            </button>
                        </div>
                    </div>
                )}

                {step === 'create-password' && (
                    <div className="space-y-5 animate-in slide-in-from-right-2 fade-in duration-300">
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-display font-bold text-white">Criar Senha</h2>
                            <p className="text-gray-400 text-sm mt-1">Crie uma senha para acessar seu dashboard</p>
                        </div>
                        <div className="space-y-3">
                            <div>
                                <div className="relative">
                                    <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                    <input
                                        type="password"
                                        disabled={isLoading}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/20 text-white rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none placeholder-gray-500 transition-all font-mono tracking-widest"
                                        placeholder="Nova senha (min. 4 carac.)"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="relative">
                                    <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                    <input
                                        type="password"
                                        disabled={isLoading}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && handleRegisterPassword()}
                                        className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/20 text-white rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none placeholder-gray-500 transition-all font-mono tracking-widest"
                                        placeholder="Confirme a senha"
                                    />
                                </div>
                            </div>
                        </div>
                        {error && <p className="text-destructive text-sm text-center font-medium">{error}</p>}
                        <button
                            onClick={handleRegisterPassword}
                            disabled={isLoading}
                            className="w-full bg-primary hover:bg-primary/90 text-white py-3.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:pointer-events-none flex justify-center items-center"
                        >
                            {isLoading ? 'Cadastrando...' : 'Cadastrar Senha e Entrar'}
                        </button>
                        <button onClick={() => { setStep('phone'); setPassword(""); setConfirmPassword(""); setError(""); }} className="w-full text-xs text-gray-500 hover:text-white transition-colors uppercase tracking-widest font-bold flex items-center justify-center gap-1">
                            <ArrowLeft className="w-3 h-3" /> Voltar
                        </button>
                    </div>
                )}

                {step === 'not-registered' && (
                    <div className="space-y-6 text-center animate-in zoom-in-95 duration-300">
                        <h2 className="text-2xl font-display font-bold text-white">Cadastre-se</h2>
                        <p className="text-gray-400 text-sm">Seu número não está cadastrado em nosso sistema. Inicie a conversa pelo WhatsApp para ativar a sua conta Yá.</p>

                        <a href="https://wa.me/557199046199?text=Oii%2C%20quero%20experimentar!" target="_blank" rel="noreferrer"
                            className="block w-full bg-[#25D366] hover:bg-[#1fab52] text-white py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)] flex items-center justify-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Iniciar Cadastro
                        </a>
                        <button onClick={() => setStep('phone')} className="w-full text-xs text-gray-500 hover:text-white transition-colors uppercase tracking-widest font-bold flex items-center justify-center gap-1">
                            <ArrowLeft className="w-3 h-3" /> Voltar
                        </button>
                    </div>
                )}

                {step === 'admin' && (
                    <div className="space-y-5 animate-in slide-in-from-left-2 fade-in duration-300">
                        <h2 className="text-2xl font-display font-bold text-white text-center">Acesso Autorizado</h2>
                        <div className="space-y-3">
                            <div>
                                <input
                                    type="text"
                                    disabled={isLoading}
                                    value={adminUser}
                                    onChange={(e) => setAdminUser(e.target.value)}
                                    className="w-full px-4 py-3 bg-black/40 border border-white/20 text-white rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none placeholder-gray-500 transition-all font-mono"
                                    placeholder="Usuário Admin"
                                />
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                <input
                                    type="password"
                                    disabled={isLoading}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleAdminLogin()}
                                    className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/20 text-white rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none placeholder-gray-500 transition-all font-mono tracking-widest"
                                    placeholder="Senha"
                                />
                            </div>
                        </div>
                        {error && <p className="text-destructive text-sm text-center font-medium">{error}</p>}
                        <button
                            onClick={handleAdminLogin}
                            disabled={isLoading}
                            className="w-full bg-white text-black hover:bg-gray-200 py-3.5 rounded-xl font-bold transition-all shadow-lg disabled:opacity-50 disabled:pointer-events-none"
                        >
                            {isLoading ? 'Autenticando...' : 'Entrar no Sistema'}
                        </button>
                        <button onClick={() => { setStep('phone'); setPassword(""); setError(""); }} className="w-full text-xs text-gray-500 hover:text-white transition-colors uppercase tracking-widest font-bold flex items-center justify-center gap-1">
                            <ArrowLeft className="w-3 h-3" /> Acesso Associado
                        </button>
                    </div>
                )}

                {step === 'reset-request' && (
                    <div className="space-y-5 animate-in slide-in-from-left-2 fade-in duration-300">
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-display font-bold text-white">Recuperação</h2>
                            <p className="text-gray-400 text-sm mt-1">Um código PIN será enviado ao seu WhatsApp.</p>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Confirmar telefone</label>
                            <input
                                type="tel"
                                disabled={isLoading}
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full px-4 py-3 bg-black/40 border border-white/20 text-white rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none placeholder-gray-500 transition-all font-mono"
                                placeholder="71999046199"
                            />
                        </div>
                        {error && (
                            <div className={`p-3 rounded-lg text-sm font-medium ${error.includes('JANELA_FECHADA')
                                    ? 'bg-yellow-500/10 border border-yellow-500/30 text-yellow-200'
                                    : (error.includes('sucesso') ? 'bg-primary/10 border border-primary/30 text-primary' : 'bg-red-500/10 border border-red-500/30 text-destructive')
                                }`}>
                                {error.replace('JANELA_FECHADA: ', '')}
                            </div>
                        )}
                        <button
                            onClick={handleRequestReset}
                            disabled={isLoading}
                            className="w-full bg-primary hover:bg-primary/90 text-white py-3.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:pointer-events-none flex justify-center items-center"
                        >
                            {isLoading ? 'Solicitando...' : 'Enviar Código PIN'}
                        </button>
                        <button onClick={() => { setStep('password'); setError(""); }} className="w-full text-xs text-gray-500 hover:text-white transition-colors uppercase tracking-widest font-bold flex items-center justify-center gap-1 mt-4">
                            <ArrowLeft className="w-3 h-3" /> Cancelar
                        </button>
                    </div>
                )}

                {step === 'reset-verify' && (
                    <div className="space-y-5 animate-in zoom-in-95 fade-in duration-300">
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-display font-bold text-white">Nova Senha</h2>
                            <p className="text-gray-400 text-sm mt-1">Insira o PIN recebido no WhatsApp e digite a nova senha desejada.</p>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">PIN de 6 dígitos</label>
                                <input
                                    type="text"
                                    maxLength={6}
                                    disabled={isLoading}
                                    value={pin}
                                    onChange={(e) => setPin(e.target.value)}
                                    className="w-full px-4 py-3 bg-black/40 border border-white/20 text-white rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none placeholder-gray-500 transition-all font-mono text-center tracking-[0.5em]"
                                    placeholder="123456"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Nova Senha</label>
                                <div className="relative">
                                    <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                    <input
                                        type="password"
                                        disabled={isLoading}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/20 text-white rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none placeholder-gray-500 transition-all font-mono tracking-widest"
                                        placeholder="Min. 4 caracteres"
                                    />
                                </div>
                            </div>
                        </div>
                        {error && <p className="text-destructive text-sm text-center font-medium">{error}</p>}
                        <button
                            onClick={handleResetPassword}
                            disabled={isLoading}
                            className="w-full bg-primary hover:bg-primary/90 text-white py-3.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:pointer-events-none flex justify-center items-center mt-4"
                        >
                            {isLoading ? 'Redefinindo...' : 'Salvar Nova Senha'}
                        </button>
                    </div>
                )}
            </div>

        </div>
    );
}
