import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// ── Reusable 3-Back / 3-Lay odds grid ─────────────────────────────────────
function OddsCell({ price, size, type = 'back', disabled = false, wide = false }) {
  const [flash, setFlash] = useState(false);
  const bg = type === 'back' ? '#72bbef' : '#faa9ba';
  const handleClick = () => {
    if (disabled) return;
    setFlash(true);
    setTimeout(() => setFlash(false), 250);
  };
  return (
    <div
      onClick={handleClick}
      style={{
        background: disabled ? (type === 'back' ? 'rgba(114,187,239,0.25)' : 'rgba(250,169,186,0.25)') : flash ? '#fff' : bg,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '4px 2px', cursor: disabled ? 'default' : 'pointer',
        minHeight: '44px', userSelect: 'none', transition: 'background 0.15s',
        flex: wide ? '0 0 80px' : '0 0 60px',
      }}
    >
      <span style={{ fontWeight: '700', fontSize: '13px', color: disabled ? 'transparent' : '#000', lineHeight: 1.2 }}>
        {disabled ? '-' : price}
      </span>
      {!disabled && size && (
        <span style={{ fontSize: '10px', color: 'rgba(0,0,0,0.55)', lineHeight: 1 }}>{size}</span>
      )}
    </div>
  );
}

function OddsRow({ team, pl, b3, b2, b1, l1, l2, l3, suspended = false }) {
  const plColor = pl > 0 ? '#22c55e' : pl < 0 ? '#ef4444' : 'transparent';
  return (
    <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid var(--border-primary)', position: 'relative' }}>
      {/* Team name + P&L */}
      <div style={{ flex: 1, padding: '8px 12px', minWidth: 0 }}>
        <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{team}</div>
        {pl !== undefined && (
          <div style={{ fontSize: '11px', color: plColor, fontWeight: '700' }}>{pl > 0 ? pl : pl < 0 ? pl : ''}</div>
        )}
      </div>
      {/* Back 3, 2, 1 */}
      <OddsCell price={b3} size="" type="back" disabled={!b3 || suspended} />
      <OddsCell price={b2} size="" type="back" disabled={!b2 || suspended} />
      <OddsCell price={b1} size={b1 ? '50,000+' : ''} type="back" disabled={!b1 || suspended} />
      {/* Lay 1, 2, 3 */}
      <OddsCell price={l1} size={l1 ? '50,000+' : ''} type="lay" disabled={!l1 || suspended} />
      <OddsCell price={l2} size="" type="lay" disabled={!l2 || suspended} />
      <OddsCell price={l3} size="" type="lay" disabled={!l3 || suspended} />
      {suspended && (
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '360px', background: 'rgba(0,0,0,0.65)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
          <span style={{ color: '#fff', fontWeight: '700', fontSize: '12px', letterSpacing: '1px' }}>SUSPENDED</span>
        </div>
      )}
    </div>
  );
}

// ── Column header for Back / Lay ───────────────────────────────────────────
function OddsHeader() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg-tertiary)', borderBottom: '1px solid var(--border-primary)' }}>
      <div style={{ flex: 1 }} />
      {/* Back labels */}
      <div style={{ flex: '0 0 180px', display: 'flex' }}>
        <div style={{ flex: 1, textAlign: 'center', padding: '4px 0', fontSize: '11px', fontWeight: '700', color: 'var(--text-secondary)', background: 'rgba(114,187,239,0.2)' }}>Back</div>
        <div style={{ flex: 1, textAlign: 'center', padding: '4px 0', fontSize: '11px', fontWeight: '700', color: 'var(--text-secondary)', background: 'rgba(250,169,186,0.2)' }}>Lay</div>
      </div>
    </div>
  );
}

// ── Bookmaker row (only 1 Back + 1 Lay) ───────────────────────────────────
function BookmakerRow({ team, pl, back, lay, suspended = false }) {
  const plColor = pl > 0 ? '#22c55e' : '#ef4444';
  return (
    <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid var(--border-primary)', position: 'relative' }}>
      <div style={{ flex: 1, padding: '8px 12px' }}>
        <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)' }}>{team}</div>
        {pl !== undefined && <div style={{ fontSize: '11px', color: plColor, fontWeight: '700' }}>{pl}</div>}
      </div>
      {/* 2 disabled + 1 active for Back */}
      <OddsCell disabled type="back" />
      <OddsCell disabled type="back" />
      <OddsCell price={back} size="" type="back" disabled={suspended || !back} />
      {/* 1 active + 2 disabled for Lay */}
      <OddsCell price={lay} size="" type="lay" disabled={suspended || !lay} />
      <OddsCell disabled type="lay" />
      <OddsCell disabled type="lay" />
      {suspended && (
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '360px', background: 'rgba(0,0,0,0.65)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
          <span style={{ color: '#fff', fontWeight: '700', fontSize: '12px', letterSpacing: '1px' }}>SUSPENDED</span>
        </div>
      )}
    </div>
  );
}

