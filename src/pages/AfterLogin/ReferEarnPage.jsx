import React from 'react';

const REFER_CODE = 'REDDY247REF001';
const STATS = [
  { label: 'Total Referrals', val: '12', icon: 'bi-people-fill', color: '#3b82f6' },
  { label: 'Successful', val: '8', icon: 'bi-person-check-fill', color: '#22c55e' },
  { label: 'Total Earned', val: '₹4,000', icon: 'bi-wallet-fill', color: 'var(--brand-primary)' },
  { label: 'Pending', val: '₹1,000', icon: 'bi-hourglass-split', color: '#f59e0b' },
];

const REFERRALS = [
  { name: 'User***45', date: '15-01-2026', status: 'completed', bonus: '₹500' },
  { name: 'User***78', date: '12-01-2026', status: 'completed', bonus: '₹500' },
  { name: 'User***23', date: '10-01-2026', status: 'pending', bonus: '₹500' },
  { name: 'User***91', date: '08-01-2026', status: 'completed', bonus: '₹500' },
];

export default function ReferEarnPage() {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(REFER_CODE).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div style={{ padding: '16px' }}>
      {/* Hero Banner */}
      <div style={{ background: 'linear-gradient(135deg, #1a1d28, #2d1500)', border: '1px solid var(--brand-primary)40', borderRadius: '12px', padding: '24px', marginBottom: '20px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(229,140,31,0.1), transparent 70%)', pointerEvents: 'none' }}></div>
        <i className="bi bi-gift-fill" style={{ fontSize: '40px', color: 'var(--brand-primary)', marginBottom: '12px', display: 'block' }}></i>
        <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#fff', margin: '0 0 8px' }}>Refer & Earn</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '20px' }}>Invite friends and earn <strong style={{ color: 'var(--brand-primary)' }}>₹500</strong> for every successful referral!</p>

        {/* Referral Code */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--bg-primary)', border: '1px dashed var(--brand-primary)', borderRadius: '8px', padding: '10px 20px' }}>
          <span style={{ fontSize: '18px', fontWeight: '800', color: 'var(--brand-primary)', letterSpacing: '2px' }}>{REFER_CODE}</span>
          <button onClick={handleCopy} style={{ background: copied ? '#22c55e' : 'var(--brand-primary)', color: '#fff', border: 'none', borderRadius: '6px', padding: '6px 12px', fontWeight: '700', fontSize: '12px', cursor: 'pointer', transition: 'all 0.2s' }}>
            {copied ? <><i className="bi bi-check2"></i> Copied!</> : <><i className="bi bi-clipboard"></i> Copy</>}
          </button>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '20px' }}>
        {STATS.map((s) => (
          <div key={s.label} className="content-card" style={{ padding: '14px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: `${s.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <i className={s.icon} style={{ fontSize: '18px', color: s.color }}></i>
            </div>
            <div>
              <div style={{ fontSize: '18px', fontWeight: '800', color: s.color }}>{s.val}</div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* How it works */}
      <div className="content-card" style={{ padding: '16px', marginBottom: '20px' }}>
        <h3 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '14px' }}>How It Works</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { step: '01', title: 'Share Your Code', desc: 'Share your unique referral code with friends via WhatsApp, Telegram, or social media.' },
            { step: '02', title: 'Friend Registers', desc: 'Your friend signs up using your referral code and completes verification.' },
            { step: '03', title: 'Friend Deposits', desc: 'Your friend makes their first deposit of minimum ₹500.' },
            { step: '04', title: 'You Both Win', desc: 'You get ₹500 bonus and your friend gets a welcome bonus!' },
          ].map((step) => (
            <div key={step.step} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(229,140,31,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: '12px', fontWeight: '800', color: 'var(--brand-primary)' }}>{step.step}</span>
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '2px' }}>{step.title}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Referral History */}
      <div>
        <h3 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '12px' }}>Referral History</h3>
        <div style={{ overflowX: 'auto', border: '1px solid var(--border-primary)', borderRadius: '8px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead>
              <tr style={{ background: 'var(--bg-secondary)' }}>
                {['User', 'Date', 'Status', 'Bonus'].map((h) => (
                  <th key={h} style={{ padding: '10px 12px', textAlign: 'left', fontWeight: '700', color: 'var(--text-secondary)', borderBottom: '1px solid var(--border-primary)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {REFERRALS.map((r, i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--border-primary)', background: i % 2 === 0 ? 'transparent' : 'var(--bg-tertiary)' }}>
                  <td style={{ padding: '10px 12px', color: 'var(--text-primary)', fontWeight: '600' }}>{r.name}</td>
                  <td style={{ padding: '10px 12px', color: 'var(--text-secondary)' }}>{r.date}</td>
                  <td style={{ padding: '10px 12px' }}>
                    <span style={{ padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: '700', background: r.status === 'completed' ? 'rgba(34,197,94,0.15)' : 'rgba(245,158,11,0.15)', color: r.status === 'completed' ? '#22c55e' : '#f59e0b' }}>
                      {r.status.toUpperCase()}
                    </span>
                  </td>
                  <td style={{ padding: '10px 12px', color: 'var(--brand-primary)', fontWeight: '700' }}>{r.bonus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
