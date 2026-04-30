import React, { useState } from 'react';

const MOCK_TRANSACTIONS = [
  {
    date: '13/02/2026',
    matches: [
      { event: 'USA v Netherlands', market: 'TO WIN THE TOSS', pl: 100, time: '13/02/2026 | 6:10:13 PM', balance: 700 },
    ],
  },
  {
    date: '12/02/2026',
    matches: [
      { event: 'Nepal v Italy', market: 'BOOKMAKER', pl: 100, time: '12/02/2026 | 5:12:27 PM', balance: 800 },
    ],
  },
  {
    date: '04/02/2026',
    matches: [
      { event: 'Delhi (Jagran) vs. Ner Gorakhpur', market: 'Winner (incl. super over)', pl: 100, time: '04/02/2026 | 3:39:54 PM', balance: 900 },
    ],
  },
];

const PERIOD_FILTERS = ['Last 7 days', 'Last 14 days', 'Last 28 days'];

export default function AccountStatementPage() {
  const [period, setPeriod] = useState('Last 7 days');
  const [fromDate, setFromDate] = useState('2026-01-28');
  const [toDate, setToDate] = useState('2026-02-04');

  return (
    <div>
      {/* Date Range + Search */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '140px' }}>
          <input
            type="date"
            value={fromDate}
            onChange={e => setFromDate(e.target.value)}
            style={{ width: '100%', padding: '8px 10px', background: 'var(--bg-primary)', border: '1px solid var(--border-primary)', borderRadius: '6px', color: 'var(--text-primary)', fontSize: '13px', outline: 'none' }}
          />
        </div>

        {/* Swap icon */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2">
          <polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/>
          <polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>
        </svg>

        <div style={{ flex: 1, minWidth: '140px' }}>
          <input
            type="date"
            value={toDate}
            onChange={e => setToDate(e.target.value)}
            style={{ width: '100%', padding: '8px 10px', background: 'var(--bg-primary)', border: '1px solid var(--border-primary)', borderRadius: '6px', color: 'var(--text-primary)', fontSize: '13px', outline: 'none' }}
          />
        </div>

        {/* Calendar icon */}
        <button style={{ background: 'none', border: '1px solid var(--border-primary)', borderRadius: '6px', padding: '7px 10px', color: 'var(--text-secondary)', cursor: 'pointer' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"/></svg>
        </button>

        {/* Search icon */}
        <button style={{ background: 'var(--brand-primary)', border: 'none', borderRadius: '6px', padding: '7px 12px', color: '#000', cursor: 'pointer', fontWeight: '700' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </button>
      </div>

      {/* Period filter chips */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
        {PERIOD_FILTERS.map(p => (
          <button
            key={p}
            onClick={() => setPeriod(p)}
            style={{
              padding: '7px 16px', borderRadius: '9999px', border: 'none', cursor: 'pointer',
              background: period === p ? 'var(--brand-primary)' : 'var(--bg-tertiary)',
              color: period === p ? '#000' : 'var(--text-secondary)',
              fontWeight: '600', fontSize: '13px', transition: 'all 0.2s',
            }}
          >
            {p}
          </button>
        ))}
      </div>

      {/* Transactions grouped by date */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        {MOCK_TRANSACTIONS.map((group, gi) => (
          <div key={gi}>
            {/* Date separator */}
            <div style={{ textAlign: 'center', padding: '8px 0', fontSize: '12px', color: 'var(--text-muted)', background: 'var(--bg-primary)', borderBottom: '1px solid var(--border-primary)' }}>
              {group.date}
            </div>
            {group.matches.map((tx, ti) => (
              <div key={ti} style={{ borderBottom: '1px solid var(--border-primary)' }}>
                {/* Event name */}
                <div style={{ padding: '8px 12px', background: 'var(--bg-primary)' }}>
                  <span style={{ fontSize: '13px', color: 'var(--brand-primary)', fontWeight: '600' }}>{tx.event}</span>
                </div>
                {/* Market row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', background: 'var(--bg-secondary)' }}>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '2px' }}>{tx.market}</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{tx.time}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                      P&L{' '}
                      <span style={{ color: tx.pl >= 0 ? '#ef4444' : '#22c55e', fontWeight: '700' }}>
                        ₹ {Math.abs(tx.pl)}
                      </span>
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Balance: ₹ {tx.balance}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {MOCK_TRANSACTIONS.length === 0 && (
        <div style={{ textAlign: 'center', padding: '48px', color: 'var(--text-muted)', fontSize: '14px' }}>
          No transactions found for the selected period.
        </div>
      )}
    </div>
  );
}
