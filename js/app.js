/**
 * Main Application Logic for Dwi Candra Portfolio
 * Handles Theme Switching, Mobile Sidebar, Data Rendering, Live Search, Archives & Post Reader
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderProfile();
  renderProjects('all');
  renderCategories();
  renderArchives();
  renderRightPanel();
  setupFilterTabs();
  setupMobileSidebar();
  setupSearchModal();
  setupScrollSpy();
  checkHashRoute();

  window.addEventListener('hashchange', checkHashRoute);
});

/* ==========================================================================
   1. Theme Management (Dark / Light with LocalStorage persistence)
   ========================================================================== */
function initTheme() {
  const savedTheme = localStorage.getItem('porto_theme') || 'dark';
  applyTheme(savedTheme);

  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('porto_theme', theme);

  const themeIcon = document.getElementById('themeToggleIcon');
  if (themeIcon) {
    if (theme === 'dark') {
      themeIcon.className = 'fas fa-sun';
      themeIcon.setAttribute('title', 'Switch to Light Mode');
    } else {
      themeIcon.className = 'fas fa-moon';
      themeIcon.setAttribute('title', 'Switch to Dark Mode');
    }
  }
}

/* ==========================================================================
   2. Profile & Hero Section Rendering
   ========================================================================== */
function renderProfile() {
  const { profile } = portfolioData;

  // Sidebar profile
  const sidebarName = document.getElementById('sidebarName');
  const sidebarTitle = document.getElementById('sidebarTitle');
  const sidebarBio = document.getElementById('sidebarBio');
  const sidebarAvatar = document.getElementById('sidebarAvatar');

  if (sidebarName) sidebarName.textContent = profile.name;
  if (sidebarTitle) sidebarTitle.textContent = profile.title;
  if (sidebarAvatar) sidebarAvatar.src = profile.avatar;

  // Social Links
  const socialGithub = document.getElementById('socialGithub');
  const socialLinkedin = document.getElementById('socialLinkedin');
  const socialEmail = document.getElementById('socialEmail');
  const socialTwitter = document.getElementById('socialTwitter');

  if (socialGithub) socialGithub.href = profile.socials.github;
  if (socialLinkedin) socialLinkedin.href = profile.socials.linkedin;
  if (socialEmail) socialEmail.href = profile.socials.email;
  if (socialTwitter) socialTwitter.href = profile.socials.twitter;

  // Hero Section
  const heroName = document.getElementById('heroName');
  const heroRole = document.getElementById('heroRole');
  const heroBio = document.getElementById('heroBio');

  if (heroName) heroName.textContent = profile.name || '';
  if (heroRole) heroRole.textContent = profile.title || '';
  if (heroBio) heroBio.textContent = profile.about?.intro || profile.bio || '';

  // Highlights / Stats
  const heroStatsContainer = document.getElementById('heroStatsContainer');
  if (heroStatsContainer && profile.about?.highlights) {
    heroStatsContainer.innerHTML = profile.about.highlights.map(item => `
      <div class="stat-item">
        <span class="stat-val">${item.value}</span>
        <span class="stat-lbl">${item.label}</span>
      </div>
    `).join('');
  }

  // About Section Story
  const aboutIntro = document.getElementById('aboutIntro');
  const aboutStory = document.getElementById('aboutStory');
  if (aboutIntro) aboutIntro.textContent = profile.about?.intro || '';
  if (aboutStory) aboutStory.textContent = profile.about?.story || '';
}

/* ==========================================================================
   3. Projects Rendering & Category Filtering
   ========================================================================== */
