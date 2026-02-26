import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
                            h1: ({ node, ...props }) => <h1 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4" {...props} />,
                            h2: ({ node, ...props }) => <h2 className="text-2xl font-bold text-white mt-12 mb-6" {...props} />,
                            h3: ({ node, ...props }) => (
                                <h3 className="text-xl md:text-2xl font-bold text-white mt-16 mb-6 flex items-center uppercase tracking-wide border-b border-white/5 pb-4" {...props} />
                            ),
                            p: ({ node, ...props }) => {
                                // Simple styling for paragraphs. Usually scripts are in quotes.
                                return <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-6" {...props} />
                            },
                            strong: ({ node, ...props }) => {
                                const text = props.children?.toString() || '';
                                if (text.includes("Tempo:") || text.includes("Quem fala:") || text.includes("Notas:")) {
                                    return <strong className="text-primary font-bold uppercase text-xs tracking-wider mr-2" {...props} />
                                }
                                return <strong className="text-white font-bold bg-white/5 px-1 rounded" {...props} />
                            },
                            hr: ({ node, ...props }) => <hr className="my-12 border-white/10" {...props} />,
                            em: ({ node, ...props }) => <em className="text-white/60 italic" {...props} />,
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
