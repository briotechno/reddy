import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OVERVIEW_STATS = [
  { label: 'Campaign Hits', value: '0' },
  { label: 'Referred Users', value: '0' },
  { label: 'First Time Deposits (FTD)', value: '0' },
  { label: 'Total Deposits', value: '₹ 0' },
];

export default function CampaignsPage() {
  const [showOverview, setShowOverview] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [campaignName, setCampaignName] = useState('');
  const [campaignId, setCampaignId] = useState('');

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px', padding: '12px' }}>

      {/* Overview Card */}
      <div style={{
        background: 'var(--bg-secondary)', borderRadius: '10px',
        border: '1px solid var(--border-primary)', overflow: 'hidden'
      }}>
        {/* Card Header */}
        <div
          onClick={() => setShowOverview(!showOverview)}
          style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '13px', borderBottom: showOverview ? '1px solid var(--border-primary)' : 'none',
            cursor: 'pointer'
          }}
        >
          <div>
            <div style={{ fontSize: '14px', color: 'var(--text-primary)', fontWeight: '500' }}>Overview</div>
            <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '2px', letterSpacing: '0.3px' }}>
              See the performance of all your campaigns
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="var(--brand-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            style={{ transform: showOverview ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', flexShrink: 0 }}>
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>

        {/* Stats Grid */}
        {showOverview && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', padding: '10px 13px 12px' }}>
            {OVERVIEW_STATS.map((stat, i) => (
              <div
                key={i}
                style={{
                  gridColumn: i === OVERVIEW_STATS.length - 1 ? 'span 2' : 'span 1',
                  padding: '8px 10px', background: 'var(--bg-tertiary)', borderRadius: '6px',
                  border: '1px solid var(--border-primary)'
                }}
              >
                <div style={{ fontSize: '10px', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: '500', marginBottom: '4px' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '16px', fontWeight: '700', color: stat.label === 'Overall Commission' ? 'var(--brand-primary)' : 'var(--text-primary)' }}>
                  {stat.value}
                </div>
              </div>
            ))}
            {/* Overall Commission (full-width) */}
            <div style={{
              gridColumn: 'span 2',
              padding: '8px 10px', background: 'var(--bg-tertiary)', borderRadius: '6px',
              border: '1px solid var(--border-primary)'
            }}>
              <div style={{ fontSize: '10px', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: '500', marginBottom: '4px' }}>
                Overall Commission
              </div>
              <div style={{ fontSize: '16px', fontWeight: '700', color: 'var(--brand-primary)' }}>₹ 0</div>
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons Row */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
        {/* Filter Button */}
        <button style={{
          display: 'flex', alignItems: 'center', gap: '4px',
          padding: '5px 8px', height: '28px', borderRadius: '6px',
          border: '1px solid var(--brand-primary)', background: 'transparent',
          cursor: 'pointer', fontSize: '12px', fontWeight: '600', color: 'var(--brand-primary)'
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 5h20" /><path d="M6 12h12" /><path d="M9 19h6" />
          </svg>
          Filter
        </button>

        {/* Create Campaign Button */}
        <button
          onClick={() => setShowCreateModal(true)}
          style={{
            display: 'flex', alignItems: 'center', gap: '4px',
            padding: '5px 10px', height: '28px', borderRadius: '6px',
            border: '1px solid var(--border-primary)', background: 'var(--brand-primary)',
            cursor: 'pointer', fontSize: '12px', fontWeight: '600', color: '#fff'
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 18 18" fill="none">
            <path d="M9 17.49C8.36 17.49 7.85 16.97 7.85 16.34V1.66C7.85 1.03 8.36 0.51 9 0.51C9.64 0.51 10.15 1.03 10.15 1.66V16.34C10.15 16.97 9.64 17.49 9 17.49Z" fill="white" />
            <path d="M16.34 10.15H1.66C1.03 10.15 0.51 9.64 0.51 9C0.51 8.36 1.03 7.85 1.66 7.85H16.34C16.97 7.85 17.49 8.36 17.49 9C17.49 9.64 16.97 10.15 16.34 10.15Z" fill="white" />
          </svg>
          Create Campaign
        </button>
      </div>

      {/* Empty State */}
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', gap: '12px', padding: '40px 20px', textAlign: 'center'
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 45 45" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M28.17 21.19L32.99 18.34C34.74 17.31 35.35 14.99 34.34 13.2C33.32 11.41 31.06 10.79 29.31 11.83L24.49 14.67C22.74 15.71 22.14 18.02 23.15 19.81C24.16 21.6 26.42 22.22 28.17 21.19Z" fill="#8A8A8A" />
          <path fillRule="evenodd" clipRule="evenodd" d="M9.61 32.91L13.15 29.28L22.05 38.38C22.55 38.9 22.55 39.73 22.05 40.25L20.33 42.01C19.83 42.52 19.01 42.52 18.5 42.01L9.61 32.91Z" fill="#8A8A8A" />
          <path fillRule="evenodd" clipRule="evenodd" d="M3 31.7L2.1 30.11C0.57 27.39 1.49 23.89 4.14 22.33L8.96 19.48C15.17 15.31 19.39 10.45 22.31 5.38L34.95 27.77C29.19 27.82 22.97 29.12 16.34 32.54L11.51 35.38C8.86 36.95 5.44 36.01 3.9 33.3L3 31.7Z" fill="#C10B32" />
          <path fillRule="evenodd" clipRule="evenodd" d="M21.51 4.98C22.49 4.4 23.77 4.75 24.33 5.76L35.64 25.78C36.21 26.79 35.87 28.09 34.88 28.67C33.9 29.25 32.63 28.91 32.06 27.9L20.75 7.87C20.18 6.87 20.52 5.56 21.51 4.98Z" fill="#E28FA1" />
          <path fillRule="evenodd" clipRule="evenodd" d="M42.93 17.93C43.47 18.11 43.77 18.7 43.59 19.26C43.41 19.81 42.83 20.11 42.29 19.93L38.54 18.69C38 18.51 37.7 17.91 37.88 17.36C38.06 16.81 38.64 16.5 39.18 16.68L42.93 17.93ZM38.68 12.29C38.19 12.58 37.56 12.41 37.27 11.9C36.99 11.4 37.16 10.75 37.65 10.46L41.04 8.46C41.53 8.17 42.16 8.34 42.45 8.85C42.73 9.35 42.56 9.99 42.07 10.29L38.68 12.29ZM32.98 3.44C33.1 2.87 33.65 2.51 34.2 2.63C34.76 2.75 35.11 3.31 34.99 3.88L34.18 7.82C34.06 8.39 33.51 8.76 32.96 8.64C32.4 8.51 32.04 7.96 32.16 7.39L32.98 3.44Z" fill="#C10B32" />
        </svg>
        <span style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)' }}>
          You don't have any campaign
        </span>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', maxWidth: '300px', lineHeight: '1.5' }}>
          Create a campaign to track performance across different referral channels like WhatsApp or Telegram.
        </p>
        <button
          onClick={() => setShowCreateModal(true)}
          style={{
            padding: '10px 24px', borderRadius: '8px', border: 'none',
            background: 'var(--brand-primary)', color: '#fff',
            fontWeight: '700', fontSize: '13px', cursor: 'pointer'
          }}
        >
          + Create Campaign
        </button>
      </div>

      {/* Create Campaign Modal */}
      {showCreateModal && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
        }}
          onClick={() => setShowCreateModal(false)}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: 'var(--bg-secondary)', borderRadius: '12px',
              padding: '24px', width: '340px', border: '1px solid var(--border-primary)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>Create Campaign</h3>
              <button onClick={() => setShowCreateModal(false)} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '18px' }}>✕</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-secondary)', display: 'block', marginBottom: '6px' }}>Campaign Name</label>
                <input
                  value={campaignName}
                  onChange={e => setCampaignName(e.target.value)}
                  placeholder="e.g. Telegram Channel"
                  style={{
                    width: '100%', padding: '9px 12px', borderRadius: '8px', boxSizing: 'border-box',
                    background: 'var(--bg-tertiary)', border: '1px solid var(--border-primary)',
                    color: 'var(--text-primary)', fontSize: '13px', outline: 'none'
                  }}
                />
              </div>
              <div>
                <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-secondary)', display: 'block', marginBottom: '6px' }}>Campaign ID</label>
                <input
                  value={campaignId}
                  onChange={e => setCampaignId(e.target.value)}
                  placeholder="e.g. tg_channel_1"
                  style={{
                    width: '100%', padding: '9px 12px', borderRadius: '8px', boxSizing: 'border-box',
                    background: 'var(--bg-tertiary)', border: '1px solid var(--border-primary)',
                    color: 'var(--text-primary)', fontSize: '13px', outline: 'none'
                  }}
                />
              </div>
              <button
                onClick={() => { setShowCreateModal(false); setCampaignName(''); setCampaignId(''); }}
                style={{
                  width: '100%', padding: '11px', borderRadius: '8px', border: 'none',
                  background: 'var(--brand-primary)', color: '#fff',
                  fontWeight: '700', fontSize: '14px', cursor: 'pointer', marginTop: '4px'
                }}
              >
                Create Campaign
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
