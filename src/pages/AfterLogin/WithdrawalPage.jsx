import React, { useState } from 'react';

export default function WithdrawalPage() {
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('upi');
  const [upiId, setUpiId] = useState('');

  return (
    <div>
      <h2 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '4px' }}>Withdraw Funds</h2>
      <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '20px' }}>Withdraw your winnings to your bank account or UPI.</p>

      {/* Available Balance */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(229,140,31,0.1), rgba(229,140,31,0.05))',
        border: '1px solid rgba(229,140,31,0.3)', borderRadius: '10px',
        padding: '16px 20px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Available for Withdrawal</div>
          <div style={{ fontSize: '24px', fontWeight: '900', color: 'var(--brand-primary)' }}>₹10,250.00</div>
        </div>
        <i className="bi bi-wallet2" style={{ fontSize: '32px', color: 'var(--brand-primary)', opacity: 0.5 }}></i>
      </div>

      {/* Method */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
        {[{ id: 'upi', label: 'UPI', icon: 'bi-phone' }, { id: 'bank', label: 'Bank Transfer', icon: 'bi-bank' }].map((m) => (
          <button key={m.id} onClick={() => setMethod(m.id)} style={{
            background: method === m.id ? 'rgba(229,140,31,0.15)' : 'var(--bg-tertiary)',
            border: `1px solid ${method === m.id ? 'var(--brand-primary)' : 'var(--border-primary)'}`,
            borderRadius: '10px', padding: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px',
          }}>
            <i className={m.icon} style={{ fontSize: '20px', color: method === m.id ? 'var(--brand-primary)' : 'var(--text-secondary)' }}></i>
            <span style={{ fontWeight: '700', fontSize: '13px', color: 'var(--text-primary)' }}>{m.label}</span>
          </button>
        ))}
      </div>

      {/* UPI / Bank Details */}
      <div className="form-group" style={{ marginBottom: '14px' }}>
        <label className="form-label" htmlFor="withdrawUpiId">{method === 'upi' ? 'UPI ID' : 'Bank Account / IFSC'}</label>
        <input
          id="withdrawUpiId"
          type="text"
          className="form-control"
          placeholder={method === 'upi' ? 'e.g. yourname@upi' : 'Account No & IFSC'}
          value={upiId}
          onChange={(e) => setUpiId(e.target.value)}
        />
      </div>

      <div className="form-group" style={{ marginBottom: '20px' }}>
        <label className="form-label" htmlFor="withdrawAmount">Withdrawal Amount</label>
        <div style={{ position: 'relative' }}>
          <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)', fontWeight: '700' }}>₹</span>
          <input
            id="withdrawAmount"
            type="number"
            className="form-control"
            placeholder="Minimum ₹500"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{ paddingLeft: '32px', fontSize: '15px', fontWeight: '700' }}
          />
        </div>
      </div>

      <button className="btn-primary-full" id="withdrawSubmitBtn" style={{ maxWidth: '320px' }}>
        Request Withdrawal
      </button>
      <div style={{ marginTop: '10px', fontSize: '11px', color: 'var(--text-muted)' }}>
        <i className="bi bi-info-circle me-1"></i>Processing time: 2–4 business hours. Min. ₹500 per withdrawal.
      </div>
    </div>
  );
}
