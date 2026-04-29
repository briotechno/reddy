import React from 'react';

const BONUSES = [
  { id: 1, name: 'Welcome Bonus', type: 'Deposit Bonus', amount: '₹1,000', status: 'active', expiry: '31-01-2026', wagered: 60, required: 100, wageredAmt: '₹6,000', requiredAmt: '₹10,000' },
  { id: 2, name: 'Referral Bonus', type: 'Referral', amount: '₹500', status: 'active', expiry: '28-02-2026', wagered: 20, required: 100, wageredAmt: '₹1,000', requiredAmt: '₹5,000' },
  { id: 3, name: 'IPL Promo Bonus', type: 'Promotional', amount: '₹2,000', status: 'completed', expiry: '15-01-2026', wagered: 100, required: 100, wageredAmt: '₹20,000', requiredAmt: '₹20,000' },
];

export default function BonusPage() {
  return (
    <div>
      {/* Summary */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '20px' }}>
        {[
          { label: 'Active Bonuses', val: '2', color: '#22c55e' },
          { label: 'Total Bonus Amount', val: '₹3,500', color: 'var(--brand-primary)' },
          { label: 'Completed', val: '1', color: '#8b5cf6' },
        ].map((s) => (
          <div key={s.label} className="content-card" style={{ padding: '14px', textAlign: 'center' }}>
            <div style={{ fontSize: '22px', fontWeight: '800', color: s.color, marginBottom: '4px' }}>{s.val}</div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Bonus List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {BONUSES.map((bonus) => (
          <div key={bonus.id} className="content-card" style={{ padding: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
              <div>
                <div style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '2px' }}>{bonus.name}</div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{bonus.type} · Expires: {bonus.expiry}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '18px', fontWeight: '800', color: 'var(--brand-primary)' }}>{bonus.amount}</div>
                <span style={{ fontSize: '10px', padding: '2px 8px', borderRadius: '4px', fontWeight: '700', background: bonus.status === 'active' ? 'rgba(34,197,94,0.15)' : 'rgba(107,114,128,0.15)', color: bonus.status === 'active' ? '#22c55e' : 'var(--text-muted)' }}>
                  {bonus.status.toUpperCase()}
                </span>
              </div>
            </div>
            {/* Progress */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-muted)', marginBottom: '4px' }}>
                <span>Wagering Progress</span>
                <span>{bonus.wageredAmt} / {bonus.requiredAmt}</span>
              </div>
              <div style={{ height: '6px', background: 'var(--bg-tertiary)', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${bonus.wagered}%`, background: bonus.status === 'completed' ? '#8b5cf6' : 'var(--brand-primary)', borderRadius: '3px', transition: 'width 0.5s ease' }}></div>
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>{bonus.wagered}% completed</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
