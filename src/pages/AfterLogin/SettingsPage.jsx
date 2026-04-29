import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

export default function SettingsPage() {
  const { user } = useAuth();
  const [notif, setNotif] = useState({ email: true, sms: false, push: true });
  const [odds, setOdds] = useState('decimal');
  const [saved, setSaved] = useState(false);

  const save = () => { setSaved(true); setTimeout(() => setSaved(false), 2500); };
  const toggleNotif = (k) => setNotif((p) => ({ ...p, [k]: !p[k] }));

  return (
    <div>
      <h2 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '20px' }}>Settings</h2>
      {saved && (
        <div className="fade-in" style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.4)', color: '#22c55e', padding: '10px 16px', borderRadius: '8px', marginBottom: '16px', fontSize: '13px', fontWeight: '600' }}>
          <i className="bi bi-check-circle-fill me-2"></i>Settings saved!
        </div>
      )}
      <section style={{ marginBottom: '24px' }}>
        <h3 style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Personal Information</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div><label className="form-label" htmlFor="sUsername">Username</label><input id="sUsername" type="text" className="form-control" defaultValue={user?.username} readOnly style={{ opacity: 0.7 }} /></div>
          <div><label className="form-label" htmlFor="sEmail">Email</label><input id="sEmail" type="email" className="form-control" defaultValue="user@example.com" /></div>
          <div><label className="form-label" htmlFor="sPhone">Phone</label><input id="sPhone" type="tel" className="form-control" defaultValue="+91 9876543210" /></div>
          <div>
            <label className="form-label" htmlFor="sCurrency">Currency</label>
            <select id="sCurrency" className="form-control">
              <option>INR — Indian Rupee</option>
              <option>USD — US Dollar</option>
            </select>
          </div>
        </div>
      </section>
      <section style={{ marginBottom: '24px' }}>
        <h3 style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Odds Format</h3>
        <div style={{ display: 'flex', gap: '8px' }}>
          {['decimal', 'fractional', 'american'].map((f) => (
            <button key={f} onClick={() => setOdds(f)} style={{ padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '12px', background: odds === f ? 'var(--brand-primary)' : 'var(--bg-tertiary)', color: odds === f ? '#000' : 'var(--text-secondary)', border: '1px solid var(--border-primary)', textTransform: 'capitalize', transition: 'all 0.2s' }}>{f}</button>
          ))}
        </div>
      </section>
      <section style={{ marginBottom: '24px' }}>
        <h3 style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Notifications</h3>
        {[{ k: 'email', label: 'Email Notifications' }, { k: 'sms', label: 'SMS Alerts' }, { k: 'push', label: 'Push Notifications' }].map(({ k, label }) => (
          <div key={k} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: 'var(--bg-tertiary)', borderRadius: '8px', border: '1px solid var(--border-primary)', marginBottom: '8px' }}>
            <span style={{ fontWeight: '600', fontSize: '13px', color: 'var(--text-primary)' }}>{label}</span>
            <div onClick={() => toggleNotif(k)} role="switch" aria-checked={notif[k]} id={`toggle-${k}`} style={{ width: '44px', height: '24px', borderRadius: '12px', cursor: 'pointer', background: notif[k] ? 'var(--brand-primary)' : 'var(--bg-secondary)', border: '1px solid var(--border-secondary)', position: 'relative', transition: 'background 0.2s', flexShrink: 0 }}>
              <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#fff', position: 'absolute', top: '2px', left: notif[k] ? '22px' : '2px', transition: 'left 0.2s' }} />
            </div>
          </div>
        ))}
      </section>
      <button className="btn-primary-full" onClick={save} id="settingsSaveBtn" style={{ maxWidth: '200px' }}>Save Changes</button>
    </div>
  );
}
