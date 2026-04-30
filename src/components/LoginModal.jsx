import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function LoginModal({ onClose, onSwitchToSignup }) {
  const { login } = useAuth();
  const [tab, setTab] = useState('mobile'); // 'mobile' | 'userid'
  const [mobile, setMobile] = useState('');
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const uname = tab === 'mobile' ? mobile : userid;
    if (!uname.trim() || !password.trim()) {
      setError('Please enter your credentials.');
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    login({ username: uname.trim(), balance: '10,250.00', currency: 'INR' });
    setLoading(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-primary)',
          borderRadius: '16px',
          width: '100%',
          maxWidth: '760px',
          maxHeight: '90vh',
          overflow: 'hidden',
          boxShadow: '0 24px 64px rgba(0,0,0,0.7)',
          animation: 'slideUp 0.25s ease',
          display: 'flex',
          position: 'relative',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          id="loginModalClose"
          style={{
            position: 'absolute', top: '12px', right: '12px',
            background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '50%',
            width: '28px', height: '28px', cursor: 'pointer', color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 10, fontSize: '16px', fontWeight: '700',
          }}
        >✕</button>

        {/* LEFT — Promo Image Panel */}
        <div style={{
          width: '42%', flexShrink: 0,
          background: '#0d0d0d',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end',
          padding: '0', position: 'relative', overflow: 'hidden', minHeight: '480px',
        }}>
          {/* IPL banner layered background */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(160deg, #f59e0b 0%, #ea580c 30%, #7c2d12 65%, #000 100%)',
          }} />
          {/* dark overlay at top */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 40%, rgba(0,0,0,0.6) 100%)',
          }} />
          {/* Diagonal stripe decoration */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 40px)',
          }} />
          {/* Logo strip at top */}
          <div style={{
            position: 'absolute', top: '14px', left: 0, right: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            zIndex: 2,
          }}>
            <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', fontWeight: '700', letterSpacing: '1.5px' }}>TATA IPL</span>
            <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)' }}>×</span>
            <span style={{ fontSize: '13px', color: '#fa971e', fontWeight: '900', letterSpacing: '1px' }}>REDDY<span style={{ color: '#fff' }}>247</span></span>
          </div>
          {/* Main content */}
          <div style={{
            position: 'relative', zIndex: 1, textAlign: 'center', padding: '20px 16px',
          }}>
            <div style={{
              fontSize: '13px', fontWeight: '700', color: '#fff',
              background: 'rgba(0,0,0,0.5)', padding: '5px 14px',
              borderRadius: '4px', marginBottom: '10px', display: 'inline-block',
              border: '1px solid rgba(245,158,11,0.4)',
            }}>
              22 MARCH TO 25 MAY
            </div>
            <div style={{
              fontSize: '58px', fontWeight: '900', color: '#fa971e',
              lineHeight: 1, textShadow: '0 0 30px rgba(245,158,11,0.6), 2px 2px 12px rgba(0,0,0,0.8)',
              letterSpacing: '-2px',
            }}>
              IPL<br />2026
            </div>
            <div style={{ fontSize: '14px', color: '#fff', marginTop: '10px', fontWeight: '700' }}>
              THIS IPL PLAY <span style={{ color: '#f59e0b' }}>BIG</span> &amp; WIN <span style={{ color: '#f59e0b' }}>HUGE</span>
            </div>
            <div style={{
              marginTop: '16px', background: 'rgba(0,0,0,0.6)', borderRadius: '8px',
              padding: '8px 16px', fontSize: '11px', color: '#fff',
              border: '1px solid rgba(245,158,11,0.3)',
            }}>
              🎯 VISIT FOR MORE<br />
              <span style={{ color: '#f59e0b', fontWeight: '700', fontSize: '12px' }}>WWW.REDDYID247.COM</span>
            </div>
          </div>
        </div>

        {/* RIGHT — Sign In Form */}
        <div style={{ flex: 1, padding: '28px 28px', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
          {/* Header row */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
            <div style={{ fontSize: '22px', fontWeight: '700', color: 'var(--text-primary)' }}>Sign In</div>
            {/* REDDY247 Logo text */}
            <div style={{ fontWeight: '900', fontSize: '18px', color: 'var(--brand-primary)', letterSpacing: '1px' }}>
              REDDY<span style={{ color: '#fff' }}>247</span>
            </div>
          </div>

          {/* Tab: Mobile Number / User Id */}
          <div style={{
            display: 'flex', borderRadius: '8px', overflow: 'hidden',
            border: '1px solid var(--border-primary)', marginBottom: '20px',
          }}>
            <button
              onClick={() => setTab('mobile')}
              style={{
                flex: 1, padding: '10px', border: 'none', cursor: 'pointer',
                background: tab === 'mobile' ? 'var(--brand-secondary)' : 'transparent',
                color: tab === 'mobile' ? '#000' : 'var(--text-primary)',
                fontWeight: '600', fontSize: '13px', transition: 'all 0.2s',
              }}
            >
              Mobile Number
            </button>
            <button
              onClick={() => setTab('userid')}
              style={{
                flex: 1, padding: '10px', border: 'none', cursor: 'pointer',
                background: tab === 'userid' ? 'var(--brand-secondary)' : 'transparent',
                color: tab === 'userid' ? '#000' : 'var(--text-primary)',
                fontWeight: '600', fontSize: '13px', transition: 'all 0.2s',
                borderLeft: '1px solid var(--border-primary)',
              }}
            >
              User Id
            </button>
          </div>

          {error && (
            <div className="modal-error fade-in">{error}</div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {tab === 'mobile' ? (
              <div>
                <label style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '6px', display: 'block' }}>
                  Mobile Number
                </label>
                <div style={{ display: 'flex', border: '1px solid var(--border-primary)', borderRadius: '8px', overflow: 'hidden', background: 'var(--bg-tertiary)' }}>
                  {/* Country code */}
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '6px',
                    padding: '0 10px', borderRight: '1px solid var(--border-primary)',
                    color: 'var(--text-primary)', fontSize: '13px', whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}>
                    🇮🇳 <span>+91</span>
                  </div>
                  <input
                    id="loginMobile"
                    type="tel"
                    placeholder="Enter Mobile Number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    autoFocus
                    style={{
                      flex: 1, padding: '11px 12px', background: 'transparent',
                      border: 'none', outline: 'none', color: 'var(--text-primary)',
                      fontSize: '13px',
                    }}
                  />
                </div>
              </div>
            ) : (
              <div>
                <label style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '6px', display: 'block' }}>
                  User Id
                </label>
                <input
                  id="loginUserid"
                  type="text"
                  placeholder="Enter User Id"
                  value={userid}
                  onChange={(e) => setUserid(e.target.value)}
                  autoFocus
                  style={{
                    width: '100%', padding: '11px 12px', background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-primary)', borderRadius: '8px',
                    outline: 'none', color: 'var(--text-primary)', fontSize: '13px',
                  }}
                />
              </div>
            )}

            {/* Password */}
            <div>
              <label style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '6px', display: 'block' }}>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  id="loginPassword"
                  type={showPass ? 'text' : 'password'}
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  style={{
                    width: '100%', padding: '11px 40px 11px 12px',
                    background: 'var(--bg-tertiary)', border: '1px solid var(--border-primary)',
                    borderRadius: '8px', outline: 'none', color: 'var(--text-primary)',
                    fontSize: '13px', boxSizing: 'border-box',
                  }}
                />
                <button
                  type="button" onClick={() => setShowPass(!showPass)}
                  aria-label="Toggle password"
                  style={{
                    position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)',
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: 'var(--text-muted)', display: 'flex', alignItems: 'center',
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
                    {showPass
                      ? <><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><line x1="1" y1="1" x2="23" y2="23"/></>
                      : <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>
                    }
                  </svg>
                </button>
              </div>
              <div style={{ textAlign: 'right', marginTop: '6px' }}>
                <a href="#" style={{ fontSize: '12px', color: 'var(--text-secondary)', textDecoration: 'underline' }}>
                  Forgot Password?
                </a>
              </div>
            </div>

            {/* Sign In button */}
            <button
              type="submit"
              id="loginSubmitBtn"
              disabled={loading}
              style={{
                width: '100%', padding: '13px',
                background: 'var(--brand-secondary)', border: 'none',
                borderRadius: '8px', color: '#000', fontWeight: '700',
                fontSize: '15px', cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.7 : 1, transition: 'opacity 0.2s',
              }}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          {/* OR divider + Google */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '14px 0' }}>
            <div style={{ flex: 1, height: '1px', background: 'var(--border-primary)' }} />
            <span style={{ color: 'var(--text-muted)', fontSize: '12px' }}>OR</span>
            <div style={{ flex: 1, height: '1px', background: 'var(--border-primary)' }} />
          </div>

          <button
            type="button"
            style={{
              width: '100%', padding: '11px', background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-primary)', borderRadius: '8px',
              color: 'var(--text-primary)', fontWeight: '600', fontSize: '14px',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            }}
          >
            {/* Google G icon */}
            <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google
          </button>

          {/* Footer links */}
          <div style={{ textAlign: 'center', marginTop: '14px', fontSize: '13px', color: 'var(--text-secondary)' }}>
            New User?{' '}
            <button
              type="button" onClick={onSwitchToSignup}
              style={{ background: 'none', border: 'none', color: 'var(--brand-primary)', cursor: 'pointer', fontWeight: '700', padding: 0, fontSize: '13px' }}
            >
              Create an account
            </button>
          </div>
          <div style={{ textAlign: 'center', marginTop: '8px', fontSize: '12px', color: 'var(--text-muted)' }}>
            <a href="/privacy-policy" style={{ color: 'var(--brand-primary)', textDecoration: 'none' }}>Privacy Policy</a>
            {' | '}
            <a href="/rules" style={{ color: 'var(--brand-primary)', textDecoration: 'none' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  );
}
