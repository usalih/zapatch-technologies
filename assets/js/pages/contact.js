/* ==========================================================
   ZAPATCH TECHNOLOGIES — pages/contact.js
   ========================================================== */
'use strict';

function contactPage() {

  const details = [
    { icon:'📍', label:'Headquarters', val:'Victoria Island, Lagos, Nigeria' },
    { icon:'📧', label:'Email',         val:'info@zapatch.com' },
    { icon:'📞', label:'Phone',         val:'+234 902 2644 650' },
    { icon:'🌐', label:'Website',       val:'www.zapatch.com' },
  ];

  const offices = ['Abuja, Nigeria', 'Nairobi, Kenya', 'Accra, Ghana', 'London, United Kingdom'];

  const services = [
    'Enterprise & Cloud Solutions',
    'Cybersecurity & Digital Resilience',
    'EdTech & Digital Learning Systems',
    'Public Sector & GovTech',
    'Healthcare IT Systems',
    'AgriTech Platforms',
    'Custom Software Engineering',
    'AI & Intelligent Automation',
  ];

  return /* html */`
  <!-- ── PAGE HERO ── -->
  <section class="page-hero">
    <div class="section-inner" style="position:relative;z-index:1;text-align:center">
      <span class="section-label" style="display:flex;justify-content:center">Get in Touch</span>
      <h1 class="section-title" style="max-width:600px;margin:0 auto 1.25rem">
        Let's Build Something<br><span class="text-coral">Remarkable</span> Together
      </h1>
      <p class="section-desc" style="margin:0 auto;max-width:520px">
        Whether you're modernizing infrastructure, launching a new product,
        or transforming operations — we're ready to help.
      </p>
    </div>
  </section>

  <!-- ── CONTACT CONTENT ── -->
  <section class="section bg-alt">
    <div class="section-inner">
      <div class="contact-wrap">

        <!-- Left: contact info -->
        <div class="contact-info">
          <span class="section-label">Reach Us</span>
          <h2>Start the Conversation</h2>
          <p style="font-size:.96rem;line-height:1.75;color:var(--text-2);margin:1rem 0 2rem">
            Our team is ready to discuss your needs, evaluate your challenges,
            and design a solution architecture tailored to your goals.
          </p>

          ${details.map(d => `
          <div class="contact-row">
            <div class="c-icon">${d.icon}</div>
            <div>
              <div class="c-label">${d.label}</div>
              <div class="c-value">${d.val}</div>
            </div>
          </div>`).join('')}

          <div style="margin-top:2.5rem">
            <div style="font-family:var(--font-mono);font-size:.68rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-3);margin-bottom:1rem">Regional Offices</div>
            ${offices.map(o => `
            <div style="display:flex;align-items:center;gap:.6rem;font-size:.9rem;color:var(--text-2);margin-bottom:.6rem">
              <span style="color:var(--coral)">→</span>${o}
            </div>`).join('')}
          </div>

          <!-- Response time badge -->
          <div style="margin-top:2rem;padding:1.25rem;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-md);display:flex;align-items:center;gap:1rem">
            <span style="font-size:1.8rem">⚡</span>
            <div>
              <div style="font-family:var(--font-display);font-weight:700;font-size:.92rem;margin-bottom:.2rem">Fast Response Guarantee</div>
              <div style="font-size:.82rem;color:var(--text-2)">We respond to all enquiries within 24 hours on business days.</div>
            </div>
          </div>
        </div>

        <!-- Right: contact form -->
        <div class="contact-form-wrap">
          <div class="form-heading">Send Us a Message</div>
          <div class="form-note">We respond within 24 hours on business days</div>

          <form id="zForm" novalidate>
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
              <label class="form-label">Company / Organisation</label>
              <input class="form-input" type="text" placeholder="Acme Corp" />
            </div>

            <div class="form-group">
              <label class="form-label">Phone Number</label>
              <input class="form-input" type="tel" placeholder="+234 800 000 0000" />
            </div>

            <div class="form-group">
              <label class="form-label">Service Interest</label>
              <select class="form-select">
                <option value="">Select a service area…</option>
                ${services.map(s => `<option>${s}</option>`).join('')}
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">Message *</label>
              <textarea class="form-textarea" rows="5" placeholder="Tell us about your project, challenge, or goals…" required></textarea>
            </div>

            <button type="submit" class="form-submit">Send Message →</button>
          </form>
        </div>

      </div>
    </div>
  </section>

  <!-- ── MAP PLACEHOLDER ── -->
  <section class="section">
    <div class="section-inner">
      <span class="section-label">Where We Are</span>
      <h2 class="section-title mb-2">Operating Across Continents</h2>
      <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-xl);padding:3rem;text-align:center;box-shadow:var(--shadow)">
        <div style="font-size:3rem;margin-bottom:1rem">🌍</div>
        <div style="font-family:var(--font-display);font-weight:700;font-size:1.1rem;margin-bottom:1.5rem">Active Offices</div>
        <div style="display:flex;flex-wrap:wrap;gap:1rem;justify-content:center">
          ${['Lagos 🇳🇬','Abuja 🇳🇬','Nairobi 🇰🇪','Accra 🇬🇭','London 🇬🇧'].map(city => `
          <span style="font-family:var(--font-mono);font-size:.8rem;padding:.5rem 1.25rem;background:rgba(212,120,90,0.08);border:1px solid rgba(212,120,90,0.18);border-radius:50px;color:var(--coral);letter-spacing:.06em">${city}</span>`).join('')}
        </div>
      </div>
    </div>
  </section>
  `;
}
