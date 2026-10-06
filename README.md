# 📿 ચાલીસા પાઠ (Chalisa Path) — PWA Counter & Reader

[![Netlify Status](https://img.shields.io/badge/Netlify-Live%20App-00C7B7?logo=netlify&logoColor=white)](https://chalishapath.netlify.app/)
[![PWA Ready](https://img.shields.io/badge/PWA-100%25%20Offline-success?logo=pwa)](https://chalishapath.netlify.app/)
[![Languages](https://img.shields.io/badge/Languages-ગુજરાતી%20%7C%20हिंदी%20%7C%20English-orange)](#-tri-lingual-support-ગુજરાતી-हिंदी-english)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> **દૈનિક ચાલીસા પાઠ ગણતરી અને વાંચન માટે દિવ્ય સાથી**  
> A sacred, responsive, full-featured **Progressive Web App (PWA)** for reading and counting holy Chalisa chants with one-handed mobile ergonomics and 100% offline capability.

Live App: **[https://chalishapath.netlify.app/](https://chalishapath.netlify.app/)**

---

## ✨ Features

- 📱 **Progressive Web App (PWA):**
  - **Android & Chrome:** 1-tap install prompt directly to Home Screen and App Drawer with standalone full-screen window.
  - **iOS (iPhone/iPad):** Native Safari "Add to Home Screen" support with custom Apple touch icons, theme tinting, and notch/safe-area handling.
  - **100% Offline Ready:** Built-in Service Worker caches all assets, fonts, verses, and audio synthesis. Works completely without an active internet connection or in Airplane Mode.

- 🕉️ **Five Sacred Chalisas Included:**
  - **હનુમાન ચાલીસા** (Hanuman Chalisa)
  - **શનિ ચાલીસા** (Shani Chalisa)
  - **મેલડી માતા ચાલીસા** (Meldi Mata Chalisa)
  - **શિવ ચાલીસા** (Shiv Chalisa)
  - **શ્રી ગણેશ ચાલીસા** (Ganesh Chalisa)

- 🌐 **Tri-Lingual Support (ગુજરાતી, हिंदी, English):**
  - Instant one-tap switching between **Pure Gujarati (શુદ્ધ ગુજરાતી)**, **Devanagari Hindi (हिंदी)**, and **English Transliteration / Meaning**.

- 🔔 **Synthesized Temple Bell (Web Audio API):**
  - Realistic multi-harmonic temple bell chime upon chant completion.
  - Generated algorithmically using pure Web Audio API synthesis (0 external audio files needed; 100% instant and offline).

- 📿 **Ergonomic One-Handed Mobile Counter:**
  - Sticky bottom thumb controller designed specifically for effortless mobile chanting.
  - Giant +1 tap zone, mistake undo (-1), progress bar, bead counter, and celebration confetti upon goal completion.

- 🎨 **Sacred Themes & Accessibility:**
  - **Saffron Temple (ભગવો રંગ)** — Default sacred light mode.
  - **Night Temple (રાત્રિ મોડ)** — AMOLED dark theme for evening prayers.
  - **Sacred Scroll (તાડપત્ર મોડ)** — Vintage parchment paper theme.
  - Font scaling controls (`+` / `-`) and hands-free automatic smooth scrolling.
  - Screen Wake-Lock API prevents the phone screen from sleeping during prayer.

- 💾 **Data Persistence:**
  - Daily counters, session resumption, and user preferences are automatically stored in browser `localStorage`.

---

## 🏗️ Tech Stack

- **Frontend:** Pure Semantic HTML5, Vanilla Modern CSS (CSS Custom Properties & Design Tokens), Vanilla JavaScript (ES6+)
- **Audio:** Web Audio API (Synthesized Temple Bell)
- **Offline / PWA:** Service Worker (`sw.js`), Web App Manifest (`manifest.webmanifest`), Cache API (App Shell + Google Fonts caching)
- **Deployment & Hosting:** [Netlify](https://www.netlify.com/) (Zero server build; instant edge CDN)

---

## 🚀 Netlify Auto-Deployment Setup

This repository is pre-configured with [`netlify.toml`](./netlify.toml) for automated continuous deployment with optimal security and PWA caching headers.

### Option 1: Deploy via GitHub & Netlify (Recommended)

1. **Create a GitHub Repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Chalisa Path PWA"
   git branch -M main
   git remote add origin https://github.com/aniket-py1/chalishapath-.git
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Log in to [Netlify Dashboard](https://app.netlify.com/).
   - Click **"Add new site"** ➔ **"Import an existing project"**.
   - Select **GitHub** and authorize access to the `chalishapath` repository.
   - Build settings are automatically detected from `netlify.toml`:
     - **Base directory:** *(leave blank)*
     - **Build command:** *(leave blank)*
     - **Publish directory:** `.`
   - Click **"Deploy site"**.

3. **Continuous Deployment is Active:**
   - Every time you push a git commit to the `main` branch, Netlify will automatically deploy the latest changes to your live site!

---

## 💻 Local Development

Since this project uses modern Web APIs and Service Workers, run it through a local HTTP server:

### Using Node.js:
```bash
# Using npx serve
npx serve .

# Or using http-server
npx http-server -p 3000 -c-1
```

### Using Python:
```bash
# Python 3
python -m http.server 3000
```

Open your browser at `http://localhost:3000`.

---

## 📂 Project Structure

```
chalishapath/
├── img/
│   ├── android-chrome-192x192.png  # PWA launcher icon (192px)
│   ├── android-chrome-512x512.png  # PWA launcher icon (512px)
│   ├── apple-touch-icon.png        # iOS home screen icon (180px)
│   ├── favicon-16x16.png           # Browser tab favicon
│   ├── favicon-32x32.png           # Browser tab favicon
│   ├── favicon.ico                 # Fallback legacy icon
│   ├── logo.png                    # Brand emblem
│   ├── om.png                      # Sacred Om symbol
│   ├── site.webmanifest            # Backup manifest reference
│   └── social-preview.png          # WhatsApp & OpenGraph banner
├── .gitignore                      # Git ignored files
├── index.html                      # Core semantic single-page application
├── manifest.webmanifest            # PWA Web App Manifest (standalone, theme colors)
├── netlify.toml                    # Netlify security headers and SW cache policy
├── README.md                       # Documentation & setup guide
├── script.js                       # Chalisa verses, counter engine, audio synthesis, PWA logic
├── styles.css                      # Sacred theme design tokens & responsive UI
└── sw.js                           # Service Worker for 100% offline caching
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — free to use and distribute for spiritual devotion and community benefit.

---

<p align="center">
  <strong>॥ જય શ્રી રામ ॥ હર હર મહાદેવ ॥ જય મેલડી માત ॥</strong>
</p>
