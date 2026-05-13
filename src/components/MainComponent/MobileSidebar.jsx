import React from 'react';
import { Link } from 'react-router-dom';

export const MobileSidebar = () => {
  return (
    <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="mobileMenu" aria-labelledby="mobileMenuLabel" style={{ width: '280px' }}>

      <div className="offcanvas-body p-0" style={{ overflowY: 'auto' }}>
        <hr className="border-secondary m-0" />
        <div className="list-group list-group-flush">
          {/* Aviator highlight */}
          <Link to="/aviator" className="list-group-item list-group-item-action list-group-item-dark d-flex align-items-center gap-2" data-bs-dismiss="offcanvas">
            <i className="bi bi-airplane-fill" style={{ color: '#ef4444' }}></i>
            <strong>Aviator</strong>
          </Link>

          {/* SPORTS */}
          <div className="list-group-item list-group-item-dark py-1"><small className="text-secondary fw-bold">SPORTS</small></div>
          {[
            { label: 'Cricket', href: '/cricket' },
            { label: 'Football', href: '/football' },
            { label: 'Tennis', href: '/tennis' },
            { label: 'Horse Racing', href: '/horse-racing' },
            { label: 'Greyhound Racing', href: '/greyhound-racing' },
          ].map(s => (
            <Link key={s.href} to={s.href} className="list-group-item list-group-item-action list-group-item-dark" data-bs-dismiss="offcanvas">
              <i className="bi bi-trophy me-2" style={{ color: 'var(--brand-primary)' }}></i>{s.label}
            </Link>
          ))}

          {/* CASINO */}
          <div className="list-group-item list-group-item-dark py-1"><small className="text-secondary fw-bold">CASINO</small></div>
          {[
            { label: 'Indian Card Games', href: '/aura' },
            { label: 'Live Casino', href: '/live-casino' },
            { label: 'Slot Games', href: '/slots' },
            { label: 'Sportsbook(80+)', href: '/sportsbook' },
          ].map(g => (
            <Link key={g.href} to={g.href} className="list-group-item list-group-item-action list-group-item-dark" data-bs-dismiss="offcanvas">
              <i className="bi bi-dice-5 me-2" style={{ color: 'var(--brand-primary)' }}></i>{g.label}
            </Link>
          ))}

          {/* OTHERS */}
          <div className="list-group-item list-group-item-dark py-1"><small className="text-secondary fw-bold">OTHERS</small></div>
          {[
            { label: 'Offers', href: '/offers', icon: 'bi-gift' },
            { label: 'Download APK', href: '/download-apk', icon: 'bi-android2' },
            { label: 'Blogs & News', href: '/blog-news', icon: 'bi-newspaper' },
          ].map(p => (
            <Link key={p.href} to={p.href} className="list-group-item list-group-item-action list-group-item-dark" data-bs-dismiss="offcanvas">
              <i className={`${p.icon} me-2`}></i>{p.label}
            </Link>
          ))}

          {/* HELP & SUPPORT */}
          <div className="list-group-item list-group-item-dark py-1"><small className="text-secondary fw-bold">HELP &amp; SUPPORT</small></div>
          {[
            { label: 'Responsible Gambling', href: '/responsible-gambling' },
            { label: 'Privacy Policy', href: '/privacy-policy' },
            { label: 'Rules & Regulations', href: '/rules-regulations' },
          ].map(p => (
            <Link key={p.href} to={p.href} className="list-group-item list-group-item-action list-group-item-dark" data-bs-dismiss="offcanvas">
              <i className="bi bi-chevron-right me-2"></i>{p.label}
            </Link>
          ))}

          {/* Contact Us Section */}
          <div className="list-group-item list-group-item-dark border-0 mt-4 text-center" style={{ background: 'transparent' }}>
            <h6 style={{ color: '#fff', fontWeight: '700', marginBottom: '15px', fontSize: '14px' }}>Contact Us</h6>
            <div className="d-flex gap-2 justify-content-center">
              <a href="https://wa.me/918888888888" target="_blank" rel="noreferrer" style={{ 
                background: '#18181b', 
                width: '42px', 
                height: '42px', 
                borderRadius: '8px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                textDecoration: 'none',
                color: 'var(--brand-primary)',
                fontSize: '20px',
                border: '1px solid rgba(255,255,255,0.05)'
              }}>
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="https://instagram.com/reddy247" target="_blank" rel="noreferrer" style={{ 
                background: '#18181b', 
                width: '42px', 
                height: '42px', 
                borderRadius: '8px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                textDecoration: 'none',
                color: 'var(--brand-primary)',
                fontSize: '20px',
                border: '1px solid rgba(255,255,255,0.05)'
              }}>
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://t.me/reddy247" target="_blank" rel="noreferrer" style={{ 
                background: '#18181b', 
                width: '42px', 
                height: '42px', 
                borderRadius: '8px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                textDecoration: 'none',
                color: 'var(--brand-primary)',
                fontSize: '20px',
                border: '1px solid rgba(255,255,255,0.05)'
              }}>
                <i className="bi bi-telegram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
