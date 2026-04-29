import React from 'react';

export default function SportsPage({ sport }) {
  return (
    <div style={{ padding: '24px 16px' }}>
      <div style={{
        background: 'linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary))',
        borderRadius: '12px',
        border: '1px solid var(--border-primary)',
        padding: '40px 24px',
        textAlign: 'center',
      }}>
        <div style={{
          width: '72px', height: '72px', borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--brand-primary), var(--brand-secondary))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 16px', fontSize: '32px',
        }}>
          <i className="bi bi-trophy-fill" style={{ color: '#000' }}></i>
        </div>
        <h1 style={{ fontSize: '28px', fontWeight: '900', color: 'var(--text-primary)', marginBottom: '8px' }}>
          {sport}
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '14px', maxWidth: '400px', margin: '0 auto 24px' }}>
          Live odds and markets for {sport} are loading. Check back soon or explore our other sports.
        </p>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {['All Events', 'Live Now', 'Upcoming', 'Outright'].map((tab) => (
            <button key={tab} style={{
              padding: '8px 16px', borderRadius: '8px', border: '1px solid var(--border-primary)',
              background: tab === 'All Events' ? 'var(--brand-primary)' : 'var(--bg-tertiary)',
              color: tab === 'All Events' ? '#000' : 'var(--text-secondary)',
              fontWeight: '600', fontSize: '12px', cursor: 'pointer',
            }}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Placeholder Events */}
      <div style={{ marginTop: '20px' }}>
        {[1, 2, 3].map((i) => (
          <div key={i} style={{
            background: 'var(--bg-secondary)', borderRadius: '8px',
            border: '1px solid var(--border-primary)', padding: '16px',
            marginBottom: '10px', opacity: 0.5,
          }}>
            <div style={{ height: '12px', background: 'var(--bg-tertiary)', borderRadius: '4px', width: '30%', marginBottom: '8px' }}></div>
            <div style={{ height: '16px', background: 'var(--bg-tertiary)', borderRadius: '4px', width: '60%', marginBottom: '8px' }}></div>
            <div style={{ display: 'flex', gap: '8px' }}>
              {[1, 2, 3].map((j) => (
                <div key={j} style={{ height: '36px', background: 'var(--bg-tertiary)', borderRadius: '6px', flex: 1 }}></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
