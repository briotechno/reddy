import React, { useState } from 'react';

const PL_DATA = [
  { date: '18-01-2026', match: 'India vs NZ', market: 'Match Winner', betType: 'Back', stake: '500', result: '+₹160', pnl: 160 },
  { date: '17-01-2026', match: 'MI vs CSK', market: 'Match Winner', betType: 'Back', stake: '1,000', result: '-₹1,000', pnl: -1000 },
  { date: '17-01-2026', match: 'Liverpool vs Chelsea', market: 'Match Winner', betType: 'Lay', stake: '500', result: '+₹230', pnl: 230 },
  { date: '16-01-2026', match: 'ENG vs AUS', market: 'Match Winner', betType: 'Back', stake: '300', result: '+₹420', pnl: 420 },
  { date: '15-01-2026', match: 'Gates of Olympus', market: 'Slots', betType: 'Bet', stake: '200', result: '-₹200', pnl: -200 },
];

const totalPnl = PL_DATA.reduce((sum, r) => sum + r.pnl, 0);

export default function ProfitLossPage() {
  return (
    <div>
      {/* Summary Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '20px' }}>
        {[
          { label: 'Total Profit', val: `₹${PL_DATA.filter(r=>r.pnl>0).reduce((s,r)=>s+r.pnl,0).toLocaleString()}`, color: '#22c55e', icon: 'bi-graph-up-arrow' },
          { label: 'Total Loss', val: `₹${Math.abs(PL_DATA.filter(r=>r.pnl<0).reduce((s,r)=>s+r.pnl,0)).toLocaleString()}`, color: '#ef4444', icon: 'bi-graph-down-arrow' },
          { label: 'Net P&L', val: `${totalPnl > 0 ? '+' : ''}₹${totalPnl.toLocaleString()}`, color: totalPnl >= 0 ? '#22c55e' : '#ef4444', icon: 'bi-wallet2' },
        ].map((card) => (
          <div key={card.label} className="content-card" style={{ padding: '14px', textAlign: 'center' }}>
            <i className={card.icon} style={{ fontSize: '24px', color: card.color, marginBottom: '6px', display: 'block' }}></i>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '4px' }}>{card.label}</div>
            <div style={{ fontSize: '16px', fontWeight: '800', color: card.color }}>{card.val}</div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div style={{ overflowX: 'auto', border: '1px solid var(--border-primary)', borderRadius: '8px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
          <thead>
            <tr style={{ background: 'var(--bg-secondary)' }}>
              {['Date', 'Match', 'Market', 'Type', 'Stake', 'P&L'].map((h) => (
                <th key={h} style={{ padding: '10px 12px', textAlign: 'left', fontWeight: '700', color: 'var(--text-secondary)', borderBottom: '1px solid var(--border-primary)', whiteSpace: 'nowrap' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PL_DATA.map((row, i) => (
              <tr key={i} style={{ borderBottom: '1px solid var(--border-primary)', background: i % 2 === 0 ? 'transparent' : 'var(--bg-tertiary)' }}>
                <td style={{ padding: '10px 12px', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>{row.date}</td>
                <td style={{ padding: '10px 12px', color: 'var(--text-primary)', fontWeight: '500' }}>{row.match}</td>
                <td style={{ padding: '10px 12px', color: 'var(--text-secondary)' }}>{row.market}</td>
                <td style={{ padding: '10px 12px' }}>
                  <span style={{ padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: '600', background: row.betType === 'Back' ? 'rgba(114,187,239,0.2)' : 'rgba(250,169,186,0.2)', color: row.betType === 'Back' ? '#72bbef' : '#faa9ba' }}>{row.betType}</span>
                </td>
                <td style={{ padding: '10px 12px', color: 'var(--text-primary)' }}>₹{row.stake}</td>
                <td style={{ padding: '10px 12px', fontWeight: '700', color: row.pnl >= 0 ? '#22c55e' : '#ef4444' }}>{row.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
