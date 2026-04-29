import React from 'react';

const TRANSACTIONS = [
  { id: 'TXN001', date: '18-01-2026', type: 'Deposit', method: 'UPI', amount: '₹5,000', status: 'success', ref: 'UPI12345678' },
  { id: 'TXN002', date: '17-01-2026', type: 'Withdrawal', method: 'Bank Transfer', amount: '₹3,000', status: 'success', ref: 'NEFT98765432' },
  { id: 'TXN003', date: '16-01-2026', type: 'Deposit', method: 'Bank Transfer', amount: '₹10,000', status: 'success', ref: 'IMPS11223344' },
  { id: 'TXN004', date: '15-01-2026', type: 'Withdrawal', method: 'UPI', amount: '₹2,500', status: 'pending', ref: 'UPI55667788' },
  { id: 'TXN005', date: '14-01-2026', type: 'Deposit', method: 'UPI', amount: '₹1,000', status: 'failed', ref: 'UPI99001122' },
];

const STATUS_COLORS = {
  success: { bg: 'rgba(34,197,94,0.15)', text: '#22c55e' },
  pending: { bg: 'rgba(245,158,11,0.15)', text: '#f59e0b' },
  failed: { bg: 'rgba(239,68,68,0.15)', text: '#ef4444' },
};

export default function TransactionsPage() {
  return (
    <div>
      {/* Summary */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '20px' }}>
        {[
          { label: 'Total Deposits', val: '₹16,000', color: '#22c55e', icon: 'bi-arrow-down-circle-fill' },
          { label: 'Total Withdrawals', val: '₹5,500', color: '#ef4444', icon: 'bi-arrow-up-circle-fill' },
          { label: 'Net Balance', val: '₹10,500', color: 'var(--brand-primary)', icon: 'bi-wallet2' },
        ].map((s) => (
          <div key={s.label} className="content-card" style={{ padding: '14px', textAlign: 'center' }}>
            <i className={s.icon} style={{ fontSize: '22px', color: s.color, display: 'block', marginBottom: '6px' }}></i>
            <div style={{ fontSize: '15px', fontWeight: '800', color: s.color, marginBottom: '4px' }}>{s.val}</div>
            <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div style={{ overflowX: 'auto', border: '1px solid var(--border-primary)', borderRadius: '8px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
          <thead>
            <tr style={{ background: 'var(--bg-secondary)' }}>
              {['Txn ID', 'Date', 'Type', 'Method', 'Amount', 'Status', 'Reference'].map((h) => (
                <th key={h} style={{ padding: '10px 12px', textAlign: 'left', fontWeight: '700', color: 'var(--text-secondary)', borderBottom: '1px solid var(--border-primary)', whiteSpace: 'nowrap' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TRANSACTIONS.map((txn, i) => (
              <tr key={txn.id} style={{ borderBottom: '1px solid var(--border-primary)', background: i % 2 === 0 ? 'transparent' : 'var(--bg-tertiary)' }}>
                <td style={{ padding: '10px 12px', color: 'var(--brand-primary)', fontWeight: '600', whiteSpace: 'nowrap' }}>{txn.id}</td>
                <td style={{ padding: '10px 12px', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>{txn.date}</td>
                <td style={{ padding: '10px 12px', color: txn.type === 'Deposit' ? '#22c55e' : '#ef4444', fontWeight: '600' }}>{txn.type}</td>
                <td style={{ padding: '10px 12px', color: 'var(--text-secondary)' }}>{txn.method}</td>
                <td style={{ padding: '10px 12px', color: 'var(--text-primary)', fontWeight: '700' }}>{txn.amount}</td>
                <td style={{ padding: '10px 12px' }}>
                  <span style={{ padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: '700', ...STATUS_COLORS[txn.status] }}>{txn.status.toUpperCase()}</span>
                </td>
                <td style={{ padding: '10px 12px', color: 'var(--text-muted)', fontSize: '11px', whiteSpace: 'nowrap' }}>{txn.ref}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
