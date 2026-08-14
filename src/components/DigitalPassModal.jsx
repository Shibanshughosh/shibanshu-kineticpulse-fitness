import React, { useEffect } from 'react';
import { X, Zap, ShieldCheck, Download } from 'lucide-react';

export default function DigitalPassModal({ isOpen, onClose, passData, onShowToast }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen || !passData) return null;

  const handleCopy = () => {
    navigator.clipboard?.writeText(passData.memberId).then(() => {
      if (onShowToast) onShowToast('Pass ID copied to clipboard!', 'success');
    });
  };

  return (
    <div className="kp-modal-overlay" onClick={onClose}>
      <div
        className="kp-modal"
        style={{ maxWidth: '440px', textAlign: 'center' }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Digital membership pass"
      >
        <button className="kp-modal-close" onClick={onClose} aria-label="Close pass modal">
          <X size={16} />
        </button>

        {/* Header */}
        <div style={{ marginBottom: '1.5rem' }}>
          <span className="kp-section-label">Membership Issued</span>
          <h2 className="font-heading" style={{ fontSize: '2rem', color: 'var(--text-main)', lineHeight: 1 }}>
            DIGITAL PASS ACTIVATED
          </h2>
        </div>

        {/* Pass Card */}
        <div className="kp-pass-card" style={{ marginBottom: '1.5rem' }}>

          {/* KineticPulse logo row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <div className="kp-logo-icon" style={{ width: '32px', height: '32px', borderRadius: '8px' }}>
              <Zap size={16} />
            </div>
            <span className="kp-logo-name" style={{ fontSize: '1.4rem' }}>
              <span className="kp-logo-bold">KINETIC</span>
              <span className="kp-logo-light">PULSE</span>
            </span>
          </div>

          {/* Tier badge */}
          <div style={{
            display: 'inline-block',
            background: 'var(--accent-lime-dim)',
            border: '1px solid var(--border-glass)',
            borderRadius: 'var(--radius-pill)',
            padding: '0.25rem 1rem',
            fontSize: '0.68rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--accent-lime)',
            marginBottom: '1.5rem',
          }}>
            {passData.tierName}
          </div>

          {/* Member Name */}
          <div className="font-heading" style={{ fontSize: '2rem', color: 'var(--text-main)', lineHeight: 1, marginBottom: '0.5rem' }}>
            {passData.memberName}
          </div>

          {/* Pass ID */}
          <button
            onClick={handleCopy}
            title="Click to copy pass ID"
            style={{
              background: 'rgba(13,17,14,0.8)',
              border: '1px solid var(--border-glass)',
              borderRadius: '8px',
              padding: '0.65rem 1.25rem',
              cursor: 'pointer',
              margin: '0.75rem 0',
              display: 'block',
              width: '100%',
            }}
          >
            <div className="kp-pass-id">{passData.memberId}</div>
            <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.2rem' }}>
              Tap to copy Pass ID
            </div>
          </button>

          {/* Valid Until */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '1rem',
            padding: '0.65rem 0.85rem',
            background: 'rgba(13,17,14,0.5)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '8px',
          }}>
            <div>
              <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Valid Until
              </div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.1rem', color: 'var(--text-main)' }}>
                {passData.validUntil}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.72rem', color: 'var(--accent-lime)', fontWeight: 700 }}>
              <ShieldCheck size={14} />
              VERIFIED
            </div>
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <button className="btn-primary kp-w-full" onClick={handleCopy}>
            <Download size={15} /> Save Pass
          </button>
          <button className="btn-ghost kp-w-full" onClick={onClose}>
            Close & Continue
          </button>
        </div>

        <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '1rem', lineHeight: 1.5 }}>
          Present this pass at the KineticPulse front desk or scan via our app. Welcome to the community! 🏋️
        </p>
      </div>
    </div>
  );
}
