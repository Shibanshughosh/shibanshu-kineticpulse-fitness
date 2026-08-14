import React, { useState, useEffect } from 'react';
import { X, Star, Instagram, Award, ArrowRight, Calendar } from 'lucide-react';

export default function CoachModal({ isOpen, onClose, trainer, onShowToast }) {
  const [bookingForm, setBookingForm] = useState({ name: '', email: '', goal: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setBookingForm({ name: '', email: '', goal: '' });
      setSubmitted(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen || !trainer) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bookingForm.name || !bookingForm.email) {
      if (onShowToast) onShowToast('Please fill in your name and email.', 'error');
      return;
    }
    setSubmitted(true);
    if (onShowToast) onShowToast(`1-on-1 request sent to ${trainer.name}!`, 'success');
  };

  return (
    <div className="kp-modal-overlay" onClick={onClose}>
      <div
        className="kp-modal"
        style={{ maxWidth: '600px' }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`${trainer.name} profile`}
      >
        <button className="kp-modal-close" onClick={onClose} aria-label="Close trainer profile">
          <X size={16} />
        </button>

        {/* Trainer Header */}
        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
          <img
            src={trainer.image}
            alt={trainer.name}
            onError={e => { e.target.src = trainer.fallbackImage; }}
            style={{
              width: '80px', height: '80px', borderRadius: '14px',
              objectFit: 'cover', border: '2px solid var(--border-glass)',
              flexShrink: 0,
            }}
          />
          <div>
            <h2 className="font-heading" style={{ fontSize: '2rem', color: 'var(--text-main)', lineHeight: 1 }}>
              {trainer.name}
            </h2>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-lime)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '0.25rem' }}>
              {trainer.role}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.5rem' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} fill="var(--accent-lime)" color="var(--accent-lime)" />
              ))}
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700 }}>
                {trainer.rating} · {trainer.sessionsCoached} sessions
              </span>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1.25rem' }}>
          {[
            { val: trainer.experience, lbl: 'Experience' },
            { val: trainer.rating + '⭐', lbl: 'Rating' },
            { val: trainer.sessionsCoached, lbl: 'Sessions' },
          ].map((s) => (
            <div key={s.lbl} style={{
              background: 'var(--bg-carbon)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-sm)',
              padding: '0.65rem',
              textAlign: 'center',
            }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.35rem', color: 'var(--accent-lime)', lineHeight: 1 }}>{s.val}</div>
              <div style={{ fontSize: '0.6rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.07em', marginTop: '0.2rem' }}>{s.lbl}</div>
            </div>
          ))}
        </div>

        {/* Bio */}
        <div style={{
          background: 'var(--bg-carbon)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-sm)',
          padding: '1rem',
          marginBottom: '1.25rem',
        }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-off)', lineHeight: 1.65 }}>{trainer.bio}</p>
        </div>

        {/* Certifications */}
        <div style={{ marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.65rem' }}>
            <Award size={14} color="var(--accent-lime)" />
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Certifications
            </span>
          </div>
          <div className="kp-trainer-certs">
            {trainer.certifications.map((cert) => (
              <span key={cert} className="kp-trainer-cert">{cert}</span>
            ))}
          </div>
        </div>

        {/* Instagram */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1.5rem' }}>
          <Instagram size={14} color="var(--accent-lime)" />
          <span style={{ fontSize: '0.8rem', color: 'var(--accent-lime)', fontWeight: 700 }}>{trainer.instagram}</span>
        </div>

        {/* 1-on-1 Booking Form */}
        <div style={{
          background: 'var(--bg-glass)',
          border: '1px solid var(--border-glass)',
          borderRadius: 'var(--radius-md)',
          padding: '1.25rem',
        }}>
          {!submitted ? (
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem' }}>
                <Calendar size={14} color="var(--accent-lime)" />
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Request 1-on-1 Private Session
                </span>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="kp-form-grid" style={{ marginBottom: '0.85rem' }}>
                  <div className="kp-form-group">
                    <label className="kp-form-label">Your Name *</label>
                    <input
                      className="kp-form-input no-icon"
                      type="text"
                      required
                      placeholder="Full name"
                      value={bookingForm.name}
                      onChange={e => setBookingForm({ ...bookingForm, name: e.target.value })}
                    />
                  </div>
                  <div className="kp-form-group">
                    <label className="kp-form-label">Email *</label>
                    <input
                      className="kp-form-input no-icon"
                      type="email"
                      required
                      placeholder="you@email.com"
                      value={bookingForm.email}
                      onChange={e => setBookingForm({ ...bookingForm, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="kp-form-group" style={{ marginBottom: '1rem' }}>
                  <label className="kp-form-label">Your Goal (Optional)</label>
                  <input
                    className="kp-form-input no-icon"
                    type="text"
                    placeholder="e.g. Improve deadlift form, lose 10kg, prepare for marathon..."
                    value={bookingForm.goal}
                    onChange={e => setBookingForm({ ...bookingForm, goal: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn-primary kp-w-full">
                  Send 1-on-1 Request <ArrowRight size={15} />
                </button>
              </form>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '0.75rem' }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', color: 'var(--accent-lime)', marginBottom: '0.4rem' }}>
                REQUEST SENT!
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                {trainer.name} will reach out to schedule your session within 24 hours.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
