# Meet Jaiswal – Portfolio Website

> Personal portfolio website for Meet Jaiswal, Python Developer & AI Engineer

## 🚀 Live Demo
[https://meetjaiswal.github.io/portfolio](https://meetjaiswal.github.io/portfolio)

---

## 📁 Folder Structure

```
portfolio/
├── index.html              ← Main HTML file
├── style.css               ← All styles (dark theme)
├── script.js               ← Animations, typed text, video autoplay
├── config.js               ← All personal URLs, email, phone (edit this file only)
├── MeetphotoDp.jpeg        ← Profile photo
├── resume.pdf              ← Resume (place your PDF here)
├── videos/
│   ├── nse-demo.mp4        ← NSE Stock Predictor demo video
│   └── sap-demo.mp4        ← SAP VM SKU Recommender demo video
└── thumbnails/
    ├── nse-thumb.jpg       ← NSE project thumbnail
    └── sap-thumb.jpg       ← SAP project thumbnail
```

---

## ⚙️ Configuration

All personal info, URLs, and links are managed from a single file — **`config.js`**

```javascript
const CONFIG = {
  // Personal Info
  email: "your@email.com",
  email_href: "mailto:your@email.com",
  phone: "+91 XXXXXXXXXX",
  phone_href: "tel:+91XXXXXXXXXX",

  // Social URLs
  linkedin: "https://linkedin.com/in/YOUR_USERNAME",
  github: "https://github.com/YOUR_USERNAME",

  // Certificates
  cert_wipro: "YOUR_WIPRO_CERT_URL",
  cert_google: "YOUR_GOOGLE_CERT_URL",
  cert_tata: "YOUR_TATA_CERT_URL",
  cert_dbms: "YOUR_DBMS_CERT_URL",
  cert_jobsense: "YOUR_JOBSENSE_CERT_URL",

  // Projects
  nse_live: "YOUR_NSE_LIVE_URL",
  nse_github: "YOUR_NSE_GITHUB_URL",
  sap_live: "YOUR_SAP_LIVE_URL",
  sap_github: "YOUR_SAP_GITHUB_URL",

  // Formspree Contact Form
  formspree: "https://formspree.io/f/YOUR_FORM_ID",
};
```

> ✅ Only edit `config.js` — no need to touch `index.html` for personal info updates.

---

## 📹 Adding Project Videos

1. Place your video files inside the `videos/` folder:
   - `videos/nse-demo.mp4` — NSE Stock Predictor demo
   - `videos/sap-demo.mp4` — SAP VM SKU Recommender demo

2. (Optional) Add thumbnail images in `thumbnails/` folder:
   - `thumbnails/nse-thumb.jpg`
   - `thumbnails/sap-thumb.jpg`

**Videos auto-play when:**
- Project card scrolls into viewport
- User hovers over the project card

---

## 📬 Contact Form – Formspree Setup

Contact form is connected to **Formspree** — messages go directly to your email.

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form → copy the form endpoint URL
3. Paste it in `config.js`:
```javascript
formspree: "https://formspree.io/f/YOUR_FORM_ID",
```
4. Verify your email in Formspree dashboard → Integration tab

---

## 🌐 GitHub Pages Deployment

```bash
# Step 1 — Initialize git
git init
git add .
git commit -m "🚀 Portfolio launch"

# Step 2 — Connect to GitHub
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main

# Step 3 — Enable GitHub Pages
# GitHub Repo → Settings → Pages → Source: main / root → Save
# Live at: https://YOUR_USERNAME.github.io/portfolio
```

---

## 🛠️ Tech Stack

| Category  | Technologies                       |
|-----------|------------------------------------|
| Structure | HTML5                              |
| Styling   | CSS3, Custom Dark Theme            |
| Logic     | Vanilla JavaScript                 |
| Fonts     | DM Sans, Space Mono (Google Fonts) |
| Icons     | Devicons CDN                       |
| Form      | Formspree                          |
| Hosting   | GitHub Pages                       |

---

Built with ❤️ by **Meet Jaiswal** © 2026