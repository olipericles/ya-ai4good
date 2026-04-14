import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Clock, User, Volume2 } from "lucide-react";

interface ScriptViewerProps {
    markdownContent: string;
    title: string;
}

const ScriptViewer = ({ markdownContent, title }: ScriptViewerProps) => {
    return (
        <div className="min-h-screen bg-[#111111] text-foreground flex flex-col items-center">
            {/* Minimal Header */}
            <div className="w-full bg-[#111111]/90 border-b border-white/10 sticky top-0 z-10 backdrop-blur-md">
                <div className="max-w-3xl mx-auto px-6 h-14 flex items-center">
                    <h1 className="text-xs font-semibold text-primary uppercase tracking-widest">{title}</h1>
                </div>
            </div>

            {/* Content Area */}
            <main className="w-full max-w-3xl mx-auto px-6 py-12 pb-32">
                <article className="max-w-none">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            h1: () => null, // Hide H1, already in header
                            h2: () => null, // Hide H2, usually just subtitle
                            h3: ({ node, ...props }) => {
                                const text = props.children?.toString() || '';
                                return (
                                    <div className="flex items-center justify-between mb-2 mt-12 first:mt-0">
                                        <h2 className="text-xl font-bold text-foreground">{text.replace("### ", "")}</h2>
                                    </div>
                                );
                            },
                            p: ({ node, ...props }) => {
                                const extractText = (n: any): string => {
                                    if (!n) return "";
                                    if (n.type === 'text') return n.value;
                                    if (n.children) return n.children.map(extractText).join('');
                                    return "";
                                };
                                const content = extractText(node).trim();

                                if (content.startsWith("Tempo:") || content.startsWith("**Tempo:**")) {
                                    const time = content.replace("**Tempo:**", "").replace("Tempo:", "").trim();
                                    return (
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 -mt-10 justify-end relative z-10">
                                            <Clock className="w-4 h-4" />
                                            <span>{time}</span>
                                        </div>
                                    );
                                }

                                if (content.includes("Quem fala:") || content.includes("**Quem fala:")) {
                                    const match = content.match(/\*\*Quem fala:\*\*\s*(.*)/) || content.match(/Quem fala:\s*(.*)/);
                                    const speaker = match ? match[1] : content;
                                    return (
                                        <div className="flex items-center gap-2 mb-3 p-2 rounded-lg bg-muted/30 w-full max-w-sm">
                                            <User className="w-4 h-4 text-primary" />
                                            <span className="text-sm font-medium text-primary">{speaker.replace("|", "").trim()}</span>
                                        </div>
                                    );
                                }

                                if (content.startsWith("Notas:") || content.startsWith("**Notas:**") || content.startsWith("⚠️") || content.includes("**Energia:**")) {
                                    return (
                                        <div className="flex items-start gap-2 p-3 rounded-lg bg-primary/10 border border-primary/30 mb-8">
                                            <Volume2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                            <p className="text-sm text-primary font-medium" dangerouslySetInnerHTML={{ __html: content }} />
                                        </div>
                                    );
                                }

                                if (content === "CLIQUE" || content === "(CLIQUE)" || content === "**CLIQUE**" || content === "////// CLIQUE") {
                                    return (
                                        <div className="bg-muted/50 border border-white/20 text-muted-foreground py-1 px-4 rounded my-2 font-mono text-xs font-bold uppercase w-fit ml-auto">
                                            <span className="tracking-[0.5em] ml-[0.5em]">CLIQUE</span>
                                        </div>
                                    );
                                }

                                if (content.startsWith("*[") || content.startsWith("*(") || content.startsWith("[") || content.startsWith("(")) {
                                    return (
                                        <p className="block bg-muted/10 border-l-[3px] border-primary/40 px-4 py-3 my-4 text-sm text-foreground/50 italic rounded-r-md">
                                            {props.children}
                                        </p>
                                    );
                                }

                                return (
                                    <div className="space-y-1">
                                        <p className="text-foreground leading-relaxed text-lg pt-0 mb-0" {...props} />
                                    </div>
                                );
                            },
                            em: ({ node, ...props }) => {
                                return <em className="text-foreground/80 italic font-light" {...props} />;
                            },
                            strong: ({ node, ...props }) => {
                                const t = props.children?.toString() || '';
                                if (t.endsWith(":") || t === "TODOS JUNTOS:") {
                                    return <strong className="font-bold text-primary mr-2 uppercase tracking-wide text-xs bg-primary/10 px-2 py-1 rounded" {...props} />;
                                }
                                return <strong className="font-bold text-foreground" {...props} />;
                            },
                            hr: () => <hr className="my-12 border-border" />,
                        }}
                    >
                        {markdownContent}
                    </ReactMarkdown>
                </article>
            </main>
        </div >
    );
};

export default ScriptViewer;
