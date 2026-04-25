import { useState } from "react";
import { X, ChevronRight, ChevronLeft, Check, Heart, Users, Loader2 } from "lucide-react";
import { useIBGE } from "@/hooks/useIBGE";

const API_BASE_URL = import.meta.env.VITE_API_URL || "https://www.praxisagencia.com.br";

// Fire-and-forget intent tracking for funnel analysis
const trackIntent = (tipo: string) => {
    try {
        fetch(`${API_BASE_URL}/api/forms/submit/waitlist-intent`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ tipo, timestamp: new Date().toISOString() }),
        }).catch(() => { /* silent */ });
    } catch { /* silent */ }
};

const ESTADOS_BR = [
    "AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA",
    "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"
];

const COMO_CONHECEU_OPTIONS = [
    { value: "g1", labelPt: "Matéria do G1", labelEn: "G1 Article" },
    { value: "conexao_bahia", labelPt: "Programa Conexão Bahia", labelEn: "Programa Conexão Bahia" },
    { value: "brazil_conference", labelPt: "Brazil Conference", labelEn: "Brazil Conference" },
    { value: "instagram", labelPt: "Instagram", labelEn: "Instagram" },
    { value: "linkedin", labelPt: "LinkedIn", labelEn: "LinkedIn" },
    { value: "amiga", labelPt: "Amiga(o)", labelEn: "Friend" },
    { value: "radio_tv", labelPt: "Rádio/TV", labelEn: "Radio/TV" },
    { value: "outro", labelPt: "Outro", labelEn: "Other" },
];

interface WaitlistFormModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface FormData {
    tipo: string;
    nome: string;
    whatsapp: string;
    filhos: string;
    semFilhos: boolean;
    cidade: string;
    estado: string;
    comoConheceu: string[];
    jaUsouAppFinanceiro: string | null;
    usaWhatsapp: boolean | null;
    motivacao: string;
    interesseAjudarOutras: string;
}

const initialFormData: FormData = {
    tipo: "",
    nome: "",
    whatsapp: "",
    filhos: "",
    semFilhos: false,
    cidade: "",
    estado: "",
    comoConheceu: [],
    jaUsouAppFinanceiro: null,
    usaWhatsapp: null,
    motivacao: "",
    interesseAjudarOutras: "",
};

