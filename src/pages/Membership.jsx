import React, { useState } from 'react';
import {
  CheckCircle2, Sparkles, ArrowRight, Lock, CreditCard, Smartphone, Zap,
  User, Mail, Phone
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { membershipTiers } from '../data/gymData';
import DigitalPassModal from '../components/DigitalPassModal';

export default function Membership({ onOpenPassModal, onShowToast }) {
  const [isAnnual, setIsAnnual] = useState(false);
  const [selectedTier, setSelectedTier] = useState(membershipTiers[1]);
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [memberInfo, setMemberInfo] = useState({ fullName: '', email: '', phone: '', emergencyContact: '' });
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [issuedPass, setIssuedPass] = useState(null);
  const [passModalOpen, setPassModalOpen] = useState(false);

  const handleSelectTier = (tier) => {
    setSelectedTier(tier);
    setCheckoutStep(2);
    const el = document.getElementById('checkout-wizard');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleConfirmMemberInfo = (e) => {
    e.preventDefault();
    if (!memberInfo.fullName || !memberInfo.email || !memberInfo.phone) {
      if (onShowToast) onShowToast('Please complete all required fields.', 'error');
      return;
    }
    setCheckoutStep(3);
  };

  const handleFinalPayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);

      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#A6FF00', '#ffffff', '#8CE000']
      });

      const randomId = 'KP-' + Math.floor(10000 + Math.random() * 90000) + '-VIP';
      const newPass = {
        memberName: memberInfo.fullName.toUpperCase(),
        tierName: selectedTier.name.toUpperCase(),
        memberId: randomId,
        validUntil: isAnnual ? `${new Date().getMonth() > 5 ? '08' : '07'} / 2027 (ANNUAL VIP)` : 'MONTHLY RENEWAL'
      };

      setIssuedPass(newPass);
      setPassModalOpen(true);
      if (onOpenPassModal) onOpenPassModal(newPass);
      if (onShowToast) onShowToast(`🎉 Welcome to KineticPulse! Pass ${randomId} activated!`, 'success');
      setCheckoutStep(1);
      setMemberInfo({ fullName: '', email: '', phone: '', emergencyContact: '' });
    }, 1600);
  };

  const displayPrice = (tier) => isAnnual ? tier.priceAnnual : tier.priceMonthly;

  return (
    <div className="kp-page">
      <div className="kp-container">

        {/* Page Header */}
        <div className="kp-page-header">
          <span className="kp-section-label">Membership Portal</span>
          <h1 className="kp-page-title">
            ELEVATE YOUR <span className="neon-text-glow">STANDARDS</span>
          </h1>
          <p className="kp-page-subtitle">
            Choose an athletic tier that matches your goals. No hidden fees, instant digital pass issuance, and cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="kp-toggle-row">
            <span className={`kp-toggle-label ${!isAnnual ? 'active' : 'inactive'}`}>Monthly</span>
            <button
              id="billing-toggle"
              className="kp-toggle-switch"
              onClick={() => setIsAnnual(!isAnnual)}
              aria-label="Toggle between monthly and annual billing"
            >
              <div className={`kp-toggle-knob ${isAnnual ? 'on' : 'off'}`} />
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className={`kp-toggle-label ${isAnnual ? 'active' : 'inactive'}`}>Annual</span>
              <span className="kp-save-badge">SAVE 20%</span>
            </div>
          </div>
        </div>

        {/* ─── Pricing Cards Grid ─── */}
        <div className="kp-pricing-grid">
          {membershipTiers.map((tier) => {
            const isSelected = selectedTier.id === tier.id;
            return (
              <div
                key={tier.id}
                className={`kp-pricing-card${tier.popular ? ' popular' : ''}`}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <div className="kp-popular-badge">
                    <Sparkles size={12} />
                    {tier.badge}
                  </div>
                )}

                <div>
                  {/* Name & tagline */}
                  <div style={{ marginBottom: '0.5rem' }}>
                    <div className="kp-pricing-name">{tier.name}</div>
                    <p className="kp-pricing-tagline">{tier.tagline}</p>
                  </div>

                  {/* Price */}
                  <div className="kp-pricing-amount-row">
                    <span className="kp-pricing-currency">$</span>
                    <span className="kp-pricing-price">{displayPrice(tier)}</span>
                    <span className="kp-pricing-period">
                      {tier.id === 'day-pass' ? '/ visit' : '/ month'}
                    </span>
                  </div>
                  {isAnnual && tier.id !== 'day-pass' && (
                    <p style={{ fontSize: '0.7rem', color: 'var(--accent-lime)', fontWeight: 700, marginTop: '-0.75rem', marginBottom: '0.75rem' }}>
                      Billed annually · You save ${(tier.priceMonthly - tier.priceAnnual) * 12}/yr
                    </p>
                  )}

                  {/* Features */}
                  <div className="kp-pricing-features-label">Included Features:</div>
                  <ul className="kp-pricing-features">
                    {tier.features.map((feat, fi) => (
                      <li key={fi} className="kp-pricing-feature-item">
                        <CheckCircle2 size={15} color="var(--accent-lime)" style={{ flexShrink: 0, marginTop: '1px' }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <button
                  id={`tier-cta-${tier.id}`}
                  onClick={() => handleSelectTier(tier)}
                  className={tier.popular ? 'btn-primary kp-w-full' : 'btn-outline kp-w-full'}
                  style={{
                    justifyContent: 'center',
                    padding: '0.9rem',
                    ...(tier.popular && { boxShadow: '0 0 25px rgba(166,255,0,0.35)' }),
                  }}
                >
                  {tier.ctaText} <ArrowRight size={15} />
                </button>
              </div>
            );
          })}
        </div>

        {/* ─── 3-Step Checkout Wizard ─── */}
        <div id="checkout-wizard" className="kp-checkout-card">

          {/* Wizard Header */}
          <div className="kp-checkout-header">
            <div>
              <span className="kp-section-label">Secure VIP Checkout</span>
              <h3 className="font-heading" style={{ fontSize: '1.6rem', color: 'var(--text-main)', lineHeight: 1 }}>
                MEMBERSHIP PASS GENERATOR
              </h3>
            </div>
            {/* Step indicators */}
            <div className="kp-step-indicators">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`kp-step-dot ${
                    checkoutStep > s ? 'done' : checkoutStep === s ? 'active' : 'pending'
                  }`}
                >
                  {checkoutStep > s ? '✓' : s}
                </div>
              ))}
            </div>
          </div>

          {/* STEP 1: Selected Tier Summary */}
          {checkoutStep === 1 && (
            <div>
              <div className="kp-order-summary" style={{ marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--accent-lime)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.2rem' }}>
                      Selected Tier
                    </div>
                    <div className="font-heading" style={{ fontSize: '1.6rem', color: 'var(--text-main)', lineHeight: 1 }}>
                      {selectedTier.name}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                      Billing: {isAnnual ? 'Annual (20% discounted)' : 'Monthly'}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div className="font-heading" style={{ fontSize: '2.25rem', color: 'var(--text-main)' }}>
                      ${displayPrice(selectedTier)}
                    </div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                      {selectedTier.id === 'day-pass' ? '/visit' : '/month'}
                    </div>
                  </div>
                </div>
              </div>
              <button
                id="checkout-proceed-btn"
                className="btn-primary kp-w-full"
                style={{ justifyContent: 'center', padding: '0.85rem' }}
                onClick={() => setCheckoutStep(2)}
              >
                Proceed to Member Details <ArrowRight size={15} />
              </button>
            </div>
          )}

          {/* STEP 2: Member Info Form */}
          {checkoutStep === 2 && (
            <form onSubmit={handleConfirmMemberInfo}>
              <div className="kp-form-grid" style={{ marginBottom: '1rem' }}>
                <div className="kp-form-group">
                  <label className="kp-form-label">Member Full Name *</label>
                  <div className="kp-form-input-wrap">
                    <User size={14} className="kp-form-input-icon" />
                    <input
                      id="member-fullname"
                      className="kp-form-input"
                      type="text"
                      required
                      placeholder="Samantha Vance"
                      value={memberInfo.fullName}
                      onChange={e => setMemberInfo({ ...memberInfo, fullName: e.target.value })}
                    />
                  </div>
                </div>
                <div className="kp-form-group">
                  <label className="kp-form-label">Email Address *</label>
                  <div className="kp-form-input-wrap">
                    <Mail size={14} className="kp-form-input-icon" />
                    <input
                      id="member-email"
                      className="kp-form-input"
                      type="email"
                      required
                      placeholder="samantha@domain.com"
                      value={memberInfo.email}
                      onChange={e => setMemberInfo({ ...memberInfo, email: e.target.value })}
                    />
                  </div>
                </div>
              </div>
              <div className="kp-form-grid" style={{ marginBottom: '1.5rem' }}>
                <div className="kp-form-group">
                  <label className="kp-form-label">Phone Number *</label>
                  <div className="kp-form-input-wrap">
                    <Phone size={14} className="kp-form-input-icon" />
                    <input
                      id="member-phone"
                      className="kp-form-input"
                      type="tel"
                      required
                      placeholder="+1 (555) 998-1234"
                      value={memberInfo.phone}
                      onChange={e => setMemberInfo({ ...memberInfo, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div className="kp-form-group">
                  <label className="kp-form-label">Emergency Contact (Optional)</label>
                  <input
                    className="kp-form-input no-icon"
                    type="text"
                    placeholder="Name & Number"
                    value={memberInfo.emergencyContact}
                    onChange={e => setMemberInfo({ ...memberInfo, emergencyContact: e.target.value })}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  type="button"
                  className="btn-ghost"
                  style={{ width: '35%', fontSize: '0.8rem' }}
                  onClick={() => setCheckoutStep(1)}
                >
                  ← Change Tier
                </button>
                <button
                  id="checkout-payment-btn"
                  type="submit"
                  className="btn-primary"
                  style={{ flexGrow: 1, justifyContent: 'center' }}
                >
                  Proceed to Payment <ArrowRight size={15} />
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: Payment & Pass Generation */}
          {checkoutStep === 3 && (
            <div>
              {/* Order Summary */}
              <div className="kp-order-summary" style={{ marginBottom: '1.25rem' }}>
                <div className="kp-order-row">
                  <span style={{ color: 'var(--text-main)', fontWeight: 700 }}>
                    {selectedTier.name} ({isAnnual ? 'Annual' : 'Monthly'})
                  </span>
                  <span style={{ color: 'var(--text-main)', fontWeight: 700 }}>
                    ${displayPrice(selectedTier)}
                  </span>
                </div>
                <div className="kp-order-row" style={{ fontSize: '0.8rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Taxes & Activation Fee</span>
                  <span style={{ color: 'var(--accent-lime)', fontWeight: 700 }}>WAIVED ($0)</span>
                </div>
                <div className="kp-order-total-row">
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)' }}>Total Due Today</span>
                  <span className="font-heading" style={{ fontSize: '1.6rem', color: 'var(--accent-lime)' }}>
                    ${displayPrice(selectedTier)}
                  </span>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label className="kp-form-label" style={{ marginBottom: '0.6rem', display: 'block' }}>Payment Method</label>
                <div className="kp-payment-methods">
                  {[
                    { id: 'card', icon: CreditCard, label: 'Credit Card' },
                    { id: 'apple', icon: Smartphone, label: 'Apple Pay' },
                    { id: 'google', icon: Zap, label: 'Google Pay' },
                  ].map(({ id, icon: Icon, label }) => (
                    <button
                      key={id}
                      id={`payment-${id}`}
                      type="button"
                      onClick={() => setPaymentMethod(id)}
                      className={`kp-payment-method ${paymentMethod === id ? 'selected' : 'unselected'}`}
                    >
                      <Icon size={16} />
                      <span>{label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Pay CTA */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <button
                  id="checkout-pay-btn"
                  type="button"
                  disabled={isProcessing}
                  onClick={handleFinalPayment}
                  className="btn-primary kp-w-full"
                  style={{
                    justifyContent: 'center',
                    padding: '1rem',
                    boxShadow: '0 0 30px rgba(166,255,0,0.4)',
                    fontSize: '0.9rem',
                  }}
                >
                  <Lock size={15} />
                  {isProcessing
                    ? 'Processing Secure Pass...'
                    : `Pay $${displayPrice(selectedTier)} & Activate Digital Pass`
                  }
                </button>
                <button
                  type="button"
                  className="btn-ghost kp-w-full"
                  style={{ justifyContent: 'center', fontSize: '0.8rem' }}
                  onClick={() => setCheckoutStep(2)}
                >
                  ← Back to Details
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Trust badges */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          marginTop: '2rem',
          flexWrap: 'wrap',
        }}>
          {['🔒 256-bit SSL Encrypted', '✅ Cancel Anytime', '🏆 30-Day Satisfaction Guarantee'].map((t) => (
            <span key={t} style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 700 }}>{t}</span>
          ))}
        </div>

      </div>

      {/* Digital Pass Modal */}
      <DigitalPassModal
        isOpen={passModalOpen}
        onClose={() => setPassModalOpen(false)}
        passData={issuedPass}
        onShowToast={onShowToast}
      />
    </div>
  );
}
