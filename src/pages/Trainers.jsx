import React, { useState } from 'react';
import { Star, Instagram, ExternalLink } from 'lucide-react';
import { masterTrainers } from '../data/gymData';
import CoachModal from '../components/CoachModal';

export default function Trainers({ onShowToast }) {
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (trainer) => {
    setSelectedTrainer(trainer);
    setModalOpen(true);
  };

  return (
    <div className="kp-page">
      <div className="kp-container">

        {/* Page Header */}
        <div className="kp-page-header">
          <span className="kp-section-label">Expert Coaching Staff</span>
          <h1 className="kp-page-title">
            MASTER <span className="neon-text-glow">COACHES</span>
          </h1>
          <p className="kp-page-subtitle">
            12 certified elite coaches with 5,000+ combined sessions coached. Every trainer is handpicked for world-class credentials and results-driven methodology.
          </p>
        </div>

        {/* Trainer Cards Grid */}
        <div className="kp-trainers-grid">
          {masterTrainers.map((trainer) => (
            <div key={trainer.id} className="kp-trainer-card">

              {/* Photo */}
              <div className="kp-trainer-img-wrap">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="kp-trainer-img"
                  onError={(e) => { e.target.src = trainer.fallbackImage; }}
                />
                <div className="kp-trainer-img-overlay" />

                {/* Instagram overlay pill */}
                <div style={{
                  position: 'absolute', top: '0.75rem', right: '0.75rem',
                  background: 'rgba(13,17,14,0.85)', border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-pill)', padding: '0.3rem 0.65rem',
                  display: 'flex', alignItems: 'center', gap: '0.35rem',
                  fontSize: '0.62rem', fontWeight: 700, color: 'var(--accent-lime)',
                }}>
                  <Instagram size={11} />
                  {trainer.instagram}
                </div>
              </div>

              {/* Body */}
              <div className="kp-trainer-body">
                <div className="kp-trainer-name">{trainer.name}</div>
                <div className="kp-trainer-role">{trainer.role}</div>

                {/* Stats */}
                <div className="kp-trainer-stats">
                  <div className="kp-trainer-stat">
                    <span className="kp-trainer-stat-val">{trainer.experience}</span>
                    <span className="kp-trainer-stat-lbl">Exp.</span>
                  </div>
                  <div className="kp-trainer-stat">
                    <span className="kp-trainer-stat-val">{trainer.rating}</span>
                    <span className="kp-trainer-stat-lbl">Rating</span>
                  </div>
                  <div className="kp-trainer-stat">
                    <span className="kp-trainer-stat-val" style={{ fontSize: '0.85rem' }}>{trainer.sessionsCoached}</span>
                    <span className="kp-trainer-stat-lbl">Sessions</span>
                  </div>
                </div>

                {/* Star rating */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '0.85rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="var(--accent-lime)" color="var(--accent-lime)" />
                  ))}
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginLeft: '0.25rem', fontWeight: 700 }}>
                    {trainer.rating}
                  </span>
                </div>

                {/* Certifications */}
                <div className="kp-trainer-certs">
                  {trainer.certifications.map((cert) => (
                    <span key={cert} className="kp-trainer-cert">{cert}</span>
                  ))}
                </div>

                {/* View Profile CTA */}
                <button
                  id={`trainer-profile-${trainer.id}`}
                  className="btn-outline kp-w-full"
                  style={{ justifyContent: 'center', marginTop: '0.75rem', fontSize: '0.82rem' }}
                  onClick={() => handleOpenModal(trainer)}
                >
                  View Full Profile <ExternalLink size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div style={{
          marginTop: '4rem',
          background: 'var(--bg-glass)',
          backdropFilter: 'blur(20px)',
          border: '1px solid var(--border-glass)',
          borderRadius: 'var(--radius-xl)',
          padding: '2.5rem',
          textAlign: 'center',
          boxShadow: '0 0 50px rgba(166,255,0,0.1)',
        }}>
          <span className="kp-section-label">Private Coaching</span>
          <h2 className="font-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-main)', marginBottom: '0.75rem' }}>
            WANT A DEDICATED <span className="neon-text-glow">COACH?</span>
          </h2>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', maxWidth: '480px', margin: '0 auto 1.75rem', lineHeight: 1.6 }}>
            Our VIP Private Performance tier pairs you with a dedicated master coach, custom nutrition protocol, and personalized 1-on-1 programming.
          </p>
          <a href="/membership" className="btn-primary" style={{ display: 'inline-flex' }}>
            Explore VIP Tier →
          </a>
        </div>

      </div>

      {/* Coach Profile Modal */}
      <CoachModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        trainer={selectedTrainer}
        onShowToast={onShowToast}
      />
    </div>
  );
}
