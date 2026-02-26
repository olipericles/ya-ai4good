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
                                const paragraphs = props.children?.toString().split('\n') || [];

                                // Since react-markdown wraps everything in P, we need to carefully extract our metadata tags
                                const content = props.children?.toString() || '';

                                if (content.startsWith("Tempo:") || content.startsWith("**Tempo:**")) {
                                    const time = content.replace("**Tempo:**", "").replace("Tempo:", "").trim();
                                    return (
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 -mt-10 justify-end relative z-10">
                                            <Clock className="w-4 h-4" />
                                            <span>{time}</span>
                                        </div>
                                    );
                                }

                                if (content.startsWith("Quem fala:") || content.startsWith("**Quem fala:**")) {
                                    const speaker = content.replace("**Quem fala:**", "").replace("Quem fala:", "").trim();
                                    return (
                                        <div className="flex items-center gap-2 mb-3 p-2 rounded-lg bg-muted/30 w-full max-w-sm">
                                            <User className="w-4 h-4 text-primary" />
                                            <span className="text-sm font-medium text-primary">{speaker}</span>
                                        </div>
                                    );
                                }

                                if (content.startsWith("Notas:") || content.startsWith("**Notas:**")) {
                                    const notes = content.replace("**Notas:**", "").replace("Notas:", "").trim();
                                    return (
                                        <div className="flex items-start gap-2 p-3 rounded-lg bg-primary/10 border border-primary/30 mb-8">
                                            <Volume2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                            <p className="text-sm text-primary font-medium">{notes}</p>
                                        </div>
                                    );
                                }

                                // Check if this is the start of the actual script text (after the metadata)
                                const isScriptBlock = content.includes('"') || content.includes("'") || content.includes("[");

                                return (
                                    <div className="space-y-4">
                                        {/* We only want to show the 'ROTEIRO' label once per slide, but simple implementation is fine */}
                                        <p className="text-foreground leading-relaxed text-base pt-2" {...props} />
                                    </div>
                                );
                            },
                            em: ({ node, ...props }) => <em className="text-foreground/60 italic" {...props} />,
                            strong: ({ node, ...props }) => <strong className="font-bold text-foreground" {...props} />,
                            hr: () => <hr className="my-12 border-border" />,
                        }}
                    >
                        {markdownContent}
                    </ReactMarkdown>
                </article>
            </main>
        </div>
    );
};

export default ScriptViewer;
