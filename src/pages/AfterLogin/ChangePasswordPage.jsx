import React, { useState } from 'react';

export default function ChangePasswordPage() {
  const [form, setForm] = useState({ oldPass: '', newPass: '', confirmPass: '' });
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.newPass !== form.confirmPass) return alert('Passwords do not match!');
    setSuccess(true);
    setForm({ oldPass: '', newPass: '', confirmPass: '' });
  };

  return (
    <div style={{ maxWidth: '480px' }}>
      <h2 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '20px' }}>Change Password</h2>

      {success && (
        <div style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid #22c55e', borderRadius: '8px', padding: '12px 16px', marginBottom: '16px', color: '#22c55e', fontSize: '13px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <i className="bi bi-check-circle-fill"></i> Password changed successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {[
          { label: 'Current Password', key: 'oldPass', show: showOld, toggle: () => setShowOld(!showOld) },
          { label: 'New Password', key: 'newPass', show: showNew, toggle: () => setShowNew(!showNew) },
          { label: 'Confirm New Password', key: 'confirmPass', show: showConfirm, toggle: () => setShowConfirm(!showConfirm) },
        ].map(({ label, key, show, toggle }) => (
          <div key={key}>
            <label style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'block', marginBottom: '6px', fontWeight: '600' }}>{label}</label>
            <div style={{ position: 'relative' }}>
              <input
                type={show ? 'text' : 'password'}
                value={form[key]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                required
                style={{ width: '100%', padding: '11px 40px 11px 12px', background: 'var(--bg-secondary)', border: '1px solid var(--border-primary)', borderRadius: '8px', color: 'var(--text-primary)', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
              />
              <i
                className={`bi bi-eye${show ? '-slash' : ''}`}
                onClick={toggle}
                style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: 'var(--text-muted)', fontSize: '16px' }}
              ></i>
            </div>
          </div>
        ))}

        <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-primary)', borderRadius: '8px', padding: '12px 16px' }}>
          <p style={{ margin: '0 0 8px', fontSize: '12px', fontWeight: '700', color: 'var(--text-secondary)' }}>Password Requirements:</p>
          {['Minimum 8 characters', 'At least one uppercase letter', 'At least one number', 'At least one special character'].map((req) => (
            <div key={req} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>
              <i className="bi bi-dot" style={{ color: 'var(--brand-primary)' }}></i> {req}
            </div>
          ))}
        </div>

        <button type="submit" style={{ padding: '12px', background: 'var(--brand-primary)', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '700', fontSize: '14px', cursor: 'pointer', transition: 'opacity 0.2s' }}>
          Update Password
        </button>
      </form>
    </div>
  );
}