function renderProjects(filterCategory = 'all') {
  const container = document.getElementById('projectsContainer');
  if (!container) return;

  const filtered = portfolioData.projects.filter(project => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'featured') return project.featured;
    return project.category.toLowerCase() === filterCategory.toLowerCase();
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="text-center py-5 text-muted">
        <i class="fas fa-folder-open fa-3x mb-3 text-dim"></i>
        <p>No projects found in this category.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(project => `
    <article class="project-card" data-id="${project.id}">
      <div class="card-top-meta">
        <div class="d-flex align-items-center gap-2">
          <span class="category-tag"><i class="${project.icon} me-1"></i> ${project.category}</span>
          ${project.featured ? `<span class="featured-badge"><i class="fas fa-star"></i> Featured</span>` : ''}
        </div>
        <span class="font-mono text-dim"><i class="far fa-calendar-alt me-1"></i> ${project.date}</span>
      </div>

      <h3 class="project-title" onclick="openProjectModal('${project.id}')">
        ${project.title}
      </h3>

      <p class="project-summary">
        ${project.summary}
      </p>

      <div class="tag-list">
        ${project.tags.map(tag => `<span class="tech-tag" onclick="filterByTag('${tag}')">${tag}</span>`).join('')}
      </div>

      <div class="card-actions">
        <div class="action-btn-group ms-auto">
          <button class="btn-card" onclick="openProjectModal('${project.id}')">
            <i class="fas fa-info-circle"></i> Details
          </button>
          <a href="${project.github}" target="_blank" rel="noopener" class="btn-card" title="View Source Code">
            <i class="fab fa-github"></i> Code
          </a>
          <a href="${project.demo}" target="_blank" rel="noopener" class="btn-card btn-card-primary" title="Live Demo">
            <i class="fas fa-external-link-alt"></i> Demo
          </a>
        </div>
      </div>
    </article>
  `).join('');
}

function setupFilterTabs() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');
      renderProjects(category);
    });
  });
}

function filterByTag(tag) {
  const container = document.getElementById('archivesContainer');
  if (!container || !portfolioData.archives) return;

  // Unhide main sections if currently in post or category view
  showArchivesView();

  const filtered = portfolioData.archives.filter(p =>
    p.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );

  container.innerHTML = `
    <div class="tag-filter-banner mb-3 d-flex align-items-center justify-content-between p-2 border">
      <span class="small tag-filter-text">Showing articles tagged with <strong>#${tag}</strong> (${filtered.length})</span>
      <button class="btn btn-sm tag-filter-clear-btn" onclick="renderArchives()">
        Clear Filter
      </button>
    </div>
    <ul class="list-unstyled archive-list">
      ${filtered.map(post => `
        <li class="archive-item">
          <span class="date day">${post.day}</span>
          <span class="date month">${post.month}</span>
          <a class="archive-link" onclick="openPost('${post.id}')" title="${post.title}">
            ${post.title}
          </a>
        </li>
      `).join('')}
    </ul>
  `;

  document.getElementById('archives')?.scrollIntoView({ behavior: 'smooth' });
}

/* ==========================================================================
   4. Archives Rendering & Post Reader (Chirpy Architecture)
   ========================================================================== */
function renderArchives() {
  const container = document.getElementById('archivesContainer');
  if (!container || !portfolioData.archives) return;

  // Group posts by Year in descending order
  const yearsMap = {};
  portfolioData.archives.forEach(post => {
    if (!yearsMap[post.year]) yearsMap[post.year] = [];
    yearsMap[post.year].push(post);
  });

  const sortedYears = Object.keys(yearsMap).sort((a, b) => b - a);

  let html = '';
  sortedYears.forEach(year => {
    html += `
      <div class="mb-4">
        <span class="archive-year">${year}</span>
        <ul class="list-unstyled archive-list">
    `;

    yearsMap[year].forEach(post => {
      html += `
        <li class="archive-item">
          <span class="date day">${post.day}</span>
          <span class="date month">${post.month}</span>
          <a class="archive-link" onclick="openPost('${post.id}')" title="${post.title}">
            ${post.title}
          </a>
        </li>
      `;
    });

    html += `
        </ul>
      </div>
    `;
  });

  container.innerHTML = html;
}

/* ==========================================================================
   4.1 Categories Rendering & Category Detail View (Chirpy Style)
   ========================================================================== */
function renderCategories() {
  const container = document.getElementById('categoriesContainer');
  if (!container || !portfolioData.archives) return;

  const categoryMap = {};
  portfolioData.archives.forEach(post => {
    const cat = post.category || 'General';
    if (!categoryMap[cat]) categoryMap[cat] = [];
    categoryMap[cat].push(post);
  });

  let html = '';
  Object.entries(categoryMap).forEach(([catName, posts]) => {
    html += `
      <div class="category-card-box">
        <div class="category-header-btn" onclick="openCategory('${catName}')">
          <span>
            <i class="far fa-folder me-2"></i>
            ${catName}
          </span>
          <span class="category-badge-count">${posts.length}</span>
        </div>
        <ul class="category-post-list">
          ${posts.map(p => `
            <li class="category-post-item">
              <a class="archive-link m-0" onclick="openPost('${p.id}')">${p.title}</a>
              <span class="category-dash"></span>
              <span class="text-dim font-mono small">${p.month} ${p.day}, ${p.year}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  });

  container.innerHTML = html;
}

