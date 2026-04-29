import React from 'react';
import { NavLink } from 'react-router-dom';
import { sidebarLinks } from '../data/navLinks';

export default function LeftSidebar() {
  return (
    <aside className="left-sidebar" style={{ padding: '8px 0 8px 8px' }}>
      <ul className="sidebar-list">
        {sidebarLinks.map((group) => (
          <React.Fragment key={group.category}>
            <li style={{
              padding: '6px 16px',
              fontSize: '10px',
              fontWeight: '700',
              color: 'var(--text-muted)',
              letterSpacing: '1px',
              background: 'var(--bg-secondary)',
              borderBottom: '1px solid var(--border-primary)',
            }}>
              {group.category}
            </li>
            {group.items.map((item) => (
              <li key={item.href} style={{ width: '100%' }}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `sidebar-item-link${isActive ? ' text-warning fw-bold' : ''}`
                  }
                  style={({ isActive }) => isActive ? { color: 'var(--brand-primary)', opacity: 1 } : {}}
                >
                  <i className={item.icon} style={{ fontSize: '14px', color: 'var(--icon-color-primary)', minWidth: '18px' }}></i>
                  <span>{item.title}</span>
                </NavLink>
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
    </aside>
  );
}