// ── Fancy row (Yes / No with min/max bet) ──────────────────────────────────
function FancyRow({ label, no, yes, maxBet = '10,000', maxMkt = '10,00,000', ballRunning = false }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid var(--border-primary)', minHeight: '48px' }}>
      <div style={{ flex: 1, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)' }}>{label}</span>
        <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>⏱2s</span>
        <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>⊞</span>
      </div>
      <div style={{ display: 'flex', flexShrink: 0 }}>
        {ballRunning ? (
          <div style={{ width: '240px', background: 'rgba(250,169,186,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px', fontSize: '12px', fontWeight: '600', color: '#7c2d12' }}>
            Ball Running
          </div>
        ) : (
          <>
            <OddsCell price={no} type="lay" wide />
            <OddsCell price={yes} type="back" wide />
          </>
        )}
      </div>
      <div style={{ padding: '4px 10px', fontSize: '10px', color: 'var(--text-muted)', textAlign: 'right', minWidth: '120px' }}>
        <div>Max Bet :{maxBet}</div>
        <div>Max Mkt :{maxMkt}</div>
      </div>
    </div>
  );
}

// ── Market section wrapper ─────────────────────────────────────────────────
function MarketSection({ title, cashout, children }) {
  return (
    <div style={{ border: '1px solid var(--border-primary)', borderRadius: '6px', overflow: 'hidden', marginBottom: '10px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-primary)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontWeight: '800', fontSize: '13px', color: 'var(--text-primary)', letterSpacing: '0.5px' }}>{title}</span>
          {cashout && (
            <span style={{ background: '#22c55e', color: '#000', fontSize: '11px', fontWeight: '700', padding: '2px 8px', borderRadius: '4px' }}>
              {cashout}
            </span>
          )}
          <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: 0, fontSize: '14px' }}>ℹ</button>
        </div>
        <div style={{ display: 'flex', gap: '80px', paddingRight: '4px' }}>
          <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-secondary)', background: 'rgba(114,187,239,0.2)', padding: '2px 16px', borderRadius: '2px' }}>Back</span>
          <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-secondary)', background: 'rgba(250,169,186,0.2)', padding: '2px 16px', borderRadius: '2px' }}>Lay</span>
        </div>
      </div>
      {children}
    </div>
  );
}