/**
 * Open a specific category view (matching https://rito15.github.io/categories/unity/)
 */
function openCategory(categoryName) {
  if (!portfolioData.archives) return;

  const posts = portfolioData.archives.filter(p =>
    p.category.toLowerCase() === categoryName.toLowerCase()
  );

  // Hide other views
  const mainSections = document.querySelectorAll('#home, #categories, #archives, #postView');
  mainSections.forEach(sec => sec.classList.add('d-none'));

  const postTocWidget = document.getElementById('postTocWidget');
  if (postTocWidget) postTocWidget.classList.add('d-none');

  const catDetailView = document.getElementById('categoryDetailView');
  if (catDetailView) catDetailView.classList.remove('d-none');

  const catHeader = document.getElementById('categoryDetailHeader');
  const catBreadcrumb = document.getElementById('categoryDetailBreadcrumb');
  const catPostList = document.getElementById('categoryDetailPostList');

  if (catHeader) {
    catHeader.innerHTML = `
      <i class="far fa-folder-open text-white me-2"></i>
      ${categoryName}
      <span class="lead text-muted ms-2">${posts.length}</span>
    `;
  }

  if (catBreadcrumb) catBreadcrumb.textContent = `Categories / ${categoryName}`;

  if (catPostList) {
    catPostList.innerHTML = posts.map(p => `
      <li class="category-post-item mb-2 pb-2 border-bottom border-light">
        <a class="archive-link fw-semibold m-0 text-heading" onclick="openPost('${p.id}')">${p.title}</a>
        <span class="category-dash"></span>
        <span class="text-dim font-mono small">${p.month} ${p.day}, ${p.year}</span>
      </li>
    `).join('');
  }

  const breadcrumbCurrent = document.getElementById('breadcrumbCurrent');
  if (breadcrumbCurrent) breadcrumbCurrent.textContent = categoryName;

  window.location.hash = `#category/${encodeURIComponent(categoryName.toLowerCase())}`;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update active sidebar nav
  document.querySelectorAll('.sidebar-nav .nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#categories') {
      link.classList.add('active');
    }
  });
}

/**
 * Return from category detail view back to main categories overview
 */
function showCategoriesOverview() {
  const catDetailView = document.getElementById('categoryDetailView');
  if (catDetailView) catDetailView.classList.add('d-none');

  const postView = document.getElementById('postView');
  if (postView) postView.classList.add('d-none');

  const postTocWidget = document.getElementById('postTocWidget');
  if (postTocWidget) postTocWidget.classList.add('d-none');

  const mainSections = document.querySelectorAll('#home, #categories, #archives');
  mainSections.forEach(sec => sec.classList.remove('d-none'));

  const breadcrumbCurrent = document.getElementById('breadcrumbCurrent');
  if (breadcrumbCurrent) breadcrumbCurrent.textContent = 'Categories';

  window.location.hash = '#categories';
  document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });

  document.querySelectorAll('.sidebar-nav .nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#categories') {
      link.classList.add('active');
    }
  });
}

/**
 * Open a specific Post / Article in the Chirpy-style Post Reader View
 */
