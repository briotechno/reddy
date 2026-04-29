import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-header)',
      borderTop: '1px solid var(--border-primary)',
      padding: '24px 16px 80px',
      marginTop: '32px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Top row: Logo + links */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'space-between', marginBottom: '20px' }}>
          {/* Brand */}
          <div style={{ minWidth: '160px' }}>
            <img src="/assets/images/logo.png" alt="REDDY247" style={{ height: '40px', marginBottom: '10px' }}
              onError={(e) => { e.target.style.display = 'none'; }} />
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '240px' }}>
              India's most trusted online betting platform. Bet responsibly. 18+.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>Quick Links</h4>
            {[
              { label: 'Cricket', href: '/cricket' },
              { label: 'Football', href: '/football' },
              { label: 'Live Casino', href: '/live-casino' },
              { label: 'Aviator', href: '/aviator' },
            ].map(l => (
              <div key={l.href} style={{ marginBottom: '6px' }}>
                <Link to={l.href} style={{ fontSize: '12px', color: 'var(--text-muted)', textDecoration: 'none' }}>{l.label}</Link>
              </div>
            ))}
          </div>

          {/* Support */}
          <div>
            <h4 style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>Support</h4>
            {[
              { label: 'Responsible Gaming', href: '/responsible-gaming' },
              { label: 'Privacy Policy', href: '/privacy-policy' },
              { label: 'Rules & Regulations', href: '/rules' },
              { label: 'Blogs & News', href: '/blogs' },
            ].map(l => (
              <div key={l.href} style={{ marginBottom: '6px' }}>
                <Link to={l.href} style={{ fontSize: '12px', color: 'var(--text-muted)', textDecoration: 'none' }}>{l.label}</Link>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>Contact</h4>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
              <a href="https://wa.me/918888888888" target="_blank" rel="noreferrer"
                style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none' }}>
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="https://t.me/reddy247" target="_blank" rel="noreferrer"
                style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#229ED9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none' }}>
                <i className="bi bi-telegram"></i>
              </a>
            </div>
            {/* Trust logos */}
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <img src="/assets/images/BeGambleAware.svg" alt="BeGambleAware" style={{ height: '24px', opacity: 0.6 }}
                onError={(e) => { e.target.style.display='none'; }} />
              <img src="/assets/images/gamblingCommission.svg" alt="Gambling Commission" style={{ height: '24px', opacity: 0.6 }}
                onError={(e) => { e.target.style.display='none'; }} />
            </div>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div style={{ borderTop: '1px solid var(--border-primary)', paddingTop: '14px', display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>© 2025 REDDY247. All rights reserved. 18+ | Play Responsibly.</span>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Licensed & Regulated</span>
        </div>
      </div>
    </footer>
  );
}
