import React, { useState } from 'react';

const OPEN_BETS = [
  { id: 'BT001', match: 'India vs New Zealand', market: 'Match Winner', selection: 'India', odds: '1.32', stake: '500', liability: '500', potProfit: '160', status: 'open', time: '18-01 01:00 PM' },
  { id: 'BT002', match: 'Mumbai Indians vs CSK', market: 'Match Winner', selection: 'Mumbai Indians', odds: '1.82', stake: '1000', liability: '1000', potProfit: '820', status: 'open', time: 'Today 19:30' },
];

export default function OpenBetsPage() {
  const [filter, setFilter] = useState('all');

  return (
    <div style={{ padding: '16px' }}>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        {['all', 'sports', 'casino'].map((f) => (
          <button key={f} onClick={() => setFilter(f)} style={{
            padding: '6px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer',
            background: filter === f ? 'var(--brand-primary)' : 'var(--bg-secondary)',
            color: filter === f ? '#fff' : 'var(--text-secondary)',
            fontWeight: '600', fontSize: '12px', textTransform: 'capitalize',
          }}>{f}</button>
        ))}
      </div>

      {OPEN_BETS.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '48px 24px', color: 'var(--text-muted)' }}>
          <i className="bi bi-journals" style={{ fontSize: '48px', display: 'block', marginBottom: '12px', opacity: 0.3 }}></i>
          <p style={{ fontSize: '14px' }}>No open bets found</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {OPEN_BETS.map((bet) => (
            <div key={bet.id} className="content-card" style={{ padding: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-primary)' }}>{bet.match}</span>
                <span style={{ fontSize: '11px', padding: '2px 8px', borderRadius: '4px', background: 'rgba(34,197,94,0.15)', color: '#22c55e', fontWeight: '700' }}>OPEN</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', fontSize: '12px' }}>
                {[
                  ['Market', bet.market],
                  ['Selection', bet.selection],
                  ['Odds', bet.odds],
                  ['Stake', `₹${bet.stake}`],
                  ['Potential Profit', `₹${bet.potProfit}`],
                  ['Time', bet.time],
                ].map(([label, val]) => (
                  <div key={label}>
                    <div style={{ color: 'var(--text-muted)', fontSize: '10px', marginBottom: '2px' }}>{label}</div>
                    <div style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{val}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