const t = {
    pt: {
        step0Title: "Bem-vinda(o) à Yá! 💛",
        step0Subtitle: "Queremos entender melhor quem você é para personalizar sua experiência.",
        step0Question: "Você é mãe solo?",
        step0Yes: "✅ Sim, sou mãe solo",
        step0No: "💛 Quero apoiar de outra forma",
        // Mãe Solo steps
        s1Title: "Sobre sua família",
        s1FilhosLabel: "Quantos filhos você tem?",
        s1SemFilhos: "Não tenho filhos",
        s2Title: "Onde você mora?",
        s2CidadeLabel: "Cidade",
        s2EstadoLabel: "Estado",
        s2EstadoPlaceholder: "Selecione",
        s3Title: "Seus dados de contato",
        s3NomeLabel: "Como quer que a Yá te chame?",
        s3NomePlaceholder: "Seu nome",
        s3WhatsLabel: "Número do WhatsApp",
        s3WhatsPlaceholder: "(XX) XXXXX-XXXX",
        s4Title: "Como nos conheceu?",
        s4Subtitle: "Selecione uma ou mais opções",
        s5Title: "Sobre tecnologia",
        s5AppLabel: "Já usou algum aplicativo de controle financeiro?",
        s5AppYes: "Sim",
        s5AppTried: "Já, mas não me adaptei",
        s5AppNo: "Não",
        s5WhatsLabel: "Você usa o WhatsApp no dia a dia?",
        s5Yes: "Sim",
        s5No: "Não",
        s6Title: "Sua motivação",
        s6MotivacaoLabel: "O que te motivou a querer contribuir com o protótipo, além de organizar suas finanças?",
        s6MotivacaoPlaceholder: "Conte pra gente...",
        s6AjudarLabel: "Teria interesse em auxiliar outras mães?",
        s6AjudarSim: "Sim!",
        s6AjudarNao: "Agora não",
        s6AjudarTalvez: "Talvez",
        // Apoiador steps
        a1Title: "Sobre você",
        a1FilhosLabel: "Tem filhos?",
        a1SemFilhos: "Não tenho filhos",
        a2Title: "Seus dados",
        a3Title: "Quase lá!",
        a3ComoConheceuLabel: "Como nos conheceu?",
        a3MotivacaoLabel: "O que te motivou a querer apoiar o projeto?",
        a3MotivacaoPlaceholder: "Conte pra gente...",
        // Controls
        next: "Próximo",
        back: "Voltar",
        submit: "Enviar",
        sending: "Enviando...",
        // Success
        successTitle: "Obrigada! 💛",
        successMsg: "Sua inscrição na lista de espera foi recebida com sucesso! Entraremos em contato pelo WhatsApp em breve.",
        successClose: "Fechar",
        // Validation
        required: "Campo obrigatório",
        invalidWhatsapp: "Número inválido",
        duplicateTitle: "Número já cadastrado",
        duplicateMsg: "Este número de WhatsApp já encontra-se na nossa lista de espera.",
        duplicateReportLabel: "Não foi você que fez este cadastro?",
        duplicateReportBtn: "Reportar erro com este número",
        duplicateReportSuccess: "Erro reportado com sucesso. Vamos analisar o caso.",
    },
    en: {
        step0Title: "Welcome to Yá! 💛",
        step0Subtitle: "We want to better understand who you are to personalize your experience.",
        step0Question: "Are you a single mother?",
        step0Yes: "✅ Yes, I'm a single mother",
        step0No: "💛 I want to support in another way",
        s1Title: "About your family",
        s1FilhosLabel: "How many children do you have?",
        s1SemFilhos: "I don't have children",
        s2Title: "Where do you live?",
        s2CidadeLabel: "City",
        s2EstadoLabel: "State",
        s2EstadoPlaceholder: "Select",
        s3Title: "Your contact info",
        s3NomeLabel: "How would you like Yá to call you?",
        s3NomePlaceholder: "Your name",
        s3WhatsLabel: "WhatsApp number",
        s3WhatsPlaceholder: "(XX) XXXXX-XXXX",
        s4Title: "How did you find us?",
        s4Subtitle: "Select one or more options",
        s5Title: "About technology",
        s5AppLabel: "Have you ever used a financial control app?",
        s5AppYes: "Yes",
        s5AppTried: "Tried, but didn't adapt",
        s5AppNo: "No",
        s5WhatsLabel: "Do you use WhatsApp daily?",
        s5Yes: "Yes",
        s5No: "No",
        s6Title: "Your motivation",
        s6MotivacaoLabel: "What motivated you to contribute to the prototype, beyond organizing your finances?",
        s6MotivacaoPlaceholder: "Tell us...",
        s6AjudarLabel: "Would you be interested in helping other mothers?",
        s6AjudarSim: "Yes!",
        s6AjudarNao: "Not now",
        s6AjudarTalvez: "Maybe",
        a1Title: "About you",
        a1FilhosLabel: "Do you have children?",
        a1SemFilhos: "I don't have children",
        a2Title: "Your info",
        a3Title: "Almost there!",
        a3ComoConheceuLabel: "How did you find us?",
        a3MotivacaoLabel: "What motivated you to support this project?",
        a3MotivacaoPlaceholder: "Tell us...",
        next: "Next",
        back: "Back",
        submit: "Submit",
        sending: "Sending...",
        successTitle: "Thank you! 💛",
        successMsg: "Your waitlist signup was received! We'll contact you via WhatsApp soon.",
        successClose: "Close",
        required: "Required field",
        invalidWhatsapp: "Invalid number",
        duplicateTitle: "Number already registered",
        duplicateMsg: "This WhatsApp number is already on our waitlist.",
        duplicateReportLabel: "Wasn't you who registered?",
        duplicateReportBtn: "Report error with this number",
        duplicateReportSuccess: "Error reported successfully. We will analyze the case.",
    },
};

