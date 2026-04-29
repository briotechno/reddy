import React from 'react';

const BONUS_STMT = [
  { date: '18-01-2026', description: 'Welcome Bonus Credited', amount: '₹1,000', type: 'credit', balance: '₹1,000', status: 'Active' },
  { date: '17-01-2026', description: 'Bonus Wagered - India vs NZ', amount: '-₹500', type: 'debit', balance: '₹500', status: 'Used' },
  { date: '16-01-2026', description: 'Referral Bonus Credited', amount: '₹500', type: 'credit', balance: '₹1,000', status: 'Active' },
  { date: '15-01-2026', description: 'IPL Promo Bonus', amount: '₹2,000', type: 'credit', balance: '₹3,000', status: 'Expired' },
];

export default function BonusStatementPage() {
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px', marginBottom: '20px' }}>
        {[
          { label: 'Total Credited', val: '₹3,500', color: '#22c55e' },
          { label: 'Total Used', val: '₹500', color: '#ef4444' },
          { label: 'Available', val: '₹1,000', color: 'var(--brand-primary)' },
        ].map((s) => (
          <div key={s.label} className="content-card" style={{ padding: '14px', textAlign: 'center' }}>
            <div style={{ fontSize: '16px', fontWeight: '800', color: s.color, marginBottom: '4px' }}>{s.val}</div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{s.label}</div>
          </div>
        ))}
      </div>
      <div style={{ overflowX: 'auto', border: '1px solid var(--border-primary)', borderRadius: '8px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
          <thead>
            <tr style={{ background: 'var(--bg-secondary)' }}>
              {['Date', 'Description', 'Amount', 'Balance', 'Status'].map((h) => (
                <th key={h} style={{ padding: '10px 12px', textAlign: 'left', fontWeight: '700', color: 'var(--text-secondary)', borderBottom: '1px solid var(--border-primary)', whiteSpace: 'nowrap' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {BONUS_STMT.map((row, i) => (
              <tr key={i} style={{ borderBottom: '1px solid var(--border-primary)', background: i % 2 === 0 ? 'transparent' : 'var(--bg-tertiary)' }}>
                <td style={{ padding: '10px 12px', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>{row.date}</td>
                <td style={{ padding: '10px 12px', color: 'var(--text-primary)' }}>{row.description}</td>
                <td style={{ padding: '10px 12px', fontWeight: '700', color: row.type === 'credit' ? '#22c55e' : '#ef4444' }}>{row.amount}</td>
                <td style={{ padding: '10px 12px', color: 'var(--text-primary)', fontWeight: '600' }}>{row.balance}</td>
                <td style={{ padding: '10px 12px' }}>
                  <span style={{ padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: '700', background: row.status === 'Active' ? 'rgba(34,197,94,0.15)' : row.status === 'Used' ? 'rgba(59,130,246,0.15)' : 'rgba(107,114,128,0.15)', color: row.status === 'Active' ? '#22c55e' : row.status === 'Used' ? '#3b82f6' : 'var(--text-muted)' }}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
