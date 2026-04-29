import React, { useState, useRef } from 'react';

// Tab icons matching HTML exactly
const TAB_ICONS = {
  'Lobby': <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.005c-.777 0-1.508.367-1.971.99l-5.362 6.895c-.89 1.136-.89 3.083 0 4.227l5.375 6.911a2.457 2.457 0 003.93-.017l5.361-6.894c.89-1.136.89-3.083 0-4.227l-5.375-6.911A2.446 2.446 0 0012 2.005z" />,
  'Game Show': <><path d="M22.512 21.648 17.232 16.8 14.64 22.752h7.44a.627.627 0 00.424-1.088m-20.955 0a.627.627 0 00.424 1.088h7.44l-2.592-5.928zM11.988 11.988 7.752 15.888 10.728 22.752h2.496l2.988-6.816zM1.89 2.514h1.507v1.414a2.72 2.72 0 00-1.298 4.57L3.732 10.123l-.444.444a.627.627 0 10.887.887l4.741-4.733a.628.628 0 10-.89-.887l-.444.444L5.952 4.653a2.685 2.685 0 00-1.298-.722V2.514h14.664v1.414c-.492.115-.941.366-1.298.723l-1.629 1.627-.444-.444a.63.63 0 00-.889.887l4.741 4.737a.627.627 0 10.889-.89l-.445-.444 1.631-1.627a2.72 2.72 0 00-1.298-4.57V2.514h1.508a.628.628 0 000-1.254H1.889a.628.628 0 00-.445 1.071c.118.118.277.183.445.183"/></>,
  'Live Roulette': <><circle cx="12" cy="12" r="6.75" stroke="currentColor" strokeWidth="2" fill="none"/><circle cx="12" cy="12" r="10.5" stroke="currentColor" strokeWidth="2" fill="none"/><line x1="12" y1="1.5" x2="12" y2="5.25" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="8.25" r="0.75" fill="currentColor"/><circle cx="12" cy="12" r="0.75" fill="currentColor"/></>,
  'Live Dragon Tiger': <path d="M12 2.005c-.777 0-1.508.367-1.971.99l-5.362 6.895c-.89 1.136-.89 3.083 0 4.227l5.375 6.911a2.457 2.457 0 003.93-.017l5.361-6.894c.89-1.136.89-3.083 0-4.227l-5.375-6.911A2.446 2.446 0 0012 2.005z" />,
  'Live Lottery': <><path d="M15 5l0 2M15 11l0 2M15 17l0 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M5 5h14a2 2 0 012 2v3a2 2 0 000 4v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3a2 2 0 000-4V7a2 2 0 012-2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/></>,
  'Live Lobby': <path d="M12 10.941c2.333-3.308.167-7.823-1-8.941 0 3.395-2.235 5.299-3.667 6.706-1.43 1.408-2.333 3.621-2.333 5.588 0 3.704 3.134 6.706 7 6.706s7-3.002 7-6.706c0-1.712-1.232-4.403-2.333-5.588-2.084 3.353-3.257 3.353-4.667 2.235" />,
  'Live Dealer': <path d="M12 2a5 5 0 00-4.488 2.797l-.103.225a5 5 0 00-.334 2.837l.027.14a5 5 0 00-3.091 9.009l.198.14a5 5 0 004.42.58l.174-.066-.773 3.095a1 1 0 00.97 1.243h6l.113-.006a1 1 0 00.857-1.237l-.774-3.095.174.065a5 5 0 101.527-9.727l.028-.14A5 5 0 0012 2z" />,
  'Live Blackjack': <path d="M17 2a3 3 0 013 3v14a3 3 0 01-3 3H7a3 3 0 01-3-3V5a3 3 0 013-3zm.01 16h-.01a1 1 0 000 2h.01a1 1 0 000-2m-3.01-10h-4a1 1 0 00-1 1l.007.117A1 1 0 0010 10h3v3a1 1 0 01-2 0 1 1 0 00-2 0 3 3 0 006 0V9a1 1 0 00-1-1m-6.99-4h-.01a1 1 0 100 2h.01a1 1 0 100-2" />,
  'Live Poker': <><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none"/><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M12 3v4M12 17v4M3 12h4M17 12h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></>,
  'Live Sic Bo': <><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/><circle cx="8.5" cy="8.5" r="0.5" fill="currentColor"/><circle cx="15.5" cy="8.5" r="0.5" fill="currentColor"/><circle cx="15.5" cy="15.5" r="0.5" fill="currentColor"/><circle cx="8.5" cy="15.5" r="0.5" fill="currentColor"/><circle cx="12" cy="12" r="0.5" fill="currentColor"/></>,
  'Live Baccarat': <path d="M10.348 3.169l-7.15 3.113a2 2 0 00-1.03 2.608l4.92 11.895a1.96 1.96 0 002.59 1.063l7.142-3.11a2 2 0 001.036-2.611l-4.92-11.894a1.96 1.96 0 00-2.588-1.064z" />,
  'Money Wheel': <path d="M17 3.34a10 10 0 11-15 8.66l.005-.324A10 10 0 0117 3.34zm-5 2.66a1 1 0 00-1 1 3 3 0 100 6v2a1.024 1.024 0 01-.866-.398l-.068-.101a1 1 0 00-1.732.998 3 3 0 002.505 1.5h.161a1 1 0 00.883.994l.117.007a1 1 0 001-1l.176-.005a3 3 0 00-.176-5.995v-2c.358-.012.671.14.866.398l.068.101a1 1 0 001.732-.998A3 3 0 0012.839 6h-.161a1 1 0 00-1-1zm1 7a1 1 0 010 2v-2zm-2-4v2a1 1 0 010-2z" />,
  'Indian Tables': <><path d="M12 3v18M3 9h18M3 15h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/></>,
};

