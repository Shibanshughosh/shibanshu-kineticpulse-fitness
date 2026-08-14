import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Zap, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenBookingModal }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/schedule', label: 'Schedule' },
    { to: '/trainers', label: 'Trainers' },
    { to: '/membership', label: 'Membership' },
  ];

  const closeDrawer = () => setMobileOpen(false);

  return (
    <>
      <header className="kp-header">
        <div className="kp-container">
          <nav className="kp-nav-wrap">

            {/* Logo */}
            <Link to="/" className="kp-logo" onClick={closeDrawer}>
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

            {/* Desktop Nav Links */}
            <ul className="kp-nav-links">
              {navLinks.map((lnk) => (
                <li key={lnk.to}>
                  <NavLink
                    to={lnk.to}
                    end={lnk.to === '/'}
                    className={({ isActive }) =>
                      `kp-nav-link${isActive ? ' active' : ''}`
                    }
                  >
                    {lnk.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <button
              id="nav-join-btn"
              className="btn-primary"
              onClick={onOpenBookingModal}
              style={{ display: 'none' }}
              aria-label="Open booking modal"
            >
              Book a Class <ArrowRight size={15} />
            </button>

            {/* JOIN NOW — desktop only shown via CSS > 768px */}
            <Link
              to="/membership"
              className="btn-primary"
              style={{ fontSize: '0.8rem', padding: '0.55rem 1.4rem' }}
            >
              Join Now
            </Link>

            {/* Mobile hamburger */}
            <button
              className="kp-mobile-menu-btn"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              style={{ marginLeft: '0.75rem' }}
            >
              <Menu size={22} />
            </button>

          </nav>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`kp-mobile-overlay${mobileOpen ? ' open' : ''}`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <div className={`kp-mobile-drawer${mobileOpen ? ' open' : ''}`} aria-label="Mobile navigation">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/" className="kp-logo" onClick={closeDrawer}>
            <div className="kp-logo-icon">
              <Zap size={18} />
            </div>
            <span className="kp-logo-name" style={{ fontSize: '1.5rem' }}>
              <span className="kp-logo-bold">KINETIC</span>
              <span className="kp-logo-light">PULSE</span>
            </span>
          </Link>
          <button className="kp-mobile-menu-btn" onClick={closeDrawer} aria-label="Close navigation menu">
            <X size={22} />
          </button>
        </div>

        <ul className="kp-mobile-nav-links">
          {navLinks.map((lnk) => (
            <li key={lnk.to}>
              <NavLink
                to={lnk.to}
                end={lnk.to === '/'}
                className={({ isActive }) =>
                  `kp-mobile-nav-link${isActive ? ' active' : ''}`
                }
                onClick={closeDrawer}
              >
                {lnk.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link to="/membership" className="btn-primary kp-w-full" onClick={closeDrawer}>
          Join Now <ArrowRight size={15} />
        </Link>
      </div>
    </>
  );
}
