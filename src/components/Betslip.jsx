import React, { useState } from 'react';

export default function Betslip() {
  const [activeTab, setActiveTab] = useState('betslip');
  const [betItems, setBetItems] = useState([]);

  return (
    <aside className="right-sidebar">
      <div className="betslip-container">
        {/* Tabs */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
          <div className="betslip-tabs">
            <button
              className={`betslip-tab${activeTab === 'betslip' ? ' active' : ''}`}
              onClick={() => setActiveTab('betslip')}
            >
              Betslip
            </button>
            <button
              className={`betslip-tab${activeTab === 'mybets' ? ' active' : ''}`}
              onClick={() => setActiveTab('mybets')}
            >
              Open Bets
            </button>
          </div>
          {/* Format icons */}
          <div style={{ display: 'flex', gap: '4px' }}>
            <button style={{ background: 'transparent', border: '1px solid var(--border-primary)', borderRadius: '4px', color: 'var(--text-secondary)', padding: '4px 6px', cursor: 'pointer', fontSize: '10px' }}>
              DEC
            </button>
            <button style={{ background: 'transparent', border: '1px solid var(--border-primary)', borderRadius: '4px', color: 'var(--text-secondary)', padding: '4px 6px', cursor: 'pointer', fontSize: '10px' }}>
              FRAC
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'betslip' && (
          betItems.length === 0 ? (
            <div className="betslip-empty fade-in">
              <div className="shimmer"></div>
              <div style={{
                width: '64px', height: '64px',
                background: 'var(--bg-tertiary)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '16px',
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="var(--text-muted)" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '4px' }}>Your betslip is empty</p>
              <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '0' }}>
                Select odds to add selections to your betslip
              </p>
            </div>
          ) : (
            <div>
              {/* Bet items would render here */}
            </div>
          )
        )}

        {activeTab === 'mybets' && (
          <div className="betslip-empty fade-in">
            <div style={{
              width: '64px', height: '64px',
              background: 'var(--bg-tertiary)',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '16px',
            }}>
              <i className="bi bi-clock-history" style={{ fontSize: '28px', color: 'var(--text-muted)' }}></i>
            </div>
            <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '4px' }}>No bets placed yet</p>
            <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '0' }}>
              Your bet history will appear here
            </p>
          </div>
        )}
      </div>
    </aside>
  );
}
