import React from 'react';
import { NavLink, Outlet, Navigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const MENU_ITEMS = [
  { to: '/AfterLogin', label: 'My Account', icon: 'bi-person-circle', end: true },
  { to: '/AfterLogin/Deposit', label: 'Deposit', icon: 'bi-wallet2' },
  { to: '/AfterLogin/Withdrawal', label: 'Withdrawal', icon: 'bi-cash-stack' },
  { to: '/AfterLogin/OpenBets', label: 'Open Bets', icon: 'bi-journals' },
  { to: '/AfterLogin/BetHistory', label: 'Bet History', icon: 'bi-clock-history' },
  { to: '/AfterLogin/ProfitLoss', label: 'Profit & Loss', icon: 'bi-graph-up-arrow' },
  { to: '/AfterLogin/AccountStatement', label: 'Account Statement', icon: 'bi-file-text' },
  { to: '/AfterLogin/Transactions', label: 'Transactions', icon: 'bi-arrow-left-right' },
  { to: '/AfterLogin/TransferStatement', label: 'Transfer Statement', icon: 'bi-send' },
  { to: '/AfterLogin/BonusStatement', label: 'Bonus Statement', icon: 'bi-gift' },
  { to: '/AfterLogin/Bonus', label: 'Bonus', icon: 'bi-bag-plus' },
  { to: '/AfterLogin/Campaigns', label: 'Campaigns', icon: 'bi-megaphone' },
  { to: '/AfterLogin/Loseback', label: 'Loseback', icon: 'bi-arrow-counterclockwise' },
  { to: '/AfterLogin/ReferEarn', label: 'Refer & Earn', icon: 'bi-person-plus' },
  { to: '/AfterLogin/ChangePassword', label: 'Change Password', icon: 'bi-shield-lock' },
  { to: '/AfterLogin/TimeSetting', label: 'Time Setting', icon: 'bi-clock' },
  { to: '/AfterLogin/Settings', label: 'Settings', icon: 'bi-gear' },
];

export default function AfterLoginLayout() {
  const { isLoggedIn, user } = useAuth();
  const location = useLocation();

  if (!isLoggedIn) return <Navigate to="/" replace />;

  const pathParts = location.pathname.split('/').filter(Boolean);
  const pageName = pathParts.length > 1
    ? MENU_ITEMS.find(m => m.to === location.pathname)?.label || pathParts[pathParts.length - 1]
    : 'My Account';

  return (
    <div style={{ padding:'16px 12px', display:'flex', gap:'16px', alignItems:'flex-start', flexWrap:'wrap' }}>
      {/* Account Sidebar */}
      <aside className="account-sidebar">
        {/* User Info */}
        <div style={{ textAlign:'center', padding:'20px 12px 16px', borderBottom:'1px solid var(--border-primary)', marginBottom:'12px' }}>
          <div style={{ width:'64px', height:'64px', borderRadius:'50%', background:'linear-gradient(135deg, var(--brand-primary), var(--brand-secondary))', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 10px', fontSize:'24px', fontWeight:'900', color:'#000' }}>
            {user?.username?.[0]?.toUpperCase() || 'U'}
          </div>
          <div style={{ fontWeight:'700', fontSize:'15px', color:'var(--text-primary)' }}>{user?.username}</div>
          <div style={{ fontSize:'11px', color:'var(--text-muted)', marginTop:'2px' }}>Verified Member</div>
          <div style={{ marginTop:'12px', background:'var(--bg-tertiary)', borderRadius:'8px', padding:'10px', border:'1px solid var(--border-primary)' }}>
            <div style={{ fontSize:'11px', color:'var(--text-muted)' }}>Available Balance</div>
            <div style={{ fontSize:'20px', fontWeight:'900', color:'var(--brand-primary)' }}>₹{user?.balance || '0.00'}</div>
          </div>
        </div>
        {/* Menu */}
        <nav>
          {MENU_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end}
              className={({ isActive }) => `account-menu-item${isActive ? ' active' : ''}`}>
              <i className={item.icon} style={{ fontSize:'16px' }}></i>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <div className="account-content-area" style={{ flex:1, minWidth:'240px' }}>
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" style={{ marginBottom:'16px', fontSize:'13px' }}>
          <ol className="breadcrumb" style={{ background:'transparent', margin:0, padding:0, display:'flex', alignItems:'center', gap:'6px', listStyle:'none' }}>
            <li><Link to="/" style={{ color:'var(--text-secondary)', textDecoration:'none' }}>🏠</Link></li>
            <li style={{ color:'var(--text-muted)' }}>›</li>
            <li style={{ color:'var(--brand-primary)', fontWeight:'600' }}>{pageName}</li>
          </ol>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}

