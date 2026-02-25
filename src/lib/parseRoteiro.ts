/**
 * Parses a roteiro .md file into structured slide script data.
 *
 * Expected format per slide:
 *
 * ### SLIDE N: Title
 * **Tempo:** ~45s
 * **Quem fala:** Adriele        ← optional, defaults to "—"
 * **Notas:** Tom pessoal...     ← optional
 *
 * Script content goes here...
 */

export interface SlideScript {
    title: string;
    time: string;
    speaker: string;
    notes: string;
    script: string;
}

export function parseRoteiro(raw: string): SlideScript[] {
    // Split by slide headers: ### SLIDE N — Title  or  ### SLIDE N: Title
    const slideBlocks = raw.split(/^### /m).filter(Boolean);

    return slideBlocks
        .filter(block => block.trim().startsWith("SLIDE"))
        .map(block => {
            const lines = block.trim().split("\n");

            // First line is the title: "SLIDE 0: Tela de Espera" or "SLIDE 0 — Tela de Espera"
            const titleLine = lines[0].replace(/^SLIDE\s*\d+\s*[:\-—]+\s*/, "").trim();
            const slideNumMatch = lines[0].match(/^SLIDE\s*(\d+)/);
            const slideNum = slideNumMatch ? slideNumMatch[1] : "?";
            const title = `SLIDE ${slideNum} — ${titleLine}`;

            // Parse metadata fields
            let time = "—";
            let speaker = "—";
            let notes = "";
            let scriptStartIndex = 1;

            for (let i = 1; i < lines.length; i++) {
                const line = lines[i].trim();

                if (line.startsWith("**Tempo:**")) {
                    time = line.replace("**Tempo:**", "").trim();
                    scriptStartIndex = i + 1;
                } else if (line.startsWith("**Quem fala:**")) {
                    speaker = line.replace("**Quem fala:**", "").trim();
                    scriptStartIndex = i + 1;
                } else if (line.startsWith("**Notas:**")) {
                    notes = line.replace("**Notas:**", "").trim();
                    scriptStartIndex = i + 1;
                } else if (line === "" && scriptStartIndex === i) {
                    // Skip blank lines between metadata and script
                    scriptStartIndex = i + 1;
                } else if (line !== "" && !line.startsWith("**")) {
                    // First non-metadata, non-blank line — script starts here
                    scriptStartIndex = i;
                    break;
                }
            }

            // Everything from scriptStartIndex onward is the script
            const script = lines
                .slice(scriptStartIndex)
                .join("\n")
                .trim()
                // Clean up markdown quote markers used for narration
                .replace(/^> /gm, "")
                .replace(/^---$/gm, "")
                .trim();

            return { title, time, speaker, notes, script };
        });
}
