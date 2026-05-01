import React from 'react';
import { Outlet, Navigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const MENU_ITEMS = [
  { to: '/AfterLogin', label: 'My Account', end: true },
  { to: '/AfterLogin/Deposit', label: 'Deposit' },
  { to: '/AfterLogin/Withdrawal', label: 'Withdrawal' },
  { to: '/AfterLogin/OpenBets', label: 'Open Bets' },
  { to: '/AfterLogin/BetHistory', label: 'Bet History' },
  { to: '/AfterLogin/ProfitLoss', label: 'Profit & Loss' },
  { to: '/AfterLogin/AccountStatement', label: 'Account Statement' },
  { to: '/AfterLogin/Transactions', label: 'Transactions' },
  { to: '/AfterLogin/TransferStatement', label: 'Transfer Statement' },
  { to: '/AfterLogin/BonusStatement', label: 'Bonus Statement' },
  { to: '/AfterLogin/Bonus', label: 'Bonus' },
  { to: '/AfterLogin/Campaigns', label: 'Campaigns' },
  { to: '/AfterLogin/Loseback', label: 'Loseback' },
  { to: '/AfterLogin/ReferEarn', label: 'Refer & Earn' },
  { to: '/AfterLogin/ChangePassword', label: 'Change Password' },
  { to: '/AfterLogin/TimeSetting', label: 'Time Setting' },
  { to: '/AfterLogin/Settings', label: 'Settings' },
];

export default function AfterLoginLayout() {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  if (!isLoggedIn) return <Navigate to="/" replace />;

  const currentPage = MENU_ITEMS.find(m => m.end
    ? location.pathname === m.to
    : location.pathname.startsWith(m.to));
  const pageName = currentPage?.label || 'My Account';

  return (
    <div style={{ padding: '8px 12px 80px', display: 'flex', gap: '0', flexDirection: 'column' }}>
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" style={{ padding: '8px 4px 10px', fontSize: '13px' }}>
        <ol style={{ background: 'transparent', margin: 0, padding: 0, display: 'flex', alignItems: 'center', gap: '6px', listStyle: 'none' }}>
          <li>
            <Link to="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
            </Link>
          </li>
          <li style={{ color: 'var(--text-muted)' }}>›</li>
          <li style={{ color: 'var(--brand-primary)', fontWeight: '600' }}>{pageName}</li>
        </ol>
      </nav>

      {/* Page Content */}
      <div style={{ background: 'var(--bg-secondary)', borderRadius: '8px', border: '1px solid var(--border-primary)', overflow: 'hidden' }}>
        <Outlet />
      </div>
    </div>
  );
}
