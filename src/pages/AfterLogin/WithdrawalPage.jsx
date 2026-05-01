import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

export default function WithdrawalPage() {
  const { user } = useAuth();
  const balance = user?.balance || '1,000';
  const [accountType, setAccountType] = useState('new'); // 'new' | 'previous'
  const [amount, setAmount] = useState('');
  const [ifsc, setIfsc] = useState('');
  const [accountNo, setAccountNo] = useState('');
  const [confirmAccountNo, setConfirmAccountNo] = useState('');
  const [accountName, setAccountName] = useState('');
  const [showMore, setShowMore] = useState(false);

  const rules = [
    'Free cash amount cannot be withdrawn by this form.',
    'If multiple users are using same withdraw account then all the linked users will be blocked.',
    'Paytm account numbers always start with 91.',
  ];

  return (
    <div style={{ padding: '16px' }}>
      {/* Title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        <h2 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>Withdraw Funds</h2>
      </div>

      {/* Rules box */}
      <div style={{ background: 'var(--bg-primary)', borderRadius: '6px', padding: '14px 16px', marginBottom: '16px', border: '1px solid var(--border-primary)' }}>
        <ol style={{ margin: 0, padding: '0 0 0 18px', color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.8 }}>
          {(showMore ? rules : rules.slice(0, 1)).map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ol>
        <button
          onClick={() => setShowMore(!showMore)}
          style={{ background: 'none', border: 'none', color: 'var(--brand-primary)', cursor: 'pointer', fontSize: '12px', padding: '4px 0 0', fontWeight: '600' }}
        >
          {showMore ? 'See Less..' : 'See More..'}
        </button>
      </div>

      {/* Fill in required */}
      <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '14px', fontWeight: '600' }}>
        Please fill in all required fields*
      </div>

      {/* Use New Account / Use Previous Account tabs */}
      <div style={{ display: 'flex', borderRadius: '6px', overflow: 'hidden', marginBottom: '16px', border: '1px solid var(--border-primary)' }}>
        <button
          onClick={() => setAccountType('new')}
          style={{
            flex: 1, padding: '12px', border: 'none', cursor: 'pointer',
            background: accountType === 'new' ? 'var(--brand-primary)' : 'var(--bg-tertiary)',
            color: accountType === 'new' ? '#000' : 'var(--text-secondary)',
            fontWeight: '700', fontSize: '13px', transition: 'all 0.2s',
          }}
        >
          Use New Account
        </button>
        <button
          onClick={() => setAccountType('previous')}
          style={{
            flex: 1, padding: '12px', border: 'none', borderLeft: '1px solid var(--border-primary)', cursor: 'pointer',
            background: accountType === 'previous' ? 'var(--brand-primary)' : 'var(--bg-tertiary)',
            color: accountType === 'previous' ? '#000' : 'var(--text-secondary)',
            fontWeight: '700', fontSize: '13px', transition: 'all 0.2s',
          }}
        >
          Use Previous Account
        </button>
      </div>

      {/* Available to withdrawal pill */}
      <div style={{ marginBottom: '14px' }}>
        <span style={{
          background: 'var(--brand-primary)', color: '#000',
          fontWeight: '700', fontSize: '12px',
          padding: '5px 14px', borderRadius: '9999px', display: 'inline-block',
        }}>
          Available to withdrawal : ₹ {balance}
        </span>
      </div>

      {/* Form fields */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {/* Amount */}
        <div>
          <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-secondary)', display: 'block', marginBottom: '6px' }}>
            Amount <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <div style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)', fontSize: '15px' }}>₹</span>
            <input
              id="withdrawAmount"
              type="number"
              placeholder="Enter Amount"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              style={{ width: '100%', padding: '12px 60px 12px 36px', background: 'var(--bg-primary)', border: '1px solid var(--border-primary)', borderRadius: '6px', color: 'var(--text-primary)', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
            />
            <span style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', fontSize: '12px', fontWeight: '600' }}>INR</span>
          </div>
        </div>

        {accountType === 'new' && (
          <>
            {/* IFSC Code */}
            <div>
              <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-secondary)', display: 'block', marginBottom: '6px' }}>
                IFSC Code <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                id="withdrawIfsc"
                type="text"
                placeholder="Enter IFSC Code"
                value={ifsc}
                onChange={e => setIfsc(e.target.value)}
                style={{ width: '100%', padding: '12px 14px', background: 'var(--bg-primary)', border: '1px solid var(--border-primary)', borderRadius: '6px', color: 'var(--text-primary)', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            {/* Account No */}
            <div>
              <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-secondary)', display: 'block', marginBottom: '6px' }}>
                Account No <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                id="withdrawAccountNo"
                type="text"
                placeholder="Enter Account No"
                value={accountNo}
                onChange={e => setAccountNo(e.target.value)}
                style={{ width: '100%', padding: '12px 14px', background: 'var(--bg-primary)', border: '1px solid var(--border-primary)', borderRadius: '6px', color: 'var(--text-primary)', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            {/* Confirm Account No */}
            <div>
              <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-secondary)', display: 'block', marginBottom: '6px' }}>
                Confirm Account No <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                id="withdrawConfirmAccountNo"
                type="text"
                placeholder="Re-enter Account No"
                value={confirmAccountNo}
                onChange={e => setConfirmAccountNo(e.target.value)}
                style={{ width: '100%', padding: '12px 14px', background: 'var(--bg-primary)', border: '1px solid var(--border-primary)', borderRadius: '6px', color: 'var(--text-primary)', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            {/* Account Name */}
            <div>
              <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-secondary)', display: 'block', marginBottom: '6px' }}>
                Account Name <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                id="withdrawAccountName"
                type="text"
                placeholder="Enter Account Name"
                value={accountName}
                onChange={e => setAccountName(e.target.value)}
                style={{ width: '100%', padding: '12px 14px', background: 'var(--bg-primary)', border: '1px solid var(--border-primary)', borderRadius: '6px', color: 'var(--text-primary)', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
          </>
        )}

        {accountType === 'previous' && (
          <div style={{ padding: '24px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '13px', background: 'var(--bg-primary)', borderRadius: '6px', border: '1px solid var(--border-primary)' }}>
            No previous accounts found. Use "Use New Account" to add one.
          </div>
        )}

        {/* Submit */}
        <button
          id="withdrawSubmitBtn"
          style={{
            width: '100%', padding: '13px', background: 'var(--brand-primary)',
            border: 'none', borderRadius: '6px', color: '#000',
            fontWeight: '800', fontSize: '15px', cursor: 'pointer',
            transition: 'opacity 0.2s',
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
