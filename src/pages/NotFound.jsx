import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '60px 24px' }}>
      <div style={{ fontSize: '80px', fontWeight: '900', color: 'var(--brand-primary)', lineHeight: 1 }}>404</div>
      <h1 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text-primary)', margin: '16px 0 8px' }}>Page Not Found</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/" style={{
        display: 'inline-block', background: 'var(--brand-primary)', color: '#000',
        fontWeight: '800', padding: '12px 28px', borderRadius: '8px', textDecoration: 'none',
        transition: 'opacity 0.2s',
      }}>
        Back to Home
      </Link>
    </div>
  );
}
