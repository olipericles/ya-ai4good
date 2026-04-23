import ScriptViewer from "@/components/presentation/ScriptViewer";
import rawRoteiro from "@/assets/docs/roteiro.md?raw";

const IndexBC2026V4Script = () => {
    // V4 represents the latest pitch script structure
    return (
        <ScriptViewer
            title="Script V5"
            markdownContent={rawRoteiro}
        />
    );
};

export default IndexBC2026V4Script;
