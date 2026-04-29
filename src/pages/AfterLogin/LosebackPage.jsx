import React from 'react';

const LOSEBACK = [
  { period: 'This Week', totalLoss: '₹1,200', rate: '5%', earned: '₹60', status: 'eligible', expiry: '24-01-2026' },
  { period: 'Last Week', totalLoss: '₹800', rate: '5%', earned: '₹40', status: 'credited', expiry: '17-01-2026' },
];

export default function LosebackPage() {
  return (
    <div>
      <div style={{ background: 'rgba(229,140,31,0.1)', border: '1px solid rgba(229,140,31,0.3)', borderRadius: '10px', padding: '16px', marginBottom: '20px', fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
        <i className="bi bi-info-circle-fill" style={{ color: 'var(--brand-primary)', marginRight: '8px' }}></i>
        Get <strong style={{ color: 'var(--brand-primary)' }}>5%</strong> of your net losses back every week. Credited every Monday. Minimum net loss of ₹500 required.
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {LOSEBACK.map((row) => (
          <div key={row.period} className="content-card" style={{ padding: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <h3 style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: 'var(--text-primary)' }}>{row.period}</h3>
              <span style={{ padding: '3px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: '700', background: row.status === 'eligible' ? 'rgba(34,197,94,0.15)' : 'rgba(107,114,128,0.15)', color: row.status === 'eligible' ? '#22c55e' : 'var(--text-muted)' }}>
                {row.status.toUpperCase()}
              </span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '10px' }}>
              {[['Net Loss', row.totalLoss], ['Rate', row.rate], ['Amount', row.earned], ['Expires', row.expiry]].map(([l, v]) => (
                <div key={l}>
                  <div style={{ fontSize: '10px', color: 'var(--text-muted)', marginBottom: '4px' }}>{l}</div>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: l === 'Amount' ? 'var(--brand-primary)' : 'var(--text-primary)' }}>{v}</div>
                </div>
              ))}
            </div>
            {row.status === 'eligible' && (
              <button style={{ marginTop: '12px', width: '100%', padding: '10px', background: 'var(--brand-primary)', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '700', fontSize: '13px', cursor: 'pointer' }}>
                Claim {row.earned}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
