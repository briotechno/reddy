import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BANNERS = [
  { src: '/assets/images/Reddyy-banner.gif', alt: 'REDDY247 Promo Banner' },
  { src: '/assets/images/Reddyy-banner1.gif', alt: 'REDDY247 Promo Banner 1' },
  { src: '/assets/images/Reddyy-banner2.gif', alt: 'REDDY247 Promo Banner 2' },
];

const HOME_GAME_SECTIONS = [
  {
    title: 'Live Casino',
    href: '/live-casino',
    color: '#e91e8c',
    games: [
      { name: 'Lightning Roulette', img: '/assets/images/thumb_3_4_custom(1).webp' },
      { name: 'Crazy Time', img: '/assets/images/thumb_3_4_custom(2).webp' },
      { name: 'Baccarat Speed', img: '/assets/images/thumb_3_4_custom(3).webp' },
      { name: 'Blackjack VIP', img: '/assets/images/thumb_3_4_custom(4).webp' },
      { name: 'Dragon Tiger', img: '/assets/images/thumb_3_4_custom(5).webp' },
      { name: 'Teen Patti', img: '/assets/images/thumb_3_4_custom(6).webp' },
    ],
  },
  {
    title: 'Slot Games',
    href: '/slots',
    color: '#8b5cf6',
    games: [
      { name: 'Gates of Olympus', img: '/assets/images/thumb_3_4_custom(7).webp' },
      { name: 'Sweet Bonanza', img: '/assets/images/thumb_3_4_custom(8).webp' },
      { name: 'Starburst', img: '/assets/images/thumb_3_4_custom(9).webp' },
      { name: 'Big Bass Bonanza', img: '/assets/images/thumb_3_4_custom(10).webp' },
      { name: 'Wolf Gold', img: '/assets/images/thumb_3_4_custom(11).webp' },
      { name: 'Book of Dead', img: '/assets/images/thumb_3_4_custom(12).webp' },
    ],
  },
  {
    title: 'Indian Card Games',
    href: '/aura',
    color: '#f59e0b',
    games: [
      { name: 'Teen Patti', img: '/assets/images/indian games posters-01.webp' },
      { name: 'Andar Bahar', img: '/assets/images/indian games posters-02.webp' },
      { name: '32 Card Casino', img: '/assets/images/indian games posters-03.webp' },
      { name: 'Dragon Tiger', img: '/assets/images/indiangamesposters-04.webp' },
      { name: 'Rummy', img: '/assets/images/indian games posters-05.webp' },
      { name: 'Lucky 7', img: '/assets/images/indian games posters-07.webp' },
    ],
  },
  {
    title: 'Crash Games',
    href: '/crash-games',
    color: '#ef4444',
    games: [
      { name: 'Aviator', img: '/assets/images/thumb_3_4_custom(13).webp' },
      { name: 'JetX', img: '/assets/images/thumb_3_4_custom(14).webp' },
      { name: 'Spaceman', img: '/assets/images/thumb_3_4_custom(15).webp' },
      { name: 'Plinko', img: '/assets/images/thumb_3_4_custom(16).webp' },
      { name: 'Mines', img: '/assets/images/thumb_3_4_custom(17).webp' },
      { name: 'Balloon', img: '/assets/images/thumb_3_4_custom(18).webp' },
    ],
  },
];

const FEATURED_MATCHES = [
  { id:1, sport:'Cricket', tournament:'IPL 2025', team1:'Mumbai Indians', team2:'Chennai Super Kings', time:'Today 19:30', status:'live', odds:[{label:'MI Win',val:'1.82'},{label:'Draw',val:'14.0'},{label:'CSK Win',val:'2.10'}] },
  { id:2, sport:'Football', tournament:'Premier League', team1:'Manchester City', team2:'Arsenal', time:'Today 21:00', status:'upcoming', odds:[{label:'Man City',val:'1.65'},{label:'Draw',val:'3.80'},{label:'Arsenal',val:'4.50'}] },
];

function HomeBanner() {
  const [active, setActive] = useState(0);
  return (
    <div style={{ position:'relative', marginBottom:'16px', borderRadius:'10px', overflow:'hidden' }}>
      <img src={BANNERS[active].src} alt={BANNERS[active].alt}
        style={{ width:'100%', display:'block', objectFit:'cover', aspectRatio:'3.74' }}
        onError={(e) => { e.target.src = '/assets/images/Casino.webp'; }} />
      <div style={{ position:'absolute', bottom:'8px', left:'50%', transform:'translateX(-50%)', display:'flex', gap:'6px' }}>
        {BANNERS.map((_, i) => (
          <button key={i} onClick={() => setActive(i)}
            style={{ width: i===active?'20px':'8px', height:'8px', borderRadius:'99px', border:'none', cursor:'pointer', background: i===active?'var(--brand-primary)':'rgba(255,255,255,0.5)', transition:'all 0.3s', padding:0 }} />
        ))}
      </div>
    </div>
  );
}

