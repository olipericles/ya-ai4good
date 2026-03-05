import ScriptViewer from "@/components/presentation/ScriptViewer";
import roteiroV4 from "@/assets/docs/roteiro-v4.md?raw";

const IndexBC2026V4Script = () => {
    // V4 represents the latest pitch script structure
    return (
        <ScriptViewer
            title="Script V4"
            markdownContent={roteiroV4}
        />
    );
};

export default IndexBC2026V4Script;
