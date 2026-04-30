import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// ─── Shared Odds Button ───────────────────────────────────────────────────────
function OddsBtn({ price, size, type = 'back', disabled = false }) {
  const [flash, setFlash] = useState(false);
  const bg = type === 'back' ? '#72bbef' : '#faa9ba';
  const textColor = '#000';
  const handleClick = () => {
    if (disabled) return;
    setFlash(true);
    setTimeout(() => setFlash(false), 300);
  };
  return (
    <div
      onClick={handleClick}
      style={{
        background: disabled ? 'rgba(114,187,239,0.3)' : flash ? '#fff' : bg,
        color: textColor,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '2px 4px', borderRadius: '3px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'all 0.15s ease',
        width: '100%', minHeight: '40px',
        userSelect: 'none',
      }}
    >
      <span style={{ fontWeight: '700', fontSize: '13px', lineHeight: '1.3' }}>{disabled ? '-' : price}</span>
      {!disabled && <span style={{ fontSize: '10px', opacity: 0.8 }}>{size}</span>}
    </div>
  );
}

// ─── In-Play Event Row ────────────────────────────────────────────────────────
function EventRow({ event, innerLink }) {
  return (
    <div style={{ borderBottom: '1px solid var(--border-primary)' }}>
      <div className="grid" style={{ display: 'grid', gridTemplateColumns: '1fr auto', minHeight: '48px' }}>
        {/* Left: Teams */}
        <div style={{ display: 'flex', alignItems: 'center', padding: '4px 8px', gap: '6px', borderRight: '1px solid var(--border-primary)' }}>
          {event.inPlay && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '32px', fontSize: '9px', color: 'var(--brand-primary)' }}>
              {event.score && <span style={{ fontWeight: 700 }}>{event.score}</span>}
              {event.over && <span>{event.over}</span>}
              <span style={{ fontSize: '8px', color: 'var(--brand-secondary)' }}>●</span>
            </div>
          )}
          {!event.inPlay && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '32px', fontSize: '9px', color: 'var(--text-muted)', textAlign: 'center' }}>
              <span>{event.date}</span>
              <span>{event.time}</span>
            </div>
          )}
          <Link
            to={innerLink || '#'}
            style={{ textDecoration: 'none', flex: 1 }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-primary)' }}>{event.team1}</span>
              <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-primary)' }}>{event.team2}</span>
            </div>
          </Link>
        </div>
        {/* Right: Odds */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 44px)', gap: '2px', padding: '2px', alignItems: 'center' }}>
          <OddsBtn price={event.o1b} size={event.o1bs} type="back" disabled={!event.o1b || event.o1b === '-'} />
          <OddsBtn price={event.o1l} size={event.o1ls} type="lay" disabled={!event.o1l || event.o1l === '-'} />
          <OddsBtn price={event.o2b} size={event.o2bs} type="back" disabled={!event.o2b || event.o2b === '-'} />
          <OddsBtn price={event.o2l} size={event.o2ls} type="lay" disabled={!event.o2l || event.o2l === '-'} />
          <OddsBtn price={event.o3b} size={event.o3bs} type="back" disabled={!event.o3b || event.o3b === '-'} />
          <OddsBtn price={event.o3l} size={event.o3ls} type="lay" disabled={!event.o3l || event.o3l === '-'} />
        </div>
      </div>
    </div>
  );
}

// ─── Events Table ─────────────────────────────────────────────────────────────
function EventsTable({ title, icon, events, innerLink, showLive = false }) {
  return (
    <div style={{ border: '1px solid var(--border-primary)', borderRadius: '8px', overflow: 'hidden', marginBottom: '12px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', background: showLive ? '#22c55e' : 'var(--bg-secondary)', borderBottom: '1px solid var(--border-primary)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {showLive ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 29 29" fill="none">
              <path d="M14.5 2.83337C8.06 2.83337 2.83337 8.06004 2.83337 14.5C2.83337 20.94 8.06 26.1667 14.5 26.1667C20.94 26.1667 26.1667 20.94 26.1667 14.5C26.1667 8.06004 20.94 2.83337 14.5 2.83337ZM12.1667 19.75V9.25004L19.1667 14.5L12.1667 19.75Z" fill="#fff" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 16 16" fill="var(--brand-primary)">
              <path d="M7,9h2V4H7V9z M9,11c0-0.553-0.447-1-1-1s-1,0.447-1,1s0.447,1,1,1S9,11.553,9,11z M16,8c0-4.419-3.581-8-8-8S0,3.581,0,8 s3.581,8,8,8S16,12.419,16,8z M14,8c0,1.603-0.625,3.109-1.756,4.244C11.109,13.375,9.603,14,8,14s-3.109-0.625-4.244-1.756 C2.625,11.109,2,9.603,2,8s0.625-3.109,1.756-4.244C4.891,2.625,6.397,2,8,2s3.109,0.625,4.244,1.756C13.375,4.891,14,6.397,14,8z"/>
            </svg>
          )}
          <span style={{ fontWeight: '700', fontSize: '16px', color: showLive ? '#fff' : 'var(--text-primary)' }}>
            {showLive ? 'In Play' : 'Upcoming Events'}
          </span>
        </div>
      </div>
      {/* Column Headers */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', background: 'var(--bg-tertiary)', borderBottom: '1px solid var(--border-primary)' }}>
        <div style={{ padding: '6px 8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '11px', fontWeight: '600', color: 'var(--text-secondary)' }}>{title}</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 44px)', gap: '2px', padding: '4px 2px' }}>
          {['1', 'X', '2'].map((label) => (
            <React.Fragment key={label}>
              <span style={{ fontSize: '10px', fontWeight: '600', color: 'var(--text-secondary)', textAlign: 'center', gridColumn: 'span 2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{label}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
      {events.map((ev, i) => (
        <EventRow key={i} event={ev} innerLink={innerLink} />
      ))}
    </div>
  );
}

export { OddsBtn, EventRow, EventsTable };
export default EventsTable;
