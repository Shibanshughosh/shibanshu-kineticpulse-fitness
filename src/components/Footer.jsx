import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Instagram, Twitter, Youtube, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export default function Footer({ onShowToast }) {
  const year = new Date().getFullYear();

  const handleNewsletter = (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input').value;
    if (!email) return;
    if (onShowToast) onShowToast(`Subscribed! Welcome to the KineticPulse community.`, 'success');
    e.target.reset();
  };

  return (
    <footer className="kp-footer">
      <div className="kp-container">
        <div className="kp-footer-grid">

          {/* Brand Column */}
          <div>
            <Link to="/" className="kp-logo" style={{ marginBottom: '0.85rem', display: 'inline-flex' }}>
              <div className="kp-logo-icon">
                <Zap size={20} />
              </div>
              <div className="kp-logo-text-wrap">
                <span className="kp-logo-name">
                  <span className="kp-logo-bold">KINETIC</span>
                  <span className="kp-logo-light">PULSE</span>
                </span>
                <span className="kp-logo-sub">Elite Fitness Studio</span>
              </div>
            </Link>
            <p className="kp-footer-brand-desc">
              Boutique fitness studio engineered for high-performance athletes, Reformer Pilates practitioners, and elite recovery. 1,200+ members. 12 master coaches.
            </p>

            {/* Social Icons */}
            <div className="kp-footer-social">
              {[
                { icon: Instagram, label: 'Instagram', href: '#' },
                { icon: Twitter, label: 'Twitter', href: '#' },
                { icon: Youtube, label: 'YouTube', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} className="kp-footer-social-btn" aria-label={label}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="kp-footer-col-title">Quick Links</div>
            <ul className="kp-footer-links">
              {[
                { to: '/', label: 'Home' },
                { to: '/schedule', label: 'Class Schedule' },
                { to: '/trainers', label: 'Our Coaches' },
                { to: '/membership', label: 'Membership Plans' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="kp-footer-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <div className="kp-footer-col-title">Programs</div>
            <ul className="kp-footer-links">
              {[
                'HIIT & Conditioning',
                'Reformer Pilates',
                'Barbell & Powerlifting',
                'Infrared Sauna Recovery',
                '1-on-1 Private Coaching',
              ].map((p) => (
                <li key={p}>
                  <span className="kp-footer-link">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <div className="kp-footer-col-title">Contact Us</div>
            <ul className="kp-footer-links" style={{ marginBottom: '1.25rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={14} color="var(--accent-lime)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span className="kp-footer-link" style={{ cursor: 'default' }}>
                  1430 Athletic Boulevard, Suite 500, San Francisco CA 94102
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={13} color="var(--accent-lime)" />
                <span className="kp-footer-link" style={{ cursor: 'default' }}>+1 (415) 882-6200</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={13} color="var(--accent-lime)" />
                <span className="kp-footer-link" style={{ cursor: 'default' }}>hello@kineticpulse.com</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              Newsletter
            </div>
            <form onSubmit={handleNewsletter} style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="email"
                placeholder="your@email.com"
                required
                style={{
                  flex: 1,
                  background: 'var(--bg-carbon)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.55rem 0.85rem',
                  fontSize: '0.8rem',
                  color: 'var(--text-main)',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  outline: 'none',
                  minWidth: 0,
                }}
              />
              <button type="submit" className="btn-primary" style={{ padding: '0.55rem 0.85rem', borderRadius: 'var(--radius-sm)' }}>
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="kp-footer-bottom">
          <p className="kp-footer-copy">
            © {year} <span>KineticPulse</span> Fitness Studio. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy Policy', 'Terms of Service', 'Membership Agreement'].map((t) => (
              <span key={t} className="kp-footer-link" style={{ fontSize: '0.75rem' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
