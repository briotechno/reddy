import React, { useState } from 'react';

const TABS = ['All', 'Active', 'Expired'];

const PROMO_ITEMS = [
  { label: 'WELCOME BONUS ON FIRST DEPOSIT', img: '🎁' },
  { label: 'WEEKLY LOSSBACK', img: '💰' },
  { label: 'PROMOCODE BONUS', img: '🎟️' },
  { label: 'ON NEW GAME BONUS', img: '🎮' },
];

const BONUS_CARDS = [
  {
    code: 'REDDYID150',
    desc: '150% Bonus on 1st Deposit',
    amount: '1,500',
    status: 'expired',
    expiredOn: '6:02 PM, 03-02-2026',
    currentWagered: 0,
    requiredWagered: '30,000',
    progress: 0,
  },
];

function WageringRing({ progress }) {
  const r = 34.5;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (progress / 100) * circumference;
  return (
    <div style={{ position: 'relative', width: '75px', height: '75px' }}>
      <svg style={{ transform: 'rotate(-90deg)', width: '75px', height: '75px' }}>
        <circle stroke="var(--border-primary)" fill="none" strokeWidth="6" r={r} cx="37.5" cy="37.5" />
        <circle
          stroke="var(--brand-primary)"
          fill="none"
          strokeWidth="6"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          r={r}
          cx="37.5"
          cy="37.5"
          style={{ transition: 'stroke-dashoffset 0.3s ease' }}
        />
      </svg>
      <div style={{
        position: 'absolute', inset: 0, display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)'
      }}>
        {progress}%
      </div>
    </div>
  );
}

function GiftCard({ promoCode, setPromoCode, handleRedeem }) {
  return (
    <div style={{
      padding: '10px', borderRadius: '10px',
      background: 'linear-gradient(135deg, var(--brand-primary) 0%, #c5730f 100%)',
      position: 'relative', overflow: 'hidden', marginBottom: '12px'
    }}>
      {/* Decorative corner shape */}
      <div style={{
        position: 'absolute', top: 0, right: '8px',
        width: 0, height: 0,
        borderLeft: '30px solid transparent',
        borderTop: '30px solid rgba(255,255,255,0.1)'
      }} />
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '10px' }}>
        {/* Gift icon */}
        <div style={{ fontSize: '40px', flexShrink: 0 }}>🎁</div>
        <div>
          <div style={{ fontSize: '14px', fontWeight: '700', color: '#fff', marginBottom: '2px' }}>GIFT CARD</div>
          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.85)', lineHeight: '1.4' }}>
            Type or Paste your promocode and get rewards in your wallet.
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
        <input
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          placeholder="Enter Promo Code"
          style={{
            flex: 1, padding: '7px 10px', borderRadius: '6px',
            background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)',
            color: '#fff', fontSize: '13px', outline: 'none'
          }}
        />
        <button
          onClick={handleRedeem}
          disabled={!promoCode.trim()}
          style={{
            padding: '7px 14px', borderRadius: '6px', border: 'none',
            background: promoCode.trim() ? '#fff' : 'rgba(255,255,255,0.5)',
            color: 'var(--brand-primary)', fontWeight: '700', fontSize: '12px',
            cursor: promoCode.trim() ? 'pointer' : 'not-allowed',
            display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="8" width="18" height="4" rx="1" />
            <path d="M12 8v13" />
            <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
            <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
          </svg>
          Redeem
        </button>
      </div>
    </div>
  );
}

