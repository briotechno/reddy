import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

const STATS = [
  { label: 'Total Bets', value: '124', icon: 'bi-bar-chart-fill', color: '#3b82f6' },
  { label: 'Won', value: '71', icon: 'bi-check-circle-fill', color: '#22c55e' },
  { label: 'Lost', value: '53', icon: 'bi-x-circle-fill', color: '#ef4444' },
  { label: 'Win Rate', value: '57%', icon: 'bi-trophy-fill', color: '#e58c1f' },
];

const RECENT_BETS = [
  { id: '#BT8821', event: 'MI vs CSK', market: 'Match Winner', stake: '₹500', returns: '₹910', status: 'won' },
  { id: '#BT8820', event: 'Man City vs Arsenal', market: '1X2', stake: '₹200', returns: '₹0', status: 'lost' },
  { id: '#BT8819', event: 'Djokovic vs Alcaraz', market: 'Winner', stake: '₹300', returns: '₹0', status: 'pending' },
];

export default function AccountOverview() {
  const { user } = useAuth();
  return (
    <div>
      <h2 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '20px' }}>
        My Account
      </h2>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px', marginBottom: '24px' }}>
        {STATS.map((s) => (
          <div key={s.label} style={{
            background: 'var(--bg-tertiary)', borderRadius: '10px',
            border: '1px solid var(--border-primary)', padding: '16px 12px',
            textAlign: 'center',
          }}>
            <i className={s.icon} style={{ fontSize: '24px', color: s.color, marginBottom: '8px', display: 'block' }}></i>
            <div style={{ fontSize: '22px', fontWeight: '900', color: 'var(--text-primary)' }}>{s.value}</div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <h3 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '12px' }}>Recent Bets</h3>
      <div style={{ overflowX: 'auto' }}>
        <table className="custom-table">
          <thead>
            <tr>
              <th>Bet ID</th>
              <th>Event</th>
              <th>Market</th>
              <th>Stake</th>
              <th>Returns</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {RECENT_BETS.map((b) => (
              <tr key={b.id}>
                <td style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{b.id}</td>
                <td>{b.event}</td>
                <td style={{ color: 'var(--text-secondary)' }}>{b.market}</td>
                <td>{b.stake}</td>
                <td style={{ color: b.status === 'won' ? '#22c55e' : 'var(--text-secondary)' }}>{b.returns}</td>
                <td>
                  <span className={`badge-${b.status === 'won' ? 'success' : b.status === 'lost' ? 'danger' : 'warning'}`}>
                    {b.status.charAt(0).toUpperCase() + b.status.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
