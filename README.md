# Typeface Studio

Design your own typeface in the browser: draw glyphs with a pen tool, set spacing and kerning, test the live font, and save an installable TrueType (`.ttf`) file.

## Prototype

`prototype/typeface-studio.html` is a single-file prototype that runs as a claude.ai artifact. It includes:

- **Glyph set**: a Sans starter skeleton (78 glyphs, 36 kerning pairs) or a blank font with empty slots for A–Z, a–z, 0–9 and basic punctuation.
- **Editor**: SVG Bézier editing with select, pen and hand tools, metric lines with snapping, a draggable advance width, side bearings, contour direction tools, undo/redo and a live context strip.
- **Spacing & kerning**: a pair list with suggestions, a drag-to-kern preview and a side-bearing table.
- **Type tester**: renders the compiled font through `FontFace`, with a size waterfall.
- **Export**: TrueType with `glyf`/`loca` outlines (cubic curves converted to quadratics), GPOS `kern` (PairPos format 1), plus a `.typeface.json` project file.

The font engine sits between the `/*@core-begin*/` and `/*@core-end*/` markers. It has no DOM dependencies, so the full app can port it into `src/core` without changes.
