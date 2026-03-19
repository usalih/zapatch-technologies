/* ==========================================================
   ZAPATCH TECHNOLOGIES — pages/solutions.js
   ========================================================== */
'use strict';

function solutionsPage() {

  const items = [
    {
      num: '01', icon: '🤖', title: 'AI & Intelligent Automation', rev: false,
      desc: 'We embed intelligence at the core — enabling machines to learn, decide, and act. From NLP to computer vision, our AI-first architecture transforms how enterprises operate and compete.',
      bullets: [
        'Predictive analytics & forecasting engines',
        'Intelligent document processing & OCR',
        'Conversational AI and virtual assistants',
        'Automated quality control & anomaly detection',
        'Real-time recommendation systems',
      ],
    },
    {
      num: '02', icon: '🔐', title: 'Enterprise Security Operations Center', rev: true,
      desc: 'A holistic security architecture combining continuous monitoring, threat intelligence, and rapid response — protecting critical systems before, during, and after incidents.',
      bullets: [
        '24/7 Security Monitoring & SIEM',
        'Advanced Persistent Threat (APT) defense',
        'Zero-trust network architecture',
        'Regulatory compliance automation (ISO, SOC2, NDPR)',
        'Cyber incident response & forensics',
      ],
    },
    {
      num: '03', icon: '📡', title: 'National Digital Infrastructure', rev: false,
      desc: 'Building the backbone of tomorrow\'s digital nations — sovereign cloud environments, national identity platforms, and interoperable e-government systems that serve millions.',
      bullets: [
        'National identity & biometric platforms',
        'e-Government service portals',
        'Sovereign cloud & data residency',
        'Inter-agency data sharing frameworks',
        'Digital payments & financial inclusion',
      ],
    },
    {
      num: '04', icon: '🎓', title: 'Examination & Certification Ecosystem', rev: true,
      desc: 'A full-stack digital examination platform trusted to run high-stakes tests at national scale — with AI-powered proctoring, high availability, and real-time reporting dashboards.',
      bullets: [
        'Computer-based testing (CBT) engine',
        'Live and AI-powered remote proctoring',
        'Multi-centre simultaneous deployment',
        'Instant result processing & analytics',
        'Tamper-proof certificate management',
      ],
    },
    {
      num: '05', icon: '🌾', title: 'Agricultural Supply Chain Intelligence', rev: false,
      desc: 'End-to-end digitization of the agricultural value chain — from farm management and produce tracking to market linkage and farmer payments.',
      bullets: [
        'Farm registration & profile management',
        'Real-time crop monitoring (IoT integration)',
        'Off-taker & buyer marketplace',
        'Logistics & cold chain management',
        'Farmer credit scoring & payments',
      ],
    },
  ];

  return /* html */`
  <!-- ── PAGE HERO ── -->
  <section class="page-hero">
    <div class="section-inner" style="position:relative;z-index:1;text-align:center">
      <span class="section-label" style="display:flex;justify-content:center">Industry Solutions</span>
      <h1 class="section-title" style="max-width:700px;margin:0 auto 1.25rem">
        Transformative Solutions for<br>Complex Challenges
      </h1>
      <p class="section-desc" style="margin:0 auto;max-width:560px">
        Deep, verticalized solutions built with domain expertise
        and enterprise-grade engineering.
      </p>
    </div>
  </section>

  <!-- ── SOLUTION ROWS ── -->
  <section class="section">
    <div class="section-inner">
      ${items.map(item => `
      <div class="sol-row${item.rev ? ' rev' : ''}">
        <div>
          <div class="sol-num">${item.num}</div>
          <h2 class="sol-title">${item.title}</h2>
          <p style="font-size:.96rem;line-height:1.75;color:var(--text-2)">${item.desc}</p>
          <ul class="sol-list">
            ${item.bullets.map(b => `<li>${b}</li>`).join('')}
          </ul>
          <div style="margin-top:1.75rem">
            <button class="btn-primary" onclick="navigate('contact')">Learn More →</button>
          </div>
        </div>
        <div class="sol-visual">
          <div class="sol-visual-inner">
            <div class="sol-big-icon">${item.icon}</div>
            <div class="sol-vis-label">${item.title}</div>
          </div>
          <div style="position:absolute;inset:0;background:var(--hero-mesh);pointer-events:none"></div>
        </div>
      </div>`).join('')}
    </div>
  </section>

  <!-- ── CTA ── -->
  <div class="cta-band">
    <h2>Don't See Your Industry?</h2>
    <p>We design custom solutions for any vertical. Let's talk about yours.</p>
    <button class="btn-white" onclick="navigate('contact')">Get in Touch →</button>
  </div>
  `;
}
