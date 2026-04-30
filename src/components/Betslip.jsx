import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function Betslip() {
  const { isLoggedIn, user } = useAuth();
  const [activeTab, setActiveTab] = useState('mybets');
  const [showCredit, setShowCredit] = useState(true);

  return (
    <aside className="right-sidebar">
      <div className="betslip-container" style={{ padding: 0 }}>

        {/* AVAILABLE CREDIT — shown when logged in, matches reference */}
        {isLoggedIn && (
          <div
            onClick={() => setShowCredit(!showCredit)}
            style={{
              background: 'var(--brand-primary)',
              borderRadius: '6px 6px 0 0',
              padding: '10px 14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            <div>
              <div style={{ fontSize: '10px', fontWeight: '700', color: 'rgba(0,0,0,0.6)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Available Credit
              </div>
              <div style={{ fontSize: '18px', fontWeight: '900', color: '#000' }}>
                ₹ {user?.balance || '1,000'}
              </div>
            </div>
            <svg
              width="16" height="16" viewBox="0 0 24 24" fill="#000"
              style={{ transform: showCredit ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
            >
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </div>
        )}

        <div style={{ padding: '8px' }}>
          {/* Tabs — Betslip (plain) + Open Bets (orange pill), matches live site */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2px', border: '1px solid var(--border-primary)', borderRadius: '8px', padding: '3px' }}>
              <button
                onClick={() => setActiveTab('betslip')}
                style={{
                  background: activeTab === 'betslip' ? 'var(--brand-secondary)' : 'transparent',
                  color: activeTab === 'betslip' ? '#000' : 'var(--text-primary)',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '6px 12px',
                  fontSize: '12px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                }}
              >
                Betslip
              </button>
              <button
                onClick={() => setActiveTab('mybets')}
                style={{
                  background: activeTab === 'mybets' ? 'var(--brand-secondary)' : 'transparent',
                  color: activeTab === 'mybets' ? '#000' : 'var(--text-primary)',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '6px 12px',
                  fontSize: '12px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                }}
              >
                Open Bets
              </button>
            </div>
            {/* Odds format buttons */}
            <div style={{ display: 'flex', gap: '3px' }}>
              <button style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-primary)', borderRadius: '4px', color: 'var(--text-secondary)', padding: '3px 7px', cursor: 'pointer', fontSize: '10px', fontWeight: '600' }}>DEC</button>
              <button style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-primary)', borderRadius: '4px', color: 'var(--text-secondary)', padding: '3px 7px', cursor: 'pointer', fontSize: '10px', fontWeight: '600' }}>FRAC</button>
            </div>
          </div>

          {/* Betslip tab content */}
          {activeTab === 'betslip' && (
            <div style={{ textAlign: 'center', padding: '24px 16px', color: 'var(--text-muted)', fontSize: '13px' }}>
              <div style={{ marginBottom: '10px' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '50%',
                  background: 'rgba(250,151,30,0.15)',
                  border: '2px solid var(--brand-primary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto',
                  fontSize: '22px', fontWeight: '900', color: 'var(--brand-primary)',
                }}>!</div>
              </div>
              <div style={{ color: 'var(--brand-primary)', fontWeight: '700', fontSize: '13px', marginBottom: '6px' }}>No Event Selected</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Click on any odds to add a bet to your betslip.</div>
            </div>
          )}

          {/* Open Bets tab content */}
          {activeTab === 'mybets' && (
            <div style={{ padding: '10px 0', fontSize: '13px', color: 'var(--text-secondary)' }}>
              {isLoggedIn ? (
                <div style={{ textAlign: 'center', padding: '24px 16px' }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '50%',
                    background: 'rgba(250,151,30,0.15)',
                    border: '2px solid var(--brand-primary)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 10px',
                    fontSize: '22px', fontWeight: '900', color: 'var(--brand-primary)',
                  }}>!</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '12px' }}>No open bets at the moment.</div>
                </div>
              ) : (
                <span>
                  Please login to see your open bets.{' '}
                  <button
                    onClick={() => {}}
                    style={{ background: 'none', border: 'none', color: 'var(--brand-primary)', cursor: 'pointer', fontWeight: '600', padding: 0, fontSize: '13px' }}
                  >
                    Login
                  </button>
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
