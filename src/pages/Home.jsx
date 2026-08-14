import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Users, PlayCircle, TrendingUp, ArrowRight, Zap, Star, Heart, Instagram
} from 'lucide-react';
import {
  heroAssets, featuredPrograms, memberTestimonials, instagramGallery
} from '../data/gymData';

export default function Home({ onOpenBookingModal }) {
  const [heroBgSrc, setHeroBgSrc] = useState(heroAssets.heroBg);

  return (
    <div style={{ background: 'var(--bg-carbon)' }}>

      {/* ═══════════════════════════════════════════════
          HERO SECTION — 3-Layer Architecture
      ═══════════════════════════════════════════════ */}
      <section className="kp-hero">

        {/* Layer 1: Background Image */}
        <div
          className="kp-hero-bg-layer"
          style={{ backgroundImage: `url('${heroBgSrc}')` }}
        />
        {/* Hidden fallback detector */}
        <img
          src={heroAssets.heroBg}
          alt=""
          style={{ display: 'none' }}
          onError={() => setHeroBgSrc(heroAssets.fallbackHeroBg)}
        />

        {/* Layer 2: Gradient Overlay */}
        <div className="kp-hero-overlay-layer" />

        {/* Layer 3: Content */}
        <div className="kp-container">
          <div className="kp-hero-content">

            {/* Top Grid: Text + Metrics Card */}
            <div className="kp-hero-top-grid">

              {/* Left: Headline & CTAs */}
              <div>
                <div className="kp-hero-badge">
                  <Zap size={12} />
                  San Francisco's #1 Elite Fitness Studio
                </div>

                <h1 className="kp-hero-title">
                  UNLEASH <br />
                  YOUR <span className="neon-text-glow">POWER.</span>
                </h1>

                <p className="kp-hero-subtitle">
                  High-intensity HIIT, Reformer Pilates, Olympic Lifting & Infrared Recovery — engineered for elite performers.
                </p>

                <div className="kp-hero-cta-row">
                  <Link to="/membership" className="kp-btn-hero">
                    Explore Memberships <ArrowRight size={16} />
                  </Link>
                  <Link to="/schedule" className="btn-outline">
                    View Schedule
                  </Link>
                </div>
              </div>

              {/* Right: 1200+ Members Glass Card */}
              <div>
                <div className="kp-metrics-card">
                  <div className="kp-metrics-header">
                    <div>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.65rem', flexWrap: 'wrap' }}>
                        <span className="kp-metrics-val">1,240+</span>
                        <span className="kp-metrics-lbl">MEMBERS</span>
                      </div>
                      <div className="kp-metrics-tag" style={{ marginTop: '0.2rem' }}>ACTIVE COMMUNITY</div>
                    </div>
                    <div className="kp-icon-badge" style={{ margin: 0 }}>
                      <Users size={18} />
                    </div>
                  </div>

                  {/* Live Chart Box */}
                  <div className="kp-chart-box">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', color: '#FFFFFF', letterSpacing: '0.06em' }}>
                        LIVE STUDIO METRICS
                      </span>
                      <span style={{ fontSize: '0.6rem', fontWeight: 800, color: 'var(--accent-lime)', background: 'var(--accent-lime-dim)', padding: '2px 7px', borderRadius: '4px' }}>
                        +51% ↗
                      </span>
                    </div>

                    {/* SVG Glow Line Chart with Y-Axis and Embedded X-Axis */}
                    <div style={{ width: '100%', height: '95px', marginTop: '0.25rem' }}>
                      <svg viewBox="0 0 450 120" style={{ width: '100%', height: '100%' }}>
                        <defs>
                          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#A6FF00" stopOpacity="0.45" />
                            <stop offset="100%" stopColor="#A6FF00" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>

                        {/* Y-Axis Labels */}
                        <text x="32" y="30" fill="var(--text-muted)" fontSize="11" fontWeight="700" textAnchor="end">1.5k</text>
                        <text x="32" y="60" fill="var(--text-muted)" fontSize="11" fontWeight="700" textAnchor="end">1.0k</text>
                        <text x="32" y="90" fill="var(--text-muted)" fontSize="11" fontWeight="700" textAnchor="end">0.5k</text>

                        {/* Horizontal Gridlines */}
                        <line x1="45" y1="26" x2="440" y2="26" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
                        <line x1="45" y1="56" x2="440" y2="56" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
                        <line x1="45" y1="86" x2="440" y2="86" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />

                        {/* Y-Axis Divider Line */}
                        <line x1="45" y1="18" x2="45" y2="92" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />

                        {/* Gradient Area under curve */}
                        <path
                          d="M 52,82 Q 105,95 158,58 T 264,68 T 370,28 T 435,48 L 435,92 L 52,92 Z"
                          fill="url(#chartGradient)"
                        />

                        {/* Glow Line */}
                        <path
                          d="M 52,82 Q 105,95 158,58 T 264,68 T 370,28 T 435,48"
                          fill="none"
                          stroke="#A6FF00"
                          strokeWidth="3"
                          strokeLinecap="round"
                          style={{ filter: 'drop-shadow(0 0 8px #A6FF00)' }}
                        />

                        {/* Peak Point Dot */}
                        <circle cx="370" cy="28" r="4.5" fill="#A6FF00" style={{ filter: 'drop-shadow(0 0 10px #A6FF00)' }} />

                        {/* X-Axis Month Labels (SVG Text elements for perfect spacing) */}
                        <text x="52" y="112" fill="var(--text-muted)" fontSize="10" fontWeight="700" textAnchor="middle">JAN</text>
                        <text x="115" y="112" fill="var(--text-muted)" fontSize="10" fontWeight="700" textAnchor="middle">FEB</text>
                        <text x="178" y="112" fill="var(--text-muted)" fontSize="10" fontWeight="700" textAnchor="middle">MAR</text>
                        <text x="241" y="112" fill="var(--text-muted)" fontSize="10" fontWeight="700" textAnchor="middle">APR</text>
                        <text x="304" y="112" fill="var(--text-muted)" fontSize="10" fontWeight="700" textAnchor="middle">MAY</text>
                        <text x="367" y="112" fill="var(--text-muted)" fontSize="10" fontWeight="700" textAnchor="middle">JUN</text>
                        <text x="430" y="112" fill="var(--text-muted)" fontSize="10" fontWeight="700" textAnchor="middle">AUG</text>
                      </svg>
                    </div>
                  </div>

                  {/* Mini stats */}
                  <div className="kp-mini-stats">
                    <div className="kp-mini-stat">
                      <span className="kp-mini-stat-val">45+</span>
                      <span className="kp-mini-stat-lbl">Classes/Wk</span>
                    </div>
                    <div className="kp-mini-stat">
                      <span className="kp-mini-stat-val">12</span>
                      <span className="kp-mini-stat-lbl">Coaches</span>
                    </div>
                    <div className="kp-mini-stat">
                      <span className="kp-mini-stat-val">99%</span>
                      <span className="kp-mini-stat-lbl">Retention</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom: 3 Floating Glass Feature Cards */}
            <div className="kp-feature-grid">

              {/* Card 1: Elite Training */}
              <div className="kp-glass-card">
                <div>
                  <div className="kp-icon-badge">
                    <Users size={18} />
                  </div>
                  <h3 className="kp-card-title">ELITE TRAINING</h3>
                  <p className="kp-card-body" style={{ marginBottom: '0.65rem' }}>
                    High-octane kettlebell work, athletic conditioning, and form audits.
                  </p>

                  {/* Coach Spotlight Sub-Widget */}
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '12px',
                    padding: '0.85rem',
                    marginBottom: '0.85rem',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: '#FFFFFF', letterSpacing: '0.06em' }}>
                        COACH SPOTLIGHT
                      </span>
                      <span style={{ fontSize: '0.6rem', fontWeight: 800, color: 'var(--accent-lime)', background: 'var(--accent-lime-dim)', padding: '2px 7px', borderRadius: '4px' }}>
                        ★ 4.98 RATING
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
                      <img
                        src="/images/trainers/marcus_vance.jpg"
                        alt="Marcus Vance"
                        onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=200&q=80'; }}
                        style={{ width: '38px', height: '38px', borderRadius: '8px', objectFit: 'cover', border: '1px solid var(--accent-lime)' }}
                      />
                      <div>
                        <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.2 }}>Marcus Vance</div>
                        <div style={{ fontSize: '0.62rem', color: 'var(--accent-lime)', fontWeight: 700 }}>Head of High Performance</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.6rem', color: 'var(--text-muted)', fontWeight: 700, background: 'rgba(13, 17, 14, 0.4)', padding: '0.4rem 0.6rem', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <span>3,400+ Sessions</span>
                      <span>NSCA-CSCS</span>
                    </div>
                  </div>
                </div>

                <Link to="/trainers" className="btn-outline" style={{ fontSize: '0.78rem', padding: '0.45rem 1.1rem', justifyContent: 'center' }}>
                  Meet Master Coaches <ArrowRight size={13} />
                </Link>
              </div>

              {/* Card 2: Live Classes */}
              <div className="kp-glass-card">
                <div>
                  <div className="kp-icon-badge">
                    <PlayCircle size={18} />
                  </div>
                  <h3 className="kp-card-title">LIVE CLASSES</h3>
                  <p className="kp-card-body" style={{ marginBottom: '0.65rem' }}>
                    Daily boutique group sessions & Reformer Pilates studio.
                  </p>

                  {/* Today's Schedule & Arena Capacity Sub-Widget */}
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '12px',
                    padding: '0.85rem',
                    marginBottom: '0.85rem',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: '#FFFFFF', letterSpacing: '0.06em' }}>
                        TODAY'S SCHEDULE
                      </span>
                      <span style={{ fontSize: '0.6rem', fontWeight: 800, color: '#FF3C38', background: 'rgba(255, 60, 56, 0.15)', padding: '2px 7px', borderRadius: '4px' }}>
                        ⚡ 3 SPOTS LEFT
                      </span>
                    </div>

                    <div className="kp-class-pills" style={{ margin: '0 0 0.6rem 0' }}>
                      {[{ cat: 'HIIT', time: '6PM', active: true }, { cat: 'PILATES', time: '7PM', active: false }, { cat: 'STRENGTH', time: '8AM', active: false }].map((p) => (
                        <div key={p.cat} className="kp-class-pill" style={{
                          background: p.active ? 'rgba(166, 255, 0, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                          borderColor: p.active ? 'var(--accent-lime)' : 'rgba(255, 255, 255, 0.12)'
                        }}>
                          <span className="kp-pill-cat" style={{ color: p.active ? 'var(--accent-lime)' : 'var(--text-main)' }}>{p.cat}</span>
                          <span className="kp-pill-time">{p.time}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ background: 'rgba(13, 17, 14, 0.4)', padding: '0.45rem 0.6rem', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.6rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                        <span style={{ color: 'var(--text-muted)' }}>Arena Capacity</span>
                        <span style={{ color: 'var(--accent-lime)' }}>85% Full</span>
                      </div>
                      <div className="kp-progress-bar" style={{ height: '5px', margin: 0 }}>
                        <div className="kp-progress-fill" style={{ width: '85%' }} />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={onOpenBookingModal}
                  className="btn-primary"
                  style={{ fontSize: '0.78rem', padding: '0.45rem 1.1rem', justifyContent: 'center', width: '100%' }}
                >
                  Book Next Spot <ArrowRight size={13} />
                </button>
              </div>

              {/* Card 3: My Performance */}
              <div className="kp-glass-card">
                <div className="kp-icon-badge">
                  <TrendingUp size={18} />
                </div>
                <h3 className="kp-card-title">MY PERFORMANCE</h3>

                <div style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '12px',
                  padding: '0.85rem',
                  marginBottom: '0.85rem',
                }}>
                  {/* Header: Title + Streak Badge */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: '#FFFFFF', letterSpacing: '0.06em' }}>
                      PERSONAL METRICS
                    </span>
                    <span style={{ fontSize: '0.6rem', fontWeight: 800, color: 'var(--accent-lime)', background: 'var(--accent-lime-dim)', padding: '2px 7px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '3px' }}>
                      🔥 14-DAY STREAK
                    </span>
                  </div>

                  {/* 2-Column Key Performance Stats */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '0.65rem' }}>
                    <div style={{ background: 'rgba(13, 17, 14, 0.4)', borderRadius: '8px', padding: '0.45rem 0.6rem', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <span style={{ fontSize: '0.58rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', display: 'block' }}>Avg Burn</span>
                      <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.25rem', color: 'var(--text-main)', lineHeight: 1 }}>
                        740 <span style={{ fontSize: '0.75rem', color: 'var(--accent-lime)', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}>kcal</span>
                      </span>
                    </div>
                    <div style={{ background: 'rgba(13, 17, 14, 0.4)', borderRadius: '8px', padding: '0.45rem 0.6rem', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <span style={{ fontSize: '0.58rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', display: 'block' }}>Strength PR</span>
                      <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.25rem', color: 'var(--accent-lime)', lineHeight: 1 }}>+14.2%</span>
                    </div>
                  </div>

                  {/* 7-Day Workout Frequency Bar Chart */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.58rem', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '0.35rem' }}>
                      <span>Weekly Goal: 4 / 5 Done</span>
                      <span style={{ color: 'var(--accent-lime)' }}>80% Target</span>
                    </div>
                    <div style={{ display: 'flex', gap: '5px', height: '24px', alignItems: 'flex-end' }}>
                      {[
                        { day: 'M', h: '65%', active: true },
                        { day: 'T', h: '90%', active: true },
                        { day: 'W', h: '45%', active: true },
                        { day: 'T', h: '85%', active: true },
                        { day: 'F', h: '30%', active: false },
                        { day: 'S', h: '100%', active: false },
                        { day: 'S', h: '20%', active: false },
                      ].map((b, idx) => (
                        <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                          <div style={{
                            width: '100%',
                            height: b.h,
                            background: b.active ? 'linear-gradient(180deg, #A6FF00 0%, rgba(166,255,0,0.4) 100%)' : 'rgba(255,255,255,0.1)',
                            borderRadius: '3px',
                            boxShadow: b.active ? '0 0 6px rgba(166,255,0,0.4)' : 'none'
                          }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Link to="/membership" className="btn-outline" style={{ fontSize: '0.78rem', padding: '0.45rem 1.1rem' }}>
                  Join & Track →
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FEATURED DISCIPLINES SECTION
      ═══════════════════════════════════════════════ */}
      <section className="kp-section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
        <div className="kp-container">
          <div className="kp-section-header">
            <div>
              <span className="kp-section-label">Disciplines & Recovery</span>
              <h2 className="kp-section-title">
                ENGINEERED FOR <span className="neon-text-glow">RESULTS</span>
              </h2>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', maxWidth: '380px', lineHeight: 1.6 }}>
              Four specialized athletic disciplines designed to build functional power, core precision, and accelerated regeneration.
            </p>
          </div>

          <div className="kp-programs-grid">
            {featuredPrograms.map((prog) => (
              <div key={prog.id} className="kp-program-card">
                <div className="kp-program-card-img-wrap">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="kp-program-card-img"
                    onError={(e) => { e.target.src = prog.fallbackImage; }}
                  />
                </div>
                <div className="kp-program-card-body">
                  <div className="kp-program-badge">
                    <span className="kp-program-tag">{prog.intensity}</span>
                    <span className="kp-program-tag kp-program-tag-secondary">{prog.duration}</span>
                    <span className="kp-program-tag kp-program-tag-secondary">{prog.calories}</span>
                  </div>
                  <h3 className="kp-program-title">{prog.title}</h3>
                  <p className="kp-program-tagline">{prog.tagline}</p>
                  <p className="kp-program-desc">{prog.description}</p>

                  <div className="kp-program-features">
                    {prog.features.map((feat) => (
                      <div key={feat} className="kp-program-feature">
                        <div className="kp-program-feature-dot" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={onOpenBookingModal}
                    className="btn-primary kp-w-full"
                    style={{ justifyContent: 'center' }}
                  >
                    Book Class <Zap size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          MEMBER TESTIMONIALS SECTION
      ═══════════════════════════════════════════════ */}
      <section className="kp-section kp-section-alt">
        <div className="kp-container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="kp-section-label">Real Results</span>
            <h2 className="kp-section-title">
              WHAT OUR <span className="neon-text-glow">MEMBERS</span> SAY
            </h2>
          </div>

          <div className="kp-testimonials-grid">
            {memberTestimonials.map((t) => (
              <div key={t.id} className="kp-testimonial-card">
                <div className="kp-testimonial-stars">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="var(--accent-lime)" color="var(--accent-lime)" />
                  ))}
                </div>
                <p className="kp-testimonial-quote">"{t.quote}"</p>
                <div className="kp-testimonial-author">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="kp-testimonial-avatar"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <div>
                    <div className="kp-testimonial-name">{t.name}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.1rem' }}>{t.role}</div>
                    <div className="kp-testimonial-tier">{t.tier}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          INSTAGRAM COMMUNITY GALLERY
      ═══════════════════════════════════════════════ */}
      <section className="kp-section">
        <div className="kp-container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="kp-section-label">
              <Instagram size={12} style={{ display: 'inline', marginRight: '0.3rem' }} />
              Community Gallery
            </span>
            <h2 className="kp-section-title">
              @KINETICPULSE <span className="neon-text-glow">MOMENTS</span>
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
              Tag <strong style={{ color: 'var(--accent-lime)' }}>@kineticpulse</strong> to be featured in our community wall
            </p>
          </div>

          <div className="kp-gallery-grid">
            {instagramGallery.map((item) => (
              <div key={item.id} className="kp-gallery-item">
                <img
                  src={item.image}
                  alt={item.title}
                  onError={(e) => { e.target.src = item.fallbackImage; }}
                />
                <div className="kp-gallery-overlay">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Heart size={16} fill="var(--text-main)" color="var(--text-main)" />
                    <span className="kp-gallery-likes">{item.likes}</span>
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.75)', fontWeight: 700 }}>
                    {item.title}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/membership" className="btn-primary" style={{ display: 'inline-flex' }}>
              Become a Member Today <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
