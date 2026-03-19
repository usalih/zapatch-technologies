/* ==========================================================
   ZAPATCH TECHNOLOGIES — pages/services.js
   ========================================================== */
'use strict';

function servicesPage() {

  const list = [
    {
      icon: '🏢', title: 'Enterprise & Cloud Solutions', sub: 'Foundation for Growth',
      desc: 'Design and deployment of enterprise systems, cloud infrastructure, DevOps pipelines, and managed IT services to support business continuity and accelerated growth. We architect environments that are resilient by design and scalable by default.',
      tags: ['Cloud Migration','DevOps & CI/CD','Managed Services','Disaster Recovery','API Gateway','Microservices','Enterprise Integration','Performance Engineering'],
    },
    {
      icon: '🛡️', title: 'Cybersecurity & Digital Resilience', sub: 'Protect What Matters',
      desc: 'Advanced threat intelligence, endpoint protection, vulnerability management, and data security frameworks to protect critical systems. We implement zero-trust architectures and comprehensive security operations centres with 24/7 monitoring.',
      tags: ['Threat Intelligence','SIEM / SOC','Penetration Testing','Zero Trust','Identity & Access','Data Encryption','Incident Response','Compliance'],
    },
    {
      icon: '📚', title: 'EdTech & Digital Learning Systems', sub: 'Education at Scale',
      desc: 'Robust examination platforms, learning management systems, and digital education infrastructure built for massive scale and reliability. Powering national examination bodies, universities, and corporate training programs.',
      tags: ['LMS Platforms','CBT Examination','Live Proctoring','Analytics Dashboard','Mobile Learning','Content Management','Certification Engine','Multi-site'],
    },
    {
      icon: '🏛️', title: 'Public Sector & GovTech', sub: 'Secure National Systems',
      desc: 'Secure national systems, identity platforms, and workflow automation built to handle sensitive citizen data, government operations, and public service delivery at national scale with the highest levels of compliance and auditability.',
      tags: ['Digital Identity','e-Government','Workflow Automation','FOIA Compliance','Citizen Portals','National Registries','Inter-agency Integration','Audit Trails'],
    },
    {
      icon: '🏥', title: 'Healthcare IT Systems', sub: 'Integrated Care Platforms',
      desc: 'Integrated healthcare management, electronic health records, and data systems designed to improve patient outcomes, streamline clinical workflows, and ensure the highest standards of data privacy and regulatory compliance.',
      tags: ['EHR / EMR','HL7 / FHIR','Telemedicine','Lab Integration','Patient Portal','Clinical Analytics','HIPAA Compliant','Medical Billing'],
    },
    {
      icon: '🌾', title: 'AgriTech Platforms', sub: 'From Farm to Market',
      desc: 'End-to-end platforms connecting producers, supply chains, and markets. Digitizing agriculture from field-level IoT monitoring to market access, payment, and logistics management — empowering farmers and agribusinesses alike.',
      tags: ['Farm Management','Supply Chain Tracking','Market Linkage','IoT Sensors','Crop Analytics','Weather Integration','Mobile-First','Offline Capability'],
    },
    {
      icon: '⚙️', title: 'Custom Software & Infrastructure Engineering', sub: 'Tailored to the Problem',
      desc: 'Tailored application development, systems integration, hardware deployment, and biometric solutions designed to solve real-world operational challenges where off-the-shelf products fall short. Built precisely for your environment.',
      tags: ['Bespoke Development','Systems Integration','Hardware Deployment','Biometrics','IoT Firmware','Legacy Modernization','Embedded Systems','Protocol Design'],
    },
  ];

  return /* html */`
  <!-- ── PAGE HERO ── -->
  <section class="page-hero">
    <div class="section-inner" style="position:relative;z-index:1;text-align:center">
      <span class="section-label" style="justify-content:center;display:flex">What We Offer</span>
      <h1 class="section-title" style="max-width:700px;margin:0 auto 1.25rem">
        Full-Spectrum Technology Services
      </h1>
      <p class="section-desc" style="margin:0 auto;max-width:580px">
        From cloud infrastructure to AI platforms — every service is built to solve
        real operational problems at enterprise scale.
      </p>
    </div>
  </section>

  <!-- ── SERVICE CARDS ── -->
  <section class="section bg-alt">
    <div class="section-inner">
      <div style="display:flex;flex-direction:column;gap:1.75rem">
        ${list.map(s => `
        <div class="svc-card">
          <div class="svc-head">
            <div class="svc-icon">${s.icon}</div>
            <div>
              <div class="svc-title">${s.title}</div>
              <div class="svc-sub">${s.sub}</div>
            </div>
          </div>
          <div class="svc-body">
            <p>${s.desc}</p>
            <div class="tags">${s.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- ── CTA ── -->
  <div class="cta-band">
    <h2>Need a Custom Solution?</h2>
    <p>Every challenge is unique. Let's architect the right solution together.</p>
    <button class="btn-white" onclick="navigate('contact')">Request a Consultation →</button>
  </div>
  `;
}