export default function BonusPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [promoCode, setPromoCode] = useState('');
  const [redeemed, setRedeemed] = useState(false);

  const handleRedeem = () => {
    if (promoCode.trim()) {
      setRedeemed(true);
      setPromoCode('');
      setTimeout(() => setRedeemed(false), 3000);
    }
  };

  return (
    <div style={{ width: '100%' }}>
      {/* Success toast */}
      {redeemed && (
        <div style={{
          background: 'rgba(34,197,94,0.15)', border: '1px solid #22c55e',
          borderRadius: '8px', padding: '10px 14px', marginBottom: '12px',
          color: '#22c55e', fontSize: '13px', fontWeight: '600'
        }}>
          ✓ Promo code redeemed successfully!
        </div>
      )}

      {/* Tab Selector */}
      <div style={{
        display: 'flex', padding: '4px 8px', marginBottom: '8px',
        position: 'relative', background: 'var(--bg-secondary)',
        borderRadius: '8px', border: '1px solid var(--border-primary)',
        width: 'fit-content', gap: '4px'
      }}>
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '6px 20px', borderRadius: '6px', border: 'none',
              cursor: 'pointer', fontSize: '13px', fontWeight: '600',
              transition: 'all 0.2s',
              background: activeTab === tab ? 'var(--brand-primary)' : 'transparent',
              color: activeTab === tab ? '#fff' : 'var(--text-secondary)',
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ALL / EXPIRED TAB Content */}
      {(activeTab === 'All' || activeTab === 'Expired') && (
        <div>
          {/* Promo Icon Grid */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '10px', padding: '0 6px', marginBottom: '12px'
          }}>
            {PROMO_ITEMS.map((item, i) => (
              <div key={i} style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                textAlign: 'center', background: 'var(--bg-tertiary)',
                borderRadius: '10px', padding: '12px 8px',
                border: '1px solid var(--border-primary)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer',
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div style={{
                  width: '64px', height: '64px', borderRadius: '50%',
                  background: 'rgba(229,140,31,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '28px', marginBottom: '8px',
                  border: '2px solid rgba(229,140,31,0.3)'
                }}>
                  {item.img}
                </div>
                <span style={{
                  fontSize: '9px', fontWeight: '700', color: 'var(--text-primary)',
                  lineHeight: '1.3', textTransform: 'uppercase'
                }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Gift Card */}
          <div style={{ padding: '0 6px', marginBottom: '12px' }}>
            <GiftCard promoCode={promoCode} setPromoCode={setPromoCode} handleRedeem={handleRedeem} />
          </div>

          {/* Bonus Cards */}
          <div style={{ padding: '0 6px', display: 'flex', flexDirection: 'column', gap: '8px', paddingBottom: '40px' }}>
            {BONUS_CARDS.map((card, i) => (
              <div key={i} style={{
                position: 'relative', borderRadius: '12px', overflow: 'hidden',
                background: 'var(--bg-secondary)', border: '1px solid var(--border-primary)',
                minHeight: '160px', transition: 'all 0.3s'
              }}>
                {/* Status badge */}
                <div style={{
                  position: 'absolute', top: '6px', left: '6px', zIndex: 10,
                  display: 'flex', alignItems: 'center', gap: '4px',
                  padding: '3px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: '600',
                  background: card.status === 'expired' ? 'rgba(239,68,68,0.2)' : 'rgba(34,197,94,0.2)',
                  color: card.status === 'expired' ? '#ef4444' : '#22c55e',
                  border: `1px solid ${card.status === 'expired' ? '#ef4444' : '#22c55e'}`
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m15 9-6 6" /><path d="m9 9 6 6" />
                  </svg>
                  {card.status.charAt(0).toUpperCase() + card.status.slice(1)}
                </div>

                {/* Expiry time badge */}
                <div style={{
                  position: 'absolute', top: '6px', right: '6px', zIndex: 10,
                  display: 'flex', alignItems: 'center', gap: '4px',
                  padding: '3px 8px', borderRadius: '20px', fontSize: '10px',
                  background: 'rgba(239,68,68,0.15)', color: '#ef4444',
                  border: '1px solid rgba(239,68,68,0.3)'
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" /><polyline points="12,6 12,12 16,14" />
                  </svg>
                  <span>Expired on: {card.expiredOn}</span>
                </div>

                {/* Card Body */}
                <div style={{ padding: '16px', paddingTop: '36px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    {/* Left Info */}
                    <div style={{ width: '65%' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '12px' }}>
                        <span style={{ fontWeight: '700', fontSize: '16px', color: 'var(--text-primary)' }}>{card.code}</span>
                        <span style={{
                          fontSize: '10px', color: 'var(--text-primary)',
                          background: 'rgba(239,68,68,0.15)', padding: '3px 8px',
                          borderRadius: '20px', width: 'fit-content',
                          display: 'flex', alignItems: 'center', gap: '4px',
                          border: '1px solid rgba(239,68,68,0.2)'
                        }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="8" width="18" height="4" rx="1" />
                            <path d="M12 8v13" />
                            <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
                          </svg>
                          {card.desc}
                        </span>
                        <p style={{ fontWeight: '700', fontSize: '15px', color: 'var(--text-primary)', margin: 0 }}>
                          Amount ₹{card.amount}
                        </p>
                      </div>
                      {/* Wagering info */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-secondary)' }}>
                          <span>Current Wagered</span>
                          <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>₹{card.currentWagered}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-secondary)' }}>
                          <span>Required Wagered</span>
                          <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>₹{card.requiredWagered}</span>
                        </div>
                      </div>
                    </div>

                    {/* Wagering Ring */}
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <WageringRing progress={card.progress} />
                    </div>
                  </div>
                </div>

                {/* Watermark logo */}
                <div style={{
                  position: 'absolute', bottom: '10px', left: '12px',
                  opacity: 0.08, fontSize: '20px', fontWeight: '900',
                  color: 'var(--text-primary)', letterSpacing: '-1px'
                }}>
                  REDDY247
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ACTIVE TAB Content */}
      {activeTab === 'Active' && (
        <div>
          {/* Gift Card */}
          <div style={{ padding: '0 6px', marginBottom: '12px' }}>
            <GiftCard promoCode={promoCode} setPromoCode={setPromoCode} handleRedeem={handleRedeem} />
          </div>
          {/* Empty state */}
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', padding: '60px 20px', textAlign: 'center'
          }}>
            <div style={{ fontSize: '64px', marginBottom: '16px', opacity: 0.6 }}>🎁</div>
            <div style={{
              background: 'var(--brand-primary)', color: '#fff',
              borderRadius: '8px', padding: '8px 20px', fontSize: '13px', fontWeight: '600'
            }}>
              No Active Bonuses Available
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
