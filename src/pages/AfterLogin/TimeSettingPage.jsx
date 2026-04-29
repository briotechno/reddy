import React, { useState } from 'react';

const TIMEZONES = [
  { label: 'IST (India Standard Time)', offset: '+05:30' },
  { label: 'GMT (Greenwich Mean Time)', offset: '+00:00' },
  { label: 'EST (Eastern Standard Time)', offset: '-05:00' },
  { label: 'PST (Pacific Standard Time)', offset: '-08:00' },
  { label: 'CST (China Standard Time)', offset: '+08:00' },
  { label: 'AEST (Australia Eastern)', offset: '+10:00' },
];

export default function TimeSettingPage() {
  const [selectedTz, setSelectedTz] = useState('IST (India Standard Time)');
  const [timeFormat, setTimeFormat] = useState('24h');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div style={{ maxWidth: '520px' }}>
      <h2 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '20px' }}>Time Settings</h2>
      {saved && (
        <div style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid #22c55e', borderRadius: '8px', padding: '12px 16px', marginBottom: '16px', color: '#22c55e', fontSize: '13px', fontWeight: '600' }}>
          <i className="bi bi-check-circle-fill me-2"></i>Settings saved!
        </div>
      )}
      <div className="content-card" style={{ padding: '20px', marginBottom: '16px' }}>
        <label style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-primary)', display: 'block', marginBottom: '10px' }}>Timezone</label>
        <select value={selectedTz} onChange={(e) => setSelectedTz(e.target.value)}
          style={{ width: '100%', padding: '10px 12px', background: 'var(--bg-secondary)', border: '1px solid var(--border-primary)', borderRadius: '8px', color: 'var(--text-primary)', fontSize: '14px' }}>
          {TIMEZONES.map((tz) => (
            <option key={tz.label} value={tz.label}>{tz.label} ({tz.offset})</option>
          ))}
        </select>
      </div>
      <div className="content-card" style={{ padding: '20px', marginBottom: '20px' }}>
        <label style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-primary)', display: 'block', marginBottom: '10px' }}>Time Format</label>
        <div style={{ display: 'flex', gap: '10px' }}>
          {[['12h', '12-hour (AM/PM)'], ['24h', '24-hour']].map(([val, label]) => (
            <button key={val} onClick={() => setTimeFormat(val)}
              style={{ flex: 1, padding: '10px', borderRadius: '8px', border: `2px solid ${timeFormat === val ? 'var(--brand-primary)' : 'var(--border-primary)'}`, background: timeFormat === val ? 'rgba(229,140,31,0.1)' : 'var(--bg-secondary)', color: timeFormat === val ? 'var(--brand-primary)' : 'var(--text-secondary)', fontWeight: '700', fontSize: '13px', cursor: 'pointer', transition: 'all 0.2s' }}>
              {label}
            </button>
          ))}
        </div>
      </div>
      <button onClick={handleSave} style={{ width: '100%', padding: '12px', background: 'var(--brand-primary)', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '700', fontSize: '14px', cursor: 'pointer' }}>
        Save Settings
      </button>
    </div>
  );
}
