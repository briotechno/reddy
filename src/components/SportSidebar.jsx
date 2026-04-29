import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

// Sport-specific mini sidebar matching HTML cricket/football pages
const SPORT_PAGES = {
  '/cricket': { label: 'Cricket', competitions: ['Twenty20 Big Bash', 'Bangladesh Premier League', 'ICC Champions Trophy', 'IPL 2025', 'India vs New Zealand', 'The Hundred', 'PSL 2025'] },
  '/football': { label: 'Football', competitions: ['English Premier League', 'La Liga', 'UEFA Champions League', 'Serie A', 'Bundesliga', 'Ligue 1'] },
  '/tennis': { label: 'Tennis', competitions: ['ATP Tour', 'WTA Tour', 'Grand Slams', 'Davis Cup'] },
  '/horse-racing': { label: 'Horse Racing', competitions: ['UK Racing', 'Irish Racing', 'US Racing', 'Australian Racing'] },
  '/greyhound-racing': { label: 'Greyhound Racing', competitions: ['UK Greyhound', 'Irish Greyhound'] },
};

export default function SportSidebar() {
  const location = useLocation();
  const sport = SPORT_PAGES[location.pathname];
  if (!sport) return null;

  return (
    <aside className="left-sidebar" style={{ padding:'8px 0' }}>
      {/* Sports nav matching HTML: Sports / Cricket / Previous */}
      <NavLink to="/sports"
        style={{ display:'flex', alignItems:'center', gap:'8px', padding:'10px 16px', color:'var(--text-secondary)', textDecoration:'none', fontSize:'13px', fontWeight:'600', borderBottom:'1px solid var(--border-primary)' }}>
        <i className="bi bi-house-fill" style={{ color:'var(--brand-primary)' }}></i>
        Sports
      </NavLink>
      <NavLink to={location.pathname}
        style={{ display:'flex', alignItems:'center', gap:'8px', padding:'10px 16px', background:'var(--brand-primary)', color:'#000', textDecoration:'none', fontSize:'13px', fontWeight:'700', borderBottom:'1px solid var(--border-primary)' }}>
        <i className="bi bi-trophy-fill"></i>
        {sport.label}
      </NavLink>
      <div style={{ display:'flex', alignItems:'center', gap:'8px', padding:'10px 16px', color:'var(--text-secondary)', fontSize:'13px', fontWeight:'600', borderBottom:'1px solid var(--border-primary)', cursor:'pointer' }}>
        <i className="bi bi-chevron-left" style={{ fontSize:'12px' }}></i>
        Previous
      </div>

      {/* Competitions list */}
      {sport.competitions.map(comp => (
        <div key={comp} style={{ padding:'10px 16px', fontSize:'13px', color:'var(--text-primary)', borderBottom:'1px solid var(--border-primary)', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'space-between' }}
          onClick={() => {}}>
          {comp}
          <i className="bi bi-chevron-right" style={{ fontSize:'11px', color:'var(--brand-primary)' }}></i>
        </div>
      ))}
    </aside>
  );
}
