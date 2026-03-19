/* =========================================================
   ZAPATCH TECHNOLOGIES — MAIN APPLICATION JS
   Full SPA with Page Routing, Dark/Light Mode, Animations
   ========================================================= */

'use strict';

// ─── State ───────────────────────────────────────────────
const state = {
  theme: localStorage.getItem('zt-theme') || 'dark',
  currentPage: 'home',
};

// ─── DOM refs ────────────────────────────────────────────
const app = document.getElementById('app');
const themeToggle = document.getElementById('themeToggle');
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// ─── Apply saved theme ───────────────────────────────────
document.documentElement.setAttribute('data-theme', state.theme);

// ─── Cursor glow ─────────────────────────────────────────
const cursorGlow = document.getElementById('cursor-glow');
document.addEventListener('mousemove', (e) => {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top  = e.clientY + 'px';
});

// ─── Theme Toggle ────────────────────────────────────────
themeToggle.addEventListener('click', () => {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', state.theme);
  localStorage.setItem('zt-theme', state.theme);
});

// ─── Hamburger ───────────────────────────────────────────
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// ─── Navbar scroll shadow ────────────────────────────────
window.addEventListener('scroll', () => {
  navbar.style.boxShadow = window.scrollY > 20
    ? '0 4px 40px rgba(0,0,0,0.25)'
    : 'none';
});

// ─── Navigate ────────────────────────────────────────────
window.navigate = function(page, e) {
  if (e) e.preventDefault();
  state.currentPage = page;
  navLinks.classList.remove('open');
  renderPage(page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Update active nav link
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page);
  });
  return false;
};

// ─── Pages Registry ──────────────────────────────────────
const pages = { home, about, services, solutions, contact };

function renderPage(name) {
  const fn = pages[name] || pages.home;
  app.innerHTML = fn();
  app.scrollTop = 0;
  initPageScripts(name);
}

// ─── Init Page-specific JS ───────────────────────────────
function initPageScripts(name) {
  if (name === 'home') initHomeCounters();
  if (name === 'contact') initContactForm();
  initScrollReveal();
}