const PAGE_BANNERS = {
  'live-casino': { src: '/assets/images/Casino.webp', alt: 'Live Casino - REDDY247' },
  'slots':       { src: '/assets/images/Slot.webp',   alt: 'Slot Games - REDDY247' },
  'crash-games': { src: '/assets/images/Aviator.jfif', alt: 'Crash Games - REDDY247' },
  'aura':        { src: '/assets/images/Aura.webp',   alt: 'Indian Card Games - REDDY247' },
  'aviator':     { src: '/assets/images/Aviator.jfif', alt: 'Aviator - REDDY247' },
  'fishing-games':{ src: '/assets/images/Casino.webp', alt: 'Fishing Games - REDDY247' },
  'sportsbook':  { src: '/assets/images/Casino.webp', alt: 'Sportsbook - REDDY247' },
};

const PROVIDERS = [
  { name:'Aura Gaming', img:'/assets/images/Aura.svg' },
  { name:'Evolution', img:'/assets/images/evolution.svg' },
  { name:'Ezugi', img:'/assets/images/ezugi.svg' },
  { name:'Spribe', img:'/assets/images/spribe.svg' },
  { name:'Gamzix', img:'/assets/images/gamzix.svg' },
  { name:"Play'n GO", img:'/assets/images/playnGo.svg' },
];

