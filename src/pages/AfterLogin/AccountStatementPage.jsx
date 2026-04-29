import React, { useState } from 'react';

const STATEMENT = [
  { date: '18-01-2026', description: 'Deposit via UPI', credit: '5,000', debit: '-', balance: '12,350', type: 'deposit' },
  { date: '18-01-2026', description: 'Bet Win - India vs NZ', credit: '660', debit: '-', balance: '13,010', type: 'win' },
  { date: '17-01-2026', description: 'Bet - MI vs CSK', credit: '-', debit: '1,000', balance: '12,350', type: 'bet' },
  { date: '17-01-2026', description: 'Withdrawal via UPI', credit: '-', debit: '3,000', balance: '13,350', type: 'withdrawal' },
  { date: '16-01-2026', description: 'Deposit via Bank Transfer', credit: '10,000', debit: '-', balance: '16,350', type: 'deposit' },
  { date: '16-01-2026', description: 'Bet Win - ENG vs AUS', credit: '420', debit: '-', balance: '6,770', type: 'win' },
  { date: '15-01-2026', description: 'Bet - Liverpool vs Chelsea', credit: '-', debit: '500', balance: '6,350', type: 'bet' },
];

const TYPE_COLORS = {
  deposit: '#22c55e', win: '#f59e0b', bet: 'var(--text-secondary)', withdrawal: '#ef4444',
};

export default function AccountStatementPage() {
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  return (
    <div>
      {/* Date filter */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '16px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '140px' }}>
          <label style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>From Date</label>
          <input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid var(--border-primary)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', fontSize: '13px' }} />
        </div>
        <div style={{ flex: 1, minWidth: '140px' }}>
          <label style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>To Date</label>
          <input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid var(--border-primary)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', fontSize: '13px' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          <button style={{ padding: '8px 20px', background: 'var(--brand-primary)', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '600', fontSize: '13px', cursor: 'pointer' }}>Search</button>
        </div>
      </div>

      {/* Table */}
      <div style={{ overflowX: 'auto', border: '1px solid var(--border-primary)', borderRadius: '8px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
          <thead>
            <tr style={{ background: 'var(--bg-secondary)' }}>
              {['Date', 'Description', 'Credit', 'Debit', 'Balance'].map((h) => (
                <th key={h} style={{ padding: '10px 12px', textAlign: 'left', fontWeight: '700', color: 'var(--text-secondary)', borderBottom: '1px solid var(--border-primary)', whiteSpace: 'nowrap' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {STATEMENT.map((row, i) => (
              <tr key={i} style={{ borderBottom: '1px solid var(--border-primary)', background: i % 2 === 0 ? 'transparent' : 'var(--bg-tertiary)' }}>
                <td style={{ padding: '10px 12px', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>{row.date}</td>
                <td style={{ padding: '10px 12px', color: 'var(--text-primary)', fontWeight: '500' }}>{row.description}</td>
                <td style={{ padding: '10px 12px', color: '#22c55e', fontWeight: '600' }}>{row.credit !== '-' ? `₹${row.credit}` : '-'}</td>
                <td style={{ padding: '10px 12px', color: '#ef4444', fontWeight: '600' }}>{row.debit !== '-' ? `₹${row.debit}` : '-'}</td>
                <td style={{ padding: '10px 12px', color: 'var(--text-primary)', fontWeight: '700' }}>₹{row.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
