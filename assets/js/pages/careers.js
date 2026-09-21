/* Careers page — lists openings and provides suggestion button */
'use strict';

function careersPage() {
  return `
    <section class="section">
      <div class="section-inner">
        <span class="section-label">Join Us</span>
        <h2 class="section-title">Careers at Zapatch</h2>
        <p class="section-desc">We're building cloud-native, AI-first solutions that solve real problems. If you love engineering, product, or operations, check our open roles below or suggest a role you'd like to see.</p>

                <div class="training-hero" style="background-image:url('https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=0b1b5e1c9f3a4a4e384b8a7b3e9d8f3a')">
                  <div class="overlay">
                    <h3>Our A+ Individual Training</h3>
                    <p class="training-desc">An intensive bootcamp with mentorship from our team <br/> practical modules and hands-on projects to help mature professionals add tech into their daily workflow and accelerate careers.</p>
                    <ul class="training-meta">
                      <li><strong>Price:</strong> ₦300,000</li>
                      <li><strong>Duration:</strong> 1 months</li>
                      <li><strong>Modes:</strong> Virtual &amp; Physical</li>
                    </ul>
                    <div class="training-ctas">
                      <a class="btn-primary" href="mailto:info@zapatch.com?subject=Enroll%20-%20Tech%20Career%20Accelerator">Enroll Now</a>
                      <button class="btn-white" id="trainingToggle" aria-expanded="false">Course Details</button>
                    </div>
                    <ul class="training-modules" id="trainingModules" style="display:none; margin-top:0.75rem;">
                      <li>MS Office package</li>
                      <li>Canva</li>
                      <li>AI &amp; Prompting</li>
                      <li>Workflow Automation</li>
                      <li>Content &amp; Branding</li>
                      <li>Visibility &amp; SEO</li>
                    </ul>
                  </div>
                </div>
        <p class="section-desc" style="margin-top:2rem;">We are currently hiring for the following roles:</p>
        <div class="grid-3" style="margin-top:2rem;">
          <div class="card">
            <h3 class="card-title">Senior Backend Engineer</h3>
            <p class="card-text">Design and build scalable microservices, own APIs and integrations, work with Go/Python, and ship reliable distributed systems.</p>
            <p class="card-text"><strong>Location:</strong> Remote / Lagos</p>
            <p class="card-text"><strong>Type:</strong> Full-time</p>
            <div style="margin-top:1rem;"><a class="btn-secondary" href="mailto:info@zapatch.com?subject=Application%20-%20Senior%20Backend%20Engineer">Apply Now</a></div>
          </div>

          <div class="card">
            <h3 class="card-title">Product Designer</h3>
            <p class="card-text">Lead UX and visual design for enterprise products, collaborate with engineering and PMs, and prototype user journeys.</p>
            <p class="card-text"><strong>Location:</strong> Remote</p>
            <p class="card-text"><strong>Type:</strong> Contract </p>
            <div style="margin-top:1rem;"><a class="btn-secondary" href="mailto:info@zapatch.com?subject=Application%20-%20Product%20Designer">Apply Now</a></div>
          </div>

          <div class="card">
            <h3 class="card-title">Technical Program Manager</h3>
            <p class="card-text">Manage cross-functional delivery, own roadmaps, coordinate releases, and improve developer workflows.</p>
            <p class="card-text"><strong>Location:</strong> Lagos</p>
            <p class="card-text"><strong>Type:</strong> Full-time</p>
            <div style="margin-top:1rem;"><a class="btn-secondary" href="mailto:info@zapatch.com?subject=Application%20-%20Technical%20Program%20Manager">Apply Now</a></div>
          </div>

          <div class="card">
            <h3 class="card-title">DevOps Engineer</h3>
            <p class="card-text">Build and maintain CI/CD pipelines, manage cloud infrastructure, and ensure high availability of services.</p>
            <p class="card-text"><strong>Location:</strong> Remote / Lagos</p>
            <p class="card-text"><strong>Type:</strong> Full-time</p>
            <div style="margin-top:1rem;"><a class="btn-secondary" href="mailto:info@zapatch.com?subject=Application%20-%20DevOps%20Engineer">Apply Now</a></div>
            </div>

         <div class="card">
            <h3 class="card-title">Content Marketing Specialist</h3>
            <p class="card-text">Create and manage content strategies, write engaging copy, and optimize content for SEO and social media.</p>
            <p class="card-text"><strong>Location:</strong> Remote</p>
            <p class="card-text"><strong>Type:</strong> Contract</p>
            <div style="margin-top:1rem;"><a class="btn-secondary" href="mailto:info@zapatch.com?subject=Application%20-%20Content%20Marketing%20Specialist">Apply Now</a></div>
            </div>
        </div>
    </section>
    <!--
    <section class="suggestion-section" style="background-color:#f9f9f9;"> 
        <div class="suggestion-section" style="margin-top:3rem;">
        <p class="section-desc" style="margin-top:2rem;">If you don't see a role that fits your skills, you can suggest a role you'd like to see at Zapatch. We'll review your suggestion and reach out if we think it's a good fit.</p>

        <div style="margin-top:2.5rem;"><button class="btn-white" id="submitSuggestion">Suggest a Role</button></div>

        <div id="suggestionForm" style="display:none; margin-top:1.25rem; max-width:640px;">
          <div class="card">
            <div style="display:flex; gap:1rem; flex-direction:column;">
              <label class="form-label">Your name</label>
              <input class="form-input" id="sName" placeholder="Jane Doe" />
              <label class="form-label">Your email</label>
              <input class="form-input" id="sEmail" placeholder="you@company.com" />
              <label class="form-label">Suggested role</label>
              <input class="form-input" id="sRole" placeholder="e.g. Mobile Engineer" />
              <label class="form-label">Upload CV / Resume (PDF)</label>
              <input class="form-input" id="sCV" type="file" accept="application/pdf" />
              <label class="form-label">Why hire for this role?</label>
              <textarea class="form-textarea" id="sReason" rows="4" placeholder="Short note about why this role is important"></textarea>
              <div style="display:flex; gap:0.75rem; margin-top:0.5rem;"><button class="btn-primary" id="sendSuggestion">Send Suggestion</button><button class="btn-secondary" id="cancelSuggestion">Cancel</button></div>
            </div>
          </div>
        </div>
        <p class="section-desc" style="margin-top:2rem;">We value your suggestions and will consider them carefully. Thank you for helping us grow!</p>
      </div>
      <div class="section-bg" style="background-image:url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=1f2e5c6b8e9f4a1b8c3e5d6f7a8b9c0d')"></div>
      </div>
      </div>
    </section>
    -->
  `;
}

