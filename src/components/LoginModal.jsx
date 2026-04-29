import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function LoginModal({ onClose, onSwitchToSignup }) {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!username.trim() || !password.trim()) {
      setError('Please enter username and password.');
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    login({ username: username.trim(), balance: '10,250.00', currency: 'INR' });
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
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Welcome back! Log in to continue</div>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal" id="loginModalClose">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} style={{ padding: '24px' }}>
          {error && (
            <div className="modal-error fade-in">{error}</div>
          )}

          <div className="form-group">
            <label className="form-label" htmlFor="loginUsername">Username or Email</label>
            <div className="input-icon-wrap">
              <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              <input
                id="loginUsername"
                type="text"
                className="form-control input-with-icon"
                placeholder="Enter username or email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                autoFocus
              />
            </div>
          </div>

          <div className="form-group" style={{ marginTop: '16px' }}>
            <label className="form-label" htmlFor="loginPassword">Password</label>
            <div className="input-icon-wrap">
              <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <input
                id="loginPassword"
                type={showPass ? 'text' : 'password'}
                className="form-control input-with-icon input-with-icon-right"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <button type="button" className="input-icon-right-btn" onClick={() => setShowPass(!showPass)} aria-label="Toggle password">
                {showPass ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                    <line x1="1" y1="1" x2="23" y2="23"/>
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                )}
              </button>
            </div>
            <div style={{ textAlign: 'right', marginTop: '6px' }}>
              <a href="#" style={{ fontSize: '12px', color: 'var(--brand-primary)', textDecoration: 'none' }}>Forgot Password?</a>
            </div>
          </div>

          <button
            type="submit"
            className="btn-primary-full"
            disabled={loading}
            id="loginSubmitBtn"
            style={{ marginTop: '20px' }}
          >
            {loading ? (
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                <span className="spinner" /> Logging in...
              </span>
            ) : 'Log In'}
          </button>

          <div style={{ textAlign: 'center', marginTop: '16px', fontSize: '13px', color: 'var(--text-secondary)' }}>
            Don't have an account?{' '}
            <button type="button" onClick={onSwitchToSignup} style={{ background: 'none', border: 'none', color: 'var(--brand-primary)', cursor: 'pointer', fontWeight: '700', padding: 0 }}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
