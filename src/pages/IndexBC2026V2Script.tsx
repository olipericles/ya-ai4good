import ScriptViewer from "@/components/presentation/ScriptViewer";
import roteiroV2 from "@/assets/docs/roteiro-v2.md?url";

const IndexBC2026V2Script = () => {
    return (
        <ScriptViewer
            title="Script V2 — PresentationBC2026V2"
            markdownUrl={roteiroV2}
        />
    );
};

export default IndexBC2026V2Script;