function openPost(postId) {
  const post = portfolioData.archives.find(p => p.id === postId);
  if (!post) return;

  // Hide other sections & category detail view
  const mainSections = document.querySelectorAll('#home, #categories, #archives, #categoryDetailView');
  mainSections.forEach(sec => sec.classList.add('d-none'));

  // Show Post Reader view
  const postView = document.getElementById('postView');
  if (postView) postView.classList.remove('d-none');

  // Show Table of Contents widget in right panel
  const postTocWidget = document.getElementById('postTocWidget');
  if (postTocWidget) postTocWidget.classList.remove('d-none');

  // Populate Post Header & Meta
  const postTitle = document.getElementById('postTitle');
  const postDate = document.getElementById('postDate');
  const postAuthor = document.getElementById('postAuthor');
  const postReadTime = document.getElementById('postReadTime');
  const postCategoryBadge = document.getElementById('postCategoryBadge');
  const postBody = document.getElementById('postBody');
  const postTocList = document.getElementById('postTocList');
  const postTagsList = document.getElementById('postTagsList');
  const postViewBreadcrumb = document.getElementById('postViewBreadcrumb');

  if (postTitle) postTitle.textContent = post.title;
  if (postDate) postDate.textContent = `${post.month} ${post.day}, ${post.year}`;
  if (postAuthor) postAuthor.textContent = portfolioData.profile.name;
  if (postReadTime) postReadTime.textContent = post.readTime;
  if (postCategoryBadge) {
    postCategoryBadge.textContent = post.category;
    postCategoryBadge.style.cursor = 'pointer';
    postCategoryBadge.onclick = () => openCategory(post.category);
  }
  if (postBody) postBody.innerHTML = post.content;
  if (postViewBreadcrumb) postViewBreadcrumb.textContent = `Posts / ${post.title}`;

  // Populate Table of Contents in the right panel
  if (postTocList) {
    if (post.toc && post.toc.length > 0) {
      postTocList.innerHTML = `
        <ul class="list-unstyled mb-0">
          ${post.toc.map(item => `
            <li class="mb-2">
              <a href="#${item.id}" class="post-toc-link">
                ${item.title}
              </a>
            </li>
          `).join('')}
        </ul>
      `;

      // Smooth scroll handler for TOC links
      postTocList.querySelectorAll('.post-toc-link').forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          postTocList.querySelectorAll('.post-toc-link').forEach(l => l.classList.remove('active'));
          link.classList.add('active');
          const targetId = link.getAttribute('href').replace('#', '');
          const targetEl = document.getElementById(targetId);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });

      // Highlight the first section initially
      const firstTocLink = postTocList.querySelector('.post-toc-link');
      if (firstTocLink) firstTocLink.classList.add('active');
    } else {
      postTocList.innerHTML = `<span class="small text-dim">No contents</span>`;
    }
  }

  // Populate Tags
  if (postTagsList) {
    postTagsList.innerHTML = post.tags.map(t => `<span class="tech-tag">${t}</span>`).join('');
  }

  // Update Breadcrumb & URL hash
  const breadcrumbCurrent = document.getElementById('breadcrumbCurrent');
  if (breadcrumbCurrent) breadcrumbCurrent.textContent = post.title;

  window.location.hash = `#post/${post.id}`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Return from Post Reader back to Archives / Home view
 */
function showArchivesView() {
  const postView = document.getElementById('postView');
  if (postView) postView.classList.add('d-none');

  const catDetailView = document.getElementById('categoryDetailView');
  if (catDetailView) catDetailView.classList.add('d-none');

  const postTocWidget = document.getElementById('postTocWidget');
  if (postTocWidget) postTocWidget.classList.add('d-none');

  // Unhide main sections
  const mainSections = document.querySelectorAll('#home, #categories, #archives');
  mainSections.forEach(sec => sec.classList.remove('d-none'));

  const breadcrumbCurrent = document.getElementById('breadcrumbCurrent');
  if (breadcrumbCurrent) breadcrumbCurrent.textContent = 'Archives';

  window.location.hash = '#archives';
  document.getElementById('archives')?.scrollIntoView({ behavior: 'smooth' });

  // Update active sidebar nav item
  document.querySelectorAll('.sidebar-nav .nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#archives') {
      link.classList.add('active');
    }
  });
}

/**
 * Check URL hash to support direct link navigation (e.g. #category/unity or #post/unity-upscale-sampling)
 */
function checkHashRoute() {
  const hash = window.location.hash;
  if (hash.startsWith('#post/')) {
    const postId = hash.replace('#post/', '');
    openPost(postId);
  } else if (hash.startsWith('#category/')) {
    const catSlug = decodeURIComponent(hash.replace('#category/', ''));
    if (portfolioData.archives) {
      const found = portfolioData.archives.find(p => p.category.toLowerCase() === catSlug.toLowerCase());
      if (found) {
        openCategory(found.category);
      }
    }
  } else if (hash === '#categories') {
    showCategoriesOverview();
  } else if (hash === '#archives') {
    showArchivesView();
  } else {
    // If navigating back to #home, #projects, #about, or root
    const postView = document.getElementById('postView');
    const catDetailView = document.getElementById('categoryDetailView');
    const postTocWidget = document.getElementById('postTocWidget');
    if ((postView && !postView.classList.contains('d-none')) || (catDetailView && !catDetailView.classList.contains('d-none'))) {
      if (postView) postView.classList.add('d-none');
      if (catDetailView) catDetailView.classList.add('d-none');
      if (postTocWidget) postTocWidget.classList.add('d-none');
      document.querySelectorAll('#home, #categories, #archives').forEach(sec => sec.classList.remove('d-none'));
    }
  }
}

/* ==========================================================================
   6. Right Panel Widgets Rendering (Trending Tags & Quick Highlights)
   ========================================================================== */