// ─── Scroll Reveal ───────────────────────────────────────
function initScrollReveal() {
  const items = app.querySelectorAll('.card, .service-big-card, .solution-row, .value-card, .team-card, .timeline-item');
  items.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.55s ease ${i * 0.07}s, transform 0.55s ease ${i * 0.07}s`;
  });
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  items.forEach(el => obs.observe(el));
}

// ─── Counter animation ───────────────────────────────────
function initHomeCounters() {
  const counters = app.querySelectorAll('[data-counter]');
  counters.forEach(el => {
    const target = parseInt(el.dataset.counter, 10);
    let current = 0;
    const step = Math.ceil(target / 60);
    const interval = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current + (el.dataset.suffix || '');
      if (current >= target) clearInterval(interval);
    }, 25);
  });
}

// ─── Contact Form ────────────────────────────────────────
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    btn.textContent = 'Sending...';
    btn.disabled = true;
    setTimeout(() => {
      showToast('✓ Message sent! We'll be in touch within 24 hours.');
      form.reset();
      btn.textContent = 'Send Message';
      btn.disabled = false;
    }, 1500);
  });
}

function showToast(msg) {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => {
    t.style.animation = 'toastIn 0.4s ease reverse forwards';
    setTimeout(() => t.remove(), 400);
  }, 4000);
}

// ═══════════════════════════════════════════════════════════
//  PAGE: HOME
// ═══════════════════════════════════════════════════════════
function home() {
  return `
  <!-- HERO -->
  <section class="hero">
    <div class="hero-grid-bg"></div>
    <div class="hero-inner">
      <div class="hero-content">
        <div class="hero-eyebrow">Next-Generation Technology</div>
        <h1 class="hero-title">
          We <span class="accent">Connect</span><br/>
          Systems & <span class="accent-2">Power</span><br/>
          the Future
        </h1>
        <p class="hero-sub">
          Zapatch Technologies delivers intelligent, scalable, AI-driven solutions
          that power digital transformation across enterprises, governments, and emerging industries.
        </p>
        <div class="hero-actions">
          <button class="btn-primary" onclick="navigate('services')">
            Explore Services <span>→</span>
          </button>
          <button class="btn-secondary" onclick="navigate('contact')">
            Talk to Us
          </button>
        </div>
        <div class="hero-stats">
          <div class="stat-item">
            <strong><span data-counter="150" data-suffix="+">0</span></strong>
            <span>Projects Delivered</span>
          </div>
          <div class="stat-item">
            <strong><span data-counter="12" data-suffix="+">0</span></strong>
            <span>Industries Served</span>
          </div>
          <div class="stat-item">
            <strong><span data-counter="99" data-suffix="%">0</span></strong>
            <span>Uptime SLA</span>
          </div>
        </div>
      </div>

      <div class="hero-visual">
        <div class="hero-orb hero-orb-1"></div>
        <div class="hero-orb hero-orb-2"></div>
        <div class="hero-orb hero-orb-3"></div>
        <div class="hero-line hero-line-1"></div>
        <div class="hero-line hero-line-2"></div>
        <div class="hero-card-float hcf-1">
          <div class="hcf-icon">🤖</div>
          <div class="hcf-label">AI-Driven Core</div>
          <div class="hcf-sub">INTELLIGENT AUTOMATION</div>
        </div>
        <div class="hero-card-float hcf-2">
          <div class="hcf-icon">☁️</div>
          <div class="hcf-label">Cloud-Native</div>
          <div class="hcf-sub">99.9% HIGH AVAILABILITY</div>
        </div>
        <div class="hero-card-float hcf-3">
          <div class="hcf-icon">🔒</div>
          <div class="hcf-label">Zero-Trust Security</div>
          <div class="hcf-sub">ENTERPRISE GRADE</div>
        </div>
      </div>
    </div>
  </section>

  <!-- TICKER -->
  <div class="ticker-wrap">
    <div class="ticker-inner">
      ${['Enterprise Cloud', 'AI Solutions', 'Cybersecurity', 'EdTech Platforms', 'GovTech', 'Healthcare IT', 'AgriTech', 'Custom Software', 'Biometrics', 'DevOps', 'SaaS Products', 'Digital Transformation',
         'Enterprise Cloud', 'AI Solutions', 'Cybersecurity', 'EdTech Platforms', 'GovTech', 'Healthcare IT', 'AgriTech', 'Custom Software', 'Biometrics', 'DevOps', 'SaaS Products', 'Digital Transformation'].map(t =>
        `<span class="ticker-item"><span class="ticker-dot">◆</span>${t}</span>`
      ).join('')}
    </div>
  </div>

  <!-- WHAT WE DO -->
  <section class="section" style="background: var(--bg-secondary);">
    <div class="section-inner">
      <p class="section-label">What We Do</p>
      <h2 class="section-title">Connected Digital <br/>Ecosystems</h2>
      <p class="section-desc mb-2">We build end-to-end digital ecosystems where infrastructure, applications, data, and intelligence work seamlessly together.</p>

      <div class="grid-3" style="margin-top: 3rem;">
        ${[
          { icon: '⚡', color: 'coral', title: 'AI-Driven Solutions', desc: 'Automation, predictive analytics, intelligent decision-making, and adaptive digital experiences embedded at the core of every system.', tags: ['ML / Deep Learning', 'NLP', 'Computer Vision', 'Automation'] },
          { icon: '☁️', color: 'violet', title: 'Cloud-Native Infrastructure', desc: 'Designed for the cloud from the ground up — high availability, elastic scalability, security-first, and peak performance.', tags: ['AWS / Azure / GCP', 'Kubernetes', 'Terraform', 'CI/CD'] },
          { icon: '🧩', color: 'cyan', title: 'Productized SaaS Platforms', desc: 'Transforming proven solutions into reusable, multi-tenant SaaS platforms serving multiple industries efficiently.', tags: ['Multi-tenancy', 'API-First', 'White-label', 'Subscription'] },
        ].map(c => `
        <div class="card">
          <div class="card-icon">${c.icon}</div>
          <h3 class="card-title">${c.title}</h3>
          <p class="card-text">${c.desc}</p>
          <div class="feature-tags" style="margin-top: 1.25rem;">
            ${c.tags.map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- CORE SERVICES PREVIEW -->
  <section class="section">
    <div class="section-inner">
      <p class="section-label">Core Services</p>
      <h2 class="section-title">Built for Scale. <br/>Designed for Impact.</h2>

      <div class="grid-4" style="margin-top: 3rem;">
        ${[
          { icon: '🏢', label: 'Enterprise & Cloud', chip: 'FOUNDATION', color: 'chip-coral' },
          { icon: '🛡️', label: 'Cybersecurity', chip: 'CRITICAL', color: 'chip-violet' },
          { icon: '📚', label: 'EdTech Systems', chip: 'SCALE', color: 'chip-cyan' },
          { icon: '🏛️', label: 'GovTech & Public Sector', chip: 'SECURE', color: 'chip-green' },
          { icon: '🏥', label: 'Healthcare IT', chip: 'INTEGRATED', color: 'chip-coral' },
          { icon: '🌾', label: 'AgriTech Platforms', chip: 'END-TO-END', color: 'chip-cyan' },
          { icon: '⚙️', label: 'Custom Software', chip: 'TAILORED', color: 'chip-violet' },
          { icon: '🖐️', label: 'Biometric Solutions', chip: 'IDENTITY', color: 'chip-green' },
        ].map(s => `
        <div class="card" style="text-align:center; cursor: pointer;" onclick="navigate('services')">
          <div style="font-size:2.2rem; margin-bottom:1rem;">${s.icon}</div>
          <div class="card-title" style="font-size:0.95rem;">${s.label}</div>
          <div style="margin-top:0.75rem;"><span class="chip ${s.color}">${s.chip}</span></div>
        </div>`).join('')}
      </div>

      <div style="text-align:center; margin-top:2.5rem;">
        <button class="btn-primary" onclick="navigate('services')">View All Services →</button>
      </div>
    </div>
  </section>

  <!-- OUR EDGE -->
  <section class="section" style="background: var(--bg-secondary);">
    <div class="section-inner">
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:4rem; align-items:center;">
        <div>
          <p class="section-label">Our Edge</p>
          <h2 class="section-title">Where Innovation Meets Execution</h2>
          <p style="font-size:1rem; line-height:1.75; color:var(--text-secondary); margin:1.25rem 0 2rem;">
            Zapatch stands at the intersection of innovation and execution — combining enterprise-grade reliability with startup-level agility and speed.
          </p>
          <div style="display:flex; flex-direction:column; gap:1rem;">
            ${[
              { icon: '🤖', t: 'AI-First Approach', d: 'Every solution is designed to learn, adapt, and improve over time.' },
              { icon: '☁️', t: 'Cloud-Native Architecture', d: 'Built for scale, resilience, and future growth from day one.' },
              { icon: '🚀', t: 'SaaS-Driven Model', d: 'Transforming solutions into scalable, productized platforms.' },
              { icon: '⚡', t: 'Hybrid DNA', d: 'Enterprise-grade reliability with startup-level agility.' },
            ].map(e => `
            <div style="display:flex; gap:1rem; align-items:flex-start; padding:1rem; background:var(--bg-card); border:1px solid var(--border); border-radius:14px;">
              <span style="font-size:1.4rem; flex-shrink:0;">${e.icon}</span>
              <div>
                <div style="font-family:var(--font-display); font-weight:700; font-size:0.95rem; margin-bottom:0.3rem;">${e.t}</div>
                <div style="font-size:0.85rem; color:var(--text-secondary);">${e.d}</div>
              </div>
            </div>`).join('')}
          </div>
        </div>
        <div>
          <div style="background:var(--bg-card); border:1px solid var(--border); border-radius:24px; padding:2.5rem; box-shadow:var(--shadow-card);">
            <div style="font-family:var(--font-display); font-weight:800; font-size:1.2rem; margin-bottom:2rem; letter-spacing:-0.02em;">Technology Stack</div>
            <div class="tech-badges">
              ${['Python', 'Node.js', 'React', 'Go', 'Kubernetes', 'Terraform', 'AWS', 'Azure', 'GCP', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Kafka', 'Docker', 'GraphQL', 'REST API', 'gRPC', 'Nginx', 'CI/CD', 'Prometheus', 'Grafana'].map(t => `<span class="tech-badge">${t}</span>`).join('')}
            </div>
            <div style="margin-top:2rem; padding-top:1.5rem; border-top:1px solid var(--border);">
              <div style="font-family:var(--font-mono); font-size:0.72rem; letter-spacing:0.12em; text-transform:uppercase; color:var(--text-muted); margin-bottom:0.75rem;">Compliance & Standards</div>
              <div style="display:flex; gap:0.6rem; flex-wrap:wrap;">
                ${['ISO 27001', 'SOC 2', 'GDPR', 'NDPR', 'HIPAA'].map(c => `<span class="chip chip-coral">${c}</span>`).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <div class="cta-band">
    <h2>Ready to Transform Your Digital Infrastructure?</h2>
    <p>Let's build the future together — intelligently, at scale.</p>
    <button class="btn-white" onclick="navigate('contact')">Start a Conversation →</button>
  </div>
  `;
}

// ═══════════════════════════════════════════════════════════
//  PAGE: SERVICES
// ═══════════════════════════════════════════════════════════
function services() {
  const serviceList = [
    {
      icon: '🏢', title: 'Enterprise & Cloud Solutions',
      sub: 'Foundation for Growth',
      desc: 'Design and deployment of enterprise systems, cloud infrastructure, DevOps pipelines, and managed IT services to support business continuity and accelerated growth. We architect environments that are resilient by design and scalable by default.',
      tags: ['Cloud Migration', 'DevOps & CI/CD', 'Managed Services', 'Disaster Recovery', 'API Gateway', 'Microservices', 'Enterprise Integration', 'Performance Engineering'],
    },
    {
      icon: '🛡️', title: 'Cybersecurity & Digital Resilience',
      sub: 'Protect What Matters',
      desc: 'Advanced threat intelligence, endpoint protection, vulnerability management, and data security frameworks to protect critical systems and infrastructure. We implement zero-trust architectures and comprehensive security operations.',
      tags: ['Threat Intelligence', 'SIEM / SOC', 'Penetration Testing', 'Zero Trust', 'Identity & Access', 'Data Encryption', 'Incident Response', 'Compliance'],
    },
    {
      icon: '📚', title: 'EdTech & Digital Learning Systems',
      sub: 'Education at Scale',
      desc: 'Robust examination platforms, learning management systems, and digital education infrastructure built for massive scale and reliability. Powering national examination bodies, universities, and corporate training programs.',
      tags: ['LMS Platforms', 'CBT Examination', 'Live Proctoring', 'Analytics Dashboard', 'Mobile Learning', 'Content Management', 'Certification Engine', 'Multi-site'],
    },
    {
      icon: '🏛️', title: 'Public Sector & GovTech',
      sub: 'Secure National Systems',
      desc: 'Secure national systems, identity platforms, and workflow automation built to handle sensitive citizen data, government operations, and public service delivery at a national scale.',
      tags: ['Digital Identity', 'e-Government', 'Workflow Automation', 'FOIA Compliance', 'Citizen Portals', 'National Registries', 'Inter-agency Integration', 'Audit Trails'],
    },
    {
      icon: '🏥', title: 'Healthcare IT Systems',
      sub: 'Integrated Care Platforms',
      desc: 'Integrated healthcare management, electronic health records, and data systems designed to improve patient outcomes, streamline clinical workflows, and ensure the highest standards of data privacy and compliance.',
      tags: ['EHR / EMR', 'HL7 / FHIR', 'Telemedicine', 'Lab Integration', 'Patient Portal', 'Clinical Analytics', 'HIPAA Compliant', 'Medical Billing'],
    },
    {
      icon: '🌾', title: 'AgriTech Platforms',
      sub: 'From Farm to Market',
      desc: 'End-to-end platforms connecting producers, supply chains, and markets. Digitizing agriculture from field-level IoT monitoring to market access, payment, and logistics management.',
      tags: ['Farm Management', 'Supply Chain Tracking', 'Market Linkage', 'IoT Sensors', 'Crop Analytics', 'Weather Integration', 'Mobile-First', 'Offline Capability'],
    },
    {
      icon: '⚙️', title: 'Custom Software & Infrastructure Engineering',
      sub: 'Tailored to the Problem',
      desc: 'Tailored application development, systems integration, hardware deployment, and biometric solutions designed to solve real-world operational challenges where off-the-shelf products fall short.',
      tags: ['Bespoke Development', 'Systems Integration', 'Hardware Deployment', 'Biometrics', 'IoT Firmware', 'Legacy Modernization', 'Embedded Systems', 'Protocol Design'],
    },
  ];

  return `
  <section class="services-hero">
    <div class="section-inner" style="position:relative; z-index:1; text-align:center;">
      <p class="section-label">What We Offer</p>
      <h1 class="section-title" style="max-width:700px; margin:0 auto 1.25rem;">
        Full-Spectrum Technology Services
      </h1>
      <p class="section-desc" style="margin:0 auto; text-align:center; max-width:580px;">
        From cloud infrastructure to AI platforms — every service is built to solve real operational problems at enterprise scale.
      </p>
    </div>
  </section>

  <section class="section" style="background:var(--bg-secondary);">
    <div class="section-inner">
      <div style="display:flex; flex-direction:column; gap:1.75rem;">
        ${serviceList.map(s => `
        <div class="service-big-card">
          <div class="sbc-header">
            <div class="sbc-icon">${s.icon}</div>
            <div>
              <div class="sbc-title">${s.title}</div>
              <div class="sbc-sub">${s.sub}</div>
            </div>
          </div>
          <div class="sbc-body">
            <p>${s.desc}</p>
            <div class="feature-tags">
              ${s.tags.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <div class="cta-band">
    <h2>Need a Custom Solution?</h2>
    <p>Every challenge is unique. Let's architect the right solution together.</p>
    <button class="btn-white" onclick="navigate('contact')">Request a Consultation →</button>
  </div>
  `;
}

// ═══════════════════════════════════════════════════════════
//  PAGE: SOLUTIONS
// ═══════════════════════════════════════════════════════════
function solutions() {
  const items = [
    {
      num: '01', icon: '🤖', title: 'AI & Intelligent Automation',
      desc: 'We embed intelligence at the core—enabling machines to learn, decide, and act. From natural language processing to computer vision, our AI-first architecture transforms how enterprises operate.',
      bullets: ['Predictive analytics & forecasting engines', 'Intelligent document processing & OCR', 'Conversational AI and virtual assistants', 'Automated quality control & anomaly detection', 'Real-time recommendation systems'],
    },
    {
      num: '02', icon: '🔐', title: 'Enterprise Security Operations Center',
      desc: 'A holistic security architecture combining continuous monitoring, threat intelligence, and rapid response — protecting critical systems before, during, and after incidents.',
      bullets: ['24/7 Security Monitoring & SIEM', 'Advanced Persistent Threat (APT) defense', 'Zero-trust network architecture', 'Regulatory compliance automation (ISO, SOC2, NDPR)', 'Cyber incident response & forensics'],
      reverse: true,
    },
    {
      num: '03', icon: '📡', title: 'National Digital Infrastructure',
      desc: 'Building the backbone of tomorrow's digital nations — sovereign cloud environments, national identity platforms, and interoperable e-government systems.',
      bullets: ['National identity & biometric platforms', 'e-Government service portals', 'Sovereign cloud & data residency', 'Inter-agency data sharing frameworks', 'Digital payments & financial inclusion'],
    },
    {
      num: '04', icon: '🎓', title: 'Examination & Certification Ecosystem',
      desc: 'A full-stack digital examination platform trusted to run high-stakes tests at national scale — with military-grade proctoring, high availability, and real-time reporting.',
      bullets: ['Computer-based testing (CBT) engine', 'Live and AI-powered remote proctoring', 'Multi-centre simultaneous deployment', 'Instant result processing & analytics', 'Tamper-proof certificate management'],
      reverse: true,
    },
    {
      num: '05', icon: '🌾', title: 'Agricultural Supply Chain Intelligence',
      desc: 'End-to-end digitization of the agricultural value chain — from farm management and produce tracking to market linkage and payments.',
      bullets: ['Farm registration & profile management', 'Real-time crop monitoring (IoT integration)', 'Off-taker & buyer marketplace', 'Logistics & cold chain management', 'Farmer credit scoring & payments'],
    },
  ];

  return `
  <section class="services-hero">
    <div class="section-inner" style="position:relative; z-index:1; text-align:center;">
      <p class="section-label">Industry Solutions</p>
      <h1 class="section-title" style="max-width:700px; margin:0 auto 1.25rem;">
        Transformative Solutions for<br/>Complex Challenges
      </h1>
      <p class="section-desc" style="margin:0 auto; text-align:center; max-width:580px;">
        Deep, verticalized solutions built with domain expertise and enterprise-grade engineering.
      </p>
    </div>
  </section>

  <section class="section">
    <div class="section-inner">
      ${items.map(item => `
      <div class="solution-row${item.reverse ? ' reverse' : ''}">
        <div>
          <div class="sol-number">${item.num}</div>
          <h2 class="sol-title">${item.title}</h2>
          <p style="font-size:0.96rem; line-height:1.75; color:var(--text-secondary);">${item.desc}</p>
          <ul class="sol-list">
            ${item.bullets.map(b => `<li>${b}</li>`).join('')}
          </ul>
          <div style="margin-top:1.75rem;">
            <button class="btn-primary" onclick="navigate('contact')">Learn More →</button>
          </div>
        </div>
        <div class="sol-visual">
          <div class="sol-visual-inner">
            <div class="sol-big-icon">${item.icon}</div>
            <div class="sol-visual-label">${item.title}</div>
          </div>
          <div style="position:absolute; inset:0; background:var(--hero-mesh); pointer-events:none;"></div>
        </div>
      </div>`).join('')}
    </div>
  </section>

  <div class="cta-band">
    <h2>Don't See Your Industry?</h2>
    <p>We design custom solutions for any vertical. Let's talk about yours.</p>
    <button class="btn-white" onclick="navigate('contact')">Get in Touch →</button>
  </div>
  `;
}

// ═══════════════════════════════════════════════════════════
//  PAGE: ABOUT
// ═══════════════════════════════════════════════════════════
function about() {
  return `
  <section class="about-hero section" style="padding-top:8rem;">
    <div class="section-inner" style="position:relative; z-index:1;">
      <div style="max-width:800px;">
        <p class="section-label">Who We Are</p>
        <h1 class="section-title">Built at the Intersection of<br/><span class="text-coral">Innovation</span> & Execution</h1>
        <p style="font-size:1.1rem; line-height:1.8; color:var(--text-secondary); margin-top:1.25rem; max-width:680px;">
          Zapatch Technologies is a next-generation, full-service technology company operating as a hybrid organization — combining the execution strength of a corporate IT firm with the innovation speed of a modern startup.
        </p>
        <div style="display:flex; gap:1rem; margin-top:2rem; flex-wrap:wrap;">
          <span class="chip chip-coral">AI-First</span>
          <span class="chip chip-violet">Cloud-Native</span>
          <span class="chip chip-cyan">SaaS-Driven</span>
          <span class="chip chip-green">Hybrid DNA</span>
        </div>
      </div>
    </div>
  </section>

  <section class="section" style="background:var(--bg-secondary);">
    <div class="section-inner">
      <div class="grid-2">
        <div>
          <p class="section-label">Our Vision</p>
          <h2 style="font-family:var(--font-display); font-weight:800; font-size:1.9rem; letter-spacing:-0.03em; margin-bottom:1.25rem; line-height:1.1;">
            A Globally Recognized Technology Partner
          </h2>
          <p style="font-size:0.97rem; line-height:1.8; color:var(--text-secondary);">
            To become a globally recognized technology partner that builds intelligent systems, fixes critical gaps, and accelerates digital transformation at scale — serving enterprises, governments, and emerging industries worldwide.
          </p>
          <div style="margin-top:2rem; padding:1.5rem; background:var(--bg-card); border:1px solid var(--border); border-left: 3px solid var(--claude-coral); border-radius:0 14px 14px 0;">
            <p style="font-family:var(--font-display); font-weight:600; font-size:1.05rem; font-style:italic; color:var(--text-primary); line-height:1.6;">
              "At Zapatch, we don't just build technology — we connect systems, fix inefficiencies, and power the future."
            </p>
          </div>
        </div>
        <div>
          <p class="section-label">Our Philosophy</p>
          <div style="display:flex; flex-direction:column; gap:1rem; margin-top:0.75rem;">
            ${[
              { icon: '🔗', t: 'Connect Systems', d: 'We bridge silos — legacy to modern, people to data, infrastructure to intelligence.' },
              { icon: '🔧', t: 'Fix Inefficiencies', d: 'We identify operational gaps and engineer precise, scalable solutions to eliminate them.' },
              { icon: '⚡', t: 'Power the Future', d: 'Every project we deliver advances digital transformation for those we serve.' },
              { icon: '🌍', t: 'Think Global, Build Local', d: 'World-class technology built with deep local context and domain expertise.' },
            ].map(p => `
            <div style="display:flex; gap:1rem; padding:1.25rem; background:var(--bg-card); border:1px solid var(--border); border-radius:14px;">
              <span style="font-size:1.5rem; flex-shrink:0;">${p.icon}</span>
              <div>
                <div style="font-family:var(--font-display); font-weight:700; font-size:0.95rem; margin-bottom:0.3rem;">${p.t}</div>
                <div style="font-size:0.85rem; color:var(--text-secondary); line-height:1.6;">${p.d}</div>
              </div>
            </div>`).join('')}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- VALUES -->
  <section class="section">
    <div class="section-inner">
      <p class="section-label">Core Values</p>
      <h2 class="section-title mb-2">What Drives Us Forward</h2>
      <div class="values-grid">
        ${[
          { num: '01', icon: '🏆', t: 'Excellence in Execution', d: 'We hold ourselves to the highest engineering and delivery standards on every project, regardless of size.' },
          { num: '02', icon: '🤝', t: 'Client Partnership', d: 'We embed deeply with our clients — understanding their mission, constraints, and ambitions before writing a single line of code.' },
          { num: '03', icon: '🔬', t: 'Intellectual Curiosity', d: 'We continuously research, experiment, and adopt emerging technologies to keep our clients ahead of the curve.' },
          { num: '04', icon: '🌱', t: 'Sustainable Growth', d: 'We build for the long term — architectures that scale gracefully and relationships that endure.' },
        ].map(v => `
        <div class="value-card" data-num="${v.num}">
          <div style="font-size:2rem; margin-bottom:1rem;">${v.icon}</div>
          <h3 style="font-family:var(--font-display); font-weight:700; font-size:1.05rem; margin-bottom:0.65rem;">${v.t}</h3>
          <p style="font-size:0.88rem; line-height:1.7; color:var(--text-secondary);">${v.d}</p>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- TEAM -->
  <section class="section" style="background:var(--bg-secondary);">
    <div class="section-inner">
      <p class="section-label">Leadership</p>
      <h2 class="section-title mb-2">The Minds Behind Zapatch</h2>
      <div class="grid-4">
        ${[
          { emoji: '👨‍💼', name: 'Adebayo Okonkwo', role: 'CEO & Co-Founder' },
          { emoji: '👩‍💻', name: 'Chidinma Eze', role: 'CTO & Co-Founder' },
          { emoji: '👨‍🔬', name: 'Emeka Nwosu', role: 'Chief AI Officer' },
          { emoji: '👩‍💼', name: 'Fatima Al-Hassan', role: 'Chief Security Officer' },
        ].map(m => `
        <div class="team-card">
          <div class="team-avatar">${m.emoji}</div>
          <div class="team-info">
            <div class="team-name">${m.name}</div>
            <div class="team-role">${m.role}</div>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- MILESTONES -->
  <section class="section">
    <div class="section-inner">
      <div class="grid-2" style="gap:4rem;">
        <div>
          <p class="section-label">Our Journey</p>
          <h2 class="section-title" style="margin-bottom:2.5rem;">Milestones That<br/>Shaped Us</h2>
          <div class="timeline">
            ${[
              { year: '2019', t: 'Founded', d: 'Zapatch Technologies incorporated with a mission to connect systems and power the future.' },
              { year: '2020', t: 'First Enterprise Contract', d: 'Delivered our first large-scale cloud migration for a Tier-1 financial institution.' },
              { year: '2021', t: 'GovTech Entry', d: 'Won a national digital identity infrastructure contract — our first government deployment.' },
              { year: '2022', t: 'SaaS Launch', d: 'Launched our first productized SaaS platform for the EdTech sector, reaching 500K+ users.' },
              { year: '2023', t: 'Regional Expansion', d: 'Opened regional offices and expanded operations across West and East Africa.' },
              { year: '2024', t: 'AI Division', d: 'Established dedicated AI & ML practice with 40+ data scientists and ML engineers.' },
              { year: '2025', t: 'Global Reach', d: 'Projects spanning 15 countries. Named a Top 50 emerging technology company.' },
            ].map(m => `
            <div class="timeline-item">
              <div class="timeline-year">${m.year}</div>
              <div class="timeline-title">${m.t}</div>
              <div class="timeline-text">${m.d}</div>
            </div>`).join('')}
          </div>
        </div>
        <div style="position:sticky; top:100px; align-self:start;">
          <div style="background:var(--bg-card); border:1px solid var(--border); border-radius:24px; padding:2.5rem; box-shadow:var(--shadow-card);">
            <h3 style="font-family:var(--font-display); font-weight:800; font-size:1.2rem; margin-bottom:2rem;">Zapatch by the Numbers</h3>
            <div style="display:flex; flex-direction:column; gap:1.5rem;">
              ${[
                { n: '150+', l: 'Projects Delivered' },
                { n: '12+', l: 'Industries Served' },
                { n: '50+', l: 'Enterprise Clients' },
                { n: '15', l: 'Countries Active' },
                { n: '200+', l: 'Team Members' },
                { n: '99.9%', l: 'Uptime SLA' },
              ].map(s => `
              <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:1.25rem; border-bottom:1px solid var(--border);">
                <span style="font-family:var(--font-display); font-weight:800; font-size:1.8rem; color:var(--claude-coral); letter-spacing:-0.03em;">${s.n}</span>
                <span style="font-size:0.85rem; color:var(--text-secondary); font-family:var(--font-mono); letter-spacing:0.06em;">${s.l}</span>
              </div>`).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="cta-band">
    <h2>Join Us on This Journey</h2>
    <p>We're always looking for brilliant minds and bold partnerships.</p>
    <button class="btn-white" onclick="navigate('contact')">Connect With Us →</button>
  </div>
  `;
}

// ═══════════════════════════════════════════════════════════
//  PAGE: CONTACT
// ═══════════════════════════════════════════════════════════
function contact() {
  return `
  <section class="services-hero">
    <div class="section-inner" style="position:relative; z-index:1; text-align:center;">
      <p class="section-label">Get in Touch</p>
      <h1 class="section-title" style="max-width:600px; margin:0 auto 1.25rem;">Let's Build Something<br/><span class="text-coral">Remarkable</span> Together</h1>
      <p class="section-desc" style="margin:0 auto; text-align:center;">
        Whether you're looking to modernize infrastructure, launch a new product, or transform your operations — we're ready to help.
      </p>
    </div>
  </section>

  <section class="section" style="background:var(--bg-secondary);">
    <div class="section-inner">
      <div class="contact-wrap">
        <div class="contact-info">
          <p class="section-label">Reach Us</p>
          <h2>Start the Conversation</h2>
          <p style="font-size:0.96rem; line-height:1.75; color:var(--text-secondary); margin:1rem 0 2rem;">
            Our team is ready to discuss your needs, evaluate your challenges, and design a solution architecture tailored to your goals.
          </p>

          <div class="contact-detail">
            <div class="cd-icon">📍</div>
            <div>
              <div class="cd-label">Headquarters</div>
              <div class="cd-value">Victoria Island, Lagos, Nigeria</div>
            </div>
          </div>
          <div class="contact-detail">
            <div class="cd-icon">📧</div>
            <div>
              <div class="cd-label">Email</div>
              <div class="cd-value">hello@zapatch.tech</div>
            </div>
          </div>
          <div class="contact-detail">
            <div class="cd-icon">📞</div>
            <div>
              <div class="cd-label">Phone</div>
              <div class="cd-value">+234 700 ZAPATCH</div>
            </div>
          </div>
          <div class="contact-detail">
            <div class="cd-icon">🌐</div>
            <div>
              <div class="cd-label">Website</div>
              <div class="cd-value">www.zapatch.tech</div>
            </div>
          </div>

          <div style="margin-top:2.5rem;">
            <div style="font-family:var(--font-mono); font-size:0.7rem; letter-spacing:0.12em; text-transform:uppercase; color:var(--text-muted); margin-bottom:1rem;">Regional Offices</div>
            <div style="display:flex; flex-direction:column; gap:0.65rem;">
              ${['Abuja, Nigeria', 'Nairobi, Kenya', 'Accra, Ghana', 'London, United Kingdom'].map(o => `
              <div style="display:flex; align-items:center; gap:0.6rem; font-size:0.9rem; color:var(--text-secondary);">
                <span style="color:var(--claude-coral);">→</span> ${o}
              </div>`).join('')}
            </div>
          </div>
        </div>

        <div class="contact-form">
          <div class="form-title">Send Us a Message</div>
          <div class="form-sub">We respond within 24 hours on business days</div>
          <form id="contactForm">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">First Name *</label>
                <input class="form-input" type="text" placeholder="John" required />
              </div>
              <div class="form-group">
                <label class="form-label">Last Name *</label>
                <input class="form-input" type="text" placeholder="Doe" required />
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Work Email *</label>
              <input class="form-input" type="email" placeholder="john@company.com" required />
            </div>
            <div class="form-group">
              <label class="form-label">Company / Organization</label>
              <input class="form-input" type="text" placeholder="Acme Corp" />
            </div>
            <div class="form-group">
              <label class="form-label">Service Interest</label>
              <select class="form-select">
                <option value="">Select a service area...</option>
                <option>Enterprise & Cloud Solutions</option>
                <option>Cybersecurity & Digital Resilience</option>
                <option>EdTech & Digital Learning Systems</option>
                <option>Public Sector & GovTech</option>
                <option>Healthcare IT Systems</option>
                <option>AgriTech Platforms</option>
                <option>Custom Software Engineering</option>
                <option>AI & Intelligent Automation</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Message *</label>
              <textarea class="form-textarea" rows="5" placeholder="Tell us about your project, challenge, or goals..." required></textarea>
            </div>
            <button type="submit" class="form-submit">Send Message →</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  `;
}

// ─── BOOT ─────────────────────────────────────────────────
renderPage('home');
document.querySelector('[data-page="home"]').classList.add('active');
