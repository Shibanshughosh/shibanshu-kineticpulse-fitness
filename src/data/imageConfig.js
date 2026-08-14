// ================================================================
// KINETICPULSE — IMAGE CONFIGURATION
// ================================================================
// This file is the single source of truth for all image paths.
//
// HOW IT WORKS:
//   1. `local` → path in /public/images/ (served by Vite)
//   2. `fallback` → Unsplash URL used if the local file is missing
//
// HOW TO SWAP AN IMAGE:
//   Drop your file into the correct public/images/<folder>/ directory
//   with the exact file name listed below. The app picks it up instantly
//   (no code change required — hot-reload will update in dev).
//
// FILE FORMAT SUPPORT: .jpg  .jpeg  .png  .webp  .avif
// ================================================================

export const images = {

  // ── HERO ──────────────────────────────────────────────────────
  hero: {
    local: '/images/hero/hero_bg.jpg',
    fallback: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1920&q=80',
  },

  // ── PROGRAMS ──────────────────────────────────────────────────
  programs: {
    hiit: {
      local: '/images/programs/hiit_conditioning.jpg',
      fallback: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    },
    pilates: {
      local: '/images/programs/reformer_pilates.jpg',
      fallback: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    },
    powerlifting: {
      local: '/images/programs/powerlifting.jpg',
      fallback: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    },
    sauna: {
      local: '/images/programs/sauna_recovery.jpg',
      fallback: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    },
  },

  // ── TRAINERS ──────────────────────────────────────────────────
  trainers: {
    marcus: {
      local: '/images/trainers/marcus_vance.jpg',
      fallback: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80',
    },
    elena: {
      local: '/images/trainers/elena_rostova.jpg',
      fallback: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    },
    jaxson: {
      local: '/images/trainers/jaxson_cole.jpg',
      fallback: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80',
    },
    aris: {
      local: '/images/trainers/dr_aris_thorne.jpg',
      fallback: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80',
    },
  },

  // ── INSTAGRAM GALLERY ─────────────────────────────────────────
  gallery: {
    post1: {
      local: '/images/gallery/instagram_1.jpg',
      fallback: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80',
    },
    post2: {
      local: '/images/gallery/instagram_2.jpg',
      fallback: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80',
    },
    post3: {
      local: '/images/gallery/instagram_3.jpg',
      fallback: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
    },
    post4: {
      local: '/images/gallery/instagram_4.jpg',
      fallback: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
    },
  },
};

/**
 * Helper used by every <img> tag in the app.
 * Returns { src, onError } props:
 *   - src       → the local path (tried first by the browser)
 *   - onError   → switches to the Unsplash fallback if local file is missing
 *
 * Usage in JSX:
 *   <img {...imgProps(images.hero)} alt="Hero" />
 */
export function imgProps(imageEntry) {
  return {
    src: imageEntry.local,
    onError: (e) => {
      if (e.target.src !== imageEntry.fallback) {
        e.target.src = imageEntry.fallback;
      }
    },
  };
}
