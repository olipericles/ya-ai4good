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
    // Split by slide headers: ## SLIDE N or ### SLIDE N
    const slideBlocks = raw.split(/^##{1,2} /m).filter(Boolean);

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
            let notesParts: string[] = [];
            let scriptStartIndex = 1;

            for (let i = 1; i < lines.length; i++) {
                const line = lines[i].trim();

                // Handle single-line combined like "**Tempo:** ~45s | **Quem fala:** Adriele"
                if (line.includes("**Tempo:**") || line.includes("**Quem fala:**")) {
                    scriptStartIndex = i + 1;
                    const parts = line.split("|");
                    for (const part of parts) {
                        const p = part.trim();
                        if (p.startsWith("**Tempo:**")) {
                            time = p.replace("**Tempo:**", "").trim();
                        } else if (p.startsWith("**Quem fala:**")) {
                            speaker = p.replace("**Quem fala:**", "").trim();
                        }
                    }
                } else if (line.startsWith("**Notas:**") || line.startsWith("**Notas de palco:**")) {
                    notesParts.push(line.replace(/\*\*Notas( de palco)?:\*\*/, "").trim());
                    scriptStartIndex = i + 1;
                } else if (line.startsWith("**Energia:**") || line.startsWith("**Objetivo emocional:**") || line.startsWith("**Visual:**")) {
                    notesParts.push(line);
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

            const notes = notesParts.join(" | ");

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
