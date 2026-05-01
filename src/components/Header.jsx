import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { topNavLinks } from '../data/navLinks';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

const IPL_ICON = (
  <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
    <circle cx="12" cy="12" r="10" fill="url(#iplGrad)"/>
    <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 1.5c1.5 0 3.2 2 4.1 5.5H7.9c.9-3.5 2.6-5.5 4.1-5.5zm-5.4 7H5.2a8.5 8.5 0 0 1 3.3-4.8C7.5 7 6.8 8.6 6.6 10.5zm-1.4 1.5h2.3c0 .5 0 1 .1 1.5H5.2a8.5 8.5 0 0 1 0-1.5zm1.4 3h1.8c.3 1.5.8 2.8 1.5 3.8a8.5 8.5 0 0 1-3.3-3.8zm4.4 4.1c-1.5 0-3.2-2-4.1-5.5h8.2c-.9 3.5-2.6 5.5-4.1 5.5zm2.4-.3c.7-1 1.2-2.3 1.5-3.8h1.8a8.5 8.5 0 0 1-3.3 3.8zm2-5.3c0-.5.1-1 .1-1.5h2.3a8.5 8.5 0 0 1 0 1.5h-2.4zm.2-3c-.2-1.9-.9-3.5-1.9-4.8a8.5 8.5 0 0 1 3.3 4.8h-1.4z" fill="white"/>
    <defs><linearGradient id="iplGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop stopColor="#7c3aed"/><stop offset="1" stopColor="#4338ca"/></linearGradient></defs>
  </svg>
);

