/**
 * Post: Gompu - Children Learning & Mentorship Platform
 */
window.posts = window.posts || [];
window.posts.push({
  id: "android-gompu",
  title: "Gompu - Platform Edukasi Softskill & Hardskill (Intern Project)",
  slug: "android-gompu",
  year: 2022,
  date: "2022-08-22",
  day: "22",
  month: "Aug",
  category: "Android Development",
  readTime: "5 min",
  tags: ["Android", "Kotlin", "Mobile App", "EdTech", "Midtrans"],
  summary: "An interactive Android application developed during my internship at PT. Qatros Teknologi Nusantara, empowering children to cultivate soft and hard skills through mentorship and curated learning events.",
  toc: [
    { id: "overview", title: "1. Overview & Concept" },
    { id: "features", title: "2. Key Learning Programs" },
    { id: "preview", title: "3. App Interface & Previews" },
    { id: "payment", title: "4. Virtual Currency & Payment" },
    { id: "mentorship", title: "5. Face-to-Face Mentorship" },
    { id: "collaboration", title: "6. Development & Team Collaboration" }
  ],
  content: `
    <h2 id="overview">1. Overview &amp; Concept</h2>
    <hr />
    <p>
      <strong>Gompu</strong> (<em>#GodokNgampu</em>) is an Android app which designed to provide children and young learns technologies <strong>soft skills</strong> and <strong>hard skills</strong> through interactive program and mentorship or training program.
    </p>

    <div class="doc-download-box my-3 p-3 border d-flex align-items-center justify-content-between flex-wrap gap-3">
      <div class="d-flex align-items-center gap-3">
        <i class="fas fa-mobile-alt fa-2x text-primary"></i>
        <div>
          <div class="doc-download-title fw-semibold">Gompu Android Application</div>
          <div class="doc-download-subtitle small text-muted">Internship Project at PT. Qatros Teknologi Nusantara (2022)</div>
        </div>
      </div>
      <span class="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2">
        <i class="fab fa-android me-1"></i> Android &amp; Kotlin
      </span>
    </div>

    <h2 id="features">2. Key Learning Programs</h2>
    <hr />
    <p>
      Gompu structures child-focused learning pathways across four comprehensive event categories designed to cater to various learning paces and interests:
    </p>
    <ul>
      <li><strong>Bootcamp:</strong> Intensive, project-oriented courses covering foundational creative and computational skills—such as 3D Design in Blender, creative pencil illustration, introductory Python logic, and accelerated productivity suites.</li>
      <li><strong>Workshop:</strong> Interactive, industry-relevant sessions on modern technology trends, including digital marketing fundamentals, Facebook &amp; TikTok advertising, and introductory design systems.</li>
      <li><strong>Training:</strong> Practical vocational and personal development programs focusing on public speaking, early career orientation (e.g., UI/UX design, Product Management, Backend engineering), and client communication.</li>
      <li><strong>Gompu Know:</strong> Exploratory, bite-sized knowledge-sharing events designed to ignite curiosity and creative thinking.</li>
    </ul>

    <h2 id="preview">3. App Interface &amp; Previews</h2>
    <hr />
    <p>Visual previews showcasing key flows and user interface designs in the Gompu application:</p>

    <div class="row g-3 my-3">
      <div class="col-md-6">
        <figure>
          <img src="assets/images/android-gompu/Frame-1.jpg" alt="Gompu Platform Overview and Mentor Directory" class="img-fluid" />
          <figcaption>Figure 1: Home Dashboard, Featured Learning Events &amp; Mentor Directory</figcaption>
        </figure>
      </div>
      <div class="col-md-6">
        <figure>
          <img src="assets/images/android-gompu/Frame-3.jpg" alt="1-on-1 Consultation Booking & Schedule" class="img-fluid" />
          <figcaption>Figure 2: Face-to-Face Mentorship Scheduling &amp; Consultation Booking</figcaption>
        </figure>
      </div>
    </div>

    <div class="row g-3 my-3">
      <div class="col-md-6">
        <figure>
          <img src="assets/images/android-gompu/Frame-5.jpg" alt="Bootcamp Programs Catalog" class="img-fluid" />
          <figcaption>Figure 3: Bootcamp Event Catalog &amp; Hands-on Learning Courses</figcaption>
        </figure>
      </div>
      <div class="col-md-6">
        <figure>
          <img src="assets/images/android-gompu/Frame-6.jpg" alt="Workshop Programs Catalog" class="img-fluid" />
          <figcaption>Figure 4: Workshop Sessions on Tech, Marketing &amp; Design Systems</figcaption>
        </figure>
      </div>
    </div>

    <div class="row g-3 my-3">
      <div class="col-md-6">
        <figure>
          <img src="assets/images/android-gompu/Frame-8.jpg" alt="Training & Career Programs Catalog" class="img-fluid" />
          <figcaption>Figure 5: Training Programs on Career Exploration &amp; Public Speaking</figcaption>
        </figure>
      </div>
      <div class="col-md-6">
        <figure>
          <img src="assets/images/android-gompu/Frame-2.jpg" alt="GompuCoin Top-Up and Payment Gateway" class="img-fluid" />
          <figcaption>Figure 6: In-App GompuPoin Top-Up with Midtrans Payment Integration</figcaption>
        </figure>
      </div>
    </div>

    <h2 id="payment">4. Virtual Currency &amp; Payment System</h2>
    <hr />
    <p>
      To provide a seamless and child-friendly booking experience, Gompu incorporates an in-app virtual currency model:
    </p>
    <ul>
      <li><strong>GompuPoin / GompuCoin:</strong> A virtual coin system that enables users or parents to unlock learning sessions, enroll in bootcamps, and schedule face-to-face mentorship appointments without repeated credit card inputs.</li>
      <li><strong>Midtrans Gateway Integration:</strong> Integrated with <strong>Midtrans</strong> to ensure secure, flexible, and instant wallet top-ups through various Indonesian payment channels including virtual accounts, e-wallets, and QRIS.</li>
    </ul>

    <h2 id="mentorship">5. Face-to-Face Mentorship</h2>
    <hr />
    <p>
      One of Gompu's standout capabilities is the <strong>Face-to-Face Mentorship</strong> consultation module:
    </p>
    <ul>
      <li><strong>Expert Directory:</strong> Browse verified mentors including startup founders, C-level executives, and specialized engineers.</li>
      <li><strong>Interactive Scheduling:</strong> Select available consultation dates, choose convenient morning or afternoon time slots, and submit consultation topics ahead of the session.</li>
      <li><strong>Frictionless Confirmation:</strong> Direct checkout and schedule confirmation utilizing GompuCoin points.</li>
    </ul>

    <h2 id="collaboration">6. Development &amp; Team Collaboration</h2>
    <hr />
    <p>
      As an Android Developer intern at <strong>PT. Qatros Teknologi Nusantara</strong>, building Gompu involved active cross-functional collaboration following industry development workflows:
    </p>
    <ul>
      <li><strong>UI/UX Team:</strong> Translated Figma high-fidelity wireframes and design systems into intuitive, responsive Android XML layouts adhering to Material Design guidelines.</li>
      <li><strong>Backend Engineering Team:</strong> Collaborated on API contract specifications, handling authentication, event catalog queries, wallet balances, and Midtrans transaction statuses.</li>
      <li><strong>Quality Control (QC) Team:</strong> Executed regression tests, investigated edge cases, and resolved UI rendering discrepancies across diverse Android screen sizes and Android OS versions.</li>
    </ul>
  `
});
