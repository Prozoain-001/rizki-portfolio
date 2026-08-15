/* ==========================================================================
   RIZKI SETIAWAN — CORE INTERACTION
   ========================================================================== */

document.documentElement.classList.add('js');

/* ---------------- Mobile nav ---------------- */
(function mobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const panel = document.querySelector('.mobile-nav');
  if (!toggle || !panel) return;
  toggle.addEventListener('click', () => {
    const open = panel.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  });
  panel.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    panel.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }));
})();

/* ---------------- Custom cursor (desktop, fine pointer only) ---------------- */
(function customCursor() {
  const isFine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!isFine) return;

  const dot = document.createElement('div');
  dot.className = 'cursor';
  const label = document.createElement('div');
  label.className = 'cursor-label';
  document.body.append(dot, label);

  let x = 0, y = 0;
  window.addEventListener('mousemove', (e) => {
    x = e.clientX; y = e.clientY;
    dot.style.transform = `translate(${x}px, ${y}px) translate(-50%,-50%)`;
    label.style.transform = `translate(${x}px, ${y}px) translate(-50%,-50%) scale(${label.classList.contains('is-active') ? 1 : 0})`;
  });

  document.addEventListener('mouseover', (e) => {
    const target = e.target.closest('[data-cursor]');
    if (!target) return;
    label.textContent = target.getAttribute('data-cursor');
    label.classList.add('is-active');
    dot.style.width = '0px';
    dot.style.height = '0px';
  });
  document.addEventListener('mouseout', (e) => {
    const target = e.target.closest('[data-cursor]');
    if (!target) return;
    label.classList.remove('is-active');
    dot.style.width = '8px';
    dot.style.height = '8px';
  });
})();

/* ---------------- Reveal on scroll (reusable for dynamic content) ---------------- */
function initReveals(root) {
  const items = (root || document).querySelectorAll('.reveal:not(.is-observed)');
  if (!items.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(el => { el.classList.add('is-observed'); io.observe(el); });
}
initReveals();

/* ---------------- Project row hover preview (smooth follow) ---------------- */
function initProjectHoverPreview() {
  const rows = document.querySelectorAll('.project-row');
  const preview = document.querySelector('.project-preview');
  if (!rows.length || !preview) return;
  const img = preview.querySelector('img');
  const hasGsap = typeof gsap !== 'undefined';

  const setX = hasGsap ? gsap.quickTo(preview, 'left', { duration: 0.55, ease: 'power3.out' }) : (v) => preview.style.left = v + 'px';
  const setY = hasGsap ? gsap.quickTo(preview, 'top', { duration: 0.55, ease: 'power3.out' }) : (v) => preview.style.top = v + 'px';

  rows.forEach(row => {
    row.addEventListener('mousemove', (e) => { setX(e.clientX); setY(e.clientY); });
    row.addEventListener('mouseenter', (e) => {
      img.src = row.getAttribute('data-image') || '';
      preview.style.left = e.clientX + 'px';
      preview.style.top = e.clientY + 'px';
      preview.classList.add('is-visible');
    });
    row.addEventListener('mouseleave', () => {
      preview.classList.remove('is-visible');
    });
  });
}
initProjectHoverPreview();

/* ---------------- Page transition on internal nav ---------------- */
(function pageTransition() {
  const overlay = document.querySelector('.page-transition');
  if (!overlay || typeof gsap === 'undefined') return;

  gsap.set(overlay, { yPercent: 100 });
  gsap.to(overlay, { yPercent: 100, duration: 0 });

  // Reveal current page on load
  gsap.fromTo(overlay, { yPercent: 0 }, { yPercent: -100, duration: 0.7, ease: 'power3.inOut', onComplete: () => gsap.set(overlay, { yPercent: 100 }) });

  document.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || a.target === '_blank') return;
    a.addEventListener('click', (e) => {
      if (e.metaKey || e.ctrlKey) return;
      e.preventDefault();
      gsap.set(overlay, { yPercent: 100 });
      gsap.to(overlay, {
        yPercent: 0, duration: 0.55, ease: 'power3.inOut',
        onComplete: () => { window.location.href = href; }
      });
    });
  });
})();

/* ---------------- Hero entrance ---------------- */
(function heroEntrance() {
  const name = document.querySelector('.intro__name');
  if (!name || typeof gsap === 'undefined') return;
  gsap.from(name, { yPercent: 110, duration: 1.1, ease: 'power4.out', delay: 0.15 });
  gsap.from('.intro__role', { opacity: 0, y: 16, duration: 0.9, ease: 'power2.out', delay: 0.55 });
  gsap.from('.intro__meta', { opacity: 0, duration: 0.9, ease: 'power2.out', delay: 0.4 });
})();

/* ==========================================================================
   RENDER HELPERS — used by index/work/project/experiments pages
   ========================================================================== */

function renderProjectList(target) {
  if (!target || typeof PROJECTS === 'undefined') return;
  target.innerHTML = PROJECTS.map((p, i) => `
    <a class="project-row reveal" style="transition-delay:${i * 0.06}s" href="project.html?slug=${p.slug}" data-image="${p.thumbnail}" data-cursor="View">
      <span class="project-row__index">${String(i + 1).padStart(2, '0')}</span>
      <span class="project-row__title">${p.title}</span>
      <span class="project-row__category">${p.category}</span>
      <span class="project-row__year">${p.year}</span>
    </a>
  `).join('');
  initReveals(target);
  initProjectHoverPreview();
}

function renderFeatured(target) {
  if (!target || typeof PROJECTS === 'undefined') return;
  const p = getProject(FEATURED_SLUG) || PROJECTS[0];
  target.innerHTML = `
    <a class="featured__frame reveal" href="project.html?slug=${p.slug}" data-cursor="Explore">
      <img src="${p.heroImage}" alt="${p.title} — featured project" loading="lazy">
    </a>
    <div class="featured__body">
      <h3 class="featured__title reveal">${p.title}</h3>
      <dl class="featured__meta reveal">
        <dt>Category</dt><dd>${p.category}</dd>
        <dt>Year</dt><dd>${p.year}</dd>
      </dl>
      <dl class="featured__meta reveal">
        <dt>Location</dt><dd>${p.location}</dd>
        <dt>Area</dt><dd>${p.area}</dd>
      </dl>
      <dl class="featured__meta reveal">
        <dt>Role</dt><dd>${p.role}</dd>
      </dl>
    </div>
  `;
  initReveals(target);
}

function renderExperiments(target, limit) {
  if (!target || typeof EXPERIMENTS === 'undefined') return;
  const items = limit ? EXPERIMENTS.slice(0, limit) : EXPERIMENTS;
  target.innerHTML = items.map((x, i) => `
    <figure class="experiment-item reveal" style="transition-delay:${(i % 3) * 0.08}s" data-cursor="Explore">
      <img src="${x.image}" alt="${x.title}" loading="lazy">
      <figcaption><span>${x.title}</span><span>${x.type}</span></figcaption>
    </figure>
  `).join('');
  initReveals(target);
}

/* ---------------- Subtle parallax (hero visuals only, respects reduced motion) ---------------- */
function initParallax() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isFine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (reduced || !isFine) return;
  const targets = document.querySelectorAll('[data-parallax]');
  if (!targets.length) return;
  let ticking = false;
  function update() {
    const y = window.scrollY;
    targets.forEach(el => {
      const speed = parseFloat(el.getAttribute('data-parallax')) || 0.15;
      el.style.transform = `translateY(${y * speed}px)`;
    });
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
}
initParallax();