const NAV_ICONS = {
  home: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" height="16" width="16"><path d="M400 0L176 0c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8L24 64C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9L192 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-26.1 0C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24L446.4 64c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0z"/></svg>),
  cricket: (<svg width="16" height="16" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M4.36255 16.7108C4.35063 16.7037 4.34109 16.6966 4.32917 16.6895C3.88333 16.4077 3.4518 16.107 3.05842 15.7566C2.91299 15.6263 2.77709 15.489 2.63404 15.3564C2.59828 15.3256 2.61974 15.3067 2.63642 15.283C2.81524 15.0533 2.99643 14.8213 3.17524 14.5916C3.92148 13.635 4.6701 12.676 5.41634 11.7194C6.27225 10.6231 7.12578 9.52678 7.98169 8.43047C8.8066 7.37204 9.6339 6.31125 10.4588 5.25282C11.329 4.14231 12.1969 3.02942 13.0647 1.9189C13.2292 1.70816 13.3961 1.49506 13.5582 1.28195C13.5797 1.25354 13.5916 1.24644 13.6274 1.26538C13.9468 1.45244 14.2472 1.67028 14.5333 1.90233C14.6692 2.01125 14.8123 2.1107 14.9458 2.22199C15.0817 2.34038 15.2128 2.46351 15.3439 2.58663C15.3773 2.61742 15.3535 2.63162 15.3368 2.65293C15.1008 2.95602 14.8623 3.26147 14.6263 3.56455C13.9254 4.46433 13.222 5.36411 12.5211 6.26389C11.7343 7.27259 10.9476 8.28129 10.1584 9.29C9.42648 10.2277 8.69693 11.1653 7.965 12.103C7.12101 13.1827 6.2794 14.2648 5.43542 15.3446C5.08971 15.7874 4.7464 16.2278 4.40069 16.6706C4.39116 16.6848 4.38401 16.7037 4.36255 16.7108Z"/></svg>),
  football: (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 13v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>),
  tennis: (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.19 16.4C5.4 15.16 4.92 13.63 4.92 12s.48-3.16 1.27-4.4C7.27 8.87 7.79 10.37 7.79 12s-.52 3.13-1.6 4.4zm2.26 2.11c.95-1.4 1.5-3.12 1.5-4.51 0-1.39-.55-3.11-1.5-4.51C9.46 8.58 10.69 8 12 8s2.54.58 3.55 1.49c-.95 1.4-1.5 3.12-1.5 4.51 0 1.39.55 3.11 1.5 4.51C14.54 19.42 13.31 20 12 20s-2.54-.58-3.55-1.49zm7.36-1.11C14.73 16 14.21 14.63 14.21 12s.52-3.13 1.6-4.4c.79 1.24 1.27 2.77 1.27 4.4s-.48 3.16-1.27 4.4z"/></svg>),
  horse: (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 4h-3V3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1H8C5.79 4 4 5.79 4 8v6c0 1.86 1.28 3.41 3 3.86V20H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1h-2v-2.14c1.72-.45 3-2 3-3.86V8c0-2.21-1.79-4-4-4z"/></svg>),
  dog: (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10V10.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zM20 9l-1.5 3L17 9h-1.5l2.25 6H19l2.25-6H20z"/></svg>),
  aura: (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L9.5 8.5 3 9.27l5 4.87-1.18 6.88L12 17.77l5.18 3.25L16 14.14l5-4.87-6.5-.77L12 2z"/></svg>),
  casino: (<svg fill="currentColor" viewBox="0 0 96 96" height="16" width="16"><path d="M62.8 7.2h-1.2L48 12 34.401 7.2c-2.4-.8-5.199.801-5.6 3.6v10c0 2.798 2.4 4.8 4.8 4.8h1.2l13.2-6 13.598 6c2.8.8 5.2-.802 6-3.6V12c0-2.799-2.4-4.8-4.8-4.8m-21.6 75.6-18-60c-1.2-2.4-3.6-3.6-6.399-2.799l-6 2.001c-2.001.4-3.201 2.4-3.201 4.401l-3.6 57.6c0 2.8 2.001 4.8 4.401 5.2h27.999c2.799 0 4.8-2.002 4.8-4.8.399-.4 0-1.204 0-1.603m47.202-56.4c0-2-1.2-3.6-3.2-4.4l-6-2.4c-2.4-.802-5.2.398-6 2.798l-18 60c-.802 2.4.8 5.2 3.2 6 .4 0 .801.4 1.6.4h27.6c2.798 0 4.8-2.002 4.8-4.8z"/></svg>),
  slots: (<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" height="16" width="16"><path fillRule="evenodd" d="M7 3C4.23858 3 2 5.23858 2 8v13h17v-6h4V8.18633c0.4534-0.31624 0.75-0.84164 0.75-1.43633C23.75 5.7835 22.9665 5 22 5s-1.75 0.7835-1.75 1.75c0 0.59469 0.2966 1.12009 0.75 1.43633V13h-2V8c0-2.76142-2.2386-5-5-5H7Zm-3 7h3v4H4v-4Zm5 4v-4h3v4H9Zm5 0h3v-4h-3v4Z" clipRule="evenodd"/></svg>),
  crash: (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>),
  fish: (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm-1-11v6l5-3-5-3z"/></svg>),
  trophy: (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>),
  ipl: IPL_ICON,
  default: (<i className="bi bi-circle" style={{ fontSize: '14px' }}></i>)
};

function getIcon(name) {
  return NAV_ICONS[name] || NAV_ICONS.default;
}

function getDateTimeString() {
  return new Date().toLocaleString('en-IN', {
    month: 'short', day: '2-digit', year: 'numeric',
    timeZone: 'Asia/Calcutta'
  }) + ' Asia/Calcutta';
}

function getClockString() {
  return new Date().toLocaleTimeString('en-IN', {
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: false, timeZone: 'Asia/Calcutta'
  });
}

export default function Header() {
  const { isLoggedIn, user, logout } = useAuth();
  const [clock, setClock] = useState(getClockString());
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setClock(getClockString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <header className="topbar" id="mainHeader">
        {/* Top bar row */}
        <div style={{ width:'100%', paddingLeft:'8px', background:'var(--bg-header)', height:'54px', display:'flex', alignItems:'center', justifyContent:'space-between', gap:'4px', position:'relative' }} id="header_body">
          {/* Left: Hamburger + Logo */}
          <div style={{ display:'flex', alignItems:'center', gap:'8px' }}>
            <button className="btn btn-dark btn-sm d-lg-none rounded-pill" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu" aria-controls="mobileMenu">
              <i className="bi bi-list"></i>
            </button>
            <Link to="/" aria-label="REDDY247 Logo" id="REDDY247-logo">
              <img src="/assets/images/logo.png" alt="REDDY247" style={{ maxHeight:'45px', width:'auto' }} loading="lazy"
                onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />
              <div style={{ display:'none', alignItems:'center', fontWeight:900, fontSize:'22px', color:'var(--brand-primary)', letterSpacing:'1px' }}>
                REDDY<span style={{ color:'#fff' }}>247</span>
              </div>
            </Link>
          </div>

          {/* Center: Date/Time + Search */}
          <div className="d-none d-lg-flex align-items-center gap-3" style={{ flex:1, marginLeft:'16px' }}>
            <div className="top-meta">
              <div style={{ fontSize:'12px', fontWeight:'400', color:'#fff' }}>{getDateTimeString()}</div>
              <div style={{ color:'var(--text-secondary)', fontSize:'12px' }} id="clockText">{clock}</div>
            </div>
            <div style={{ position:'relative', maxWidth:'400px', flex:1 }}>
              <label htmlFor="searchEventsDesktop" className="sr-only">Search Events</label>
              <input type="text" id="searchEventsDesktop" placeholder="Search Events (At least 3 letters)..."
                style={{ width:'100%', padding:'8px 8px 8px 36px', borderRadius:'9999px', border:'1px solid var(--border-primary)', background:'var(--bg-primary)', color:'var(--text-primary)', fontSize:'13px', outline:'none' }} />
              <svg fill="var(--icon-color-primary)" style={{ position:'absolute', top:'50%', left:'12px', transform:'translateY(-50%)' }} width="16" height="16" viewBox="0 0 24 24">
                <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"/>
              </svg>
            </div>
          </div>

          {/* Right: Auth buttons */}
          <div style={{ display:'flex', alignItems:'center', gap:'6px', paddingRight:'8px' }}>
            {isLoggedIn ? (
              <div style={{ display:'flex', alignItems:'center', gap:'6px' }}>
                {/* Login as + Last logged in */}
                <div className="d-none d-lg-flex flex-column" style={{ fontSize:'11px', lineHeight:1.4, marginRight:'4px' }}>
                  <span style={{ color:'var(--text-secondary)' }}>Login as <strong style={{ color:'#fff' }}>+91-{user?.username}</strong></span>
                  <span style={{ color:'var(--text-muted)', fontSize:'10px' }}>Last logged in {user?.lastLogin || new Date().toLocaleDateString('en-IN') + ', ' + new Date().toLocaleTimeString('en-IN', { hour12: false })}</span>
                </div>
                {/* Available balance */}
                <div className="d-none d-lg-block" style={{ fontSize:'11px', color:'var(--text-secondary)', whiteSpace:'nowrap', marginRight:'4px' }}>
                  Available balance: <strong style={{ color:'#fff' }}>₹{user?.balance || '1,000'}</strong>
                </div>
                {/* Deposit button — green */}
                <Link to="/AfterLogin/Deposit" style={{ textDecoration:'none' }}>
                  <button style={{ background:'#22c55e', color:'#000', border:'none', borderRadius:'9999px', padding:'7px 14px', fontWeight:'800', fontSize:'12px', display:'flex', alignItems:'center', gap:'5px', cursor:'pointer', whiteSpace:'nowrap' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                    Deposit
                  </button>
                </Link>
                {/* Withdraw button — orange */}
                <Link to="/AfterLogin/Withdrawal" style={{ textDecoration:'none' }}>
                  <button style={{ background:'var(--brand-primary)', color:'#000', border:'none', borderRadius:'9999px', padding:'7px 14px', fontWeight:'800', fontSize:'12px', display:'flex', alignItems:'center', gap:'5px', cursor:'pointer', whiteSpace:'nowrap' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    Withdraw
                  </button>
                </Link>
                {/* Notification bell */}
                <button style={{ background:'transparent', border:'none', color:'var(--brand-primary)', cursor:'pointer', position:'relative', padding:'4px' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
                </button>
                {/* Account button + dropdown */}
                <div className="dropdown">
                  <button className="dropdown-toggle" data-bs-toggle="dropdown" style={{ background:'var(--brand-primary)', color:'#000', border:'none', borderRadius:'9999px', padding:'7px 14px', fontWeight:'800', fontSize:'12px', display:'flex', alignItems:'center', gap:'5px', cursor:'pointer' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
                    Account
                  </button>
                  <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end" style={{ background:'var(--bg-secondary)', border:'1px solid var(--border-primary)', minWidth:'200px' }}>
                    <li><Link className="dropdown-item" to="/AfterLogin">My Account</Link></li>
                    <li><Link className="dropdown-item" to="/AfterLogin/AccountStatement">Account Statement</Link></li>
                    <li><Link className="dropdown-item" to="/AfterLogin/ProfitLoss">Profit &amp; Loss</Link></li>
                    <li><Link className="dropdown-item" to="/AfterLogin/BetHistory">Bet History</Link></li>
                    <li><Link className="dropdown-item" to="/AfterLogin/OpenBets">Open Bets</Link></li>
                    <li><Link className="dropdown-item" to="/AfterLogin/Transactions">Transactions</Link></li>
                    <li><Link className="dropdown-item" to="/AfterLogin/Bonus">Bonus</Link></li>
                    <li><Link className="dropdown-item" to="/AfterLogin/ReferEarn">Refer &amp; Earn</Link></li>
                    <li><Link className="dropdown-item" to="/AfterLogin/Settings">Settings</Link></li>
                    <li><Link className="dropdown-item" to="/AfterLogin/ChangePassword">Change Password</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><button className="dropdown-item text-danger" onClick={logout}>Logout</button></li>
                  </ul>
                </div>
              </div>
            ) : (
              <>
                <div className="d-none d-lg-flex align-items-center gap-2">
                  <button className="btn-login" type="button" onClick={() => setShowLogin(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M15 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"/>
                      <path d="M21 12h-13l3 -3"/><path d="M11 15l-3 -3"/>
                    </svg>
                    <span>Log In</span>
                  </button>
                  <button className="btn-signup" type="button" onClick={() => setShowSignup(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" stroke="white">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/>
                      <path d="M16 19h6"/><path d="M19 16v6"/>
                      <path d="M6 21v-2a4 4 0 0 1 4 -4h4"/>
                    </svg>
                    <span style={{ color:'#fff' }}>Sign Up</span>
                  </button>
                  <button className="btn btn-dark btn-sm rounded-pill" onClick={() => {}}>EN</button>
                </div>
                <div className="d-flex d-lg-none align-items-center gap-1">
                  <button className="btn-login-mobile" onClick={() => setShowLogin(true)}>Log In</button>
                  <button className="btn-signup-mobile" onClick={() => setShowSignup(true)}>Sign Up</button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Second Nav Row — Sports scrollable bar */}
        <div className="nav-menu-bar">
          {topNavLinks.map((link) => (
            <NavLink key={link.key ?? (link.title + link.href)} to={link.href}
              className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''} ${link.special ? 'nav-link-ipl' : ''}`}
              title={link.title} end={link.href === '/'}
            >
              {getIcon(link.icon)}
              <span style={{ fontFamily:'Lato, sans-serif', fontSize:'12px', color: link.special ? '#a78bfa' : undefined }}>{link.title}</span>
            </NavLink>
          ))}
        </div>
      </header>

      {/* Mobile Offcanvas Menu */}
      <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="mobileMenu" aria-labelledby="mobileMenuLabel">
        <div className="offcanvas-header">
          <Link to="/" className="text-decoration-none" data-bs-dismiss="offcanvas">
            <span style={{ fontWeight:900, fontSize:'20px', color:'var(--brand-primary)' }}>REDDY<span style={{ color:'#fff' }}>247</span></span>
          </Link>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body p-0" style={{ overflowY:'auto' }}>
          <hr className="border-secondary m-0" />
          <div className="list-group list-group-flush">
            {/* Aviator highlight */}
            <Link to="/aviator" className="list-group-item list-group-item-action list-group-item-dark d-flex align-items-center gap-2" data-bs-dismiss="offcanvas">
              <i className="bi bi-airplane-fill" style={{ color:'#ef4444' }}></i>
              <strong>Aviator</strong>
            </Link>

            {/* SPORTS */}
            <div className="list-group-item list-group-item-dark py-1"><small className="text-secondary fw-bold">SPORTS</small></div>
            {[
              { label:'Cricket', href:'/cricket' },
              { label:'Football', href:'/football' },
              { label:'Tennis', href:'/tennis' },
              { label:'Horse Racing', href:'/horse-racing' },
              { label:'Greyhound Racing', href:'/greyhound-racing' },
            ].map(s => (
              <Link key={s.href} to={s.href} className="list-group-item list-group-item-action list-group-item-dark" data-bs-dismiss="offcanvas">
                <i className="bi bi-trophy me-2" style={{ color:'var(--brand-primary)' }}></i>{s.label}
              </Link>
            ))}

            {/* CASINO */}
            <div className="list-group-item list-group-item-dark py-1"><small className="text-secondary fw-bold">CASINO</small></div>
            {[
              { label:'Indian Card Games', href:'/aura' },
              { label:'Live Casino', href:'/live-casino' },
              { label:'Slot Games', href:'/slots' },
              { label:'Sportsbook(80+)', href:'/sportsbook' },
            ].map(g => (
              <Link key={g.href} to={g.href} className="list-group-item list-group-item-action list-group-item-dark" data-bs-dismiss="offcanvas">
                <i className="bi bi-dice-5 me-2" style={{ color:'var(--brand-primary)' }}></i>{g.label}
              </Link>
            ))}

            {/* OTHERS */}
            <div className="list-group-item list-group-item-dark py-1"><small className="text-secondary fw-bold">OTHERS</small></div>
            {[
              { label:'Offers', href:'/bonus', icon:'bi-gift' },
              { label:'Download APK', href:'/download-apk', icon:'bi-android2' },
              { label:'Blogs & News', href:'/blogs', icon:'bi-newspaper' },
            ].map(p => (
              <Link key={p.href} to={p.href} className="list-group-item list-group-item-action list-group-item-dark" data-bs-dismiss="offcanvas">
                <i className={`${p.icon} me-2`}></i>{p.label}
              </Link>
            ))}

            {/* HELP & SUPPORT */}
            <div className="list-group-item list-group-item-dark py-1"><small className="text-secondary fw-bold">HELP &amp; SUPPORT</small></div>
            {[
              { label:'Responsible Gaming', href:'/responsible-gaming' },
              { label:'Privacy Policy', href:'/privacy-policy' },
              { label:'Rules & Regulations', href:'/rules' },
            ].map(p => (
              <Link key={p.href} to={p.href} className="list-group-item list-group-item-action list-group-item-dark" data-bs-dismiss="offcanvas">
                <i className="bi bi-chevron-right me-2"></i>{p.label}
              </Link>
            ))}

            {/* Language + Contact */}
            <div className="list-group-item list-group-item-dark d-flex align-items-center justify-content-between">
              <span className="text-secondary" style={{ fontSize:'13px' }}>Language</span>
              <button className="btn btn-dark btn-sm rounded-pill" style={{ fontSize:'12px' }}>EN</button>
            </div>
            <div className="list-group-item list-group-item-dark d-flex gap-3 align-items-center">
              <span className="text-secondary" style={{ fontSize:'12px' }}>Contact:</span>
              <a href="https://wa.me/918888888888" target="_blank" rel="noreferrer" className="text-success">
                <i className="bi bi-whatsapp fs-5"></i>
              </a>
              <a href="https://t.me/reddy247" target="_blank" rel="noreferrer" className="text-info">
                <i className="bi bi-telegram fs-5"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} onSwitchToSignup={() => { setShowLogin(false); setShowSignup(true); }} />}
      {showSignup && <SignupModal onClose={() => setShowSignup(false)} onSwitchToLogin={() => { setShowSignup(false); setShowLogin(true); }} />}
    </>
  );
}
