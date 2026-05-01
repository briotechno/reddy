import React, { useState } from 'react';

const ALL_BETS = [
  { id: '#BT8821', event: 'MI vs CSK', market: 'Match Winner', selection: 'MI', stake: '₹500', returns: '₹910', odds: '1.82', date: '28 Apr 2025', status: 'won' },
  { id: '#BT8820', event: 'Man City vs Arsenal', market: '1X2', selection: 'Man City', stake: '₹200', returns: '₹0', odds: '1.65', date: '27 Apr 2025', status: 'lost' },
  { id: '#BT8819', event: 'Djokovic vs Alcaraz', market: 'Winner', selection: 'Alcaraz', stake: '₹300', returns: '—', odds: '1.75', date: '29 Apr 2025', status: 'pending' },
  { id: '#BT8818', event: 'India vs England', market: 'Match Winner', selection: 'India', stake: '₹1000', returns: '₹1400', odds: '1.40', date: '26 Apr 2025', status: 'won' },
  { id: '#BT8817', event: 'RCB vs KKR', market: 'Total Runs', selection: 'Over 170', stake: '₹250', returns: '₹0', odds: '2.00', date: '25 Apr 2025', status: 'lost' },
];

const TABS = ['All', 'Won', 'Lost', 'Pending'];

export default function BetHistoryPage() {
  const [activeTab, setActiveTab] = useState('All');

  const filtered = activeTab === 'All' ? ALL_BETS : ALL_BETS.filter((b) => b.status === activeTab.toLowerCase());

  return (
    <div style={{ padding: '16px' }}>
      <h2 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '16px' }}>Bet History</h2>

      <div style={{ display: 'flex', gap: '6px', marginBottom: '16px', flexWrap: 'wrap' }}>
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '7px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '12px',
              background: activeTab === tab ? 'var(--brand-primary)' : 'var(--bg-tertiary)',
              color: activeTab === tab ? '#000' : 'var(--text-secondary)',
              border: '1px solid var(--border-primary)',
              transition: 'all 0.2s ease',
            }}
          >
            {tab}
            <span style={{ marginLeft: '6px', fontSize: '11px', opacity: 0.7 }}>
              {tab === 'All' ? ALL_BETS.length : ALL_BETS.filter((b) => b.status === tab.toLowerCase()).length}
            </span>
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
          <i className="bi bi-inbox" style={{ fontSize: '40px', display: 'block', marginBottom: '10px' }}></i>
          No bets in this category
        </div>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table className="custom-table">
            <thead>
              <tr>
                <th>Bet ID</th>
                <th>Event</th>
                <th>Selection</th>
                <th>Odds</th>
                <th>Stake</th>
                <th>Returns</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((b) => (
                <tr key={b.id}>
                  <td style={{ fontSize: '11px', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{b.id}</td>
                  <td>
                    <div style={{ fontWeight: '600', fontSize: '13px' }}>{b.event}</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{b.market}</div>
                  </td>
                  <td style={{ color: 'var(--brand-primary)', fontWeight: '600' }}>{b.selection}</td>
                  <td>{b.odds}</td>
                  <td>{b.stake}</td>
                  <td style={{ color: b.status === 'won' ? '#22c55e' : 'var(--text-secondary)', fontWeight: b.status === 'won' ? '700' : '400' }}>{b.returns}</td>
                  <td style={{ fontSize: '11px', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{b.date}</td>
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
      )}
    </div>
  );
}
