// Turns the gallery's built index.html into an artifact page with the type lab in it.
// Usage: node inject.mjs <dist/index.html> <out.html>
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const [src, out] = process.argv.slice(2);
const html = readFileSync(src, "utf8");
const head = html.slice(html.indexOf("<head>") + 6, html.indexOf("</head>"));
const body = html.slice(html.indexOf("<body>") + 6, html.indexOf("</body>"));

// The artifact skeleton supplies charset and viewport; the page gets its own title.
const galleryHead = head
  .replace(/<meta charset[^>]*>\s*/i, "")
  .replace(/<meta name="viewport"[^>]*>\s*/i, "")
  .replace(/<title>[\s\S]*?<\/title>\s*/i, "")
  .replace(/<meta name="description"[^>]*>\s*/i, "")
  .replace(/<link rel="icon"[^>]*>\s*/i, "");

const page = [
  "<title>litt.md Type Split Test</title>",
  '<meta name="description" content="The litt.md components gallery in six type versions: today, the research proposal, one size after emilkowal.ski, Quartz, and two after litt.design.">',
  galleryHead.trim(),
  readFileSync(join(here, "typelab-head.html"), "utf8").trim(),
  body.trim(),
  readFileSync(join(here, "typelab-body.html"), "utf8").trim(),
  "",
].join("\n");
writeFileSync(out, page);
console.log(`wrote ${out}`);
