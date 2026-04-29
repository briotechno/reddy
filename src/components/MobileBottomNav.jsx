import React from 'react';
import { NavLink } from 'react-router-dom';
import { mobileBottomNavLinks } from '../data/navLinks';

export default function MobileBottomNav() {
  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile bottom navigation">
      {mobileBottomNavLinks.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          end={item.href === '/'}
          className={({ isActive }) => `mobile-nav-item${isActive ? ' active' : ''}`}
          aria-label={item.title}
        >
          <i className={item.icon} style={{ fontSize: '20px' }}></i>
          <span style={{ fontSize: '10px' }}>{item.title}</span>
        </NavLink>
      ))}
    </nav>
  );
}