function initCareers() {
  const showBtn = document.getElementById('submitSuggestion');
  const formWrap = document.getElementById('suggestionForm');
  const cancel = document.getElementById('cancelSuggestion');
  const send = document.getElementById('sendSuggestion');

  if (!showBtn) return;
  showBtn.addEventListener('click', () => { formWrap.style.display = formWrap.style.display === 'none' ? 'block' : 'none'; });
  cancel.addEventListener('click', () => { formWrap.style.display = 'none'; });

  // Course details toggle for training hero
  const trainingToggle = document.getElementById('trainingToggle');
  const trainingModules = document.getElementById('trainingModules');
  if (trainingToggle && trainingModules) {
    trainingToggle.addEventListener('click', () => {
      const open = trainingModules.style.display === 'block';
      trainingModules.style.display = open ? 'none' : 'block';
      trainingToggle.setAttribute('aria-expanded', String(!open));
    });
  }

  send.addEventListener('click', () => {
    const name = document.getElementById('sName').value || 'Anonymous';
    const email = document.getElementById('sEmail').value || '';
    const role = document.getElementById('sRole').value || 'Suggested role';
    const reason = document.getElementById('sReason').value || '';
    const cvEl = document.getElementById('sCV');
    const cvName = (cvEl && cvEl.files && cvEl.files[0]) ? cvEl.files[0].name : '';
    const subject = encodeURIComponent(`Application: ${role}`);
    let bodyText = `Name: ${name}\nEmail: ${email}\nRole: ${role}\n\nWhy hire for this role:\n${reason}\n`;
    if (cvName) bodyText += `\nAttached CV filename: ${cvName}\n\nPlease attach the CV file to the email before sending.`;
    else bodyText += `\nNo CV attached. You can attach your CV to the email before sending.`;

    const body = encodeURIComponent(bodyText);
    /* mailto cannot attach files programmatically; instruct user to attach file if selected */
    window.location.href = `mailto:info@zapatch.com?subject=${subject}&body=${body}`;
  });
}

// Expose for router
window.careersPage = careersPage;
window.initCareers = initCareers;
