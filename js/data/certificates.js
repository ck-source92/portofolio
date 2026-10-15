/**
 * Certificates Configuration for Dwi Candra
 * Showcase professional certifications, licenses, and verified badges.
 *
 * Each certificate supports:
 * - title: Certificate name
 * - issuer: Issuing organization or institution
 * - issuerIcon: FontAwesome icon class
 * - issueDate: When issued
 * - expirationDate: (optional) Expiration date if applicable
 * - credentialId: Certificate verification ID / Number
 * - credentialUrl: Credential verification URL (e.g., Credly, Dicoding, etc.)
 *                  Leave as "" if no URL is available; you can add it anytime.
 * - image: Relative path to certificate image
 * - description: Brief description of skills covered
 * - tags: Relevant tech stack or domain skills
 * - featured: Highlight badge on the card
 */

window.certificatesData = [
  {
    id: "unity-certified-artist",
    title: "Unity Certified Associate: Artist",
    issuer: "Unity Technologies",
    issuerIcon: "fab fa-unity",
    issueDate: "September 2024",
    expirationDate: "September 2027",
    credentialId: "0e32eaa5b4654b82be4a3940d58bf8cb",
    credentialUrl: "https://www.credly.com/badges/c24e4aa8-9279-4bbe-8bd7-78e26f3a90c1/public_url",
    image: "assets/images/certificates/UnityCertifiedAssociateArtist.png",
    description: "Validates foundational skills in 2D and 3D digital art asset creation, real-time lighting, materials, shaders, cameras, visual effects, and game engine pipeline integration in Unity.",
    tags: ["Unity", "Technical Art", "3D Art", "Shaders", "Lighting"],
    featured: true
  },
  {
    id: "bangkit-academy-2022",
    title: "Bangkit Academy 2022 - Mobile Development",
    issuer: "Google, GoTo, Traveloka (Bangkit)",
    issuerIcon: "fab fa-google",
    issueDate: "July 2022",
    expirationDate: "",
    credentialId: "BA22/GRAD/XXII-07/A2007F0696",
    credentialUrl: "", // Put credential link here if exist
    image: "assets/images/certificates/BangkitCertificate2022.jpg",
    description: "Graduate of Google-led Bangkit Academy specializing in Mobile Development, mastering industry-standard Android software engineering and scalable application architecture.",
    tags: ["Mobile Development", "Android", "Kotlin", "Architecture"],
    featured: false
  },
  {
    id: "cflt-english-proficiency",
    title: "Certificate of Achievement - English Proficiency Assessment",
    issuer: "Center for Foreign Language Training, UDINUS",
    issuerIcon: "fas fa-language",
    issueDate: "January 2023",
    expirationDate: "January 2025",
    credentialId: "CFLT-20230119-OL00777",
    credentialUrl: "", // Put credential link here if exist
    image: "assets/images/certificates/CFLTCertifiedProficiencyinEnglish.png",
    description: "Standardized English Language Proficiency Assessment covering Listening Comprehension, Structure & Written Expression, and Reading Comprehension.",
    tags: ["English Proficiency", "Communication", "CFLT"],
    featured: false
  },
  {
    id: "game-developer-expert-dicoding",
    title: "Menjadi Game Developer Expert",
    issuer: "Dicoding Indonesia",
    issuerIcon: "fas fa-gamepad",
    issueDate: "February 2020",
    expirationDate: "February 2023",
    credentialId: "445019",
    credentialUrl: "https://www.dicoding.com/users/445019/academies", // Put credential link here if exist
    image: "assets/images/certificates/Game DeveloperExpert-Dicoding.png",
    description: "Comprehensive industry-approved curriculum mastering advanced game architecture, gameplay loops, asset pipeline, audio management, and runtime performance optimization.",
    tags: ["Game Development", "Unity", "Architecture", "Optimization"],
    featured: false
  },
  {
    id: "pemrograman-solid-dicoding",
    title: "Belajar Prinsip Pemrograman SOLID",
    issuer: "Dicoding Indonesia",
    issuerIcon: "fas fa-code",
    issueDate: "March 2022",
    expirationDate: "March 2025",
    credentialId: "GRX5K5JW3Z0M",
    credentialUrl: "https://www.dicoding.com/certificates/GRX5K5JW3Z0M", // Put credential link here if exist
    image: "assets/images/certificates/BelajarPrinsipPemrogramanSOLID-Dicoding.png",
    description: "Professional software design principles covering Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion for scalable codebases.",
    tags: ["Software Architecture", "OOP", "SOLID", "Clean Code"],
    featured: false
  },
  {
    id: "android-intermediate-dicoding",
    title: "Belajar Pengembangan Aplikasi Android Intermediate",
    issuer: "Dicoding Indonesia",
    issuerIcon: "fab fa-android",
    issueDate: "May 2022",
    expirationDate: "May 2025",
    credentialId: "81P2G2NJYPOY",
    credentialUrl: "https://www.dicoding.com/certificates/81P2G2NJYPOY", // Put credential link here if exist
    image: "assets/images/certificates/AndroidIntermediateCertification-Dicoding.jpg",
    description: "Intermediate Android engineering covering custom views, property animations, localization, camera API, Google Maps integration, and background processing.",
    tags: ["Android", "Kotlin", "Mobile Dev", "Dicoding"],
    featured: false
  },
];
