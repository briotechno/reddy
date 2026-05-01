import React from 'react';
import { Link } from 'react-router-dom';

const HOW_IT_WORKS = [
  {
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 7h6v6" /><path d="m22 7-8.5 8.5-5-5L2 17" /></svg>),
    label: 'Play Games',
  },
  {
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>),
    label: 'Auto Calculate',
  },
  {
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8v-3a1 1 0 0 0-1-1H6a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2V6" /><path d="M20 12v4h-4a2 2 0 0 1 0-4h4" /></svg>),
    label: 'Get Rewarded',
  },
];

export default function LosebackPage() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px', padding: '24px 16px' }}>
      <div style={{ position: 'relative' }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '64px', height: '64px', transform: 'rotate(12deg)' }} fill="var(--brand-primary)">
          <path d="M190.5 68.8L225.3 128l-1.3 0-72 0c-22.1 0-40-17.9-40-40s17.9-40 40-40l2.2 0c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40L32 128c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-41.6 0c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88l-2.2 0c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0L152 0C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40l-72 0-1.3 0 34.8-59.2C329.1 55.9 342.9 48 357.8 48l2.2 0c22.1 0 40 17.9 40 40zM32 288l0 176c0 26.5 21.5 48 48 48l144 0 0-224L32 288zM288 512l144 0c26.5 0 48-21.5 48-48l0-176-192 0 0 224z" />
        </svg>
        <div style={{ position: 'absolute', top: '-4px', right: '-4px', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--brand-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: '#fff', fontSize: '10px', fontWeight: '900' }}>!</span>
        </div>
      </div>

      <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-primary)', margin: 0, letterSpacing: '-0.5px' }}>No Loss Back Claims Available!</h3>
        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', maxWidth: '340px', lineHeight: '1.6', margin: 0, fontWeight: '500' }}>
          Continue playing to earn loss back bonuses! New claims are typically processed on Tuesday, Wednesday, and Thursday.
        </p>
      </div>

      <div style={{ width: '100%', maxWidth: '360px', background: 'var(--bg-tertiary)', borderRadius: '10px', padding: '16px', border: '1px solid var(--border-primary)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
          <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontSize: '14px' }}>💡</span>
          </div>
          <div>
            <h4 style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-primary)', margin: '0 0 6px 0' }}>How Loss Back Works</h4>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.5', fontWeight: '500' }}>
              When you experience losses while playing, a percentage gets credited back to your main balance automatically. The more you play, the more you can earn back!
            </p>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginTop: '8px' }}>
          {HOW_IT_WORKS.map((step, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 6px', color: 'var(--text-primary)' }}>
                {step.icon}
              </div>
              <p style={{ fontSize: '11px', fontWeight: '500', color: 'var(--text-primary)', margin: 0 }}>{step.label}</p>
            </div>
          ))}
        </div>
      </div>

      <Link to="/">
        <button style={{ padding: '10px 24px', borderRadius: '8px', border: 'none', background: 'var(--brand-primary)', color: '#fff', fontWeight: '700', fontSize: '14px', cursor: 'pointer' }}>
          Continue Playing
        </button>
      </Link>
    </div>
  );
}