function renderRightPanel() {
  // Collect all unique tags and count frequencies across projects and archives
  const tagCounts = {};
  if (portfolioData.projects) {
    portfolioData.projects.forEach(p => {
      p.tags.forEach(t => {
        tagCounts[t] = (tagCounts[t] || 0) + 1;
      });
    });
  }
  if (portfolioData.archives) {
    portfolioData.archives.forEach(p => {
      p.tags.forEach(t => {
        tagCounts[t] = (tagCounts[t] || 0) + 1;
      });
    });
  }

  const tagCloud = document.getElementById('trendingTagsCloud');
  if (tagCloud) {
    tagCloud.innerHTML = Object.entries(tagCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 15)
      .map(([tag, count]) => `
        <span class="tech-tag" onclick="filterByTag('${tag}')">
          ${tag} <span class="text-dim">(${count})</span>
        </span>
      `).join('');
  }

  // Quick Featured Highlights
  const quickList = document.getElementById('quickFeaturedList');
  if (quickList && portfolioData.projects) {
    const featuredProjects = portfolioData.projects.filter(p => p.featured);
    quickList.innerHTML = featuredProjects.map(p => `
      <div class="mb-2 pb-2 border-bottom border-light cursor-pointer" onclick="openProjectModal('${p.id}')">
        <div class="small fw-bold text-heading hover-accent">${p.title}</div>
        <div class="text-dim font-mono" style="font-size: 0.72rem;">${p.date} • ${p.category}</div>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   7. Live Search Modal (`Ctrl+K` or Button Trigger)
   ========================================================================== */
function setupSearchModal() {
  const searchModalEl = document.getElementById('searchModal');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  if (!searchModalEl || !searchInput || !searchResults) return;

  const searchModal = new bootstrap.Modal(searchModalEl);

  const searchTriggers = document.querySelectorAll('.trigger-search-modal');
  searchTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
      searchModal.show();
      setTimeout(() => searchInput.focus(), 350);
    });
  });

  // Global Keyboard shortcut: Ctrl+K or Cmd+K
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      searchModal.show();
      setTimeout(() => searchInput.focus(), 350);
    }
  });

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (!query) {
      searchResults.innerHTML = `<div class="p-3 text-center text-dim small">Type to search projects, articles, or tags...</div>`;
      return;
    }

    const matchedProjects = (portfolioData.projects || []).filter(p =>
      p.title.toLowerCase().includes(query) ||
      p.summary.toLowerCase().includes(query) ||
      p.tags.some(t => t.toLowerCase().includes(query))
    );

    const matchedArchives = (portfolioData.archives || []).filter(a =>
      a.title.toLowerCase().includes(query) ||
      a.summary.toLowerCase().includes(query) ||
      a.tags.some(t => t.toLowerCase().includes(query))
    );

    if (matchedProjects.length === 0 && matchedArchives.length === 0) {
      searchResults.innerHTML = `<div class="p-3 text-center text-muted">No results found for "${query}"</div>`;
      return;
    }

    let html = '';
    if (matchedArchives.length > 0) {
      html += `<div class="text-dim small text-uppercase font-mono px-2 mb-1">Articles & Archives (${matchedArchives.length})</div>`;
      matchedArchives.forEach(a => {
        html += `
          <div class="search-result-item" onclick="selectArchiveSearchResult('${a.id}')">
            <div class="fw-bold text-heading"><i class="fas fa-file-alt text-accent me-1"></i> ${highlightText(a.title, query)}</div>
            <div class="small text-muted text-truncate">${highlightText(a.summary, query)}</div>
            <div class="mt-1 font-mono text-dim" style="font-size: 0.72rem;">${a.date} • Tags: ${a.tags.join(', ')}</div>
          </div>
        `;
      });
    }

    if (matchedProjects.length > 0) {
      html += `<div class="text-dim small text-uppercase font-mono px-2 mt-3 mb-1">Projects (${matchedProjects.length})</div>`;
      matchedProjects.forEach(p => {
        html += `
          <div class="search-result-item" onclick="selectProjectSearchResult('${p.id}')">
            <div class="fw-bold text-heading"><i class="fas fa-laptop-code text-accent me-1"></i> ${highlightText(p.title, query)}</div>
            <div class="small text-muted text-truncate">${highlightText(p.summary, query)}</div>
            <div class="mt-1 font-mono text-dim" style="font-size: 0.72rem;">Tags: ${p.tags.join(', ')}</div>
          </div>
        `;
      });
    }

    searchResults.innerHTML = html;
  });
}

function highlightText(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, '<span class="bg-warning text-dark px-1 rounded">$1</span>');
}

function selectProjectSearchResult(projectId) {
  const searchModalEl = document.getElementById('searchModal');
  const modalInstance = bootstrap.Modal.getInstance(searchModalEl);
  if (modalInstance) modalInstance.hide();
  openProjectModal(projectId);
}

function selectArchiveSearchResult(archiveId) {
  const searchModalEl = document.getElementById('searchModal');
  const modalInstance = bootstrap.Modal.getInstance(searchModalEl);
  if (modalInstance) modalInstance.hide();
  openPost(archiveId);
}

/* ==========================================================================
   8. Project Details Modal
   ========================================================================== */
function openProjectModal(projectId) {
  const project = portfolioData.projects.find(p => p.id === projectId);
  if (!project) return;

  const modalTitle = document.getElementById('projectModalTitle');
  const modalBody = document.getElementById('projectModalBody');
  const modalLiveBtn = document.getElementById('projectModalLiveBtn');
  const modalCodeBtn = document.getElementById('projectModalCodeBtn');

  if (modalTitle) {
    modalTitle.innerHTML = `<i class="${project.icon} text-accent me-2"></i> ${project.title}`;
  }

  if (modalBody) {
    modalBody.innerHTML = `
      <div class="mb-3 d-flex flex-wrap align-items-center gap-2">
        <span class="category-tag">${project.category}</span>
        ${project.featured ? `<span class="featured-badge"><i class="fas fa-star"></i> Featured Project</span>` : ''}
        <span class="badge-mono text-dim small ms-auto"><i class="far fa-calendar-alt me-1"></i> Completed: ${project.date}</span>
      </div>

      <div class="p-3 rounded mb-3" style="background-color: var(--bg-body); border: 1px solid var(--border-color);">
        <h6 class="text-accent small text-uppercase font-mono mb-1"><i class="fas fa-chart-line me-1"></i> Key Highlight</h6>
      </div>

      <h5 class="text-heading fw-bold mb-2">Project Overview</h5>
      <p class="text-muted mb-4">${project.description}</p>

      <h5 class="text-heading fw-bold mb-2">Technologies Used</h5>
      <div class="tag-list mb-4">
        ${project.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
    `;
  }

  if (modalLiveBtn) modalLiveBtn.href = project.demo;
  if (modalCodeBtn) modalCodeBtn.href = project.github;

  const projectModal = new bootstrap.Modal(document.getElementById('projectDetailsModal'));
  projectModal.show();
}

/* ==========================================================================
   9. Mobile Offcanvas Sidebar Handler
   ========================================================================== */
function setupMobileSidebar() {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('mobileSidebarToggle');
  const backdrop = document.getElementById('sidebarBackdrop');
  const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');

  if (!sidebar || !toggleBtn || !backdrop) return;

  function openSidebar() {
    sidebar.classList.add('show');
    backdrop.classList.add('show');
  }

  function closeSidebar() {
    sidebar.classList.remove('show');
    backdrop.classList.remove('show');
  }

  toggleBtn.addEventListener('click', () => {
    if (sidebar.classList.contains('show')) closeSidebar();
    else openSidebar();
  });

  backdrop.addEventListener('click', closeSidebar);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 992) closeSidebar();
    });
  });
}

/* ==========================================================================
   10. ScrollSpy & Navigation Active State
   ========================================================================== */
function setupScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');
  const breadcrumbCurrent = document.getElementById('breadcrumbCurrent');

  window.addEventListener('scroll', () => {
    // If post reader is active, update active heading in Contents (TOC)
    const postView = document.getElementById('postView');
    if (postView && !postView.classList.contains('d-none')) {
      const headings = document.querySelectorAll('#postBody [id]');
      const tocLinks = document.querySelectorAll('#postTocList .post-toc-link');
      if (headings.length > 0 && tocLinks.length > 0) {
        let activeHeadingId = '';
        const scrollPos = window.scrollY + 140;
        headings.forEach(heading => {
          if (heading.offsetTop <= scrollPos) {
            activeHeadingId = heading.getAttribute('id');
          }
        });

        if (activeHeadingId) {
          tocLinks.forEach(link => {
            const targetId = link.getAttribute('href').replace('#', '');
            if (targetId === activeHeadingId) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      }
      return;
    }

    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
          if (breadcrumbCurrent) {
            breadcrumbCurrent.textContent = link.querySelector('span')?.textContent || 'Home';
          }
        }
      });
    }
  });
}
