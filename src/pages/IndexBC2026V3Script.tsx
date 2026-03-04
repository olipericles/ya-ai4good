import ScriptViewer from "@/components/presentation/ScriptViewer";
import roteiroV2 from "@/assets/docs/roteiro-v2.md?raw";

const IndexBC2026V3Script = () => {
    // V3 doesn't have an explicitly rewritten roteiro, so we use V2 as baseline
    return (
        <ScriptViewer
            title="Script V3"
            markdownContent={roteiroV2}
        />
    );
};

export default IndexBC2026V3Script;
