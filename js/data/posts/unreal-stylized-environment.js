/**
 * Post: Unreal Engine 5 - Stylized Environment
 */
window.posts = window.posts || [];
window.posts.push({
  id: "unreal-stylized-environment",
  title: "Unreal Engine 5 - Stylized Environment",
  slug: "unreal-stylized-environment",
  year: 2025,
  date: "2025-01-05",
  day: "05",
  month: "Jan",
  category: "Unreal Engine",
  readTime: "7 min",
  pinned: true,
  tags: ["Unreal Engine", "Environment"],
  summary: "Stylized environment creation using Unreal Engine 5, Blender, and Substance 3D Painter.",
  toc: [
    { id: "intro", title: "1. Overview & Concept" },
    { id: "preview", title: "2. Preview" },
    { id: "blender", title: "3. Modeling (Blender)" },
    { id: "photoshop", title: "4. Texturing (Adobe Photoshop)" },
    { id: "substance", title: "5. Texturing (Adobe Substance)" },
    { id: "unreal", title: "6. Unreal Engine 5" },
    { id: "download", title: "7. Download" },
  ],
  content: `
    <h2 id="intro">1. Overview & Concept</h2>
    <hr />
    <p>Stylized environment creation using Unreal Engine 5, Blender, and Substance 3D Painter.</p>
    <p>I used Unreal Engine 5.6, Blender 4.4, and Substance 3D Painter to create this stylized environment. I focused on creating a visually appealing environment.</p>

    <h2 id="preview">2. Preview</h2>
    <hr />
    <figure class="my-3">
      <img src="assets/images/ue-stylized-env/stylized-env.png" alt="Unreal Engine 5 Stylized Environment" class="img-fluid" />
      <figcaption>Figure 1: Real-time Stylized Landscape & Foliage in Unreal Engine 5</figcaption>
    </figure>

    <p>Check out the real-time showcase video below:</p>
    <div class="ratio ratio-16x9 my-3">
      <iframe src="https://www.youtube.com/embed/SJx6XRnCKsg" title="Unreal Engine 5 - Stylized Environment" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </div>

    <h2 id="blender">3. Modeling (Blender)</h2>
    <hr />
    <figure class="my-3">
      <img src="assets/images/ue-stylized-env/blender/rocks-model.png" alt="Stylized Rocks 3D Model" class="img-fluid" />
      <figcaption>Stylized Rocks Model</figcaption>
    </figure>

    <figure class="my-3">
      <img src="assets/images/ue-stylized-env/blender/flower-model1.png" alt="Flower 3D Model Render" class="img-fluid" />
      <figcaption>Flower 3D Model Render</figcaption>
    </figure>

    <div class="row g-3 my-3">
      <div class="col-md-6">
        <figure>
          <img src="assets/images/ue-stylized-env/blender/flower-geometry-model.png" alt="Flower Geometry & Vertex Normals" class="img-fluid" />
          <figcaption>Flower Geometry & Vertex Normals</figcaption>
        </figure>
      </div>
      <div class="col-md-6">
        <figure>
          <img src="assets/images/ue-stylized-env/blender/leaf-flower-model.png" alt="Flower Material Setup" class="img-fluid" />
          <figcaption>Blender Material Setup</figcaption>
        </figure>
      </div>
    </div>

    <h2 id="photoshop">4. Texturing (Adobe Photoshop)</h2>
    <hr />
    <div class="row g-3 my-3">
      <div class="col-md-6">
        <figure>
          <img src="assets/images/ue-stylized-env/photoshop/flower-img.png" alt="Flower & Foliage Texture Atlas" class="img-fluid" />
          <figcaption>Flower & Foliage Texture Atlas</figcaption>
        </figure>
      </div>
      <div class="col-md-6">
        <figure>
          <img src="assets/images/ue-stylized-env/photoshop/cloud1-img.jpg" alt="Stylized Cloud Texture" class="img-fluid" />
          <figcaption>Stylized Cloud Texture Artwork</figcaption>
        </figure>
      </div>
    </div>

    <h2 id="substance">5. Texturing (Adobe Substance)</h2>
    <hr />
    <figure class="my-3">
      <img src="assets/images/ue-stylized-env/substance/rocks-texturing.png" alt="Substance 3D Painter Rocks Texturing" class="img-fluid" />
      <figcaption>Substance 3D Painter Rocks Layer Stack & Texture Setup</figcaption>
    </figure>

    <figure class="my-3">
      <img src="assets/images/ue-stylized-env/substance/tree-texturing.png" alt="Stylized Tree Trunk Texturing" class="img-fluid" />
      <figcaption>Stylized Tree Trunk Texturing</figcaption>
    </figure>

    <h2 id="unreal">6. Unreal Engine 5</h2>
    <hr />
    <figure class="my-3">
      <img src="assets/images/ue-stylized-env/ue/material-master.png" alt="Unreal Engine 5 Master Material Graph" class="img-fluid" />
      <figcaption>Master Material Setup in Unreal Engine 5</figcaption>
    </figure>

    <div class="row g-3 my-3">
      <div class="col-md-6">
        <figure>
          <img src="assets/images/ue-stylized-env/ue/leaf-tree-a.png" alt="Tree Foliage Nanite Mesh & Stats" class="img-fluid" />
          <figcaption>Tree Foliage Nanite Mesh Inspection</figcaption>
        </figure>
      </div>
      <div class="col-md-6">
        <figure>
          <img src="assets/images/ue-stylized-env/ue/leaves-tree-b.png" alt="Stylized Leaf Shading & Nanite Stats" class="img-fluid" />
          <figcaption>Stylized Leaf Shading with Nanite Optimization</figcaption>
        </figure>
      </div>
    </div>

    <div class="row g-3 my-3">
      <div class="col-md-6">
        <figure>
          <img src="assets/images/ue-stylized-env/ue/tree-a.png" alt="Stylized Tree in Viewport (Foliage Cards)" class="img-fluid" />
          <figcaption>Stylized Tree Geometry & Placement</figcaption>
        </figure>
      </div>
      <div class="col-md-6">
        <figure>
          <img src="assets/images/ue-stylized-env/ue/tree-b.png" alt="Stylized Tree with Final Material" class="img-fluid" />
          <figcaption>Final Stylized Tree Shading in Environment</figcaption>
        </figure>
      </div>
    </div>

    <h2 id="download">7. Download</h2>
    <hr />
    <p>Download the complete technical documentation and shader breakdown PDF:</p>
    <div class="doc-download-box my-3 p-3 border d-flex align-items-center justify-content-between flex-wrap gap-3">
      <div class="d-flex align-items-center gap-3">
        <i class="fas fa-file-pdf fa-2x text-danger"></i>
        <div>
          <div class="doc-download-title fw-semibold">Grass Shader Documentation</div>
          <div class="doc-download-subtitle small text-muted">grass-shader-doc.pdf (1.5 MB)</div>
        </div>
      </div>
      <a href="assets/ue/stylized-env/docs/grass-shader-doc.pdf" download="grass-shader-doc.pdf" target="_blank" rel="noopener" class="btn btn-sm doc-download-btn d-inline-flex align-items-center gap-2">
        <i class="fas fa-download"></i>
        <span>Download PDF</span>
      </a>
    </div>
  `
});