// ── Main page ──────────────────────────────────────────────────────────────
export default function CricketMatchPage() {
  const [fancyTab, setFancyTab] = useState('ALL');
  const FANCY_TABS = ['ALL', 'OVERS', 'SINGLE OVER', 'BATSMAN', 'BALL BY BALL', 'ODD EVEN'];

  return (
    <div style={{ paddingBottom: '16px' }}>
      {/* Match Header */}
      <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-primary)', borderRadius: '6px', marginBottom: '10px', overflow: 'hidden' }}>
        {/* Title row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', borderBottom: '1px solid var(--border-primary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* Clock icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--brand-primary)"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-0.8 1.3z"/></svg>
            <span style={{ fontWeight: '800', fontSize: '15px', color: 'var(--brand-primary)' }}>
              Chattogram Royals vs Rajshahi Warriors
            </span>
          </div>
          <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '14px' }}>ℹ</button>
        </div>

        {/* Live score panel */}
        <div style={{ padding: '10px 12px', background: 'var(--bg-primary)' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '6px' }}>
            <span style={{ color: 'var(--brand-primary)', fontSize: '13px', fontWeight: '700' }}>Durbar Rajshahi</span>
            <span style={{ fontSize: '22px', fontWeight: '900', color: 'var(--text-primary)' }}>20/0</span>
            <span style={{ background: '#22c55e', color: '#000', fontSize: '10px', fontWeight: '700', padding: '1px 6px', borderRadius: '3px' }}>Over 2.5</span>
            <span style={{ marginLeft: 'auto', fontWeight: '700', color: 'var(--text-primary)', fontSize: '13px' }}>1</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', flexWrap: 'wrap' }}>
            <span style={{ color: 'var(--text-muted)' }}>Over 3</span>
            {['0','6','4','0','1','·'].map((b, i) => (
              <span key={i} style={{ width: '20px', height: '20px', borderRadius: '50%', background: b === '6' ? '#22c55e' : b === '4' ? '#3b82f6' : b === '·' ? '#71717a' : 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', color: '#fff' }}>{b}</span>
            ))}
            <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>= 11</span>
            <span style={{ margin: '0 8px', color: 'var(--text-muted)' }}>|</span>
            <span style={{ color: 'var(--text-muted)' }}>Over 2</span>
            {['2','4','0','2','0','0'].map((b, i) => (
              <span key={i} style={{ width: '20px', height: '20px', borderRadius: '50%', background: b === '4' ? '#3b82f6' : 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', color: '#fff' }}>{b}</span>
            ))}
            <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>= 8</span>
          </div>

          {/* Stats row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginTop: '10px', padding: '8px 0', borderTop: '1px solid var(--border-primary)' }}>
            {[['CRR', '7.13'], ['PSHIP R', '20'], ['PSHIP B', '17'], ['LAST WICKET', '-']].map(([label, val]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>{label}</div>
                <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-primary)' }}>{val}</div>
              </div>
            ))}
          </div>

          {/* Batsmen/Bowler */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '8px', borderTop: '1px solid var(--border-primary)', paddingTop: '8px' }}>
            <div>
              <div style={{ fontSize: '10px', color: 'var(--text-muted)', marginBottom: '4px', fontWeight: '600' }}>Batsmen</div>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px', color: 'var(--text-secondary)' }}>
                <thead><tr>{['','R','B','4s','6s','SR'].map(h => <th key={h} style={{ textAlign: 'right', padding: '2px 4px', color: 'var(--text-muted)' }}>{h}</th>)}</tr></thead>
                <tbody>
                  {[['Sahibzada Farhan','9','10','1s','0s','90'],['Tanzid Hasan','11','7','1s','1s','157.14']].map(([name,...stats]) => (
                    <tr key={name}><td style={{ padding: '2px 4px', color: 'var(--text-primary)', fontWeight:'600' }}>{name}</td>{stats.map((s,i) => <td key={i} style={{ textAlign:'right', padding:'2px 4px' }}>{s}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <div style={{ fontSize: '10px', color: 'var(--text-muted)', marginBottom: '4px', fontWeight: '600' }}>Bowler</div>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px', color: 'var(--text-secondary)' }}>
                <thead><tr>{['','O','M','R','W','Eco'].map(h => <th key={h} style={{ textAlign: 'right', padding: '2px 4px', color: 'var(--text-muted)' }}>{h}</th>)}</tr></thead>
                <tbody>
                  <tr><td style={{ padding: '2px 4px', color: 'var(--text-primary)', fontWeight:'600' }}>Mohammad Shoriful Islam</td>{['1.5','0','12','0','8'].map((s,i) => <td key={i} style={{ textAlign:'right', padding:'2px 4px' }}>{s}</td>)}</tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* MATCH ODDS */}
      <MarketSection title="MATCH ODDS" cashout="Cashout">
        <OddsRow team="Nepal"  pl={-29}  b3="1.26" b2="1.27" b1="1.28" l1="1.29" l2="1.3"  l3="1.31" />
        <OddsRow team="Italy"  pl={100}  b3="4.2"  b2="4.3"  b1="4.4"  l1="4.5"  l2="4.6"  l3="4.7"  />
      </MarketSection>

      {/* BOOKMAKER */}
      <MarketSection title="BOOKMAKER" cashout="Cashout : ₹ 31.54">
        <BookmakerRow team="Nepal" pl={71}   back="28" lay="30" />
        <BookmakerRow team="Italy" pl={-100} back="30" lay="58" />
      </MarketSection>

      {/* TIED MATCH */}
      <MarketSection title="TIED MATCH" cashout="Cashout">
        <OddsRow team="Yes" b3="2.72" b2="2.74" b1="2.78" l1="2.8" l2="2.82" l3="2.84" />
        <OddsRow team="No"  b3="1.53" b2="1.54" b1="1.55" l1="1.56" l2="1.57" l3="1.58" />
      </MarketSection>

      {/* FANCY BETS */}
      <div style={{ border: '1px solid var(--border-primary)', borderRadius: '6px', overflow: 'hidden', marginBottom: '10px' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-primary)' }}>
          <span style={{ fontWeight: '800', fontSize: '13px', color: 'var(--text-primary)' }}>FANCY BETS</span>
          <div style={{ display: 'flex', gap: '40px', paddingRight: '130px' }}>
            <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-secondary)', background: 'rgba(250,169,186,0.2)', padding: '2px 16px', borderRadius: '2px' }}>No</span>
            <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-secondary)', background: 'rgba(114,187,239,0.2)', padding: '2px 16px', borderRadius: '2px' }}>Yes</span>
          </div>
        </div>

        {/* Fancy sub-tabs */}
        <div style={{ display: 'flex', gap: '4px', padding: '8px 12px', background: 'var(--bg-primary)', borderBottom: '1px solid var(--border-primary)', overflowX: 'auto' }}>
          {FANCY_TABS.map(tab => (
            <button key={tab} onClick={() => setFancyTab(tab)} style={{
              padding: '4px 12px', borderRadius: '9999px', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap',
              background: fancyTab === tab ? 'var(--brand-primary)' : 'var(--bg-tertiary)',
              color: fancyTab === tab ? '#000' : 'var(--text-secondary)',
              fontWeight: '600', fontSize: '11px',
            }}>{tab}</button>
          ))}
        </div>

        {/* Fancy rows */}
        <FancyRow label="6 Over RW"  no="48" yes="49" />
        <FancyRow label="6 Over UAE" ballRunning />
        <FancyRow label="6 Over RW"  no="48" yes="49" />
        <FancyRow label="6 Over RW"  no="48" yes="49" />
        <FancyRow label="6 Over RW"  no="48" yes="49" />
      </div>
    </div>
  );
}
