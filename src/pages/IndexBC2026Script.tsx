import ScriptViewer from "@/components/presentation/ScriptViewer";
import roteiroV1 from "@/assets/docs/roteiro-v1.md?raw";

const IndexBC2026Script = () => {
    return (
        <ScriptViewer
            title="Script V1 — PresentationBC2026"
            markdownContent={roteiroV1}
        />
    );
};

export default IndexBC2026Script;
