import React, { useState } from 'react';

const PNL_DATA = [
  {
    date: 'Today',
    pnl: -100,
    bets: [
      {
        title: 'Delhi (Jagran) Vs Ner Gorakhpur (Winner (Incl. Super Over))',
        commission: 0,
        netWin: -100,
        startTime: 'FEB 14, 2026 6:30 AM',
        settledTime: 'FEB 14, 2026 3:39 PM',
      },
    ],
  },
  {
    date: '11 Feb, 2026',
    pnl: -100,
    bets: [
      {
        title: 'Nepal Vs Italy (BOOKMAKER)',
        commission: 0,
        netWin: -100,
        startTime: 'FEB 11, 2026 8:46 AM',
        settledTime: 'FEB 12, 2026 5:12 PM',
      },
    ],
  },
  {
    date: '04 Feb, 2026',
    pnl: -100,
    bets: [
      {
        title: 'Delhi (Jagran) Vs Ner Gorakhpur (Winner (Incl. Super Over))',
        commission: 0,
        netWin: -100,
        startTime: 'FEB 04, 2026 6:30 AM',
        settledTime: 'FEB 04, 2026 3:39 PM',
      },
    ],
  },
  {
    date: '29 Jan, 2026',
    pnl: 500,
    bets: [
      {
        title: 'India Vs Australia (Match Winner)',
        commission: 0,
        netWin: 500,
        startTime: 'JAN 29, 2026 9:00 AM',
        settledTime: 'JAN 29, 2026 5:30 PM',
      },
    ],
  },
];

const QUICK_FILTERS = ['Last 7 days', 'Last 14 days', 'Last 28 days'];

// Calendar SVG icon matching legacy
const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 21 20" fill="none" style={{ flexShrink: 0 }}>
    <path d="M7.17 4.79C6.83 4.79 6.55 4.51 6.55 4.17V1.67C6.55 1.33 6.83 1.04 7.17 1.04C7.51 1.04 7.8 1.33 7.8 1.67V4.17C7.8 4.51 7.51 4.79 7.17 4.79Z" fill="#C10B32" />
    <path d="M13.84 4.79C13.5 4.79 13.21 4.51 13.21 4.17V1.67C13.21 1.33 13.5 1.04 13.84 1.04C14.18 1.04 14.46 1.33 14.46 1.67V4.17C14.46 4.51 14.18 4.79 13.84 4.79Z" fill="#C10B32" />
    <path d="M17.59 8.2H3.42C3.08 8.2 2.8 7.92 2.8 7.57C2.8 7.23 3.08 6.95 3.42 6.95H17.59C17.93 6.95 18.21 7.23 18.21 7.57C18.21 7.92 17.93 8.2 17.59 8.2Z" fill="#C10B32" />
    <path d="M13.84 18.96H7.17C4.13 18.96 2.38 17.21 2.38 14.17V7.08C2.38 4.04 4.13 2.29 7.17 2.29H13.84C16.88 2.29 18.63 4.04 18.63 7.08V14.17C18.63 17.21 16.88 18.96 13.84 18.96ZM7.17 3.54C4.79 3.54 3.63 4.7 3.63 7.08V14.17C3.63 16.55 4.79 17.71 7.17 17.71H13.84C16.22 17.71 17.38 16.55 17.38 14.17V7.08C17.38 4.7 16.22 3.54 13.84 3.54H7.17Z" fill="#C10B32" />
  </svg>
);

// Swap arrows SVG
const SwapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="var(--brand-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M7 10h14l-4-4" /><path d="M17 14H3l4 4" />
  </svg>
);

export default function ProfitLossPage() {
  const [activeFilter, setActiveFilter] = useState('Last 7 days');
  const [startDateDisplay] = useState('January 28, 2026');
  const [endDateDisplay] = useState('February 4, 2026');

  return (
    <div style={{ width: '100%' }}>
      {/* Date Range + Calendar + Search Row — matches legacy exactly */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '6px',
        padding: '8px 6px', background: 'var(--bg-secondary)'
      }}>
        {/* From date field */}
        <div style={{
          flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '6px 8px', border: '1px solid var(--border-primary)',
          borderRadius: '6px', background: 'var(--bg-primary)', minHeight: '38px', cursor: 'pointer'
        }}>
          <span style={{ fontSize: '13px', color: 'var(--text-primary)' }}>{startDateDisplay}</span>
        </div>

        <SwapIcon />

        {/* To date field */}
        <div style={{
          flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '6px 8px', border: '1px solid var(--border-primary)',
          borderRadius: '6px', background: 'var(--bg-primary)', minHeight: '38px', cursor: 'pointer'
        }}>
          <span style={{ fontSize: '13px', color: 'var(--text-primary)' }}>{endDateDisplay}</span>
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

      {/* Quick Filter Buttons — pill/rounded-full style matching legacy */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center',
        padding: '8px'
      }}>
        {QUICK_FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            style={{
              padding: '6px 16px', borderRadius: '9999px', fontSize: '12px',
              border: '1px solid var(--border-primary)', cursor: 'pointer',
              transition: 'all 0.2s',
              background: activeFilter === f ? 'var(--brand-primary)' : 'transparent',
              color: activeFilter === f ? '#fff' : 'var(--text-primary)',
              fontWeight: activeFilter === f ? '700' : '500',
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* P&L Cards grouped by date */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        {PNL_DATA.map((group, gi) => (
          <div key={gi} style={{ marginBottom: '2px' }}>
            {/* Orange Date Header Row — full width */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '8px 12px', background: 'var(--brand-primary)',
            }}>
              <span style={{ fontSize: '13px', fontWeight: '600', color: '#fff' }}>{group.date}</span>
              <span style={{ fontSize: '13px', fontWeight: '600', color: '#fff' }}>
                P&L : <span style={{ color: group.pnl < 0 ? '#fca5a5' : '#86efac' }}>{group.pnl}</span>
              </span>
            </div>

            {/* Bet Cards */}
            {group.bets.map((bet, bi) => (
              <div key={bi} style={{ background: 'var(--bg-primary)', marginBottom: '2px' }}>
                {/* Title — orange text on dark bg */}
                <div style={{
                  padding: '8px 12px', fontSize: '13px', fontWeight: '600',
                  color: 'var(--brand-primary)',
                  borderBottom: '1px solid var(--border-primary)'
                }}>
                  {bet.title}
                </div>

                {/* Commission + Net Win row — slightly different bg */}
                <div style={{
                  display: 'flex', alignItems: 'center',
                  padding: '8px 12px',
                  background: 'var(--bg-tertiary)',
                  fontSize: '13px',
                  borderBottom: '1px solid var(--border-primary)'
                }}>
                  <div style={{ flex: 1, color: 'var(--text-primary)' }}>
                    Commission: <span style={{ color: '#ef4444' }}>₹ {bet.commission}</span>
                  </div>
                  <div style={{ flex: 1, textAlign: 'right', color: 'var(--text-primary)' }}>
                    Net Win: <span style={{ color: bet.netWin < 0 ? '#ef4444' : '#22c55e' }}>₹ {bet.netWin}</span>
                  </div>
                </div>

                {/* Start/Settled Times */}
                <div style={{ padding: '8px 12px', fontSize: '13px', color: 'var(--text-primary)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Start Time</span>
                    <span style={{ fontWeight: '500' }}>{bet.startTime}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Settled Time</span>
                    <span style={{ fontWeight: '500' }}>{bet.settledTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