function GameRow({ section }) {
  return (
    <div style={{ marginBottom:'20px' }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'10px' }}>
        <h3 style={{ margin:0, fontSize:'15px', fontWeight:'800', color:'var(--text-primary)' }}>
          <span style={{ color:section.color, marginRight:'6px' }}>●</span>{section.title}
        </h3>
        <Link to={section.href} style={{ fontSize:'12px', color:'var(--brand-primary)', textDecoration:'none' }}>
          View All <i className="bi bi-arrow-right-short"></i>
        </Link>
      </div>
      <div style={{ display:'flex', gap:'8px', overflowX:'auto', paddingBottom:'6px' }} className="no-scrollbar">
        {section.games.map((g, i) => (
          <div key={i} style={{ minWidth:'100px', flex:'0 0 auto', cursor:'pointer', position:'relative', borderRadius:'8px', overflow:'hidden', border:'1px solid var(--border-primary)' }}>
            <img src={g.img} alt={g.name}
              style={{ width:'100%', aspectRatio:'0.75', objectFit:'cover', display:'block' }}
              onError={(e) => { e.target.src=''; e.target.style.background='var(--bg-secondary)'; }} />
            <div style={{ position:'absolute', bottom:0, left:0, right:0, background:'linear-gradient(transparent,rgba(0,0,0,0.8))', padding:'12px 6px 6px', fontSize:'10px', fontWeight:'700', color:'#fff', textAlign:'center', lineHeight:1.2 }}>
              {g.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MatchCard({ match }) {
  return (
    <div className="match-card fade-in">
      <div className="match-card-header">
        <span className="match-sport-badge">{match.sport}</span>
        <span style={{ fontSize:'11px', color:'var(--text-muted)' }}>{match.tournament}</span>
        {match.status === 'live' && (<span className="live-badge"><span className="live-dot"></span> LIVE</span>)}
      </div>
      <div className="match-teams">
        <span className="match-team">{match.team1}</span>
        <span className="match-vs">VS</span>
        <span className="match-team">{match.team2}</span>
      </div>
      <div style={{ fontSize:'11px', color:'var(--text-muted)', marginBottom:'10px' }}>
        <i className="bi bi-clock me-1"></i>{match.time}
      </div>
      <div className="match-odds-row">
        {match.odds.map((o, i) => (
          <button key={i} className="odds-btn" title={`Bet on ${o.label}`}>
            <span className="odds-label">{o.label}</span>
            <span className="odds-value">{o.val}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div style={{ padding:'12px 12px 80px' }}>
      {/* Real banner from HTML assets */}
      <HomeBanner />

      {/* Refer & Earn Bar — matches HTML */}
      <Link to="/AfterLogin/ReferEarn"
        style={{ display:'flex', alignItems:'center', gap:'10px', padding:'12px 16px', background:'linear-gradient(90deg,#1a1a2e,#2d1b69)', borderRadius:'8px', marginBottom:'10px', textDecoration:'none', border:'1px solid rgba(229,140,31,0.3)' }}>
        <div style={{ width:'36px', height:'36px', borderRadius:'50%', background:'var(--brand-primary)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
          <i className="bi bi-gift-fill" style={{ fontSize:'16px', color:'#000' }}></i>
        </div>
        <div>
          <div style={{ fontSize:'13px', fontWeight:'800', color:'var(--brand-primary)' }}>Refer &amp; Earn</div>
          <div style={{ fontSize:'11px', color:'var(--text-muted)' }}>Earn commissions</div>
        </div>
        <i className="bi bi-chevron-right" style={{ marginLeft:'auto', color:'var(--brand-primary)' }}></i>
      </Link>

      {/* Lossback Bonus Bar — matches HTML */}
      <div style={{ display:'flex', alignItems:'center', gap:'10px', padding:'12px 16px', background:'linear-gradient(90deg,#064e3b,#065f46)', borderRadius:'8px', marginBottom:'16px', border:'1px solid rgba(34,197,94,0.3)' }}>
        <div style={{ flex:1 }}>
          <span style={{ fontSize:'13px', fontWeight:'800', color:'#22c55e', letterSpacing:'1px' }}>LOSSBACK BONUS</span>
        </div>
        <Link to="/AfterLogin" style={{ fontSize:'11px', color:'#22c55e', background:'rgba(34,197,94,0.15)', padding:'4px 12px', borderRadius:'4px', textDecoration:'none', border:'1px solid #22c55e', marginRight:'8px', whiteSpace:'nowrap' }}>
          Login to view claims
        </Link>
        <Link to="/AfterLogin/Bonus" style={{ fontSize:'12px', fontWeight:'700', background:'#22c55e', color:'#000', padding:'6px 14px', borderRadius:'4px', textDecoration:'none', whiteSpace:'nowrap' }}>
          VIEW ALL
        </Link>
      </div>

      {/* Game Sections with real thumbnails */}
      {HOME_GAME_SECTIONS.map((s) => (
        <GameRow key={s.title} section={s} />
      ))}

      {/* Featured Matches */}
      <div>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'12px' }}>
          <h3 className="section-heading" style={{ margin:0 }}>Featured Matches</h3>
          <Link to="/sportsbook" style={{ fontSize:'12px', color:'var(--brand-primary)', textDecoration:'none' }}>
            View All <i className="bi bi-arrow-right-short"></i>
          </Link>
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
          {FEATURED_MATCHES.map((m) => <MatchCard key={m.id} match={m} />)}
        </div>
      </div>
    </div>
  );
}

