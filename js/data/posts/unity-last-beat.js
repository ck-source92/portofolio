/**
 * Post: Last Beat - 2D Platformer Music Game
 */
window.posts = window.posts || [];
window.posts.push({
  id: "unity-last-beat",
  title: "Last Beat - 2D Platformer Music Game",
  slug: "unity-last-beat",
  year: 2023,
  date: "2023-08-25",
  day: "25",
  month: "Aug",
  category: "Game Development",
  readTime: "8 min",
  tags: ["Unity", "C#", "Fuzzy Logic", "2D Platformer", "Rhythm Game"],
  summary: "Pengatur lagu otomatis menggunakan logika fuzzy pada game musik berbasis 2D platformer (Automatic song arranger using fuzzy logic in a 2D platformer music game).",
  toc: [
    { id: "overview", title: "1. Overview & Concept" },
    { id: "gameplay", title: "2. Overview Gameplay" },
    { id: "preview", title: "3. Preview & Screenshots" },
    { id: "fuzzy-logic", title: "4. Fuzzy Logic Arranger" },
    { id: "repository", title: "5. Thesis & Publication" }
  ],
  content: `
    <h2 id="overview">1. Overview &amp; Concept</h2>
    <hr />
    <p><strong>Theses &amp; Dissertations:</strong></p>
    <blockquote class="post-quote p-3 my-3 border-start border-3 rounded-end">
      <p class="mb-0">
        Kirana, D. C. (2026). Pengatur lagu otomatis menggunakan logika fuzzy pada game musik berbasis 2D platformer (Automatic song arranger using fuzzy logic in a 2D platformer music game) [Undergraduate Thesis]. Dian Nuswantoro University.
      </p>
    </blockquote>
    <p>
      <strong>Last Beat</strong> is an interactive 2D platformer rhythm game developed in Unity featuring an automated song arranging system powered by <strong>fuzzy logic</strong>. The system dynamically adapts musical composition, tempo, and obstacle sequences in real time based on player performance and rhythm synchronization.
    </p>

    <div class="doc-download-box my-3 p-3 border d-flex align-items-center justify-content-between flex-wrap gap-3">
      <div class="d-flex align-items-center gap-3">
        <i class="fas fa-lightbulb fa-2x text-warning"></i>
        <div>
          <div class="doc-download-title fw-semibold">Idea of the Game</div>
          <div class="doc-download-subtitle small text-muted">Game Concept &amp; Pitch Presentation (Google Slides)</div>
        </div>
      </div>
      <a href="https://docs.google.com/presentation/d/1w8GIYqKPuQKhif2MuZz8L3HYqaBTJ_5JIhOYJU7FrD0/edit?usp=sharing" target="_blank" rel="noopener" class="btn btn-sm doc-download-btn d-inline-flex align-items-center gap-2">
        <i class="fas fa-external-link-alt"></i>
        <span>View Presentation</span>
      </a>
    </div>

    <h2 id="gameplay">2. Overview Gameplay</h2>
    <hr />
    <p>Watch the gameplay overview on YouTube: <a href="https://www.youtube.com/watch?v=PEGX2PaaYdY" target="_blank" rel="noopener" class="post-link text-accent fw-medium">Last Beat <i class="fas fa-external-link-alt fa-xs ms-1"></i></a></p>
    <div class="ratio ratio-16x9 my-3">
      <iframe src="https://www.youtube.com/embed/PEGX2PaaYdY" title="Last Beat" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </div>

    <h2 id="preview">3. Preview &amp; Screenshots</h2>
    <hr />
    <p>Visual preview and gameplay captures from Last Beat:</p>
    <figure class="my-3">
      <img src="assets/images/unity-last-beat/last-beat-banner.png" alt="Last Beat! Title and Banner" class="img-fluid" />
      <figcaption>Figure 1: Last Beat! - Title Artwork & Neon Visual Aesthetics</figcaption>
    </figure>

    <div class="row g-3 my-3">
      <div class="col-md-6">
        <figure>
          <img src="assets/images/unity-last-beat/last-beat-frame2.png" alt="Sync character with music beats" class="img-fluid" />
          <figcaption>Figure 2: Sync Character with Music Beats - Rhythm-Synchronized Platforming</figcaption>
        </figure>
      </div>
      <div class="col-md-6">
        <figure>
          <img src="assets/images/unity-last-beat/last-beat-frame1.jpg" alt="Flight gameplay with beat-based obstacles" class="img-fluid" />
          <figcaption>Figure 3: High-Speed Flight Phase & Beat-Driven Obstacle Traversal</figcaption>
        </figure>
      </div>
    </div>

    <h2 id="fuzzy-logic">4. Fuzzy Logic Arranger</h2>
    <hr />
    <p>
      Unlike conventional rhythm games where audio tracks follow static, predefined beatmaps, <strong>Last Beat</strong> incorporates a Mamdani fuzzy inference system to adjust music layers and game difficulty dynamically:
    </p>
    <ul>
      <li><strong>Fuzzification:</strong> Evaluates continuous input parameters including player hit timing accuracy, combo streaks, and error frequency.</li>
      <li><strong>Fuzzy Inference:</strong> Maps membership functions against rule bases to deduce player skill state and desired emotional tension.</li>
      <li><strong>Defuzzification:</strong> Outputs crisp values that modulate background instrumental layering, tempo transitions, and procedural obstacle distribution.</li>
    </ul>

    <h2 id="repository">5. Thesis &amp; Publication</h2>
    <hr />
    <p>
      Access the official undergraduate thesis publication on the Dian Nuswantoro University (UDINUS) repository:
    </p>
    <p>
      <a href="https://repo.dinus.ac.id/items/7c673fea-3a15-426b-ad65-38a2be031ef3" target="_blank" rel="noopener" class="post-link text-accent fw-medium">
        PENGATUR LAGU OTOMATIS MENGGUNAKAN LOGIKA FUZZY PADA GAME MUSIK BERBASIS 2D PLATFORMER
        <i class="fas fa-external-link-alt fa-xs ms-1"></i>
      </a>
    </p>
    <div class="doc-download-box my-3 p-3 border d-flex align-items-center justify-content-between flex-wrap gap-3">
      <div class="d-flex align-items-center gap-3">
        <i class="fas fa-graduation-cap fa-2x text-primary"></i>
        <div>
          <div class="doc-download-title fw-semibold">PENGATUR LAGU OTOMATIS MENGGUNAKAN LOGIKA FUZZY PADA GAME MUSIK BERBASIS 2D PLATFORMER</div>
          <div class="doc-download-subtitle small text-muted">Dian Nuswantoro University Institutional Repository (repo.dinus.ac.id)</div>
        </div>
      </div>
      <a href="https://repo.dinus.ac.id/items/7c673fea-3a15-426b-ad65-38a2be031ef3" target="_blank" rel="noopener" class="btn btn-sm doc-download-btn d-inline-flex align-items-center gap-2">
        <i class="fas fa-external-link-alt"></i>
        <span>Open Repository</span>
      </a>
    </div>
  `
});
