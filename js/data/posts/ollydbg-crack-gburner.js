/**
 * Post: OllyDbg - Crack gBurner (Reverse Engineering)
 */
window.posts = window.posts || [];
window.posts.push({
  id: "ollydbg-crack-gburner",
  title: "OllyDbg - Crack Gburner",
  slug: "ollydbg-crack-gburner",
  year: 2020,
  date: "2020-11-08",
  day: "08",
  month: "Nov",
  category: "Reverse Engineering",
  readTime: "3 min",
  tags: ["OllyDbg", "Assembly", "Reverse Engineering", "x86"],
  summary: "Reverse engineering and dynamic analysis of gBurner software using OllyDbg on Windows 7 32-bit (Undergraduate Assignment).",
  toc: [
    { id: "intro", title: "1. Overview & Concept" },
    { id: "preview", title: "2. Preview" },
  ],
  content: `
    <h2 id="intro">1. Overview &amp; Concept</h2>
    <hr />
    <p>
      An undergraduate assignment demonstrating binary reverse engineering and dynamic analysis on <strong>gBurner</strong> using <strong>OllyDbg</strong> (an x86 32-bit assembler level analyzing debugger).
    </p>
    <p>
      Running in a Windows 7 32-bit environments, the objective was to inspect the software's execution flow, locate registration validation routines, analyze assembly instructions (such as conditional jumps and comparisons), and patch the binary to bypass licensing limitations and achieve full application access.
    </p>

    <h2 id="preview">2. Preview</h2>
    <hr />
    <p>Watch the demonstration video on YouTube: <a href="https://www.youtube.com/watch?v=FW_SlfyPon0" target="_blank" rel="noopener" class="post-link text-accent fw-medium">OllyDbg - Crack Gburner <i class="fas fa-external-link-alt fa-xs ms-1"></i></a></p>
    <div class="ratio ratio-16x9 my-3">
      <iframe src="https://www.youtube.com/embed/FW_SlfyPon0" title="OllyDbg - Crack Gburner" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </div>
  `
});
