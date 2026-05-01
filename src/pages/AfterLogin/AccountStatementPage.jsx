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

const CalendarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 21 20" fill="none" style={{ flexShrink: 0 }}>
    <path d="M7.17 4.79C6.83 4.79 6.55 4.51 6.55 4.17V1.67C6.55 1.33 6.83 1.04 7.17 1.04C7.51 1.04 7.8 1.33 7.8 1.67V4.17C7.8 4.51 7.51 4.79 7.17 4.79Z" fill="#C10B32" />
    <path d="M13.84 4.79C13.5 4.79 13.21 4.51 13.21 4.17V1.67C13.21 1.33 13.5 1.04 13.84 1.04C14.18 1.04 14.46 1.33 14.46 1.67V4.17C14.46 4.51 14.18 4.79 13.84 4.79Z" fill="#C10B32" />
    <path d="M17.59 8.2H3.42C3.08 8.2 2.8 7.92 2.8 7.57C2.8 7.23 3.08 6.95 3.42 6.95H17.59C17.93 6.95 18.21 7.23 18.21 7.57C18.21 7.92 17.93 8.2 17.59 8.2Z" fill="#C10B32" />
    <path d="M13.84 18.96H7.17C4.13 18.96 2.38 17.21 2.38 14.17V7.08C2.38 4.04 4.13 2.29 7.17 2.29H13.84C16.88 2.29 18.63 4.04 18.63 7.08V14.17C18.63 17.21 16.88 18.96 13.84 18.96ZM7.17 3.54C4.79 3.54 3.63 4.7 3.63 7.08V14.17C3.63 16.55 4.79 17.71 7.17 17.71H13.84C16.22 17.71 17.38 16.55 17.38 14.17V7.08C17.38 4.7 16.22 3.54 13.84 3.54H7.17Z" fill="#C10B32" />
  </svg>
);

export default function AccountStatementPage() {
  const [period, setPeriod] = useState('Last 7 days');
  const [startDateDisplay] = useState('January 28, 2026');
  const [endDateDisplay] = useState('February 4, 2026');

  return (
    <div>
      {/* Date Range + Calendar + Search — matches legacy exactly */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '6px',
        padding: '8px 6px', background: 'var(--bg-secondary)'
      }}>
        {/* From date */}
        <div style={{
          flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '6px 8px', border: '1px solid var(--border-primary)',
          borderRadius: '6px', background: 'var(--bg-primary)', minHeight: '38px', cursor: 'pointer'
        }}>
          <span style={{ fontSize: '13px', color: 'var(--text-primary)' }}>{startDateDisplay}</span>
        </div>

        {/* Swap icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="var(--brand-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <path d="M7 10h14l-4-4" /><path d="M17 14H3l4 4" />
        </svg>

        {/* To date with calendar icon */}
        <div style={{
          flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '6px 8px', border: '1px solid var(--border-primary)',
          borderRadius: '6px', background: 'var(--bg-primary)', minHeight: '38px', cursor: 'pointer',
          gap: '8px'
        }}>
          <span style={{ fontSize: '13px', color: 'var(--text-primary)', flex: 1 }}>{endDateDisplay}</span>
          <CalendarIcon />
        </div>

        {/* Search button */}
        <button style={{
          width: '36px', height: '36px', display: 'flex', alignItems: 'center',
          justifyContent: 'center', border: 'none', borderRadius: '6px',
          cursor: 'pointer', background: 'var(--brand-primary)', flexShrink: 0
        }}>
          <svg fill="white" width="16" height="16" viewBox="0 0 24 24">
            <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
          </svg>
        </button>
      </div>

      {/* Period filter chips — pill style */}
      <div style={{ display: 'flex', gap: '8px', padding: '8px', justifyContent: 'center' }}>
        {PERIOD_FILTERS.map(p => (
          <button
            key={p}
            onClick={() => setPeriod(p)}
            style={{
              padding: '6px 16px', borderRadius: '9999px',
              border: '1px solid var(--border-primary)', cursor: 'pointer',
              background: period === p ? 'var(--brand-primary)' : 'transparent',
              color: period === p ? '#fff' : 'var(--text-primary)',
              fontWeight: period === p ? '700' : '500', fontSize: '12px', transition: 'all 0.2s',
            }}
          >
            {p}
          </button>
        ))}
      </div>

      {/* Transactions grouped by date */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {MOCK_TRANSACTIONS.map((group, gi) => (
          <div key={gi}>
            {/* Date pill — centered, dark rounded */}
            <div style={{ display: 'flex', justifyContent: 'center', padding: '6px 0' }}>
              <div style={{
                background: 'var(--bg-primary)', padding: '4px 16px',
                color: 'var(--text-secondary)', borderRadius: '4px',
                fontSize: '12px', fontWeight: '500',
              }}>
                {group.date}
              </div>
            </div>

            {group.matches.map((tx, ti) => (
              <div key={ti} style={{
                background: 'var(--bg-primary)',
                borderBottom: '1px solid var(--border-primary)',
              }}>
                {/* Event name — orange, full width */}
                <div style={{
                  padding: '8px 12px', fontSize: '13px', color: 'var(--brand-primary)',
                  fontWeight: '600', borderBottom: '1px solid var(--border-primary)'
                }}>
                  {tx.event}
                </div>

                {/* Market + P&L row */}
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '8px 12px', fontSize: '13px',
                  borderBottom: '1px solid var(--border-primary)'
                }}>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{tx.market}</span>
                  <span style={{ color: 'var(--text-primary)' }}>
                    P&L <span style={{ color: '#ef4444', fontWeight: '700' }}>₹ {tx.pl}</span>
                  </span>
                </div>

                {/* Footer: timestamp + balance */}
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  padding: '6px 12px', fontSize: '12px',
                  color: 'var(--text-secondary)',
                  background: 'var(--bg-tertiary)'
                }}>
                  <span>{tx.time}</span>
                  <span>Balance: ₹ {tx.balance}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
