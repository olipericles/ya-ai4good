import ScriptViewer from "@/components/presentation/ScriptViewer";
import roteiroV2 from "@/assets/docs/roteiro-v2.md?raw";

const IndexBC2026V2Script = () => {
    return (
        <ScriptViewer
            title="Script V2 — PresentationBC2026V2"
            markdownContent={roteiroV2}
        />
    );
};

export default IndexBC2026V2Script;
