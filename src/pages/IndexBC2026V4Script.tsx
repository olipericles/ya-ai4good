import ScriptViewer from "@/components/presentation/ScriptViewer";
import roteiroV2 from "@/assets/docs/roteiro-v2.md?raw";

const IndexBC2026V4Script = () => {
    // V4 is essentially identical in logical progression to V2 script logic
    return (
        <ScriptViewer
            title="Script V4"
            markdownContent={roteiroV2}
        />
    );
};

export default IndexBC2026V4Script;
