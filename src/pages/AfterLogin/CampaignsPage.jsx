import React from 'react';

const CAMPAIGNS = [
  { id: 1, title: 'IPL 2025 Mega Bonus', desc: 'Deposit ₹2,000+ and get 50% bonus up to ₹5,000 during IPL season.', tag: 'ACTIVE', color: '#22c55e', deadline: '30-04-2026', icon: 'bi-trophy-fill' },
  { id: 2, title: 'Weekend Cashback', desc: 'Get 10% cashback on all losses every weekend. Max cashback ₹2,000.', tag: 'ACTIVE', color: '#3b82f6', deadline: 'Every Weekend', icon: 'bi-cash-coin' },
  { id: 3, title: 'Slots Frenzy', desc: 'Play 100+ slot games and earn extra points redeemable as cash.', tag: 'ENDING SOON', color: '#f59e0b', deadline: '31-01-2026', icon: 'bi-stars' },
  { id: 4, title: 'Refer 5 Friends', desc: 'Refer 5 friends and unlock a special ₹2,500 mega bonus.', tag: 'ONGOING', color: '#8b5cf6', deadline: '28-02-2026', icon: 'bi-people-fill' },
];

export default function CampaignsPage() {
  return (
    <div>
      <h2 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '16px' }}>Active Campaigns</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {CAMPAIGNS.map((c) => (
          <div key={c.id} className="content-card" style={{ padding: '0', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'stretch', gap: '0' }}>
              <div style={{ width: '60px', background: `${c.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: `3px solid ${c.color}` }}>
                <i className={c.icon} style={{ fontSize: '24px', color: c.color }}></i>
              </div>
              <div style={{ flex: 1, padding: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                  <h3 style={{ margin: 0, fontSize: '14px', fontWeight: '700', color: 'var(--text-primary)' }}>{c.title}</h3>
                  <span style={{ fontSize: '10px', fontWeight: '700', padding: '2px 8px', borderRadius: '4px', background: `${c.color}20`, color: c.color, whiteSpace: 'nowrap', marginLeft: '8px' }}>{c.tag}</span>
                </div>
                <p style={{ margin: '0 0 8px', fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{c.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}><i className="bi bi-calendar3 me-1"></i>Ends: {c.deadline}</span>
                  <button style={{ padding: '5px 14px', background: c.color, color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '700', fontSize: '12px', cursor: 'pointer' }}>Claim</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
