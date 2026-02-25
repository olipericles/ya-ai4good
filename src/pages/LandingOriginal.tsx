import { useEffect, useRef } from "react";
import "./LandingOriginal.css";

const LandingOriginal = () => {
    const formMaesRef = useRef<HTMLFormElement>(null);
    const formParceirosRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        document.title = "Yá | Assistente Financeiro para Mães Solo | AI4Good 2026";
        const meta = document.querySelector('meta[name="description"]');
        if (meta) {
            meta.setAttribute("content", "Yá - Assistente financeiro via WhatsApp para mães solo brasileiras. Top 3 AI4Good 2026 — Harvard & MIT.");
        }
    }, []);

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>, endpoint: string) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
        const originalText = btn.innerHTML;

        try {
            btn.innerHTML = "Enviando...";
            btn.disabled = true;
            const response = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            if (response.ok) {
                alert(result.message || "Enviado com sucesso!");
                form.reset();
            } else {
                alert("Erro ao enviar: " + (result.detail || "Tente novamente."));
            }
        } catch {
            alert("Erro de conexão. Tente novamente mais tarde.");
        } finally {
            btn.innerHTML = originalText;
            btn.disabled = false;
        }
    };

    return (
        <div className="landing-original">
            {/* Google Fonts */}
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@300;400;500;600;700&display=swap"
                rel="stylesheet"
            />

            {/* Header */}
            <header className="lo-header">
                <div className="lo-container">
                    <nav>
                        <ul>
                            <li><a href="#problema">O Problema</a></li>
                            <li><a href="#solucao">A Solução</a></li>
                            <li><a href="#impacto">Impacto</a></li>
                            <li><a href="#equipe">Equipe</a></li>
                        </ul>
                    </nav>
                    <a href="#participe" className="lo-btn-cta">Participar do Piloto</a>
                </div>
            </header>

            {/* Hero */}
            <section className="lo-hero">
                <div className="lo-container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div className="lo-hero-badge">🏆 Top 3 AI4Good 2026 — Harvard & MIT</div>

                    <img src="/img/ya-logo.png" alt="Yá" style={{ height: 120, marginBottom: "2rem" }} />

                    <h1>
                        Consciência financeira na palma da mão
                        <br />para quem mais precisa.
                    </h1>

                    <p className="lo-hero-subtitle" style={{ textAlign: "center", marginBottom: "0.5rem", color: "white" }}>
                        <strong style={{ fontSize: "2rem" }}>11 milhões</strong> de lares chefiados por mães solo no Brasil.
                        <br /><small style={{ opacity: 0.9 }}>Mais do que a população inteira de Portugal.</small>
                    </p>
                    <p style={{ textAlign: "center", margin: "0.5rem 0 1.5rem", color: "white" }}>
                        <small style={{ opacity: 0.7 }}>
                            Fonte: FGV/IBRE — PNAD Contínua 2022 ·{" "}
                            <a href="https://blogdoibre.fgv.br/posts/maes-solo-no-mercado-de-trabalho" target="_blank" rel="noreferrer" style={{ color: "#90cdf4", textDecoration: "underline" }}>
                                Ver artigo completo →
                            </a>
                        </small>
                    </p>

                    <p style={{ margin: "2rem 0", color: "rgba(255, 255, 255, 0.8)", fontStyle: "italic" }}>
                        "Yá significa 'mãe' em Yorubá. Um nome que carrega ancestralidade e acolhimento."
                    </p>

                    <div className="lo-hero-cta-group">
                        <a href="#participe" className="lo-btn-cta">Quero Participar do Piloto</a>
                        <a href="#solucao" className="lo-btn-secondary">Conhecer o Projeto ↓</a>
                    </div>
                </div>
            </section>

            {/* O Problema */}
            <section id="problema" className="lo-section">
                <div className="lo-container">
                    <div className="lo-section-header">
                        <span className="lo-section-label">O Problema</span>
                        <h2 className="lo-section-title">O Peso Invisível</h2>
                    </div>

                    <div className="lo-quote-box">
                        <blockquote>
                            "Eu já vi minha prima chorar no fim do mês sem entender como o dinheiro acabou.
                            <br /><strong>Não é falta de esforço. É falta de ferramenta."</strong>
                        </blockquote>
                    </div>

                    <div className="lo-problem-stats">
                        <div className="lo-stat-card">
                            <div className="lo-stat-value">64%</div>
                            <div className="lo-stat-label">vivem em situação de pobreza</div>
                        </div>
                        <div className="lo-stat-card">
                            <div className="lo-stat-value">39%</div>
                            <div className="lo-stat-label">menos renda que homens casados com filhos</div>
                        </div>
                        <div className="lo-stat-card">
                            <div className="lo-stat-value">72%</div>
                            <div className="lo-stat-label">enfrentam essa jornada sozinhas</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* A Solução */}
            <section id="solucao" className="lo-section lo-section-alt">
                <div className="lo-container">
                    <div className="lo-section-header">
                        <span className="lo-section-label">A Solução</span>
                        <h2 className="lo-section-title">Como funciona no WhatsApp</h2>
                        <p className="lo-section-subtitle">
                            Onde <strong>98%</strong> acessam a internet e <strong>91%</strong> estão presentes todos os dias.
                        </p>
                    </div>

                    <div className="lo-solution-flex">
                        <div className="lo-solution-mockup">
                            <img src="/img/ya-whatsapp-mockup.jpg" alt="Conversa com assistente Yá no WhatsApp" />
                        </div>

                        <div className="lo-solution-features">
                            <div className="lo-solution-feature">
                                <div className="icon">📸</div>
                                <h3>Cupom Fiscal</h3>
                                <p>Tirou foto do cupom fiscal, a Yá lê com OCR e registra os gastos automaticamente. <strong>2 segundos.</strong></p>
                            </div>
                            <div className="lo-solution-feature">
                                <div className="icon">🎙️</div>
                                <h3>Áudio Natural</h3>
                                <p>Manda um áudio perguntando sobre a semana, recebe insights personalizados. <strong>Sem precisar digitar.</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Diferenciais */}
            <section id="diferenciais" className="lo-section">
                <div className="lo-container">
                    <div className="lo-section-header">
                        <span className="lo-section-label">Diferenciais</span>
                        <h2 className="lo-section-title">Por que a Yá é diferente?</h2>
                    </div>

                    <table className="lo-comparison-table">
                        <thead>
                            <tr>
                                <th style={{ width: "25%", textAlign: "left" }}>Critério</th>
                                <th style={{ width: "37.5%" }}>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
                                        <img src="/img/logo-poupa.png" alt="Poupa.ai" style={{ height: 24 }} />
                                        /
                                        <img src="/img/logo-granazen.png" alt="GranaZen" style={{ height: 24 }} />
                                    </div>
                                </th>
                                <th style={{ width: "37.5%", background: "#c2410c", color: "white", borderTop: "4px solid #9a3412" }}>
                                    <img src="/img/ya-logo.png" alt="Yá" style={{ height: 32 }} />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { label: "Output", other: "Responde só em texto", ya: "🎙️ Responde em áudio" },
                                { label: "Tom", other: "Genérico", ya: "💬 Linguagem acessível" },
                                { label: "Foco", other: "Classe média", ya: "👩‍👧 Mães solo" },
                                { label: "Impacto", other: "Individual", ya: "📊 Dados para políticas públicas" },
                                { label: "Comunidade", other: "Não possui", ya: "🤝 Rede de apoio entre usuárias" },
                            ].map((row) => (
                                <tr key={row.label}>
                                    <td style={{ textAlign: "left", fontWeight: 600 }}>{row.label}</td>
                                    <td>{row.other}</td>
                                    <td style={{ background: "rgba(194, 65, 12, 0.1)", color: "#9a3412", fontWeight: 700 }}>{row.ya}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Impacto */}
            <section id="impacto" className="lo-section lo-section-alt">
                <div className="lo-container">
                    <div className="lo-section-header">
                        <span className="lo-section-label">Impacto</span>
                        <h2 className="lo-section-title">Impacto que vai além do individual</h2>
                    </div>

                    <div className="lo-impact-highlight">
                        <div className="lo-big-number">30M+</div>
                        <div className="lo-big-label">de vidas impactadas</div>
                        <p style={{ marginTop: "1rem", color: "white" }}>
                            Pesquisa realizada com 23 mães solo de Salvador. 18 mães já pediram para participar do piloto.
                        </p>
                    </div>
                </div>
            </section>

            {/* Jornada AI4Good */}
            <section id="jornada" className="lo-section">
                <div className="lo-container">
                    <div className="lo-section-header">
                        <span className="lo-section-label">Nossa Trajetória</span>
                        <h2 className="lo-section-title">Jornada no AI4Good</h2>
                    </div>

                    <div className="lo-journey-badge-card">
                        <div className="lo-journey-badge-img">
                            <img src="/img/ya-qrcode.png" alt="QR Code Demo" style={{ width: 140, height: 140, marginBottom: "0.5rem" }} />
                            <span style={{ fontSize: "0.8rem", color: "#666", fontWeight: 700 }}>DEMO AO VIVO</span>
                        </div>
                        <div className="lo-journey-badge-content">
                            <h3>AI4Good 2026 — Top 3</h3>
                            <p>Top 3 entre 167 projetos de todo o Brasil. Em processo de seleção para a Brazil Conference.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Equipe */}
            <section id="equipe" className="lo-section lo-section-alt">
                <div className="lo-container">
                    <div className="lo-section-header">
                        <span className="lo-section-label">Equipe</span>
                        <h2 className="lo-section-title">Quem está por trás</h2>
                    </div>

                    <div className="lo-team-grid">
                        {[
                            { name: "Péricles Oliveira", role: "Estrategista de IA e Negócios", img: "/img/equipe-pericles-real.png", linkedin: "https://www.linkedin.com/in/olipericles/" },
                            { name: "Adriele Ornellas", role: "Especialista em Pessoas e Comunidades", img: "/img/equipe-adriele-real.png", linkedin: "https://www.linkedin.com/in/adrieleornellas/" },
                            { name: "Luã Mota", role: "Arquiteto de Software", img: "/img/equipe-lua-real.png", linkedin: "https://www.linkedin.com/in/lua-mota/" },
                        ].map((member) => (
                            <div className="lo-team-card" key={member.name}>
                                <div><img src={member.img} alt={member.name} /></div>
                                <div className="lo-team-info">
                                    <h3>{member.name}</h3>
                                    <p>{member.role}</p>
                                    <div className="lo-team-social">
                                        <a href={member.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Participe */}
            <section id="participe" className="lo-section">
                <div className="lo-container">
                    <div className="lo-section-header">
                        <span className="lo-section-label">Participe</span>
                        <h2 className="lo-section-title">Faça parte dessa transformação</h2>
                        <p className="lo-section-subtitle">Duas formas de participar:</p>
                    </div>

                    <div className="lo-participate-grid">
                        <div className="lo-participate-card">
                            <h3>🤱 Para Mães Solo</h3>
                            <p>Quer testar o assistente? Estamos selecionando participantes para o piloto. É gratuito, simples e seus dados ficam seguros.</p>
                            <form ref={formMaesRef} onSubmit={(e) => handleFormSubmit(e, "/api/forms/submit/maes")}>
                                <div className="lo-form-group">
                                    <label htmlFor="mae-nome">Nome</label>
                                    <input type="text" id="mae-nome" name="nome" placeholder="Seu nome" required />
                                </div>
                                <div className="lo-form-group">
                                    <label htmlFor="mae-whatsapp">WhatsApp</label>
                                    <input type="tel" id="mae-whatsapp" name="whatsapp" placeholder="(00) 00000-0000" required />
                                </div>
                                <div className="lo-form-group">
                                    <label htmlFor="mae-filhos">Quantos filhos você tem?</label>
                                    <select id="mae-filhos" name="filhos" required>
                                        <option value="">Selecione</option>
                                        <option value="1">1 filho(a)</option>
                                        <option value="2">2 filhos(as)</option>
                                        <option value="3+">3 ou mais</option>
                                    </select>
                                </div>
                                <button type="submit" className="lo-btn-cta" style={{ width: "100%" }}>Quero Participar</button>
                            </form>
                        </div>

                        <div className="lo-participate-card">
                            <h3>🤝 Para Parceiros</h3>
                            <p>ONGs, Empresas ou Voluntários que querem ajudar a levar a educação financeira para mais mulheres.</p>
                            <form ref={formParceirosRef} onSubmit={(e) => handleFormSubmit(e, "/api/forms/submit/parceiros")}>
                                <div className="lo-form-group">
                                    <label htmlFor="parceiro-nome">Nome / Organização</label>
                                    <input type="text" id="parceiro-nome" name="nome" placeholder="Nome" required />
                                </div>
                                <div className="lo-form-group">
                                    <label htmlFor="parceiro-email">Email</label>
                                    <input type="email" id="parceiro-email" name="email" placeholder="email@exemplo.com" required />
                                </div>
                                <div className="lo-form-group">
                                    <label htmlFor="parceiro-tipo">Como pode ajudar?</label>
                                    <select id="parceiro-tipo" name="tipo" required>
                                        <option value="">Selecione</option>
                                        <option value="mentoria">Mentoria</option>
                                        <option value="investimento">Investimento / Doação</option>
                                        <option value="divulgacao">Divulgação</option>
                                        <option value="outros">Outros</option>
                                    </select>
                                </div>
                                <button type="submit" className="lo-btn-cta" style={{ width: "100%", background: "var(--color-primary)", color: "white" }}>
                                    Entrar em Contato
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="lo-footer">
                <div className="lo-container">
                    <div className="lo-footer-grid">
                        <div>
                            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                                <img src="/img/ya-logo.png" alt="Yá" style={{ height: 48, filter: "brightness(0) invert(1)" }} />
                                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "white" }}>Yá</span>
                            </div>
                            <p>Projeto AI4Good 2026 — Assistente financeiro para mães solo brasileiras. Top 3 entre 167 projetos, em processo de seleção para a Brazil Conference.</p>
                        </div>

                        <div>
                            <h4>Navegação</h4>
                            <ul>
                                <li><a href="#">Início</a></li>
                                <li><a href="#problema">O Problema</a></li>
                                <li><a href="#solucao">A Solução</a></li>
                                <li><a href="#equipe">Equipe</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4>Contato</h4>
                            <p>Salvador, Bahia</p>
                            <p>ya.ai4good@gmail.com</p>
                        </div>
                    </div>
                    <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "2rem", textAlign: "center" }}>
                        <p>© 2026 Yá — AI4Good. Todos os direitos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingOriginal;
