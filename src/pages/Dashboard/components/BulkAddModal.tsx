import { useState } from "react";
import { X, Upload, Loader2, Check, AlertTriangle } from "lucide-react";

interface BulkAddModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

const API_BASE_URL = import.meta.env.VITE_API_URL || "https://www.praxisagencia.com.br";

export default function BulkAddModal({ isOpen, onClose, onSuccess }: BulkAddModalProps) {
    const [text, setText] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState({ total: 0, current: 0, success: 0, error: 0 });
    const [finished, setFinished] = useState(false);
    const [errorsLog, setErrorsLog] = useState<string[]>([]);

    if (!isOpen) return null;

    const handleProcess = async () => {
        const lines = text.split("\n").map(l => l.trim()).filter(l => l.length > 0);
        if (lines.length === 0) return;

        setIsProcessing(true);
        setFinished(false);
        setProgress({ total: lines.length, current: 0, success: 0, error: 0 });
        setErrorsLog([]);

        let sCount = 0;
        let eCount = 0;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            // Format can be "Name, Phone" or "Name; Phone" or "Phone"
            let nome = "Mãe Comunidade";
            let rawWhatsapp = line;

            if (line.includes(",")) {
                const parts = line.split(",");
                if (parts.length >= 2) {
                    nome = parts[0].trim() || nome;
                    rawWhatsapp = parts[1].trim();
                }
            } else if (line.includes(";")) {
                const parts = line.split(";");
                if (parts.length >= 2) {
                    nome = parts[0].trim() || nome;
                    rawWhatsapp = parts[1].trim();
                }
            }

            const whatsapp = rawWhatsapp.replace(/\D/g, "");

            if (whatsapp.length < 10) {
                eCount++;
                setErrorsLog(prev => [...prev, `Linha ${i + 1}: Número inválido (${line})`]);
                setProgress(p => ({ ...p, current: i + 1, error: eCount }));
                continue;
            }

            try {
                const payload = {
                    tipo: "mae_solo",
                    nome,
                    whatsapp,
                    como_conheceu: ["comunidade"],
                    motivacao: "Cadastro em Lote (Painel CRM)"
                };

                const resp = await fetch(`${API_BASE_URL}/api/forms/submit/waitlist`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                });

                if (resp.ok) {
                    const data = await resp.json();
                    if (data.status === "error") {
                        eCount++;
                        setErrorsLog(prev => [...prev, `Linha ${i + 1}: ${data.code === 'DUPLICATE_PHONE' ? 'Já cadastrado' : 'Erro'} (${whatsapp})`]);
                    } else {
                        sCount++;
                    }
                } else {
                    eCount++;
                    setErrorsLog(prev => [...prev, `Linha ${i + 1}: Erro na API (${whatsapp})`]);
                }
            } catch (err) {
                eCount++;
                setErrorsLog(prev => [...prev, `Linha ${i + 1}: Erro de conexão (${whatsapp})`]);
            }

            setProgress(p => ({ ...p, current: i + 1, success: sCount, error: eCount }));
            
            // Pausa rápida para não sobrecarregar API
            await new Promise(r => setTimeout(r, 200));
        }

        setIsProcessing(false);
        setFinished(true);
        if (sCount > 0) onSuccess();
    };

    const handleReset = () => {
        setText("");
        setIsProcessing(false);
        setFinished(false);
        setProgress({ total: 0, current: 0, success: 0, error: 0 });
        setErrorsLog([]);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="bg-dark-800 border border-white/10 rounded-2xl p-6 max-w-lg w-full shadow-2xl relative max-h-[90vh] flex flex-col">
                <button
                    onClick={isProcessing ? undefined : handleReset}
                    disabled={isProcessing}
                    className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors disabled:opacity-50"
                >
                    <X className="w-5 h-5" />
                </button>

                <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-2">
                    <Upload className="w-5 h-5 text-primary" />
                    Cadastro em Lote
                </h2>
                <p className="text-sm text-gray-400 mb-6">
                    Cole a lista de mães abaixo. Cada linha será um registro. Formato recomendado: <code className="text-primary bg-primary/10 px-1 py-0.5 rounded">Nome, Telefone</code>.
                </p>

                {!isProcessing && !finished ? (
                    <>
                        <textarea
                            value={text}
                            onChange={e => setText(e.target.value)}
                            placeholder="Maria Silva, 71999999999&#10;Joana Souza, 11988888888&#10;71977777777"
                            className="w-full h-48 bg-black/50 border border-white/10 rounded-xl p-4 text-white font-mono text-sm resize-none focus:border-primary outline-none transition-colors mb-4"
                        />
                        <button
                            onClick={handleProcess}
                            disabled={text.trim().length === 0}
                            className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:hover:scale-100 flex justify-center items-center gap-2"
                        >
                            Processar Lista
                        </button>
                    </>
                ) : (
                    <div className="flex-1 flex flex-col h-full overflow-hidden">
                        <div className="bg-black/30 border border-white/10 rounded-xl p-6 text-center mb-4">
                            {!finished ? (
                                <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto mb-4" />
                            ) : (
                                <Check className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
                            )}
                            <h3 className="text-lg font-bold text-white mb-2">
                                {!finished ? 'Processando...' : 'Finalizado!'}
                            </h3>
                            <div className="flex justify-center gap-4 text-sm font-mono">
                                <span className="text-white">Total: {progress.total}</span>
                                <span className="text-emerald-400">Sucesso: {progress.success}</span>
                                <span className="text-red-400">Erro: {progress.error}</span>
                            </div>
                            
                            {!finished && progress.total > 0 && (
                                <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                                    <div 
                                        className="h-full bg-primary transition-all duration-300"
                                        style={{ width: `${(progress.current / progress.total) * 100}%` }}
                                    />
                                </div>
                            )}
                        </div>

                        {errorsLog.length > 0 && (
                            <div className="flex-1 overflow-y-auto bg-black/50 border border-red-500/20 rounded-xl p-4 mb-4">
                                <h4 className="text-red-400 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1">
                                    <AlertTriangle className="w-3 h-3" /> Relatório de Erros
                                </h4>
                                <ul className="space-y-1">
                                    {errorsLog.map((err, i) => (
                                        <li key={i} className="text-xs text-gray-400 font-mono">{err}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {finished && (
                            <button
                                onClick={handleReset}
                                className="w-full py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors mt-auto"
                            >
                                Fechar
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
