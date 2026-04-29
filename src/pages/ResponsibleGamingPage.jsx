import React from 'react';

export default function ResponsibleGamingPage() {
  const sections = [
    {
      title: 'Our Commitment',
      icon: 'bi-shield-check',
      content: 'REDDY247 is committed to providing a safe, fair, and responsible gambling environment. We believe that gambling should be an enjoyable activity and we work hard to ensure that our customers are able to remain in control of their gambling at all times.',
    },
    {
      title: 'Self-Assessment',
      icon: 'bi-clipboard-check',
      content: 'Ask yourself these questions: Do you gamble more than you can afford? Do you find it difficult to stop gambling? Has gambling caused problems in your relationships or at work? Do you chase losses? If you answered yes to any of these, please consider taking a break.',
    },
    {
      title: 'Deposit Limits',
      icon: 'bi-currency-rupee',
      content: 'You can set daily, weekly, or monthly deposit limits on your account. Once set, limits can only be increased after a 24-hour cooling-off period. We recommend setting limits that match your entertainment budget.',
    },
    {
      title: 'Self-Exclusion',
      icon: 'bi-person-x',
      content: 'If you feel you need a break from gambling, you can self-exclude for a period of your choice — from 6 months to 5 years. During this period, you will not be able to access your account or open a new one.',
    },
    {
      title: 'Reality Check',
      icon: 'bi-clock-history',
      content: 'Enable reality check notifications to remind yourself how long you have been playing. You can set reminders at regular intervals to help you keep track of time and spending.',
    },
    {
      title: 'Support Resources',
      icon: 'bi-heart',
      content: 'If you or someone you know needs help with problem gambling, please reach out to professional support organizations. We partner with GamCare, BeGambleAware, and Gamblers Anonymous.',
    },
  ];

  return (
    <div style={{ padding: '20px', paddingBottom: '32px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(229,140,31,0.15)', marginBottom: '16px' }}>
          <i className="bi bi-shield-check" style={{ fontSize: '32px', color: 'var(--brand-primary)' }}></i>
        </div>
        <h1 style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text-primary)', margin: '0 0 8px' }}>Responsible Gaming</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '14px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
          We care about your wellbeing. Gambling should always be fun, never a problem. Here are tools and resources to keep it that way.
        </p>
      </div>

      {/* Sections grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px', marginBottom: '32px' }}>
        {sections.map((sec) => (
          <div key={sec.title} className="content-card" style={{ padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(229,140,31,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className={sec.icon} style={{ fontSize: '20px', color: 'var(--brand-primary)' }}></i>
              </div>
              <h3 style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: 'var(--text-primary)' }}>{sec.title}</h3>
            </div>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{sec.content}</p>
          </div>
        ))}
      </div>

      {/* Support Links */}
      <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-primary)', borderRadius: '12px', padding: '24px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '16px' }}>Get Help Now</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          {[
            { name: 'GamCare', url: 'https://www.gamcare.org.uk', color: '#0ea5e9' },
            { name: 'BeGambleAware', url: 'https://www.begambleaware.org', color: '#22c55e' },
            { name: 'Gamblers Anonymous', url: 'https://www.gamblersanonymous.org', color: '#8b5cf6' },
            { name: 'NCPG', url: 'https://www.ncpgambling.org', color: '#f59e0b' },
          ].map((org) => (
            <a key={org.name} href={org.url} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '10px 16px', borderRadius: '8px',
                border: `1px solid ${org.color}40`,
                background: `${org.color}15`,
                color: org.color, textDecoration: 'none',
                fontWeight: '600', fontSize: '13px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = `${org.color}25`}
              onMouseLeave={(e) => e.currentTarget.style.background = `${org.color}15`}
            >
              <i className="bi bi-box-arrow-up-right"></i>
              {org.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
