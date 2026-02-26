import ScriptViewer from "@/components/presentation/ScriptViewer";
import roteiroV1 from "@/assets/docs/roteiro-v1.md?url";

const IndexBC2026Script = () => {
    return (
        <ScriptViewer
            title="Script V1 — PresentationBC2026"
            markdownUrl={roteiroV1}
        />
    );
};

export default IndexBC2026Script;