function formatWhatsapp(value: string): string {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

import { useLanguage } from "@/contexts/LanguageContext";

export default function WaitlistFormModal({ isOpen, onClose }: WaitlistFormModalProps) {
    const { lang } = useLanguage();
    const [step, setStep] = useState(-1); // -1 = triagem
    const [flow, setFlow] = useState<"mae_solo" | "apoiador" | "">("");
    const [form, setForm] = useState<FormData>(initialFormData);
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [duplicateError, setDuplicateError] = useState(false);
    const [reportedDuplicate, setReportedDuplicate] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const labels = t[lang];
    const { cidades, loading: loadingCidades } = useIBGE(form.estado);

    const totalSteps = flow === "mae_solo" ? 3 : 3;

    const reset = () => {
        setStep(-1);
        setFlow("");
        setForm(initialFormData);
        setSubmitting(false);
        setSuccess(false);
        setDuplicateError(false);
        setReportedDuplicate(false);
        setErrors({});
    };

    const handleClose = () => {
        reset();
        onClose();
    };

    const setField = (key: keyof FormData, value: unknown) => {
        setForm(prev => ({ ...prev, [key]: value }));
        setErrors(prev => ({ ...prev, [key]: "" }));
    };

    const toggleComoConheceu = (val: string) => {
        setForm(prev => ({
            ...prev,
            comoConheceu: prev.comoConheceu.includes(val)
                ? prev.comoConheceu.filter(v => v !== val)
                : [...prev.comoConheceu, val],
        }));
    };

    const validate = (): boolean => {
        const errs: Record<string, string> = {};

        if (flow === "mae_solo") {
            if (step === 0) {
                if (!form.nome.trim()) errs.nome = labels.required;
                const digits = form.whatsapp.replace(/\D/g, "");
                if (digits.length < 10) errs.whatsapp = labels.invalidWhatsapp;
            }
            if (step === 1) {
                if (!form.filhos || Number(form.filhos) < 1) errs.filhos = labels.required;
                if (!form.cidade.trim()) errs.cidade = labels.required;
                if (!form.estado) errs.estado = labels.required;
            }
            if (step === 2) {
                if (form.comoConheceu.length === 0) errs.comoConheceu = labels.required;
            }
        } else {
            if (step === 0 && !form.semFilhos && !form.filhos) errs.filhos = labels.required;
            if (step === 1) {
                if (!form.cidade.trim()) errs.cidade = labels.required;
                if (!form.estado) errs.estado = labels.required;
                if (!form.nome.trim()) errs.nome = labels.required;
                const digits = form.whatsapp.replace(/\D/g, "");
                if (digits.length < 10) errs.whatsapp = labels.invalidWhatsapp;
            }
            if (step === 2 && form.comoConheceu.length === 0) errs.comoConheceu = labels.required;
        }

        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const handleSubmit = async () => {
        if (!validate()) return;
        setSubmitting(true);
        try {
            const payload = {
                tipo: flow,
                nome: form.nome,
                whatsapp: form.whatsapp.replace(/\D/g, ""),
                filhos: form.semFilhos ? "nenhum" : form.filhos || null,
                cidade: form.cidade || null,
                estado: form.estado || null,
                como_conheceu: form.comoConheceu.length > 0 ? form.comoConheceu : null,
                ja_usou_app_financeiro: form.jaUsouAppFinanceiro,
                usa_whatsapp: form.usaWhatsapp,
                motivacao: form.motivacao || null,
                interesse_ajudar_outras: form.interesseAjudarOutras || null,
            };

            const resp = await fetch(`${API_BASE_URL}/api/forms/submit/waitlist`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!resp.ok) throw new Error("Failed");

            const data = await resp.json();
            if (data.status === "error" && data.code === "DUPLICATE_PHONE") {
                setDuplicateError(true);
                return;
            }

            setSuccess(true);
        } catch (err) {
            console.error("Waitlist submit error:", err);
        } finally {
            setSubmitting(false);
        }
    };

    const handleReportDuplicate = async () => {
        setSubmitting(true);
        try {
            const resp = await fetch(`${API_BASE_URL}/api/forms/submit/report-waitlist-error`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ whatsapp: form.whatsapp.replace(/\D/g, "") }),
            });
            if (resp.ok) {
                setReportedDuplicate(true);
            }
        } catch (err) {
            console.error("Report duplicate error:", err);
        } finally {
            setSubmitting(false);
        }
    };

    const handleNext = () => {
        if (!validate()) return;
        if (step === totalSteps - 1) {
            handleSubmit();
        } else {
            setStep(s => s + 1);
        }
    };

    if (!isOpen) return null;

    // Progress percentage
    const progress = step < 0 ? 0 : ((step + 1) / totalSteps) * 100;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" onClick={handleClose}>
            <div
                className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-6 sm:p-8 max-w-lg w-full shadow-2xl relative animate-fade-up max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
            >
                {/* Close */}
                <button onClick={handleClose} className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors z-10">
                    <X className="w-5 h-5" />
                </button>

                {/* Progress Bar */}
                {step >= 0 && !success && !duplicateError && (
                    <div className="mb-6">
                        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500 ease-out"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                        <p className="text-xs text-white/30 font-mono mt-2 text-right">
                            {step + 1}/{totalSteps}
                        </p>
                    </div>
                )}

                {/* SUCCESS */}
                {success && (
                    <div className="text-center py-8 animate-fade-up">
                        <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(226,107,88,0.4)]">
                            <Check className="w-10 h-10 text-white" strokeWidth={3} />
                        </div>
                        <h2 className="text-3xl font-black text-white mb-4">{labels.successTitle}</h2>
                        <p className="text-white/60 text-lg mb-8 leading-relaxed">{labels.successMsg}</p>
                        <button
                            onClick={handleClose}
                            className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full hover:scale-105 transition-transform"
                        >
                            {labels.successClose}
                        </button>
                    </div>
                )}

                {/* DUPLICATE ERROR */}
                {duplicateError && !success && (
                    <div className="text-center py-6 animate-fade-up">
                        <div className="w-16 h-16 mx-auto mb-6 bg-amber-500/10 rounded-full flex items-center justify-center border border-amber-500/20">
                            <span className="text-3xl">⚠️</span>
                        </div>
                        <h2 className="text-2xl font-black text-white mb-3">{labels.duplicateTitle}</h2>
                        <p className="text-white/60 mb-6">{labels.duplicateMsg}</p>

                        {!reportedDuplicate ? (
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-6 text-sm">
                                <p className="text-white/50 mb-4">{labels.duplicateReportLabel}</p>
                                <button
                                    onClick={handleReportDuplicate}
                                    disabled={submitting}
                                    className="w-full py-3 bg-white/5 border border-white/10 hover:border-amber-500/50 hover:bg-amber-500/10 text-amber-500 font-bold rounded-xl transition-all flex justify-center items-center gap-2"
                                >
                                    {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                                    {labels.duplicateReportBtn}
                                </button>
                            </div>
                        ) : (
                            <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl mb-6">
                                <p className="text-emerald-400 font-semibold text-sm">{labels.duplicateReportSuccess}</p>
                            </div>
                        )}

                        <div className="flex gap-3">
                            <button
                                onClick={() => setDuplicateError(false)}
                                className="flex-1 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white/80 font-semibold hover:bg-white/10 transition-colors"
                            >
                                {labels.back}
                            </button>
                            <button
                                onClick={handleClose}
                                className="flex-1 px-5 py-3 rounded-xl bg-primary/20 border border-primary/30 text-primary font-bold hover:bg-primary/30 transition-colors"
                            >
                                {labels.successClose}
                            </button>
                        </div>
                    </div>
                )}

                {/* STEP -1: Triagem */}
                {!success && !duplicateError && step === -1 && (
                    <div className="py-4 animate-fade-up">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">{labels.step0Title}</h2>
                            <p className="text-white/50 text-sm leading-relaxed">{labels.step0Subtitle}</p>
                        </div>
                        <p className="text-white/80 text-lg font-semibold text-center mb-6">{labels.step0Question}</p>
                        <div className="flex flex-col gap-4">
                            <button
                                onClick={() => { trackIntent("mae_solo"); setFlow("mae_solo"); setForm(p => ({ ...p, tipo: "mae_solo" })); setStep(0); }}
                                className="w-full py-4 px-6 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/40 rounded-2xl text-white font-bold text-lg hover:from-primary/30 hover:to-secondary/30 hover:border-primary/60 transition-all duration-300 flex items-center justify-center gap-3 group"
                            >
                                <Heart className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                                {labels.step0Yes}
                            </button>
                            <button
                                onClick={() => { trackIntent("apoiador"); setFlow("apoiador"); setForm(p => ({ ...p, tipo: "apoiador" })); setStep(0); }}
                                className="w-full py-4 px-6 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-3 group"
                            >
                                <Users className="w-5 h-5 text-white/60 group-hover:scale-110 transition-transform" />
                                {labels.step0No}
                            </button>
                        </div>
                    </div>
                )}

                {/* MÃE SOLO FLOW */}
                {!success && !duplicateError && flow === "mae_solo" && step >= 0 && (
                    <div className="animate-fade-up" key={`solo-${step}`}>
                        {/* Step 0: Contato */}
                        {step === 0 && (
                            <div>
                                <h3 className="text-xl font-bold text-white mb-6">{labels.s3Title}</h3>
                                <label className="text-white/70 text-sm font-medium mb-2 block">{labels.s3NomeLabel}</label>
                                <input
                                    type="text"
                                    value={form.nome}
                                    onChange={e => setField("nome", e.target.value)}
                                    className={`w-full bg-white/5 border ${errors.nome ? "border-red-500" : "border-white/10 focus:border-primary"} rounded-xl px-5 py-3.5 text-white outline-none transition-colors mb-4`}
                                    placeholder={labels.s3NomePlaceholder}
                                />
                                {errors.nome && <p className="text-red-400 text-xs mb-3">{errors.nome}</p>}
                                <label className="text-white/70 text-sm font-medium mb-2 block">{labels.s3WhatsLabel}</label>
                                <input
                                    type="tel"
                                    value={form.whatsapp}
                                    onChange={e => setField("whatsapp", formatWhatsapp(e.target.value))}
                                    className={`w-full bg-white/5 border ${errors.whatsapp ? "border-red-500" : "border-white/10 focus:border-primary"} rounded-xl px-5 py-3.5 text-white font-mono outline-none transition-colors`}
                                    placeholder={labels.s3WhatsPlaceholder}
                                />
                                {errors.whatsapp && <p className="text-red-400 text-xs mt-2">{errors.whatsapp}</p>}
                            </div>
                        )}

                        {/* Step 1: Perfil (Filhos e Local) */}
                        {step === 1 && (
                            <div>
                                <h3 className="text-xl font-bold text-white mb-6">{labels.s1Title} e Localização</h3>
                                <label className="text-white/70 text-sm font-medium mb-3 block">{labels.s1FilhosLabel}</label>
                                <input
                                    type="number"
                                    min="1"
                                    max="20"
                                    value={form.filhos}
                                    onChange={e => setField("filhos", e.target.value)}
                                    className={`w-full bg-white/5 border ${errors.filhos ? "border-red-500" : "border-white/10 focus:border-primary"} rounded-xl px-5 py-3.5 text-white font-mono outline-none transition-colors mb-4`}
                                    placeholder="2"
                                />
                                {errors.filhos && <p className="text-red-400 text-xs mb-3">{errors.filhos}</p>}

                                <label className="text-white/70 text-sm font-medium mb-2 block">{labels.s2CidadeLabel}</label>
                                <input
                                    type="text"
                                    list="cidades-list-waitlist1"
                                    value={form.cidade}
                                    onChange={e => setField("cidade", e.target.value)}
                                    disabled={!form.estado || loadingCidades}
                                    className={`w-full bg-white/5 border ${errors.cidade ? "border-red-500" : "border-white/10 focus:border-primary"} rounded-xl px-5 py-3.5 text-white outline-none transition-colors mb-4 disabled:opacity-50`}
                                    placeholder={loadingCidades ? "Carregando..." : "Salvador"}
                                />
                                <datalist id="cidades-list-waitlist1">
                                    {cidades.map(c => <option key={c.id} value={c.nome} />)}
                                </datalist>
                                {errors.cidade && <p className="text-red-400 text-xs mb-3">{errors.cidade}</p>}

                                <label className="text-white/70 text-sm font-medium mb-2 block">{labels.s2EstadoLabel}</label>
                                <select
                                    value={form.estado}
                                    onChange={e => setField("estado", e.target.value)}
                                    className={`w-full bg-[#111] text-white border ${errors.estado ? "border-red-500" : "border-white/10 focus:border-primary"} rounded-xl px-5 py-3.5 outline-none transition-colors appearance-none`}
                                >
                                    <option value="" className="bg-[#111] text-white">{labels.s2EstadoPlaceholder}</option>
                                    {ESTADOS_BR.map(uf => <option key={uf} value={uf} className="bg-[#111] text-white">{uf}</option>)}
                                </select>
                                {errors.estado && <p className="text-red-400 text-xs mt-2">{errors.estado}</p>}
                            </div>
                        )}

                        {/* Step 2: Como conheceu e Opcionais */}
                        {step === 2 && (
                            <div>
                                <h3 className="text-xl font-bold text-white mb-6">Quase lá!</h3>
                                <label className="text-white/70 text-sm font-medium mb-3 block">{labels.s4Title} *</label>
                                <div className="flex flex-wrap gap-3 mb-6">
                                    {COMO_CONHECEU_OPTIONS.map(opt => {
                                        const selected = form.comoConheceu.includes(opt.value);
                                        return (
                                            <button
                                                key={opt.value}
                                                onClick={() => toggleComoConheceu(opt.value)}
                                                className={`px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${selected
                                                    ? "bg-primary/20 border border-primary/50 text-primary shadow-[0_0_15px_rgba(226,107,88,0.2)]"
                                                    : "bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:border-white/20"
                                                    }`}
                                            >
                                                {lang === "pt" ? opt.labelPt : opt.labelEn}
                                            </button>
                                        );
                                    })}
                                </div>
                                {errors.comoConheceu && <p className="text-red-400 text-xs mb-6">{errors.comoConheceu}</p>}

                                <label className="text-white/70 text-sm font-medium mb-3 block">{labels.s6MotivacaoLabel} (Opcional)</label>
                                <textarea
                                    value={form.motivacao}
                                    onChange={e => setField("motivacao", e.target.value)}
                                    rows={3}
                                    className="w-full bg-white/5 border border-white/10 focus:border-primary rounded-xl px-5 py-3.5 text-white outline-none transition-colors resize-none mb-6"
                                    placeholder={labels.s6MotivacaoPlaceholder}
                                />

                                {/* Pergunta: Já usou app financeiro? */}
                                <label className="text-white/70 text-sm font-medium mb-3 block">{labels.s5AppLabel}</label>
                                <div className="flex flex-wrap gap-3 mb-6">
                                    {[
                                        { value: "sim", label: labels.s5AppYes },
                                        { value: "tentou", label: labels.s5AppTried },
                                        { value: "nao", label: labels.s5AppNo },
                                    ].map(opt => (
                                        <button
                                            key={opt.value}
                                            type="button"
                                            onClick={() => setField("jaUsouAppFinanceiro", form.jaUsouAppFinanceiro === opt.value ? null : opt.value)}
                                            className={`px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                                                form.jaUsouAppFinanceiro === opt.value
                                                    ? "bg-primary/20 border border-primary/50 text-primary shadow-[0_0_15px_rgba(226,107,88,0.2)]"
                                                    : "bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:border-white/20"
                                            }`}
                                        >
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>

                                {/* Pergunta: Interesse em ajudar outras mães? */}
                                <label className="text-white/70 text-sm font-medium mb-3 block">{labels.s6AjudarLabel}</label>
                                <div className="flex flex-wrap gap-3 mb-4">
                                    {[
                                        { value: "sim", label: labels.s6AjudarSim },
                                        { value: "nao", label: labels.s6AjudarNao },
                                        { value: "talvez", label: labels.s6AjudarTalvez },
                                    ].map(opt => (
                                        <button
                                            key={opt.value}
                                            type="button"
                                            onClick={() => setField("interesseAjudarOutras", form.interesseAjudarOutras === opt.value ? "" : opt.value)}
                                            className={`px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                                                form.interesseAjudarOutras === opt.value
                                                    ? "bg-primary/20 border border-primary/50 text-primary shadow-[0_0_15px_rgba(226,107,88,0.2)]"
                                                    : "bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:border-white/20"
                                            }`}
                                        >
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* APOIADOR FLOW */}
                {!success && !duplicateError && flow === "apoiador" && step >= 0 && (
                    <div className="animate-fade-up" key={`apoiador-${step}`}>
                        {/* Step 0: Filhos */}
                        {step === 0 && (
                            <div>
                                <h3 className="text-xl font-bold text-white mb-6">{labels.a1Title}</h3>
                                <label className="text-white/70 text-sm font-medium mb-3 block">{labels.a1FilhosLabel}</label>
                                <input
                                    type="number"
                                    min="1"
                                    max="20"
                                    value={form.filhos}
                                    onChange={e => setField("filhos", e.target.value)}
                                    disabled={form.semFilhos}
                                    className={`w-full bg-white/5 border ${errors.filhos ? "border-red-500" : "border-white/10 focus:border-primary"} rounded-xl px-5 py-3.5 text-white font-mono outline-none transition-colors disabled:opacity-30 mb-3`}
                                    placeholder="2"
                                />
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <div
                                        className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${form.semFilhos ? "bg-primary border-primary" : "border-white/20 group-hover:border-white/40"}`}
                                        onClick={() => { setField("semFilhos", !form.semFilhos); if (!form.semFilhos) setField("filhos", ""); }}
                                    >
                                        {form.semFilhos && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                                    </div>
                                    <span className="text-white/60 text-sm">{labels.a1SemFilhos}</span>
                                </label>
                                {errors.filhos && <p className="text-red-400 text-xs mt-2">{errors.filhos}</p>}
                            </div>
                        )}

                        {/* Step 1: Cidade + Estado + Nome + WhatsApp */}
                        {step === 1 && (
                            <div>
                                <h3 className="text-xl font-bold text-white mb-6">{labels.a2Title}</h3>
                                <label className="text-white/70 text-sm font-medium mb-2 block">{labels.s3NomeLabel}</label>
                                <input
                                    type="text"
                                    value={form.nome}
                                    onChange={e => setField("nome", e.target.value)}
                                    className={`w-full bg-white/5 border ${errors.nome ? "border-red-500" : "border-white/10 focus:border-primary"} rounded-xl px-5 py-3.5 text-white outline-none transition-colors mb-4`}
                                    placeholder={labels.s3NomePlaceholder}
                                />
                                {errors.nome && <p className="text-red-400 text-xs mb-3">{errors.nome}</p>}
                                <label className="text-white/70 text-sm font-medium mb-2 block">{labels.s3WhatsLabel}</label>
                                <input
                                    type="tel"
                                    value={form.whatsapp}
                                    onChange={e => setField("whatsapp", formatWhatsapp(e.target.value))}
                                    className={`w-full bg-white/5 border ${errors.whatsapp ? "border-red-500" : "border-white/10 focus:border-primary"} rounded-xl px-5 py-3.5 text-white font-mono outline-none transition-colors mb-4`}
                                    placeholder={labels.s3WhatsPlaceholder}
                                />
                                {errors.whatsapp && <p className="text-red-400 text-xs mb-3">{errors.whatsapp}</p>}
                                <label className="text-white/70 text-sm font-medium mb-2 block">{labels.s2CidadeLabel}</label>
                                <input
                                    type="text"
                                    list="cidades-list-waitlist2"
                                    value={form.cidade}
                                    onChange={e => setField("cidade", e.target.value)}
                                    disabled={!form.estado || loadingCidades}
                                    className={`w-full bg-white/5 border ${errors.cidade ? "border-red-500" : "border-white/10 focus:border-primary"} rounded-xl px-5 py-3.5 text-white outline-none transition-colors mb-4 disabled:opacity-50`}
                                    placeholder={loadingCidades ? "Carregando..." : "Salvador"}
                                />
                                <datalist id="cidades-list-waitlist2">
                                    {cidades.map(c => <option key={c.id} value={c.nome} />)}
                                </datalist>
                                {errors.cidade && <p className="text-red-400 text-xs mb-3">{errors.cidade}</p>}
                                <label className="text-white/70 text-sm font-medium mb-2 block">{labels.s2EstadoLabel}</label>
                                <select
                                    value={form.estado}
                                    onChange={e => setField("estado", e.target.value)}
                                    className={`w-full bg-[#111] text-white border ${errors.estado ? "border-red-500" : "border-white/10 focus:border-primary"} rounded-xl px-5 py-3.5 outline-none transition-colors appearance-none`}
                                >
                                    <option value="" className="bg-[#111] text-white">{labels.s2EstadoPlaceholder}</option>
                                    {ESTADOS_BR.map(uf => <option key={uf} value={uf} className="bg-[#111] text-white">{uf}</option>)}
                                </select>
                                {errors.estado && <p className="text-red-400 text-xs mt-2">{errors.estado}</p>}
                            </div>
                        )}

                        {/* Step 2: Como conheceu + Motivação */}
                        {step === 2 && (
                            <div>
                                <h3 className="text-xl font-bold text-white mb-6">{labels.a3Title}</h3>
                                <label className="text-white/70 text-sm font-medium mb-3 block">{labels.a3ComoConheceuLabel}</label>
                                <div className="flex flex-wrap gap-3 mb-6">
                                    {COMO_CONHECEU_OPTIONS.map(opt => {
                                        const selected = form.comoConheceu.includes(opt.value);
                                        return (
                                            <button
                                                key={opt.value}
                                                onClick={() => toggleComoConheceu(opt.value)}
                                                className={`px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${selected
                                                    ? "bg-primary/20 border border-primary/50 text-primary"
                                                    : "bg-white/5 border border-white/10 text-white/60 hover:bg-white/10"
                                                    }`}
                                            >
                                                {lang === "pt" ? opt.labelPt : opt.labelEn}
                                            </button>
                                        );
                                    })}
                                </div>
                                {errors.comoConheceu && <p className="text-red-400 text-xs mb-3">{errors.comoConheceu}</p>}
                                <label className="text-white/70 text-sm font-medium mb-2 block">{labels.a3MotivacaoLabel}</label>
                                <textarea
                                    value={form.motivacao}
                                    onChange={e => setField("motivacao", e.target.value)}
                                    rows={3}
                                    className="w-full bg-white/5 border border-white/10 focus:border-primary rounded-xl px-5 py-3.5 text-white outline-none transition-colors resize-none"
                                    placeholder={labels.a3MotivacaoPlaceholder}
                                />
                            </div>
                        )}
                    </div>
                )}

                {/* Navigation Buttons */}
                {!success && !duplicateError && step >= 0 && (
                    <div className="flex gap-3 mt-8">
                        <button
                            onClick={() => step === 0 ? (setStep(-1), setFlow("")) : setStep(s => s - 1)}
                            className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white/60 font-semibold hover:bg-white/10 transition-colors flex items-center gap-2"
                        >
                            <ChevronLeft className="w-4 h-4" />
                            {labels.back}
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={submitting}
                            className="flex-1 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 disabled:opacity-50 disabled:hover:scale-100"
                        >
                            {submitting ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    {labels.sending}
                                </>
                            ) : step === totalSteps - 1 ? (
                                <>
                                    {labels.submit}
                                    <Check className="w-4 h-4" />
                                </>
                            ) : (
                                <>
                                    {labels.next}
                                    <ChevronRight className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
