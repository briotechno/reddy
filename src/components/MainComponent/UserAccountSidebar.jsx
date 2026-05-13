import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export const UserAccountSidebar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="accountSidebar" aria-labelledby="accountSidebarLabel" style={{ width: '300px', borderLeft: '1px solid #333' }}>
      <div className="offcanvas-header" style={{ background: '#27272a', borderBottom: '1px solid #444' }}>
        <h5 className="offcanvas-title d-flex align-items-center gap-2" id="accountSidebarLabel">
          <i className="bi bi-person-circle text-warning"></i>
          My Account
        </h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>

      <div className="offcanvas-body p-0" style={{ background: '#18181b' }}>
        {/* User Quick Info */}
        <div style={{ padding: '20px', background: 'linear-gradient(180deg, #27272a 0%, #18181b 100%)', textAlign: 'center', borderBottom: '1px solid #333' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'rgba(251, 146, 60, 0.1)',
            border: '2px solid #fb923c',
            margin: '0 auto 12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
            color: '#fb923c'
          }}>
            <i className="bi bi-person"></i>
          </div>
          <h6 style={{ margin: 0, fontWeight: '700', color: '#fff' }}>{user?.username}</h6>
          <p style={{ margin: '4px 0 0', fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>UID: 827394</p>

          <div style={{ marginTop: '16px', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', padding: '10px' }}>
            <span style={{ display: 'block', fontSize: '10px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', fontWeight: '800' }}>Total Balance</span>
            <span style={{ fontSize: '20px', fontWeight: '800', color: '#fb923c' }}>₹{user?.balance || '0.00'}</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="list-group list-group-flush mt-2">
          {[
            { label: 'Profile', icon: 'bi-person-badge', href: '/settings' },
            { label: 'Account Statement', icon: 'bi-file-earmark-text', href: '/account-statement' },
            { label: 'Current Bets', icon: 'bi-list-ul', href: '/current-bets' },
            { label: 'Bet History', icon: 'bi-clock-history', href: '/bet-history' },
            { label: 'Profit & Loss', icon: 'bi-graph-up-arrow', href: '/profit-loss' },
            { label: 'Change Password', icon: 'bi-shield-lock', href: '/change-password' },
            { label: 'Messages', icon: 'bi-chat-dots', href: '/messages' },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="list-group-item list-group-item-action list-group-item-dark d-flex align-items-center gap-3 py-3"
              data-bs-dismiss="offcanvas"
              style={{ background: 'transparent', borderBottom: '1px solid rgba(255,255,255,0.03)', fontSize: '14px' }}
            >
              <i className={`bi ${item.icon}`} style={{ color: '#fb923c', fontSize: '18px' }}></i>
              <span>{item.label}</span>
              <i className="bi bi-chevron-right ms-auto" style={{ fontSize: '12px', opacity: 0.3 }}></i>
            </Link>
          ))}
        </div>

        {/* Logout Section */}
        <div style={{ padding: '20px' }}>
          <button
            onClick={logout}
            className="btn btn-outline-danger w-100 d-flex align-items-center justify-content-center gap-2"
            style={{ borderRadius: '8px', padding: '10px', fontWeight: '700' }}
            data-bs-dismiss="offcanvas"
          >
            <i className="bi bi-box-arrow-right"></i>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
