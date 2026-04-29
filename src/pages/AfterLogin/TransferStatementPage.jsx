import React from 'react';

const TRANSFERS = [
  { date: '18-01-2026', from: 'Main Wallet', to: 'Casino Wallet', amount: '₹2,000', status: 'success', ref: 'TRF001' },
  { date: '17-01-2026', from: 'Casino Wallet', to: 'Main Wallet', amount: '₹800', status: 'success', ref: 'TRF002' },
  { date: '16-01-2026', from: 'Main Wallet', to: 'Sports Wallet', amount: '₹3,000', status: 'success', ref: 'TRF003' },
  { date: '15-01-2026', from: 'Sports Wallet', to: 'Main Wallet', amount: '₹1,500', status: 'pending', ref: 'TRF004' },
];

export default function TransferStatementPage() {
  return (
    <div>
      <div style={{ overflowX: 'auto', border: '1px solid var(--border-primary)', borderRadius: '8px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
          <thead>
            <tr style={{ background: 'var(--bg-secondary)' }}>
              {['Date', 'From', 'To', 'Amount', 'Status', 'Ref'].map((h) => (
                <th key={h} style={{ padding: '10px 12px', textAlign: 'left', fontWeight: '700', color: 'var(--text-secondary)', borderBottom: '1px solid var(--border-primary)', whiteSpace: 'nowrap' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TRANSFERS.map((row, i) => (
              <tr key={i} style={{ borderBottom: '1px solid var(--border-primary)', background: i % 2 === 0 ? 'transparent' : 'var(--bg-tertiary)' }}>
                <td style={{ padding: '10px 12px', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>{row.date}</td>
                <td style={{ padding: '10px 12px', color: 'var(--text-primary)' }}>{row.from}</td>
                <td style={{ padding: '10px 12px', color: 'var(--text-primary)' }}>{row.to}</td>
                <td style={{ padding: '10px 12px', fontWeight: '700', color: 'var(--brand-primary)' }}>{row.amount}</td>
                <td style={{ padding: '10px 12px' }}>
                  <span style={{ padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: '700', background: row.status === 'success' ? 'rgba(34,197,94,0.15)' : 'rgba(245,158,11,0.15)', color: row.status === 'success' ? '#22c55e' : '#f59e0b' }}>
                    {row.status.toUpperCase()}
                  </span>
                </td>
                <td style={{ padding: '10px 12px', color: 'var(--text-muted)', fontSize: '11px' }}>{row.ref}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
