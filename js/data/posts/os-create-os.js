/**
 * Post: Create OS - Building an Operating System with C# Cosmos
 */
window.posts = window.posts || [];
window.posts.push({
  id: "os-create-os",
  title: "Create OS - Building an Operating System with C# Cosmos",
  slug: "os-create-os",
  year: 2021,
  date: "2021-04-17",
  day: "17",
  month: "Apr",
  category: "Operating Systems",
  readTime: "4 min",
  tags: ["C#", "Cosmos", "Operating System", "VMware", "Assembly"],
  summary: "Undergraduate assignment: Building a custom operating system using C# and Cosmos (C# Open Source Managed Operating System) running in a virtual machine environment.",
  toc: [
    { id: "overview", title: "1. Overview & Concept" },
    { id: "preview", title: "2. Preview & Video Demo" },
    { id: "tools", title: "3. Tools & Resources" }
  ],
  content: `
    <h2 id="overview">1. Overview &amp; Concept</h2>
    <hr />
    <p>
      An undergraduate assignment demonstrating operating system construction using <strong>C#</strong> and the <strong>Cosmos</strong> (C# Open Source Managed Operating System) toolkit.
    </p>
    <p>
      Cosmos is an operating system development kit that translates .NET IL bytecode into native x86 machine code using an ahead-of-time compiler (IL2CPU). Through this project, a bootable operating system kernel was built with basic shell commands, console I/O, and hardware interaction, tested and executed inside VMware Workstation Player.
    </p>

    <h2 id="preview">2. Preview &amp; Video Demo</h2>
    <hr />
    <p>Watch the demonstration video on YouTube: <a href="https://youtu.be/raVBCD-VQ2c" target="_blank" rel="noopener" class="post-link text-accent fw-medium">Create OS - C# Cosmos Demo <i class="fas fa-external-link-alt fa-xs ms-1"></i></a></p>
    <div class="ratio ratio-16x9 my-3">
      <iframe src="https://www.youtube.com/embed/raVBCD-VQ2c" title="Create OS - Building an Operating System with C# Cosmos" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </div>

    <h2 id="tools">3. Tools &amp; Resources</h2>
    <hr />
    <p>Software and toolkits used to develop and emulate the operating system:</p>

    <div class="doc-download-box my-3 p-3 border d-flex align-items-center justify-content-between flex-wrap gap-3">
      <div class="d-flex align-items-center gap-3">
        <i class="fas fa-laptop-code fa-2x text-primary"></i>
        <div>
          <div class="doc-download-title fw-semibold">Visual Studio 2019 Community</div>
          <div class="doc-download-subtitle small text-muted">IDE &amp; C# Build Environment</div>
        </div>
      </div>
      <a href="https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Community&rel=16" target="_blank" rel="noopener" class="btn btn-sm doc-download-btn d-inline-flex align-items-center gap-2">
        <i class="fas fa-external-link-alt"></i>
        <span>Download</span>
      </a>
    </div>

    <div class="doc-download-box my-3 p-3 border d-flex align-items-center justify-content-between flex-wrap gap-3">
      <div class="d-flex align-items-center gap-3">
        <i class="fas fa-cubes fa-2x text-warning"></i>
        <div>
          <div class="doc-download-title fw-semibold">Cosmos User Kit</div>
          <div class="doc-download-subtitle small text-muted">C# Open Source Managed Operating System Toolkit</div>
        </div>
      </div>
      <a href="https://www.gocosmos.org/download/" target="_blank" rel="noopener" class="btn btn-sm doc-download-btn d-inline-flex align-items-center gap-2">
        <i class="fas fa-external-link-alt"></i>
        <span>Get Cosmos</span>
      </a>
    </div>

    <div class="doc-download-box my-3 p-3 border d-flex align-items-center justify-content-between flex-wrap gap-3">
      <div class="d-flex align-items-center gap-3">
        <i class="fas fa-server fa-2x text-success"></i>
        <div>
          <div class="doc-download-title fw-semibold">VMware Workstation Player</div>
          <div class="doc-download-subtitle small text-muted">Virtualization Environment for Booting and Testing OS ISOs</div>
        </div>
      </div>
      <a href="https://www.vmware.com/products/workstation-player.html" target="_blank" rel="noopener" class="btn btn-sm doc-download-btn d-inline-flex align-items-center gap-2">
        <i class="fas fa-external-link-alt"></i>
        <span>Download VMware</span>
      </a>
    </div>
  `
});
