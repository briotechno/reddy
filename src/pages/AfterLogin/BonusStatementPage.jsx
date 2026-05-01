import React, { useState } from 'react';

const QUICK_FILTERS = ['Last 7 days', 'Last 14 days', 'Last 28 days'];
const BONUS_TYPES = ['Sport Bonus', 'General Bonus', 'Casino Bonus'];

const CalendarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 21 20" fill="none" style={{ flexShrink: 0 }}>
    <path d="M7.17 4.79C6.83 4.79 6.55 4.51 6.55 4.17V1.67C6.55 1.33 6.83 1.04 7.17 1.04C7.51 1.04 7.8 1.33 7.8 1.67V4.17C7.8 4.51 7.51 4.79 7.17 4.79Z" fill="#C10B32" />
    <path d="M13.84 4.79C13.5 4.79 13.21 4.51 13.21 4.17V1.67C13.21 1.33 13.5 1.04 13.84 1.04C14.18 1.04 14.46 1.33 14.46 1.67V4.17C14.46 4.51 14.18 4.79 13.84 4.79Z" fill="#C10B32" />
    <path d="M17.59 8.2H3.42C3.08 8.2 2.8 7.92 2.8 7.57C2.8 7.23 3.08 6.95 3.42 6.95H17.59C17.93 6.95 18.21 7.23 18.21 7.57C18.21 7.92 17.93 8.2 17.59 8.2Z" fill="#C10B32" />
    <path d="M13.84 18.96H7.17C4.13 18.96 2.38 17.21 2.38 14.17V7.08C2.38 4.04 4.13 2.29 7.17 2.29H13.84C16.88 2.29 18.63 4.04 18.63 7.08V14.17C18.63 17.21 16.88 18.96 13.84 18.96ZM7.17 3.54C4.79 3.54 3.63 4.7 3.63 7.08V14.17C3.63 16.55 4.79 17.71 7.17 17.71H13.84C16.22 17.71 17.38 16.55 17.38 14.17V7.08C17.38 4.7 16.22 3.54 13.84 3.54H7.17Z" fill="#C10B32" />
  </svg>
);

export default function BonusStatementPage() {
  const [activeFilter, setActiveFilter] = useState('Last 7 days');
  const [bonusType, setBonusType] = useState('Sport Bonus');
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div style={{ width: '100%' }}>
      {/* Date Range Row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 6px', background: 'var(--bg-secondary)' }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', padding: '6px 8px', border: '1px solid var(--border-primary)', borderRadius: '6px', background: 'var(--bg-primary)', minHeight: '38px', cursor: 'pointer' }}>
          <span style={{ fontSize: '13px', color: 'var(--text-primary)' }}>January 28, 2026</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="var(--brand-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <path d="M7 10h14l-4-4" /><path d="M17 14H3l4 4" />
        </svg>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 8px', border: '1px solid var(--border-primary)', borderRadius: '6px', background: 'var(--bg-primary)', minHeight: '38px', cursor: 'pointer', gap: '8px' }}>
          <span style={{ fontSize: '13px', color: 'var(--text-primary)', flex: 1 }}>February 4, 2026</span>
          <CalendarIcon />
        </div>
        <button style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', borderRadius: '6px', cursor: 'pointer', background: 'var(--brand-primary)', flexShrink: 0 }}>
          <svg fill="white" width="16" height="16" viewBox="0 0 24 24"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" /></svg>
        </button>
      </div>

      {/* Quick Filters */}
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', padding: '8px' }}>
        {QUICK_FILTERS.map(f => (
          <button key={f} onClick={() => setActiveFilter(f)} style={{
            padding: '6px 16px', borderRadius: '9999px', fontSize: '12px',
            border: '1px solid var(--border-primary)', cursor: 'pointer',
            background: activeFilter === f ? 'var(--brand-primary)' : 'transparent',
            color: activeFilter === f ? '#fff' : 'var(--text-primary)',
            fontWeight: activeFilter === f ? '700' : '500',
          }}>{f}</button>
        ))}
      </div>

      {/* Bonus Type Dropdown */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '0 8px 8px', position: 'relative' }}>
        <button onClick={() => setShowDropdown(!showDropdown)} style={{
          display: 'flex', alignItems: 'center', gap: '6px', background: 'var(--brand-primary)',
          color: '#fff', border: 'none', borderRadius: '6px', padding: '6px 14px',
          fontSize: '12px', fontWeight: '600', cursor: 'pointer'
        }}>
          {bonusType}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="10" width="10" fill="white">
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </button>
        {showDropdown && (
          <div style={{ position: 'absolute', top: '100%', right: '8px', zIndex: 10, background: 'var(--bg-secondary)', border: '1px solid var(--border-primary)', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.3)', minWidth: '140px' }}>
            {BONUS_TYPES.map(type => (
              <button key={type} onClick={() => { setBonusType(type); setShowDropdown(false); }} style={{
                display: 'block', width: '100%', padding: '8px 16px', textAlign: 'left', fontSize: '12px',
                border: 'none', cursor: 'pointer',
                background: bonusType === type ? 'var(--brand-primary)' : 'transparent',
                color: bonusType === type ? '#fff' : 'var(--text-primary)',
                borderBottom: '1px solid var(--border-primary)'
              }}>{type}</button>
            ))}
          </div>
        )}
      </div>

      {/* Empty State */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', textAlign: 'center' }}>
        <div style={{ fontSize: '48px', marginBottom: '12px', opacity: 0.4 }}>📋</div>
        <span style={{ fontSize: '14px', color: 'var(--text-secondary)', fontWeight: '500' }}>
          No data available for selected date range...
        </span>
      </div>
    </div>
  );
}
