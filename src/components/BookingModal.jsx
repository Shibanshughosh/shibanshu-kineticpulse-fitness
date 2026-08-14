import React, { useState, useEffect } from 'react';
import { X, Zap, Calendar, Clock, MapPin, User, CheckCircle2, ArrowRight } from 'lucide-react';
import { classScheduleData } from '../data/gymData';

export default function BookingModal({ isOpen, onClose, initialClass, onShowToast }) {
  const [selectedClass, setSelectedClass] = useState(null);
  const [step, setStep] = useState(1); // 1: pick class, 2: contact, 3: confirmed
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setStep(initialClass ? 2 : 1);
      setSelectedClass(initialClass || null);
      setForm({ name: '', email: '', phone: '' });
    }
  }, [isOpen, initialClass]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const openClasses = classScheduleData.filter(c => c.status !== 'Waitlist Only').slice(0, 8);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      if (onShowToast) onShowToast('Please fill in all required fields.', 'error');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(3);
      if (onShowToast) onShowToast(`✅ Spot reserved for ${selectedClass?.title || 'your class'}!`, 'success');
    }, 1200);
  };

  const getStatusStyle = (status) => {
    if (status === 'Waitlist Only') return 'kp-status-badge kp-status-waitlist';
    if (status === 'Filling Fast' || status === '1 Slot Left') return 'kp-status-badge kp-status-filling';
    return 'kp-status-badge kp-status-open';
  };

  return (
    <div className="kp-modal-overlay" onClick={onClose}>
      <div
        className="kp-modal"
        style={{ maxWidth: '540px' }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Book a class"
      >
        <button className="kp-modal-close" onClick={onClose} aria-label="Close booking modal">
          <X size={16} />
        </button>

        {/* Header */}
        <div style={{ marginBottom: '1.5rem' }}>
          <span className="kp-section-label">
            <Zap size={12} style={{ display: 'inline', marginRight: '0.3rem' }} />
            Class Booking
          </span>
          <h2 className="font-heading" style={{ fontSize: '2rem', color: 'var(--text-main)', lineHeight: 1 }}>
            {step === 3 ? 'SPOT CONFIRMED!' : 'BOOK YOUR SPOT'}
          </h2>
        </div>

        {/* STEP 1: Pick a class */}
        {step === 1 && (
          <div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              Select an available class to reserve your spot:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', maxHeight: '380px', overflowY: 'auto', paddingRight: '0.25rem' }}>
              {openClasses.map((cls) => (
                <button
                  key={cls.id}
                  onClick={() => { setSelectedClass(cls); setStep(2); }}
                  style={{
                    background: 'var(--bg-carbon)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.85rem 1rem',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-lime)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
                >
                  <div>
                    <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.25rem', color: 'var(--text-main)', lineHeight: 1 }}>
                      {cls.title}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                      {cls.day} · {cls.time} · {cls.duration} · {cls.room}
                    </div>
                  </div>
                  <span className={getStatusStyle(cls.status)} style={{ flexShrink: 0 }}>
                    {cls.status}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: Contact Info */}
        {step === 2 && selectedClass && (
          <form onSubmit={handleSubmit}>
            {/* Selected class summary */}
            <div style={{
              background: 'var(--bg-carbon)',
              border: '1px solid var(--border-glass)',
              borderRadius: 'var(--radius-sm)',
              padding: '1rem',
              marginBottom: '1.25rem',
            }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--accent-lime)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.35rem' }}>
                Selected Class
              </div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', color: 'var(--text-main)', lineHeight: 1 }}>
                {selectedClass.title}
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Calendar size={12} color="var(--accent-lime)" /> {selectedClass.day}
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Clock size={12} color="var(--accent-lime)" /> {selectedClass.time} ({selectedClass.duration})
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <User size={12} color="var(--accent-lime)" /> {selectedClass.instructor}
                </span>
              </div>
            </div>

            <div className="kp-form-grid" style={{ marginBottom: '1rem' }}>
              <div className="kp-form-group">
                <label className="kp-form-label">Full Name *</label>
                <div className="kp-form-input-wrap">
                  <User size={14} className="kp-form-input-icon" />
                  <input
                    className="kp-form-input"
                    type="text"
                    required
                    placeholder="Your full name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                  />
                </div>
              </div>
              <div className="kp-form-group">
                <label className="kp-form-label">Email Address *</label>
                <div className="kp-form-input-wrap">
                  <ArrowRight size={14} className="kp-form-input-icon" />
                  <input
                    className="kp-form-input"
                    type="email"
                    required
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>
            </div>

            <div className="kp-form-group" style={{ marginBottom: '1.5rem' }}>
              <label className="kp-form-label">Phone Number *</label>
              <div className="kp-form-input-wrap">
                <Zap size={14} className="kp-form-input-icon" />
                <input
                  className="kp-form-input"
                  type="tel"
                  required
                  placeholder="+1 (555) 000-0000"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                />
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                type="button"
                className="btn-ghost"
                style={{ width: '35%', fontSize: '0.78rem' }}
                onClick={() => setStep(1)}
              >
                ← Change
              </button>
              <button
                type="submit"
                className="btn-primary kp-w-full"
                disabled={isSubmitting}
                style={{ flexGrow: 1 }}
              >
                {isSubmitting ? 'Reserving...' : 'Confirm Booking'}
                {!isSubmitting && <ArrowRight size={15} />}
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Confirmation */}
        {step === 3 && (
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '72px', height: '72px', borderRadius: '50%',
              background: 'var(--accent-lime-dim)', border: '2px solid var(--accent-lime)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 1.25rem',
              boxShadow: '0 0 30px var(--accent-lime-glow)',
            }}>
              <CheckCircle2 size={36} color="var(--accent-lime)" />
            </div>
            <h3 className="font-heading" style={{ fontSize: '1.75rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
              {selectedClass?.title || 'Class'}
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
              {selectedClass?.day} · {selectedClass?.time} · {selectedClass?.room}
            </p>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
              A confirmation has been sent to <span style={{ color: 'var(--accent-lime)' }}>{form.email}</span>
            </p>
            <button className="btn-primary kp-w-full" onClick={onClose}>
              Done — See You There! <Zap size={15} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
