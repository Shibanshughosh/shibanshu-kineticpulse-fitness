# ⚡ KineticPulse — Elite Fitness & Recovery Studio

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6.4-646CFF?logo=vite&logoColor=white)
![Styling](https://img.shields.io/badge/Design_System-Vanilla_CSS-A6FF00?logo=css3&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green)

A high-performance, boutique fitness and athletic recovery web application built with **React 18**, **Vite**, and a custom **Vanilla CSS Glassmorphism Design System** (zero Tailwind dependencies).

Designed for high-intensity HIIT training, Reformer Pilates, Olympic Powerlifting, and Infrared Contrast Recovery.

---

## 🔥 Key Features

- **🎨 Ultra-Premium Glassmorphism Aesthetics:** Custom multi-layered frosted glass UI (`backdrop-filter: blur(28px)`), neon green (`#A6FF00`) accents, and live SVG metrics visualization.
- **🏋️ 3-Layer Hero Architecture:** Dynamic background layer with contrast filtering, dark gradient overlay, and floating glass stat cards.
- **📅 Interactive Weekly Timetable (Mon–Sun):** 35 scheduled class entries across 5 disciplines (HIIT, Pilates, Strength, Recovery), filterable by day, discipline, and instructor search.
- **🏆 Master Coaches & 1-on-1 Request Modal:** Detailed trainer profiles featuring certifications, ratings, session counters, and direct 1-on-1 private coaching booking.
- **💳 3-Tier Membership Checkout:** Monthly/Annual billing toggle with 20% discount, 3-step checkout wizard, interactive payment method selector, and canvas confetti celebration burst.
- **🎫 Digital Pass Generator:** Automatic verification modal producing a unique member pass ID with copy-to-clipboard functionality.
- **🖼️ Dual Image Pipeline:** Prefers local images placed in `/public/images/` with seamless automatic fallback to Unsplash URLs via an `onError` image pipeline.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [React 18](https://react.dev/) + [React Router v6](https://reactrouter.com/) |
| **Build Tool** | [Vite 6](https://vitejs.dev/) |
| **Styling** | Pure Vanilla CSS (CSS Variables, Flexbox, Grid, Glassmorphism) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Effects** | [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) |

---

## 📁 Project Structure

```
shibanshu-kineticpulse-fitness/
├── public/
│   └── images/                # Local asset folders with Unsplash fallbacks
│       ├── hero/              # Main hero background (hero_bg.jpg)
│       ├── programs/          # HIIT, Pilates, Powerlifting, Recovery
│       ├── trainers/          # Coach headshots
│       └── gallery/           # Community Instagram wall
├── src/
│   ├── components/            # Reusable UI Components
│   │   ├── Navbar.jsx         # Glassmorphism header + mobile drawer
│   │   ├── Footer.jsx         # Newsletter, contact & site links
│   │   ├── BookingModal.jsx   # 3-step class reservation modal
│   │   ├── CoachModal.jsx     # Master coach deep-dive profile
│   │   ├── DigitalPassModal.jsx # Pass generator & verification
│   │   └── Toast.jsx          # Auto-dismissing notification toasts
│   ├── data/
│   │   ├── gymData.js         # Master store (schedule, trainers, plans)
│   │   └── imageConfig.js     # Centralized local & fallback image router
│   ├── pages/                 # Main Route Views
│   │   ├── Home.jsx           # Hero, disciplines, testimonials, gallery
│   │   ├── Schedule.jsx       # 7-day timetable & filter search
│   │   ├── Trainers.jsx       # Coach grid & VIP banner
│   │   └── Membership.jsx     # Pricing plans & 3-step checkout
│   ├── App.jsx                # Application shell & modal state
│   ├── main.jsx               # React DOM root
│   └── index.css              # Master Design System token definitions
├── index.html                 # SEO-optimized HTML entry point
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have **Node.js** (v18+) installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/shibanshu-kineticpulse-fitness.git
   cd shibanshu-kineticpulse-fitness
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🖼️ Local Image Configuration

To use your own local photos instead of the default fallbacks:

1. Drop your image files into the matching directory inside `public/images/`:
   - `public/images/hero/hero_bg.jpg`
   - `public/images/programs/hiit_conditioning.jpg`
   - `public/images/trainers/marcus_vance.jpg`
   - `public/images/gallery/instagram_1.jpg`
2. If any local file is missing, the app automatically falls back to curated high-resolution Unsplash URLs via [`src/data/imageConfig.js`](file:///d:/VSCode-Workspace/shibanshu-kineticpulse-fitness/src/data/imageConfig.js).

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