const GAME_CATEGORIES = {
  'live-casino': {
    title:'Live Casino', color:'#e91e8c',
    banner: '/assets/images/Casino.webp',
    filterTabs:['Lobby','Game Show','Live Roulette','Live Dragon Tiger','Live Lottery','Live Lobby','Live Dealer','Live Blackjack','Live Poker','Live Sic Bo','Live Baccarat','Money Wheel','Indian Tables'],
    sections:[
      { name:'Live Roulette', games:[
        {n:'Auto Roulette',img:'/assets/images/thumb_3_4_custom.webp'},
        {n:'Instant Roulette',img:'/assets/images/thumb_3_4_custom(1).webp'},
        {n:'Lightning Roulette',img:'/assets/images/thumb_3_4_custom(2).webp'},
        {n:'Immersive Roulette',img:'/assets/images/thumb_3_4_custom(3).webp'},
        {n:'Speed Roulette',img:'/assets/images/thumb_3_4_custom(4).webp'},
        {n:'American Roulette',img:'/assets/images/thumb_3_4_custom(5).webp'},
        {n:'Double Ball Roulette',img:'/assets/images/thumb_3_4_custom(6).webp'},
        {n:'Japanese Roulette',img:'/assets/images/thumb_3_4_custom(7).webp'},
        {n:'Salon Privé Roulette',img:'/assets/images/thumb_3_4_custom(8).webp'},
        {n:'Emperor Roulette',img:'/assets/images/thumb_3_4_custom(9).webp'},
        {n:'Hindi Roulette',img:'/assets/images/thumb_3_4_custom(10).webp'},
        {n:'Diamond Roulette',img:'/assets/images/thumb_3_4_custom(12).webp'},
      ]},
      { name:'Game Show', games:[
        {n:'Crazy Time',img:'/assets/images/thumb_3_4_custom(13).webp'},
        {n:'Monopoly Live',img:'/assets/images/thumb_3_4_custom(14).webp'},
        {n:'Mega Ball',img:'/assets/images/thumb_3_4_custom(15).webp'},
        {n:'Dream Catcher',img:'/assets/images/thumb_3_4_custom(16).webp'},
        {n:'XXXtreme Lightning',img:'/assets/images/thumb_3_4_custom(17).webp'},
        {n:'Side Bet City',img:'/assets/images/thumb_3_4_custom(18).webp'},
      ]},
      { name:'Live Baccarat', games:[
        {n:'Baccarat Speed',img:'/assets/images/thumb_3_4_custom(19).webp'},
        {n:'Blackjack VIP',img:'/assets/images/thumb_3_4_custom(20).webp'},
        {n:'Dragon Tiger',img:'/assets/images/thumb_3_4_custom(22).webp'},
        {n:'Teen Patti Live',img:'/assets/images/thumb_3_4_custom(23).webp'},
        {n:'Andar Bahar',img:'/assets/images/thumb_3_4_custom(24).webp'},
      ]},
    ],
  },
  'slots': {
    title:'Slot Games', color:'#8b5cf6',
    banner:'/assets/images/Slot.webp',
    filterTabs:['All','New','Popular','Megaways','Jackpot','Bonus Buy'],
    sections:[
      { name:'Popular Slots', games:[
        {n:'Gates of Olympus',img:'/assets/images/thumb_3_4_custom(25).webp'},
        {n:'Sweet Bonanza',img:'/assets/images/thumb_3_4_custom(26).webp'},
        {n:'Starburst',img:'/assets/images/thumb_3_4_custom(27).webp'},
        {n:'Big Bass Bonanza',img:'/assets/images/thumb_3_4_custom(28).webp'},
        {n:'Wolf Gold',img:'/assets/images/thumb_3_4_custom(29).webp'},
        {n:'Book of Dead',img:'/assets/images/thumb_3_4_custom(30).webp'},
        {n:'Aztec Gold',img:'/assets/images/thumb_3_4_custom(31).webp'},
        {n:'Fishin Frenzy',img:'/assets/images/thumb_3_4_custom(32).webp'},
      ]},
    ],
  },
  'crash-games': {
    title:'Crash Games', color:'#ef4444',
    banner:'/assets/images/Aviator.jfif',
    filterTabs:['All','Crash','Instant Win','Mines'],
    sections:[
      { name:'Top Crash Games', games:[
        {n:'Aviator',img:'/assets/images/Aviator.jfif'},
        {n:'Cricket X',img:'/assets/images/cricketx.webp'},
        {n:'Spaceman',img:'/assets/images/spaceman.webp'},
        {n:'Balloon',img:'/assets/images/ballon.png'},
        {n:'Mines',img:'/assets/images/MINES.avif'},
        {n:'Limbo',img:'/assets/images/limbo.avif'},
        {n:'Crash',img:'/assets/images/crash.avif'},
        {n:'High Low',img:'/assets/images/highlow.avif'},
      ]},
    ],
  },
  'fishing-games': {
    title:'Fishing Games', color:'#0ea5e9',
    banner:'/assets/images/Casino.webp',
    filterTabs:['All','Shooting','Classic'],
    sections:[
      { name:'Top Fishing Games', games:[
        {n:'Fishing God',img:'/assets/images/thumb_3_4_custom(33).webp'},
        {n:'Royal Fishing',img:'/assets/images/thumb_3_4_custom(34).webp'},
        {n:'Ocean King',img:'/assets/images/thumb_3_4_custom(35).webp'},
        {n:'Lucky Fishing',img:'/assets/images/thumb_3_4_custom(36).webp'},
        {n:'Mega Fishing',img:'/assets/images/thumb_3_4_custom(37).webp'},
      ]},
    ],
  },
  'aura': {
    title:'Indian Card Games', color:'#f59e0b',
    banner:'/assets/images/Aura.webp',
    filterTabs:['All','Teen Patti','Andar Bahar','Rummy','Poker'],
    sections:[
      { name:'Indian Card Games', games:[
        {n:'Teen Patti',img:'/assets/images/indian games posters-01.webp'},
        {n:'Andar Bahar',img:'/assets/images/indian games posters-02.webp'},
        {n:'32 Card Casino',img:'/assets/images/indian games posters-03.webp'},
        {n:'Dragon Tiger',img:'/assets/images/indiangamesposters-04.webp'},
        {n:'Rummy',img:'/assets/images/indian games posters-05.webp'},
        {n:'Lucky 7',img:'/assets/images/indian games posters-07.webp'},
        {n:'Bollywood Casino',img:'/assets/images/indian games posters-08.webp'},
        {n:'One Day Teen Patti',img:'/assets/images/indian games posters-09.webp'},
        {n:'Muflis Teen Patti',img:'/assets/images/indian games posters-10.webp'},
        {n:'2 Card Teen Patti',img:'/assets/images/indian games posters-11.webp'},
        {n:'Baccarat',img:'/assets/images/indian games posters-12.webp'},
        {n:'Queen Race',img:'/assets/images/indian games posters-13.webp'},
      ]},
    ],
  },
  'aviator': {
    title:'Aviator', color:'#ef4444',
    banner:'/assets/images/Aviator.jfif',
    filterTabs:['All'],
    sections:[
      { name:'Crash & Aviator', games:[
        {n:'Aviator',img:'/assets/images/Aviator.jfif'},
        {n:'Cricket X',img:'/assets/images/cricketx.webp'},
        {n:'Spaceman',img:'/assets/images/spaceman.webp'},
        {n:'Pilot',img:'/assets/images/pilot.webp'},
      ]},
    ],
  },
  'indian-card-games': {
    title:'Indian Card Games', color:'#f59e0b',
    banner:'/assets/images/Aura.webp',
    filterTabs:['All','Teen Patti','Andar Bahar'],
    sections:[
      { name:'Indian Card Games', games:[
        {n:'Teen Patti',img:'/assets/images/indian games posters-01.webp'},
        {n:'Andar Bahar',img:'/assets/images/indian games posters-02.webp'},
        {n:'Dragon Tiger',img:'/assets/images/indiangamesposters-04.webp'},
        {n:'Lucky 7',img:'/assets/images/indian games posters-07.webp'},
      ]},
    ],
  },
  'sportsbook': {
    title:'Sportsbook', color:'#22c55e',
    banner:'/assets/images/Casino.webp',
    filterTabs:['All','Soccer','Basketball','Baseball'],
    sections:[
      { name:'Top Events', games:[
        {n:'NBA Live',img:'/assets/images/thumb_3_4_custom(38).webp'},
        {n:'UEFA Champions',img:'/assets/images/thumb_3_4_custom(39).webp'},
        {n:'La Liga',img:'/assets/images/thumb_3_4_custom(40).webp'},
      ]},
    ],
  },
};

