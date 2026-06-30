/* ==========================================================
   ZAPATCH TECHNOLOGIES — pages/home.js
   ========================================================== */
'use strict';

function homePage() {

  /* ticker items (doubled for seamless loop) */
  const ticks = [
    'Enterprise Cloud','AI Solutions','Cybersecurity','EdTech Platforms','GovTech',
    'Healthcare IT','AgriTech','Custom Software','Biometrics','DevOps','SaaS Products','Digital Transformation',
    'Enterprise Cloud','AI Solutions','Cybersecurity','EdTech Platforms','GovTech',
    'Healthcare IT','AgriTech','Custom Software','Biometrics','DevOps','SaaS Products','Digital Transformation',
  ];

  const services8 = [
    { icon:'🏢', label:'Enterprise & Cloud',      chip:'FOUNDATION', cls:'chip-coral'  },
    { icon:'🛡️', label:'Cybersecurity',            chip:'CRITICAL',   cls:'chip-violet' },
    { icon:'📚', label:'EdTech Systems',           chip:'SCALE',      cls:'chip-cyan'   },
    { icon:'🏛️', label:'GovTech & Public Sector',  chip:'SECURE',     cls:'chip-green'  },
    { icon:'🏥', label:'Healthcare IT',            chip:'INTEGRATED', cls:'chip-coral'  },
    { icon:'🌾', label:'AgriTech Platforms',       chip:'END-TO-END', cls:'chip-cyan'   },
    { icon:'⚙️', label:'Custom Software',          chip:'TAILORED',   cls:'chip-violet' },
    { icon:'🖐️', label:'Biometric Solutions',      chip:'IDENTITY',   cls:'chip-green'  },
  ];

  const edge = [
    { icon:'🤖', t:'AI-First Approach',         d:'Every solution learns, adapts, and improves over time.' },
    { icon:'☁️', t:'Cloud-Native Architecture',  d:'Built for scale, resilience, and future growth from day one.' },
    { icon:'🚀', t:'SaaS-Driven Model',          d:'Transforming solutions into scalable, productized platforms.' },
    { icon:'⚡', t:'Hybrid DNA',                 d:'Enterprise-grade reliability with startup-level agility.' },
  ];

  const stack = [
    'Python','Node.js','React','Go','Kubernetes','Terraform','AWS','Azure','GCP',
    'PostgreSQL','MongoDB','Redis','Elasticsearch','Kafka','Docker',
    'GraphQL','REST API','gRPC','Nginx','CI/CD','Prometheus','Grafana',
  ];

  const compliance = ['ISO 27001','SOC 2','GDPR','NDPR','HIPAA'];

  return /* html */`

  <!-- ── HERO BAND (hero + ticker share this background) ── -->
  <div class="hero-band">

  <!-- ── HERO ── -->
  <section class="hero">
    <div class="hero-grid"></div>
    <div class="hero-inner">

      <!-- Left content -->
      <div class="hero-content">
        <h1 class="hero-title">
          We <span class="accent">Patch</span><br>
          Systems &amp; Power <br>
          the Future
        </h1>
        <p class="hero-sub">
          Zapatch Technologies delivers intelligent, scalable, AI-driven solutions
          that power digital transformation across enterprises, governments,
          and emerging industries.
        </p>
        <div class="hero-actions">
          <button class="btn-primary" onclick="navigate('services')">Explore Services →</button>
          <button class="btn-secondary" onclick="navigate('contact')">Talk to Us</button>
        </div>
        <div class="hero-stats">
          <div class="stat-item">
            <strong><span data-counter="150" data-suffix="+">0+</span></strong>
            <span>Projects Delivered</span>
          </div>
          <div class="stat-item">
            <strong><span data-counter="12" data-suffix="+">0+</span></strong>
            <span>Industries Served</span>
          </div>
          <div class="stat-item">
            <strong><span data-counter="99" data-suffix="%">0%</span></strong>
            <span>Uptime SLA</span>
          </div>
        </div>
      </div>

      <!-- Right visual -->
      <div class="hero-visual">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="orb orb-3"></div>
        <div class="hero-line line-1"></div>
        <div class="hero-line line-2"></div>
        <div class="float-card fc-1">
          <div class="fc-icon">🤖</div>
          <div class="fc-label">AI-Driven Core</div>
          <div class="fc-sub">INTELLIGENT AUTOMATION</div>
        </div>
        <div class="float-card fc-2">
          <div class="fc-icon">☁️</div>
          <div class="fc-label">Cloud-Native</div>
          <div class="fc-sub">99.9% HIGH AVAILABILITY</div>
        </div>
        <div class="float-card fc-3">
          <div class="fc-icon">🔒</div>
          <div class="fc-label">Zero-Trust Security</div>
          <div class="fc-sub">ENTERPRISE GRADE</div>
        </div>
      </div>

    </div>
  </section>

  <!-- ── TICKER ── -->
  <div class="ticker-wrap">
    <div class="ticker-inner">
      ${ticks.map(t => `<span class="ticker-item"><span class="ticker-dot">◆</span>${t}</span>`).join('')}
    </div>
  </div>

  </div><!-- /.hero-band -->

  <!-- ── WHAT WE DO ── -->
  <section class="section bg-alt">
    <div class="section-inner">
      <span class="section-label">What We Do</span>
      <h2 class="section-title">Connected Digital<br>Ecosystems</h2>
      <p class="section-desc">We build end-to-end digital ecosystems where infrastructure, applications, data, and intelligence work seamlessly together.</p>

      <div class="grid-3" style="margin-top:3rem">
        ${[
          { icon:'⚡', title:'AI-Driven Solutions',
            desc:'Automation, predictive analytics, and adaptive digital experiences embedded at the core of every system.',
            tags:['ML / Deep Learning','NLP','Computer Vision','Automation'] },
          { icon:'☁️', title:'Cloud-Native Infrastructure',
            desc:'Designed for the cloud from the ground up — high availability, elastic scalability, security-first.',
            tags:['AWS / Azure / GCP','Kubernetes','Terraform','CI/CD'] },
          { icon:'🧩', title:'Productized SaaS Platforms',
            desc:'Transforming proven solutions into reusable, multi-tenant SaaS platforms serving multiple industries.',
            tags:['Multi-tenancy','API-First','White-label','Subscription'] },
        ].map(c => `
        <div class="card">
          <div class="card-icon">${c.icon}</div>
          <h3 class="card-title">${c.title}</h3>
          <p class="card-text">${c.desc}</p>
          <div class="tags" style="margin-top:1.25rem">${c.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- ── CORE SERVICES GRID ── -->
  <section class="section">
    <div class="section-inner">
      <span class="section-label">Core Services</span>
      <h2 class="section-title">Built for Scale.<br>Designed for Impact.</h2>

      <div class="grid-4" style="margin-top:3rem">
        ${services8.map(s => `
        <div class="card" style="text-align:center;cursor:pointer" onclick="navigate('services')">
          <div style="font-size:2.2rem;margin-bottom:1rem">${s.icon}</div>
          <div class="card-title" style="font-size:.92rem">${s.label}</div>
          <div style="margin-top:.75rem"><span class="chip ${s.cls}">${s.chip}</span></div>
        </div>`).join('')}
      </div>

      <div style="text-align:center;margin-top:2.5rem">
        <button class="btn-primary" onclick="navigate('services')">View All Services →</button>
      </div>
    </div>
  </section>

  <!-- ── OUR EDGE ── -->
  <section class="section bg-alt">
    <div class="section-inner">
      <div class="edge-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center">

        <div>
          <span class="section-label">Our Edge</span>
          <h2 class="section-title">Where Innovation<br>Meets Execution</h2>
          <p style="font-size:1rem;line-height:1.75;color:var(--text-2);margin:1.25rem 0 2rem">
            Zapatch stands at the intersection of innovation and execution —
            combining enterprise-grade reliability with startup-level agility.
          </p>
          <div style="display:flex;flex-direction:column;gap:1rem">
            ${edge.map(e => `
            <div style="display:flex;gap:1rem;align-items:flex-start;padding:1rem;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-md)">
              <span style="font-size:1.4rem;flex-shrink:0">${e.icon}</span>
              <div>
                <div style="font-family:var(--font-display);font-weight:700;font-size:.95rem;margin-bottom:.3rem">${e.t}</div>
                <div style="font-size:.85rem;color:var(--text-2)">${e.d}</div>
              </div>
            </div>`).join('')}
          </div>
        </div>

        <div class="tech-stack-section" style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-xl);padding:2.5rem;box-shadow:var(--shadow)">
          <div style="font-family:var(--font-display);font-weight:800;font-size:1.2rem;margin-bottom:2rem;letter-spacing:-.02em">Technology Stack</div>
          <div class="tech-wrap">${stack.map(t => `<span class="tech-badge">${t}</span>`).join('')}</div>
          <div style="margin-top:2rem;padding-top:1.5rem;border-top:1px solid var(--border)">
            <div style="font-family:var(--font-mono);font-size:.68rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-3);margin-bottom:.75rem">Compliance &amp; Standards</div>
            <div style="display:flex;gap:.6rem;flex-wrap:wrap">${compliance.map(c => `<span class="chip chip-coral">${c}</span>`).join('')}</div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ── CTA ── -->
  <div class="cta-band">
    <h2>Ready to Transform Your Digital Infrastructure?</h2>
    <p>Let's build the future together — intelligently, at scale.</p>
    <button class="btn-white" onclick="navigate('contact')">Start a Conversation →</button>
  </div>
  `;
}
