/* ==========================================================
   ZAPATCH TECHNOLOGIES — pages/about.js
   ========================================================== */
'use strict';

function aboutPage() {

  const philosophy = [
    { icon:'🔗', t:'Connect Systems',          d:'We bridge silos — legacy to modern, people to data, infrastructure to intelligence.' },
    { icon:'🔧', t:'Fix Inefficiencies',        d:'We identify operational gaps and engineer precise, scalable solutions to eliminate them.' },
    { icon:'⚡', t:'Power the Future',          d:'Every project we deliver advances digital transformation for those we serve.' },
    { icon:'🌍', t:'Think Global, Build Local', d:'World-class technology built with deep local context and domain expertise.' },
  ];

  const values = [
    { num:'01', icon:'🏆', t:'Excellence in Execution',  d:'We hold ourselves to the highest engineering and delivery standards on every project, regardless of scale.' },
    { num:'02', icon:'🤝', t:'Client Partnership',       d:'We embed deeply with clients — understanding their mission, constraints, and ambitions before writing a single line of code.' },
    { num:'03', icon:'🔬', t:'Intellectual Curiosity',   d:'We continuously research, experiment, and adopt emerging technologies to keep our clients ahead of the curve.' },
    { num:'04', icon:'🌱', t:'Sustainable Growth',       d:'We build for the long term — architectures that scale gracefully and relationships that endure.' },
  ];

  const team = [
    { e:'👨‍💼', name:'Adebayo Okonkwo',  role:'CEO & Co-Founder' },
    { e:'👩‍💻', name:'Chidinma Eze',     role:'CTO & Co-Founder' },
    { e:'👨‍🔬', name:'Emeka Nwosu',      role:'Chief AI Officer' },
    { e:'👩‍💼', name:'Fatima Al-Hassan', role:'Chief Security Officer' },
  ];

  const milestones = [
    { year:'2019', t:'Founded',               d:'Zapatch Technologies incorporated with a mission to connect systems and power the future.' },
    { year:'2020', t:'First Enterprise Deal', d:'Delivered our first large-scale cloud migration for a Tier-1 financial institution.' },
    { year:'2021', t:'GovTech Entry',         d:'Won a national digital identity infrastructure contract — our first government deployment.' },
    { year:'2022', t:'SaaS Launch',           d:'Launched our first productized SaaS platform for the EdTech sector, reaching 500K+ users.' },
    { year:'2023', t:'Regional Expansion',    d:'Opened regional offices and expanded operations across West and East Africa.' },
    { year:'2024', t:'AI Division',           d:'Established a dedicated AI & ML practice with 40+ data scientists and ML engineers.' },
    { year:'2025', t:'Global Reach',          d:'Projects spanning 15 countries. Named a Top 50 emerging technology company.' },
  ];

  const stats = [
    { n:'150+', l:'Projects Delivered' },
    { n:'12+',  l:'Industries Served'  },
    { n:'50+',  l:'Enterprise Clients' },
    { n:'15',   l:'Countries Active'   },
    { n:'200+', l:'Team Members'       },
    { n:'99.9%',l:'Uptime SLA'         },
  ];

  return /* html */`

  <!-- ── ABOUT HERO ── -->
  <section class="section" style="background:var(--hero-grad);padding-top:8rem;position:relative;overflow:hidden">
    <div style="position:absolute;inset:0;background:var(--hero-mesh);pointer-events:none"></div>
    <div class="section-inner" style="position:relative;z-index:1">
      <div style="max-width:800px">
        <span class="section-label">Who We Are</span>
        <h1 class="section-title">
          Built at the Intersection of<br>
          <span class="text-coral">Innovation</span> &amp; Execution
        </h1>
        <p style="font-size:1.1rem;line-height:1.8;color:var(--text-2);margin-top:1.25rem;max-width:680px">
          Zapatch Technologies is a next-generation, full-service technology company operating as a
          hybrid organization — combining the execution strength of a corporate IT firm with the
          innovation speed of a modern startup.
        </p>
        <div style="display:flex;gap:1rem;margin-top:2rem;flex-wrap:wrap">
          <span class="chip chip-coral">AI-First</span>
          <span class="chip chip-violet">Cloud-Native</span>
          <span class="chip chip-cyan">SaaS-Driven</span>
          <span class="chip chip-green">Hybrid DNA</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ── VISION & PHILOSOPHY ── -->
  <section class="section bg-alt">
    <div class="section-inner">
      <div class="grid-2">

        <div>
          <span class="section-label">Our Vision</span>
          <h2 style="font-family:var(--font-display);font-weight:800;font-size:1.9rem;letter-spacing:-.03em;margin-bottom:1.25rem;line-height:1.1">
            A Globally Recognized Technology Partner
          </h2>
          <p style="font-size:.97rem;line-height:1.8;color:var(--text-2)">
            To become a globally recognized technology partner that builds intelligent systems,
            fixes critical gaps, and accelerates digital transformation at scale —
            serving enterprises, governments, and emerging industries worldwide.
          </p>
          <div style="margin-top:2rem;padding:1.5rem;background:var(--bg-card);border:1px solid var(--border);border-left:3px solid var(--coral);border-radius:0 var(--radius-md) var(--radius-md) 0">
            <p style="font-family:var(--font-display);font-weight:600;font-size:1.05rem;font-style:italic;color:var(--text);line-height:1.6">
              "At Zapatch, we don't just build technology — we connect systems,
              fix inefficiencies, and power the future."
            </p>
          </div>
        </div>

        <div>
          <span class="section-label">Our Philosophy</span>
          <div style="display:flex;flex-direction:column;gap:1rem;margin-top:.75rem">
            ${philosophy.map(p => `
            <div style="display:flex;gap:1rem;padding:1.25rem;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-md)">
              <span style="font-size:1.5rem;flex-shrink:0">${p.icon}</span>
              <div>
                <div style="font-family:var(--font-display);font-weight:700;font-size:.95rem;margin-bottom:.3rem">${p.t}</div>
                <div style="font-size:.85rem;color:var(--text-2);line-height:1.6">${p.d}</div>
              </div>
            </div>`).join('')}
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ── VALUES ── -->
  <section class="section">
    <div class="section-inner">
      <span class="section-label">Core Values</span>
      <h2 class="section-title mb-2">What Drives Us Forward</h2>
      <div class="values-grid">
        ${values.map(v => `
        <div class="value-card" data-num="${v.num}">
          <div style="font-size:2rem;margin-bottom:1rem">${v.icon}</div>
          <h3 style="font-family:var(--font-display);font-weight:700;font-size:1.05rem;margin-bottom:.65rem">${v.t}</h3>
          <p style="font-size:.88rem;line-height:1.7;color:var(--text-2)">${v.d}</p>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- ── TEAM ── -->
  <section class="section bg-alt">
    <div class="section-inner">
      <span class="section-label">Leadership</span>
      <h2 class="section-title mb-2">The Minds Behind Zapatch</h2>
      <div class="grid-4">
        ${team.map(m => `
        <div class="team-card">
          <div class="team-avatar">${m.e}</div>
          <div class="team-info">
            <div class="team-name">${m.name}</div>
            <div class="team-role">${m.role}</div>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- ── MILESTONES ── -->
  <section class="section">
    <div class="section-inner">
      <div class="grid-2" style="gap:4rem">

        <div>
          <span class="section-label">Our Journey</span>
          <h2 class="section-title" style="margin-bottom:2.5rem">Milestones That<br>Shaped Us</h2>
          <div class="timeline">
            ${milestones.map(m => `
            <div class="tl-item">
              <div class="tl-year">${m.year}</div>
              <div class="tl-title">${m.t}</div>
              <div class="tl-text">${m.d}</div>
            </div>`).join('')}
          </div>
        </div>

        <div style="position:sticky;top:100px;align-self:start">
          <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-xl);padding:2.5rem;box-shadow:var(--shadow)">
            <div style="font-family:var(--font-display);font-weight:800;font-size:1.2rem;margin-bottom:2rem">Zapatch by the Numbers</div>
            <div style="display:flex;flex-direction:column;gap:1.5rem">
              ${stats.map(s => `
              <div style="display:flex;justify-content:space-between;align-items:center;padding-bottom:1.25rem;border-bottom:1px solid var(--border)">
                <span style="font-family:var(--font-display);font-weight:800;font-size:1.8rem;color:var(--coral);letter-spacing:-.03em">${s.n}</span>
                <span style="font-size:.82rem;color:var(--text-2);font-family:var(--font-mono);letter-spacing:.06em">${s.l}</span>
              </div>`).join('')}
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ── CTA ── -->
  <div class="cta-band">
    <h2>Join Us on This Journey</h2>
    <p>We're always looking for brilliant minds and bold partnerships.</p>
    <button class="btn-white" onclick="navigate('contact')">Connect With Us →</button>
  </div>
  `;
}
