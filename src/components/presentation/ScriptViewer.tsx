import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ScriptViewerProps {
    markdownUrl: string;
    title: string;
}

const ScriptViewer = ({ markdownUrl, title }: ScriptViewerProps) => {
    const [content, setContent] = useState<string>("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = title;

        // Fetch the local markdown file from the assets or public folder
        fetch(markdownUrl)
            .then(res => res.text())
            .then(text => {
                setContent(text);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to load script markdown:", err);
                setContent("# Error loading script\nPlease check the console for details.");
                setLoading(false);
            });
    }, [markdownUrl, title]);

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col items-center">
            {/* Minimal Header */}
            <div className="w-full bg-card/50 border-b border-border sticky top-0 z-10 backdrop-blur-md">
                <div className="max-w-3xl mx-auto px-6 h-14 flex items-center">
                    <h1 className="text-sm font-semibold text-primary uppercase tracking-widest">{title}</h1>
                </div>
            </div>

            {/* Content Area */}
            <main className="w-full max-w-3xl mx-auto px-6 py-12">
                {loading ? (
                    <div className="flex animate-pulse space-x-4">
                        <div className="flex-1 space-y-6 py-1">
                            <div className="h-4 bg-muted rounded w-3/4"></div>
                            <div className="h-4 bg-muted rounded"></div>
                            <div className="h-4 bg-muted rounded w-5/6"></div>
                            <div className="space-y-3 pt-6">
                                <div className="h-4 bg-muted rounded w-1/4"></div>
                                <div className="h-4 bg-muted rounded w-1/2"></div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <article className="prose prose-invert prose-primary max-w-none">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {content}
                        </ReactMarkdown>
                    </article>
                )}
            </main>
        </div>
    );
};

export default ScriptViewer;
