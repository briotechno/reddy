import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function SignupModal({ onClose, onSwitchToLogin }) {
  const { login } = useAuth();
  const [form, setForm] = useState({ username: '', email: '', phone: '', password: '', confirm: '', terms: false });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPass, setShowPass] = useState(false);

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: field === 'terms' ? e.target.checked : e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.username || !form.email || !form.phone || !form.password) {
      setError('Please fill in all required fields.');
      return;
    }
    if (form.password !== form.confirm) {
      setError('Passwords do not match.');
      return;
    }
    if (!form.terms) {
      setError('Please accept the Terms & Conditions to proceed.');
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    login({ username: form.username, balance: '0.00', currency: 'INR' });
    setLoading(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-box-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div className="modal-logo-badge">R</div>
            <div>
              <div style={{ fontWeight: 900, fontSize: '18px', color: '#fff' }}>
                REDDY<span style={{ color: 'var(--brand-primary)' }}>247</span>
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Create your account and start winning</div>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal" id="signupModalClose">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} style={{ padding: '20px 24px 24px' }}>
          {error && <div className="modal-error fade-in">{error}</div>}

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div className="form-group">
              <label className="form-label" htmlFor="signupUsername">Username *</label>
              <input id="signupUsername" type="text" className="form-control" placeholder="Choose username" value={form.username} onChange={update('username')} autoComplete="username" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="signupPhone">Phone *</label>
              <input id="signupPhone" type="tel" className="form-control" placeholder="+91 xxxxxxxxxx" value={form.phone} onChange={update('phone')} autoComplete="tel" />
            </div>
          </div>

          <div className="form-group" style={{ marginTop: '12px' }}>
            <label className="form-label" htmlFor="signupEmail">Email Address *</label>
            <input id="signupEmail" type="email" className="form-control" placeholder="Enter email address" value={form.email} onChange={update('email')} autoComplete="email" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '12px' }}>
            <div className="form-group">
              <label className="form-label" htmlFor="signupPassword">Password *</label>
              <div className="input-icon-wrap">
                <input
                  id="signupPassword"
                  type={showPass ? 'text' : 'password'}
                  className="form-control input-with-icon-right"
                  placeholder="Create password"
                  value={form.password}
                  onChange={update('password')}
                  autoComplete="new-password"
                />
                <button type="button" className="input-icon-right-btn" onClick={() => setShowPass(!showPass)} aria-label="Toggle password">
                  {showPass ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="14" height="14">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="14" height="14">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="signupConfirm">Confirm Password *</label>
              <input id="signupConfirm" type="password" className="form-control" placeholder="Repeat password" value={form.confirm} onChange={update('confirm')} autoComplete="new-password" />
            </div>
          </div>

          <div style={{ marginTop: '14px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
            <input type="checkbox" id="signupTerms" checked={form.terms} onChange={update('terms')} style={{ marginTop: '2px', accentColor: 'var(--brand-primary)', width: '14px', height: '14px', flexShrink: 0 }} />
            <label htmlFor="signupTerms" style={{ fontSize: '12px', color: 'var(--text-secondary)', cursor: 'pointer' }}>
              I am 18+ years old and agree to the{' '}
              <a href="/terms" style={{ color: 'var(--brand-primary)' }}>Terms & Conditions</a>{' '}
              and{' '}
              <a href="/privacy-policy" style={{ color: 'var(--brand-primary)' }}>Privacy Policy</a>
            </label>
          </div>

          <button type="submit" className="btn-primary-full" disabled={loading} id="signupSubmitBtn" style={{ marginTop: '18px' }}>
            {loading ? (
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                <span className="spinner" /> Creating Account...
              </span>
            ) : 'Create Account'}
          </button>

          <div style={{ textAlign: 'center', marginTop: '14px', fontSize: '13px', color: 'var(--text-secondary)' }}>
            Already have an account?{' '}
            <button type="button" onClick={onSwitchToLogin} style={{ background: 'none', border: 'none', color: 'var(--brand-primary)', cursor: 'pointer', fontWeight: '700', padding: 0 }}>
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