function GameCard({ game, color }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div style={{ minWidth:'117px', width:'117px', flex:'0 0 auto', cursor:'pointer', borderRadius:'8px', overflow:'hidden', border:'1px solid var(--border-primary)', position:'relative' }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div style={{ aspectRatio:'0.75', background:'var(--bg-secondary)', overflow:'hidden' }}>
        <img src={game.img} alt={game.n}
          style={{ width:'100%', height:'100%', objectFit:'cover', display:'block', transition:'transform 0.5s', transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
          onError={e => { e.target.style.display='none'; }} />
        {hovered && (
          <div style={{ position:'absolute', inset:0, background:'rgba(0,0,0,0.7)', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <button style={{ background:color, color:'#fff', border:'none', borderRadius:'6px', padding:'7px 16px', fontWeight:'700', fontSize:'12px', cursor:'pointer' }}>Play Now</button>
          </div>
        )}
      </div>
      <div style={{ padding:'4px 6px 6px', background:'var(--bg-primary)' }}>
        <div style={{ fontSize:'11px', fontWeight:'700', color:'var(--text-primary)', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>{game.n}</div>
      </div>
    </div>
  );
}

function GameSection({ section, color }) {
  const scrollRef = useRef(null);
  const scroll = (dir) => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: dir * 260, behavior:'smooth' });
  };
  return (
    <div style={{ marginBottom:'20px' }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'4px 8px', marginBottom:'6px' }}>
        <div style={{ display:'flex', alignItems:'center', gap:'6px' }}>
          <span style={{ fontSize:'15px', fontWeight:'800', color:'var(--text-primary)' }}>{section.name}</span>
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:'6px' }}>
          <button style={{ background:'transparent', border:'none', color:'var(--brand-primary)', fontWeight:'600', fontSize:'12px', cursor:'pointer', padding:'2px 6px' }}>See All</button>
          <button onClick={() => scroll(-1)} style={{ width:'24px', height:'24px', display:'flex', alignItems:'center', justifyContent:'center', background:'var(--bg-tertiary)', border:'1px solid var(--border-primary)', borderRadius:'4px', cursor:'pointer', color:'var(--brand-primary)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none"><path d="M15 6l-6 6 6 6"/></svg>
          </button>
          <button onClick={() => scroll(1)} style={{ width:'24px', height:'24px', display:'flex', alignItems:'center', justifyContent:'center', background:'var(--bg-tertiary)', border:'1px solid var(--border-primary)', borderRadius:'4px', cursor:'pointer', color:'var(--brand-primary)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none"><path d="M9 6l6 6-6 6"/></svg>
          </button>
        </div>
      </div>
      <div ref={scrollRef} style={{ display:'flex', gap:'8px', overflowX:'auto', scrollBehavior:'smooth', paddingBottom:'4px', paddingLeft:'6px', paddingRight:'6px' }} className="no-scrollbar">
        {section.games.map((g, i) => <GameCard key={i} game={g} color={color} />)}
      </div>
    </div>
  );
}

export default function CasinoGamePage({ pageKey }) {
  const [activeFilter, setActiveFilter] = useState(0);
  const config = GAME_CATEGORIES[pageKey] || GAME_CATEGORIES['live-casino'];

  return (
    <div style={{ paddingBottom:'20px' }}>
      {/* Page Banner - full width, matching HTML */}
      <div style={{ width:'100%', padding:'0 8px 0', marginBottom:'0' }}>
        <div style={{ position:'relative', overflow:'hidden', borderRadius:'6px', aspectRatio:'3.74' }}>
          <img src={config.banner} alt={config.title}
            style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }}
            onError={e => { e.target.style.background='var(--bg-secondary)'; e.target.style.display='none'; }} />
        </div>
      </div>

      {/* Filter Tabs - with SVG icons matching HTML */}
      <div style={{ width:'100%', overflowX:'auto', padding:'8px', display:'flex', gap:'8px' }} className="no-scrollbar">
        {config.filterTabs.map((tab, i) => {
          const isActive = i === activeFilter;
          return (
            <button key={tab} onClick={() => setActiveFilter(i)}
              style={{
                display:'flex', alignItems:'center', gap:'5px', padding:'6px 12px 6px 8px',
                borderRadius:'20px', cursor:'pointer', border:'none', whiteSpace:'nowrap',
                fontWeight:'700', fontSize:'12px', transition:'all 0.2s',
                background: isActive ? config.color : 'var(--bg-tertiary)',
                color: isActive ? '#fff' : 'var(--text-secondary)',
                boxShadow: isActive ? `0 2px 8px ${config.color}40` : 'none',
              }}>
              {TAB_ICONS[tab] && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  {TAB_ICONS[tab]}
                </svg>
              )}
              {tab}
            </button>
          );
        })}
      </div>

      {/* Game Sections with scroll arrows */}
      <div style={{ padding:'4px 0' }}>
        {config.sections.map((section, i) => (
          <GameSection key={i} section={section} color={config.color} />
        ))}
      </div>

      {/* Provider Logos */}
      <div style={{ margin:'8px 8px 0', padding:'14px', background:'var(--bg-secondary)', borderRadius:'8px', border:'1px solid var(--border-primary)' }}>
        <h3 style={{ margin:'0 0 10px', fontSize:'11px', fontWeight:'700', color:'var(--text-muted)', textTransform:'uppercase', letterSpacing:'1px' }}>Game Providers</h3>
        <div style={{ display:'flex', gap:'10px', overflowX:'auto', alignItems:'center' }} className="no-scrollbar">
          {PROVIDERS.map(p => (
            <div key={p.name} style={{ minWidth:'70px', height:'32px', display:'flex', alignItems:'center', justifyContent:'center', padding:'4px 8px', background:'var(--bg-primary)', borderRadius:'6px', border:'1px solid var(--border-primary)' }}>
              <img src={p.img} alt={p.name} style={{ height:'20px', maxWidth:'70px', objectFit:'contain', filter:'brightness(0) invert(0.6)' }}
                onError={e => { e.target.parentNode.style.display='none'; }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
