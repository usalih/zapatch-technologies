# Zapatch Technologies — Official Website

A production-ready, multi-page enterprise website for **Zapatch Technologies**, built with vanilla HTML, CSS, and JavaScript. No frameworks or build tools required — just open `index.html` in any modern browser.

---

## 📁 Project Structure

```
zapatch-technologies/
├── index.html                  ← Main entry point (open this)
├── README.md
└── assets/
    ├── css/
    │   └── styles.css          ← Full master stylesheet (Claude.ai palette)
    └── js/
        ├── app.js              ← SPA router, theme toggle, shared utilities
        └── pages/
            ├── home.js         ← Home page
            ├── about.js        ← About page
            ├── services.js     ← Services page
            ├── solutions.js    ← Solutions page
            └── contact.js      ← Contact page
```

---

## ✅ Features

| Feature | Detail |
|---|---|
| **5 Full Pages** | Home, About, Services, Solutions, Contact |
| **Dark / Light Mode** | Animated pill toggle, persists via `localStorage` |
| **Claude.ai Brand Palette** | Coral `#D4785A`, Sand `#E8C9A0`, Violet `#8B7CE8`, Cyan `#5AC8D4` |
| **Animated Hero** | Floating cards, glowing orbs, grid background, line animations |
| **Scroll-Reveal** | Cards fade-in with staggered delays using IntersectionObserver |
| **Live Counters** | 150+ Projects, 12+ Industries, 99% Uptime animate on load |
| **Ticker Marquee** | Scrolling service labels, CSS animation |
| **Hamburger Menu** | Responsive mobile nav with smooth open/close |
| **Contact Form** | Toast notification on submit, validation, disabled state |
| **Team Cards** | Leadership section with hover effects |
| **Milestone Timeline** | Animated vertical timeline with year markers |
| **Tech Stack Badges** | 22 technology tags with hover effects |
| **Compliance Chips** | ISO 27001, SOC 2, GDPR, NDPR, HIPAA |
| **Footer** | 4-column footer with social links and badges |
| **Custom Cursor Glow** | Radial gradient follows mouse |
| **Fully Responsive** | Mobile, tablet, desktop breakpoints |

---

## 🚀 How to Run

**Option 1 — Direct open:**
```
Double-click index.html
```

**Option 2 — Local server (recommended for best performance):**
```bash
# Python
python -m http.server 8080

# Node.js
npx serve .

# VS Code
Install "Live Server" extension → right-click index.html → Open with Live Server
```

Then visit: `http://localhost:8080`

---

## 🎨 Design System

### Colours
```css
--coral:    #D4785A   /* Primary brand colour */
--sand:     #E8C9A0   /* Warm accent */
--violet:   #8B7CE8   /* Secondary accent */
--cyan:     #5AC8D4   /* Tertiary accent */
--green:    #5AD48B   /* Success / positive */
```

### Typography
- **Display / Headings:** Syne (700, 800)
- **Body:** DM Sans (300, 400, 500)
- **Code / Labels:** JetBrains Mono (400, 500)

---

## 📞 Contact

**Zapatch Technologies**  
Victoria Island, Lagos, Nigeria  
hello@zapatch.tech | www.zapatch.tech
