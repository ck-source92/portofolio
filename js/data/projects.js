/**
 * Portfolio Projects Configuration
 * Showcase projects featured in the portfolio modal and projects lists.
 */
window.projectsData = [
  {
    id: "proj-1",
    title: "Celestial Realm - Real-Time Stylized Shader Suite",
    category: "Technical Art",
    featured: true,
    date: "2024-05",
    summary: "Comprehensive NPR shader package for Unity URP including custom cel shading, dynamic foliage wind simulation, and procedural water caustic caustics.",
    description: "Designed for high-performance stylized game worlds. Features custom HLSL depth-based water foam, screen-space caustics, multi-light toon shading with step ramp textures, and optimized vertex animation wind.",
    tags: ["Unity", "HLSL", "URP", "Technical Art", "Shader Graph"],
    icon: "fas fa-magic",
    github: "https://github.com/",
    demo: "https://example.com/celestial",
  },
  {
    id: "proj-2",
    title: "VortexGPU - 1 Million Particle Vector Field Simulator",
    category: "VFX / Compute",
    featured: true,
    date: "2024-02",
    summary: "Interactive compute shader particle simulation running 1M+ particles with GPU curl noise and depth collision at 120 FPS.",
    description: "Implemented custom compute kernels with structured buffers, indirect argument drawing (DrawMeshInstancedIndirect), and vector field flow visualization in Unity.",
    tags: ["Compute Shader", "HLSL", "Unity", "C#", "VFX"],
    icon: "fas fa-atom",
    github: "https://github.com/",
    demo: "https://example.com/vortexgpu",
  },
  {
    id: "proj-3",
    title: "ApexRenderer - Custom Scriptable Render Pipeline Tool",
    category: "Engine / Render",
    featured: true,
    date: "2023-11",
    summary: "Custom rendering pipeline extension featuring upscale sampling passes, bilateral filtering, and dynamic resolution scaling.",
    description: "A render pipeline module for Unity URP designed to automatically balance visual clarity and framerates during heavy combat sequences with smart upscale sampling.",
    tags: ["Unity", "URP", "Rendering", "C#", "Optimization"],
    icon: "fas fa-microchip",
    github: "https://github.com/",
    demo: "https://example.com/apexrenderer",
  }
];
