import React, { useState } from 'react';

const TABS = [
  { id:'bank', label:'BANK', icon:'/assets/images/bankTransfer.svg' },
  { id:'upi', label:'UPI', icon:'/assets/images/upiIcon.svg' },
  { id:'crypto', label:'CRYPTO', icon:'/assets/images/btc.svg' },
];

const PAYMENT_OPTIONS = {
  bank: [
    { id:'whatsapp', label:'WHATSAPP', icon:<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#25D366"><path d="M12.003 0H11.997C5.3805 0 0 5.382 0 12C0 14.625.846 17.058 2.2845 19.0335L.789 23.4915l5.4015-1.4745C7.299 23.274 9.5625 24 12.003 24 18.6195 24 24 18.6165 24 12 24 5.3835 18.6195 0 12.003 0zM18.9855 16.9455C18.696 17.763 17.547 18.441 16.6305 18.639c-.627.1335-1.446.2395-4.2035-.9035C8.901 16.275 6.63 12.6915 6.453 12.459c-.1695-.2325-1.425-1.8975-1.425-3.6195C5.028 7.1175 5.9025 6.279 6.255 5.919c.2895-.2955.768-.4305 1.227-.4305.1485 0 .282.007.402.013.3525.015.5295.036.762.5565.2895.697.9945 2.419 1.0785 2.596.0855.177.171.417.051.649-.1125.24-.211.346-.388.55-.177.204-.345.36-.522.579-.162.19-.345.394-.141.747.204.345.909 1.4955 1.947 2.4195 1.3395 1.1925 2.4255 1.5735 2.814 1.7355.2895.12.634.091.845-.134.2685-.2895.6-.7695.9375-1.242.24-.339.5435-.381.861-.261.3195.112 2.034.9595 2.3865 1.135.3525.177.585.261.671.4095.084.149.084.846-.206 1.665z"/></svg> },
    { id:'imps', label:'IMPS', icon:<svg xmlns="http://www.w3.org/2000/svg" width="32" height="14" viewBox="0 0 64 28" fill="currentColor"><text x="0" y="22" fontSize="22" fontWeight="900" fill="currentColor">IMPS</text></svg> },
  ],
  upi: [
    { id:'upi', label:'UPI', icon:<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48" fill="#6739B7"><path d="M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0zm-4 34l-8-20h5l5 13 5-13h5l-8 20h-4z"/></svg> },
  ],
  crypto: [
    { id:'usdt', label:'USDT', icon:<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#26A17B"><circle cx="12" cy="12" r="12"/><text x="12" y="17" textAnchor="middle" fontSize="9" fontWeight="900" fill="#fff">USDT</text></svg> },
  ],
};

const AMOUNTS = ['200','500','1000','2000','5000','10000'];

export default function DepositPage() {
  const [activeTab, setActiveTab] = useState('bank');
  const [selectedMethod, setSelectedMethod] = useState('whatsapp');
  const [amount, setAmount] = useState('');

  const handleTabChange = (id) => {
    setActiveTab(id);
    setSelectedMethod(PAYMENT_OPTIONS[id][0].id);
  };

  const displayAmount = amount ? `₹${parseInt(amount).toLocaleString('en-IN')}` : '₹0';

  return (
    <div>
      <h2 style={{ fontSize:'20px', fontWeight:'800', color:'var(--text-primary)', marginBottom:'16px' }}>Deposit Funds</h2>

      {/* 3-Tab Switcher */}
      <div style={{ display:'flex', borderRadius:'0', overflow:'hidden', border:'1px solid var(--border-primary)', marginBottom:'20px' }}>
        {TABS.map((tab, i) => {
          const isActive = activeTab === tab.id;
          return (
            <button key={tab.id} onClick={() => handleTabChange(tab.id)}
              style={{
                flex:1, display:'flex', alignItems:'center', justifyContent:'center', gap:'8px',
                padding:'12px 8px', cursor:'pointer',
                background: isActive ? 'var(--brand-primary)' : 'var(--bg-tertiary)',
                color: isActive ? '#000' : 'var(--text-secondary)',
                border:'none', borderRight: i < TABS.length-1 ? '1px solid var(--border-primary)' : 'none',
                fontWeight:'700', fontSize:'13px', transition:'all 0.2s',
              }}>
              <img src={tab.icon} alt={tab.label} style={{ height:'18px', objectFit:'contain', filter: isActive ? 'brightness(0)' : 'brightness(0) invert(0.6)' }}
                onError={e => e.target.style.display='none'} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Amount Input */}
      <div style={{ marginBottom:'12px' }}>
        <label style={{ fontSize:'13px', fontWeight:'700', color:'var(--text-primary)', display:'block', marginBottom:'6px' }}>
          Amount <span style={{ color:'#ef4444' }}>*</span>
        </label>
        <div style={{ position:'relative' }}>
          <span style={{ position:'absolute', left:'14px', top:'50%', transform:'translateY(-50%)', color:'var(--text-secondary)', fontWeight:'700', fontSize:'15px' }}>₹</span>
          <input type="number" id="depositAmountInput" placeholder="Enter Amount"
            value={amount} onChange={e => setAmount(e.target.value)}
            style={{ width:'100%', padding:'12px 14px 12px 30px', background:'var(--bg-tertiary)', border:'1px solid var(--border-primary)', borderRadius:'6px', color:'var(--text-primary)', fontSize:'15px', outline:'none' }} />
          <span style={{ position:'absolute', right:'14px', top:'50%', transform:'translateY(-50%)', color:'var(--text-muted)', fontSize:'12px', fontWeight:'600' }}>INR</span>
        </div>
        <div style={{ fontSize:'11px', color:'var(--text-muted)', marginTop:'4px' }}>Min 200 - Max 1,00,000</div>
      </div>

      {/* Quick Amount Chips — amber filled, +200 format matching HTML */}
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'8px', marginBottom:'20px' }}>
        {AMOUNTS.map(a => {
          const isActive = amount === a;
          return (
            <button key={a} onClick={() => setAmount(a)}
              style={{
                padding:'10px 8px', borderRadius:'6px', cursor:'pointer', border:'none',
                background: isActive ? '#e5a028' : 'var(--brand-primary)',
                color:'#000', fontWeight:'700', fontSize:'13px', transition:'all 0.2s',
                boxShadow: isActive ? 'inset 0 2px 4px rgba(0,0,0,0.2)' : 'none',
              }}>
              +{parseInt(a).toLocaleString('en-IN')}
            </button>
          );
        })}
      </div>

      {/* Payment Options */}
      <div style={{ marginBottom:'20px' }}>
        <h3 style={{ fontSize:'13px', fontWeight:'700', color:'var(--text-primary)', marginBottom:'10px' }}>Select Payment Options</h3>
        <div style={{ display:'flex', gap:'10px', flexWrap:'wrap' }}>
          {(PAYMENT_OPTIONS[activeTab] || []).map(opt => {
            const isSelected = selectedMethod === opt.id;
            return (
              <button key={opt.id} onClick={() => setSelectedMethod(opt.id)}
                style={{
                  display:'flex', alignItems:'center', gap:'8px', padding:'10px 16px',
                  borderRadius:'8px', cursor:'pointer',
                  background: isSelected ? 'rgba(229,140,31,0.15)' : 'var(--bg-tertiary)',
                  border:`1px solid ${isSelected ? 'var(--brand-primary)' : 'var(--border-primary)'}`,
                  color:'var(--text-primary)', fontWeight:'700', fontSize:'13px', transition:'all 0.2s',
                }}>
                <span style={{ display:'flex', alignItems:'center' }}>{opt.icon}</span>
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Proceed Button */}
      <button id="depositSubmitBtn" className="btn-primary-full"
        style={{ width:'100%', maxWidth:'100%', background:'var(--brand-primary)', color:'#000', border:'none', borderRadius:'8px', padding:'14px', fontWeight:'800', fontSize:'15px', cursor:'pointer' }}>
        Proceed to Payment
      </button>

      <div style={{ marginTop:'12px', fontSize:'11px', color:'var(--text-muted)', display:'flex', alignItems:'center', gap:'6px' }}>
        <i className="bi bi-shield-check-fill" style={{ color:'#22c55e' }}></i>
        All transactions are 256-bit SSL encrypted and 100% secure.
      </div>
    </div>
  );
}
