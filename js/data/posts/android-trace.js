/**
 * Post: Trace - Location-Based Social & Gamified Mission App
 */
window.posts = window.posts || [];
window.posts.push({
  id: "android-trace",
  title: "Trace - Location-Based Social Mission App",
  slug: "android-trace",
  year: 2022,
  date: "2022-05-16",
  day: "16",
  month: "May",
  category: "Android Development",
  readTime: "4 min",
  tags: ["Android", "Kotlin", "Google Maps", "Social Media", "Gamification"],
  summary: "Trace is a location-based social and gamification Android application that connects users with nearby events, community posts, and exploratory missions.",
  toc: [
    { id: "overview", title: "1. Overview & Concept" },
    { id: "app-flow", title: "2. Application Flow & Architecture" },
    { id: "preview", title: "3. App Interface & Screenshots" },
    { id: "features", title: "4. Key Features" }
  ],
  content: `
    <h2 id="overview">1. Overview &amp; Concept</h2>
    <hr />
    <p>
      <strong>Trace</strong> was developed as a final capstone project at <strong>Bangkit Academy 2022</strong> as an Android Developer.
    </p>
    <p>
      It is an Android application combining location-based discovery, community social sharing, and gamified exploration missions. The platform allows users to explore nearby happenings and share experiences directly on an interactive map.
    </p>

    <p>
      Check out the project showcase on Canva: <a href="https://canva.link/a10oskbcjasdue3" target="_blank" rel="noopener" class="post-link text-accent fw-medium">Bangkit 2022 Capstone Project Showcase <i class="fas fa-external-link-alt fa-xs ms-1"></i></a>
    </p>

    <div class="doc-download-box my-3 p-3 border d-flex align-items-center justify-content-between flex-wrap gap-3">
      <div class="d-flex align-items-center gap-3">
        <i class="fas fa-map-marked-alt fa-2x text-primary"></i>
        <div>
          <div class="doc-download-title fw-semibold">Trace Android Application</div>
          <div class="doc-download-subtitle small text-muted">Bangkit Academy 2022 Capstone Project</div>
        </div>
      </div>
      <div class="d-flex align-items-center gap-2 flex-wrap">
        <a href="https://canva.link/a10oskbcjasdue3" target="_blank" rel="noopener" class="btn btn-sm doc-download-btn d-inline-flex align-items-center gap-2">
          <i class="fas fa-external-link-alt"></i>
          <span>Bangkit 2022 Capstone Project Showcase</span>
        </a>
      </div>
    </div>

    <h2 id="app-flow">2. Application Flow &amp; Architecture</h2>
    <hr />
    <p>
      The core architecture guides the user through onboarding, interest selection (e.g., beaches vs. mountains), and maps them into an interactive environment:
    </p>

    <figure class="my-4">
      <img src="assets/images/android-trace/app-flow.jpg" alt="Trace Application User Flow Diagram" class="img-fluid" />
      <figcaption>Figure 1: Application Architecture &amp; User Flow Diagram</figcaption>
    </figure>

    <ul>
      <li><strong>Onboarding &amp; Preference Selection:</strong> Collects user travel and scenery preferences during registration to personalize local feeds.</li>
      <li><strong>Interactive Map Core:</strong> Central interface featuring real-time interactive bubbles representing posts, active local missions, and trending activities.</li>
      <li><strong>Post Creation &amp; Engagement:</strong> Floating Action Button (FAB) enables quick creation of text or photo posts with community comment threads.</li>
      <li><strong>Gamified Missions:</strong> Real-world checkpoints (visiting culinary spots, landmarks) that award progression points and unlock profile badges.</li>
    </ul>

    <h2 id="preview">3. App Interface &amp; Screenshots</h2>
    <hr />
    <p>Visual previews showcasing key screens and user flows in the Trace application:</p>

    <figure class="my-4">
      <img src="assets/images/android-trace/frame-1.jpg" alt="Home Map View, Post Detail, and Comments" class="img-fluid" />
      <figcaption>Figure 2: Interactive Map View, Post Detail with Photo Carousel, and Community Discussion</figcaption>
    </figure>

    <figure class="my-4">
      <img src="assets/images/android-trace/frame-2.jpg" alt="Event Exploration and Gamified Mission Completion" class="img-fluid" />
      <figcaption>Figure 3: Event Detail, Food-Foodie Quest List, and Mission Completion Flow</figcaption>
    </figure>

    <h2 id="features">4. Key Features</h2>
    <hr />
    <ul>
      <li><strong>Map-Driven Social Feed:</strong> Visualizes community posts as pins and bubbles directly mapped to their real-world geographic coordinates.</li>
      <li><strong>Gamified Exploration (Misi):</strong> Interactive challenges such as visiting culinary locations (e.g., *Misi Food-Foodie*) to earn achievements like the "Sate Master" badge.</li>
      <li><strong>Rich Media Carousel:</strong> Supports multi-photo posts with comments and community interactions.</li>
      <li><strong>Location &amp; Landmark Discovery:</strong> Discover cultural events (e.g., Tari Kecak in Bali) and trending local recommendations nearby.</li>
    </ul>
  `
});
